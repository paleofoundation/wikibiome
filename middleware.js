/**
 * Platform-level host + path normalization.
 *
 * Live GSC / curl (2026-09-04):
 * - https://wikibiome.com/… returns 200 while canonicals say www (host split).
 * - /signature-explorer was a Babel-in-browser HTML that 5xx'd on fetch.
 * - Soft-404 slugs were source filenames or missing articles served as
 *   homepage-canonical 404s on the live Next origin.
 *
 * This middleware:
 * 1. 410s known-gone /article/* slugs (never public encyclopedia pages).
 * 2. 301s path aliases (signature-explorer, DNA-damage, ASD slug).
 * 3. 301s apex → www.
 * Host + path alias compose into one hop.
 * Preview hosts (*.vercel.app) are not rewritten to www.
 */
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { resolveSeoRedirect, GONE_HTML } = require('./scripts/seo-config.cjs');

export const config = {
  runtime: 'nodejs',
  matcher: ['/', '/((?!assets/|_next/|favicon).*)'],
};

export default function middleware(request) {
  const result = resolveSeoRedirect(request.url, request.headers.get('host'));
  if (!result) return;
  if (result.status === 410) {
    return new Response(GONE_HTML, {
      status: 410,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex, follow',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    });
  }
  return new Response(null, {
    status: 301,
    headers: {
      Location: result.location,
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
