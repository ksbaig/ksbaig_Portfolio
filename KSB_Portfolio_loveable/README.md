# Khuram Shehzad Baig — GIS Portfolio Website

Personal portfolio website for a GIS Specialist & GIS Developer, built with
TanStack Start (React 19 + Vite) and Tailwind CSS v4.

## Sections

- Hero with portrait, quick stats and CV download
- About
- Core skills (Esri platforms, Web GIS, automation, spatial databases, 3D/GeoAI, field & remote sensing)
- Selected projects
- Work experience timeline and certifications
- Contact (email, phone, LinkedIn, location)

## Run it locally

Requires Node.js 20+ (or Bun).

```bash
npm install     # or: bun install
npm run dev     # or: bun run dev
```

Open http://localhost:5173 in your browser.

## Production build

```bash
npm run build
npm run preview
```

Note: this project uses the `@lovable.dev/vite-tanstack-config` Vite preset
(declared in `package.json`), which bundles the TanStack Start, React and
Tailwind plugins.

## Where to edit your content

All page content lives in `src/routes/index.tsx`:

- `EMAIL`, `LINKEDIN`, `DRIVE` — contact links and portfolio-drive link
- `skills`, `projects`, `jobs`, `certs` — the section data
- Headline, bio and stats are in the `Index` component below those constants

Images live in `src/assets/` (`portrait.jpg`, `p1.jpg`, `p2.jpg`, `p3.jpg`)
and the downloadable CV is `src/assets/Khuram_Baig_CV.pdf`.

Styles and theme colors are in `src/styles.css`.
