<<<<<<< HEAD
# SeniorTech-Academy
=======
# SeniorTech Academy

>A lightweight, Vite-based progressive web app that teaches essential smartphone skills for older adults through short step-by-step lessons, quizzes, badges, and local progress tracking.

---

**Table of contents**
- **Overview:** summary of the app
- **Features:** what the app provides
- **Tech stack:** runtime and dependencies
- **Project structure:** important files and folders
- **Getting started:** dev / build / preview commands
- **How it works:** data flow, lessons format, and persistence
- **PWA & assets:** manifest, service worker, images
- **Notes & known issues**
- **Contributing**

---

**Overview:**
- SeniorTech Academy is a client-side learning app aimed at teaching basic smartphone skills (calling, texting, camera, safety, internet, etc.) via short visual steps and a final mastery quiz for each lesson. The app is designed as an offline-friendly single-page app (SPA) with a simple progress and points system persisted to `localStorage`.

**Features:**
- 25+ lessons organized into categories (Essentials, Safety, Media, Internet, Tools).
- Step-by-step lesson viewer with images and spoken instructions (Web Speech API).
- A final mastery quiz per lesson awarding points and badges.
- Simple profile and onboarding flow stored locally.
- Basic PWA support (manifest + service worker in `public/`).

**Tech stack:**
- Node.js + npm (developer tools)
- Vite (build / dev server)
- Vanilla JavaScript (ES modules) and CSS
- Dependencies in `package.json`:
  - `vite` (dev)
  - `canvas-confetti` (client confetti)
  - `canvas` and `sharp` (used by image-generation scripts; native modules)

**Project structure (key files):**
- `index.html` — app shell and entry point.
- `package.json` — scripts: `dev`, `build`, `preview`.
- `src/main.js` — routing, view rendering, state management, and app logic.
- `src/lessons.js` — canonical list of lessons (ids, categories, steps, quiz data, images).
- `src/style.css` — application styles.
- `public/manifest.json` — PWA metadata.
- `public/sw.js` — service worker (copied into `dist/` during build).
- `public/images/steps/` — step-by-step images used by lessons.
- `dist/` — build output after running `npm run build` (contains minified assets and a ready-to-serve static bundle).
- Utility scripts: `generate_placeholders.js`, `generate_premium_placeholders.js`, `slice_images.js`, and several `run_slice_batch*.js` scripts used for image processing and placeholder generation.

**Getting started (development):**
Prerequisites: Node.js (recommended v16+ or v18+) and npm installed.

1. Install dependencies:
```bash
npm install
```
2. Start dev server (hot reload):
```bash
npm run dev
```
Open: http://localhost:5173/ (Vite may try another port if 5173 is occupied; check terminal output).

3. Build for production:
```bash
npm run build
```
4. Preview production build locally:
```bash
npm run preview
```

**How it works (internals):**
- Routing: a small hash-based router in `src/main.js` drives views (`#`, `#onboarding`, `#category-<id>`, `#lesson-<id>`, `#dashboard`, `#profile`).
- Lessons: `src/lessons.js` exports `LESSONS` (array). Each lesson has `id`, `category`, `title`, `steps` (each step includes `text`, `img`), and a `quiz` object with `question`, `options`, and `answer` (index).
- State: in-memory `state` object persisted to `localStorage` under key `seniortech_mastery_v2`. Stored fields: `points`, `completed` (lesson ids), `badges`, `profile`, and `settings`.
- Speech: the app uses the browser `SpeechSynthesis` API to optionally read step instructions (toggle in `state.settings`).
- Confetti: client-side confetti via `canvas-confetti` loaded from CDN (`index.html`).

**PWA & assets:**
- `public/manifest.json` contains PWA metadata used when installing to mobile homescreen.
- `public/sw.js` is copied into `dist/` during the build and can provide offline caching if configured/extended.
- Lesson images live under `public/images/steps/` and are referenced by relative paths like `/images/steps/lesson_call_step_1.png`.

**Image processing scripts:**
- Several scripts (e.g., `slice_images.js`, `slice_vertical.cjs`, `run_slice_batch*.js`) and `sharp`/`canvas` dependencies suggest there are utilities to generate or slice lesson images. These are not necessary to run the app in the browser but are useful if you need to re-generate assets.

**Generating a PDF (documentation):**
You can create a PDF of the repository documentation in a few ways:
- Option A — locally: export this README via any Markdown-to-PDF tool (Pandoc, `markdown-pdf`, or VS Code's "Print to PDF").
- Option B — programmatic: add a Node script using `puppeteer` to render `index.html` or the README and print to PDF.

Example (quick):
```bash
# Install puppeteer (optional) and run a script to render README or a docs page to PDF
npm install --save-dev puppeteer
node scripts/generate_pdf.js
```

Note: this repo currently does not include `scripts/generate_pdf.js` by default — you can use the above approach and I can add a ready-to-run `scripts/generate_pdf.js` if you want.

**Known issues & notes:**
- `sharp` and `canvas` are native modules and may require additional build tools on Windows (windows-build-tools, Python, or prebuilt binaries). If you don't plan to run image-generation scripts, you can run the frontend without them.
- All user data (profile, progress) is stored locally only — there is no server-side persistence.
- Accessibility: basic support via large fonts and images; consider keyboard navigation and ARIA improvements for production.

**Contributing & next steps I can help with:**
- Add a backend (API + persistent DB) to store progress remotely.
- Add unit/end-to-end tests and CI.
- Improve accessibility and localization.
- Add an automated `scripts/generate_pdf.js` and a `/scripts` README to produce a PDF of this README + screenshots — I can implement that next.

---

If you want, I will now:
- add a `scripts/generate_pdf.js` that uses `puppeteer` to export this README to PDF,
- and produce the PDF for you.

Tell me which of the two actions you'd like next.
>>>>>>> 661713e (chore: initial commit of SeniorTech Academy)
