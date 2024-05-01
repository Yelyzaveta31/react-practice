import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      components: '/src/components',
      data: '/src/data',
      styles: '/src/styles',
      helpers: '/src/helpers',
      tabs: '/src/tabs',
      hooks: '/src/hooks',
    },
  },
});