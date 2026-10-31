import { describe, expect, it } from 'vitest'
import { clipStart, CLIP_DEFAULT_START } from '../../audio/useAudioPlayer'
import { buildReport, type CheckTrack } from './report'

const track = (appleId: number, title: string): CheckTrack => ({
  appleId,
  artist: 'A',
  title,
  previewPath: 'p',
  subgenre: 'darkstep',
  subgenreName: 'Darkstep',
  isNew: true,
  candidate: false,
})

describe('clipStart', () => {
  it('starts at the default second unless a track sets its own', () => {
    expect(clipStart(30)).toBe(CLIP_DEFAULT_START)
    expect(clipStart(30, 14)).toBe(14)
  })

  it('always leaves a full 12-second clip', () => {
    expect(clipStart(30, 25)).toBe(18)
    expect(clipStart(10, 5)).toBe(0)
  })
})

describe('buildReport', () => {
  it('lists removals, new start points, notes and open tracks', () => {
    const tracks = [track(1, 'Out'), track(2, 'Later'), track(3, 'Fine'), track(4, 'Noted'), track(5, 'Open')]
    const report = buildReport(
      tracks,
      {
        1: { status: 'out', note: 'no drop' },
        2: { status: 'start', start: 14 },
        3: { status: 'ok' },
        4: { status: 'ok', note: 'great' },
      },
      '30.10.2026',
    )
    expect(report).toContain('✗ RAUS (1)\n- Darkstep: A – Out [1] – no drop')
    expect(report).toContain('A – Later [2] → ab Sekunde 14')
    expect(report).toContain('✓ PASST (2)\n- Darkstep: A – Fine [3]\n- Darkstep: A – Noted [4] – great')
    expect(report).toContain('… OFFEN (1)\n- Darkstep: A – Open [5]')
  })
})
