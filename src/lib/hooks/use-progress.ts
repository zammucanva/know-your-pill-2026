"use client";

import * as React from "react";
import { IS_STATIC_EXPORT } from "@/lib/kyp/static-export";
import { useDashboardSettings } from "@/lib/kyp/dashboard/settings-store";

/**
 * useProgressTracking — fire-and-forget hook that records a page visit
 * to the progress API when a user lands on a drug/substance/disease page.
 *
 * Does not return any state — it's a side effect. Silently fails if the
 * user is not logged in or the API is unreachable.
 *
 * Privacy gate: when "Save browsing history" is switched off in the
 * dashboard settings (kyp:settings:v1), nothing is recorded. The store
 * is read imperatively so this hook adds no re-renders to every page.
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
    // Static export: no server to record to (learner-facing progress
    // persists locally via src/lib/kyp/progress) — skip the call that
    // could only 404 [audit B2].
    if (IS_STATIC_EXPORT) return;
    // Privacy: browsing-history recording can be switched off.
    if (!useDashboardSettings.getState().saveHistory) return;
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
