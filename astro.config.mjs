import { defineConfig } from 'astro/config';
import pdf from 'astro-pdf';

// Skip the PDF integration on Vercel — its build environment is missing the
// system libraries Puppeteer's bundled Chromium needs (libnspr4.so, etc).
// Locally, run `npm run cv` to regenerate public/cv.pdf from cv.md before
// committing. Vercel then serves the committed public/cv.pdf as a static asset.
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  site: 'https://akshargupta.vercel.app',
  integrations: isVercel ? [] : [
    pdf({
      baseOptions: {
        waitUntil: 'networkidle0',
        pdf: {
          format: 'A4',
          printBackground: true,
          margin: {
            top: '13mm',
            right: '13mm',
            bottom: '13mm',
            left: '13mm',
          },
        },
      },
      // Output to a distinct filename so astro-pdf doesn't collide with the
      // static public/cv.pdf that gets copied into dist/ on every build.
      // The `npm run cv` script copies this back to public/cv.pdf.
      pages: {
        '/cv': 'cv-build.pdf',
      },
    }),
  ],
});
