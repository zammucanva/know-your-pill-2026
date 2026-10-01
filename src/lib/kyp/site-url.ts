/**
 * KYP canonical site URL resolution.
 *
 * Single source of truth for absolute URLs in server-rendered metadata
 * (canonical links, Open Graph URLs, JSON-LD structured data, sitemap).
 *
 * The repository's public deployment is the GitHub Pages project site
 * (no custom domain — no CNAME; workflow: .github/workflows/deploy.yml;
 * repo: zammucanva/know-your-pill-2026), so the canonical origin is
 * deterministic. Deployments behind a custom domain override it with
 * NEXT_PUBLIC_SITE_URL at build time — no code change needed.
 *
 * Design rule: structured data must never carry localhost or
 * build-machine URLs. In development the same canonical production
 * URL is emitted (dev HTML is not indexed; canonical URLs remain
 * stable), which mirrors the environment-safe pattern the repository
 * already uses for NEXT_PUBLIC_BASE_PATH.
 *
 * This module is intentionally dependency-free (no data-layer imports)
 * so the root layout can import it without pulling the drug registry
 * into every route's module graph.
 */

/** Canonical public origin, incl. the GitHub Pages basePath. Never localhost. */
export const SITE_URL: string = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://zammucanva.github.io/know-your-pill-2026"
).replace(/\/+$/, "");

/** Function form of SITE_URL — use wherever a call reads better (e.g. `new URL(getSiteUrl())`). */
export function getSiteUrl(): string {
  return SITE_URL;
}

/** Site identity — mirrors the values already declared in src/app/layout.tsx metadata. */
export const SITE_NAME = "Know Your Pill";
export const SITE_AUTHOR_NAME = "Zamaan Ali Shamji";

/**
 * Resolve a root-relative path (e.g. "/drugs/sertraline") to an
 * absolute canonical URL. Absolute and hash-only inputs pass through
 * unchanged, so callers can hand in anchor URLs like
 * `${drugUrl}#prescriber-guide` safely.
 *
 * Trailing-slash awareness (Phase 7): the GitHub Pages static export
 * builds with `trailingSlash: true`, and Next normalizes canonical /
 * Open Graph metadata URLs to that form. When
 * NEXT_PUBLIC_TRAILING_SLASH is set (wired in next.config.ts for the
 * export build), page paths get the trailing slash here too, so
 * JSON-LD, sitemap and canonical/OG URLs can never contradict each
 * other. Standalone/dev (and the test suite) emit clean slash-free
 * paths, matching that mode's trailingSlash: false.
 */
export function absoluteUrl(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (path === "/") return `${SITE_URL}/`;
  const trailingSlash = process.env.NEXT_PUBLIC_TRAILING_SLASH === "1";
  const suffix = trailingSlash && !path.includes("#") ? "/" : "";
  return `${SITE_URL}${path}${suffix}`;
}
