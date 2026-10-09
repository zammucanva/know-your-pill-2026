"use client";

import * as React from "react";
import { Search, Command } from "lucide-react";
import { SearchModal } from "./search-modal";
import { cn } from "@/lib/utils";

/**
 * FloatingSearch — floating action button that opens <SearchModal />.
 *
 * Renders as a pill-shaped "Search… ⌘K" trigger in the bottom-right corner.
 * Listens for ⌘K / Ctrl+K globally so the modal can be opened from anywhere.
 *
 * Also accepts a `variant="button"` prop to render inline (e.g., in navbar)
 * instead of fixed-position floating.
 *
 * Handoff channel: the homepage hero form dispatches a `kyp:search`
 * CustomEvent carrying the typed query; the first-registered instance opens
 * the modal WITH that query seeded (a plain ⌘K opens it empty).
 */
interface FloatingSearchProps {
  variant?: "floating" | "button";
  className?: string;
}

export function FloatingSearch({ variant = "floating", className }: FloatingSearchProps) {
  const [open, setOpen] = React.useState(false);
  const [seedQuery, setSeedQuery] = React.useState<string | null>(null);

  // Global ⌘K / Ctrl+K shortcut. TWO FloatingSearch triggers mount on
  // most pages (the navbar's desktop button variant + the page's
  // floating variant), so this keydown reaches two listeners — without
  // the stopImmediatePropagation guard both modals opened stacked and
  // the user needed TWO Escape presses to close "the" search (the
  // first press only dismissed the hidden duplicate). The guard makes
  // the first-registered instance the single ⌘K handler.
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        e.stopImmediatePropagation();
        setSeedQuery(null);
        setOpen((v) => !v);
      }
    };
    // Hero-form handoff — same first-registered-instance guard as ⌘K.
    const onSearchHandoff = (e: Event) => {
      e.stopImmediatePropagation();
      const q = (e as CustomEvent<{ query?: string }>).detail?.query ?? "";
      setSeedQuery(q);
      setOpen(true);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("kyp:search", onSearchHandoff);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("kyp:search", onSearchHandoff);
    };
  }, []);

  // The seed is one-shot: clear it once the modal has consumed it, so a
  // later plain open (navbar button / ⌘K) starts from an empty query.
  React.useEffect(() => {
    if (!open) setSeedQuery(null);
  }, [open]);

  return (
    <>
      {variant === "floating" ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open universal search"
          className={cn(
            // hidden below lg (audit B3): on narrow viewports the fixed
            // pill overlapped body text continuously on dense pages
            // (287 overlap positions measured at 375px on drug pages,
            // 122 at 768px; 0 at ≥1024px). Mobile/tablet users reach
            // search through the navbar menu row instead.
            "fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 rounded-full border border-border/80 bg-card/90 backdrop-blur-xl pl-4 pr-2 py-2 shadow-[var(--shadow-lift)] transition-all hover:border-brand/40 hover:shadow-[var(--shadow-glow)] print:hidden",
            "group",
            className
          )}
        >
          <Search className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-brand" />
          <span className="text-sm font-medium text-foreground">Search</span>
          <kbd className="flex items-center gap-0.5 rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.65rem] text-muted-foreground">
            <Command className="h-2.5 w-2.5" />K
          </kbd>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open universal search"
          className={cn(
            "flex items-center gap-2 rounded-full border border-border/80 bg-card/80 backdrop-blur px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground",
            className
          )}
        >
          <Search className="h-3.5 w-3.5" />
          Search…
          <kbd className="flex items-center gap-0.5 rounded border border-border bg-muted px-1 py-0.5 font-mono text-[0.6rem]">
            ⌘K
          </kbd>
        </button>
      )}

      <SearchModal open={open} onOpenChange={setOpen} initialQuery={seedQuery} />
    </>
  );
}
