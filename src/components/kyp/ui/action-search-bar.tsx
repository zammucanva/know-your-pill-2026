"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Brain,
  CornerDownLeft,
  FlaskConical,
  FolderTree,
  GraduationCap,
  HeartPulse,
  Layers,
  ListChecks,
  Pill,
  Route,
  Scale,
  Search,
  Sparkles,
  Stethoscope,
  X,
  Zap,
} from "lucide-react";

import { SearchModal } from "@/components/kyp/ui/search-modal";
import {
  searchIndexGenerated as searchIndex,
  searchTypeLabelsGenerated as searchTypeLabels,
} from "@/lib/kyp/data/search-index-generated";
import { searchUniversal } from "@/lib/kyp/search";
import type { SearchableItem } from "@/lib/kyp/data/types";
import { cn } from "@/lib/utils";

/**
 * ActionSearchBar: the header search, in the style of the Kokonut UI
 * action search bar, wired to KYP's own search engine.
 *
 * - An inline search field with a debounced query and a Cmd/Ctrl+K hint.
 * - Focused and empty: quick actions (places people go most).
 * - Typing: the top ranked matches from the universal search index
 *   (medications, conditions, substances, guides ...), plus a row that
 *   opens the full search window seeded with the query.
 * - Combobox keyboard model: arrows move, Enter opens, Esc closes.
 *
 * Cmd/Ctrl+K focuses this bar whenever it is visible (desktop widths).
 * Where it is hidden (phones) the shortcut falls through to the full
 * search window as before. The ranking engine and the index are the
 * existing ones, unchanged.
 */

interface QuickAction {
  id: string;
  label: string;
  description: string;
  href: string;
  end: string;
  icon: React.ComponentType<{ className?: string }>;
}

const QUICK_ACTIONS: QuickAction[] = [
  { id: "qa-study", label: "Study Mode", description: "Learn and practise", href: "/study", end: "Page", icon: GraduationCap },
  { id: "qa-test", label: "Custom Test", description: "Build your own test", href: "/quiz/custom", end: "Practice", icon: ListChecks },
  { id: "qa-factory", label: "Question Factory", description: "Generate fresh questions", href: "/quiz/factory", end: "Practice", icon: Sparkles },
  { id: "qa-library", label: "Medication Library", description: "All medication courses", href: "/drugs", end: "Page", icon: Pill },
  { id: "qa-interactions", label: "Interaction Checker", description: "Check drug combinations", href: "/interactions", end: "Tool", icon: Scale },
  { id: "qa-anatomy", label: "3D Anatomy", description: "Explore the body in 3D", href: "/anatomy", end: "Tool", icon: Brain },
];

const TYPE_ICON: Record<SearchableItem["type"], React.ComponentType<{ className?: string }>> = {
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

const MAX_SUGGESTIONS = 6;
const DEBOUNCE_MS = 150;

interface Row {
  id: string;
  label: string;
  description: string;
  end: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

function useDebounced<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = React.useState(value);
  React.useEffect(() => {
    const t = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export function ActionSearchBar({ className }: { className?: string }) {
  const router = useRouter();
  const reduced = useReducedMotion();
  const rootRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listId = React.useId();

  const [query, setQuery] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  // The highlight belongs to one result list: a new query starts at the top
  // without an effect (the stored index is ignored once the query moves on).
  const [highlight, setHighlight] = React.useState<{ forQuery: string; index: number }>({
    forQuery: "",
    index: 0,
  });
  const [modalOpen, setModalOpen] = React.useState(false);
  const [seed, setSeed] = React.useState<string | null>(null);
  const debounced = useDebounced(query, DEBOUNCE_MS);
  const activeIndex = highlight.forQuery === debounced ? highlight.index : 0;
  const setActiveIndex = (next: number | ((i: number) => number)) =>
    setHighlight({
      forQuery: debounced,
      index: typeof next === "function" ? next(activeIndex) : next,
    });

  const { rows, total, typed } = React.useMemo(() => {
    const q = debounced.trim();
    if (!q) {
      return {
        rows: QUICK_ACTIONS as Row[],
        total: QUICK_ACTIONS.length,
        typed: false,
      };
    }
    const { items, total } = searchUniversal(searchIndex, q, { limit: MAX_SUGGESTIONS });
    const mapped: Row[] = items.map((it) => ({
      id: `r-${it.id}`,
      label: it.title,
      description: it.description,
      end: searchTypeLabels[it.type] ?? it.type,
      href: it.href,
      icon: TYPE_ICON[it.type] ?? Search,
    }));
    return { rows: mapped, total, typed: true };
  }, [debounced]);

  // "See all" row is addressable like any other row.
  const seeAll = typed && total > rows.length;
  const optionCount = rows.length + (seeAll ? 1 : 0);

  const open = focused && (typed ? true : rows.length > 0);

  // Cmd/Ctrl+K focuses the bar when it is visible. Capture phase on window
  // so it wins over the full-search shortcut registered by FloatingSearch;
  // when the bar is hidden (phones) the event falls through unchanged.
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) return;
      const input = inputRef.current;
      if (!input || input.offsetParent === null) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      input.focus();
      input.select();
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, []);

  // Close on outside pointer.
  React.useEffect(() => {
    if (!focused) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setFocused(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [focused]);

  const openFullSearch = (q: string) => {
    setFocused(false);
    inputRef.current?.blur();
    setSeed(q.trim() || null);
    setModalOpen(true);
  };

  const choose = (row: Row) => {
    setFocused(false);
    inputRef.current?.blur();
    setQuery("");
    if (row.href.startsWith("#")) {
      document.querySelector(row.href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(row.href);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      if (query) setQuery("");
      else {
        setFocused(false);
        inputRef.current?.blur();
      }
      return;
    }
    if (!open) {
      if (e.key === "ArrowDown") setFocused(true);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % Math.max(optionCount, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + Math.max(optionCount, 1)) % Math.max(optionCount, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (seeAll && activeIndex === rows.length) openFullSearch(query);
      else if (rows[activeIndex] && (typed ? debounced === query : true)) choose(rows[activeIndex]);
      else if (query.trim()) openFullSearch(query);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 8 },
    show: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.18 } },
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <div
        className={cn(
          "flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3 py-1.5 backdrop-blur",
          "transition-[width,border-color,box-shadow] duration-200",
          focused
            ? "w-72 border-brand/50 shadow-[var(--shadow-glow)] xl:w-80"
            : "w-44 hover:border-brand/40 xl:w-52"
        )}
      >
        <Search aria-hidden className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-label="Search Know Your Pill"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={open && optionCount > 0 ? `${listId}-${activeIndex}` : undefined}
          autoComplete="off"
          spellCheck={false}
          placeholder="Search…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onKeyDown={onKeyDown}
          className="min-w-0 flex-1 bg-transparent text-xs font-medium text-foreground outline-none placeholder:text-muted-foreground"
        />
        {query ? (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="rounded p-0.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        ) : (
          <kbd className="flex shrink-0 items-center rounded border border-border bg-muted px-1 py-0.5 font-mono text-[0.6rem] text-muted-foreground">
            ⌘K
          </kbd>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-full z-50 mt-2 w-[26rem] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-border/60 bg-popover/95 shadow-xl backdrop-blur-sm"
          >
            <p className="px-4 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              {typed ? (rows.length ? "Top matches" : "No matches") : "Quick actions"}
            </p>

            {typed && rows.length === 0 ? (
              <div className="px-4 pb-3 pt-1 text-sm text-muted-foreground">
                Nothing found for &ldquo;{debounced.trim()}&rdquo;. Try another word, or open the full search.
              </div>
            ) : (
              <motion.ul
                id={listId}
                role="listbox"
                aria-label={typed ? "Search results" : "Quick actions"}
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: reduced ? 0 : 0.03 } } }}
                className="max-h-[22rem] overflow-y-auto px-2 pb-2"
              >
                {rows.map((row, i) => {
                  const active = i === activeIndex;
                  return (
                    <motion.li
                      key={row.id}
                      id={`${listId}-${i}`}
                      role="option"
                      aria-selected={active}
                      variants={itemVariants}
                      onMouseEnter={() => setActiveIndex(i)}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => choose(row)}
                      className={cn(
                        "flex cursor-pointer items-center gap-3 rounded-xl px-2.5 py-2 transition-colors",
                        active ? "bg-accent/60" : "hover:bg-accent/40"
                      )}
                    >
                      <span
                        aria-hidden
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-brand"
                      >
                        <row.icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-foreground">{row.label}</span>
                        <span className="block truncate text-xs text-muted-foreground">{row.description}</span>
                      </span>
                      <span className="shrink-0 text-[11px] text-muted-foreground">{row.end}</span>
                      {active && <CornerDownLeft aria-hidden className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />}
                    </motion.li>
                  );
                })}
                {seeAll && (
                  <motion.li
                    id={`${listId}-${rows.length}`}
                    role="option"
                    aria-selected={activeIndex === rows.length}
                    variants={itemVariants}
                    onMouseEnter={() => setActiveIndex(rows.length)}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => openFullSearch(query)}
                    className={cn(
                      "mt-1 flex cursor-pointer items-center justify-between gap-2 rounded-xl border border-dashed border-border/70 px-3 py-2 text-sm text-foreground transition-colors",
                      activeIndex === rows.length ? "bg-accent/60" : "hover:bg-accent/40"
                    )}
                  >
                    <span>
                      See all {total} results for &ldquo;{debounced.trim()}&rdquo;
                    </span>
                    <ArrowRight aria-hidden className="h-4 w-4 text-muted-foreground" />
                  </motion.li>
                )}
              </motion.ul>
            )}

            <div className="flex items-center justify-between border-t border-border/60 px-4 py-2 text-[11px] text-muted-foreground">
              <span>↑↓ to move · ↵ to open</span>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => openFullSearch(query)}
                className="rounded px-1 transition-colors hover:text-foreground"
              >
                Full search
              </button>
              <span>Esc to close</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal open={modalOpen} onOpenChange={setModalOpen} initialQuery={seed} />
    </div>
  );
}
