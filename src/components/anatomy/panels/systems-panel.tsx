"use client";

import * as React from "react";
import {
  Eye, EyeOff, Focus, Layers, Search, ChevronRight,
} from "lucide-react";
import * as Icons from "lucide-react";
import { systems } from "@/lib/anatomy/systems";
import { useAnatomyStore } from "@/lib/anatomy/store/anatomy-store";
import { useAtlasData } from "@/lib/hooks/use-atlas-data";
import type { SystemId } from "@/lib/anatomy/types";
import { cn } from "@/lib/utils";

/**
 * SystemsPanel — left sidebar (KYP 2026 card styling).
 *
 * Three stacked sections:
 *  1. Systems list — each with show/hide eye toggle + isolate focus button
 *  2. Structure search — when a system is selected, shows a searchable list
 *     of all named concepts (from BodyParts3D) in that system
 *  3. Global actions — Show all
 */
export function SystemsPanel() {
  const selectedSystemId = useAnatomyStore((s) => s.selectedSystemId);
  const selectSystem = useAnatomyStore((s) => s.selectSystem);
  const systemVisibility = useAnatomyStore((s) => s.systemVisibility);
  const toggleSystem = useAnatomyStore((s) => s.toggleSystem);
  const isolateSystem = useAnatomyStore((s) => s.isolateSystem);
  const showAllSystems = useAnatomyStore((s) => s.showAllSystems);
  const isolatedSystemId = useAnatomyStore((s) => s.isolatedSystemId);
  const { atlas, loading: atlasLoading } = useAtlasData();

  return (
    <aside className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-soft)]">
      {/* Section: Systems */}
      <div className="border-b border-[var(--border)] p-3.5">
        <div className="mb-2.5 flex items-center justify-between">
          <h2 className="kyp-label flex items-center gap-1.5">
            <Layers size={12} />
            Systems
          </h2>
          <span className="kyp-pill" aria-label={`${systems.length} systems`}>
            {systems.length}
          </span>
        </div>
        <ul className="space-y-0.5">
          {systems.map((system) => {
            const visible = systemVisibility[system.id];
            const isSelected = selectedSystemId === system.id;
            const isIsolated = isolatedSystemId === system.id;
            const Icon = (Icons as any)[system.icon] ?? Icons.Box;
            const partCount = atlas?.parts.filter((p) => p.system === system.id).length ?? 0;
            return (
              <li key={system.id}>
                <div
                  className={cn(
                    "group flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)]",
                    isSelected && "bg-[var(--accent)]"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleSystem(system.id)}
                    aria-label={visible ? `Hide ${system.name} system` : `Show ${system.name} system`}
                    aria-pressed={visible}
                    className="rounded-md p-1 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--secondary)] hover:text-[var(--foreground)]"
                    title={visible ? "Visible, click to hide" : "Hidden, click to show"}
                  >
                    {visible ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>

                  <button
                    type="button"
                    onClick={() => selectSystem(isSelected ? null : (system.id as SystemId))}
                    className="flex min-w-0 flex-1 items-center gap-2 text-left"
                  >
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: system.color }}
                      aria-hidden
                    />
                    <Icon size={14} className="shrink-0 text-[var(--muted-foreground)]" />
                    <span className={cn(
                      "truncate text-[var(--foreground)]",
                      isSelected && "font-medium",
                      !visible && "opacity-50"
                    )}>
                      {system.name}
                    </span>
                    {partCount > 0 && (
                      <span className="ml-auto rounded-full bg-[var(--secondary)] px-1.5 py-0.5 text-[10px] tabular-nums text-[var(--muted-foreground)]">
                        {partCount}
                      </span>
                    )}
                  </button>

                  {visible && (
                    <button
                      type="button"
                      onClick={() => isolateSystem(isIsolated ? null : system.id)}
                      aria-label={`Isolate ${system.name} system`}
                      aria-pressed={isIsolated}
                      title={isIsolated ? "Isolated, click to restore" : "Isolate this system"}
                      className={cn(
                        "rounded-md p-1 transition-all duration-[var(--duration-base)]",
                        isIsolated
                          ? "bg-[var(--brand)] text-[var(--primary-foreground)] shadow-[var(--shadow-soft)]"
                          : "text-[var(--muted-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)]"
                      )}
                    >
                      <Focus size={12} />
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={showAllSystems}
            className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2 py-1.5 text-xs font-medium text-[var(--muted-foreground)] transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
          >
            Show all
          </button>
        </div>
      </div>

      {/* Section: Structure search within selected system */}
      <div className="flex min-h-0 flex-1 flex-col">
        {selectedSystemId ? (
          <StructureSearch systemId={selectedSystemId} />
        ) : (
          <div className="flex flex-1 items-center justify-center p-6 text-center">
            <div>
              <Layers size={20} className="mx-auto mb-2 text-[var(--muted-foreground)]" />
              <p className="text-xs text-[var(--muted-foreground)]">
                Select a system above to browse its structures.
              </p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

/**
 * Structures are rendered incrementally to keep large systems (e.g. arterial
 * with 639 concepts) responsive: this many items render initially and each
 * "Show more" click appends another batch.
 */
const PAGE_SIZE = 150;

/**
 * StructureSearch — searchable list of concepts within a system.
 *
 * Uses the BodyParts3D atlas data to show all named concepts in the
 * selected system. Clicking a concept selects all its element parts
 * in the 3D model.
 *
 * The full filtered list is computed up front (no cap) but only the first
 * `visibleCount` items are rendered; the rest load on demand via the
 * "Show more" button at the bottom of the list.
 */
function StructureSearch({ systemId }: { systemId: SystemId }) {
  const { atlas } = useAtlasData();
  const selectStructure = useAnatomyStore((s) => s.selectStructure);
  const selectedStructureId = useAnatomyStore((s) => s.selectedStructureId);
  const [query, setQuery] = React.useState("");
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);

  const concepts = React.useMemo(() => {
    if (!atlas) return [];
    // Get all parts in this system
    const systemParts = atlas.parts.filter((p) => p.system === systemId);
    // Get unique concept IDs
    const conceptIds = new Set(systemParts.map((p) => p.conceptId));
    // Look up concept details
    return Array.from(conceptIds)
      .map((id) => atlas.concepts.find((c) => c.id === id))
      .filter((c): c is NonNullable<typeof c> => !!c)
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [atlas, systemId]);

  // Full filtered list — no cap. Large systems are paginated at render time
  // (see `visible`) instead of being truncated.
  const filtered = React.useMemo(() => {
    if (!query.trim()) return concepts;
    const q = query.toLowerCase();
    return concepts.filter(
      (c) => c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q)
    );
  }, [concepts, query]);

  // Reset pagination whenever the selected system or the search query changes.
  React.useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [systemId, query]);

  // Render only the first `visibleCount` items; the rest arrive via "Show more".
  const visible = React.useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const remaining = filtered.length - visible.length;

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="border-b border-[var(--border)] px-3.5 py-3">
        <div className="flex items-center justify-between">
          <h2 className="kyp-label">Structures</h2>
          <span className="kyp-pill">{concepts.length}</span>
        </div>
        <div className="relative mt-2">
          <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search structures…"
            className="w-full rounded-lg border border-[var(--input)] bg-[var(--surface)] py-1.5 pl-8 pr-2 text-xs text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] transition-all focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/20"
          />
        </div>
      </div>
      {/* Bounded, independently scrolling list area with the thin clinical
          scrollbar from the kyp-scroll utility (globals.css). */}
      <div className="kyp-scroll min-h-0 max-h-[calc(100vh-16rem)] flex-1 overflow-y-auto p-2">
        <ul className="space-y-0.5">
          {visible.map((concept) => {
            // Use the first element part ID for selection
            const firstPartId = concept.elements[0];
            const isSelected = selectedStructureId === firstPartId;
            return (
              <li key={concept.id}>
                <button
                  type="button"
                  onClick={() => selectStructure(isSelected ? null : firstPartId)}
                  className={cn(
                    "flex w-full items-center gap-1 rounded-lg px-2 py-1 text-left text-sm transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)]",
                    isSelected
                      ? "bg-[var(--brand-soft)] font-medium text-[var(--brand-ink)]"
                      : "text-[var(--foreground)] hover:bg-[var(--secondary)]"
                  )}
                  title={concept.name}
                >
                  <ChevronRight size={10} className="shrink-0 text-[var(--muted-foreground)]" />
                  <span className="truncate">{concept.name}</span>
                  {concept.elements.length > 1 && (
                    <span className="ml-auto text-[10px] tabular-nums text-[var(--muted-foreground)]">
                      {concept.elements.length}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        {filtered.length === 0 && query.trim() && (
          <p className="py-4 text-center text-xs text-[var(--muted-foreground)]">
            No structures match "{query}".
          </p>
        )}
      </div>
      {remaining > 0 && (
        <div className="border-t border-[var(--border)] p-2">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2 py-1.5 text-xs font-medium text-[var(--muted-foreground)] transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
          >
            Show more · {remaining} remaining
          </button>
        </div>
      )}
    </div>
  );
}
