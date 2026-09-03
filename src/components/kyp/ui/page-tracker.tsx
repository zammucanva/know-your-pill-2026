"use client";

import * as React from "react";
import { Bookmark } from "lucide-react";
import { useProgressTracking } from "@/lib/hooks/use-progress";
import { useBookmarks } from "@/lib/hooks/use-bookmarks";
import { cn } from "@/lib/utils";

/**
 * PageTracker — invisible client component that:
 * 1. Records a page visit to the progress API (fire-and-forget)
 * 2. Renders a bookmark toggle button
 *
 * Drop this at the top of any drug/substance/disease page body.
 * It handles its own auth state — if the user is not logged in, both
 * features silently no-op (the bookmark button still renders but
 * clicking it does nothing visible).
 */

interface PageTrackerProps {
  type: "drug" | "substance" | "disease";
  slug: string;
  title: string;
  /** Position the bookmark button — "top-right" (default) or "inline" */
  variant?: "floating" | "inline";
}

export function PageTracker({ type, slug, title, variant = "inline" }: PageTrackerProps) {
  useProgressTracking({ type, slug, title });
  const { bookmarked, toggle, loading } = useBookmarks({ type, slug, title });

  if (variant === "floating") {
    return (
      <button
        type="button"
        onClick={toggle}
        disabled={loading}
        aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
        aria-pressed={bookmarked}
        className={cn(
          "fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border transition-all",
          bookmarked
            ? "border-brand bg-brand text-primary-foreground"
            : "border-border bg-card/95 text-muted-foreground hover:border-brand/40 hover:text-brand",
          loading && "opacity-50"
        )}
      >
        <Bookmark
          className="h-4 w-4"
          fill={bookmarked ? "currentColor" : "none"}
          strokeWidth={2}
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={loading}
      aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
      aria-pressed={bookmarked}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-all",
        bookmarked
          ? "border-brand bg-brand-soft/40 text-brand"
          : "border-border text-muted-foreground hover:border-brand/30 hover:text-foreground",
        loading && "opacity-50"
      )}
    >
      <Bookmark
        className="h-3 w-3"
        fill={bookmarked ? "currentColor" : "none"}
        strokeWidth={2}
      />
      {bookmarked ? "Saved" : "Save"}
    </button>
  );
}
