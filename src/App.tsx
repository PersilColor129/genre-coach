import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { OfflineNotice } from './components/OfflineNotice'
import { LanguageProvider } from './i18n/LanguageContext'
import { Game } from './pages/Game'
import { Home } from './pages/Home'

export default function App() {
  return (
    <LanguageProvider>
      <OfflineNotice />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Game />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
