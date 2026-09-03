# Sumit Yadav — Portfolio

A production-ready personal portfolio built with **Vite + React + Tailwind CSS**.
Dark, developer-focused design, fully responsive, SEO-ready and deployable to Vercel in one click.

Live: https://sumitydev.vercel.app/

Positioning is **MERN Full Stack Developer** throughout. Sections run: Hero → About → Skills →
Projects → Experience → Currently learning & exploring → Education → Certifications → Résumé →
Contact.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
```

Other commands:

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

Requires Node.js 18 or newer.

> If `npm install` ever fails with a `@rollup/rollup-*` or `@esbuild/*` "Cannot find module"
> error, delete `node_modules` and `package-lock.json` and run `npm install` again. That's a
> known npm optional-dependency bug, not a problem with this project.

---

## Want to see it before installing anything?

Open **`preview.html`** in any browser. It's a static, pre-rendered snapshot of the whole
page with the compiled CSS inlined — no build step, no dependencies. Handy for a quick look
or for sharing a screenshot. The real site (with scroll animations, mobile menu and the
working contact form) is what `npm run dev` serves.

---

## Where to edit content

Everything you'll want to change lives in `src/data/` — no component edits needed.

| File | What it controls |
| --- | --- |
| `data/site.js` | Name, role, tagline, career goal, email, location, social links, nav items, form endpoint |
| `data/projects.js` | **Project links (top of file)**, names, descriptions, tech, highlights, card order |
| `data/experience.js` | Work / freelance timeline |
| `data/learning.js` | The "Currently learning & exploring" items |
| `data/education.js` | Degrees and results |
| `data/certifications.js` | Certifications (add a `credential` URL to make a card clickable) |
| `data/skills.js` | Skill categories, icons, brand colours and `level` badges |

### Project links

Open `src/data/projects.js`. The top of the file has one `links` block holding every URL the
site uses:

```js
const links = {
  library: { code: 'https://github.com/sumity7/…', demo: 'https://…' },
  // …
}
```

- `code` — the GitHub repository URL. Where a repo isn't public yet this points at the
  GitHub profile, so the button still goes somewhere real.
- `demo` — the live deployment URL. **Leave it as `''` and the "Live demo" button simply
  won't render for that project** — no dead links.

Card order follows the order of the `projects` array, so to move a project just move its
object. The entry with `spotlight: true` becomes the large featured card.

### Skill levels

Items in `data/skills.js` can carry an honest `level` badge instead of a fake percentage:

```js
{ name: 'Java', Icon: FaJava, color: '#E76F00', level: 'Basic' }
```

Omit `level` for working proficiency. `'Basic'` and `'Learning'` render as a small badge.

### The contact form

The form posts to **FormSubmit**, which needs no account and no API key — it's already
wired to `syadav787034@gmail.com`.

> **One-time activation:** after deploying, submit the form once yourself. FormSubmit emails
> you a confirmation link — click it, and every submission from then on lands in your inbox.
> Until you do, submissions are held rather than delivered.

If a request fails for any reason (offline, service down, blocked network) the form falls
back to opening the visitor's mail client with the message pre-filled, so the button never
dead-ends.

Prefer Formspree? Create a form at [formspree.io](https://formspree.io), copy its ID and set
it in `src/data/site.js` — it takes priority automatically:

```js
export const FORMSPREE_ID = 'xdorwqkv'
```

### Replacing the résumé

Drop your new PDF at `public/resume.pdf` (same filename). Every download button points there.

### Replacing the photo

Replace `public/sumit-yadav.webp` (and optionally `public/sumit-yadav.jpg`). A portrait-ish
4:5 crop looks best in the About section.

---

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import that repo.
3. Vercel auto-detects Vite. Framework preset `Vite`, build command `npm run build`,
   output directory `dist`. Click **Deploy**.

After the first deploy, update the domain in three places so SEO and social previews point
at the right URL: `index.html` (canonical, `og:url`, JSON-LD), `public/sitemap.xml`, and
`public/robots.txt`.

Netlify works identically — build `npm run build`, publish `dist`.

---

## Project structure

```
public/            resume.pdf, favicon, og-image, portrait, robots.txt, sitemap.xml
src/
  components/      Section components (Hero, About, Skills, Projects, Learning, …)
    ui/            Reusable primitives (Button, Reveal, SectionHeading, SocialLinks)
  data/            All editable content lives here
  hooks/           useInView (scroll reveal), useActiveSection (nav highlighting)
  index.css        Design tokens, base styles, animations, reduced-motion handling
  App.jsx          Page composition
index.html         SEO meta, Open Graph, Twitter cards, JSON-LD structured data
tailwind.config.js Colour palette, fonts, shadows, keyframes
preview.html       Static snapshot — open directly in a browser
```

---

## What's built in

**Design** — Custom dark palette (deep navy-ink base, azure and amber accents), Space Grotesk
+ Inter + JetBrains Mono, glass cards with soft depth, animated hero code window. No template
look, no neon-on-black.

**Motion** — IntersectionObserver scroll reveals, staggered hero entrance, card hover lifts,
animated nav underline. Everything is disabled under `prefers-reduced-motion: reduce`, and the
page is fully legible with animation off.

**Responsive** — Fluid container padding via `clamp()`, `overflow-x: clip` on the body, and
layouts that collapse cleanly from desktop through tablet to small phones. No horizontal scroll.

**Accessibility** — Semantic landmarks, one `<h1>` with a correct heading order, skip-to-content
link, visible focus rings, `aria-label` / `aria-expanded` / `aria-live` where needed, alt text
on the photo, decorative graphics marked `aria-hidden`.

**Honest content** — No proficiency percentages, no invented projects or employers. Skills that
are at a basic level or still being learned are labelled as such, and the "Currently learning &
exploring" section is deliberately separate from Skills so nothing reads as expertise it isn't.

**SEO** — Descriptive title and meta description, canonical URL, Open Graph and Twitter card
images, JSON-LD `Person` + `WebSite` schema, `robots.txt`, `sitemap.xml`, SVG favicon.

**Performance** — Three runtime dependencies (react, react-dom, react-icons), tree-shaken
icon imports, lazy-loaded image with explicit dimensions to avoid layout shift, no animation
library, no web font blocking beyond a single preconnected stylesheet.

---

## Tech

React 18 · Vite 5 · Tailwind CSS 3.4 · react-icons

Built by Sumit Yadav — [GitHub](https://github.com/sumity7) ·
[LinkedIn](https://www.linkedin.com/in/sumit-yadav-a1296827a/)
