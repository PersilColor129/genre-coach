import type { Track } from '../../data/types'

/**
 * Tracks that are not in the game yet – only listed in the listening check,
 * per subgenre key. Kept ones move into src/data/dnb.ts, dropped ones are deleted here.
 */
export const CANDIDATES: Record<string, Track[]> = {}
