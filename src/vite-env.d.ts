/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_KEY: string
  /** "production" only on the live site – everything else uses the test leaderboard. */
  readonly VITE_LEADERBOARD_ENV?: 'production' | 'test'
}
