import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import { CLIP_DEFAULT_START, CLIP_SECONDS, clipStart } from '../../audio/useAudioPlayer'
import { dnb } from '../../data/dnb'
import { ITUNES_PREVIEW_BASE } from '../../data/types'
import { useLanguage } from '../../i18n/LanguageContext'
import { CANDIDATES } from './candidates'
import { buildReport, readVerdicts, writeVerdicts, type CheckTrack, type Verdict, type Verdicts } from './report'
import '../Game.css'
import './Hoercheck.css'

/** Subgenres added in Phase 3 – all their tracks are new. */
const NEW_SUBGENRES = ['intelligent', 'darkstep', 'techstep', 'drumfunk']
/** Deep / Minimal tracks added in Phase 3. */
const NEW_DEEP = [1678622218, 1746381857]
const PREVIEW_SECONDS = 30
const MAX_START = PREVIEW_SECONDS - CLIP_SECONDS

function allTracks(lang: 'de' | 'en'): CheckTrack[] {
  return Object.entries(dnb.subgenres).flatMap(([key, sub]) => {
    const own = sub.tracks.map((t) => ({
      ...t,
      subgenre: key,
      subgenreName: sub.name[lang],
      isNew: NEW_SUBGENRES.includes(key) || NEW_DEEP.includes(t.appleId),
      candidate: false,
    }))
    const extra = (CANDIDATES[key] ?? []).map((t) => ({
      ...t,
      subgenre: key,
      subgenreName: sub.name[lang],
      isNew: true,
      candidate: true,
    }))
    return [...own, ...extra]
  })
}

type Playing = { id: number; mode: 'clip' | 'full' } | null

/**
 * Listening check (preview builds only): plays exactly the clip the game plays,
 * lets you keep a track, move its clip start or drop it, and copies the result for Claude.
 */
export function Hoercheck() {
  const { lang, t } = useLanguage()
  const tracks = useMemo(() => allTracks(lang), [lang])
  const [verdicts, setVerdicts] = useState<Verdicts>(readVerdicts)
  const [onlyNew, setOnlyNew] = useState(true)
  const [playing, setPlaying] = useState<Playing>(null)
  const [time, setTime] = useState(0)
  const [copied, setCopied] = useState<'idle' | 'ok' | 'manual'>('idle')
  const [today] = useState(() => new Date().toLocaleDateString('de-DE'))
  const audio = useRef<HTMLAudioElement | null>(null)
  const stopAt = useRef<number | null>(null)

  useEffect(() => {
    document.title = 'Genre Coach – Hörcheck'
    return () => audio.current?.pause()
  }, [])

  const update = (id: number, change: Partial<Verdict>) => {
    setVerdicts((all) => {
      const next = { ...all, [id]: { ...all[id], ...change } }
      writeVerdicts(next)
      return next
    })
    setCopied('idle')
  }

  const stop = () => {
    audio.current?.pause()
    stopAt.current = null
    setPlaying(null)
  }

  const play = (track: CheckTrack, mode: 'clip' | 'full') => {
    if (playing?.id === track.appleId && playing.mode === mode) return stop()
    audio.current ??= new Audio()
    const a = audio.current
    a.pause()
    a.src = ITUNES_PREVIEW_BASE + track.previewPath
    const v = verdicts[track.appleId]
    const start = v?.status === 'start' ? v.start : track.start
    a.onloadedmetadata = () => {
      const from = mode === 'clip' ? clipStart(a.duration, start) : 0
      a.currentTime = from
      stopAt.current = mode === 'clip' ? from + CLIP_SECONDS : null
    }
    a.ontimeupdate = () => {
      setTime(a.currentTime)
      if (stopAt.current !== null && a.currentTime >= stopAt.current) stop()
    }
    a.onended = stop
    a.onerror = stop
    a.play().catch(stop)
    setTime(0)
    setPlaying({ id: track.appleId, mode })
  }

  const shown = onlyNew ? tracks.filter((tr) => tr.isNew) : tracks
  const groups = shown.reduce<{ key: string; name: string; tracks: CheckTrack[] }[]>((acc, tr) => {
    const last = acc.at(-1)
    if (last?.key === tr.subgenre) last.tracks.push(tr)
    else acc.push({ key: tr.subgenre, name: tr.subgenreName, tracks: [tr] })
    return acc
  }, [])
  const count = (s: NonNullable<Verdict['status']>) => shown.filter((tr) => verdicts[tr.appleId]?.status === s).length
  const decided = shown.filter((tr) => verdicts[tr.appleId]?.status).length
  const report = buildReport(shown, verdicts, today)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(report)
      setCopied('ok')
    } catch {
      setCopied('manual')
    }
  }

  return (
    <div className="game-page theme-dnb">
      <div className="game-card hc">
        <div className="top">
          <span className="brand">HÖRCHECK · DNB</span>
          <Link className="hc-home" to="/">
            {t.otherGenres}
          </Link>
        </div>

        <p className="hc-intro">{t.hcIntro(CLIP_SECONDS, CLIP_DEFAULT_START)}</p>

        <div className="hc-status">
          <span className="ok">{t.hcOk(count('ok'))}</span>
          <span className="later">{t.hcLater(count('start'))}</span>
          <span className="out">{t.hcOut(count('out'))}</span>
          <span>{t.hcOpen(shown.length - decided)}</span>
        </div>
        <label className="hc-filter">
          <input type="checkbox" checked={onlyNew} onChange={(e) => setOnlyNew(e.target.checked)} />
          {t.hcOnlyNew}
        </label>

        {groups.map((g) => (
          <section key={g.key} className="hc-group">
            <h2>{g.name}</h2>
            {g.tracks.map((tr) => {
              const v = verdicts[tr.appleId]
              const start = v?.status === 'start' ? (v.start ?? CLIP_DEFAULT_START) : (tr.start ?? CLIP_DEFAULT_START)
              const live = playing?.id === tr.appleId
              return (
                <div key={tr.appleId} className={`hc-track ${v?.status ?? ''}`}>
                  <div className="hc-name">
                    <b>{tr.title}</b>
                    {tr.candidate && <span className="hc-tag">{t.hcCandidate}</span>}
                    <span>{tr.artist}</span>
                  </div>

                  <div className="hc-timeline" aria-hidden="true">
                    <span
                      className="hc-window"
                      style={{ left: `${(start / PREVIEW_SECONDS) * 100}%`, width: `${(CLIP_SECONDS / PREVIEW_SECONDS) * 100}%` }}
                    />
                    {live && <span className="hc-head" style={{ left: `${(time / PREVIEW_SECONDS) * 100}%` }} />}
                  </div>
                  <div className="hc-scale" aria-hidden="true">
                    <span>0 s</span>
                    <span>{live ? `${Math.floor(time)} s` : t.hcClipRange(start, start + CLIP_SECONDS)}</span>
                    <span>30 s</span>
                  </div>

                  <div className="hc-play">
                    <button className={`btn ${live && playing.mode === 'clip' ? 'on' : ''}`} onClick={() => play(tr, 'clip')}>
                      {live && playing.mode === 'clip' ? '■' : '▶'} {t.hcPlayClip}
                    </button>
                    <button className={`btn ${live && playing.mode === 'full' ? 'on' : ''}`} onClick={() => play(tr, 'full')}>
                      {live && playing.mode === 'full' ? '■' : '▶'} {t.hcPlayFull}
                    </button>
                  </div>

                  <div className="hc-verdict" role="group" aria-label={t.hcDecision}>
                    <button aria-pressed={v?.status === 'ok'} className="v-ok" onClick={() => update(tr.appleId, { status: v?.status === 'ok' ? undefined : 'ok' })}>
                      ✓ {t.hcKeep}
                    </button>
                    <button
                      aria-pressed={v?.status === 'start'}
                      className="v-start"
                      onClick={() =>
                        update(tr.appleId, v?.status === 'start' ? { status: undefined } : { status: 'start', start: tr.start ?? CLIP_DEFAULT_START })
                      }
                    >
                      ⏩ {t.hcMove}
                    </button>
                    <button aria-pressed={v?.status === 'out'} className="v-out" onClick={() => update(tr.appleId, { status: v?.status === 'out' ? undefined : 'out' })}>
                      ✗ {t.hcDrop}
                    </button>
                  </div>

                  {v?.status === 'start' && (
                    <div className="hc-start">
                      <button aria-label={t.hcEarlier} onClick={() => update(tr.appleId, { start: Math.max(0, start - 1) })}>
                        −
                      </button>
                      <span>{t.hcFrom(start)}</span>
                      <button aria-label={t.hcLaterBtn} onClick={() => update(tr.appleId, { start: Math.min(MAX_START, start + 1) })}>
                        +
                      </button>
                      {live && playing.mode === 'full' && (
                        <button
                          className="hc-here"
                          onClick={() => update(tr.appleId, { start: Math.min(MAX_START, Math.floor(time)) })}
                        >
                          {t.hcHere(Math.min(MAX_START, Math.floor(time)))}
                        </button>
                      )}
                    </div>
                  )}

                  <input
                    className="hc-note"
                    id={`note-${tr.appleId}`}
                    value={v?.note ?? ''}
                    placeholder={t.hcNote}
                    aria-label={t.hcNote}
                    onChange={(e) => update(tr.appleId, { note: e.target.value })}
                  />
                </div>
              )
            })}
          </section>
        ))}

        <div className="hc-result">
          <button className="primary" onClick={copy}>
            {t.hcCopy}
          </button>
          {copied === 'ok' && <p className="hint">{t.hcCopied}</p>}
          {copied === 'manual' && (
            <>
              <p className="hint">{t.hcCopyManual}</p>
              <textarea readOnly value={report} rows={10} onFocus={(e) => e.target.select()} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
