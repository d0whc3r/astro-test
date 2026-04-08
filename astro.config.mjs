import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";
import autoprefixer from "autoprefixer";

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file',
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
