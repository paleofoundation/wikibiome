import type { NextConfig } from "next";
import { articleAliasRedirects } from "./lib/article-alias-redirects.mjs";

const nextConfig: NextConfig = {
  async redirects() {
    return [...articleAliasRedirects];
  },
};

export default nextConfig;
