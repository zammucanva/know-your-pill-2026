"use client";

import { create } from "zustand";

export type ViewPreset =
  | "anterior"
  | "posterior"
  | "left"
  | "right"
  | "superior"
  | "inferior";

export type ExplodePreset = "normal" | "systems" | "internal" | "full";

interface CameraState {
  viewPreset: ViewPreset;
  explodeLevel: number;
  explodePreset: ExplodePreset;
  focusTarget: string | null;
  resetToken: number;

  setViewPreset: (v: ViewPreset) => void;
  setExplodeLevel: (n: number) => void;
  setExplodePreset: (p: ExplodePreset) => void;
  setFocusTarget: (id: string | null) => void;
  reset: () => void;
}

const PRESET_LEVELS: Record<ExplodePreset, number> = {
  normal: 0,
  systems: 0.5,
  internal: 0.75,
  full: 1,
};

export const useCameraStore = create<CameraState>((set) => ({
  viewPreset: "anterior",
  explodeLevel: 0,
  explodePreset: "normal",
  focusTarget: null,
  resetToken: 0,

  setViewPreset: (viewPreset) => set({ viewPreset }),
  setExplodeLevel: (explodeLevel) => {
    const clamped = Math.max(0, Math.min(1, explodeLevel));
    let preset: ExplodePreset = "normal";
    if (clamped >= 0.95) preset = "full";
    else if (clamped >= 0.65) preset = "internal";
    else if (clamped >= 0.3) preset = "systems";
    set({ explodeLevel: clamped, explodePreset: preset });
  },
  setExplodePreset: (explodePreset) =>
    set({ explodePreset, explodeLevel: PRESET_LEVELS[explodePreset] }),
  setFocusTarget: (focusTarget) => set({ focusTarget }),
  reset: () => set((s) => ({
    viewPreset: "anterior", explodeLevel: 0, explodePreset: "normal",
    focusTarget: null, resetToken: s.resetToken + 1,
  })),
}));
