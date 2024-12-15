import {defineConfig} from 'astro/config'
import icon from 'astro-icon'

import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        'fa6-brands': ['facebook', 'instagram', 'x-twitter'],
        'svg-spinners': ['bars-scale-fade'],
      },
    }),
  ],
  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
  image: {
    domains: [
      'directus-jonasallencodes.stage.jonasallen.cloud',
      'directus-jonasallencodes.prod.jonasallen.cloud',
    ],
    remotePatterns: [{protocol: 'https'}],
  },
})
