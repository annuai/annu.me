# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # Vite build + run prerender script (generates static HTML per route)
npm run preview    # Preview the dist/ build locally
npm run lint       # ESLint
```

There are no tests configured.

## Architecture

This is a personal portfolio site — **React 19 + Vite 8**, with `react-router-dom v7`. No TypeScript. Deployed to Netlify (`netlify.toml`).

### Routing

Five routes defined in `src/App.jsx`:
- `/` — Home (Hero + ProjectGrid)
- `/about` — About page
- `/blog` — Journal/blog listing
- `/blog/:id` — Individual blog post
- `/work/:slug` — Individual project detail

### File-based content system

All content lives as JSX files with a mandatory named export `metadata` and a default export (React component).

**Projects** → `src/projects/*.jsx`
- Loaded at build time via `import.meta.glob('../projects/*.jsx', { eager: true })` in both `ProjectGrid` and `ProjectDetail`
- Files prefixed with `_` are excluded (hidden from the grid)
- Sorted on the grid by numeric `metadata.id`
- Required metadata fields: `id`, `slug`, `title`, `category`, `year`, `thumbnail`, `description`
- Optional metadata fields: `tags`, `images`, `gridSize` (`'standard'` default, or `'wide'`/`'tall'`), `excerpt`, `externalLink`, `customUrl`, `walthroughOnly`

**Blog posts** → `src/posts/*.jsx`
- Loaded via `import.meta.glob('../posts/*.jsx', { eager: true })` in `Blog` and `BlogPost`
- Sorted on the listing by `metadata.date` (newest first)
- Required metadata fields: `title`, `date`, `excerpt`
- `slug` is optional — falls back to the filename without `.jsx`

### Project display modes

When a project card is clicked, `ProjectModal` opens. Behaviour depends on metadata:
- Default → modal shows thumbnail + description + link to `/work/${slug}`
- `walthroughOnly: true` → modal shows a mailto link instead
- `externalLink` → modal opens the external URL
- `customUrl` → card click navigates directly (no modal)

For the detail page (`/work/:slug`), each project's default export is the full page content. Simple projects can use `<ProjectLayout metadata={metadata} />` which renders title, category/year, description, and `metadata.images`. Complex projects write their own JSX layout.

### Static prerendering for SEO

`npm run build` runs `vite build` then `node scripts/prerender.cjs`. The script reads `dist/index.html` and for every project/post file extracts the `metadata` object (via regex + `eval`), then writes a route-specific `dist/<route>/index.html` with title and OG/Twitter meta tags replaced. Client-side SEO is also handled by the `useSEO` hook (`src/hooks/useSEO.js`), which sets meta tags on route changes.

### Special: `/pomo` page

`public/pomo.html` is a standalone (non-React) HTML app served at `/pomo`. A Vite plugin in `vite.config.js` rewrites `/pomo` → `/pomo.html` in dev.

### Styling

Each component has a co-located `.css` file. No CSS framework. Global styles in `src/index.css`. The `griddy-icons` package provides icons.
