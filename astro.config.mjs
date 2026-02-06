// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { readingTimeRemarkPlugin } from './src/utils/reading-time.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.analyzingalpha.com',

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    shikiConfig: {
      themes: {
        dark: 'github-dark',
        light: 'github-light',
      },
    },
  },

  adapter: cloudflare(),
  integrations: [mdx(), sitemap()],
});
