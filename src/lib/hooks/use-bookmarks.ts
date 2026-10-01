"use client";

import * as React from "react";
import { IS_STATIC_EXPORT } from "@/lib/kyp/static-export";

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
 *
 * Storage backends (build-time selection, same as useSearchHistory):
 *
 *   standalone server — /api/bookmarks (session-scoped, cross-device).
 *
 *   GitHub Pages static export — localStorage on this device. Without
 *   a server the API calls could only 404, and the bookmark button
 *   silently did nothing; the local backend keeps it working.
 */

interface UseBookmarksParams {
  type: "drug" | "substance" | "disease";
  slug: string;
  title: string;
}

const STORAGE_KEY = "kyp:bookmarks";

function readLocal(): { type: string; slug: string; title: string }[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (e): e is { type: string; slug: string; title: string } =>
        typeof e === "object" && e !== null && typeof (e as { slug?: unknown }).slug === "string"
    );
  } catch {
    return [];
  }
}

function writeLocal(entries: { type: string; slug: string; title: string }[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // Private mode / quota — bookmarks are a convenience.
  }
}

export function useBookmarks({ type, slug, title }: UseBookmarksParams) {
  const [bookmarked, setBookmarked] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  // Check if already bookmarked on mount
  React.useEffect(() => {
    let cancelled = false;
    async function check() {
      if (IS_STATIC_EXPORT) {
        if (!cancelled) {
          setBookmarked(readLocal().some((e) => e.type === type && e.slug === slug));
          setLoading(false);
        }
        return;
      }
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
    if (IS_STATIC_EXPORT) {
      const all = readLocal();
      const exists = all.some((e) => e.type === type && e.slug === slug);
      const next = exists
        ? all.filter((e) => !(e.type === type && e.slug === slug))
        : [...all, { type, slug, title }];
      writeLocal(next);
      setBookmarked(!exists);
      setLoading(false);
      return;
    }
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
