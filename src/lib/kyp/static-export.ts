/**
 * Build-mode capability flag for the GitHub Pages static export.
 *
 * The repository ships two deployment modes out of one codebase:
 *
 *   standalone (bun run build)   — full server mode: the 9 API routes
 *                                  (auth, bookmarks, progress,
 *                                  search-history) exist and are used.
 *
 *   static export (GITHUB_PAGES=1) — GitHub Pages serves plain files:
 *                                  no server, no API routes. Anything
 *                                  that calls /api/* there can only
 *                                  ever 404.
 *
 * NEXT_PUBLIC_STATIC is wired in next.config.ts (build-time inlined),
 * so this constant is false in dev/standalone mode and true only in
 * the Pages export. Client surfaces use it to:
 *
 *   - skip API calls entirely (no 404 network noise on every page) [B2]
 *   - degrade auth entry points honestly instead of showing buttons
 *     that can only produce a "Network error" [B1]
 *   - fall back to localStorage persistence for personal conveniences
 *     (search history, bookmarks) so nothing user-visible is lost
 *
 * Standalone behavior is byte-for-byte unchanged: every gate checks
 * this constant first.
 */
export const IS_STATIC_EXPORT: boolean =
  process.env.NEXT_PUBLIC_STATIC === "1";
