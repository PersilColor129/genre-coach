import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// Manifest colours can't use CSS variables – keep in sync with --color-bg in src/styles/tokens.css.
const colorBg = '#0c0a18'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // New deploys are picked up on the next visit, nobody gets stuck on an old version.
      registerType: 'autoUpdate',
      manifest: {
        name: 'Genre Coach',
        short_name: 'Genre Coach',
        description: 'Erkenne den Sound: Drum & Bass, Techno oder Psytrance.',
        lang: 'de',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        theme_color: colorBg,
        background_color: colorBg,
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Only the app itself is cached. Audio clips (Apple) and the leaderboard (Supabase) always come from the network.
        globPatterns: ['**/*.{js,css,html,svg,png}'],
        globIgnores: ['og-image.png'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.googleapis.com',
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-css' },
          },
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.gstatic.com',
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-files',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
})
