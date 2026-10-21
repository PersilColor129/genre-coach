import { pad } from '../game/format'
import { useLanguage } from '../i18n/LanguageContext'
import { IS_TEST_BOARD } from './supabase'
import type { BoardState } from './useLeaderboard'

export function Leaderboard({ board, highlightId }: { board: BoardState; highlightId?: number | null }) {
  const { t } = useLanguage()
  return (
    <>
      <h3 className="sub">{t.leaderboard}</h3>
      {IS_TEST_BOARD && <p className="test-board">{t.testBoard}</p>}
      {board.status === 'loading' && <p className="empty">{t.boardLoading}</p>}
      {board.status === 'down' && <p className="empty">{t.boardDown}</p>}
      {board.status === 'ok' && !board.entries.length && <p className="empty">{t.boardEmpty}</p>}
      {board.status === 'ok' && board.entries.length > 0 && (
        <ol className="board">
          {board.entries.map((e, i) => (
            <li key={e.id} className={e.id === highlightId ? 'me' : ''}>
              <span className="rk">{String(i + 1).padStart(2, '0')}</span>
              <span className="nm">{e.name}</span>
              <span className="pt">{pad(e.score)}</span>
            </li>
          ))}
        </ol>
      )}
    </>
  )
}
