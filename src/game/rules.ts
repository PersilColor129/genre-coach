export const LIVES = 3 // lives per game
export const BASE_POINTS = 100 // points per correct answer
export const BONUS_MAX = 100 // max speed bonus
export const BONUS_TIME = 10 // seconds until the bonus reaches 0
export const MAX_MULTIPLIER = 4
export const STREAK_PER_MULTIPLIER = 3 // correct answers in a row per multiplier step
export const LISTEN_SHARE = 0.75 // share of "which genre do you hear?" questions (rest: "which clip is X?")

// Learning path (levels)
export const LEVEL_QUESTIONS = 10 // questions per level round, no lives
export const LEVEL_PASS = 70 // percent needed to unlock the next level
export const KNOWLEDGE_SHARE = 0.3 // chance of a knowledge question while the level still has unasked ones

/** Result of a level round in whole percent. */
export const percent = (correct: number, total: number) => Math.round((correct / total) * 100)

export const multiplier = (streak: number) =>
  Math.min(MAX_MULTIPLIER, 1 + Math.floor(streak / STREAK_PER_MULTIPLIER))

/** Speed bonus for answering `secs` seconds after the first beat. */
export const speedBonus = (secs: number) => Math.round(BONUS_MAX * Math.max(0, 1 - secs / BONUS_TIME))
