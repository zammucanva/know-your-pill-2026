"use client";

import * as React from "react";
import {
  getSnapshot,
  getServerSnapshot,
  subscribe,
  type CourseProgress,
  type KypProgressData,
} from "./progress-store";

/**
 * useLocalProgress — hydration-safe subscription to the local
 * learning-progress store.
 *
 * Server snapshot is always `null`, so SSR markup and the first
 * client render agree (both render the "no progress" state).
 * After hydration, useSyncExternalStore picks up the real snapshot
 * and React re-renders — no mismatch, no flash of wrong percentages.
 *
 * Downgrade path: if localStorage is unavailable, the snapshot stays
 * a memory-only object and everything still works within the session.
 */
export function useLocalProgress(): KypProgressData | null {
  return React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
}

/**
 * useCourseProgress — one course's progress record, or null before
 * hydration / when the course has never been visited.
 */
export function useCourseProgress(slug: string): CourseProgress | null {
  const data = useLocalProgress();
  return React.useMemo(() => data?.courses[slug] ?? null, [data, slug]);
}
