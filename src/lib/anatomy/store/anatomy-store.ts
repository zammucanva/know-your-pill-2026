"use client";

import { create } from "zustand";
import type { SystemId } from "@/lib/anatomy/types";
import { systems } from "@/lib/anatomy/systems";

/**
 * Anatomy store — the single source of truth for:
 *  - Which system is currently selected (drives the structure tree)
 *  - Which structure is currently selected (drives the inspector + 3D highlight)
 *  - Which structure is currently hovered (drives 3D hover highlight)
 *  - Which systems are visible (drives 3D mesh visibility)
 *  - Which system is isolated (every other system hidden)
 */
interface AnatomyState {
  selectedSystemId: SystemId | null;
  selectedStructureId: string | null;
  hoveredStructureId: string | null;
  /** Per-system visibility map. Defaults to each system's defaultVisible. */
  systemVisibility: Record<SystemId, boolean>;
  /** When set, every system except this one is hidden. */
  isolatedSystemId: SystemId | null;
  /** Brain Mode — when true, isolates nervous system and frames the brain */
  brainModeActive: boolean;
  /** Active brain preset */
  activeBrainPreset: string | null;
  /** Saved visibility state before entering Brain Mode (for restoration) */
  savedVisibility: Record<SystemId, boolean> | null;

  selectSystem: (id: SystemId | null) => void;
  selectStructure: (id: string | null) => void;
  setHovered: (id: string | null) => void;
  toggleSystem: (id: SystemId) => void;
  setSystemVisible: (id: SystemId, visible: boolean) => void;
  isolateSystem: (id: SystemId | null) => void;
  showAllSystems: () => void;
  reset: () => void;
  enterBrainMode: () => void;
  exitBrainMode: () => void;
  setBrainPreset: (presetId: string | null) => void;
}

const initialVisibility = (): Record<SystemId, boolean> => {
  const map = {} as Record<SystemId, boolean>;
  for (const s of systems) {
    map[s.id] = s.defaultVisible;
  }
  return map;
};

export const useAnatomyStore = create<AnatomyState>((set) => ({
  selectedSystemId: null,
  selectedStructureId: null,
  hoveredStructureId: null,
  systemVisibility: initialVisibility(),
  isolatedSystemId: null,
  brainModeActive: false,
  activeBrainPreset: null,
  savedVisibility: null,

  selectSystem: (id) =>
    set({ selectedSystemId: id, selectedStructureId: null }),

  selectStructure: (id) => set({ selectedStructureId: id }),

  setHovered: (id) => set({ hoveredStructureId: id }),

  toggleSystem: (id) =>
    set((state) => ({
      systemVisibility: {
        ...state.systemVisibility,
        [id]: !state.systemVisibility[id],
      },
      // Toggling clears isolation
      isolatedSystemId: null,
    })),

  setSystemVisible: (id, visible) =>
    set((state) => ({
      systemVisibility: { ...state.systemVisibility, [id]: visible },
      isolatedSystemId: null,
    })),

  isolateSystem: (id) =>
    set((state) => {
      if (id === null) {
        return { isolatedSystemId: null };
      }
      const newVisibility = {} as Record<SystemId, boolean>;
      for (const s of systems) {
        newVisibility[s.id] = s.id === id;
      }
      return {
        isolatedSystemId: id,
        systemVisibility: newVisibility,
      };
    }),

  showAllSystems: () =>
    set({
      isolatedSystemId: null,
      systemVisibility: initialVisibility(),
    }),

  reset: () =>
    set({
      selectedSystemId: null,
      selectedStructureId: null,
      hoveredStructureId: null,
      systemVisibility: initialVisibility(),
      isolatedSystemId: null,
      brainModeActive: false,
      activeBrainPreset: null,
      savedVisibility: null,
    }),

  enterBrainMode: () =>
    set((state) => {
      // Save current visibility so we can restore it on exit
      const saved = { ...state.systemVisibility };
      // Isolate nervous system
      const newVis = {} as Record<SystemId, boolean>;
      for (const s of systems) {
        newVis[s.id] = s.id === "nervous";
      }
      return {
        brainModeActive: true,
        activeBrainPreset: "whole-brain",
        savedVisibility: saved,
        systemVisibility: newVis,
        isolatedSystemId: null,
        selectedSystemId: "nervous" as SystemId,
      };
    }),

  exitBrainMode: () =>
    set((state) => ({
      brainModeActive: false,
      activeBrainPreset: null,
      systemVisibility: state.savedVisibility ?? initialVisibility(),
      savedVisibility: null,
      selectedSystemId: null,
      selectedStructureId: null,
    })),

  setBrainPreset: (presetId) =>
    set({ activeBrainPreset: presetId }),
}));
