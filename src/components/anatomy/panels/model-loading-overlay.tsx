"use client";

import { RotateCw } from "lucide-react";
import { KypLoader } from "@/components/kyp/ui/kyp-loader";
import {
  useModelLoadingStore,
  type ModelErrorCategory,
} from "@/lib/anatomy/store/model-loading-store";

/** Short labels shown in the error card's category badge. */
const CATEGORY_LABELS: Record<ModelErrorCategory, string> = {
  "anatomy-asset": "Asset",
  runtime: "Runtime",
  webgl: "WebGL",
  "": "Error",
};

/** Badge tinting per category — KYP semantic tints, readable in both themes. */
const CATEGORY_BADGE_STYLES: Record<ModelErrorCategory, string> = {
  "anatomy-asset": "border-[var(--warning)]/40 bg-[var(--warning-soft)] text-[var(--warning-ink)]",
  runtime: "border-[var(--emergency)]/40 bg-[var(--emergency-soft)] text-[var(--emergency)]",
  webgl: "border-[var(--brand)]/40 bg-[var(--brand-soft)] text-[var(--brand-ink)]",
  "": "border-[var(--emergency)]/40 bg-[var(--emergency-soft)] text-[var(--emergency)]",
};

/**
 * ModelLoadingOverlay — full-viewport loading/error veil for the 3D anatomy
 * model, rendered above the canvas (absolute inset-0 inside the viewport
 * <main>).
 *
 * Reads the model-loading store directly:
 *  - while loading: progress bar + "Loading anatomy… N%" + attribution
 *  - on failure: categorised error card with a "Try again" button that
 *    calls retry() — the store bumps its retryToken, useAnatomyModel
 *    re-runs the whole load, and this overlay flips back to the progress
 *    bar. No page reload, no remount needed.
 */
export function ModelLoadingOverlay() {
  const progress = useModelLoadingStore((s) => s.progress);
  const error = useModelLoadingStore((s) => s.error);
  const errorCategory = useModelLoadingStore((s) => s.errorCategory);
  const loaded = useModelLoadingStore((s) => s.loaded);
  const retry = useModelLoadingStore((s) => s.retry);

  if (loaded) return null;

  if (error) {
    return (
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-[var(--background)]/80 backdrop-blur-sm">
        <div
          role="alert"
          className="w-80 max-w-[calc(100%-2rem)] rounded-2xl border border-[var(--emergency)]/30 bg-[var(--card)] px-5 py-4 text-center shadow-[var(--shadow-emergency)]"
        >
          <span
            className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${CATEGORY_BADGE_STYLES[errorCategory]}`}
          >
            {CATEGORY_LABELS[errorCategory]}
          </span>
          <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">Failed to load anatomy</p>
          <p className="mt-1 text-xs text-[var(--muted-foreground)]">{error}</p>
          <button
            type="button"
            onClick={retry}
            aria-label="Try loading the anatomy model again"
            className="mt-4 inline-flex min-h-[36px] items-center justify-center gap-1.5 rounded-lg bg-[var(--brand)] px-4 py-2 text-xs font-semibold text-[var(--primary-foreground)] shadow-[var(--shadow-soft)] transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)] hover:shadow-[var(--shadow-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
          >
            <RotateCw size={13} aria-hidden="true" />
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-[var(--background)]/80 backdrop-blur-md">
      <KypLoader
        variant="section"
        title="Preparing 3D Anatomy…"
        subtitle="Loading the anatomy model on your device."
        progress={progress}
        greeting={false}
      >
        <p className="text-[11px] text-[var(--muted-foreground)]/70">
          2,234 structures · BodyParts3D CC BY 4.0
        </p>
      </KypLoader>
    </div>
  );
}

export default ModelLoadingOverlay;
