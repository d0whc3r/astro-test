// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import autoprefixer from "autoprefixer";

// https://astro.build/config
export default defineConfig({
  site: "https://ecoairplastics.com",
  integrations: [sitemap()],
  build: {
    format: "file",
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      postcss: {
        plugins: [autoprefixer()],
      },
    },
  },
});
