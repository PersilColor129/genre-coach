import { dnb } from './dnb'
import { psytrance } from './psytrance'
import { techno } from './techno'
import type { GenreFamily } from './types'

/** All games, in the order shown on the home screen. */
export const FAMILIES: GenreFamily[] = [dnb, techno, psytrance]

export const familyBySlug = (slug: string | undefined) => FAMILIES.find((f) => f.slug === slug)
