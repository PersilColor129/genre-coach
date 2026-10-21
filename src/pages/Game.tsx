import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router'
import { useAudioPlayer } from '../audio/useAudioPlayer'
import { GameOver } from '../components/GameOver'
import { Hud } from '../components/Hud'
import { LevelResultView, LevelSelect } from '../components/Levels'
import { QuestionView } from '../components/QuestionView'
import { StartScreen } from '../components/StartScreen'
import { familyBySlug } from '../data'
import type { GenreFamily } from '../data/types'
import { gameReducer, isGameOver, newGame, newLevelGame, type GameAction, type GameState } from '../game/gameReducer'
import { applyResult, readProgress, writeProgress, type LevelResult } from '../game/levelProgress'
import { drawLevelQuestion, drawQuestion } from '../game/questions'
import { LEVEL_QUESTIONS, percent } from '../game/rules'
import { useLanguage } from '../i18n/LanguageContext'
import './Game.css'

export function Game() {
  const family = familyBySlug(useParams().slug)
  if (!family) return <Navigate to="/" replace />
  // key: switching between genres starts fresh
  return <GameScreen key={family.slug} family={family} />
}

/** levels: learning path (games with levels only) · start/playing/over: endless mode or a level round */
type Screen = 'levels' | 'start' | 'playing' | 'over'

function GameScreen({ family }: { family: GenreFamily }) {
  const { t } = useLanguage()
  const hasLevels = !!family.levels?.length
  const [screen, setScreen] = useState<Screen>(hasLevels ? 'levels' : 'start')
  const [game, setGame] = useState<GameState | null>(null)
  /** Index of the level being played, null = endless mode. */
  const [level, setLevel] = useState<number | null>(null)
  const [progress, setProgress] = useState(() => readProgress(family.slug))
  const [result, setResult] = useState<LevelResult | null>(null)
  const audio = useAudioPlayer()

  useEffect(() => {
    document.title = `Genre Coach – ${family.title} · Survival`
  }, [family])

  const dispatch = (action: GameAction) => setGame((g) => g && gameReducer(g, action))

  const start = () => {
    audio.stop()
    const { question, used } = drawQuestion(family.subgenres, [])
    setLevel(null)
    setGame(newGame(question, used))
    setScreen('playing')
  }

  const startLevel = (index: number) => {
    audio.stop()
    const { question, used } = drawLevelQuestion(family, index, [])
    setLevel(index)
    setResult(null)
    setGame(newLevelGame(question, used, LEVEL_QUESTIONS))
    setScreen('playing')
  }

  const toLevels = () => {
    audio.stop()
    setScreen('levels')
  }

  const finishLevel = (g: GameState, index: number) => {
    const total = g.total!
    const merged = applyResult(progress, family.levels!.length, index, g.correct, total, percent(g.correct, total))
    writeProgress(family.slug, merged.progress)
    setProgress(merged.progress)
    setResult(merged.result)
  }

  const next = () => {
    if (!game) return
    if (isGameOver(game)) {
      if (level !== null) finishLevel(game, level)
      setScreen('over')
      return
    }
    const { question, used } =
      level === null ? drawQuestion(family.subgenres, game.used) : drawLevelQuestion(family, level, game.used)
    dispatch({ type: 'next', question, used })
  }

  const inGame = screen === 'playing' || screen === 'over'
  const inLevel = level !== null && inGame

  return (
    <div className={`game-page theme-${family.theme}`}>
      <div className="game-card">
        <Hud
          brand={family.brand}
          lives={inGame ? (game?.lives ?? null) : null}
          score={inGame ? (game?.score ?? 0) : 0}
          right={inLevel ? t.level(level + 1) : undefined}
        />
        {screen === 'levels' && (
          <LevelSelect family={family} progress={progress} onLevel={startLevel} onEndless={() => setScreen('start')} />
        )}
        {screen === 'start' && <StartScreen family={family} onStart={start} onBack={hasLevels ? toLevels : undefined} />}
        {screen === 'playing' && game && (
          <QuestionView key={game.n} family={family} game={game} dispatch={dispatch} audio={audio} onNext={next} />
        )}
        {screen === 'over' && game && level === null && <GameOver family={family} game={game} onAgain={start} />}
        {screen === 'over' && game && level !== null && result && (
          <LevelResultView
            family={family}
            game={game}
            result={result}
            onAgain={() => startLevel(level)}
            onNextLevel={() => (level + 1 < family.levels!.length ? startLevel(level + 1) : setScreen('start'))}
            onBack={toLevels}
          />
        )}
      </div>
    </div>
  )
}
