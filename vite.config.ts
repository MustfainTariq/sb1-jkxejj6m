import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tr } from 'framer-motion/client';

// https://vitejs.dev/config/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8000
  }
})