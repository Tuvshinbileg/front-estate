# Etoono — Claude Code Skills

Slash commands available in this project. Invoke with `/skill-name` in Claude Code.

## `/add-listing`
Add a new property to `src/lib/listings.js`.

Provide as much or as little detail as you like — Claude will fill in realistic Mongolian real-estate defaults for anything you leave out. The new route `/listings/<id>` is automatically pre-generated on the next `npm run build`.

**Example prompts**
- `/add-listing` — let Claude pick sensible defaults
- `/add-listing 3-room in Khan-Uul, 95m², 460M ₮, score 88`

---

## `/add-icon`
Add a new [lucide-react](https://lucide.dev/icons/) icon to the `Icon` component.

Claude will add the named import and map entry to `src/components/Icon.jsx` and confirm the `<Icon name="..." />` usage.

**Example prompts**
- `/add-icon flame`
- `/add-icon star — I want to use it as "star-rating"`

Note: brand icons (Apple, Google/Chrome, GitHub) are not in lucide-react's free set and cannot be added this way.

---

## `/new-page`
Scaffold a new Next.js App Router page.

Claude creates the `app/` page file, an optional `src/screens/` client component, and a `loading.jsx` skeleton. It handles dynamic routes (`[param]`), `generateStaticParams`, `generateMetadata`, and the `(main)` route group vs top-level placement automatically.

**Example prompts**
- `/new-page /about`
- `/new-page /blog/[slug] — dynamic, needs a sidebar`
- `/new-page /dashboard/settings`

---

## `/new-component`
Create a new reusable UI component in `src/components/`.

Claude follows the project conventions: `'use client'` only when needed, `et`-prefix CSS classes, CSS variable tokens, no Tailwind or CSS Modules. New styles are appended to `src/app/globals.css`.

**Example prompts**
- `/new-component a star-rating widget`
- `/new-component SearchSuggestions — dropdown that appears below the search pill`
- `/new-component PriceRangeSlider`
