"use client";

import * as React from "react";

/**
 * useProgressTracking — fire-and-forget hook that records a page visit
 * to the progress API when a user lands on a drug/substance/disease page.
 *
 * Does not return any state — it's a side effect. Silently fails if the
 * user is not logged in or the API is unreachable.
 *
 * Usage:
 *   useProgressTracking({ type: "drug", slug: "sertraline", title: "Sertraline" });
 */

interface UseProgressTrackingParams {
  type: "drug" | "substance" | "disease";
  slug: string;
  title: string;
}

export function useProgressTracking({ type, slug, title }: UseProgressTrackingParams) {
  React.useEffect(() => {
    // Fire and forget — don't await, don't block rendering
    fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, slug, title }),
    }).catch(() => {
      // Silently fail — progress tracking is non-critical
    });
  }, [type, slug, title]);
}
