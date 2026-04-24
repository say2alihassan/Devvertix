# Devvertix — AI & Mobile Product Studio

Marketing site for **Devvertix**, a product studio building AI-native SaaS and mobile apps. Shipped 11+ apps to 1M+ users across FinTech, Q-Commerce, Mobility, AI, and more.

Live at: _(coming soon — deploying to Vercel)_

---

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Styling:** Tailwind CSS v4 (with custom design tokens)
- **Animation:** framer-motion
- **Icons:** lucide-react
- **Language:** TypeScript

Design system lives in [`.stitch/DESIGN.md`](./.stitch/DESIGN.md) — atmosphere, color tokens, typography, layout rules.

## Getting Started

**Requires Node.js 20+ (LTS).** A `.nvmrc` is included:

```bash
nvm use                 # picks up Node 22 from .nvmrc
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in the terminal).

## Project Structure

```
app/
  layout.tsx           Root layout + fonts + Navbar
  page.tsx             Home page (composes all sections)
  globals.css          Tailwind + design tokens + utilities

components/
  Navbar.tsx           Floating glass nav
  Hero.tsx             Hero with live-status pill + metric strip
  TechStack.tsx        Auto-scrolling marquee
  Services.tsx         Bento-grid service offerings
  Process.tsx          5-step vertical timeline
  Projects.tsx         11 live apps (iOS & Android) with filter
  CaseStudies.tsx      Metrics-first outcome cards
  WhyChooseUs.tsx      Proof card + reason list
  Contact.tsx          Split form + direct contact
  Footer.tsx           Multi-column footer
  ui/                  Button, Input, Textarea, Label primitives

lib/
  utils.ts             cn() helper (clsx + tailwind-merge)

.stitch/
  DESIGN.md            Design system source of truth
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server (webpack) |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

## Deploying to Vercel

1. Push to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js and deploys on every push to `main`.
4. Add your custom domain under **Project Settings → Domains**.

## Featured Projects

A selection of production apps shipped by the Devvertix team:

- **Clickypk** — 1M+ downloads, Pakistan's classifieds super-app
- **Krave Mart** — Q-commerce grocery delivery
- **Drive Mate** — Peer-to-peer car sharing
- **Ask AI** — Conversational AI assistant
- **Tabbio** — AI-assisted CV maker & job search
- …plus Carvonix, Mappy, Cohere, Perfect Pay, Trick and Treats, Story Formed Life

See the full list in [`components/Projects.tsx`](./components/Projects.tsx).

## License

© Devvertix. All rights reserved.
