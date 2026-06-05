# Devvertix — Design System (v2)

> Source of truth for visual language, components, and layout rules. Follows the Stitch design methodology.

## 1. Atmosphere & Brand Voice

- **Vibe:** Premium dark, glassmorphism, editorial bento.
- **Reference peers:** Vercel, Linear, Raycast, Arc Browser, Anthropic.
- **Tone:** Confident, technical, measured. Not playful, not corporate.
- **Mission:** Signal "senior AI + mobile shop that ships production systems."

## 2. Color Tokens

### Base (Dark)
| Role                | Hex       | Notes                               |
|---------------------|-----------|-------------------------------------|
| `background`        | `#07070A` | Deeper than zinc-950 for contrast   |
| `surface`           | `#0E0E12` | Cards, panels                       |
| `surface-elevated` | `#15151B` | Hovered / raised surfaces           |
| `border`            | `#1F1F28` | Subtle, low-contrast                |
| `border-strong`    | `#2A2A36` | Focus, selected                     |
| `foreground`        | `#F5F5F7` | Body text                           |
| `muted`             | `#8A8A94` | Secondary text, metadata            |
| `subtle`            | `#5A5A66` | Placeholders, disabled              |

### Accent — Violet/Blue gradient system
| Role               | Hex       |
|--------------------|-----------|
| `accent-1` violet  | `#8B5CF6` |
| `accent-2` blue    | `#3B82F6` |
| `accent-glow`      | `rgba(139, 92, 246, 0.35)` |

### Signal colors (rare, restrained)
| Role       | Hex       |
|------------|-----------|
| `success`  | `#34D399` |
| `warning`  | `#FBBF24` |
| `danger`   | `#F87171` |

## 3. Typography

- **Sans:** Inter (existing) — body + UI
- **Display:** Inter tight (-0.03em tracking at h1/h2) — used for section heroes
- **Mono:** ui-monospace — code snippets, metrics
- **Scale:**
  - Display XL: `text-5xl md:text-7xl`, weight 600, tracking-tight
  - H2: `text-3xl md:text-5xl`, weight 600, tracking-tight
  - H3: `text-xl md:text-2xl`, weight 600
  - Body: `text-base md:text-lg`, weight 400, leading-relaxed
  - Meta: `text-sm`, weight 500, muted
  - Eyebrow: `text-xs uppercase tracking-[0.2em]`, weight 600

## 4. Layout Primitives

- **Container:** `max-w-6xl mx-auto px-4 md:px-6` (some sections `max-w-7xl`)
- **Section rhythm:** `py-24 md:py-32` standard; `py-20` for dense sections
- **Grid:** 12-col on desktop, 1-col on mobile. Bento sections use asymmetric spans (`md:col-span-2 md:row-span-2`, etc.).
- **Radius:** `rounded-2xl` (cards), `rounded-xl` (inputs/buttons), `rounded-full` (pills, avatars)

## 5. Surface Styles

- **Glass card:** `bg-surface/60 border border-border backdrop-blur-xl` + soft inner highlight via `before:` pseudo-element
- **Gradient border card:** wrapped div with `bg-gradient-to-br from-accent-1/30 to-accent-2/30 p-[1px]` → inner `bg-surface rounded-[calc(theme(borderRadius.2xl)-1px)]`
- **Elevation:** no heavy drop shadows. Use glow: `shadow-[0_0_80px_-20px_rgba(139,92,246,0.35)]` on hero CTAs and key cards.

## 6. Motion

- **Library:** framer-motion
- **Entry:** `initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}`, duration 0.45, easeOut
- **Stagger:** 0.06s per child (faster than current 0.1s — feels snappier)
- **Hover:** 200ms transitions, subtle translate (`-translate-y-0.5`) + border lift
- **Background:** slow-drifting orb gradients (already present in Hero), keep but lower opacity (0.12–0.18)

## 7. Iconography

- lucide-react, stroke 1.5, size 16–24 depending on context
- Icons always inside a tinted badge (`w-10 h-10 rounded-lg bg-gradient-to-br from-accent-1/15 to-accent-2/15 border border-border`)

## 8. Components

- **Button:** add `gradient` variant (violet→blue) with glow shadow. `outline` gets glass background.
- **Badge/Eyebrow:** pill with dot marker → `<span class="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full border border-border bg-surface/80 backdrop-blur">`
- **Input:** 1px border, focus ring with accent color, no heavy shadows

## 9. Page Architecture (Home)

1. **Navbar** — floating pill on scroll, glass
2. **Hero** — headline + subhead + dual CTA + animated metric strip
3. **TechStack** — marquee (auto-scrolling row)
4. **Services** — **bento grid** (featured card + smaller cards)
5. **Process** — vertical timeline with numbered nodes
6. **Projects** — filterable grid (existing) + polish pass
7. **Case Studies** — metric-forward cards
8. **Why Us** — 2-column with animated counters
9. **Contact** — split layout (form + direct details)
10. **Footer** — multi-column with link groups

## 10. Do / Don't

**Do:**
- Lean into whitespace; let sections breathe
- Use gradient sparingly — reserved for H1 accents, primary CTA, and 1-2 hero elements per section
- Keep animations under 500ms; anything slower feels sluggish

**Don't:**
- Stack multiple gradients on one screen
- Use pure black — always slightly blue-black (`#07070A`)
- Use drop shadows as a default — use glow + border instead
- Over-decorate cards; let content lead
