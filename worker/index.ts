/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";
import { articleMediaRegistry } from "../lib/article-media-registry.mjs";
import { handleEarlyRoutingPolicy, maybeReplaceNotFoundResponse } from "../lib/routing-policy.mjs";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const registeredMedia = new Map<string, "image" | "social">(
  Object.values(articleMediaRegistry).flatMap((media) => [
    [media.publishedFile, "image" as const],
    [media.socialFile, "social" as const],
  ]),
);

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const routingPolicyResponse = await handleEarlyRoutingPolicy(request);
    if (routingPolicyResponse) return routingPolicyResponse;

    // Worker-first routing lets apex assets redirect too. Framework build assets
    // must then go directly to the asset binding instead of the app router.
    if (["GET", "HEAD"].includes(request.method) && url.pathname.startsWith("/_next/static/") && env?.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    if (url.pathname.startsWith("/media/") && url.pathname.endsWith(".webp")) {
      const canonicalMatch = url.pathname.match(/^\/media\/(image|social)\/([^/]+\.webp)$/);
      const legacyMatch = url.pathname.match(/^\/media\/([^/]+\.webp)$/);
      const filename = canonicalMatch?.[2] ?? legacyMatch?.[1];
      if (!filename) return handler.fetch(request, env, ctx);
      const registeredKind = registeredMedia.get(filename);
      if (!registeredKind) return new Response("Not found", { status: 404 });
      if (legacyMatch) {
        return Response.redirect(new URL(`/media/${registeredKind}/${filename}`, request.url), 308);
      }
      if (canonicalMatch?.[1] !== registeredKind) {
        return Response.redirect(new URL(`/media/${registeredKind}/${filename}`, request.url), 308);
      }
      const assetUrl = new URL(`/media-files/${filename}`, request.url);
      const assetRequest = new Request(assetUrl, request);
      if (!env?.ASSETS) return Response.redirect(assetUrl, 307);
      const asset = await env.ASSETS.fetch(assetRequest);
      if (!asset.ok) return asset;
      const headers = new Headers(asset.headers);
      headers.set("Content-Type", "image/webp");
      headers.set("X-Content-Type-Options", "nosniff");
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
      return new Response(request.method === "HEAD" ? null : asset.body, {
        status: asset.status,
        statusText: asset.statusText,
        headers,
      });
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    const response = await handler.fetch(request, env, ctx);
    return maybeReplaceNotFoundResponse(request, response);
  },
};

export default worker;
