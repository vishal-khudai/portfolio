import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// Vite configuration for static deployment
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
});
