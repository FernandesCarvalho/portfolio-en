# Fernandes Carvalho — Portfolio

English-language portfolio built with React, TypeScript, Vite and styled-components.

## Run locally

Use Node.js 22.12 or newer and npm 9.2 or newer.

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm run lint
npm run build
npm run preview
```

Deploy the generated `dist/` directory using a static site host.

## Content

- `src/components/Hero.tsx`: introduction and main actions.
- `src/components/ProjectsGrid.tsx`: featured case study and project demonstrations.
- `src/components/Services.tsx`: skills and services.
- `src/components/Modal.tsx`: accessible native About dialog.
- `src/components/ContactForm.tsx`: email and social links; no form submission service.
- `public/FernandesCV.docx`: original CV; `public/FernandesCV.pdf`: browser-friendly export.
- `index.html`: search and social metadata; `public/social-preview.png`: sharing image.

Images used by the application are resized WebP files. Original PNGs remain available for future editing. Below-the-fold images load lazily. The site respects reduced-motion preferences and supports keyboard navigation.

Before publishing on a final domain, configure an absolute social image URL, `og:url` and a canonical URL in `index.html`. These are intentionally not guessed. Verify external project URLs and CV content when updating the portfolio. The Mecaniko stack was checked against the local garage project. Repository-specific links and unverified project results are not invented; the GitHub profile links to available public work.

The CV PDF preserves the supplied document content, which may need a separate content update (including older profile links and project descriptions).

## Audit changes

- Accessible mobile navigation, visible focus, skip link and native modal focus handling.
- Featured Mecaniko presentation, concise project descriptions and visible CV/contact actions.
- Optimized images, metadata, contrast corrections and responsive card sizing.
- Consolidated ESLint configuration and removed unused dependencies.
- Removed the redundant Vite override that prevented dependency installation with npm 9.

## Validation of this revision

- Clean dependency install with `npm ci`, TypeScript/production build and ESLint passed.
- Chromium checks passed at widths 320, 390, 768, 1024 and 1440 px without horizontal overflow.
- Verified dialog keyboard focus containment, Escape dismissal and focus restoration; mobile menu visibility and closing on navigation; PDF availability; no page runtime exceptions.
- Visually reviewed desktop layout, mobile dialog and all three CV PDF pages.
- The four project images decreased from approximately 6.8 MiB to 272 KiB (about 96%).

These checks do not replace production Lighthouse measurements or verification of external destinations.
