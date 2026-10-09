"use client";

import * as React from "react";
import { Brain, X, ChevronRight, Search } from "lucide-react";
import { useAnatomyStore } from "@/lib/anatomy/store/anatomy-store";
import { useCameraStore } from "@/lib/anatomy/store/camera-store";
import { useAtlasData } from "@/lib/hooks/use-atlas-data";
import {
  brainPresets,
  brainStructureGroups,
  ALL_BRAIN_CONCEPT_IDS,
  type BrainStructureGroup,
} from "@/lib/anatomy/brain-registry";
import { getNormalizationOverride } from "@/lib/anatomy/kyp-normalization";
import { cn } from "@/lib/utils";
import type { BP3DConcept } from "@/lib/hooks/use-anatomy-model";

/**
 * BrainModePanel — shown when Brain Mode is active (KYP 2026 card styling
 * with the neural-violet accent, the neurobiology identity color).
 *
 * Renders three sections:
 *  1. Brain presets (Whole Brain, Cortex, Deep Brain, Brainstem,
 *     Cerebellum, Ventricular System)
 *  2. A search box that searches across all brain concepts (including
 *     normalized ventricular structures)
 *  3. The brain structure hierarchy, filtered to only groups that have
 *     real concepts in the atlas. Empty groups are not rendered.
 *
 * Selecting a structure:
 *  - selects it in the anatomy store (drives 3D highlight + inspector)
 *  - sets the camera focus target (drives camera animation)
 */

interface ResolvedBrainGroup {
  group: BrainStructureGroup;
  concepts: BP3DConcept[];
}

export function BrainModePanel() {
  const brainModeActive = useAnatomyStore((s) => s.brainModeActive);
  const exitBrainMode = useAnatomyStore((s) => s.exitBrainMode);
  const activeBrainPreset = useAnatomyStore((s) => s.activeBrainPreset);
  const setBrainPreset = useAnatomyStore((s) => s.setBrainPreset);
  const selectStructure = useAnatomyStore((s) => s.selectStructure);
  const setFocusTarget = useCameraStore((s) => s.setFocusTarget);
  const { atlas } = useAtlasData();
  const [query, setQuery] = React.useState("");

  // Build a concept-by-id map and a per-group list of resolved concepts.
  // Groups with zero resolved concepts are dropped (we never show empty
  // categories just because they are medically expected).
  const { conceptById, resolvedGroups } = React.useMemo<{
    conceptById: Map<string, BP3DConcept>;
    resolvedGroups: ResolvedBrainGroup[];
  }>(() => {
    if (!atlas) {
      return { conceptById: new Map(), resolvedGroups: [] };
    }
    const m = new Map<string, BP3DConcept>();
    for (const c of atlas.concepts) m.set(c.id, c);

    const groups: ResolvedBrainGroup[] = [];
    for (const g of brainStructureGroups) {
      const concepts = g.conceptIds
        .map((id) => m.get(id))
        .filter((c): c is BP3DConcept => !!c);
      // Only include groups with at least one real atlas concept.
      if (concepts.length > 0) {
        groups.push({ group: g, concepts });
      }
    }
    return { conceptById: m, resolvedGroups: groups };
  }, [atlas]);

  // Resolve the concepts for the currently-active preset. Used to
  // visually emphasize which preset is showing.
  const activePreset = brainPresets.find((p) => p.id === activeBrainPreset);
  const activeGroupIds = new Set(activePreset?.groupIds ?? []);

  // Build a flat list of all resolved brain concepts for search.
  // MUST be called unconditionally (Rules of Hooks) — even when Brain Mode
  // is inactive — so the hook order doesn't change between renders.
  const allResolvedConcepts: BP3DConcept[] = React.useMemo(() => {
    const seen = new Set<string>();
    const out: BP3DConcept[] = [];
    for (const { concepts } of resolvedGroups) {
      for (const c of concepts) {
        if (!seen.has(c.id)) {
          seen.add(c.id);
          out.push(c);
        }
      }
    }
    return out.sort((a, b) => a.name.localeCompare(b.name));
  }, [resolvedGroups]);

  // Search filter — match name OR id, with exact/prefix/substring ranking.
  const filteredConcepts = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allResolvedConcepts
      .filter((c) => {
        const name = c.name.toLowerCase();
        // Use normalized name for ventricular structures so that "lateral
        // ventricle (brain)" matches the query "ventricle".
        const norm = getNormalizationOverride(c.id);
        const displayName = (norm?.kypName ?? c.name).toLowerCase();
        return name.includes(q) || displayName.includes(q) || c.id.toLowerCase().includes(q);
      })
      .slice(0, 50);
  }, [allResolvedConcepts, query]);

  // Early return — must come AFTER all hooks (Rules of Hooks).
  if (!brainModeActive) return null;

  const isSearching = query.trim().length > 0;

  return (
    <div className="kyp-scroll absolute left-3 top-1/2 z-10 flex max-h-[78vh] w-72 -translate-y-1/2 flex-col overflow-y-auto rounded-2xl border border-[var(--border)] bg-[var(--card)]/95 shadow-[var(--shadow-lift)] backdrop-blur-xl">
      {/* Header */}
      <div className="sticky top-0 flex items-center justify-between border-b border-[var(--border)] bg-[var(--card)]/95 px-3 py-2.5 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <Brain size={16} className="text-[var(--neural)]" />
          <span className="text-sm font-semibold text-[var(--foreground)]">Brain Mode</span>
        </div>
        <button
          type="button"
          onClick={exitBrainMode}
          aria-label="Exit Brain Mode"
          className="rounded-md p-1 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--secondary)] hover:text-[var(--foreground)]"
        >
          <X size={14} />
        </button>
      </div>

      {/* Presets */}
      <div className="border-b border-[var(--border)] p-2.5">
        <p className="kyp-label mb-1.5">Views</p>
        <div className="flex flex-wrap gap-1">
          {brainPresets.map((preset) => {
            // Only enable presets whose groups all resolve to real atlas concepts.
            const hasAllGroups = preset.groupIds.every((gid) =>
              resolvedGroups.some((rg) => rg.group.id === gid)
            );
            const hasAnyGroup = preset.groupIds.some((gid) =>
              resolvedGroups.some((rg) => rg.group.id === gid)
            );
            if (!hasAnyGroup) return null;
            const enabled = hasAllGroups;
            return (
              <button
                key={preset.id}
                type="button"
                disabled={!enabled}
                onClick={() => setBrainPreset(preset.id)}
                title={enabled ? preset.description : "Some groups have no real structures"}
                className={cn(
                  "rounded-lg px-2 py-1 text-xs font-medium transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)]",
                  activeBrainPreset === preset.id
                    ? "bg-[var(--brand)] text-[var(--primary-foreground)] shadow-[var(--shadow-soft)]"
                    : enabled
                      ? "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted-foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
                      : "border border-[var(--border)] text-[var(--muted-foreground)]/40 cursor-not-allowed"
                )}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Search */}
      <div className="border-b border-[var(--border)] p-2.5">
        <div className="relative">
          <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search brain structures…"
            className="w-full rounded-lg border border-[var(--input)] bg-[var(--surface)] py-1.5 pl-8 pr-2 text-xs text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] transition-all focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/20"
          />
        </div>
      </div>

      {/* Body — either search results or hierarchy */}
      <div className="min-h-0 flex-1 p-2.5">
        {isSearching ? (
          <div>
            <p className="kyp-label mb-1.5">
              Results ({filteredConcepts.length})
            </p>
            {filteredConcepts.length === 0 ? (
              <p className="px-2 py-4 text-center text-xs text-[var(--muted-foreground)]">
                No matching brain structures.
              </p>
            ) : (
              <ul className="space-y-0.5">
                {filteredConcepts.map((concept) => (
                  <BrainConceptRow
                    key={concept.id}
                    concept={concept}
                    conceptById={conceptById}
                    onSelect={(partId) => {
                      selectStructure(partId);
                      setFocusTarget(partId);
                    }}
                  />
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div>
            <p className="kyp-label mb-1.5">Structures</p>
            {resolvedGroups.map(({ group, concepts }) => (
              <div
                key={group.id}
                className={cn(
                  "mb-2 rounded-xl p-1.5 transition-all duration-[var(--duration-base)]",
                  activePreset && activeGroupIds.has(group.id)
                    ? "bg-[var(--neural)]/10 ring-1 ring-[var(--neural)]/25"
                    : ""
                )}
              >
                <p className="mb-0.5 text-xs font-semibold text-[var(--foreground)]">{group.label}</p>
                <p className="mb-1 text-[10px] text-[var(--muted-foreground)]">{group.description}</p>
                <ul className="space-y-0.5">
                  {concepts.map((concept) => (
                    <BrainConceptRow
                      key={concept.id}
                      concept={concept}
                      conceptById={conceptById}
                      onSelect={(partId) => {
                        selectStructure(partId);
                        setFocusTarget(partId);
                      }}
                    />
                  ))}
                </ul>
              </div>
            ))}
            <p className="mt-3 px-2 py-2 text-[10px] italic text-[var(--muted-foreground)]">
              {allResolvedConcepts.length} brain structures derived from BodyParts3D.
              Ventricular structures normalized via the KYP anatomy layer.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * A single brain concept row. Selecting it:
 *  - selects the first element part in the anatomy store (3D highlight)
 *  - focuses the camera on that part
 *
 * For normalized ventricular structures (lateral ventricle etc.), the
 * underlying part lives in the cardiac mesh. The selection still works
 * because the partId is the actual BodyParts3D part ID — the shader
 * visibility mask has already made that specific part visible via the
 * Brain Mode rendering logic in anatomy-model.tsx.
 */
function BrainConceptRow({
  concept,
  conceptById,
  onSelect,
}: {
  concept: BP3DConcept;
  conceptById: Map<string, BP3DConcept>;
  onSelect: (partId: string) => void;
}) {
  const selectedStructureId = useAnatomyStore((s) => s.selectedStructureId);
  const firstPartId = concept.elements[0] ?? "";
  const isSelected = selectedStructureId === firstPartId;

  // Use the KYP-normalized display name if one exists (for ventricles)
  const override = getNormalizationOverride(concept.id);
  const displayName = override?.kypName ?? concept.name;

  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(firstPartId)}
        className={cn(
          "flex w-full items-center gap-1 rounded-lg px-2 py-1 text-left text-xs transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)]",
          isSelected
            ? "bg-[var(--neural)]/15 font-medium text-[var(--neural)]"
            : "text-[var(--foreground)] hover:bg-[var(--secondary)]"
        )}
        title={`${displayName} (${concept.id})`}
      >
        <ChevronRight size={8} className="shrink-0 text-[var(--muted-foreground)]" />
        <span className="truncate">{displayName}</span>
        {concept.elements.length > 1 && (
          <span className="ml-auto text-[10px] tabular-nums text-[var(--muted-foreground)]">
            {concept.elements.length}
          </span>
        )}
      </button>
    </li>
  );
}

/**
 * BrainModeToggle — header control that enters AND exits Brain Mode.
 *
 * Inactive: solid brand pill ("Brain Mode"). Active: solid neural-violet
 * pill ("Exit Brain Mode") — the violet marks the neurobiology context
 * everywhere Brain Mode is reflected in the UI.
 */
export function BrainModeToggle() {
  const brainModeActive = useAnatomyStore((s) => s.brainModeActive);
  const enterBrainMode = useAnatomyStore((s) => s.enterBrainMode);
  const exitBrainMode = useAnatomyStore((s) => s.exitBrainMode);

  return (
    <button
      type="button"
      onClick={brainModeActive ? exitBrainMode : enterBrainMode}
      aria-pressed={brainModeActive}
      className={cn(
        "inline-flex min-h-[36px] items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
        brainModeActive
          ? "bg-[var(--neural)] text-white shadow-[var(--shadow-soft)] hover:opacity-90"
          : "bg-[var(--brand)] text-[var(--primary-foreground)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)]"
      )}
    >
      <Brain size={14} />
      {brainModeActive ? "Exit Brain Mode" : "Brain Mode"}
    </button>
  );
}

// Re-export ALL_BRAIN_CONCEPT_IDS so other modules (e.g. global search)
// can resolve which concepts are brain structures.
export { ALL_BRAIN_CONCEPT_IDS };
