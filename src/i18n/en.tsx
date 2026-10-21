import type { ReactNode } from 'react'
import type { Strings } from './de'

export const en: Strings = {
  // Home
  langName: 'English',
  tagline: 'NAME THAT SOUND',
  pickGenre: 'PICK A GENRE',
  langLabel: 'Sprache / Language',

  // Question
  question: (n: number) => `QUESTION ${n}`,
  qListen: (word: string) => `Which ${word} do you hear?`,
  qPick: (name: ReactNode) => <>Which clip is {name}?</>,
  playClip: 'Play clip',
  playClipX: (x: string) => `Play clip ${x}`,
  or: 'or',
  thisOne: "That's it",
  clip: 'Clip',
  hintPlay: 'Hit play – the bonus timer starts with the first beat.',
  streak: (n: number) => `STREAK ${n}`,
  skip: 'Skip',
  bonus: 'bonus',
  skippedFree: 'Skipped – no life lost.',
  skipped: 'Skipped',
  wrong: 'Wrong',
  source: 'Previews: Apple Music',
  next: 'NEXT ▸',
  clipError: "This clip can't be played right now – skipping won't cost a life.",

  // Mistakes
  wasThat: (word: string) => `Which ${word} was that?`,
  skippedParen: '(skipped)',
  why: 'WHY',
  whatMakes: (n: string) => `What defines ${n}?`,
  howRecognize: (n: string) => `How do you recognise ${n}?`,
  heard: (n: string) => `Played (${n})`,

  // Game over & leaderboard
  points: 'Points',
  correct: 'Correct',
  bestStreak: 'Best streak',
  boardLoading: 'Loading leaderboard …',
  boardDown: 'The leaderboard is unavailable right now – you can still play.',
  boardEmpty: 'No entries yet – be the first on the board.',
  newHi: 'NEW HIGH SCORE!',
  enterInitials: 'Enter your three initials:',
  letterPrev: 'Previous letter',
  letterNext: 'Next letter',
  save: 'SAVE ▸',
  saving: 'SAVING …',
  retry: 'TRY AGAIN ▸',
  saveErr: 'Saving failed – check your connection and try again.',
  keysHint: 'Keyboard: type letters, ←/→ to move, Enter to save.',
  leaderboard: 'LEADERBOARD',
  testBoard: 'TEST VERSION – separate leaderboard',
  again: 'PLAY AGAIN ▸',
  otherGenres: '◂ OTHER GENRES',
  mistakes: 'YOUR MISTAKES',

  // Start screen
  startTitle: (word: string): [string, string] => ['CAN YOU NAME', `THE ${word.toUpperCase()}?`],
  ruleLives: 'Three lives. Every wrong answer costs one – so does skipping.',
  ruleSpeed: (b: number) => `Speed pays off: up to ${b} bonus points if you answer right after the first beat.`,
  ruleStreak: 'Streaks count: every three correct answers in a row raise the multiplier, up to ×4.',
  pressStart: 'PRESS START',
  lives: 'Lives',

  // Install hint (PWA)
  installTitle: '★ PLAY AS AN APP',
  installText: 'Add Genre Coach to your home screen and start your next round with one tap.',
  installHow: 'HOW IT WORKS ▸',
  installNow: 'INSTALL ▸',
  installNever: 'Don’t show again',
  installClose: 'Close hint',
  installStepsTitle: '3 STEPS TO THE APP',
  installStep1: 'In Safari, tap “Share” – on newer iPhones it’s under “•••”.',
  installStep2: 'Choose “Add to Home Screen”.',
  installStep3: 'Tap “Add” – done.',
  installGotIt: 'GOT IT ▸',
}
