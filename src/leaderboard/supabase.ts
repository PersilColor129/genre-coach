export const BOARD_SIZE = 10

export type BoardEntry = { id: number; name: string; score: number }

const SB_URL = import.meta.env.VITE_SUPABASE_URL
// The publishable key is meant to be public; access is restricted by Supabase row level security.
const SB_KEY = import.meta.env.VITE_SUPABASE_KEY
const HEADERS = { apikey: SB_KEY, 'Content-Type': 'application/json' }

/**
 * Only the live site (Vercel "Production") sets VITE_LEADERBOARD_ENV=production.
 * Everything else – local dev, Vercel previews – writes to a separate "<game>-test" board,
 * so test scores never end up on the real leaderboard.
 */
export const IS_TEST_BOARD = import.meta.env.VITE_LEADERBOARD_ENV !== 'production'

const boardId = (leaderboardId: string) => (IS_TEST_BOARD ? `${leaderboardId}-test` : leaderboardId)

export async function fetchBoard(leaderboardId: string): Promise<BoardEntry[]> {
  const params = new URLSearchParams({
    select: 'id,name,score',
    game: `eq.${boardId(leaderboardId)}`,
    order: 'score.desc,created_at.asc',
    limit: String(BOARD_SIZE),
  })
  const r = await fetch(`${SB_URL}/rest/v1/highscores?${params}`, { headers: HEADERS })
  if (!r.ok) throw new Error(`HTTP ${r.status}`)
  return r.json()
}

export async function submitScore(leaderboardId: string, name: string, score: number, correct: number) {
  const r = await fetch(`${SB_URL}/rest/v1/highscores`, {
    method: 'POST',
    headers: { ...HEADERS, Prefer: 'return=representation' },
    body: JSON.stringify({ game: boardId(leaderboardId), name, score, correct }),
  })
  if (!r.ok) throw new Error(`HTTP ${r.status}`)
  const [row] = (await r.json()) as BoardEntry[]
  return row.id
}

export const qualifies = (board: BoardEntry[], score: number) =>
  score > 0 && (board.length < BOARD_SIZE || score > board[board.length - 1].score)
