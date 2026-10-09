"use client";

import {
  RotateCcw, Maximize2, ArrowLeftRight,
} from "lucide-react";
import { useCameraStore, type ViewPreset, type ExplodePreset } from "@/lib/anatomy/store/camera-store";
import { useAnatomyStore } from "@/lib/anatomy/store/anatomy-store";
import { cn } from "@/lib/utils";

const VIEW_PRESETS: { id: ViewPreset; label: string }[] = [
  { id: "anterior", label: "Anterior" },
  { id: "posterior", label: "Posterior" },
  { id: "left", label: "Left" },
  { id: "right", label: "Right" },
  { id: "superior", label: "Superior" },
  { id: "inferior", label: "Inferior" },
];

const EXPLODE_PRESETS: { id: ExplodePreset; label: string }[] = [
  { id: "normal", label: "Normal" },
  { id: "systems", label: "Systems" },
  { id: "internal", label: "Internal" },
  { id: "full", label: "Full" },
];

const CHIP_BASE =
  "rounded-lg px-2 py-1 text-xs font-medium transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)]";
const CHIP_ACTIVE =
  "bg-[var(--brand)] text-[var(--primary-foreground)] shadow-[var(--shadow-soft)]";
const CHIP_IDLE =
  "text-[var(--muted-foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]";

export function ViewportToolbar() {
  const viewPreset = useCameraStore((s) => s.viewPreset);
  const setViewPreset = useCameraStore((s) => s.setViewPreset);
  const reset = useCameraStore((s) => s.reset);
  const explodeLevel = useCameraStore((s) => s.explodeLevel);
  const setExplodeLevel = useCameraStore((s) => s.setExplodeLevel);
  const explodePreset = useCameraStore((s) => s.explodePreset);
  const setExplodePreset = useCameraStore((s) => s.setExplodePreset);
  const selectedStructureId = useAnatomyStore((s) => s.selectedStructureId);
  const setFocusTarget = useCameraStore((s) => s.setFocusTarget);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-2 sm:p-3">
      <div className="pointer-events-auto flex flex-wrap items-center justify-between gap-2">
        <div className="glass-panel flex max-w-full flex-wrap items-center gap-1 rounded-xl p-1">
          {VIEW_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => setViewPreset(preset.id)}
              aria-pressed={viewPreset === preset.id}
              title={preset.label + " view"}
              className={cn(
                CHIP_BASE,
                viewPreset === preset.id ? CHIP_ACTIVE : CHIP_IDLE
              )}
            >
              {preset.label}
            </button>
          ))}
        </div>
        <div className="glass-panel flex items-center gap-1 rounded-xl p-1">
          {selectedStructureId && (
            <button
              type="button"
              onClick={() => setFocusTarget(selectedStructureId)}
              aria-label="Focus on selected structure"
              title="Focus on selected structure"
              className="rounded-lg p-1.5 text-[var(--muted-foreground)] transition-all duration-[var(--duration-base)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
            >
              <Maximize2 size={14} />
            </button>
          )}
          <button
            type="button"
            onClick={reset}
            aria-label="Reset camera"
            title="Reset camera"
            className="rounded-lg p-1.5 text-[var(--muted-foreground)] transition-all duration-[var(--duration-base)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>
      <div className="pointer-events-auto flex justify-center px-1">
        <div className="glass-panel flex max-w-full flex-wrap items-center justify-center gap-2 rounded-xl px-2 py-1.5 sm:gap-3 sm:px-3 sm:py-2">
          <ArrowLeftRight size={14} className="hidden text-[var(--muted-foreground)] sm:block" />
          <div className="flex items-center gap-1">
            {EXPLODE_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => setExplodePreset(preset.id)}
                aria-pressed={explodePreset === preset.id}
                title={preset.label + " explode"}
                className={cn(
                  CHIP_BASE,
                  explodePreset === preset.id ? CHIP_ACTIVE : CHIP_IDLE
                )}
              >
                {preset.label}
              </button>
            ))}
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={explodeLevel}
            onChange={(e) => setExplodeLevel(parseFloat(e.target.value))}
            aria-label="Explode level"
            className="h-1 w-20 cursor-pointer appearance-none rounded-full bg-[var(--secondary)] accent-[var(--brand)] sm:w-32"
          />
          <span className="hidden w-10 text-right text-xs tabular-nums text-[var(--muted-foreground)] sm:inline">
            {Math.round(explodeLevel * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}
