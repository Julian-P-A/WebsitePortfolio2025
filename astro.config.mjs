// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  inlineStylesheets: 'auto',
  site: 'https://Julian-P-A.github.io/WebsitePortfolio2025/',
  base: '/WebsitePortfolio2025/',
  vite: {
    plugins: [tailwindcss()]
  }
});
