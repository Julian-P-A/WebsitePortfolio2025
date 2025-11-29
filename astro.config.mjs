// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://Julian-P-A.github.io/WebsitePortfolio2025/',

  base: '/WebsitePortfolio2025/',
  vite: {
    plugins: [tailwindcss()]
  },
  compressHTML: true,
  integrations: [react()]
});