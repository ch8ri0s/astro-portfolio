// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://olivierschaer.com', // Update with your domain
  output: 'static', // Static site generation for Cloudflare Pages
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});