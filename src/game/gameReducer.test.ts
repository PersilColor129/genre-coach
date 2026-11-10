import { describe, expect, it } from 'vitest'
import { FAMILIES } from '../data'
import type { Subgenre } from '../data/types'
import { gameReducer, newGame, type GameState } from './gameReducer'
import { drawQuestion, type Question } from './questions'
import { multiplier, speedBonus } from './rules'

const question: Question = {
  type: 'listen',
  correct: 'acid',
  other: 'dub',
  options: ['acid', 'dub'],
  clips: [{ appleId: 1, artist: 'A', title: 'T', previewPath: 'p1', subgenre: 'acid' }],
}

const answerAfter = (state: GameState, choice: string | null, secs: number) => {
  const started = gameReducer(state, { type: 'clockStarted', at: 1000 })
  return gameReducer(started, { type: 'answered', choice, at: 1000 + secs * 1000 })
}
const next = (state: GameState) => gameReducer(state, { type: 'next', question, used: [] })

describe('rules', () => {
  it('raises the multiplier every three correct answers, up to ×4', () => {
    expect([0, 2, 3, 5, 6, 9, 30].map(multiplier)).toEqual([1, 1, 2, 2, 3, 4, 4])
  })

  it('gives up to 100 bonus points, falling to 0 after 10 seconds', () => {
    expect(speedBonus(0)).toBe(100)
    expect(speedBonus(2.5)).toBe(75)
    expect(speedBonus(10)).toBe(0)
    expect(speedBonus(3, 6)).toBe(50) // shorter bonus time at the master level
    expect(speedBonus(25)).toBe(0)
  })
})

describe('gameReducer', () => {
  it('scores a fast correct answer with base + bonus', () => {
    const s = answerAfter(newGame(question, []), 'acid', 1)
    expect(s.score).toBe(190)
    expect(s.streak).toBe(1)
    expect(s.correct).toBe(1)
    expect(s.lives).toBe(3)
    expect(s.round.outcome).toEqual({ kind: 'correct', gained: 190, bonus: 90, mult: 1 })
  })

  it('applies the multiplier from the streak before the answer', () => {
    let s = newGame(question, [])
    for (let i = 0; i < 3; i++) s = next(answerAfter(s, 'acid', 10))
    // three correct answers without bonus: 3 × 100, then ×2 kicks in
    expect(s.score).toBe(300)
    s = answerAfter(s, 'acid', 10)
    expect(s.score).toBe(500)
    expect(s.best).toBe(4)
  })

  it('gives no bonus when answering without playing the clip', () => {
    const s = gameReducer(newGame(question, []), { type: 'answered', choice: 'acid', at: 99999 })
    expect(s.score).toBe(100)
  })

  it('costs a life and resets the streak on a wrong answer', () => {
    let s = answerAfter(newGame(question, []), 'acid', 1)
    s = answerAfter(next(s), 'dub', 1)
    expect(s.lives).toBe(2)
    expect(s.streak).toBe(0)
    expect(s.best).toBe(1)
    expect(s.misses).toHaveLength(1)
    expect(s.round.outcome).toEqual({ kind: 'wrong' })
  })

  it('costs a life when skipping', () => {
    const s = answerAfter(newGame(question, []), null, 1)
    expect(s.lives).toBe(2)
    expect(s.round.outcome).toEqual({ kind: 'skipped' })
  })

  it('makes skipping free when the clip could not be played', () => {
    let s = gameReducer(newGame(question, []), { type: 'clipBroken' })
    s = answerAfter(s, null, 1)
    expect(s.lives).toBe(3)
    expect(s.misses).toHaveLength(0)
    expect(s.round.outcome).toEqual({ kind: 'skippedFree' })
  })

  it('ignores a second answer to the same question', () => {
    const once = answerAfter(newGame(question, []), 'dub', 1)
    const twice = gameReducer(once, { type: 'answered', choice: 'dub', at: 5000 })
    expect(twice).toBe(once)
  })

  it('counts questions', () => {
    expect(next(next(newGame(question, []))).n).toBe(3)
  })
})

describe('drawQuestion', () => {
  const subgenres: Record<string, Subgenre> = {
    a: { name: { de: 'A', en: 'A' }, desc: { de: '', en: '' }, tracks: [1, 2].map((i) => track(`a${i}`)) },
    b: { name: { de: 'B', en: 'B' }, desc: { de: '', en: '' }, tracks: [1, 2].map((i) => track(`b${i}`)) },
  }
  function track(previewPath: string) {
    return { appleId: 0, artist: '', title: '', previewPath }
  }

  it('does not repeat a clip until all clips of that subgenre were played', () => {
    let used: string[] = []
    const played: string[] = []
    for (let i = 0; i < 2; i++) {
      const r = drawQuestion(subgenres, used, () => 0.1) // always "listen", correct = b
      played.push(r.question.clips[0].previewPath)
      used = r.used
    }
    expect(new Set(played).size).toBe(2)
    const third = drawQuestion(subgenres, used, () => 0.1)
    expect(['b1', 'b2']).toContain(third.question.clips[0].previewPath)
  })

  it('builds "pick" questions with one clip of each subgenre', () => {
    const { question: q } = drawQuestion(subgenres, [], () => 0.9)
    expect(q.type).toBe('pick')
    expect(q.clips.map((c) => c.subgenre).sort()).toEqual(['a', 'b'])
  })
})

describe('genre data', () => {
  it.each(FAMILIES.map((f) => [f.slug, f] as const))('%s: every subgenre has texts and at least 2 tracks', (_, f) => {
    for (const [key, g] of Object.entries(f.subgenres)) {
      expect(g.name.de && g.name.en && g.desc.de && g.desc.en, key).toBeTruthy()
      expect(g.tracks.length, key).toBeGreaterThanOrEqual(2)
    }
  })

  it('has the expected number of subgenres per game', () => {
    // DnB: 8 from the old version + Intelligent, Darkstep, Techstep, Drumfunk (Phase 3)
    expect(FAMILIES.map((f) => Object.keys(f.subgenres).length)).toEqual([12, 18, 18])
  })
})
