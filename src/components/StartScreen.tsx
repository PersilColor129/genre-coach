import type { GenreFamily } from '../data/types'
import { BONUS_MAX } from '../game/rules'
import { useLanguage } from '../i18n/LanguageContext'
import { Leaderboard } from '../leaderboard/Leaderboard'
import { useLeaderboard } from '../leaderboard/useLeaderboard'

export function StartScreen({ family, onStart }: { family: GenreFamily; onStart: () => void }) {
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
        <button className="primary" onClick={onStart}>
          START ▸
        </button>
      </div>
      <p className="center blink press-start">{t.pressStart}</p>
      <Leaderboard board={board} />
    </>
  )
}
