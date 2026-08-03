import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully pre-rendered HTML for every route -> best possible SEO, and it
  // deploys to Cloudflare Pages on the free tier with zero server cost.
  output: "export",

  // Cloudflare Pages serves static files; Next's image optimizer needs a
  // server, so we ship correctly-sized assets ourselves instead.
  images: { unoptimized: true },

  // Emit /blog/slug/index.html so Cloudflare serves clean URLs without
  // redirect hops (a redirect chain on every page dilutes crawl budget).
  trailingSlash: true,
};

export default nextConfig;
