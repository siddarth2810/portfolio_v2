// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [tailwind(), react(), icon()],
  output: 'server',
  adapter: netlify()
});

