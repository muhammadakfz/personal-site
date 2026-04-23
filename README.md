# Personal Site

Portfolio and writing site built with Astro. The repository currently serves a landing page plus a small blog powered by Astro content collections.

## Stack

- Astro 6
- TypeScript
- Tailwind CSS 4
- MD/MDX content collections
- KaTeX for math rendering

## Commands

Run everything from the project root.

| Command | Purpose |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local development server |
| `npm run check` | Run Astro diagnostics |
| `npm run build` | Create a production build in `dist/` |
| `npm run verify` | Run diagnostics and production build together |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
/
├── public/              # Static assets
├── src/
│   ├── content/blog/    # Blog posts
│   ├── layout/          # Shared Astro layouts
│   ├── pages/           # Route files
│   └── styles/          # Global styles
├── .gitignore
├── package.json
└── README.md
```

## Content Notes

- Blog entries live in `src/content/blog/`
- Homepage lives in `src/pages/index.astro`
- Content schema is defined in `src/content.config.ts`

## Git Hygiene

- Build output and generated Astro files are ignored
- Local environment files are ignored
- `.gitattributes` enforces LF line endings for a cleaner cross-platform history

Recommended pre-push check:

```sh
npm run verify
```
