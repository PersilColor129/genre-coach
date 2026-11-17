import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router'
import { CLIP_DEFAULT_START, CLIP_SECONDS, clipStart } from '../../audio/useAudioPlayer'
import { dnb } from '../../data/dnb'
import { FAMILIES, familyBySlug } from '../../data'
import { ITUNES_PREVIEW_BASE, type GenreFamily } from '../../data/types'
import { useLanguage } from '../../i18n/LanguageContext'
import { CANDIDATES, HIDDEN_SUBGENRES } from './candidates'
import { buildReport, readVerdicts, writeVerdicts, type CheckTrack, type Verdict, type Verdicts } from './report'
import '../Game.css'
import './Hoercheck.css'

const PREVIEW_SECONDS = 30
const MAX_START = PREVIEW_SECONDS - CLIP_SECONDS

function allTracks(family: GenreFamily, lang: 'de' | 'en'): CheckTrack[] {
  const hidden = HIDDEN_SUBGENRES[family.slug] ?? []
  const candidates = CANDIDATES[family.slug] ?? {}
  const keys = [...Object.keys(family.subgenres), ...Object.keys(candidates).filter((k) => !family.subgenres[k])]
  return keys
    .filter((key) => !hidden.includes(key))
    .flatMap((key) => {
      const sub = family.subgenres[key]
      const name = sub?.name[lang] ?? candidates[key]?.name?.[lang] ?? key
      const own = (sub?.tracks ?? []).map((t) => ({ ...t, subgenre: key, subgenreName: name, candidate: false }))
      const extra = (candidates[key]?.tracks ?? []).map((t) => ({ ...t, subgenre: key, subgenreName: name, candidate: true }))
      return [...own, ...extra]
    })
}

type Playing = { id: number; mode: 'clip' | 'full' } | null

/** Route /hoercheck/:slug – without a slug it opens Drum & Bass. */
export function Hoercheck() {
  const { slug } = useParams()
  const family = familyBySlug(slug) ?? dnb
  return <HoercheckPage key={family.slug} family={family} />
}

/**
 * Listening check (preview builds only): plays exactly the clip the game plays,
 * lets you keep a track, move its clip start or drop it, and copies the result for Claude.
 */
function HoercheckPage({ family }: { family: GenreFamily }) {
  const { lang, t } = useLanguage()
  const tracks = useMemo(() => allTracks(family, lang), [family, lang])
  const [verdicts, setVerdicts] = useState<Verdicts>(readVerdicts)
  const [onlyNew, setOnlyNew] = useState(false)
  /** Subgenre key to show alone ('' = all) – for comparing the tracks of one subgenre. */
  const [only, setOnly] = useState('')
  const [playing, setPlaying] = useState<Playing>(null)
  const [time, setTime] = useState(0)
  const [copied, setCopied] = useState<'idle' | 'ok' | 'manual'>('idle')
  const [today] = useState(() => new Date().toLocaleDateString('de-DE'))
  const audio = useRef<HTMLAudioElement | null>(null)
  const stopAt = useRef<number | null>(null)
  /** Second to jump to once the preview has loaded (set while scrubbing). */
  const pendingFrom = useRef<number | null>(null)

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

  const play = (track: CheckTrack, mode: 'clip' | 'full', from?: number) => {
    if (from === undefined && playing?.id === track.appleId && playing.mode === mode) return stop()
    audio.current ??= new Audio()
    const a = audio.current
    a.pause()
    a.src = ITUNES_PREVIEW_BASE + track.previewPath
    const v = verdicts[track.appleId]
    const start = v?.status === 'start' ? v.start : track.start
    pendingFrom.current = from ?? null
    a.onloadedmetadata = () => {
      const scrubbed = pendingFrom.current
      pendingFrom.current = null
      const at = scrubbed ?? (mode === 'clip' ? clipStart(a.duration, start) : 0)
      a.currentTime = at
      stopAt.current = mode === 'clip' && scrubbed === null ? at + CLIP_SECONDS : null
    }
    a.ontimeupdate = () => {
      setTime(a.currentTime)
      if (stopAt.current !== null && a.currentTime >= stopAt.current) stop()
    }
    a.onended = stop
    a.onerror = stop
    a.play().catch(stop)
    setTime(from ?? 0)
    setPlaying({ id: track.appleId, mode })
  }

  /** Jump to a second of the preview; starts the full preview there if this track isn't playing. */
  const seek = (track: CheckTrack, seconds: number) => {
    const at = Math.min(PREVIEW_SECONDS, Math.max(0, seconds))
    const a = audio.current
    if (playing?.id !== track.appleId || !a) return play(track, 'full', at)
    if (a.readyState >= 1) {
      a.currentTime = at
      stopAt.current = null
    } else {
      pendingFrom.current = at
    }
    if (playing.mode !== 'full') setPlaying({ id: track.appleId, mode: 'full' })
    setTime(at)
  }

  const secondsAt = (e: React.PointerEvent<HTMLDivElement>) => {
    const box = e.currentTarget.getBoundingClientRect()
    return ((e.clientX - box.left) / box.width) * PREVIEW_SECONDS
  }

  const subgenres = [...new Map(tracks.map((tr) => [tr.subgenre, tr.subgenreName])).entries()]
  const shown = tracks.filter((tr) => (!onlyNew || tr.candidate) && (!only || tr.subgenre === only))
  const groups = shown.reduce<{ key: string; name: string; tracks: CheckTrack[] }[]>((acc, tr) => {
    const last = acc.at(-1)
    if (last?.key === tr.subgenre) last.tracks.push(tr)
    else acc.push({ key: tr.subgenre, name: tr.subgenreName, tracks: [tr] })
    return acc
  }, [])
  const count = (s: NonNullable<Verdict['status']>) => shown.filter((tr) => verdicts[tr.appleId]?.status === s).length
  const decided = shown.filter((tr) => verdicts[tr.appleId]?.status).length
  const report = buildReport(shown, verdicts, today, family.title)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(report)
      setCopied('ok')
    } catch {
      setCopied('manual')
    }
  }

  return (
    <div className={`game-page theme-${family.theme}`}>
      <div className="game-card hc">
        <div className="top">
          <span className="brand">HÖRCHECK · {family.brand}</span>
          <Link className="hc-home" to="/">
            {t.otherGenres}
          </Link>
        </div>

        <nav className="hc-games">
          {FAMILIES.map((f) => (
            <Link key={f.slug} to={`/hoercheck/${f.slug}`} aria-current={f.slug === family.slug ? 'page' : undefined}>
              {f.brand}
            </Link>
          ))}
        </nav>

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
        <label className="hc-only">
          {t.hcSubgenre}
          <select value={only} onChange={(e) => setOnly(e.target.value)}>
            <option value="">{t.hcAll}</option>
            {subgenres.map(([key, name]) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </select>
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

                  <div
                    className="hc-timeline"
                    role="slider"
                    tabIndex={0}
                    aria-label={t.hcScrub}
                    aria-valuemin={0}
                    aria-valuemax={PREVIEW_SECONDS}
                    aria-valuenow={live ? Math.floor(time) : 0}
                    onPointerDown={(e) => {
                      e.currentTarget.setPointerCapture(e.pointerId)
                      seek(tr, secondsAt(e))
                    }}
                    onPointerMove={(e) => {
                      if (e.currentTarget.hasPointerCapture(e.pointerId)) seek(tr, secondsAt(e))
                    }}
                    onKeyDown={(e) => {
                      const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
                      if (!step) return
                      e.preventDefault()
                      seek(tr, (live ? time : 0) + step)
                    }}
                  >
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
