import { describe, expect, it } from 'vitest'
import { dnb } from '../data/dnb'
import { gameReducer, isGameOver, isRoundOver, newCoachGame, type GameState } from './gameReducer'
import { drawStageQuestion, type Question } from './questions'
import { LIVES, ROUND_QUESTIONS, nextStage } from './rules'

const listen: Question = {
  type: 'listen',
  correct: 'liquid',
  other: 'jumpup',
  options: ['liquid', 'jumpup'],
  clips: [{ appleId: 1, artist: 'A', title: 'T', previewPath: 'p1', subgenre: 'liquid' }],
}

/** Answers the current question and moves on, like the game does (next question, or next round). */
const answer = (state: GameState, right: boolean) => {
  const started = gameReducer(state, { type: 'clockStarted', at: 0 })
  const done = gameReducer(started, { type: 'answered', choice: right ? 'liquid' : 'jumpup', at: 1000 })
  if (isGameOver(done) || isRoundOver(done)) return done
  return gameReducer(done, { type: 'next', question: listen, used: [] })
}

describe('coach rounds', () => {
  it('ends a round after five counted answers', () => {
    let s = newCoachGame(listen, [], 0)
    for (let i = 0; i < ROUND_QUESTIONS - 1; i++) s = answer(s, true)
    expect(isRoundOver(s)).toBe(false)
    s = answer(s, true)
    expect(isRoundOver(s)).toBe(true)
    expect(s.results).toEqual([true, true, true, true, true])
  })

  it('does not count a free skip of a broken clip', () => {
    let s = newCoachGame(listen, [], 0)
    for (let i = 0; i < ROUND_QUESTIONS - 1; i++) s = answer(s, true)
    s = gameReducer(s, { type: 'clipBroken' })
    s = gameReducer(s, { type: 'answered', choice: null, at: 0 })
    expect(isRoundOver(s)).toBe(false)
  })

  it('keeps score and lives across rounds and ends after three mistakes in total', () => {
    let s = newCoachGame(listen, [], 0)
    for (let i = 0; i < ROUND_QUESTIONS; i++) s = answer(s, i !== 0) // one mistake in round 1
    const score = s.score
    s = gameReducer(s, { type: 'nextRound', question: listen, used: [], stage: 1 })
    expect(s.score).toBe(score)
    expect(s.lives).toBe(LIVES - 1)
    expect(s.coach).toMatchObject({ roundNo: 2, stage: 1, stageChange: 1, roundFrom: 5, roundCorrectFrom: 4 })
    s = answer(s, false)
    s = answer(s, false)
    expect(isGameOver(s)).toBe(true)
  })
})

describe('nextStage', () => {
  it('moves up after 4 or 5 right, down after 2 or fewer, else stays', () => {
    expect([5, 4, 3, 2, 0].map((c) => nextStage(1, c, 3))).toEqual([2, 2, 1, 0, 0])
  })

  it('stays within the available stages', () => {
    expect(nextStage(2, 5, 3)).toBe(2)
    expect(nextStage(0, 0, 3)).toBe(0)
  })
})

describe('drawStageQuestion', () => {
  it('asks only listening questions about the first stage subgenres at level 1', () => {
    const allowed = dnb.levels![0].subgenres
    for (let i = 0; i < 50; i++) {
      const { question } = drawStageQuestion(dnb, 0, [])
      expect(['listen', 'pick']).toContain(question.type)
      expect(allowed).toContain(question.correct)
    }
  })

  it('asks each knowledge question at most once per game', () => {
    const always = () => 0 // rng 0 → a knowledge question while one is open
    const ids: string[] = []
    let used: string[] = []
    for (;;) {
      const next = drawStageQuestion(dnb, 2, used, always)
      if (next.question.type !== 'knowledge') break
      ids.push(next.question.knowledge!.id)
      used = next.used
    }
    expect(new Set(ids).size).toBe(ids.length)
    expect([...ids].sort()).toEqual([...dnb.levels![2].knowledge!].sort())
  })

  it('builds "what do you hear?" questions from two subgenres with the clip of the right one', () => {
    let rolls = 0
    const rng = () => (rolls++ === 0 ? 0.9 : 0) // skip knowledge, then take the "hear" question
    const { question } = drawStageQuestion(dnb, 1, [], rng)
    expect(question.type).toBe('hear')
    expect(question.options).toHaveLength(2)
    expect(question.options).toContain(question.correct)
    expect(question.clips[0].subgenre).toBe(question.correct)
  })
})

describe('DnB data', () => {
  const levels = dnb.levels!
  const knowledge = dnb.knowledge!

  it('only refers to existing subgenres and knowledge questions', () => {
    for (const level of levels) {
      for (const key of level.subgenres) expect(dnb.subgenres[key], key).toBeDefined()
      for (const id of level.knowledge ?? []) expect(knowledge.find((k) => k.id === id), id).toBeDefined()
    }
  })

  it('uses every subgenre at the highest level', () => {
    expect([...levels.at(-1)!.subgenres].sort()).toEqual(Object.keys(dnb.subgenres).sort())
  })

  it('never lists a track under two subgenres', () => {
    const seen = new Map<number, string>()
    for (const [key, sub] of Object.entries(dnb.subgenres)) {
      for (const track of sub.tracks) {
        expect(seen.get(track.appleId), `${track.artist} – ${track.title}`).toBeUndefined()
        seen.set(track.appleId, key)
      }
    }
  })

  it('gives every knowledge question two answers', () => {
    for (const k of knowledge) expect(k.options, k.id).toHaveLength(2)
  })

  it('has a listening trait and tip for every subgenre', () => {
    for (const [key, sub] of Object.entries(dnb.subgenres)) {
      expect(sub.trait?.de, key).toBeTruthy()
      expect(sub.tip?.en, key).toBeTruthy()
    }
  })
})
