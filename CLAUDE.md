# Etoono Front — Claude Code Context

Mongolian real estate marketplace with an AI-verification layer. Think Zillow + AI trust scores.
Stack: **Next.js 15 App Router · React 19 · plain JavaScript (no TypeScript) · CSS variables design system**.

## Dev commands

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (SSG — 14 static pages)
npm start        # serve the production build
npm run lint     # eslint via eslint-config-next
```

## Project layout

```
src/
  app/
    layout.jsx              # root layout — imports globals.css, sets <html lang="en">
    globals.css             # single style entry-point (design tokens + all component CSS)
    not-found.jsx           # branded 404
    (main)/                 # route group — wraps /, /listings, /listings/[id] with Header
      layout.jsx            # renders ClientLayout (Header + AuthModal state)
      page.jsx              # /
      listings/
        page.jsx            # /listings
        [id]/
          page.jsx          # /listings/1 … /listings/8 (SSG via generateStaticParams)
          loading.jsx       # skeleton shown during hydration
    dashboard/
      page.jsx              # /dashboard — outside (main) to avoid Header + sidebar conflict
  components/
    Icon.jsx                # lucide-react wrapper — ICONS map, returns null for unknown names
    Atoms.jsx               # Btn, Field, Chip, GlassPill, Avatar, Badge, TrustRing
    ClientLayout.jsx        # 'use client' — owns showAuth state, renders Header + AuthModal
    Header.jsx              # 'use client' — usePathname for active nav, useRouter for CTA
    PropertyCard.jsx        # 'use client' — useRouter.push('/listings/${p.id}')
    AIValuation.jsx         # pure render, no hooks — server-compatible
  screens/                  # full-page client components; receive props from server pages
    HomeScreen.jsx
    ListingsScreen.jsx
    DetailScreen.jsx
    DashboardScreen.jsx
    AuthModal.jsx
  lib/
    listings.js             # single source of truth for mock property data
                            # exports: allListings (8 items), featured (first 4)
```

## Routing

| URL | Page file | Notes |
|---|---|---|
| `/` | `app/(main)/page.jsx` | HomeScreen |
| `/listings` | `app/(main)/listings/page.jsx` | ListingsScreen |
| `/listings/[id]` | `app/(main)/listings/[id]/page.jsx` | DetailScreen, SSG |
| `/dashboard` | `app/dashboard/page.jsx` | DashboardScreen, no Header |

## Architecture rules

**Client vs server boundary**
- `app/` pages are server components by default. They import data from `src/lib/listings.js` and pass plain serializable objects as props to `'use client'` screen components.
- All screens (`src/screens/`) and interactive components (`src/components/`) are client components — mark them `'use client'` at the top.
- `AIValuation.jsx` has no hooks and can stay as a server component.

**Dashboard is outside `(main)`**
The dashboard uses a full-bleed sidebar grid (`240px 1fr`, `min-height: 100vh`). Adding the top Header above it breaks the layout. Keep it at `app/dashboard/` — not inside `app/(main)/`.

**Next.js 15 async params**
`params` is a Promise. Always `await` it before reading:
```js
export async function generateMetadata({ params }) {
  const { id } = await params;  // not params.id
}
export default async function Page({ params }) {
  const { id } = await params;
}
```

**Adding new SSG routes**
Any new `[param]` page needs `generateStaticParams`. See `app/(main)/listings/[id]/page.jsx` for the pattern.

## Design system

All tokens and component classes live in `src/app/globals.css`. Do not add separate CSS files — extend `globals.css`.

**Brand colors (CSS vars)**
- `--accent` / `--accent-ink` — Emerald green (#10B981 / #065F46)
- `--navy` — Deep Navy (#14204A)
- `--fg` / `--fg-muted` — foreground text

**Key layout vars**
- `--header-height: 64px` — used for sticky offset calculations. If you add a second sticky bar, derive from this.

**Type scale classes**
`t-h1`, `t-h2`, `t-h3`, `t-overline`, `t-body`, `t-body-sm`, `t-body-lg`, `t-caption`, `t-num`, `t-serif-accent`

**Component class naming**
Prefix: `et` (e.g. `etcard`, `etbtn`, `etfilter-bar`). New components follow the same convention.

## Icon system

Icons come from `lucide-react` via the `Icon` component. The component holds an explicit `ICONS` map in `src/components/Icon.jsx` — **if an icon renders nothing, it's not in the map**. Add the import and a map entry to fix it.

Brand icons (Google/Chrome, Apple) are **not** in lucide-react's free set. Use text labels instead.

```jsx
// Usage
<Icon name="sparkles" size={16} />
<Icon name="map-pin" size={14} style={{ color: 'var(--accent)' }} />
```

## Adding a new listing

Edit `src/lib/listings.js`. Each object must have:
```js
{
  id: Number,       // unique integer, used as the URL slug
  price: Number,    // in MNT (e.g. 412_000_000)
  rooms: Number,
  area: Number,     // m²
  floor: Number,
  district: String, // e.g. 'Sükhbaatar'
  city: String,     // e.g. 'Ulaanbaatar'
  score: Number,    // 0–100 trust score
  tag: String,      // badge text e.g. 'Reduced 8%' (optional)
  img: String,      // absolute URL (Unsplash allowed via next.config.mjs)
}
```
`generateStaticParams` picks up new IDs automatically on the next build.

## ESLint

Config at `eslint.config.js` uses `eslint-config-next` via `FlatCompat`. ESLint 9 + `@eslint/eslintrc` required — do not upgrade eslint to v10 (peer conflict with `eslint-config-next@15`).

## What's mock / not wired up

- Auth (sign in / register / Google / Apple) — UI only, no backend
- Contact seller / Book tour buttons — UI only
- Map in ListingsScreen — static tile placeholder, no real map SDK
- All property data in `src/lib/listings.js` — hardcoded, no API
