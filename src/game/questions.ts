import type { Subgenre, Track } from '../data/types'
import { LISTEN_SHARE } from './rules'

export type Clip = Track & { subgenre: string }

export type Question = {
  /** listen: one clip, pick the subgenre · pick: two clips, find the one that is `correct` */
  type: 'listen' | 'pick'
  correct: string
  other: string
  /** Answer buttons (listen) – subgenre keys in display order. */
  options: string[]
  clips: Clip[]
}

export type Rng = () => number

export function shuffle<T>(items: readonly T[], rng: Rng = Math.random): T[] {
  const a = [...items]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Picks a track of `key` that wasn't played yet in this game; once all were played, they're available again. */
function pickClip(subgenres: Record<string, Subgenre>, key: string, used: Set<string>, rng: Rng): Clip {
  const tracks = subgenres[key].tracks
  let free = tracks.filter((t) => !used.has(t.previewPath))
  if (!free.length) {
    tracks.forEach((t) => used.delete(t.previewPath))
    free = tracks
  }
  const track = free[Math.floor(rng() * free.length)]
  used.add(track.previewPath)
  return { ...track, subgenre: key }
}

/** Draws the next question. Returns the updated list of played previews alongside it. */
export function drawQuestion(
  subgenres: Record<string, Subgenre>,
  usedBefore: readonly string[],
  rng: Rng = Math.random,
): { question: Question; used: string[] } {
  const used = new Set(usedBefore)
  const [correct, other] = shuffle(Object.keys(subgenres), rng)
  const question: Question =
    rng() < LISTEN_SHARE
      ? {
          type: 'listen',
          correct,
          other,
          options: shuffle([correct, other], rng),
          clips: [pickClip(subgenres, correct, used, rng)],
        }
      : {
          type: 'pick',
          correct,
          other,
          options: [],
          clips: shuffle([pickClip(subgenres, correct, used, rng), pickClip(subgenres, other, used, rng)], rng),
        }
  return { question, used: [...used] }
}
