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
import { cn } from "@/lib/utils";

/**
 * SearchModal — Spotlight-style universal search.
 *
 * Searches across: drugs, drug classes, neurotransmitters, side effects,
 * brain regions, pathways, clinical patterns, patient guides.
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
  class: Layers,
  neurotransmitter: Zap,
  "side-effect": Activity,
  "brain-region": Brain,
  pathway: Route,
  clinical: Stethoscope,
  "patient-guide": BookOpen,
};

const typeColor: Record<SearchableItem["type"], string> = {
  drug: "text-[var(--class-opioid)]",
  class: "text-brand",
  neurotransmitter: "text-neural",
  "side-effect": "text-warning",
  "brain-region": "text-neural",
  pathway: "text-brand",
  clinical: "text-emergency",
  "patient-guide": "text-success",
};

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  // Filter results (simple substring match — Phase 3 can swap in fuzzy search later)
  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      // Show curated top results when query is empty
      return searchIndex.slice(0, 8);
    }
    return searchIndex
      .filter((item) => {
        const haystack = [item.title, item.description, ...item.keywords]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      })
      .slice(0, 12);
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
    if (item.href.startsWith("#")) {
      // In-page anchor
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
    } else if (item.href.startsWith("/")) {
      // Internal route — could be Next.js route or static HTML
      window.location.href = item.href;
    }
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
            Search across drugs, classes, neurotransmitters, side effects, brain regions, pathways, and patient guides.
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
            placeholder="Search drugs, neurotransmitters, side effects, brain regions…"
            className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
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
                Try a drug name, neurotransmitter, or symptom.
              </p>
            </div>
          ) : (
            <>
              {!query && (
                <p className="px-3 py-2 text-overline text-muted-foreground">
                  Suggested searches
                </p>
              )}
              {results.map((item, idx) => {
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
              })}
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
