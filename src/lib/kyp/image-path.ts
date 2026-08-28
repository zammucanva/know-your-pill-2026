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
