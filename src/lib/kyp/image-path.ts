/**
 * Returns the correct image path with basePath prepended for GitHub Pages.
 * In dev mode, basePath is empty so paths are unchanged.
 * In static export mode, basePath is /know-your-pill-2026.
 */
export function imgPath(src: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (src.startsWith("http") || src.startsWith("//")) return src;
  if (src.startsWith(basePath)) return src;
  return `${basePath}${src}`;
}

/**
 * Returns the correct internal link path with basePath prepended for
 * GitHub Pages.
 *
 * Links rendered through next/link get the basePath automatically — but
 * raw <a>/<motion.a> anchors (e.g. the interactive knowledge-graph nodes,
 * whose hrefs come from the canonical drug registry data) resolve from the
 * DOMAIN ROOT on GitHub Pages and break. Those anchors must route their
 * href through linkPath().
 *
 * Pure hash anchors ("#section"), relative paths, and absolute/protocol
 * URLs pass through unchanged.
 */
export function linkPath(href: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (basePath && href.startsWith(basePath)) return href;
  return `${basePath}${href}`;
}
