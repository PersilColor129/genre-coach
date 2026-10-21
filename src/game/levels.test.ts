import { describe, expect, it } from 'vitest'
import { dnb } from '../data/dnb'
import { gameReducer, isGameOver, newLevelGame, type GameState } from './gameReducer'
import { applyResult, isUnlocked } from './levelProgress'
import { drawLevelQuestion, type Question } from './questions'
import { LEVEL_QUESTIONS, percent } from './rules'

const listen: Question = {
  type: 'listen',
  correct: 'liquid',
  other: 'jumpup',
  options: ['liquid', 'jumpup'],
  clips: [{ appleId: 1, artist: 'A', title: 'T', previewPath: 'p1', subgenre: 'liquid' }],
}

const answer = (state: GameState, choice: string | null) => {
  const started = gameReducer(state, { type: 'clockStarted', at: 0 })
  const done = gameReducer(started, { type: 'answered', choice, at: 1000 })
  return isGameOver(done) ? done : gameReducer(done, { type: 'next', question: listen, used: [] })
}

describe('level rounds', () => {
  it('cost no lives and end after the fixed number of questions', () => {
    let s = newLevelGame(listen, [], LEVEL_QUESTIONS)
    for (let i = 0; i < LEVEL_QUESTIONS - 1; i++) s = answer(s, i % 2 ? 'jumpup' : 'liquid')
    expect(s.lives).toBeNull()
    expect(isGameOver(s)).toBe(false)
    s = answer(s, null)
    expect(isGameOver(s)).toBe(true)
    expect(s.correct).toBe(5)
    expect(s.misses).toHaveLength(5)
  })

  it('does not count a free skip of a broken clip', () => {
    let s = newLevelGame(listen, [], 2)
    s = gameReducer(s, { type: 'clipBroken' })
    s = gameReducer(s, { type: 'answered', choice: null, at: 0 })
    expect(s.scored).toBe(0)
    expect(isGameOver(s)).toBe(false)
  })

  it('rounds the result to whole percent', () => {
    expect(percent(7, 10)).toBe(70)
    expect(percent(2, 3)).toBe(67)
  })
})

describe('drawLevelQuestion', () => {
  it('only uses the subgenres of the level', () => {
    const allowed = dnb.levels![0].subgenres
    for (let i = 0; i < 50; i++) {
      const { question } = drawLevelQuestion(dnb, 0, [])
      expect(question.type).not.toBe('knowledge') // level 1 has no knowledge questions
      expect(allowed).toContain(question.correct)
      expect(allowed).toContain(question.other)
    }
  })

  it('asks each knowledge question at most once per round', () => {
    const always = () => 0 // rng 0 → always picks a knowledge question while one is open
    const first = drawLevelQuestion(dnb, 2, [], always)
    const second = drawLevelQuestion(dnb, 2, first.used, always)
    const third = drawLevelQuestion(dnb, 2, second.used, always)
    expect(first.question.type).toBe('knowledge')
    expect(second.question.type).toBe('knowledge')
    expect(second.question.knowledge!.id).not.toBe(first.question.knowledge!.id)
    expect(third.question.type).not.toBe('knowledge')
  })

  it('shuffles the options and keeps the right answer findable', () => {
    const { question } = drawLevelQuestion(dnb, 1, [], () => 0)
    expect([...question.options].sort()).toEqual(['0', '1', '2', '3'])
    expect(question.correct).toBe('0')
  })
})

describe('level progress', () => {
  it('opens the next level once a level reaches 70 %', () => {
    expect(isUnlocked([], 0)).toBe(true)
    expect(isUnlocked([60], 1)).toBe(false)
    expect(isUnlocked([70], 1)).toBe(true)
  })

  it('keeps the best result and reports a first unlock only once', () => {
    const first = applyResult([60], 3, 0, 8, 10, 80)
    expect(first.progress).toEqual([80, null, null])
    expect(first.result).toMatchObject({ passed: true, previous: 60, newRecord: true, unlockedNext: true })

    const again = applyResult(first.progress, 3, 0, 7, 10, 70)
    expect(again.progress[0]).toBe(80)
    expect(again.result).toMatchObject({ passed: true, newRecord: false, unlockedNext: false })
  })

  it('opens the finale only after the last level is passed', () => {
    expect(isUnlocked([90, 80, 60], 3)).toBe(false)
    expect(isUnlocked([90, 80, 70], 3)).toBe(true)
  })

  it('reports the finale as unlocked after passing the last level', () => {
    expect(applyResult([90, 80], 3, 2, 10, 10, 100).result.unlockedNext).toBe(true)
  })
})
