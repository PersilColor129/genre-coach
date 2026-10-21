import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import type { GenreFamily } from '../data/types'
import type { GameState } from '../game/gameReducer'
import { useLanguage } from '../i18n/LanguageContext'
import { pad } from '../game/format'
import { Leaderboard } from '../leaderboard/Leaderboard'
import { qualifies, submitScore } from '../leaderboard/supabase'
import { useLeaderboard } from '../leaderboard/useLeaderboard'
import { Mistakes } from './Mistakes'

const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const LAST_NAME_KEY = 'gc-last-name'

type Props = { family: GenreFamily; game: GameState; onAgain: () => void }

/** Game over: stats, then initials entry (if the score makes the top 10), then leaderboard + mistakes. */
export function GameOver({ family, game, onAgain }: Props) {
  const { t } = useLanguage()
  const { board, reload } = useLeaderboard(family.leaderboardId)
  const [savedId, setSavedId] = useState<number | null>(null)
  const [done, setDone] = useState(false)

  const enterName = !done && board.status === 'ok' && qualifies(board.entries, game.score)
  const showResults = done || board.status === 'down' || (board.status === 'ok' && !enterName)

  const onSaved = async (id: number) => {
    await reload()
    setSavedId(id)
    setDone(true)
  }

  return (
    <>
      <p className="go">GAME OVER</p>
      <div className="stats">
        <div>
          <b>{pad(game.score)}</b>
          <span>{t.points}</span>
        </div>
        <div>
          <b>{game.correct}</b>
          <span>{t.correct}</span>
        </div>
        <div>
          <b>{game.best}</b>
          <span>{t.bestStreak}</span>
        </div>
      </div>

      {board.status === 'loading' && !done && <p className="empty">{t.boardLoading}</p>}
      {enterName && (
        <InitialsEntry onSubmit={(name) => submitScore(family.leaderboardId, name, game.score, game.correct)} onSaved={onSaved} />
      )}
      {showResults && (
        <>
          <Leaderboard board={board} highlightId={savedId} />
          <div className="actions">
            <button className="primary" onClick={onAgain} autoFocus>
              {t.again}
            </button>
            <Link className="ghost" to="/">
              {t.otherGenres}
            </Link>
          </div>
          <Mistakes family={family} misses={game.misses} />
        </>
      )}
    </>
  )
}

function lastName() {
  try {
    return localStorage.getItem(LAST_NAME_KEY) || 'AAA'
  } catch {
    return 'AAA'
  }
}

/** Arcade-style three-letter name entry. */
function InitialsEntry({
  onSubmit,
  onSaved,
}: {
  onSubmit: (name: string) => Promise<number>
  onSaved: (id: number) => void
}) {
  const { t } = useLanguage()
  const [letters, setLetters] = useState(() => lastName().split('').slice(0, 3))
  const [slot, setSlot] = useState(0)
  const [state, setState] = useState<'idle' | 'saving' | 'error'>('idle')
  const saving = useRef(false)

  const step = useCallback((i: number, d: number) => {
    setLetters((ls) => ls.map((l, j) => (j === i ? ABC[(ABC.indexOf(l) + d + ABC.length) % ABC.length] : l)))
  }, [])

  const save = useCallback(async () => {
    if (saving.current) return
    saving.current = true
    setState('saving')
    const name = letters.join('')
    try {
      localStorage.setItem(LAST_NAME_KEY, name)
    } catch {
      // ignore
    }
    try {
      onSaved(await onSubmit(name))
    } catch {
      saving.current = false
      setState('error')
    }
  }, [letters, onSubmit, onSaved])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toUpperCase()
      if (k.length === 1 && ABC.includes(k)) {
        setLetters((ls) => ls.map((l, j) => (j === slot ? k : l)))
        setSlot(Math.min(2, slot + 1))
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') setSlot(Math.max(0, slot - 1))
      else if (e.key === 'ArrowRight') setSlot(Math.min(2, slot + 1))
      else if (e.key === 'ArrowUp') step(slot, -1)
      else if (e.key === 'ArrowDown') step(slot, 1)
      else if (e.key === 'Enter') save()
      else return
      e.preventDefault()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [slot, step, save])

  return (
    <>
      <p className="newhi blink">{t.newHi}</p>
      <p className="center tight">{t.enterInitials}</p>
      <div className="initials">
        {letters.map((l, i) => (
          <div key={i} className={`slot ${i === slot ? 'act' : ''}`}>
            <button className="arr" aria-label={t.letterPrev} onClick={() => (setSlot(i), step(i, -1))}>
              ▲
            </button>
            <div className="ch" tabIndex={0} onClick={() => setSlot(i)}>
              {l}
            </div>
            <button className="arr" aria-label={t.letterNext} onClick={() => (setSlot(i), step(i, 1))}>
              ▼
            </button>
          </div>
        ))}
      </div>
      <div className="save-row">
        <button className="primary" onClick={save} disabled={state === 'saving'}>
          {state === 'saving' ? t.saving : state === 'error' ? t.retry : t.save}
        </button>
      </div>
      <p className="hint err">{state === 'error' ? t.saveErr : ''}</p>
      <p className="hint keys">{t.keysHint}</p>
    </>
  )
}
