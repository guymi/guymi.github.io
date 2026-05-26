# guymi/guymi.github.io

My personal portfolio website built with [Astro](https://astro.build), featuring blog posts, presentations, and reading lists.

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` to view the site.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run format` | Format code with Prettier |

## Content Structure

```
src/content/blog/
├── medium/           # Medium article republications
├── youtube/          # YouTube video posts
├── presentations/    # Conference talks
└── *.md            # General blog posts

src/content/reading-lists/
```

## Tech Stack

- **Astro 5.1.1** — Static site generator
- **TailwindCSS** — Styling with dark mode
- **View Transitions** — SPA-like navigation
- **TypeScript** — Type safety

## Image Hosting

External images use [imgbb.com](https://imgbb.com) (free tier).

## Deployment

Auto-deploys to GitHub Pages on push to `main` via GitHub Actions.

## License

Copyright (c) Haggai Philip Zagury. All rights reserved.