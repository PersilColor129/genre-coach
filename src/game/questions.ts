import type { GenreFamily, KnowledgeQuestion, Subgenre, Track } from '../data/types'
import { HEAR_SHARE, KNOWLEDGE_SHARE, LISTEN_SHARE } from './rules'

export type Clip = Track & { subgenre: string }

export type Question = {
  /**
   * listen: one clip, pick the subgenre · pick: two clips, find the one that is `correct`
   * hear: one clip, pick what you hear in it (options are subgenre keys, shown as their `trait`)
   * knowledge: two answers about the scene, no clip
   */
  type: 'listen' | 'pick' | 'hear' | 'knowledge'
  correct: string
  other: string
  /** Answer buttons in display order – subgenre keys (listen, hear) or option indexes (knowledge). */
  options: string[]
  clips: Clip[]
  knowledge?: KnowledgeQuestion
  /** Seconds until the speed bonus is gone (default BONUS_TIME). */
  bonusTime?: number
}

/** Marks a knowledge question as asked in `used` (next to the preview paths). */
const knowledgeKey = (id: string) => `knowledge:${id}`

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

type Pair = [correct: string, other: string]

/** Two different subgenres, either any two or (pairs only) one and a similar-sounding one from the same set. */
function drawPair(subgenres: Record<string, Subgenre>, keys: string[], pairsOnly: boolean, rng: Rng): Pair {
  if (pairsOnly) {
    const similar = (key: string) => (subgenres[key].confusable ?? []).filter((c) => keys.includes(c))
    const withPartner = keys.filter((key) => similar(key).length)
    if (withPartner.length) {
      const correct = withPartner[Math.floor(rng() * withPartner.length)]
      const partners = similar(correct)
      return [correct, partners[Math.floor(rng() * partners.length)]]
    }
  }
  const [correct, other] = shuffle(keys, rng)
  return [correct, other]
}

type DrawOptions = {
  /** Allow "which clip is X?" questions (default true). */
  pick?: boolean
  pairsOnly?: boolean
}

/** Draws the next question. Returns the updated list of played previews alongside it. */
export function drawQuestion(
  subgenres: Record<string, Subgenre>,
  usedBefore: readonly string[],
  rng: Rng = Math.random,
  { pick = true, pairsOnly = false }: DrawOptions = {},
): { question: Question; used: string[] } {
  const used = new Set(usedBefore)
  const [correct, other] = drawPair(subgenres, Object.keys(subgenres), pairsOnly, rng)
  const question: Question =
    !pick || rng() < LISTEN_SHARE
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

/**
 * Next question at a difficulty level. What can come up depends on the level: its subgenres, two-clip questions,
 * "what do you hear?" questions, knowledge questions (each asked at most once per game) and similar-sounding pairs.
 */
export function drawStageQuestion(
  family: GenreFamily,
  stage: number,
  usedBefore: readonly string[],
  rng: Rng = Math.random,
): { question: Question; used: string[] } {
  const level = family.levels![stage]
  const subgenres = Object.fromEntries(level.subgenres.map((key) => [key, family.subgenres[key]]))
  const timed = (drawn: { question: Question; used: string[] }) => ({
    ...drawn,
    question: { ...drawn.question, bonusTime: level.bonusTime },
  })

  const open = (family.knowledge ?? []).filter(
    (k) => level.knowledge?.includes(k.id) && !usedBefore.includes(knowledgeKey(k.id)),
  )
  if (open.length && rng() < KNOWLEDGE_SHARE) {
    const k = open[Math.floor(rng() * open.length)]
    const question: Question = {
      type: 'knowledge',
      correct: '0',
      other: '1',
      options: shuffle(
        k.options.map((_, i) => String(i)),
        rng,
      ),
      clips: [],
      knowledge: k,
    }
    return { question, used: [...usedBefore, knowledgeKey(k.id)] }
  }

  const withTrait = Object.keys(subgenres).filter((key) => subgenres[key].trait)
  if (level.hear && withTrait.length >= 2 && rng() < HEAR_SHARE) {
    const used = new Set(usedBefore)
    const [correct, other] = drawPair(subgenres, withTrait, !!level.pairsOnly, rng)
    const question: Question = {
      type: 'hear',
      correct,
      other,
      options: shuffle([correct, other], rng),
      clips: [pickClip(subgenres, correct, used, rng)],
    }
    return timed({ question, used: [...used] })
  }

  return timed(drawQuestion(subgenres, usedBefore, rng, { pick: !!level.pick, pairsOnly: !!level.pairsOnly }))
}
