import { describe, expect, it } from 'vitest'
import { detectPlatform, shouldShowHint, snoozed, SNOOZE_DAYS, type HintMemory } from './installHint'

const IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 26_0 like Mac OS X) AppleWebKit/605.1.15 Version/26.0 Mobile/15E148 Safari/604.1'
const MAC = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Version/26.0 Safari/605.1.15'
const ANDROID = 'Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 Chrome/141.0 Mobile Safari/537.36'

const played: HintMemory = { gamesFinished: 1, snoozedUntil: 0, never: false }
const base = { platform: 'iphone' as const, standalone: false, canPrompt: false, memory: played, now: 1000 }

describe('detectPlatform', () => {
  it('tells iPhone, iPad, Android and desktop apart', () => {
    expect(detectPlatform(IPHONE, 5)).toBe('iphone')
    expect(detectPlatform(MAC, 5)).toBe('ipad') // iPadOS Safari reports a Mac UA
    expect(detectPlatform(MAC, 0)).toBe('other')
    expect(detectPlatform(ANDROID, 5)).toBe('android')
  })
})

describe('shouldShowHint', () => {
  it('shows on iPhone after the first finished round', () => {
    expect(shouldShowHint(base)).toBe(true)
    expect(shouldShowHint({ ...base, memory: { ...played, gamesFinished: 0 } })).toBe(false)
  })

  it('never shows inside the installed app or on desktop', () => {
    expect(shouldShowHint({ ...base, standalone: true })).toBe(false)
    expect(shouldShowHint({ ...base, platform: 'other', canPrompt: true })).toBe(false)
  })

  it('shows on Android only when the browser offers installing', () => {
    expect(shouldShowHint({ ...base, platform: 'android' })).toBe(false)
    expect(shouldShowHint({ ...base, platform: 'android', canPrompt: true })).toBe(true)
  })

  it('hides for a week after ×, and for good after "don\'t show again"', () => {
    const memory = snoozed(played, 1000)
    const week = SNOOZE_DAYS * 24 * 60 * 60 * 1000
    expect(shouldShowHint({ ...base, memory, now: 1000 + week - 1 })).toBe(false)
    expect(shouldShowHint({ ...base, memory, now: 1000 + week })).toBe(true)
    expect(shouldShowHint({ ...base, memory: { ...played, never: true } })).toBe(false)
  })
})
