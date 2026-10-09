"use client";

import * as React from "react";
import { Plus, Minus, Camera } from "lucide-react";
import { useCameraDistanceStore } from "@/lib/anatomy/store/camera-distance-store";

/**
 * ZoomControl — vertical zoom slider + in/out/reset buttons.
 *
 * Fully store-driven: reads distance + the active range from the camera
 * distance store and delegates commands to the CameraRig-registered
 * imperative API. The slider is a native vertical range input, so drag,
 * keyboard arrows, and touch all work with platform semantics. The
 * range remaps automatically when Brain Mode switches the limits.
 */
export function ZoomControl() {
  const distance = useCameraDistanceStore((s) => s.distance);
  const minDistance = useCameraDistanceStore((s) => s.minDistance);
  const maxDistance = useCameraDistanceStore((s) => s.maxDistance);
  const zoomIn = useCameraDistanceStore((s) => s.zoomIn);
  const zoomOut = useCameraDistanceStore((s) => s.zoomOut);
  const zoomReset = useCameraDistanceStore((s) => s.zoomReset);
  const zoomSet = useCameraDistanceStore((s) => s.zoomSet);

  const span = maxDistance - minDistance;
  const sliderValue = span > 0 ? ((maxDistance - distance) / span) * 100 : 50;

  const handleSlider = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseFloat(e.target.value);
      zoomSet(maxDistance - (val / 100) * span);
    },
    [zoomSet, minDistance, maxDistance, span]
  );

  return (
    <div className="pointer-events-auto absolute right-3 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-2">
      <button type="button" onClick={zoomIn} aria-label="Zoom in" title="Zoom in"
        className="glass-panel flex h-9 w-9 items-center justify-center rounded-lg text-[var(--muted-foreground)] transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)] hover:text-[var(--accent-foreground)] hover:bg-[var(--accent)]">
        <Plus size={16} />
      </button>
      <div className="glass-panel relative flex h-40 w-8 flex-col items-center rounded-xl p-1.5">
        <input type="range" min={0} max={100} step={1} value={sliderValue}
          onChange={handleSlider}
          className="accent-[var(--brand)]"
          aria-label="Zoom level" aria-valuenow={Math.round(sliderValue)} aria-valuemin={0} aria-valuemax={100}
          style={{ writingMode: "vertical-lr" as const, direction: "rtl", width: "8rem", height: "auto", transform: "rotate(180deg)", appearance: "slider-vertical" as any, WebkitAppearance: "slider-vertical" as any }}
        />
      </div>
      <button type="button" onClick={zoomOut} aria-label="Zoom out" title="Zoom out"
        className="glass-panel flex h-9 w-9 items-center justify-center rounded-lg text-[var(--muted-foreground)] transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)] hover:text-[var(--accent-foreground)] hover:bg-[var(--accent)]">
        <Minus size={16} />
      </button>
      <button type="button" onClick={zoomReset} aria-label="Reset zoom" title="Reset zoom"
        className="glass-panel flex h-9 w-9 items-center justify-center rounded-lg text-[var(--muted-foreground)] transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)] hover:text-[var(--accent-foreground)] hover:bg-[var(--accent)]">
        <Camera size={14} />
      </button>
    </div>
  );
}
