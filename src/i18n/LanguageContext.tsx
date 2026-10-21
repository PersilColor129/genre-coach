import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Lang } from '../data/types'
import { de, type Strings } from './de'
import { en } from './en'

const STRINGS: Record<Lang, Strings> = { de, en }
const STORAGE_KEY = 'gc-lang'

const isLang = (l: unknown): l is Lang => l === 'de' || l === 'en'

/** Order: ?lang=de|en in the URL (old shared links) > last choice > browser language. */
function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLang(fromUrl)) return fromUrl
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLang(stored)) return stored
  } catch {
    // storage blocked (private mode) – fall through
  }
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en'
}

type LanguageState = { lang: Lang; setLang: (l: Lang) => void; t: Strings }

const LanguageContext = createContext<LanguageState | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      // ignore
    }
  }

  return <LanguageContext value={{ lang, setLang, t: STRINGS[lang] }}>{children}</LanguageContext>
}

// eslint-disable-next-line react/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
