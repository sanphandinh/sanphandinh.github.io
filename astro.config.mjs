import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://sanphandinh.github.io',
  integrations: [tailwind(), mdx()],
  collections: {
    projects: {
      path: 'src/content/projects/'
    }
  }
});