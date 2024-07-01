import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [icon({
    include: {
      "fa6-brands": ["facebook", "instagram", "x-twitter"]
    }
  })],
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  })
});