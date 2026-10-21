import type { GenreFamily } from '../data/types'
import { BONUS_MAX } from '../game/rules'
import { useLanguage } from '../i18n/LanguageContext'
import { Leaderboard } from '../leaderboard/Leaderboard'
import { useLeaderboard } from '../leaderboard/useLeaderboard'

type Props = {
  family: GenreFamily
  onStart: () => void
  /** Back to the level selection (games with levels only). */
  onBack?: () => void
}

export function StartScreen({ family, onStart, onBack }: Props) {
  const { lang, t } = useLanguage()
  const { board } = useLeaderboard(family.leaderboardId)
  const [line1, line2] = t.startTitle(family.word[lang])

  return (
    <>
      <p className="start-title">
        {line1}
        <br />
        {line2}
      </p>
      <div className="rules">
        <p>
          <b>♥ ♥ ♥</b> {t.ruleLives}
        </p>
        <p>
          <b>⏱</b> {t.ruleSpeed(BONUS_MAX)}
        </p>
        {family.extraRule && (
          <p>
            <b>{family.extraRule.icon}</b> {family.extraRule.text[lang]}
          </p>
        )}
        <p>
          <b>×4</b> {t.ruleStreak}
        </p>
      </div>
      <div className="start-row">
        {onBack && (
          <button className="ghost" onClick={onBack}>
            {t.levelsBack}
          </button>
        )}
        <button className="primary" onClick={onStart}>
          START ▸
        </button>
      </div>
      <p className="center blink press-start">{t.pressStart}</p>
      <Leaderboard board={board} />
    </>
  )
}
