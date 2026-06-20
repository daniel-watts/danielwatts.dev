# danielwatts.dev

A modern, accessible, SEO-optimized resume/portfolio website built with [Astro](https://astro.build).

> **New to Astro?** Read [`docs/astro-overview.md`](docs/astro-overview.md) — a beginner-friendly guide to what Astro is, how it works, and how this site is built.

## Editing your content

**Everything you'll want to change lives in one file:**

```
src/data/site.ts
```

It holds your name, role, bio, experience, projects, skills, and contact links — all commented. Edit the values there and the whole site updates. You shouldn't need to touch the components for normal content changes.

A few other things to personalize:

| What | Where |
| --- | --- |
| Production URL (canonical links, sitemap) | `astro.config.mjs` → `site`, and `site.url` in `src/data/site.ts` |
| Favicon | `public/favicon.svg` |
| Social share image (1200×630) | `public/og-image.svg` (or swap for a `.png` and update `ogImage` in `site.ts`) |
| Sitemap URL in robots | `public/robots.txt` |
| Brand color | `--color-accent` in `src/styles/global.css` |

## Commands

All commands run from the project root:

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

> This project uses Node via `nvm`. If `node` isn't found, run `nvm use` (or `nvm use default`) first.

## What's built in

- **Accessibility:** semantic landmarks, a skip-to-content link, visible keyboard focus styles, ARIA labelling, reduced-motion support, and a light/dark theme that follows system preference.
- **SEO:** per-page `<title>`/description, canonical URLs, Open Graph + Twitter cards, JSON-LD `Person` structured data, an auto-generated sitemap, and `robots.txt`.
- **Performance:** ships zero JavaScript by default, with HTML compression enabled.

## Deploying

The build output in `./dist/` is plain static files — host them anywhere (GitHub Pages, Netlify, Vercel, Cloudflare Pages). Just point your host at `npm run build` with an output directory of `dist`.
