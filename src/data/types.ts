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
  /** Second of the preview where the played clip starts (default: CLIP_DEFAULT_START). Set via the listening check. */
  start?: number
}

export type Subgenre = {
  name: Localized
  /** What defines the subgenre – shown when explaining a mistake. */
  desc: Localized
  /** One thing you can hear in a clip – answer option of "What do you hear?" questions. */
  trait?: Localized
  /** Listening tip shown after every answer about this subgenre. */
  tip?: Localized
  tracks: Track[]
}

/** Multiple-choice question about the scene (not about a clip). */
export type KnowledgeQuestion = {
  id: string
  question: Localized
  /** The two answer options; the first one is correct (shuffled when shown). */
  options: Localized[]
  /** Shown after answering and under "Your mistakes". */
  explain: Localized
  /** Draft that hasn't been reviewed yet – marked as TEST in the game. */
  draft?: boolean
}

/** One difficulty stage (shown as "LEVEL n"). Stages build on each other; the game moves between them by itself. */
export type Level = {
  /** Subgenre keys used for listening questions. */
  subgenres: string[]
  /** Ids of knowledge questions that can come up in this level. */
  knowledge?: string[]
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
  /** Difficulty stages (Phase 3). Without them, the game plays the classic endless mode. */
  levels?: Level[]
  knowledge?: KnowledgeQuestion[]
}

export const ITUNES_PREVIEW_BASE = 'https://audio-ssl.itunes.apple.com/itunes-assets/'
