import { useEffect, useRef, type KeyboardEvent } from 'react'
import { Link } from 'react-router'
import { InstallHint } from '../components/InstallHint'
import { LanguageSwitcher } from '../components/LanguageSwitcher'
import { FAMILIES } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import './Home.css'

const ARROWS = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']

export function Home() {
  const { t } = useLanguage()
  const cards = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    document.title = 'Genre Coach'
  }, [])

  // Arcade controls: arrow keys move between the genres, Enter starts.
  const onKeyDown = (e: KeyboardEvent) => {
    if (!ARROWS.includes(e.key)) return
    if ((e.target as HTMLElement).closest('.ldd')) return
    e.preventDefault()
    const i = cards.current.indexOf(document.activeElement as HTMLAnchorElement)
    const step = e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 1
    const next = i === -1 ? 0 : (i + step + FAMILIES.length) % FAMILIES.length
    cards.current[next]?.focus()
  }

  return (
    <div className="home" onKeyDown={onKeyDown} tabIndex={-1}>
      <div className="hud">
        <span aria-hidden="true">1UP 000000</span>
        <LanguageSwitcher />
      </div>

      <main>
        <h1>
          <span className="line">GENRE</span> <span className="line">COACH</span>
        </h1>
        <p className="tagline">{t.tagline}</p>

        <ul className="genres">
          {FAMILIES.map((f, i) => (
            <li key={f.slug}>
              <Link
                ref={(el) => {
                  cards.current[i] = el
                }}
                className={`genre-card theme-${f.theme}`}
                to={`/${f.slug}`}
              >
                <span className="name">
                  {f.cardName.split('\n').map((part, j) => (
                    <span key={j}>
                      {j > 0 && <br />}
                      {j > 0 && ' '}
                      {part}
                    </span>
                  ))}
                </span>
                <span className="bpm">{f.bpm}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <InstallHint />

      <footer>
        <span className="blink">{t.pickGenre}</span>
      </footer>
    </div>
  )
}
