# SeniorTech Academy — Hackathon One-Pager

Tagline: Empowering older adults with confidence to use smartphones — bite-sized, guided lessons that teach real tasks in minutes.

Why this matters
- Problem: Many seniors feel overwhelmed by smartphones and miss out on communication, safety, and services.
- Impact: Short, visual, and spoken lessons reduce anxiety, improve digital inclusion, and strengthen social bonds.

What we built (elevator pitch)
- SeniorTech Academy is a lightweight, offline-friendly web app that teaches essential phone skills (calls, texting, photos, safety, internet) through sequenced steps, images, voice guidance, and quick mastery quizzes that award points and badges.

Key features (high-level)
- Onboarding & profile: simple local profile to personalize lessons.
- Lesson flow: sequential step cards with images and optional spoken instructions.
- Mastery checks: a short quiz at the end of each lesson; correct answers reward points and badges.
- Progress & motivation: point counter, mastered count, confetti celebration on success.
- PWA-ready: `manifest.json` and service-worker present for installability and offline access.

Why judges will like it
- High social impact: addresses a clear accessibility gap for an underserved group.
- Feasible & polished: Vite-based SPA ready to demo locally or on a static host.
- Low friction: works offline, no signups, no backend required for demo.

Live demo & how to run locally
1. Install and run:
```bash
npm install
npm run dev
```
2. Open the app (local dev output shows the URL, typically `http://localhost:5173/`).

Tech stack
- Frontend: Vanilla ES modules + CSS, built with `vite`.
- Extras: `canvas-confetti` for celebrations; `SpeechSynthesis` for voice guidance.
- Asset tools: `sharp` and `canvas` available for image processing scripts (optional).

Repository highlights
- `index.html` — app shell.
- `src/main.js` — router and view logic.
- `src/lessons.js` — canonical lesson data (steps, images, quizzes).
- `public/` — PWA manifest, service worker, and step images.
- `README.md` — full technical README (details, architecture, next steps).

Demo script idea (for booth)
- Open the demo, start onboarding, choose a category, and complete one lesson live. Show confetti and badge awarding to illustrate the emotional payoff.

Team & contact
- Solo / small team project — lead: (Your Name). For questions or to request a hosted demo, contact: (email or GitHub handle).

Next steps for a polished hackathon submission
- Add brief 1-minute demo video and screenshots in `public/` and embed in the README.
- Add a short landing page/cover slide and a hosted preview (Netlify/Vercel) link.
- Optionally add a lightweight backend to sync progress across devices (if the judges care about persistence).

Judging checklist (map to criteria)
- Impact: clearly helps a vulnerable user group.
- Innovation: approachable UX for non-technical users.
- Execution: functioning dev server + production build in `dist/`.
- Presentation: demo script + visuals highlight outcomes quickly.

---

Want me to:
- generate a 1-minute demo script and export a one-page PDF pitch from this file? (I can add a `scripts/generate_pdf.js` and produce the PDF.)
