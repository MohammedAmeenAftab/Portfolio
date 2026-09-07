# Portfolio — Quick Start

## Run it
Open `index.html` directly in a browser, or serve the folder locally:
```
npx serve .
```
(Serving is recommended — some browsers restrict `fetch`/module behavior on `file://`, though this build uses plain scripts so double-clicking `index.html` also works.)

## Customize everything in one place
Almost all content lives in **`js/data.js`** — name, tagline, about text, skills, projects,
experience, achievements, certifications, testimonials, social links, contact info, and stats.
Edit that file and the whole site updates; you don't need to touch `index.html`.

## Replace these placeholders
- **Photo**: swap the initials circle in the hero (`.hero-photo`) for a real `<img>` — see the
  `hero-photo` block in `index.html`.
- **Resume**: replace `resume/Aarav_Sharma_Resume.pdf` with your real resume (same filename,
  or update `personal.resumeFile` in `data.js`).
- **GitHub stats / contribution graph**: currently randomized placeholders
  (`initGithubGraph()` in `js/animations.js`). Swap for a real widget like
  github-readme-stats once you deploy live, or wire up the GitHub API.
- **Project thumbnails**: currently a styled monogram (`.thumb-glyph`). Drop real screenshots
  into `images/` and swap the `<span class="thumb-glyph">` markup for an `<img>`.

## Theme
Base tokens (fonts, spacing, radii) live in `css/style.css` under `:root`.

**13 ready-made color themes** live in `css/themes.css` (Midnight, Daylight, Terminal, Sunset
Amber, Nordic Frost, Cyberpunk, Evergreen, Rose Quartz, Ocean Deep, Solarized Dark/Light,
Monochrome, Crimson) with a swatch-dropdown switcher in the navbar (`js/themes.js`), persisted
in `localStorage`. Pick one as default by changing the fallback in `getInitialTheme()` in
`js/themes.js`, add your own by copying a `[data-theme="..."]` block in `themes.css` and adding
a matching entry to `THEME_LIST`.

## Structure
```
index.html
css/  style.css | responsive.css | animations.css
js/   data.js (content) | script.js (rendering + interactions) | animations.js (motion)
resume/  your resume PDF
images/  project screenshots, photo
```

## Deploy
It's static HTML/CSS/JS — drop it on GitHub Pages, Vercel, or Netlify with zero build step.
