import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useInstallHint } from '../pwa/useInstallHint'
import './InstallHint.css'

/** "Play as an app" card: instructions on iPhone/iPad, install button on Android. Renders nothing elsewhere. */
export function InstallHint() {
  const { t } = useLanguage()
  const { visible, platform, install, snooze, never } = useInstallHint()
  const [steps, setSteps] = useState(false)

  if (!visible) return null
  const ios = platform === 'iphone' || platform === 'ipad'

  return (
    <aside className="install-hint">
      <div className="ih-head">
        <p className="ih-title">{t.installTitle}</p>
        <button className="ih-x" aria-label={t.installClose} onClick={snooze}>
          ×
        </button>
      </div>
      <p className="ih-text">{t.installText}</p>
      <div className="ih-row">
        <button className="ih-btn" onClick={ios ? () => setSteps(true) : install}>
          {ios ? t.installHow : t.installNow}
        </button>
        <button className="ih-never" onClick={never}>
          {t.installNever}
        </button>
      </div>
      {steps && <IosSteps arrow={platform === 'iphone'} onClose={() => setSteps(false)} />}
    </aside>
  )
}

/** Overlay with the three Safari steps. On iPhone the arrow points at Safari's bottom bar. */
function IosSteps({ arrow, onClose }: { arrow: boolean; onClose: () => void }) {
  const { t } = useLanguage()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="ih-overlay" onClick={onClose}>
      <div
        className="install-hint ih-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ih-steps-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ih-head">
          <p className="ih-title" id="ih-steps-title">
            {t.installStepsTitle}
          </p>
          <button className="ih-x" aria-label={t.installClose} onClick={onClose}>
            ×
          </button>
        </div>
        <ol className="ih-steps">
          {[t.installStep1, t.installStep2, t.installStep3].map((step, i) => (
            <li key={i}>
              <span className="ih-num">{i + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <div className="ih-row ih-end">
          <button className="ih-btn" onClick={onClose} autoFocus>
            {t.installGotIt}
          </button>
        </div>
      </div>
      {arrow && (
        <p className="ih-arrow" aria-hidden="true">
          ▼
        </p>
      )}
    </div>
  )
}
