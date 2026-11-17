import type { Localized, Track } from '../../data/types'

/** Candidate tracks for one subgenre. `name` is only needed for a subgenre that isn't in the game yet. */
export type CandidateGroup = { name?: Localized; tracks: Track[] }

/**
 * Tracks that are not in the game yet – only listed in the listening check,
 * per game slug and subgenre key. Kept ones move into src/data/<game>.ts, dropped ones are deleted here.
 */
export const CANDIDATES: Record<string, Record<string, CandidateGroup>> = {}

/** Subgenres that are leaving the game – not shown in the listening check. */
export const HIDDEN_SUBGENRES: Record<string, string[]> = {}
