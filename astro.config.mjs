import { defineConfig } from 'astro/config';
import pdf from 'astro-pdf';

export default defineConfig({
  site: 'https://akshargupta.vercel.app',
  integrations: [
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
      pages: {
        '/cv': 'cv.pdf',
      },
    }),
  ],
});
