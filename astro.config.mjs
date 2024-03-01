import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        "fa6-brands": ["facebook", "instagram", "x-twitter"],
      },
    }),
  ],
});