import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react'
import type { useAudioPlayer } from '../audio/useAudioPlayer'
import { ITUNES_PREVIEW_BASE, type GenreFamily } from '../data/types'
import { isAnswered, isGameOver, type GameAction, type GameState, type Outcome } from '../game/gameReducer'
import type { Clip } from '../game/questions'
import { BASE_POINTS, BONUS_TIME, multiplier } from '../game/rules'
import { useLanguage } from '../i18n/LanguageContext'
import { TrackLink } from './TrackLink'

const CLIP_LETTERS = 'AB'
const now = () => performance.now()

type Props = {
  family: GenreFamily
  game: GameState
  dispatch: (action: GameAction) => void
  audio: ReturnType<typeof useAudioPlayer>
  onNext: () => void
}

/** Bonus bar: shrinks from full to empty during BONUS_TIME after the first play, freezes once answered. */
function TimerBar({ startedAt, frozen }: { startedAt: number | null; frozen: boolean }) {
  const [left, setLeft] = useState(1)
  useEffect(() => {
    if (startedAt === null || frozen) return
    const id = window.setInterval(() => {
      const rest = Math.max(0, 1 - (performance.now() - startedAt) / 1000 / BONUS_TIME)
      setLeft(rest)
      if (rest === 0) window.clearInterval(id)
    }, 100)
    return () => window.clearInterval(id)
  }, [startedAt, frozen])
  return (
    <div className="timerbar">
      <div className={`timer-fill ${left < 0.3 ? 'low' : ''}`} style={{ transform: `scaleX(${left})` }} />
    </div>
  )
}

export function QuestionView({ family, game, dispatch, audio, onNext }: Props) {
  const { lang, t } = useLanguage()
  const { round } = game
  const { question: q } = round
  const answered = isAnswered(round)
  const nextButton = useRef<HTMLButtonElement>(null)
  const name = (key: string) => family.subgenres[key].name[lang]
  // Multiplier shown above the question = the one this answer will get.
  const [mult] = useState(() => multiplier(game.streak))
  // Level rounds: no lives, no points – just right or wrong.
  const levelMode = game.lives === null
  const counted = answered && round.outcome!.kind !== 'skippedFree'
  const shownNumber = counted ? game.scored : game.scored + 1
  const k = q.knowledge

  useEffect(() => {
    if (answered) nextButton.current?.focus({ preventScroll: true })
  }, [answered])

  const play = (key: string, clip: Clip) =>
    audio.toggle(key, ITUNES_PREVIEW_BASE + clip.previewPath, {
      onStart: () => dispatch({ type: 'clockStarted', at: now() }),
      onError: () => dispatch({ type: 'clipBroken' }),
    })

  const answer = (choice: string | null) => dispatch({ type: 'answered', choice, at: now() })

  const optionClass = (key: string) =>
    !answered ? 'btn opt' : key === q.correct ? 'btn opt ok' : key === round.chosen ? 'btn opt bad' : 'btn opt'
  const optionsDisabled = (q.type !== 'knowledge' && round.startedAt === null) || answered

  const playButton = (key: string, clip: Clip, label: string) => (
    <button className={`play ${audio.playingKey === key ? 'on' : ''}`} aria-label={label} onClick={() => play(key, clip)}>
      {audio.playingKey === key ? '■' : '▶'}
    </button>
  )

  const hint: ReactNode = answered ? (
    <OutcomeMessage outcome={round.outcome!} levelMode={levelMode} />
  ) : round.startedAt === null && q.type !== 'knowledge' ? (
    levelMode ? t.hintPlayLevel : t.hintPlay
  ) : null

  const reveal: ReactNode = answered && k ? (
    k.explain[lang]
  ) : answered ? (
    <>
      {q.clips.map((c, i) => (
        <Fragment key={c.previewPath}>
          {i > 0 && <br />}
          {q.type === 'pick' && `${t.clip} ${CLIP_LETTERS[i]}: ${name(c.subgenre)} · `}
          <TrackLink track={c} />
        </Fragment>
      ))}
      <span className="src">{t.source}</span>
    </>
  ) : round.broken ? (
    t.clipError
  ) : null

  const streak = <span className="streak">{game.streak ? t.streak(game.streak) : ''}</span>

  return (
    <>
      <div className="meta">
        <span>{levelMode ? t.questionOf(shownNumber, game.total!) : t.question(game.n)}</span>
        {!levelMode && <span className={`mult ${mult > 1 ? 'hot' : ''}`}>×{mult}</span>}
      </div>
      {!levelMode && <TimerBar startedAt={round.startedAt} frozen={answered} />}

      {k ? (
        <>
          <p className="kq-tag">
            {t.knowledgeTag}
            {k.draft && <span className="draft">{t.draftTag}</span>}
          </p>
          <p className="q">{k.question[lang]}</p>
          <div className="kq-options">
            {q.options.map((key) => (
              <button key={key} className={optionClass(key)} disabled={optionsDisabled} onClick={() => answer(key)}>
                {k.options[Number(key)][lang]}
              </button>
            ))}
          </div>
        </>
      ) : q.type === 'listen' ? (
        <>
          <p className="q">{t.qListen(family.word[lang])}</p>
          {playButton('listen', q.clips[0], t.playClip)}
          {q.options.map((key, i) => (
            <Fragment key={key}>
              {i > 0 && <div className="or">{t.or}</div>}
              <button className={optionClass(key)} disabled={optionsDisabled} onClick={() => answer(key)}>
                {name(key)}
              </button>
            </Fragment>
          ))}
        </>
      ) : (
        <>
          <p className="q">{t.qPick(<i>{name(q.correct)}</i>)}</p>
          {q.clips.map((c, i) => (
            <Fragment key={c.previewPath}>
              {i > 0 && <div className="or">{t.or}</div>}
              <div className="clip">
                {playButton(`clip-${i}`, c, t.playClipX(CLIP_LETTERS[i]))}
                <span>
                  {t.clip} {CLIP_LETTERS[i]}
                </span>
                <button
                  className={optionClass(c.subgenre)}
                  disabled={optionsDisabled}
                  onClick={() => answer(c.subgenre)}
                >
                  {t.thisOne}
                </button>
              </div>
            </Fragment>
          ))}
        </>
      )}

      <p className="hint">{hint}</p>
      <div className="foot">
        {streak}
        {answered ? (
          <button
            ref={nextButton}
            className="primary"
            onClick={() => {
              audio.stop()
              onNext()
            }}
          >
            {isGameOver(game) ? (levelMode ? t.result : 'GAME OVER ▸') : t.next}
          </button>
        ) : (
          <button className="link" onClick={() => answer(null)}>
            {t.skip}
          </button>
        )}
      </div>
      <div className="reveal">{reveal}</div>
    </>
  )
}

function OutcomeMessage({ outcome, levelMode }: { outcome: Outcome; levelMode: boolean }) {
  const { t } = useLanguage()
  if (levelMode && outcome.kind !== 'skippedFree') {
    return outcome.kind === 'correct' ? (
      <span className="gain">✓ {t.right}</span>
    ) : (
      <span className="loss">✗ {outcome.kind === 'skipped' ? t.skipped : t.wrong}</span>
    )
  }
  switch (outcome.kind) {
    case 'correct':
      return (
        <>
          <span className="gain">+{outcome.gained}</span>{' '}
          <span className="lbl">
            {BASE_POINTS} + {outcome.bonus} {t.bonus}
            {outcome.mult > 1 && ` × ${outcome.mult}`}
          </span>
        </>
      )
    case 'skippedFree':
      return <span className="lbl">{t.skippedFree}</span>
    case 'skipped':
    case 'wrong':
      return (
        <>
          <span className="loss">−1 ♥</span>{' '}
          <span className="lbl">{outcome.kind === 'skipped' ? t.skipped : t.wrong}</span>
        </>
      )
  }
}
