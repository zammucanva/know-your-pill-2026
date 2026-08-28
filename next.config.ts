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
  // Redirect legacy .html routes to canonical clean URLs
  // (only works in standalone mode, not static export — GitHub Pages
  // handles 404s via the _not-found page which now shows useful links)
  ...(isGithubPages
    ? {}
    : {
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
