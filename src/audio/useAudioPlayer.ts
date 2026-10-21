import { useCallback, useEffect, useRef, useState } from 'react'

const CLIP_SECONDS = 12 // how long a clip plays
const MAX_OFFSET = 8 // start up to 8s into the preview (skips quiet intros)

type PlayOptions = { onStart?: () => void; onError?: () => void }

/** Plays one preview clip at a time. `playingKey` identifies the button that is currently playing. */
export function useAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const stopTimer = useRef<number | undefined>(undefined)
  const playingRef = useRef<string | null>(null)
  const [playingKey, setPlayingKey] = useState<string | null>(null)

  const stop = useCallback(() => {
    audioRef.current?.pause()
    window.clearTimeout(stopTimer.current)
    playingRef.current = null
    setPlayingKey(null)
  }, [])

  const toggle = useCallback(
    (key: string, url: string, { onStart, onError }: PlayOptions = {}) => {
      if (playingRef.current === key) {
        stop()
        return
      }
      stop()
      audioRef.current ??= new Audio()
      const audio = audioRef.current
      audio.src = url
      audio.onloadedmetadata = () => {
        audio.currentTime = Math.max(0, Math.min(MAX_OFFSET, audio.duration - CLIP_SECONDS))
      }
      audio.onerror = () => {
        stop()
        onError?.()
      }
      audio.play().catch(() => {})
      playingRef.current = key
      setPlayingKey(key)
      stopTimer.current = window.setTimeout(stop, CLIP_SECONDS * 1000)
      onStart?.()
    },
    [stop],
  )

  // Stop the music when leaving the page.
  useEffect(() => stop, [stop])

  return { playingKey, toggle, stop }
}
