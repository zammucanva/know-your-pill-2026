import type { NextConfig } from "next";
import { CONTENT_SECURITY_POLICY } from "./src/lib/csp";

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
    // Static-export capability flag (audit B1/B2): true only in the
    // GitHub Pages build — client hooks/components read it to skip
    // /api/* calls that can only 404 without a server, and to degrade
    // the auth entry points honestly. See src/lib/kyp/static-export.ts.
    NEXT_PUBLIC_STATIC: isGithubPages ? "1" : "",
    // Phase 7: the export build uses trailingSlash: true (see below), and
    // Next normalizes canonical/OG metadata URLs to that form. Structured
    // data (JSON-LD, sitemap) must emit the same form so the URLs never
    // contradict each other — resolved via absoluteUrl() in
    // src/lib/kyp/site-url.ts.
    NEXT_PUBLIC_TRAILING_SLASH: isGithubPages ? "1" : "",
  },
  // Security headers (server modes only — GitHub Pages serves static files
  // and applies its own response headers; the static export carries the
  // same CSP via a <meta> tag rendered in the root layout).
  //
  // The CSP header is emitted only in production: `next dev` requires
  // eval-capable script handling for HMR/react-refresh that the production
  // policy deliberately does not grant. Production servers (and the test
  // harness, which runs the standalone build with NODE_ENV=production)
  // always emit it.
  ...(isGithubPages
    ? {}
    : {
        async headers() {
          const productionOnly: { key: string; value: string }[] =
            process.env.NODE_ENV === "production"
              ? [
                  {
                    key: "Content-Security-Policy",
                    value: CONTENT_SECURITY_POLICY,
                  },
                ]
              : [];
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
                ...productionOnly,
              ],
            },
            // Anatomy geometry chunks are requested with ?v=<content hash> (see use-anatomy-model),
            // so a changed chunk always has a new URL and these can be cached for a year.
            {
              source: "/models/:file(body-.*\.bin\.gz)",
              headers: [
                { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
              ],
            },
            // The proxied Firebase auth handler embeds an iframe from this
            // same origin, which the blanket DENY / frame-ancestors 'none'
            // above would block. Allow same-origin framing for these
            // paths only (later rules override earlier ones per key).
            {
              source: "/__/auth/:path*",
              headers: [
                { key: "X-Frame-Options", value: "SAMEORIGIN" },
                ...(process.env.NODE_ENV === "production"
                  ? [
                      {
                        key: "Content-Security-Policy",
                        value: CONTENT_SECURITY_POLICY.replace(
                          "frame-ancestors 'none'",
                          "frame-ancestors 'self'"
                        ),
                      },
                    ]
                  : []),
              ],
            },
          ];
        },
        // Same-origin Firebase auth handler. Safari and other browsers that
        // partition third-party storage cannot finish a Google redirect
        // sign-in when the handler lives on <project>.firebaseapp.com, so
        // the handler is served from this site's own host instead (the
        // client points authDomain at the page host; see firebase-client).
        // Skipped when no auth domain is configured (CI, previews).
        rewrites: async () => {
          const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
          if (!authDomain) return [];
          return [
            { source: "/__/auth/:path*", destination: `https://${authDomain}/__/auth/:path*` },
            { source: "/__/firebase/init.json", destination: `https://${authDomain}/__/firebase/init.json` },
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
