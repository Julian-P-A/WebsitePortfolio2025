// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Julian-P-A.github.io/WebsitePortfolio2025/',
  base: '/WebsitePortfolio2025/', solo cuando haga deploy
  vite: {
    plugins: [tailwindcss()]
  }
});
