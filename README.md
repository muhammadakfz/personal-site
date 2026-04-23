# Personal Site

Personal website and writing space built with Astro. This repository currently contains:

- a homepage / profile landing page
- a blog powered by Astro content collections
- markdown and MDX-based writing workflow
- math rendering with KaTeX for technical posts

## Tech Stack

- Astro 6
- TypeScript
- Tailwind CSS 4
- Markdown / MDX
- KaTeX

## Quick Start

Requirements:

- Node.js `>= 22.12.0`
- npm

Install and run locally:

```sh
npm install
npm run dev
```

Open the local server shown by Astro, usually:

```text
http://localhost:4321
```

## Scripts

All commands are run from the project root.

| Command | Purpose |
| :-- | :-- |
| `npm run dev` | Start local development server |
| `npm run check` | Run Astro diagnostics |
| `npm run build` | Build production output into `dist/` |
| `npm run verify` | Run diagnostics and production build together |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
/
├── public/                    # Static assets
├── src/
│   ├── content/
│   │   └── blog/              # Blog posts in .md / .mdx
│   ├── layout/                # Shared page/post layouts
│   ├── pages/                 # Route definitions
│   ├── styles/                # Global styles
│   └── content.config.ts      # Content collection schema
├── .gitattributes
├── .gitignore
├── package.json
└── README.md
```

## Content Workflow

### Update Homepage

Edit:

- `src/pages/index.astro`

Use this for:

- profile copy
- CTA links
- homepage layout/content

### Add or Edit Blog Posts

Write posts in:

- `src/content/blog/`

Supported formats:

- `.md`
- `.mdx`

Typical frontmatter fields used in this repo:

```yaml
---
title: "Post Title"
date: "2026-04-23"
description: "Short summary"
categories: "Category Name"
tags: ["Tag A", "Tag B"]
toc: true
toc_sticky: false
excerpt: "Short excerpt"
---
```

### Update Shared Layout or Styling

Edit:

- `src/layout/BaseLayout.astro`
- `src/layout/BlogPostLayout.astro`
- `src/styles/global.css`

Use this for:

- overall page shell
- blog post presentation
- global typography, spacing, and theme styling

## Standard Flow

This is the recommended day-to-day workflow for this repo.

### 1. Pull latest changes

```sh
git pull origin master
```

### 2. Create or update content

Examples:

- edit homepage in `src/pages/index.astro`
- add a new article in `src/content/blog/`
- adjust layout or styles if needed

### 3. Review locally

```sh
npm run dev
```

Check:

- homepage renders correctly
- blog index still works
- article pages render without broken math/layout
- static assets load correctly

### 4. Run verification before commit

```sh
npm run verify
```

This must pass before pushing changes.

### 5. Commit with a clean message

```sh
git add .
git commit -m "Update homepage and refine blog content"
```

Commit message guidance:

- use a short imperative sentence
- describe the actual outcome, not the activity
- avoid vague messages like `update` or `fix stuff`

Good examples:

- `Refresh homepage profile copy`
- `Add longitudinal waves lecture notes`
- `Polish repository setup and documentation`

### 6. Push to remote

```sh
git push origin master
```

## Quality Standard

Before code or content is pushed, make sure:

- `npm run verify` passes
- homepage and blog pages still render correctly
- markdown frontmatter is complete and consistent
- links and static assets are valid
- commit message is specific and readable

## Git Conventions

This repo already includes basic git hygiene:

- `dist/`, `.astro/`, and `node_modules/` are ignored
- local env files are ignored
- `.gitattributes` normalizes LF line endings

Recommended habits:

- keep commits focused on one logical change
- avoid mixing repo cleanup with unrelated content edits unless intentional
- verify before every push

## Deployment Note

Production output is generated in:

```text
dist/
```

If the site is deployed through a static hosting platform, use the build command:

```sh
npm run build
```

and publish the `dist/` directory.
