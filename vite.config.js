// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/elite-cars-final/', // Ensure this matches your repository name
  build: {
    outDir: 'build', // Ensure this matches your build output directory
  },
});
