# Khuram Shehzad Baig — GIS Specialist & Developer Portfolio

Personal portfolio website of **Khuram Shehzad Baig**, GIS Specialist & GIS Full-Stack Developer based in Riyadh, Saudi Arabia.

**Live site:** https://ksbaig.github.io/ksbaig_Portfolio/

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) build tooling
- [Tailwind CSS v4](https://tailwindcss.com/) design system (dark navy theme, cyan & gold accents)
- [lucide-react](https://lucide.dev/) icons

## Development

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # type-check and build for production
npm run lint     # run oxlint
npm run preview  # preview the production build
```

## Deployment

The site deploys automatically to **GitHub Pages** via GitHub Actions
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) on every push to `main`.

## Project Structure

- [src/App.tsx](src/App.tsx) — the single-page portfolio (hero, skills, projects, experience, contact)
- [src/index.css](src/index.css) — Tailwind v4 design tokens and custom utilities
- [src/assets/](src/assets) — portrait, project screenshots and CV
- [KSB_Portfolio_loveable/](KSB_Portfolio_loveable) — original Lovable (TanStack Start) export used as the design reference
