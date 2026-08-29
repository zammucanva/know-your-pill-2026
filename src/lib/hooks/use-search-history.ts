"use client";

import * as React from "react";

/**
 * useSearchHistory — React hook for recording and retrieving search history.
 *
 * Provides:
 * - history: recent search entries (newest first)
 * - recordSearch(query, result?): records a search
 * - clearHistory(): clears all history
 * - loading: boolean
 */

export interface SearchHistoryEntry {
  id: string;
  query: string;
  resultType?: string | null;
  resultSlug?: string | null;
  resultTitle?: string | null;
  createdAt: string;
}

export function useSearchHistory(limit = 5) {
  const [history, setHistory] = React.useState<SearchHistoryEntry[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchHistory = React.useCallback(async () => {
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
    result?: { type: string; slug: string; title: string }
  ) => {
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
  }, [fetchHistory]);

  const clearHistory = React.useCallback(async () => {
    try {
      await fetch("/api/search-history", { method: "DELETE" });
      setHistory([]);
    } catch {
      // Silently fail
    }
  }, []);

  return { history, recordSearch, clearHistory, loading, refetch: fetchHistory };
}
