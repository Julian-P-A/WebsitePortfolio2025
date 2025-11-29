// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  site: 'https://Julian-P-A.github.io/WebsitePortfolio2025/',

  base: isVercel ? '/' : '/WebsitePortfolio2025/',
  vite: {
    plugins: [tailwindcss()]
  },
  compressHTML: true,
  integrations: []
});