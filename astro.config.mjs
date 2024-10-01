import {defineConfig} from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://maiko26.github.io",
  base: "portfolio",
  output: "server",
  adapter: vercel({
    webAnalytics: {enabled: true},
  }),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
