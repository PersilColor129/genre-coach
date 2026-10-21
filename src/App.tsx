import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { LanguageProvider } from './i18n/LanguageContext'
import { Game } from './pages/Game'
import { Home } from './pages/Home'

export default function App() {
  return (
    <LanguageProvider>
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
