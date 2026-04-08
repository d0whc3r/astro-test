// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import autoprefixer from "autoprefixer";

// https://astro.build/config
export default defineConfig({
  site: "https://d0whc3r.github.io",
  base: "/astro-test",
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
