# Add an icon to the Icon component

Add a new icon name to `src/components/Icon.jsx`.

The user will provide either:
- A lucide-react icon name (e.g. `flame`, `star`, `camera`)
- A kebab-case alias they want to use in JSX (e.g. `<Icon name="my-alias" />`)

Steps:
1. Read `src/components/Icon.jsx`.
2. Find the PascalCase lucide-react export for the requested icon (e.g. `flame` → `Flame`).
   - Verify it exists in lucide-react by checking the existing import list style. Brand icons (Apple, Google/Chrome, GitHub, etc.) are NOT available in lucide-react's free set — tell the user if that's the case.
3. Add the named import to the existing `import { ... } from 'lucide-react'` block.
4. Add a `'kebab-name': PascalName` entry to the `ICONS` map, keeping the map sorted alphabetically.
5. Show the user the usage example: `<Icon name="kebab-name" size={18} />`
