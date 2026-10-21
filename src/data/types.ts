export type Lang = 'de' | 'en'

/** A text in both languages. */
export type Localized = Record<Lang, string>

export type Track = {
  /** Apple Music song id, used for the "listen on Apple Music" link. */
  appleId: number
  artist: string
  title: string
  /** Path of the 30s iTunes preview, relative to ITUNES_PREVIEW_BASE. */
  previewPath: string
}

export type Subgenre = {
  name: Localized
  /** What defines the subgenre – shown when explaining a mistake. */
  desc: Localized
  tracks: Track[]
}

/** Colour scheme of a game, mapped to design tokens in src/styles/themes.css. */
export type ThemeId = 'dnb' | 'techno' | 'psytrance'

export type GenreFamily = {
  /** URL slug, e.g. "/techno". */
  slug: string
  /** Value of the `game` column in the Supabase highscores table. Never change it, or old scores disappear. */
  leaderboardId: string
  theme: ThemeId
  /** Name in the browser tab, e.g. "Drum & Bass". */
  title: string
  /** Label in the game's top bar. */
  brand: string
  /** Name on the home screen card; "\n" marks the line break on wide screens. */
  cardName: string
  bpm: string
  /** What the category is called in this game ("Genre" / "Subgenre"). */
  word: Localized
  /** Optional extra line on the start screen. */
  extraRule?: { icon: string; text: Localized }
  subgenres: Record<string, Subgenre>
}

export const ITUNES_PREVIEW_BASE = 'https://audio-ssl.itunes.apple.com/itunes-assets/'
