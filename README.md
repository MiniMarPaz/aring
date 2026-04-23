# Wimbledon Design System

The visual + interaction system for **The Championships, Wimbledon** — the All England Lawn Tennis Club's digital properties (wimbledon.com and the Wimbledon app). This system powers the marketing homepage, scores/draws/OOP, player profiles, live streaming, registration/log-in, ticket management, and authenticated-member areas.

## Sources used to build this system

- **Figma file** — *"Wimbledon Web Design Production.fig"* (mounted as VFS)
  - 16 pages, 129 top-level frames spanning Home, Navigation, Registration/Log-in, Landing/Index pages, Editorial, Live Streaming, Scores/Results/Draw/OOP, IBM SlamTracker, Player Profile, Settings, Authenticated Area, Tickets management, Interactions/Errors/Motion.
- **Codebase** — `design-system-v1/` (read-only mount)
  - `colors.scss` — full color system (WDL palettes + Carbon neutrals + semantic tokens)
  - `typography.scss` — Gotham + Caslon type scale (headings, display, body, labels, tags, helpers)
  - `src/scss/spacing.scss` — 8px grid + radii + button dims
  - `tokens.scss` — CSS custom properties and utility classes
  - `src/index.ts` — TypeScript surface: `colors`, `typography`, `styleClasses`, `cssVariables`

All tokens here are faithfully ported from those files; semantic naming (`--wdl-*`) is preserved so the CSS is drop-in with the SCSS build.

---

## CONTENT FUNDAMENTALS

Wimbledon's voice is the voice of **tradition, precision and restraint**. It sounds like a knowledgeable host at a very old club — warm but never casual, confident without shouting.

### Tone
- **Understated, authoritative, ceremonial.** The Championships are centuries old; the copy knows it.
- **Never hypes.** It states facts — the names, the scores, the history — and trusts the reader to care.
- **British English throughout**: "Favourites", "Colour", "Centre Court", "Organise". "Ticket" not "Tix". "The Championships" (capitalised) is the event.
- **Measured emotional register.** Romance is carried by imagery and typography, not adjectives.

### Casing & formatting
- **Display headlines:** full ALL CAPS in Gotham Bold, e.g. `THE GENTLEMEN'S FINAL` / `CENTRE COURT, 2PM`.
- **Editorial headlines (expressive):** Caslon italic sentence case, e.g. *Djokovic returns to The All England Club*.
- **Section labels / eyebrows:** all caps, Gotham Medium 12px, e.g. `LATEST NEWS`, `ORDER OF PLAY`, `LIVE NOW`.
- **UI labels:** sentence case ("Buy tickets", "My draw", "Log in").
- **Dates:** `Wednesday 3 July` (British format, no comma, ordinals rare).
- **Times:** `2.00pm` with lowercase am/pm and dots, never `14:00`.
- **Titles:** Always "Mr", "Ms", "Sir" where appropriate. Player display name is usually surname with initial: `N. Djokovic`.

### Pronouns and address
- **Second person singular ("you")** for authenticated users: "Your draw", "You have 2 new messages".
- **Third person neutral** for editorial: "The Championships return", not "We're back".
- **Never "we" or "us"** except in formal notices (privacy, accessibility statements).

### Example copy (from the design)
- Hero section heads: `THE CHAMPIONSHIPS`, `CENTRE COURT LIVE`, `DAY 1 HIGHLIGHTS`.
- Buttons: `Buy tickets`, `Watch live`, `View draw`, `Read more`, `Log in`, `Register`.
- Eyebrows: `NEWS`, `VIDEO`, `FEATURE`, `RESULT`, `LIVE NOW`, `COMING UP`.
- Microcopy: "Matches begin at 11.00am on outside courts", "Please check your ballot status".

### Emoji
- **None.** Wimbledon does not use emoji in UI or editorial copy. Iconography is geometric SVG.

### The vibe
Grass. Cream. Dark green. Gold trim. Quiet confidence. A single tennis ball on a striped lawn. A player walking from the locker room. Silence before the serve.

---

## VISUAL FOUNDATIONS

### Color
Two brand colors anchor everything:
- **Wimbledon Green `#006633`** — primary, used for buttons, links, active states, brand marks.
- **Wimbledon Purple `#540082`** — secondary brand, used for accent surfaces and the heritage roundel.

Supporting colors:
- **Score Green `#0B2917`** — the dark inverse hero background (score panels, full-bleed hero).
- **Petunia `#240330`** — alternate dark (near-black purple) used for brand-led hero sections.
- **Champagne `#E2D9B5`** — trophy/gold-adjacent cream accent; used as border on dark backgrounds, plus editorial garnish.
- **Lawn Green `#22B263`** — brighter secondary green, used for live indicators.
- **Ball Yellow `#F3FF00`** — highlight/interactive accent on dark; the optic-yellow moment.
- **Violet `#8800E0`** — data highlights in IBM SlamTracker visualizations.

Neutrals follow Carbon's cool-gray palette (very slight blue cast), from `#F2F4F8` (grey-5) to `#121619` (grey-95 — the primary text).

**Use rules:**
- Backgrounds are mostly **white** or **grey-5**. Dark hero moments use **score green** or **petunia**.
- Text is **grey-95** on light, **white** on dark, **grey-55** for secondary. Error is `#DA1E28`.
- Gradients are **rare** — reserved for protection gradients over imagery (black-to-transparent, bottom-up).

### Typography
Three families define the voice:
- **Gotham SSm** — primary sans. Light (300), Regular (400), Medium (500), Bold (700), Black (900). Used for all UI, nav, body copy, and mid-display headings. **Real licensed OTF files are installed in `fonts/`.**
- **Gotham Condensed SSm** — the narrower cut, used for large all-caps display headlines (the hero wordmarks, player names, title slabs). Tall narrow proportions give the Wimbledon tabloid-masthead feel.
- **Adobe Caslon Pro** — expressive serif. Used for editorial heads, pull quotes, heritage moments. ⚠️ Still substituted with **EB Garamond** from Google Fonts — see Caveats.
- **IBM Plex Mono** — data and scores (SlamTracker).

Type rules:
- Display/heading Gotham is tight: `letter-spacing: -3%`, `line-height: 95–100%`.
- Caslon is loose: `letter-spacing: +2%`, `line-height: 150%`.
- Body copy is 16–18pt, 150% leading.
- Eyebrows and tags are ALL CAPS Gotham Medium at 10–14pt.

### Spacing
Strict **8px grid** with a 4px half-step for tight UI. Common values: 8, 16, 24, 32, 48, 64. Layouts use wide margins on desktop (24px gutter, up to 96px page margin at 1440px).

### Backgrounds
- Predominantly **solid white** or **solid dark** (score-green / petunia). No patterns, no textures.
- **Photography** is central: full-bleed portraits, wide-angle Centre Court shots, lawn close-ups. All imagery is warm-lit, naturalistic, slightly desaturated, never cartoon-saturated.
- **Protection gradients** (black 0%→60% alpha, bottom) sit over photography to hold caption text.
- **Hand-drawn illustrations / patterns:** none beyond the **florette** (4-petal mark, used as a tiny brand seal) and the **roundel logo**.

### Animation
- Soft, dignified. No bounces. No springy scale. Standard `cubic-bezier(0.4, 0, 0.2, 1)` ease-out at 200–300ms for UI.
- **Fades and short translations** (<8px) on enter. Page transitions fade.
- Score updates flash briefly (100ms highlight fade to base).
- Scroll-reveal is understated — opacity 0→1 + 8px up, 400ms.

### Hover states
- **Buttons (primary):** background darkens from `#006633` to `#00552B`.
- **Buttons (secondary):** grey-10 → grey-15.
- **Links:** color darkens one step; underline stays.
- **Cards:** very subtle shadow lift (0→md) + image scale 1.0→1.02 over 300ms.
- **Nav items:** background rgba(135,141,150,0.12).

### Press / active
- Primary button background drops to `#00331A` (green-80). No scale transform.
- Cards: `transform: translateY(1px)` — a tiny press.

### Borders
- **Hairline** 1px `#DDE1E6` (grey-15) is the default divider everywhere.
- Stronger 1px `#CDD3DA` on data tables.
- Brand borders (green/purple) only appear on CTA bars and selected states.

### Shadows
- **Mostly shadowless design.** Cards typically use a hairline border, not a shadow.
- When shadow is used (menus, modals):
  - `sm` — `0 1px 2px rgba(0,0,0,0.08)`
  - `md` — `0 2px 6px rgba(0,0,0,0.10)`
  - `lg` — `0 8px 24px rgba(0,0,0,0.15)`
  - `overlay` — `0 20px 48px rgba(0,0,0,0.25)` for modals.

### Corners
Small and deliberate. `2px` for tags and small buttons; `4px` for inputs; `8px` for large buttons, cards and modals; circles for avatars.

### Transparency & blur
Used sparingly. Megamenus and the scrolled header use **backdrop blur** (`blur(16px)` with `rgba(255,255,255,0.85)`). Overlay modals use `rgba(0,0,0,0.6)`.

### Cards
- White surface, `8px` radius, `1px` grey-15 hairline, **no default shadow**.
- Imagery sits flush top, headline + meta below with `24px` padding.
- A small **color-coded tag** (green for news, purple for feature, gold for members-only) sits in the top-left over the image.

### Imagery mood
- **Warm, cinematic, naturalistic.** Slight film grain is present on editorial shots.
- **Green + cream** dominate: grass court, champagne ribbons, cream umpire chairs.
- Players are shot mid-motion with shallow depth.
- No illustrated people. No stock vector art.

### Layout rules
- **1440px max content width** is the top breakpoint; content caps at 1312px with 64px side margin.
- Sticky top nav (64px), sometimes with a secondary sub-nav (48px).
- Footer is a deep score-green slab with champagne dividers.

---

## ICONOGRAPHY

Wimbledon icons in the Figma file are bespoke: **16px viewport, 1px-strokelike filled SVG paths** (actually filled shapes, not strokes — e.g. the arrow is a single filled polygon, not a stroked line). They are geometric, understated, and centered in the 16×16 frame with a consistent optical weight.

Icons are **not an icon font**. Each icon is its own SVG symbol. There are a few small PNG sprites for tennis-specific marks (the tennis racket, the ball, the trophy) but most UI icons are SVG.

**Copied into `assets/icons/`:**
- `florette.svg` — the 4-petal brand seal used as a tiny heritage mark
- `search.svg` — magnifier
- `play.svg` — video play triangle
- `tennis.svg` — tennis-specific racket/ball mark

**CDN substitute for the broader UI set:**
Wimbledon's internal icons are closest in style to **Carbon Icons** (IBM's library — flat, filled, 16px grid, thin optical weight). Since the project uses Carbon neutrals already, we use Carbon Icons via CDN for the rest: chevrons, close, menu, bell, user, etc.
- Via CDN: `https://unpkg.com/@carbon/icons@11/` (specific SVGs referenced by path).

⚠️ **Substitution flagged:** True Wimbledon icons are bespoke; Carbon is the nearest-match fallback. Ask the user for the original icon sprite/font if pixel fidelity is required.

**Emoji:** never used.

**Unicode/special chars:** the bullet "·", en-dash "–", and degree "°" appear in scores and stats. No other decorative unicode.

**Logos** (in `assets/logos/`):
- `wimbledon-roundel.svg` — the iconic **purple crossed-rackets roundel** with "THE CHAMPIONSHIPS / WIMBLEDON" curved around it. This is our reconstructed version; the Figma source used 45 separate vector pieces so a raster fallback is appropriate for final production.
- `wimbledon-wordmark.svg` — the secondary Caslon wordmark.
- `ibm.svg` — IBM partner logo (from Figma).
- `official-partnership.svg` — "Official Partnership" badge (from Figma).

⚠️ **Ask:** If you have the official SVG or PNG of the crossed-rackets roundel, please drop it in `assets/logos/` — the current one is a reconstruction.

---

## INDEX — what lives in this folder

- `README.md` — this file
- `SKILL.md` — agent-skill description (for Claude Code / Skills runtime)
- `colors_and_type.css` — all CSS custom properties + base type classes; drop-in file
- `assets/`
  - `logos/` — Wimbledon roundel, wordmark, IBM, partnership badge
  - `icons/` — florette, search, play, tennis
- `preview/` — small HTML cards used to populate the Design System review tab
- `ui_kits/web/` — the Wimbledon.com website UI kit (JSX components + interactive index.html)
- `fonts/` — (empty; fonts loaded from Google Fonts as substitutes — see Caveats)

## CAVEATS

1. **Font — Caslon still substituted.** Real Gotham SSm + Gotham Condensed SSm OTF files are installed in `fonts/` and wired in via `@font-face`. However, **Adobe Caslon Pro** is still falling back to **EB Garamond** (Google Fonts) — metrics are close but not identical. Drop a Caslon WOFF2/OTF in `fonts/` if you can license it and the `--wdl-font-expressive` stack will pick it up.
2. **Wimbledon roundel logo** is a reconstruction — the Figma source is 45 composed vectors, not a single asset. Please provide the official SVG/PNG if available.
3. **Icon set** is partially a CDN fallback (Carbon Icons). Ask the user for the bespoke Wimbledon icon sprite if available.
