import type { ReactNode } from 'react'
import { LIVES } from '../game/rules'
import { useLanguage } from '../i18n/LanguageContext'
import { pad } from '../game/format'

type Props = {
  brand: string
  lives: number | null
  score: number
  /** Replaces the score on the right (level rounds show the level instead). */
  right?: ReactNode
}

/** Top bar: game name, hearts (only while playing) and score. */
export function Hud({ brand, lives, score, right }: Props) {
  const { t } = useLanguage()
  return (
    <div className="top">
      <span className="brand">{brand}</span>
      <span className="lives" aria-label={t.lives}>
        {lives !== null &&
          Array.from({ length: LIVES }, (_, i) => (
            <span key={i} className={`heart ${i < lives ? '' : 'lost'}`}>
              ♥
            </span>
          ))}
      </span>
      <span className="score">
        {right ?? (
          <>
            1UP <b>{pad(score)}</b>
          </>
        )}
      </span>
    </div>
  )
}
