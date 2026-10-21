import { useCallback, useEffect, useState } from 'react'
import { fetchBoard, type BoardEntry } from './supabase'

export type BoardState =
  | { status: 'loading' }
  | { status: 'down' }
  | { status: 'ok'; entries: BoardEntry[] }

async function load(leaderboardId: string): Promise<BoardState> {
  try {
    return { status: 'ok', entries: await fetchBoard(leaderboardId) }
  } catch {
    return { status: 'down' }
  }
}

/** Loads the top 10 on mount; `reload` fetches again and resolves with the new state. */
export function useLeaderboard(leaderboardId: string) {
  const [board, setBoard] = useState<BoardState>({ status: 'loading' })

  const reload = useCallback(async () => {
    const next = await load(leaderboardId)
    setBoard(next)
    return next
  }, [leaderboardId])

  useEffect(() => {
    let active = true
    load(leaderboardId).then((next) => active && setBoard(next))
    return () => {
      active = false
    }
  }, [leaderboardId])

  return { board, reload }
}
