import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import type { Lang } from '../data/types'
import { de } from '../i18n/de'
import { en } from '../i18n/en'
import { useLanguage } from '../i18n/LanguageContext'
import './LanguageSwitcher.css'

const LANGS: Lang[] = ['de', 'en']
const NAMES: Record<Lang, string> = { de: de.langName, en: en.langName }

function Flag({ lang }: { lang: Lang }) {
  const clipId = useId()
  if (lang === 'de') {
    return (
      <svg viewBox="0 0 5 3" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="5" height="1" fill="#000" />
        <rect y="1" width="5" height="1" fill="#DD0000" />
        <rect y="2" width="5" height="1" fill="#FFCE00" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <clipPath id={clipId}>
        <path d="M30,15h30v15zv15h-30zh-30v-15zv-15h30z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0L60,30M60,0L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0L60,30M60,0L0,30" clipPath={`url(#${clipId})`} stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0v30M0,15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0v30M0,15h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  )
}

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const box = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)
  const options = useRef<(HTMLButtonElement | null)[]>([])
  const menuId = useId()

  // Close when clicking anywhere else.
  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (!box.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [open])

  // Focus the selected language when the menu opens.
  useEffect(() => {
    if (open) options.current[LANGS.indexOf(lang)]?.focus()
  }, [open, lang])

  const close = (refocus: boolean) => {
    setOpen(false)
    if (refocus) button.current?.focus()
  }

  const onMenuKey = (e: KeyboardEvent) => {
    const i = options.current.indexOf(document.activeElement as HTMLButtonElement)
    if (e.key === 'Escape') {
      e.preventDefault()
      close(true)
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      e.stopPropagation()
      const step = e.key === 'ArrowDown' ? 1 : -1
      options.current[(i + step + LANGS.length) % LANGS.length]?.focus()
    }
  }

  return (
    <div className={`ldd ${open ? 'open' : ''}`} ref={box}>
      <button
        ref={button}
        className="ldd-btn"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={t.langLabel}
        onClick={() => setOpen(!open)}
      >
        <span className="flag">
          <Flag lang={lang} />
        </span>
        <span>{lang.toUpperCase()}</span>
        <span className="chev" aria-hidden="true">
          ▼
        </span>
      </button>
      <div className="ldd-menu" id={menuId} role="listbox" aria-label={t.langLabel} hidden={!open} onKeyDown={onMenuKey}>
        {LANGS.map((l, i) => (
          <button
            key={l}
            ref={(el) => {
              options.current[i] = el
            }}
            type="button"
            role="option"
            aria-selected={l === lang}
            onClick={() => {
              setLang(l)
              close(true)
            }}
          >
            <span className="flag">
              <Flag lang={l} />
            </span>
            {NAMES[l]}
            <span className="ck" aria-hidden="true">
              {l === lang ? '✓' : ''}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
