import { LEVEL_PASS } from './rules'

/** Best result per level in percent, null = not played yet. */
export type Progress = (number | null)[]

const STORAGE_KEY = 'gc-levels'

export const isPassed = (best: number | null) => best !== null && best >= LEVEL_PASS

/** Level 1 is always open; every further level opens once the one before was passed. */
export const isUnlocked = (progress: Progress, index: number) => index === 0 || isPassed(progress[index - 1] ?? null)

export type LevelResult = {
  index: number
  correct: number
  total: number
  percent: number
  passed: boolean
  /** Best result before this round. */
  previous: number | null
  newRecord: boolean
  /** This round opened the next level (or, after the last level, the finale) for the first time. */
  unlockedNext: boolean
}

/** Merges a finished round into the progress. Pure – storage is done by the caller. */
export function applyResult(
  progress: Progress,
  levelCount: number,
  index: number,
  correct: number,
  total: number,
  percent: number,
): { progress: Progress; result: LevelResult } {
  const previous = progress[index] ?? null
  const passed = percent >= LEVEL_PASS
  const next = Array.from({ length: levelCount }, (_, i) => progress[i] ?? null)
  next[index] = previous === null ? percent : Math.max(previous, percent)
  return {
    progress: next,
    result: {
      index,
      correct,
      total,
      percent,
      passed,
      previous,
      newRecord: previous === null || percent > previous,
      unlockedNext: passed && !isPassed(previous),
    },
  }
}

export function readProgress(slug: string): Progress {
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
    return Array.isArray(all[slug]) ? all[slug] : []
  } catch {
    return []
  }
}

export function writeProgress(slug: string, progress: Progress) {
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...all, [slug]: progress }))
  } catch {
    // storage blocked (private mode) – progress just isn't kept
  }
}
