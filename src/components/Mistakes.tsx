import type { GenreFamily } from '../data/types'
import type { Round } from '../game/gameReducer'
import { useLanguage } from '../i18n/LanguageContext'
import { TrackLink } from './TrackLink'

/** "Your mistakes": for every lost life, what defines the right and the wrong subgenre. */
export function Mistakes({ family, misses }: { family: GenreFamily; misses: Round[] }) {
  const { lang, t } = useLanguage()
  if (!misses.length) return null
  const sub = (key: string) => family.subgenres[key]

  return (
    <>
      <h3 className="sub spaced">{t.mistakes}</h3>
      {misses.map(({ question: q, chosen }, i) => {
        if (q.knowledge) {
          const k = q.knowledge
          return (
            <details key={i} open={i === 0}>
              <summary>
                <span className="mk-bad">✗</span> {k.question[lang]}
                {chosen === null && (
                  <>
                    {' '}
                    <span className="lbl">{t.skippedParen}</span>
                  </>
                )}
              </summary>
              <div className="why">
                <p className="mk-ok">✓ {k.options[Number(q.correct)][lang]}</p>
                {chosen != null && (
                  <p className="mk-bad">
                    ✗ <span className="lbl">{t.yourAnswer}:</span> {k.options[Number(chosen)][lang]}
                  </p>
                )}
                <h4>{t.why}</h4>
                <p>{k.explain[lang]}</p>
              </div>
            </details>
          )
        }
        const right = sub(q.correct).name[lang]
        const wrong = sub(q.other).name[lang]
        return (
          <details key={i} open={i === 0}>
            <summary>
              <span className="mk-bad">✗</span>{' '}
              {q.type === 'listen' ? t.wasThat(family.word[lang]) : q.type === 'hear' ? t.qHear : t.qPick(right)}
              {chosen === null && (
                <>
                  {' '}
                  <span className="lbl">{t.skippedParen}</span>
                </>
              )}
            </summary>
            <div className="why">
              <p className="mk-ok">✓ {right}</p>
              <p className="mk-bad">✗ {wrong}</p>
              <h4>{t.why}</h4>
              <p>
                <span className="lbl">{t.whatMakes(right)}</span>
                <br />
                {sub(q.correct).desc[lang]}
              </p>
              <p>
                <span className="lbl">{t.howRecognize(wrong)}</span>
                <br />
                {sub(q.other).desc[lang]}
              </p>
              {q.clips.map((c) => (
                <p key={c.previewPath} className="lbl">
                  {t.heard(sub(c.subgenre).name[lang])}: <TrackLink track={c} />
                </p>
              ))}
            </div>
          </details>
        )
      })}
    </>
  )
}
