"use client";

import * as React from "react";
import { IS_STATIC_EXPORT } from "@/lib/kyp/static-export";

/**
 * useSearchHistory — React hook for recording and retrieving search history.
 *
 * Provides:
 * - history: recent search entries (newest first)
 * - recordSearch(query, result?): records a search
 * - clearHistory(): clears all history
 * - loading: boolean
 *
 * Two storage backends, selected at build time:
 *
 *   standalone server — the /api/search-history route (shared across
 *   the user's devices via their session).
 *
 *   GitHub Pages static export — localStorage (this device only). The
 *   export has no server, so the previous unconditional API calls
 *   404-spammed the console and network tab on every search session
 *   [audit B2]. Same interface, same UX, zero network requests.
 */

export interface SearchHistoryEntry {
  id: string;
  query: string;
  resultType?: string | null;
  resultSlug?: string | null;
  resultTitle?: string | null;
  createdAt: string;
}

const STORAGE_KEY = "kyp:search-history";

function readLocal(limit: number): SearchHistoryEntry[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((e): e is SearchHistoryEntry =>
        typeof e === "object" && e !== null && typeof (e as SearchHistoryEntry).query === "string")
      .slice(0, limit);
  } catch {
    return [];
  }
}

function writeLocal(entries: SearchHistoryEntry[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries.slice(0, 20)));
  } catch {
    // Private mode / quota — history is a convenience, never critical.
  }
}

export function useSearchHistory(limit = 5) {
  const [history, setHistory] = React.useState<SearchHistoryEntry[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchHistory = React.useCallback(async () => {
    if (IS_STATIC_EXPORT) {
      setHistory(readLocal(limit));
      setLoading(false);
      return;
    }
    try {
      const r = await fetch(`/api/search-history?limit=${limit}`);
      if (!r.ok) return;
      const d = await r.json();
      setHistory(d.history || []);
    } catch {
      // Silently fail
    } finally {
      setLoading(false);
    }
  }, [limit]);

  React.useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  const recordSearch = React.useCallback(async (
    query: string,
    result?: { type: string; slug: string; title?: string }
  ) => {
    if (IS_STATIC_EXPORT) {
      const entry: SearchHistoryEntry = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        query,
        resultType: result?.type ?? null,
        resultSlug: result?.slug ?? null,
        resultTitle: result?.title ?? null,
        createdAt: new Date().toISOString(),
      };
      // Newest first, drop older duplicates of the same query.
      const next = [entry, ...readLocal(limit).filter((e) => e.query !== query)];
      writeLocal(next);
      setHistory(next.slice(0, limit));
      return;
    }
    try {
      await fetch("/api/search-history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query,
          resultType: result?.type,
          resultSlug: result?.slug,
          resultTitle: result?.title,
        }),
      });
      // Refresh history after recording
      fetchHistory();
    } catch {
      // Silently fail
    }
  }, [fetchHistory, limit]);

  const clearHistory = React.useCallback(async () => {
    if (IS_STATIC_EXPORT) {
      writeLocal([]);
      setHistory([]);
      return;
    }
    try {
      await fetch("/api/search-history", { method: "DELETE" });
      setHistory([]);
    } catch {
      // Silently fail
    }
  }, []);

  return { history, recordSearch, clearHistory, loading, refetch: fetchHistory };
}
