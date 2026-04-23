# @ds/button — Wimbledon Design System

React + SCSS button component for the Wimbledon Design System. Tokens, Storybook, and a live demo included.

## Quick start

```bash
pnpm install
pnpm demo      # Vite dev server   → http://localhost:5173
pnpm storybook # Storybook         → http://localhost:6006
pnpm build     # compile to dist/
```

## Usage

```tsx
import { Button } from "@ds/button";
import "@ds/button/dist/index.css";

// Primary CTA — Wimbledon green
<Button hierarchy="primary">Buy tickets</Button>

// Secondary
<Button hierarchy="secondary">Learn more</Button>

// Tertiary — flat green text, no border
<Button hierarchy="tertiary">View all results</Button>

// Ghost — icon-only square
<Button hierarchy="ghost" iconOnly leadingIcon={<X />} aria-label="Close" />

// States
<Button loading>Saving…</Button>
<Button disabled>Unavailable</Button>

// Danger
<Button hierarchy="primary" danger>Delete account</Button>

// With icons
<Button leadingIcon={<ArrowRight />}>Continue</Button>
<Button trailingIcon={<Download />}>Export</Button>

// Block (full width)
<Button block>Sign in</Button>

// Sizes: sm (32px) | md (44px) | lg (52px)
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `hierarchy` | `"primary" \| "secondary" \| "tertiary" \| "ghost"` | `"primary"` | Visual weight |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Height preset (32 / 44 / 52 px) |
| `danger` | `boolean` | `false` | Destructive action styling |
| `disabled` | `boolean` | `false` | Disable interaction |
| `loading` | `boolean` | `false` | Show spinner, block clicks |
| `block` | `boolean` | `false` | Full-width |
| `iconOnly` | `boolean` | `false` | Square icon button — provide `aria-label` |
| `leadingIcon` | `ReactNode` | — | Icon before label |
| `trailingIcon` | `ReactNode` | — | Icon after label |

Plus all native `<button>` attributes.

## Design tokens

All colours are CSS custom properties. Override on any ancestor:

```css
/* e.g. override primary to Wimbledon purple for a specific section */
.promo-banner {
  --btn-ink:          #540082;
  --btn-ink-hover:    #46006C;
  --btn-ink-active:   #380057;
  --btn-label-on-ink: #FFFFFF;
}
```

### Key tokens

| Token | Light | Dark |
|---|---|---|
| `--btn-ink` | `#006633` (wdl-green) | `#22B263` (wdl-lawn-green) |
| `--btn-ink-hover` | `#00552B` | `#1B9A4F` |
| `--btn-surface` | `#E4E9F1` | `#2B3236` |
| `--btn-label-tertiary` | `#006633` | `#22B263` |
| `--btn-danger` | `#DA1E28` | `#FF8389` |
| `--btn-focus-ring` | `#0F62FE` | `#78A9FF` |
| `--btn-radius` | `8px` | `8px` |
| `--btn-font-family` | `'Gotham SSm', …` | same |

## Theming

Apply `data-theme` to any ancestor element:

```tsx
// Light (default)
<div data-theme="light"><Button>…</Button></div>

// Dark
<div data-theme="dark" style={{ background: "#121619" }}>
  <Button>…</Button>
</div>
```

## Fonts

Buttons use `'Gotham SSm'` at weight 500. The OTF files are in `../fonts/`.
Storybook serves them via `staticDirs`. For production, host the font files
and add `@font-face` declarations pointing at your CDN:

```css
@font-face {
  font-family: 'Gotham SSm';
  font-weight: 500;
  src: url('https://your-cdn.com/fonts/gothamssm_medium.otf') format('opentype');
  font-display: swap;
}
```
