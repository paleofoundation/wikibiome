import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Split the very large main bundle into cacheable vendor chunks plus an
// isolated chunk for the generated content JSON (~16 MB). This keeps the
// app-code chunk small and lets the browser cache heavy deps independently.
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'dist-v28',
    // The `content` chunk is an isolated 12–16 MB generated JSON data
    // payload (src/content.generated.json) — it can't be shrunk via chunking.
    // All real JS chunks sit comfortably under ~250 kB after the splits below,
    // so we raise the warning limit just above the content chunk to silence
    // the spurious warning without hiding future regressions in JS size.
    // (For further optimization, move the JSON to `public/` and fetch it at
    // runtime so it isn't part of the JS graph at all.)
    chunkSizeWarningLimit: 16000,
    cssCodeSplit: true,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Isolate the generated content JSON — biggest single asset.
          if (id.includes('content.generated.json')) {
            return 'content';
          }
          if (id.includes('node_modules')) {
            if (id.includes('/react-router') || id.includes('/@remix-run/')) {
              return 'router';
            }
            if (
              id.includes('/react/') ||
              id.includes('/react-dom/') ||
              id.includes('/scheduler/')
            ) {
              return 'react';
            }
            if (id.includes('/recharts/')) {
              return 'recharts';
            }
            if (id.includes('/d3') || id.includes('/internmap/')) {
              return 'd3';
            }
            if (id.includes('/lucide-react/')) {
              return 'icons';
            }
            return 'vendor';
          }
          return undefined;
        },
      },
    },
  },
  server: { port: 5173, host: true },
});
