import adapter from "@sveltejs/adapter-auto";
import { sveltePreprocess } from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $lib: "src/lib",
      $components: "src/components",
      $styles: "src/styles",
    },
  },
  preprocess: sveltePreprocess({
    postcss: true, // Enable PostCSS processing
    typescript: true, // Ensure TypeScript support
    scss: true, // If using SCSS
  }),
};

export default config;
