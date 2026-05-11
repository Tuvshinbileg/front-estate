# Create a new UI component

Add a new reusable component to `src/components/`.

The user will describe what the component should do and optionally provide a name.

Steps:
1. Create `src/components/<ComponentName>.jsx`.
   - Add `'use client'` if the component uses hooks or browser events.
   - Omit it if the component is pure render (no useState, useEffect, event handlers) — it can then be used in server components too.
   - Import `Icon` from `./Icon` if icons are needed.
   - Use CSS variable tokens (`var(--accent)`, `var(--fg-muted)`, etc.) — do not hardcode colors.
   - Follow the `et`-prefix naming convention for CSS classes (e.g. `etmycomponent`, `etmycomponent-label`).

2. If the component needs new CSS, append the styles to `src/app/globals.css` under a clearly labelled block.

3. Do not add Tailwind, CSS Modules, or styled-components — this project uses the global `globals.css` design system.

4. Show a usage example after creation.
