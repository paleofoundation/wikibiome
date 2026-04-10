import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 2000,
    outDir: 'dist-v18',
  },
  server: { port: 5173, host: true },
});
