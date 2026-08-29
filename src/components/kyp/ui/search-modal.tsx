"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  CornerDownLeft,
  Pill,
  Layers,
  Brain,
  Route,
  Zap,
  Activity,
  Stethoscope,
  BookOpen,
  ArrowRight,
  FlaskConical,
  HeartPulse,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { searchIndex, searchTypeLabels } from "@/lib/kyp/data";
import type { SearchableItem } from "@/lib/kyp/data";
import { useSearchHistory } from "@/lib/hooks/use-search-history";
import { cn } from "@/lib/utils";
import { Clock, Trash2 } from "lucide-react";

/**
 * SearchModal — Spotlight-style universal search.
 *
 * Searches across: medications, substances, diseases, drug classes,
 * neurotransmitters, side effects, brain regions, pathways, patient guides.
 *
 * Ranking:
 *   1. Exact title match
 *   2. Title starts-with match
 *   3. Title includes match
 *   4. Keyword exact match
 *   5. Keyword includes match
 *   6. Description includes match
 *
 * Keyboard:
 *   ⌘K / Ctrl+K → open
 *   ↑↓          → navigate
 *   Enter       → go
 *   Esc         → close
 */
interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const typeIcon: Record<SearchableItem["type"], React.ElementType> = {
  drug: Pill,
  substance: FlaskConical,
  disease: HeartPulse,
  class: Layers,
  neurotransmitter: Zap,
  "side-effect": Activity,
  "brain-region": Brain,
  pathway: Route,
  clinical: Stethoscope,
  "patient-guide": BookOpen,
};

const typeColor: Record<SearchableItem["type"], string> = {
  drug: "text-brand",
  substance: "text-[var(--class-opioid)]",
  disease: "text-emergency",
  class: "text-brand",
  neurotransmitter: "text-neural",
  "side-effect": "text-warning",
  "brain-region": "text-neural",
  pathway: "text-brand",
  clinical: "text-emergency",
  "patient-guide": "text-success",
};

/** Rank a search result. Lower = better. 0 = no match. */
function rankResult(item: SearchableItem, q: string): number {
  const title = item.title.toLowerCase();
  const keywords = item.keywords.map((k) => k.toLowerCase());

  // 1. Exact title match
  if (title === q) return 1;
  // 2. Title starts with query
  if (title.startsWith(q)) return 2;
  // 3. Title includes query
  if (title.includes(q)) return 3;
  // 4. Exact keyword match
  if (keywords.some((k) => k === q)) return 4;
  // 5. Keyword starts with query
  if (keywords.some((k) => k.startsWith(q))) return 5;
  // 6. Keyword includes query
  if (keywords.some((k) => k.includes(q))) return 6;
  // 7. Description includes query
  if (item.description.toLowerCase().includes(q)) return 7;
  return 0;
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);
  const { history, recordSearch, clearHistory } = useSearchHistory(5);

  // Filter + rank results
  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      // Show curated top results when query is empty
      return searchIndex.slice(0, 8);
    }
    return searchIndex
      .map((item) => ({ item, rank: rankResult(item, q) }))
      .filter((r) => r.rank > 0)
      .sort((a, b) => a.rank - b.rank)
      .slice(0, 12)
      .map((r) => r.item);
  }, [query]);

  // Reset active index when results change
  React.useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Focus input on open
  React.useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Scroll active item into view
  React.useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${activeIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const go = (item: SearchableItem) => {
    onOpenChange(false);
    // Record search history with the clicked result
    if (query.trim()) {
      recordSearch(query.trim(), {
        type: item.type,
        slug: item.id,
        title: item.title,
      });
    }
    if (item.href.startsWith("#")) {
      // In-page anchor
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
    } else if (item.href.startsWith("/")) {
      // Internal route — use Next.js router for client-side navigation
      router.push(item.href);
    }
  };

  // Navigate to a recent search entry
  const goToHistory = (entry: { query: string; resultType?: string | null; resultSlug?: string | null; resultTitle?: string | null }) => {
    if (entry.resultSlug && entry.resultType) {
      // Find the matching search index item to get its href
      const item = searchIndex.find((s) => s.id === entry.resultSlug);
      if (item) {
        go(item);
        return;
      }
    }
    // Otherwise just fill the search box with the query
    setQuery(entry.query);
    inputRef.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = results[activeIndex];
      if (item) go(item);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl gap-0 p-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>Universal search</DialogTitle>
          <DialogDescription>
            Search across medications, substances, diseases, drug classes, neurotransmitters, side effects, brain regions, pathways, and patient guides.
          </DialogDescription>
        </DialogHeader>

        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-border/70 px-4">
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            type="text"
            placeholder="Search medications, substances, diseases, neurotransmitters…"
            className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
            aria-label="Search KYP"
          />
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
            aria-label="Close search"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results */}
        <div
          ref={listRef}
          className="max-h-[60vh] overflow-y-auto kyp-scroll p-2"
        >
          {results.length === 0 ? (
            <div className="px-4 py-12 text-center">
              <p className="text-sm font-medium text-foreground">No results for &ldquo;{query}&rdquo;</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Try a medication name, substance, disease, or neurotransmitter.
              </p>
            </div>
          ) : (
            <>
              {/* Recent searches — shown when query is empty and user has history */}
              {!query && history.length > 0 && (
                <div className="mb-2">
                  <div className="flex items-center justify-between px-3 py-2">
                    <p className="text-overline text-muted-foreground flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      Recent
                    </p>
                    <button
                      type="button"
                      onClick={clearHistory}
                      className="flex items-center gap-1 text-[0.65rem] text-muted-foreground/50 hover:text-muted-foreground"
                    >
                      <Trash2 className="h-2.5 w-2.5" />
                      Clear
                    </button>
                  </div>
                  {history.map((entry, idx) => (
                    <button
                      key={entry.id}
                      type="button"
                      onClick={() => goToHistory(entry)}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-accent/60"
                    >
                      <Clock className="h-3 w-3 shrink-0 text-muted-foreground/40" />
                      <span className="truncate">{entry.query}</span>
                      {entry.resultTitle && (
                        <span className="ml-auto truncate text-[0.65rem] text-muted-foreground/50">
                          → {entry.resultTitle}
                        </span>
                      )}
                    </button>
                  ))}
                  <div className="mx-3 my-2 border-t border-border/40" />
                </div>
              )}

              {!query && (
                <p className="px-3 py-2 text-overline text-muted-foreground">
                  Suggested searches
                </p>
              )}

              {query ? (
                /* Grouped results — by content type */
                <GroupedResults
                  results={results}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  onGo={go}
                />
              ) : (
                /* Flat list for empty-query suggestions */
                results.map((item, idx) => {
                  const Icon = typeIcon[item.type];
                  return (
                    <button
                      key={item.id}
                      type="button"
                      data-idx={idx}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => go(item)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                        idx === activeIndex ? "bg-accent" : "hover:bg-accent/60"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background/60",
                          typeColor[item.type]
                        )}
                      >
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="truncate text-sm font-medium text-foreground">
                            {item.title}
                          </p>
                          <span className="shrink-0 rounded-full bg-muted px-1.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-muted-foreground">
                            {searchTypeLabels[item.type]}
                          </span>
                        </div>
                        <p className="mt-0.5 truncate text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      {idx === activeIndex && (
                        <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      )}
                    </button>
                  );
                })
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-2 border-t border-border/70 bg-muted/30 px-4 py-2.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[0.65rem]">↑</kbd>
              <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[0.65rem]">↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[0.65rem]">↵</kbd>
              open
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[0.65rem]">esc</kbd>
              close
            </span>
          </div>
          <span className="flex items-center gap-1">
            <ArrowRight className="h-3 w-3" />
            {searchIndex.length} entries indexed
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/**
 * GroupedResults — renders search results grouped by content type.
 *
 * Groups appear in order of relevance: Medications, Diseases, Substances,
 * Neuroscience (brain-region, pathway, neurotransmitter), Side Effects,
 * Classes, Clinical, Patient Guides.
 *
 * Within each group, results stay in their ranked order. Keyboard
 * navigation still works — the flat `activeIndex` maps to the position
 * in the full `results` array.
 */
function GroupedResults({
  results,
  activeIndex,
  setActiveIndex,
  onGo,
}: {
  results: SearchableItem[];
  activeIndex: number;
  setActiveIndex: (fn: (i: number) => number) => void;
  onGo: (item: SearchableItem) => void;
}) {
  // Define group order and which types belong to each group
  const groups: { label: string; types: SearchableItem["type"][] }[] = [
    { label: "Medications", types: ["drug"] },
    { label: "Diseases", types: ["disease"] },
    { label: "Substances", types: ["substance"] },
    { label: "Neuroscience", types: ["brain-region", "pathway", "neurotransmitter"] },
    { label: "Side Effects", types: ["side-effect"] },
    { label: "Drug Classes", types: ["class"] },
    { label: "Clinical & Guides", types: ["clinical", "patient-guide"] },
  ];

  let runningIndex = 0;

  return (
    <>
      {groups.map((group) => {
        const groupItems = results.filter((item) => group.types.includes(item.type));
        if (groupItems.length === 0) return null;

        // Calculate the starting index for this group in the flat results array
        const groupStartIndex = results
          .filter((_, i) => i < results.findIndex((r) => group.types.includes(r.type)))
          .length;

        return (
          <div key={group.label} className="mb-1">
            <p className="px-3 py-1.5 text-overline text-muted-foreground/70">
              {group.label}
              <span className="ml-2 text-[0.6rem] opacity-60">{groupItems.length}</span>
            </p>
            {groupItems.map((item, gi) => {
              const flatIdx = results.indexOf(item);
              const Icon = typeIcon[item.type];
              return (
                <button
                  key={item.id}
                  type="button"
                  data-idx={flatIdx}
                  onMouseEnter={() => setActiveIndex(() => flatIdx)}
                  onClick={() => onGo(item)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                    flatIdx === activeIndex ? "bg-accent" : "hover:bg-accent/60"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background/60",
                      typeColor[item.type]
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  {flatIdx === activeIndex && (
                    <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  )}
                </button>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
