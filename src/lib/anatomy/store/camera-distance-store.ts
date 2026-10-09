"use client";

import { create } from "zustand";

/**
 * Camera zoom store — the single source of truth for camera distance
 * and the typed bridge between the ZoomControl UI (outside the R3F
 * Canvas) and the CameraRig (inside the Canvas).
 *
 * The CameraRig registers an imperative zoom API on mount; the UI calls
 * the store actions. No window globals, fully typed, mount-order safe:
 * actions taken before the rig registers are simply no-ops.
 */

export interface ZoomApi {
  zoomIn: () => void;
  zoomOut: () => void;
  zoomReset: () => void;
  zoomSet: (distance: number) => void;
}

interface CameraDistanceState {
  /** Current camera distance from the OrbitControls target. */
  distance: number;
  /** Active distance bounds (switch with Brain Mode). */
  minDistance: number;
  maxDistance: number;
  /** Imperative implementation registered by CameraRig. */
  api: ZoomApi | null;
  setDistance: (d: number) => void;
  setRange: (min: number, max: number) => void;
  registerApi: (api: ZoomApi | null) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  zoomReset: () => void;
  zoomSet: (distance: number) => void;
}

export const ZOOM_LIMITS = {
  DEFAULT_MIN: 0.5,
  DEFAULT_MAX: 10,
  DEFAULT_DISTANCE: 3.6,
  BRAIN_MIN: 0.1,
  BRAIN_MAX: 5,
  BRAIN_DISTANCE: 0.8,
} as const;

function clamp(d: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, d));
}

export const useCameraDistanceStore = create<CameraDistanceState>((set, get) => ({
  distance: ZOOM_LIMITS.DEFAULT_DISTANCE,
  minDistance: ZOOM_LIMITS.DEFAULT_MIN,
  maxDistance: ZOOM_LIMITS.DEFAULT_MAX,
  api: null,

  setDistance: (d) => {
    const { minDistance, maxDistance } = get();
    set({ distance: clamp(d, minDistance, maxDistance) });
  },

  setRange: (min, max) => set({ minDistance: min, maxDistance: max }),

  registerApi: (api) => set({ api }),

  zoomIn: () => get().api?.zoomIn(),
  zoomOut: () => get().api?.zoomOut(),
  zoomReset: () => get().api?.zoomReset(),
  zoomSet: (distance) => get().api?.zoomSet(distance),
}));
