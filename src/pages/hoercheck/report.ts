import type { Track } from '../../data/types'

/** Decision for one track in the listening check. */
export type Verdict = {
  /** undefined = not decided yet (a note can exist without a decision). */
  status?: 'ok' | 'start' | 'out'
  /** Clip start in seconds (status "start"). */
  start?: number
  note?: string
}

export type Verdicts = Record<string, Verdict>

export type CheckTrack = Track & { subgenre: string; subgenreName: string; isNew: boolean; candidate: boolean }

const STORAGE_KEY = 'gc-hoercheck'

export function readVerdicts(): Verdicts {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
  } catch {
    return {}
  }
}

export function writeVerdicts(verdicts: Verdicts) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(verdicts))
  } catch {
    // storage blocked (private mode) – the result can still be copied before leaving
  }
}

const line = (t: CheckTrack, v?: Verdict) =>
  `- ${t.subgenreName}: ${t.artist} – ${t.title} [${t.appleId}]${t.candidate ? ' (Kandidat)' : ''}${v?.note ? ` – ${v.note}` : ''}`

/** Plain-text result to paste into the chat. Tracks without a decision are listed as open. */
export function buildReport(tracks: CheckTrack[], verdicts: Verdicts, date: string): string {
  const by = (status: NonNullable<Verdict['status']>) => tracks.filter((t) => verdicts[t.appleId]?.status === status)
  const ok = by('ok')
  const start = by('start')
  const out = by('out')
  const open = tracks.filter((t) => !verdicts[t.appleId]?.status)

  const parts = [`HÖRCHECK DnB (${date}) · ${tracks.length} Tracks`]
  parts.push(`\n✗ RAUS (${out.length})`, ...out.map((t) => line(t, verdicts[t.appleId])))
  parts.push(
    `\n⏩ ANDERER START (${start.length})`,
    ...start.map((t) => `${line(t, verdicts[t.appleId])} → ab Sekunde ${verdicts[t.appleId]!.start}`),
  )
  parts.push(`\n✓ PASST (${ok.length})`, ...ok.map((t) => line(t, verdicts[t.appleId])))
  if (open.length) parts.push(`\n… OFFEN (${open.length})`, ...open.map((t) => line(t, verdicts[t.appleId])))
  return parts.join('\n')
}
