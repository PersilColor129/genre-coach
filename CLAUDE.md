# Genre Coach

Retro-arcade quiz for electronic music: hear a 30s Apple Music preview, name the subgenre. Three games (Drum & Bass, Techno, Psytrance), German + English.

## Stack
- React 19 + Vite + TypeScript, React Router. Tests: Vitest (`npm test`). Check: `npx tsc -b && npx oxlint && npm test`.
- Hosting: Vercel (auto-deploy from GitHub `main`; every branch gets a preview URL).
- Leaderboard: Supabase table `highscores` (REST via fetch, `src/leaderboard/`).

## Where things live
- Game content (subgenres, descriptions, tracks): `src/data/` – one file per game. New content = new data, not new code.
- Game rules (points, lives, streak): `src/game/` – pure logic, covered by tests.
- UI texts: `src/i18n/de.tsx` + `en.tsx` – always add both.
- Roadmap: `plan.md`.

## Rules
- Talk to the user in German; code, comments and commit messages in English.
- Design: retro pixel look. Colours/fonts only from `src/styles/tokens.css` (and theme roles in `themes.css`), never raw values. Details: `docs/design-system.md`.
- Test leaderboard: only Vercel Production sets `VITE_LEADERBOARD_ENV=production`. Everywhere else scores go to `<game>-test`. Never point local/preview builds at the real board.
- Never change a game's `leaderboardId` (`dnb`, `techno`, `psy`) – existing highscores depend on it.
- Work on a branch, not directly on `main`.
