import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { OfflineNotice } from './components/OfflineNotice'
import { LanguageProvider } from './i18n/LanguageContext'
import { Game } from './pages/Game'
import { Home } from './pages/Home'
import { Hoercheck } from './pages/hoercheck/Hoercheck'
import { IS_TEST_BOARD } from './leaderboard/supabase'

export default function App() {
  return (
    <LanguageProvider>
      <OfflineNotice />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Listening check – only in local and preview builds, never on the live site */}
          {IS_TEST_BOARD && <Route path="/hoercheck" element={<Hoercheck />} />}
          <Route path="/:slug" element={<Game />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
