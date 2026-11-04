# AGENTS.md

Single-page marketing site for **Dorh Spa** (Riyadh women's salon). Vite 7 + React 19 + TypeScript 5.9 + Tailwind CSS 4, Arabic RTL. No backend, no tests, no CI.

## Commands

- `npm run dev` — dev server
- `npm run build` — production build (verified)
- `npm run preview` — serve `dist/`
- `npx tsc --noEmit` — typecheck (no `typecheck` script; tsconfig has `noEmit`, covers `src` + `vite.config.ts`). Run this after edits; it is the only automated check in the repo.
- No lint, test, or formatter config exists. Don't invent one.

**Install with `pnpm install`.** Both `pnpm-lock.yaml` and `package-lock.json` are committed, but `node_modules` was installed with pnpm (has `.pnpm/`) and `pnpm-lock.yaml` is the newer file. Never regenerate `package-lock.json`.

## Build quirks

- `vite-plugin-singlefile` inlines JS, CSS, and images into **one self-contained `dist/index.html`** (~2 MB). The deliverable is that single file; `public/` assets (favicons, og-image, webmanifest) are copied alongside it.
- The build prints `Mixed async and defer script modules` — known, benign warning from `index.html`.
- `scripts/generate-favicons.mjs` / `.py` are dead: they hardcode an absolute Windows path to an image outside the repo and need `sharp`, which is not a dependency. Don't run them; favicons in `public/` are already generated.

## Architecture

- `src/App.tsx` is the page: `Navbar` → section components in `src/components/sections/` → `Footer`, `StickyBar`, `BookingPopup`. New sections go there, in order.
- `src/components/ui.tsx` holds the shared primitives: `SectionHeader`, `Price`, `FreshaButton`, `WhatsAppButton`, `PhoneButton`, `ServiceActions`, `CtaGroup`, `ServiceRow`, `JewelCard`, `ServiceAccordion`, `FramedImage`, `FloatingBadge`. Reuse these instead of hand-rolling cards/CTAs.
- `src/data/services.ts` — all prices, durations, package copy (Arabic).
- `src/lib/links.ts` — the only place for phone/WhatsApp/Fresha/Maps URLs and address constants. `tel:` uses local format `0539687912`, WhatsApp uses `966539687912` (intentional, see comments there). Never hardcode these.
- `src/lib/track.ts` — `trackContact()` pushes a `contact_click` event to `window.dataLayer` (GTM), gtag, Meta, Snap, TikTok, plus a `dorh:contact` DOM event.
- Icons live in `src/components/Icons.tsx`. `cn()` helper is at `src/utils/cn.ts` (note `utils/`, not `lib/`).
- Path alias `@` → `src` (configured in both `vite.config.ts` and `tsconfig.json`).

## Conventions that differ from defaults

- **RTL is mandatory**: `index.html` has `<html lang="ar" dir="rtl">` and all copy is Arabic. Use logical/RTL-safe utilities (`mx-auto`, `gap-*`, `ms-*`/`me-*`, `inset-*`); the codebase avoids `ml-`/`mr-`/`left-`/`right-`.
- **Any new contact CTA must use the buttons from `ui.tsx`** (or call `trackContact` itself), otherwise its clicks are invisible to GTM analytics.
- **Tailwind v4 is CSS-first**: the design tokens (colors `cream`/`blush`/`gold`/`cocoa`, fonts `--font-display|body|latin`, shadows, keyframes) are declared in the `@theme` block of `src/index.css`. There is no `tailwind.config.*` — add tokens there.
- Wrap scroll-animated content in `<Reveal>` (`src/components/Reveal.tsx`); it adds `.reveal`/`.is-visible` and respects `prefers-reduced-motion` (handled in `index.css`).
- Sections carry `id` + `scroll-mt-20` so the Navbar/StickyBar anchor links scroll correctly — keep both when adding sections.
- Section images are imported (`import x from "@/assets/images/….jpg"`) and use `loading="lazy"`; only the hero image is eager.
- Use `npx tsc --noEmit` after edits — `strict`, `noUnusedLocals`, `noUnusedParameters` will fail on leftovers.

## index.html owns the `<head>`

SEO, Open Graph, JSON-LD (`BeautySalon` schema with phone/geo/price), Google Tag Manager (`GTM-5RR9FWKL`), Google Fonts (Amiri/Tajawal/Cormorant Garamond), and the Wistia player scripts all live directly in `index.html` — not in React. The hero video's media ID (`kfpvnsi5ow`) is injected from `src/components/Hero.tsx` via `dangerouslySetInnerHTML`.

## Repo state

- Branch `master` → `github.com/mahdi6534/durra-spa-landing-page`. Conventional commits (`feat:`, `fix:`, `perf:`, `chore:`).
- `public/robots.txt` was deliberately deleted; don't re-add it without being asked.
