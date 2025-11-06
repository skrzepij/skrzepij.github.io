import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(), // dla Swiper (React island)
    sitemap(),
  ],
  output: 'static',
  site: 'https://skrzepij.github.io',
  base: '/',
  vite: {
    optimizeDeps: {
      include: ['swiper']
    }
  }
});

