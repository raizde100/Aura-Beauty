import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // CRITICAL: Ensures assets are loaded correctly when deployed to a subpath (like GitHub Pages)
  build: {
    outDir: 'dist',
  },
});