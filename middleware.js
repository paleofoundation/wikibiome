/**
 * Platform-level host normalization.
 *
 * Live GSC / curl show https://wikibiome.com/ (and article paths) returning
 * 200 with 0 redirects while sitemaps and canonical tags use www. vercel.json
 * `/:path*` host rules often miss `/`. This middleware 301s every apex request
 * to https://www.wikibiome.com${path}${search} in a single hop.
 */
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { canonicalRedirectUrl } = require('./scripts/seo-config.cjs');

export const config = {
  runtime: 'nodejs',
  matcher: ['/', '/((?!assets/|_next/|favicon).*)'],
};

export default function middleware(request) {
  const location = canonicalRedirectUrl(request.url, request.headers.get('host'));
  if (!location) return;
  return new Response(null, {
    status: 301,
    headers: {
      Location: location,
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
