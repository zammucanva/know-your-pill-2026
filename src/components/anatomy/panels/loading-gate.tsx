"use client";

import * as React from "react";
import { KypLoader } from "@/components/kyp/ui/kyp-loader";

/**
 * LoadingGate: Suspense fallback while the 3D engine loads.
 * Uses the shared KYP loader so every blocking load looks the same.
 */
export function LoadingGate() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <KypLoader
        variant="section"
        title="Loading the 3D engine…"
        subtitle="Preparing the viewer on your device."
        delayMs={200}
      />
    </div>
  );
}
