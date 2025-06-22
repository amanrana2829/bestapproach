import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.jsx'], // your entry points
      refresh: true,
    }),
  ],
  build: {
    outDir: 'public/build', // very important
    manifest: true,
    rollupOptions: {
      input: 'resources/js/app.jsx',
    },
  },
});
