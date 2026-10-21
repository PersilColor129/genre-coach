/*
 * When to show the "play as an app" hint. Pure logic (tested) plus storage helpers.
 * iPhone/iPad: Safari has no install button → we show step-by-step instructions.
 * Android: the browser fires `beforeinstallprompt` → we show a button that opens the system dialog.
 */

/**
 * Switched off for now: no own hint on any device. Android then shows Chrome's built-in install bar,
 * iPhone users can still install via Safari's share menu. Set to true to bring the hint back.
 */
export const INSTALL_HINT_ENABLED = false

export type Platform = 'iphone' | 'ipad' | 'android' | 'other'

export type HintMemory = {
  /** Finished rounds – the hint only appears after the first one. */
  gamesFinished: number
  /** Timestamp (ms) until which × hides the hint. */
  snoozedUntil: number
  /** "Don't show again". */
  never: boolean
}

export const SNOOZE_DAYS = 7
const STORAGE_KEY = 'gc-install-hint'
const EMPTY: HintMemory = { gamesFinished: 0, snoozedUntil: 0, never: false }

export function detectPlatform(userAgent: string, maxTouchPoints: number): Platform {
  if (/iPhone|iPod/.test(userAgent)) return 'iphone'
  // iPadOS Safari pretends to be a Mac; the touch screen gives it away.
  if (/iPad/.test(userAgent) || (/Macintosh/.test(userAgent) && maxTouchPoints > 1)) return 'ipad'
  if (/Android/.test(userAgent)) return 'android'
  return 'other'
}

type Situation = {
  platform: Platform
  /** Already running as an installed app. */
  standalone: boolean
  /** Android: the browser handed us its install prompt. */
  canPrompt: boolean
  memory: HintMemory
  now: number
}

export function shouldShowHint({ platform, standalone, canPrompt, memory, now }: Situation): boolean {
  if (standalone || memory.never || memory.gamesFinished < 1 || now < memory.snoozedUntil) return false
  if (platform === 'iphone' || platform === 'ipad') return true
  if (platform === 'android') return canPrompt
  return false
}

export function snoozed(memory: HintMemory, now: number): HintMemory {
  return { ...memory, snoozedUntil: now + SNOOZE_DAYS * 24 * 60 * 60 * 1000 }
}

export function readMemory(): HintMemory {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
    return { ...EMPTY, ...stored }
  } catch {
    return EMPTY
  }
}

export function writeMemory(memory: HintMemory) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memory))
  } catch {
    // storage blocked (private mode) – the hint just comes back next time
  }
}
