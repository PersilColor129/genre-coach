import { useLanguage } from '../i18n/LanguageContext'
import { useOnline } from '../pwa/useOnline'
import './OfflineNotice.css'

/** Bar at the top while offline: clips (Apple) and the leaderboard (Supabase) need the network. */
export function OfflineNotice() {
  const { t } = useLanguage()
  const online = useOnline()

  if (online) return null

  return (
    <div className="offline-notice" role="status">
      <p className="on-title">{t.offlineTitle}</p>
      <p className="on-text">{t.offlineText}</p>
    </div>
  )
}
