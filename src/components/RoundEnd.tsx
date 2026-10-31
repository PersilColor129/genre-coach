import type { GameState } from '../game/gameReducer'
import { pad } from '../game/format'
import { ROUND_QUESTIONS } from '../game/rules'
import { useLanguage } from '../i18n/LanguageContext'

type Props = {
  game: GameState
  /** Stage the next round will be played at (0-based). */
  next: number
  onNext: () => void
}

/** Coach mode: short summary after each round – right/wrong per question, points, level change. */
export function RoundEnd({ game, next, onNext }: Props) {
  const { t } = useLanguage()
  const coach = game.coach!
  const results = game.results.slice(coach.roundFrom)
  const correct = game.correct - coach.roundCorrectFrom
  const change = Math.sign(next - coach.stage)

  return (
    <>
      <p className="round-title">{t.roundDone(coach.roundNo)}</p>
      <div className="round-dots" aria-label={t.correctOf(correct, ROUND_QUESTIONS)}>
        {results.map((ok, i) => (
          <span key={i} className={ok ? 'r' : 'w'}>
            {ok ? '✓' : '✗'}
          </span>
        ))}
      </div>
      <div className="stats">
        <div>
          <b>{t.correctOf(correct, ROUND_QUESTIONS)}</b>
          <span>{t.thisRound}</span>
        </div>
        <div>
          <b>+{game.score - coach.roundScoreFrom}</b>
          <span>{t.points}</span>
        </div>
        <div>
          <b>{pad(game.score)}</b>
          <span>{t.total}</span>
        </div>
      </div>
      {change !== 0 && (
        <p className={`round-change ${change > 0 ? 'up' : 'down'}`}>
          {change > 0 ? t.levelUp(next + 1) : t.levelDown(next + 1)}
        </p>
      )}
      <div className="round-actions">
        <button className="primary" onClick={onNext} autoFocus>
          {t.nextRound}
        </button>
      </div>
    </>
  )
}
