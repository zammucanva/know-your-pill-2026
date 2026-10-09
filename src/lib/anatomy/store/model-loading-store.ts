"use client";

import { create } from "zustand";

/**
 * Model loading store — communicates loading state from the AnatomyModel
 * (inside the R3F Canvas) to the UI shell (outside the Canvas).
 *
 * The useAnatomyModel hook updates this store as chunks load; the
 * ModelLoadingOverlay component reads from it to show progress and, on
 * failure, a categorised error card with a "Try again" action that re-runs
 * the whole load without a page reload.
 */

/**
 * Error categories surfaced by the loading overlay:
 *  - "anatomy-asset": chunk/atlas downloads failed — even after retries.
 *    Usually a network hiccup, an interrupted transfer or missing
 *    /models/ files.
 *  - "runtime": the data arrived but could not be decoded, parsed or
 *    merged into renderable geometry.
 *  - "webgl": reserved for the Canvas layer (WebGL context / GPU init
 *    failures). Defined here so the overlay can badge it, set there.
 */
export type ModelErrorCategory = "anatomy-asset" | "webgl" | "runtime" | "";

interface ModelLoadingState {
  progress: number; // 0–100
  /** Human-readable failure message; empty while loading / loaded. */
  error: string;
  /** Machine-readable failure kind — drives the overlay's badge and retry UX. */
  errorCategory: ModelErrorCategory;
  loaded: boolean;
  /** True once at least one system is on screen while the rest is still streaming in. */
  partial: boolean;
  /**
   * Bumped by retry(). useAnatomyModel's load effect depends on this value,
   * so every increment re-runs the entire download + geometry pipeline
   * (after aborting any in-flight fetches from the previous attempt).
   */
  retryToken: number;
  setProgress: (n: number) => void;
  setError: (s: string, category?: ModelErrorCategory) => void;
  setLoaded: (b: boolean) => void;
  setPartial: (b: boolean) => void;
  /**
   * Request a full reload: clears the error state, resets progress/loaded
   * and increments retryToken (which re-triggers the loader effect).
   */
  retry: () => void;
}

export const useModelLoadingStore = create<ModelLoadingState>((set) => ({
  progress: 0,
  error: "",
  errorCategory: "",
  loaded: false,
  partial: false,
  retryToken: 0,
  setProgress: (progress) => set({ progress }),
  setError: (error, category = "") => set({ error, errorCategory: category }),
  setLoaded: (loaded) => set({ loaded }),
  setPartial: (partial) => set({ partial }),
  retry: () =>
    set((state) => ({
      retryToken: state.retryToken + 1,
      error: "",
      errorCategory: "",
      loaded: false,
      partial: false,
      progress: 0,
    })),
}));
