import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router'
import { useAudioPlayer } from '../audio/useAudioPlayer'
import { GameOver } from '../components/GameOver'
import { Hud } from '../components/Hud'
import { QuestionView } from '../components/QuestionView'
import { StartScreen } from '../components/StartScreen'
import { familyBySlug } from '../data'
import type { GenreFamily } from '../data/types'
import { gameReducer, newGame, type GameAction, type GameState } from '../game/gameReducer'
import { drawQuestion } from '../game/questions'
import './Game.css'

export function Game() {
  const family = familyBySlug(useParams().slug)
  if (!family) return <Navigate to="/" replace />
  // key: switching between genres starts fresh
  return <GameScreen key={family.slug} family={family} />
}

type Screen = 'start' | 'playing' | 'over'

function GameScreen({ family }: { family: GenreFamily }) {
  const [screen, setScreen] = useState<Screen>('start')
  const [game, setGame] = useState<GameState | null>(null)
  const audio = useAudioPlayer()

  useEffect(() => {
    document.title = `Genre Coach – ${family.title} · Survival`
  }, [family])

  const dispatch = (action: GameAction) => setGame((g) => g && gameReducer(g, action))

  const start = () => {
    audio.stop()
    const { question, used } = drawQuestion(family.subgenres, [])
    setGame(newGame(question, used))
    setScreen('playing')
  }

  const next = () => {
    if (!game) return
    if (game.lives <= 0) {
      setScreen('over')
      return
    }
    const { question, used } = drawQuestion(family.subgenres, game.used)
    dispatch({ type: 'next', question, used })
  }

  return (
    <div className={`game-page theme-${family.theme}`}>
      <div className="game-card">
        <Hud brand={family.brand} lives={screen === 'start' ? null : (game?.lives ?? null)} score={game?.score ?? 0} />
        {screen === 'start' && <StartScreen family={family} onStart={start} />}
        {screen === 'playing' && game && (
          <QuestionView key={game.n} family={family} game={game} dispatch={dispatch} audio={audio} onNext={next} />
        )}
        {screen === 'over' && game && <GameOver family={family} game={game} onAgain={start} />}
      </div>
    </div>
  )
}
