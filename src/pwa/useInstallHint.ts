import { useState, useSyncExternalStore } from 'react'
import { detectPlatform, readMemory, shouldShowHint, snoozed, writeMemory, type HintMemory } from './installHint'

/** Chrome/Android's install prompt (not in the TypeScript DOM types yet). */
type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

let deferredPrompt: BeforeInstallPromptEvent | null = null
const listeners = new Set<() => void>()
const notify = () => listeners.forEach((l) => l())

/** Call once at startup – the browser fires `beforeinstallprompt` early, before any hint is on screen. */
export function listenForInstallPrompt() {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault() // we show our own hint instead of Chrome's mini bar
    deferredPrompt = e as BeforeInstallPromptEvent
    notify()
  })
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null
    writeMemory({ ...readMemory(), never: true })
    notify()
  })
}

const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => {
    listeners.delete(l)
  }
}
const canPrompt = () => deferredPrompt !== null

const isStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches ||
  (navigator as Navigator & { standalone?: boolean }).standalone === true

export function recordFinishedGame() {
  const memory = readMemory()
  writeMemory({ ...memory, gamesFinished: memory.gamesFinished + 1 })
}

export function useInstallHint() {
  const prompt = useSyncExternalStore(subscribe, canPrompt, () => false)
  const [memory, setMemory] = useState(readMemory)
  const [platform] = useState(() => detectPlatform(navigator.userAgent, navigator.maxTouchPoints))
  const [openedAt] = useState(Date.now)

  const visible = shouldShowHint({ platform, standalone: isStandalone(), canPrompt: prompt, memory, now: openedAt })

  const update = (next: HintMemory) => {
    writeMemory(next)
    setMemory(next)
  }

  /** Android: opens the system install dialog. */
  const install = async () => {
    const e = deferredPrompt
    if (!e) return
    deferredPrompt = null
    notify()
    await e.prompt()
    if ((await e.userChoice).outcome === 'accepted') update({ ...memory, never: true })
  }

  return {
    visible,
    platform,
    install,
    snooze: () => update(snoozed(memory, Date.now())),
    never: () => update({ ...memory, never: true }),
  }
}
