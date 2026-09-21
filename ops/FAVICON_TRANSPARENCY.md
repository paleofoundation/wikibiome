# Favicon transparency release

The favicon's white exterior appears as a square against browser tab backgrounds.
The Sites app now uses an SVG circular clip around the unchanged original PNG,
with an opaque blue backing circle. The blue field and white W remain opaque;
only the exterior is transparent. Metadata and the favicon.ico redirect reference
the versioned SVG URL to refresh the browser favicon cache.

- Production base: 7505af70d191a63863907da772f3e1732e2896e5 (Sites version 80).
- Exact release source: 0ebe868632b1b8ada5e4dbeb4073fe84a4e011d4.
- Review patch: ops/patches/favicon-transparency-sites.patch.
- Validation: production build, typecheck, editorial and media gates passed.
- Pixel validation: all 519,825 pixels inspected; interior opaque, exterior
  transparent, allowing antialiasing at the circle edge. Embedded original
  artwork verified byte-for-byte; preview inspected on light and dark backgrounds.

Publish this exact source once after merge, per the user's explicit request.
