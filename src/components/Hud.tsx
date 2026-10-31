import { LIVES } from '../game/rules'
import { useLanguage } from '../i18n/LanguageContext'
import { pad } from '../game/format'

type Props = {
  brand: string
  lives: number | null
  score: number
  /** Coach mode: current difficulty stage (0-based) and how it just changed (-1, 0, 1). */
  level?: { stage: number; change: number }
}

/** Top bar: game name, hearts (only while playing) and score. */
export function Hud({ brand, lives, score, level }: Props) {
  const { t } = useLanguage()
  return (
    <div className="top">
      <span className="brand">
        {brand}
        {level && (
          <>
            {' '}
            <span className={`level ${level.change > 0 ? 'up' : level.change < 0 ? 'down' : ''}`}>
              {t.levelLabel(level.stage + 1)}
              {level.change > 0 ? ' ▲' : level.change < 0 ? ' ▼' : ''}
            </span>
          </>
        )}
      </span>
      <span className="lives" aria-label={t.lives}>
        {lives !== null &&
          Array.from({ length: LIVES }, (_, i) => (
            <span key={i} className={`heart ${i < lives ? '' : 'lost'}`}>
              ♥
            </span>
          ))}
      </span>
      <span className="score">
        1UP <b>{pad(score)}</b>
      </span>
    </div>
  )
}
