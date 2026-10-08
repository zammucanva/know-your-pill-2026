"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Bookmark, Clock, FlaskConical, HeartPulse, Pill, Trash2 } from "lucide-react";

import { ModuleCard, ModuleHeader } from "./modules-hero";
import {
  typeHref, typeIcon, typeLabel, timeAgoShort, type BookmarkEntry, type ProgressEntry,
} from "@/lib/kyp/dashboard/dashboard-data";

/**
 * Recently Visited + Saved Knowledge.
 *
 * Recently Visited keeps the existing clear-history affordance
 * (DELETE /api/progress). Saved Knowledge keeps the existing inline
 * bookmark removal (DELETE /api/bookmarks?type=&slug=). Both modules
 * render only real rows; their empty states say so plainly.
 */

/* ─── Recently Visited ─────────────────────────────────────────── */

export function RecentlyVisited({
  progress, onCleared,
}: {
  progress: ProgressEntry[];
  onCleared: () => void;
}) {
  const [clearing, setClearing] = React.useState(false);

  const clear = async () => {
    if (clearing || progress.length === 0) return;
    setClearing(true);
    try {
      await fetch("/api/progress", { method: "DELETE" });
      onCleared();
    } catch {
      // Keep the list if the call failed.
    } finally {
      setClearing(false);
    }
  };

  return (
    <ModuleCard id="recently-visited">
      <ModuleHeader
        icon={Clock}
        title="Recently Visited"
        aside={
          progress.length > 0 ? (
            <button
              type="button"
              onClick={clear}
              disabled={clearing}
              className="flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs text-muted-foreground/70 transition-colors hover:text-destructive disabled:opacity-50"
            >
              <Trash2 className="h-3 w-3" />
              {clearing ? "Clearing…" : "Clear"}
            </button>
          ) : undefined
        }
      />
      {progress.length === 0 ? (
        <div className="px-5 py-10 text-center">
          <Clock className="mx-auto mb-2 h-6 w-6 text-muted-foreground/30" />
          <p className="text-sm text-muted-foreground">
            No reading history yet. Visit a medication or substance page to start tracking.
          </p>
        </div>
      ) : (
        <ul className="grid gap-x-6 px-2.5 py-2 sm:grid-cols-2">
          {progress.map((p) => {
            const Icon = typeIcon[p.type] ?? Clock;
            return (
              <li key={p.id}>
                <Link
                  href={typeHref(p.type, p.slug)}
                  className="group flex items-center gap-3 rounded-lg px-2.5 py-2 transition-colors hover:bg-accent/40"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-muted-foreground">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-foreground">{p.title}</span>
                    <span className="mt-0.5 block text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                      {typeLabel[p.type] ?? "Page"} · {timeAgoShort(p.lastVisitedAt)}
                      {p.visitCount > 1 ? ` · ${p.visitCount} visits` : ""}
                    </span>
                  </span>
                  <ArrowRight className="h-3 w-3 shrink-0 text-muted-foreground/30 transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </ModuleCard>
  );
}

/* ─── Saved Knowledge ───────────────────────────────────────────── */

const GROUPS: { key: string; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "drug", label: "Medications", icon: Pill },
  { key: "disease", label: "Conditions", icon: HeartPulse },
  { key: "substance", label: "Substances", icon: FlaskConical },
];

export function SavedKnowledge({
  bookmarks, onRemoved,
}: {
  bookmarks: BookmarkEntry[];
  onRemoved: (type: string, slug: string) => void;
}) {
  return (
    <ModuleCard id="saved">
      <ModuleHeader
        icon={Bookmark}
        title="Saved Knowledge"
        aside={<span>{bookmarks.length} saved</span>}
      />
      {bookmarks.length === 0 ? (
        <div className="px-5 py-10 text-center">
          <Bookmark className="mx-auto mb-2 h-6 w-6 text-muted-foreground/30" />
          <p className="text-sm text-muted-foreground">
            No bookmarks yet. Click the bookmark icon on any page to save it here.
          </p>
          <Link
            href="/medicine"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-ink"
          >
            Explore the library
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      ) : (
        <div className="space-y-1 px-2.5 py-2">
          {GROUPS.map((group) => {
            const items = bookmarks.filter((b) => b.type === group.key);
            if (items.length === 0) return null;
            const GroupIcon = group.icon;
            return (
              <div key={group.key} className="rounded-lg">
                <p className="flex items-center gap-2 px-2.5 pb-1 pt-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground/70">
                  <GroupIcon className="h-3 w-3" />
                  {group.label}
                  <span className="font-normal text-muted-foreground/50">{items.length}</span>
                </p>
                <ul className="sm:grid sm:grid-cols-2 sm:gap-x-6">
                  {items.map((b) => {
                    const Icon = typeIcon[b.type] ?? Bookmark;
                    return (
                      <li key={b.id} className="group/row">
                        <div className="flex items-center gap-3 rounded-lg px-2.5 py-2 transition-colors hover:bg-accent/40">
                          <Link href={typeHref(b.type, b.slug)} className="flex min-w-0 flex-1 items-center gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-brand">
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                            <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
                              {b.title}
                            </span>
                          </Link>
                          <button
                            type="button"
                            onClick={() => onRemoved(b.type, b.slug)}
                            aria-label={`Remove ${b.title} from bookmarks`}
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground/40 opacity-0 transition-opacity hover:bg-destructive/10 hover:text-destructive focus-visible:opacity-100 group-hover/row:opacity-100"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </ModuleCard>
  );
}
