# Astro — an overview, and how this site is built

A beginner-friendly guide to what Astro is, how it works, and exactly how it was
used to build **danielwatts.dev**. If you've never touched Astro before, start here.

---

## 1. What Astro is

Astro is a **web framework for building content-focused websites** — blogs,
marketing sites, documentation, and portfolios like this one. Its defining idea:

> **Ship HTML, not JavaScript.**

Most modern frameworks (React, Vue, Next.js) send a large bundle of JavaScript to
the browser, which then "boots up" and renders your page on the user's device.
Astro flips this around. It runs your components **once, at build time, on your
machine**, produces plain static HTML/CSS, and sends *that* to the browser. By
default, **zero JavaScript** is shipped.

The result is a site that is:

- **Fast** — there's no JS framework to download, parse, and execute.
- **SEO-friendly** — search engines get fully-formed HTML immediately.
- **Accessible** — it's real semantic HTML, not a JS-generated approximation.
- **Cheap & simple to host** — the output is just static files.

This is exactly why Astro was chosen for a resume site: the goals were *modern,
accessible, easy for search engines*, and Astro delivers all three by default.

### When Astro is (and isn't) the right tool

| Great fit | Less ideal |
| --- | --- |
| Portfolios, blogs, docs, marketing sites | Highly interactive web apps (dashboards, editors) |
| Content that's mostly read, not manipulated | Apps where most of the screen updates constantly |
| Sites where speed & SEO matter most | Real-time, app-like state everywhere |

(When you *do* need interactivity, Astro can opt-in to it — see "Islands" below.)

---

## 2. How Astro works

### The build step

Astro is a **static site generator (SSG)**. You run a build command, and Astro:

1. Reads your pages and components.
2. Executes any code in them (fetching data, looping over arrays, etc.) **once**.
3. Renders everything to static `.html` files plus optimized CSS.
4. Writes the result to a `dist/` folder ready to deploy.

```
your source  ──►  astro build  ──►  dist/  (plain HTML + CSS)  ──►  any host
```

For this project the relevant commands (defined in `package.json`) are:

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server with live reload (for editing) |
| `npm run build` | Produces the static site in `dist/` |
| `npm run preview` | Serves the built `dist/` locally to check it |

### `.astro` components

The core building block is the **`.astro` file**. It has two parts:

```astro
---
// 1. The "component script" (between the --- fences).
//    Plain JavaScript/TypeScript that runs AT BUILD TIME, never in the browser.
const name = "Daniel";
const skills = ["HTML", "CSS", "JavaScript"];
---

<!-- 2. The "template": HTML, with {expressions} for dynamic values. -->
<h1>Hi, I'm {name}</h1>
<ul>
  {skills.map((skill) => <li>{skill}</li>)}
</ul>
```

Key things to notice:

- The code between `---` runs **on your machine during the build**, so you can
  loop over data, read files, or fetch APIs, and only the resulting HTML is sent
  to visitors.
- The template is basically HTML with JSX-like `{...}` expressions for inserting
  values and `.map(...)` for repeating elements.
- Components can be imported into other components, which is how pages are
  assembled from smaller pieces.

### Layouts, components, and pages

Astro organizes a project around three roles (all just `.astro` files):

- **Pages** (`src/pages/`) — each file becomes a URL. `src/pages/index.astro`
  → `/`, `src/pages/404.astro` → the 404 page. This is "file-based routing."
- **Layouts** (`src/layouts/`) — wrappers that define the shared page shell
  (`<html>`, `<head>`, etc.) and drop page content into a `<slot />`.
- **Components** (`src/components/`) — reusable chunks (a header, a card, a
  section) imported wherever needed.

### Scoped styles

A `<style>` block inside an `.astro` file is **automatically scoped to that
component** — the styles only affect that component's markup, so you never worry
about CSS from one component leaking into another. Global styles live in a plain
CSS file that's imported once (here: `src/styles/global.css`).

### Islands (opt-in interactivity)

If you ever need an interactive widget (say, an image carousel), Astro uses an
"**islands**" model: the page stays static HTML, and you mark just that one
component to load JavaScript with a directive like `client:load`. The rest of the
page ships no JS. **This site uses no islands at all** — it's 100% static.

### Integrations

Astro has a plugin system called **integrations**. This site uses one:
`@astrojs/sitemap`, which automatically generates `sitemap-index.xml` at build
time so search engines can discover every page.

---

## 3. How this site is structured

Here's the project layout and what each piece does:

```
website/
├── astro.config.mjs        # Astro configuration (site URL, integrations)
├── package.json            # Dependencies and npm scripts
├── tsconfig.json           # TypeScript settings (Astro's "strict" preset)
├── public/                 # Files served as-is at the site root
│   ├── favicon.svg         #   → /favicon.svg
│   ├── og-image.svg        #   → social share preview image
│   └── robots.txt          #   → /robots.txt (points crawlers to the sitemap)
└── src/
    ├── data/
    │   └── site.ts         # ★ ALL your content lives here (one file to edit)
    ├── layouts/
    │   └── BaseLayout.astro# The HTML shell: <head>, SEO tags, skip link
    ├── styles/
    │   └── global.css      # Design tokens + global styles (light/dark theme)
    ├── components/         # The page sections, each a reusable component
    │   ├── Header.astro
    │   ├── Hero.astro
    │   ├── About.astro
    │   ├── Experience.astro
    │   ├── Projects.astro
    │   ├── Skills.astro
    │   ├── Contact.astro
    │   └── Footer.astro
    └── pages/
        ├── index.astro     # The home page (assembles all the sections)
        └── 404.astro       # Custom "page not found" page
```

### The flow, end to end

1. **`src/data/site.ts`** is a plain TypeScript file exporting your content as
   objects and arrays (name, role, bio paragraphs, an array of jobs, an array of
   projects, skill groups, contact links). It's deliberately the *single source of
   truth* so you edit content in one place without touching markup.

2. **Components** import that data and render it. For example, `Projects.astro`
   imports the `projects` array and loops over it with `.map(...)` to produce one
   card per project — so adding a project is just adding an object to the array.

3. **`pages/index.astro`** imports `BaseLayout` and all the section components,
   and arranges them in order inside `<main>`:

   ```astro
   <BaseLayout>
     <Header />
     <main id="main">
       <Hero /><About /><Experience /><Projects /><Skills /><Contact />
     </main>
     <Footer />
   </BaseLayout>
   ```

4. **`BaseLayout.astro`** provides the `<html>`/`<head>` shell and injects the
   page content via `<slot />`. This is where the SEO and accessibility
   foundations live (details below).

5. **`astro build`** runs all of the above once and writes static HTML + CSS to
   `dist/`, plus the generated sitemap.

### How the goals were met

**Modern look** — `global.css` defines a small set of design tokens (CSS custom
properties for colors, spacing, radius, shadows) and an automatic **light/dark
theme** via `@media (prefers-color-scheme: dark)`. Components use scoped styles on
top of those tokens.

**Accessibility** — handled mostly in `BaseLayout.astro` and the components:
- A "skip to main content" link for keyboard users.
- Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`) and a sensible
  heading order.
- `aria-labelledby` tying each section to its heading; visible keyboard focus
  styles; `prefers-reduced-motion` support in the CSS.

**SEO / discoverability** — also centered in `BaseLayout.astro`:
- A real `<title>` and meta description per page, plus a canonical URL.
- **Open Graph** and **Twitter Card** tags for rich link previews.
- **JSON-LD structured data** (`@type: Person`) so search engines understand the
  page describes a professional.
- The `@astrojs/sitemap` integration generates the sitemap; `robots.txt` points
  crawlers to it.

The production URL used for canonical links, Open Graph, and the sitemap is set in
**`astro.config.mjs`** (`site: "https://danielwatts.dev"`).

---

## 4. Making changes — a cheat sheet

| I want to… | Edit this |
| --- | --- |
| Change my name, bio, jobs, projects, skills, links | `src/data/site.ts` |
| Change the brand/accent color or theme | `src/styles/global.css` (the `:root` tokens) |
| Change SEO tags or structured data | `src/layouts/BaseLayout.astro` |
| Change the production URL | `astro.config.mjs` **and** `site.url` in `site.ts` |
| Replace the favicon or social image | `public/favicon.svg`, `public/og-image.svg` |
| Add or reorder page sections | `src/pages/index.astro` |
| Add a whole new page (e.g. `/blog`) | Create `src/pages/blog.astro` |

After editing, run `npm run dev` to preview live, or `npm run build` to produce
the deployable site. (If you're using the Docker dev container, changes hot-reload
automatically at http://localhost:4321.)

---

## 5. Learn more

- Astro docs: https://docs.astro.build
- Why Astro / "Islands" architecture: https://docs.astro.build/en/concepts/islands/
- `.astro` syntax reference: https://docs.astro.build/en/basics/astro-components/
- Sitemap integration: https://docs.astro.build/en/guides/integrations-guide/sitemap/
