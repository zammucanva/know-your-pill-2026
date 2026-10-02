"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  CornerDownLeft,
  Pill,
  Layers,
  FolderTree,
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
// Generated, self-contained artifact — NOT the live derivation in
// @/lib/kyp/data/search-index (which imports the entire 145-monograph
// registry at module scope and would ship it to every page). Pinned
// deep-equal to the live derivation by tests/platform-hardening.test.ts.
import {
  searchIndexGenerated as searchIndex,
  searchTypeLabelsGenerated as searchTypeLabels,
} from "@/lib/kyp/data/search-index-generated";
import { SEARCH_RESULT_GROUPS } from "@/lib/kyp/search-groups";
import { SEARCH_DISPLAY_CAP, searchUniversal } from "@/lib/kyp/search";
import type { SearchableItem } from "@/lib/kyp/data/types";
import { useSearchHistory } from "@/lib/hooks/use-search-history";
import { cn } from "@/lib/utils";
import { Clock, Trash2 } from "lucide-react";

/**
 * SearchModal — Spotlight-style universal search.
 *
 * Searches across: medications, substances, diseases, drug classes,
 * neurotransmitters, side effects, brain regions, pathways, patient guides.
 *
 * The engine lives in @/lib/kyp/search (pure, test-pinned). Ranking
 * tiers (lower = stronger): 1 exact title · 2 title prefix · 3 title
 * token prefix · 4 title substring · 5 keyword exact · 6 keyword prefix
 * · 7 keyword substring · 8 description. Multi-word = AND, Σ tiers.
 *
 * Display policy: at most SEARCH_DISPLAY_CAP results from the globally
 * ranked pool — grouping is presentation-only and never suppresses a
 * ranked result. The footer states the shown/total counts.
 *
 * Keyboard:
 *   ⌘K / Ctrl+K → open
 *   ↑↓          → navigate
 *   Home / End  → first / last result
 *   Enter       → go
 *   Esc         → close
 */
interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** One-shot query seed (hero-form handoff). Plain opens pass null. */
  initialQuery?: string | null;
}

const typeIcon: Record<SearchableItem["type"], React.ElementType> = {
  drug: Pill,
  substance: FlaskConical,
  disease: HeartPulse,
  class: Layers,
  collection: FolderTree,
  neurotransmitter: Zap,
  "side-effect": Activity,
  "brain-region": Brain,
  pathway: Route,
  clinical: Stethoscope,
  "patient-guide": BookOpen,
  "psychiatry-note": Brain,
};

const typeColor: Record<SearchableItem["type"], string> = {
  drug: "text-brand",
  substance: "text-[var(--class-opioid)]",
  disease: "text-emergency",
  class: "text-brand",
  collection: "text-brand",
  neurotransmitter: "text-neural",
  "side-effect": "text-warning",
  "brain-region": "text-neural",
  pathway: "text-brand",
  clinical: "text-emergency",
  "patient-guide": "text-success",
  "psychiatry-note": "text-neural",
};

export function SearchModal({ open, onOpenChange, initialQuery = null }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);
  const { history, recordSearch, clearHistory } = useSearchHistory(5);

  // Filter + rank results — global pool first, display cap after ranking
  const { results, totalMatches } = React.useMemo(() => {
    if (!query.trim()) {
      // Show curated top results when query is empty
      const suggestions = searchIndex.slice(0, 8);
      return { results: suggestions, totalMatches: suggestions.length };
    }
    const { items, total } = searchUniversal(searchIndex, query, {
      limit: SEARCH_DISPLAY_CAP,
    });
    return { results: items, totalMatches: total };
  }, [query]);

  // Reset active index when results change
  React.useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Focus input on open; seed the query when handed off from the hero form
  React.useEffect(() => {
    if (open) {
      setQuery(initialQuery ?? "");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open, initialQuery]);

  // Scroll active item into view
  React.useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${activeIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const go = (item: SearchableItem) => {
    onOpenChange(false);
    // Record search history with the clicked result
    if (query.trim()) {
      const isPersistableContent = item.type === "drug" || item.type === "substance" || item.type === "disease";
      recordSearch(
        query.trim(),
        isPersistableContent ? { type: item.type, slug: item.id } : undefined
      );
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
      const prefixByType: Record<string, string> = {
        drug: "medication-",
        substance: "substance-",
        disease: "disease-",
      };
      const prefix = entry.resultType ? prefixByType[entry.resultType] : undefined;
      const item = prefix && entry.resultSlug
        ? searchIndex.find((s) => s.id === `${prefix}${entry.resultSlug}`)
        : undefined;
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
    } else if (e.key === "Home" && results.length > 0) {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End" && results.length > 0) {
      e.preventDefault();
      setActiveIndex(results.length - 1);
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
            {query.trim()
              ? `${results.length} of ${totalMatches} matches`
              : `${searchIndex.length} entries indexed`}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/**
 * GroupedResults — renders search results grouped by content type.
 *
 * The group order and type membership live in SEARCH_RESULT_GROUPS
 * (src/lib/kyp/search-groups.ts) — the shared, test-pinned
 * presentation contract. Every SearchableItem type appears in exactly
 * one group, so no result the engine returns can be invisible in the
 * UI (the D-1 regression guard).
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
  return (
    <>
      {SEARCH_RESULT_GROUPS.map((group) => {
        const groupItems = results.filter((item) => group.types.includes(item.type));
        if (groupItems.length === 0) return null;

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
