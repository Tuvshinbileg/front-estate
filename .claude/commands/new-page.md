# Scaffold a new Next.js page

Create a new route in this Next.js 15 App Router project.

The user will provide a route path (e.g. `/about`, `/blog/[slug]`, `/dashboard/settings`).

Steps:
1. Determine the correct `app/` directory path:
   - If the route should show the top Header (like home/listings/detail), place it inside `app/(main)/`.
   - If it's a full-bleed layout with its own sidebar or no header (like dashboard), place it directly in `app/`.

2. Create `app/<path>/page.jsx`:
   - Export `metadata` (or `generateMetadata` for dynamic routes).
   - Keep the page itself a server component — render a `'use client'` screen component if the page needs interactivity.
   - For dynamic routes (`[param]`), use `await params` (Next.js 15 — params is a Promise):
     ```js
     export default async function Page({ params }) {
       const { param } = await params;
     }
     ```
   - Add `generateStaticParams` if the param values are known at build time.

3. If the page needs a screen component, create `src/screens/<Name>Screen.jsx`:
   - Add `'use client'` at the top.
   - Import `useRouter` from `next/navigation` if navigation is needed.

4. If the route needs a loading state, create `app/<path>/loading.jsx` with a skeleton using the `.skeleton` CSS class.

5. Report what was created and the URL it maps to.
