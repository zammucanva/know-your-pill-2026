import type { NextConfig } from "next";

// When building for GitHub Pages (static export), set GITHUB_PAGES=1
// This switches from standalone server mode to static HTML export
const isGithubPages = process.env.GITHUB_PAGES === "1";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : "standalone",
  // GitHub Pages serves at https://username.github.io/repo-name/
  // basePath must match the repo name
  basePath: isGithubPages ? "/know-your-pill-2026" : "",
  assetPrefix: isGithubPages ? "/know-your-pill-2026/" : undefined,
  // Static export can't optimize images server-side
  images: isGithubPages ? { unoptimized: true } : undefined,
  // Don't trailing slash — keeps anchor links working
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
