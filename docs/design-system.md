# Design system

Genre Coach looks like an 80s/90s arcade machine: dark screen with scanlines, neon colours, hard pixel shadows, pixel font for "machine" text.

All values live in `src/styles/tokens.css`. Components never use raw colours – only tokens or the theme roles below.

## Colours

| Token | Use |
|---|---|
| `--color-bg` | page background, inside of buttons and inputs |
| `--color-card` | the game card / genre cards |
| `--color-line` / `--color-line-soft` | borders, neutral button shadows, empty slots / dividers |
| `--color-text` / `--color-text-muted` | main text / secondary text, labels |
| `--color-white` | big titles only (with the coloured "glitch" text shadow) |
| `--color-lime`, `--color-cyan`, `--color-pink`, `--color-orange` | neon accents, each with a `-shadow` partner |

### One colour per game

Each game has its own accent, matching its card on the home screen. Components don't pick neon colours directly; they use **roles**, which `src/styles/themes.css` maps per game (`.theme-dnb`, `.theme-techno`, `.theme-psytrance`):

| Role | Meaning | DnB | Techno | Psytrance |
|---|---|---|---|---|
| `--c` / `--s` | accent + shadow: frame, primary buttons, links | lime | cyan | pink |
| `--c2` | second colour: multiplier, playing clip, headings | cyan | lime | lime |
| `--ok` | right answer | lime | cyan | cyan |
| `--bad` | wrong answer | pink | pink | orange |
| `--heart` | lives | pink | pink | pink |

Rule: `--ok` and `--bad` must always be clearly different from each other – that's why Psytrance (pink accent) uses orange for "wrong".

## Typography

- `--font-pixel` (Press Start 2P): machine text – HUD, score, labels, buttons in caps, "GAME OVER". Short texts only.
- `--font-sans` (Space Grotesk): everything people actually read – questions, answers, explanations.
- Home screen is pixel font only.

## Shapes and effects

- **Hard drop shadows**, no blur: `box-shadow: 5px 5px 0 var(--s)`. Hover lifts the element (`translate(-2px,-3px)`, bigger shadow), active presses it in (`translate(3px,3px)`, small shadow).
- **Choppy motion**: transitions use `steps(2)` (`--step-fast`), blinking uses `steps(1)`. No smooth easing.
- **Square corners.** Only exception: round play buttons, letter arrows and flags.
- Thick borders (3–6px).
- Respect `prefers-reduced-motion`: no blinking/pulsing, no transitions.

## Avoid

- Soft gradients, blurred shadows, rounded cards, glassmorphism.
- New colours outside `tokens.css`. If one is really needed, add it there first, with a comment.
- Pixel font for long texts (hard to read).

## Spacing

Layout sizes (paddings, gaps, widths) stay in the component CSS – they were tuned per screen and a forced spacing scale would change the look. Keep them consistent with neighbouring components; mobile breakpoints are 420px, 600px (game) and 900px (home).
