import type { ReactNode } from 'react'

/** All UI texts. `en.tsx` must provide the same keys (TypeScript checks this). */
export const de = {
  // Home
  langName: 'Deutsch',
  tagline: 'ERKENNE DEN SOUND',
  pickGenre: 'WÄHLE EIN GENRE',
  langLabel: 'Sprache / Language',

  // Question
  question: (n: number) => `FRAGE ${n}`,
  qListen: (word: string) => `Welches ${word} hörst du?`,
  qPick: (name: ReactNode) => <>Welcher Clip ist {name}?</>,
  playClip: 'Clip abspielen',
  playClipX: (x: string) => `Clip ${x} abspielen`,
  or: 'oder',
  thisOne: 'Das ist es',
  clip: 'Clip',
  hintPlay: 'Drück Play – der Bonus-Timer läuft ab dem ersten Ton.',
  streak: (n: number) => `SERIE ${n}`,
  skip: 'Überspringen',
  bonus: 'Bonus',
  skippedFree: 'Übersprungen – kein Leben verloren.',
  skipped: 'Übersprungen',
  wrong: 'Daneben',
  source: 'Hörproben: Apple Music',
  next: 'WEITER ▸',
  clipError: 'Dieser Clip lässt sich gerade nicht abspielen – überspringen kostet hier kein Leben.',

  // Mistakes
  wasThat: (word: string) => `Welches ${word} war das?`,
  skippedParen: '(übersprungen)',
  why: 'WARUM',
  whatMakes: (n: string) => `Was macht ${n} aus?`,
  howRecognize: (n: string) => `Woran erkennst du ${n}?`,
  heard: (n: string) => `Gehört (${n})`,

  // Game over & leaderboard
  points: 'Punkte',
  correct: 'Richtig',
  bestStreak: 'Beste Serie',
  boardLoading: 'Bestenliste wird geladen …',
  boardDown: 'Die Bestenliste ist gerade nicht erreichbar – spielen geht trotzdem.',
  boardEmpty: 'Noch keine Einträge – sei die erste Person auf der Liste.',
  newHi: 'NEUER HIGHSCORE!',
  enterInitials: 'Trag deine drei Buchstaben ein:',
  letterPrev: 'Buchstabe zurück',
  letterNext: 'Buchstabe vor',
  save: 'EINTRAGEN ▸',
  saving: 'SPEICHERT …',
  retry: 'NOCHMAL VERSUCHEN ▸',
  saveErr: 'Speichern hat nicht geklappt – prüf deine Verbindung und versuch es erneut.',
  keysHint: 'Tastatur: Buchstaben tippen, ←/→ wechseln, Enter speichert.',
  leaderboard: 'BESTENLISTE',
  testBoard: 'TESTVERSION – eigene Bestenliste',
  again: 'NOCHMAL ▸',
  otherGenres: '◂ ANDERE GENRES',
  mistakes: 'DEINE FEHLER',

  // Start screen
  startTitle: (word: string): [string, string] => ['ERKENNST DU', `DAS ${word.toUpperCase()}?`],
  ruleLives: 'Drei Leben. Jede falsche Antwort kostet eins, Überspringen auch.',
  ruleSpeed: (b: number) =>
    `Schnell sein lohnt sich: Bis zu ${b} Bonuspunkte, wenn du direkt nach dem ersten Ton antwortest.`,
  ruleStreak: 'Serien zählen: Alle drei richtigen Antworten in Folge steigt der Multiplikator, bis ×4.',
  pressStart: 'DRÜCK START',
  lives: 'Leben',

  // Coach mode (rounds, difficulty levels)
  ruleRounds: 'Runden à 5 Fragen – das Spiel passt sich deinem Können an und wird mit der Zeit schwerer.',
  levelLabel: (n: number) => `LEVEL ${n}`,
  qHear: 'Was hörst du hier?',
  tipLabel: 'Hör-Tipp',
  roundResult: 'AUSWERTUNG ▸',
  roundDone: (n: number) => `RUNDE ${n} GESCHAFFT`,
  thisRound: 'diese Runde',
  total: 'gesamt',
  levelUp: (n: number) => `▲ LEVEL ${n} – jetzt wird's schwerer`,
  levelDown: (n: number) => `▼ LEVEL ${n} – ein Schritt zurück`,
  nextRound: 'NÄCHSTE RUNDE ▸',
  questionOf: (n: number, total: number) => `FRAGE ${n}/${total}`,
  correctOf: (c: number, total: number) => `${c} von ${total} richtig`,
  knowledgeTag: 'WISSENSFRAGE',
  draftTag: 'TEST',
  yourAnswer: 'Deine Antwort',

  // Listening check (preview builds only)
  hcIntro: (secs: number, from: number) =>
    `Hier hörst du genau den Ausschnitt, den das Spiel spielt: ${secs} Sekunden, normalerweise ab Sekunde ${from} der Apple-Vorschau (grüner Balken). Mit „Ganze Vorschau“ hörst du alle 30 Sekunden und kannst den Start verschieben.`,
  hcOk: (n: number) => `${n} PASST`,
  hcLater: (n: number) => `${n} NEUER START`,
  hcOut: (n: number) => `${n} RAUS`,
  hcOpen: (n: number) => `${n} OFFEN`,
  hcOnlyNew: 'Nur Kandidaten zeigen (noch nicht im Spiel)',
  hcCandidate: 'KANDIDAT',
  hcClipRange: (from: number, to: number) => `Clip ${from}–${to} s`,
  hcPlayClip: 'Clip wie im Spiel',
  hcPlayFull: 'Ganze Vorschau',
  hcDecision: 'Entscheidung',
  hcKeep: 'PASST',
  hcMove: 'AB SEK.',
  hcDrop: 'RAUS',
  hcEarlier: 'Eine Sekunde früher',
  hcLaterBtn: 'Eine Sekunde später',
  hcFrom: (s: number) => `AB SEKUNDE ${s}`,
  hcHere: (s: number) => `AB HIER (${s} S)`,
  hcNote: 'Notiz (optional)',
  hcCopy: 'ERGEBNIS KOPIEREN ▸',
  hcCopied: 'Kopiert – füg den Text im Chat mit Claude ein.',
  hcCopyManual: 'Kopieren hat nicht geklappt. Markier den Text unten und kopier ihn von Hand.',

  // Offline (PWA)
  offlineTitle: 'KEINE VERBINDUNG',
  offlineText: 'Zum Spielen brauchst du Internet.',

  // Install hint (PWA)
  installTitle: '★ ALS APP SPIELEN',
  installText: 'Hol dir Genre Coach auf den Homescreen und starte die nächste Runde mit einem Tipp.',
  installHow: 'SO GEHT’S ▸',
  installNow: 'INSTALLIEREN ▸',
  installNever: 'Nicht mehr zeigen',
  installClose: 'Hinweis schließen',
  installStepsTitle: 'IN 3 SCHRITTEN ZUR APP',
  installStep1: 'Tippe in Safari auf „Teilen“ – bei neueren iPhones steckt es unter „•••“.',
  installStep2: 'Wähle „Zum Home-Bildschirm“.',
  installStep3: 'Tippe auf „Hinzufügen“ – fertig.',
  installGotIt: 'ALLES KLAR ▸',
}

export type Strings = typeof de
