import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// Vite configuration for static deployment
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
  build: {
    minify: 'esbuild', // Faster and very effective
    cssMinify: true,
    sourcemap: false, // Disable sourcemaps in production to hide source code
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'motion/react', 'lucide-react'],
        },
      },
    },
  },
});
