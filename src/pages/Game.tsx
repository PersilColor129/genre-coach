import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router'
import { useAudioPlayer } from '../audio/useAudioPlayer'
import { GameOver } from '../components/GameOver'
import { Hud } from '../components/Hud'
import { QuestionView } from '../components/QuestionView'
import { RoundEnd } from '../components/RoundEnd'
import { StartScreen } from '../components/StartScreen'
import { familyBySlug } from '../data'
import type { GenreFamily } from '../data/types'
import {
  gameReducer,
  isGameOver,
  isRoundOver,
  newCoachGame,
  newGame,
  type GameAction,
  type GameState,
} from '../game/gameReducer'
import { drawQuestion, drawStageQuestion } from '../game/questions'
import { nextStage } from '../game/rules'
import { readStage, writeStage } from '../game/stageMemory'
import './Game.css'

export function Game() {
  const family = familyBySlug(useParams().slug)
  if (!family) return <Navigate to="/" replace />
  // key: switching between genres starts fresh
  return <GameScreen key={family.slug} family={family} />
}

/** round: coach mode only – the summary between two rounds */
type Screen = 'start' | 'playing' | 'round' | 'over'

/**
 * Games with difficulty stages (`levels`) run in coach mode: rounds of five questions, the stage adapts after
 * each round. Games without them keep the classic endless mode. Lives, points and leaderboard work the same.
 */
function GameScreen({ family }: { family: GenreFamily }) {
  const stages = family.levels?.length ?? 0
  const [screen, setScreen] = useState<Screen>('start')
  const [game, setGame] = useState<GameState | null>(null)
  /** Coach mode: stage of the next round, worked out when a round ends. */
  const [upcoming, setUpcoming] = useState(0)
  const audio = useAudioPlayer()

  useEffect(() => {
    document.title = `Genre Coach – ${family.title}`
  }, [family])

  const dispatch = (action: GameAction) => setGame((g) => g && gameReducer(g, action))

  const draw = (stage: number | undefined, used: string[]) =>
    stage === undefined ? drawQuestion(family.subgenres, used) : drawStageQuestion(family, stage, used)

  const start = () => {
    audio.stop()
    if (stages) {
      const stage = readStage(family.slug, stages)
      const { question, used } = draw(stage, [])
      setGame(newCoachGame(question, used, stage))
    } else {
      const { question, used } = draw(undefined, [])
      setGame(newGame(question, used))
    }
    setScreen('playing')
  }

  const next = () => {
    if (!game) return
    if (isGameOver(game)) {
      setScreen('over')
      return
    }
    if (game.coach && isRoundOver(game)) {
      const stage = nextStage(game.coach.stage, game.correct - game.coach.roundCorrectFrom, stages)
      writeStage(family.slug, stage)
      setUpcoming(stage)
      setScreen('round')
      return
    }
    const { question, used } = draw(game.coach?.stage, game.used)
    dispatch({ type: 'next', question, used })
  }

  const nextRound = () => {
    if (!game) return
    const { question, used } = draw(upcoming, game.used)
    dispatch({ type: 'nextRound', question, used, stage: upcoming })
    setScreen('playing')
  }

  const inGame = screen !== 'start'
  // The level change shows on the first question of the new round (and stays visible for the round).
  const level = game?.coach && inGame ? { stage: game.coach.stage, change: game.coach.stageChange } : undefined

  return (
    <div className={`game-page theme-${family.theme}`}>
      <div className="game-card">
        <Hud
          brand={family.brand}
          lives={inGame ? (game?.lives ?? null) : null}
          score={inGame ? (game?.score ?? 0) : 0}
          level={level}
        />
        {screen === 'start' && <StartScreen family={family} onStart={start} />}
        {screen === 'playing' && game && (
          <QuestionView key={game.n} family={family} game={game} dispatch={dispatch} audio={audio} onNext={next} />
        )}
        {screen === 'round' && game && <RoundEnd game={game} next={upcoming} onNext={nextRound} />}
        {screen === 'over' && game && <GameOver family={family} game={game} onAgain={start} />}
      </div>
    </div>
  )
}
