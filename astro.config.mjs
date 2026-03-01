import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://neuralpulse.io',
  integrations: [
    sitemap({
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date(),
    }),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
