"use client";

import * as React from "react";

/**
 * Device capability tiers for the 3D viewport.
 *
 *  low    — phones (coarse pointer or narrow viewport): reduced DPR,
 *           bottom-sheet panels, touch-first interactions
 *  medium — small tablets / large phones in landscape
 *  high   — desktop-class: full DPR range, three-column layout
 */
export type DeviceTier = "low" | "medium" | "high";

function computeTier(): DeviceTier {
  if (typeof window === "undefined") return "high";
  const width = window.innerWidth;
  const coarse = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
  const lowCores = (navigator.hardwareConcurrency ?? 8) <= 4;

  if (width < 768 || (coarse && width < 1024)) return "low";
  if (width < 1024 || (coarse && lowCores)) return "medium";
  return "high";
}

/**
 * Reactive device tier. Re-evaluates on viewport resize and pointer
 * changes; stable across renders otherwise.
 */
export function useDeviceTier(): DeviceTier {
  const [tier, setTier] = React.useState<DeviceTier>("high");

  React.useEffect(() => {
    const update = () => setTier(computeTier());
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return tier;
}

/** True when the three-column desktop layout applies. */
export function useIsDesktopLayout(): boolean {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}
