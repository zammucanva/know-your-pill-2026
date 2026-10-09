"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

/**
 * LoadingGate — Suspense fallback while the 3D engine loads.
 * Shown for ~1-2 seconds on first entry to the anatomy explorer.
 */
export function LoadingGate() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Loader2 size={28} className="animate-spin text-[var(--primary)]" />
        <p className="text-sm text-[var(--muted-foreground)]">
          Loading 3D engine…
        </p>
      </div>
    </div>
  );
}
