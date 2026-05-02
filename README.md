# personal-website

Source for [akshargupta.vercel.app](https://akshargupta.vercel.app) — homepage, CV, blog, and projects.

Built with [Astro](https://astro.build/) and deployed on Vercel.

## Develop

```bash
npm install
npm run dev      # localhost:4321
npm run build    # build to dist/
npm run preview  # preview the build
```

## CV

The CV at `/cv` is written in markdown (`src/pages/cv.md`) and a downloadable PDF is generated from it via `astro-pdf`. The PDF build only runs locally (Vercel's build container is missing dependencies Chromium needs), so to update the PDF:

```bash
npm run cv       # rebuilds public/cv.pdf from cv.md
```

Commit `cv.md` and `public/cv.pdf` together.
