"use client";

import * as React from "react";

/**
 * useBookmarks — React hook for managing user bookmarks.
 *
 * Provides:
 * - bookmarked: boolean (whether the current item is bookmarked)
 * - toggle(): adds or removes the bookmark
 * - loading: boolean
 *
 * Usage on a drug/substance/disease page:
 *   const { bookmarked, toggle, loading } = useBookmarks({ type: "drug", slug: "sertraline", title: "Sertraline" });
 */

interface UseBookmarksParams {
  type: "drug" | "substance" | "disease";
  slug: string;
  title: string;
}

export function useBookmarks({ type, slug, title }: UseBookmarksParams) {
  const [bookmarked, setBookmarked] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  // Check if already bookmarked on mount
  React.useEffect(() => {
    let cancelled = false;
    async function check() {
      try {
        const r = await fetch(`/api/bookmarks/check?type=${type}&slug=${encodeURIComponent(slug)}`);
        if (!r.ok) return;
        const d = await r.json();
        if (!cancelled) setBookmarked(d.bookmarked);
      } catch {
        // Silently fail — bookmarks are a nice-to-have, not critical
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    check();
    return () => { cancelled = true; };
  }, [type, slug]);

  const toggle = React.useCallback(async () => {
    setLoading(true);
    try {
      if (bookmarked) {
        await fetch(`/api/bookmarks?type=${type}&slug=${encodeURIComponent(slug)}`, {
          method: "DELETE",
        });
        setBookmarked(false);
      } else {
        await fetch("/api/bookmarks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type, slug, title }),
        });
        setBookmarked(true);
      }
    } catch {
      // Silently fail
    } finally {
      setLoading(false);
    }
  }, [bookmarked, type, slug, title]);

  return { bookmarked, toggle, loading };
}
