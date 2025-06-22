import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.jsx'],
      refresh: true,
    }),
  ],
  build: {
    outDir: 'public/build', // ✅ Ensure Vite outputs to public/build
    emptyOutDir: true,
  },
  base: '/build/',
});
