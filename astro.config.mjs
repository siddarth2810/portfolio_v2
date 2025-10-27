// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), icon()],
  site: 'https://siddarth2810.github.io',
  base: process.env.NODE_ENV === 'production' ? '/portfolio_v2' : '/',
});
