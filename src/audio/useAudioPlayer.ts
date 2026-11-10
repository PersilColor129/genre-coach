import { useCallback, useEffect, useRef, useState } from 'react'

export const CLIP_SECONDS = 12 // how long a clip plays
export const CLIP_DEFAULT_START = 8 // start 8s into the preview (skips quiet intros)

/** Where the clip starts in a preview of `duration` seconds – a track's own `start` or the default, always leaving a full clip. */
export const clipStart = (duration: number, start = CLIP_DEFAULT_START) =>
  Math.max(0, Math.min(start, duration - CLIP_SECONDS))

type PlayOptions = { onStart?: () => void; onError?: () => void; start?: number }

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
    (key: string, url: string, { onStart, onError, start }: PlayOptions = {}) => {
      if (playingRef.current === key) {
        stop()
        return
      }
      stop()
      audioRef.current ??= new Audio()
      const audio = audioRef.current
      audio.src = url
      audio.onloadedmetadata = () => {
        audio.currentTime = clipStart(audio.duration, start)
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
