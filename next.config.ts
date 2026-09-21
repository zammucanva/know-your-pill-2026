import type { NextConfig } from "next";

// When building for GitHub Pages (static export), set GITHUB_PAGES=1
// This switches from standalone server mode to static HTML export
const isGithubPages = process.env.GITHUB_PAGES === "1";
const repoName = "know-your-pill-2026";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : "standalone",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  images: isGithubPages ? { unoptimized: true } : undefined,
  trailingSlash: isGithubPages ? true : false,
  // Static export mode: only .tsx/.jsx files are treated as pages, so
  // route.ts API handlers are excluded from the export build. Standalone
  // mode keeps the default extensions so all 9 API routes are built.
  ...(isGithubPages ? { pageExtensions: ["tsx", "jsx"] } : {}),
  // Fail the build on TypeScript errors — never suppress them.
  typescript: { ignoreBuildErrors: false },
  reactStrictMode: true,
  // Never advertise the framework via the X-Powered-By response header.
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : "",
  },
  // Security headers (server modes only — GitHub Pages serves static files
  // and applies its own response headers).
  ...(isGithubPages
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "X-Frame-Options", value: "DENY" },
                {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
                },
                {
                  key: "Permissions-Policy",
                  value: "camera=(), microphone=(), geolocation=(), payment=()",
                },
                {
                  key: "X-DNS-Prefetch-Control",
                  value: "off",
                },
              ],
            },
          ];
        },
        // Redirect legacy .html routes to canonical clean URLs
        // (only works in standalone mode, not static export — GitHub Pages
        // handles 404s via the _not-found page which now shows useful links)
        redirects: () => [
          { source: "/psychiatric.html", destination: "/#library", permanent: true },
          { source: "/pain-management.html", destination: "/#library", permanent: true },
          { source: "/antibiotics.html", destination: "/#library", permanent: true },
          { source: "/substance-use.html", destination: "/#substances", permanent: true },
          { source: "/medicine.html", destination: "/#library", permanent: true },
          { source: "/cocaine.html", destination: "/#substances", permanent: true },
          { source: "/nicotine.html", destination: "/#substances", permanent: true },
          { source: "/amphetamine.html", destination: "/#substances", permanent: true },
          { source: "/benzodiazepines.html", destination: "/#substances", permanent: true },
          { source: "/barbiturate.html", destination: "/#substances", permanent: true },
          { source: "/inhalants.html", destination: "/#substances", permanent: true },
          { source: "/lsd.html", destination: "/#substances", permanent: true },
          { source: "/pcp.html", destination: "/#substances", permanent: true },
          { source: "/acute-intoxication.html", destination: "/#substances", permanent: true },
          { source: "/withdrawal-state.html", destination: "/#substances", permanent: true },
        ],
      }),
};

export default nextConfig;
