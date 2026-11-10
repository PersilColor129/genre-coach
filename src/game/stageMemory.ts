/** Remembers the difficulty stage per game, so the next game starts where you left off. */
const STORAGE_KEY = 'gc-stage'

export function readStage(slug: string, stageCount: number): number {
  try {
    const stage = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')[slug]
    return Number.isInteger(stage) ? Math.min(Math.max(stage, 0), stageCount - 1) : 0
  } catch {
    return 0
  }
}

export function writeStage(slug: string, stage: number) {
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...all, [slug]: stage }))
  } catch {
    // storage blocked (private mode) – the next game starts at level 1
  }
}
