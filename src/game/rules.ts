export const LIVES = 3 // lives per game
export const BASE_POINTS = 100 // points per correct answer
export const BONUS_MAX = 100 // max speed bonus
export const BONUS_TIME = 10 // seconds until the bonus reaches 0
export const MAX_MULTIPLIER = 4
export const STREAK_PER_MULTIPLIER = 3 // correct answers in a row per multiplier step
export const LISTEN_SHARE = 0.75 // share of "which genre do you hear?" questions (rest: "which clip is X?")

export const multiplier = (streak: number) =>
  Math.min(MAX_MULTIPLIER, 1 + Math.floor(streak / STREAK_PER_MULTIPLIER))

/** Speed bonus for answering `secs` seconds after the first beat. */
export const speedBonus = (secs: number) => Math.round(BONUS_MAX * Math.max(0, 1 - secs / BONUS_TIME))

// Coach mode (games with difficulty stages): rounds of a few questions, the stage adapts after each round
export const ROUND_QUESTIONS = 5 // questions per round
export const STAGE_UP_AT = 4 // correct answers in a round to move one stage up
export const STAGE_DOWN_AT = 2 // this many or fewer correct answers move one stage down
export const KNOWLEDGE_SHARE = 0.2 // chance of a knowledge question (from stage 2, while unasked ones are left)
export const HEAR_SHARE = 0.25 // chance of a "what do you hear?" question (from stage 2)

/** Stage for the next round (0-based), based on the correct answers in the round just played. */
export function nextStage(stage: number, correctInRound: number, stageCount: number): number {
  if (correctInRound >= STAGE_UP_AT) return Math.min(stageCount - 1, stage + 1)
  if (correctInRound <= STAGE_DOWN_AT) return Math.max(0, stage - 1)
  return stage
}
