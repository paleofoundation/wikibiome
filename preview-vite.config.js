import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'dist-preview',
    rollupOptions: {
      input: 'preview-explorer.html'
    }
  },
  server: { port: 5174, host: true },
});
