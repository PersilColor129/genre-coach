import type { Question } from './questions'
import { BASE_POINTS, BONUS_TIME, LIVES, multiplier, speedBonus } from './rules'

export type Outcome =
  | { kind: 'correct'; gained: number; bonus: number; mult: number }
  | { kind: 'wrong' }
  | { kind: 'skipped' }
  /** Skipped a clip that couldn't be played – no life lost. */
  | { kind: 'skippedFree' }

export type Round = {
  question: Question
  /** ms timestamp of the first play – the bonus timer runs from here. null = not played yet. */
  startedAt: number | null
  /** The clip failed to load; skipping is free then. */
  broken: boolean
  /** Subgenre key the player chose, null = skipped. Only set once answered. */
  chosen?: string | null
  outcome?: Outcome
}

export type GameState = {
  score: number
  lives: number
  streak: number
  best: number
  correct: number
  /** Number of the current question, starting at 1. */
  n: number
  /** Preview paths already played in this game (avoids repeats). */
  used: string[]
  /** Rounds that cost a life – explained at the end. */
  misses: Round[]
  round: Round
}

export type GameAction =
  | { type: 'clockStarted'; at: number }
  | { type: 'clipBroken' }
  | { type: 'answered'; choice: string | null; at: number }
  | { type: 'next'; question: Question; used: string[] }

const newRound = (question: Question): Round => ({ question, startedAt: null, broken: false })

export function newGame(question: Question, used: string[]): GameState {
  return { score: 0, lives: LIVES, streak: 0, best: 0, correct: 0, n: 1, used, misses: [], round: newRound(question) }
}

export const isAnswered = (round: Round) => round.outcome !== undefined
export const isGameOver = (state: GameState) => state.lives <= 0

export function gameReducer(state: GameState, action: GameAction): GameState {
  const { round } = state
  switch (action.type) {
    case 'clockStarted':
      if (round.startedAt !== null || isAnswered(round)) return state
      return { ...state, round: { ...round, startedAt: action.at } }

    case 'clipBroken':
      if (isAnswered(round)) return state
      return { ...state, round: { ...round, broken: true } }

    case 'answered': {
      if (isAnswered(round)) return state
      const { choice } = action
      if (choice === round.question.correct) {
        const secs = round.startedAt === null ? BONUS_TIME : (action.at - round.startedAt) / 1000
        const bonus = speedBonus(secs)
        const mult = multiplier(state.streak)
        const gained = (BASE_POINTS + bonus) * mult
        const streak = state.streak + 1
        return {
          ...state,
          score: state.score + gained,
          correct: state.correct + 1,
          streak,
          best: Math.max(state.best, streak),
          round: { ...round, chosen: choice, outcome: { kind: 'correct', gained, bonus, mult } },
        }
      }
      if (choice === null && round.broken) {
        return { ...state, streak: 0, round: { ...round, chosen: null, outcome: { kind: 'skippedFree' } } }
      }
      const answered: Round = { ...round, chosen: choice, outcome: { kind: choice === null ? 'skipped' : 'wrong' } }
      return { ...state, streak: 0, lives: state.lives - 1, misses: [...state.misses, answered], round: answered }
    }

    case 'next':
      return { ...state, n: state.n + 1, used: action.used, round: newRound(action.question) }
  }
}
