import type { GenreFamily } from '../data/types'
import type { GameState } from '../game/gameReducer'
import { isPassed, isUnlocked, type LevelResult, type Progress } from '../game/levelProgress'
import { LEVEL_PASS } from '../game/rules'
import { useLanguage } from '../i18n/LanguageContext'
import { Mistakes } from './Mistakes'
import './Levels.css'

const BLOCKS = 10

/** Ten pixel blocks. `filled` blocks in the accent colour, `wrong` blocks after them in the "wrong" colour. */
export function LevelBar({ filled, wrong = 0, marker }: { filled: number; wrong?: number; marker?: boolean }) {
  return (
    <div className="lvl-bar" aria-hidden="true">
      {Array.from({ length: BLOCKS }, (_, i) => (
        <span
          key={i}
          className={[
            i < filled ? 'on' : i < filled + wrong ? 'bad' : '',
            marker && i === LEVEL_PASS / 10 - 1 ? 'mark' : '',
          ].join(' ')}
        />
      ))}
    </div>
  )
}

type SelectProps = {
  family: GenreFamily
  progress: Progress
  onLevel: (index: number) => void
  onEndless: () => void
}

/** Learning path of a game: the levels with their best result, plus the endless mode. */
export function LevelSelect({ family, progress, onLevel, onEndless }: SelectProps) {
  const { t } = useLanguage()
  const levels = family.levels ?? []

  return (
    <>
      <p className="start-title">{t.levelsTitle}</p>
      <div className="lvl-list">
        {levels.map((_, i) => {
          const best = progress[i] ?? null
          const open = isUnlocked(progress, i)
          const done = isPassed(best)
          return (
            <button
              key={i}
              className={`lvl-card ${done ? 'done' : ''}`}
              disabled={!open}
              onClick={() => onLevel(i)}
            >
              <span className="lvl-head">
                <span className="lvl-name">{t.level(i + 1)}</span>
                <span className="lvl-state">
                  {!open ? (
                    <span aria-label={t.levelLockedLabel}>🔒</span>
                  ) : done ? (
                    t.levelDone
                  ) : best !== null ? (
                    t.levelToGo(LEVEL_PASS - best)
                  ) : null}
                </span>
              </span>
              {open ? (
                <>
                  <LevelBar filled={Math.round((best ?? 0) / 10)} marker={!done} />
                  <span className="lvl-text">
                    {best === null ? t.levelNotPlayed : t.levelBest(best)}
                    {!done && ` · ${t.levelPassAt(LEVEL_PASS)}`}
                  </span>
                </>
              ) : (
                <span className="lvl-text">{t.levelLocked(i)}</span>
              )}
            </button>
          )
        })}
        <button className="lvl-card endless" onClick={onEndless}>
          <span className="lvl-head">
            <span className="lvl-name">{t.endless}</span>
            <span className="lvl-state">♥ ♥ ♥</span>
          </span>
          <span className="lvl-text">{t.endlessText}</span>
        </button>
      </div>
    </>
  )
}

type ResultProps = {
  family: GenreFamily
  game: GameState
  result: LevelResult
  onAgain: () => void
  onNextLevel: () => void
  onBack: () => void
}

/** End of a level round: percentage against the 70 % mark, unlocks, personal best, mistakes. */
export function LevelResultView({ family, game, result, onAgain, onNextLevel, onBack }: ResultProps) {
  const { t } = useLanguage()
  const { index, correct, total, percent, passed, previous, newRecord, unlockedNext } = result
  const hasNext = index < (family.levels?.length ?? 0) - 1
  const canGoOn = hasNext && (passed || isPassed(previous))

  return (
    <>
      <p className="go">{passed ? t.levelPassed : t.levelFailed}</p>
      <p className="lvl-percent">{percent} %</p>
      <p className="lvl-count">{t.correctOf(correct, total)}</p>
      <div className="lvl-result-bar">
        <LevelBar filled={Math.round((correct / total) * 10)} wrong={10 - Math.round((correct / total) * 10)} />
        <span className="lvl-mark" style={{ left: `${LEVEL_PASS}%` }}>
          {LEVEL_PASS} %
        </span>
      </div>

      {unlockedNext && <p className="lvl-unlocked">{t.levelUnlocked(index + 2)}</p>}
      <p className="center tight">
        {!passed && `${t.levelNeed(LEVEL_PASS)} `}
        {previous === null ? t.levelFirst : newRecord ? t.levelRecord(previous) : t.levelBestSoFar(previous)}
      </p>

      <div className="lvl-actions">
        {canGoOn && (
          <button className="primary" onClick={onNextLevel} autoFocus>
            {t.toLevel(index + 2)}
          </button>
        )}
        <button className={canGoOn ? 'ghost' : 'primary'} onClick={onAgain} autoFocus={!canGoOn}>
          {t.levelAgain}
        </button>
        <button className="ghost" onClick={onBack}>
          {t.levelsBack}
        </button>
      </div>
      <Mistakes family={family} misses={game.misses} />
    </>
  )
}
