"use client";

import * as React from "react";
import Link from "next/link";
import {
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock,
  Search,
  ListChecks,
  Layers,
} from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { Container } from "@/components/kyp/ui/container";
import { cn } from "@/lib/utils";
import { priorityMeta } from "@/lib/oxford/learn";
import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";

/**
 * /psychiatry/library — the KYP Psychiatry Library.
 *
 * A premium medical learning library, not a content database:
 *  - Chapters (not file groups): strong letter + name hierarchy with
 *    per-chapter progress.
 *  - Compact, scannable course rows with clear identity, an honest
 *    type marker (Disorder / Concept) and restrained metadata.
 *  - Real progress — merged client-side from the same localStorage
 *    store the lessons write to (hydration-safe via useLocalProgress;
 *    the server render intentionally shows the curriculum itself).
 *  - Chapter rail (desktop) / chip bar (mobile) for orientation in
 *    the 18-domain curriculum.
 *
 * Honest labels: the per-course number is the note's authored
 * self-test question count ("Self-test questions" — resolved in the
 * normalization record, 2026-09-30); the duration is the note-layer
 * reading time ("min read"), distinct from the six-lesson course
 * journey time shown on each course page.
 */

export interface LibraryNote {
  slug: string;
  title: string;
  tagline: string | null;
  priority: string;
  readingMinutes: number;
  mcqCount: number;
  kind: "disorder" | "concept";
  completedSections: number;
  totalSections: number;
}

export interface LibraryGroup {
  letter: string;
  name: string;
  notes: LibraryNote[];
}

type FilterKey = "all" | "core" | "disorder" | "concept" | "continue";

const FILTERS: [FilterKey, string][] = [
  ["all", "All 109"],
  ["core", "Core"],
  ["disorder", "Disorders"],
  ["concept", "Concepts"],
  ["continue", "Continue"],
];

/** A learner's merged progress for one course row. */
interface RowProgress {
  completed: number;
  done: boolean;
}

export function LibraryClient({ groups }: { groups: LibraryGroup[] }) {
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState<FilterKey>("all");
  const [activeGroup, setActiveGroup] = React.useState<string | null>(null);

  // Real progress — the same localStorage store the lessons write to.
  const progressData = useLocalProgress();
  const rowProgress = React.useMemo(() => {
    const map = new Map<string, RowProgress>();
    if (!progressData) return map;
    for (const [slug, record] of Object.entries(progressData.courses)) {
      map.set(slug, {
        // The hero "top" anchor is position-tracking only on the
        // psychiatry course pages (the canonical completion contract) —
        // records written before that contract never count it here.
        completed: record.completedSections.filter((id) => id !== "top").length,
        done: record.completedAt != null,
      });
    }
    return map;
  }, [progressData]);

  const progressOf = (slug: string, total: number): RowProgress | null => {
    const p = rowProgress.get(slug);
    if (!p) return null;
    // The store's completed ids are the course outline ids; cap at the
    // library's total in case an outline grew after progress was recorded.
    const completed = Math.min(p.completed, total);
    return { completed, done: p.done || (total > 0 && completed >= total) };
  };

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return groups
      .map((g) => ({
        ...g,
        notes: g.notes.filter((n) => {
          if (
            q &&
            !n.title.toLowerCase().includes(q) &&
            !n.slug.includes(q) &&
            !g.name.toLowerCase().includes(q)
          )
            return false;
          if (filter === "core") return n.priority === "P1";
          if (filter === "disorder") return n.kind === "disorder";
          if (filter === "concept") return n.kind === "concept";
          if (filter === "continue") {
            const p = rowProgress.get(n.slug);
            return p != null && !p.done;
          }
          return true;
        }),
      }))
      .filter((g) => g.notes.length > 0);
  }, [groups, query, filter, rowProgress]);

  const totalNotes = React.useMemo(
    () => groups.reduce((s, g) => s + g.notes.length, 0),
    [groups]
  );
  const shown = filtered.reduce((s, g) => s + g.notes.length, 0);
  const inProgress = React.useMemo(() => {
    let n = 0;
    for (const g of groups)
      for (const note of g.notes) {
        const p = rowProgress.get(note.slug);
        if (p && !p.done) n++;
      }
    return n;
  }, [groups, rowProgress]);

  // Chapter rail active state — lightweight scroll spy.
  React.useEffect(() => {
    if (filtered.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const letter = (entry.target as HTMLElement).dataset.letter;
            if (letter) setActiveGroup(letter);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    for (const g of filtered) {
      const el = document.getElementById(`group-${g.letter}`);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* ─── Library header ─────────────────────────────────────── */}
        <section className="border-b border-border bg-gradient-to-b from-neural/[0.07] to-transparent">
          <Container>
            <div className="py-10 sm:py-14">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Link
                  href="/psychiatry"
                  className="inline-flex items-center gap-1.5 font-semibold text-neural hover:underline"
                >
                  <Brain className="h-3.5 w-3.5" aria-hidden /> KYP Psychiatry
                </Link>
                <span aria-hidden>/</span>
                <span aria-current="page">Library</span>
              </div>
              <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                The Psychiatry Library
              </h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                {totalNotes} lessons across {groups.length} clinical domains,
                read as a curriculum, not a list. Foundations first, then the
                clinical progression.
              </p>

              {/* Search + filters */}
              <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center">
                <div className="relative flex-1 lg:max-w-sm">
                  <label htmlFor="psychiatry-library-search" className="sr-only">
                    Search Psychiatry
                  </label>
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60"
                    aria-hidden
                  />
                  <input
                    id="psychiatry-library-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search lessons or domains…"
                    className="w-full rounded-lg border border-border bg-card py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <div
                  role="group"
                  aria-label="Filter lessons"
                  className="flex flex-wrap gap-1.5"
                >
                  {FILTERS.map(([key, label]) => {
                    const disabled = key === "continue" && inProgress === 0;
                    return (
                      <button
                        key={key}
                        type="button"
                        disabled={disabled}
                        onClick={() => setFilter(key)}
                        aria-pressed={filter === key}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                          filter === key
                            ? "border-brand bg-brand text-white"
                            : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground",
                          disabled && "cursor-not-allowed opacity-40 hover:border-border hover:text-muted-foreground"
                        )}
                      >
                        {key === "continue" && inProgress > 0 ? `Continue (${inProgress})` : label}
                      </button>
                    );
                  })}
                </div>
              </div>
              {query && (
                <p className="mt-3 text-xs text-muted-foreground" role="status">
                  {shown} of {totalNotes} lessons match &ldquo;{query}&rdquo;.
                </p>
              )}
            </div>
          </Container>
        </section>

        {/* ─── Chapter chip bar (mobile/tablet) ───────────────────── */}
        <div className="sticky top-16 z-20 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 lg:hidden">
          <nav aria-label="Curriculum sections" className="overflow-x-auto">
            <ul className="flex gap-1 px-4 py-2" style={{ scrollbarWidth: "none" }}>
              {groups.map((g) => (
                <li key={g.letter} className="shrink-0">
                  <a
                    href={`#group-${g.letter}`}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
                      activeGroup === g.letter
                        ? "border-brand/60 bg-brand/10 text-brand"
                        : "border-transparent bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span className="font-mono text-[10px] opacity-70">{g.letter}</span>
                    <span className="max-w-[9rem] truncate">{g.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ─── Chapters ────────────────────────────────────────────── */}
        <div className="border-t-0">
          <Container>
            <div className="flex gap-10 py-10 sm:py-12">
              {/* Chapter rail (desktop) */}
              <aside className="hidden w-52 shrink-0 lg:block">
                <nav aria-label="Curriculum sections" className="sticky top-32">
                  <p className="text-overline text-muted-foreground">Curriculum</p>
                  <ul className="mt-3 space-y-px border-l border-border/70">
                    {groups.map((g) => {
                      const completedInGroup = g.notes.filter((n) =>
                        progressOf(n.slug, n.totalSections)?.done
                      ).length;
                      return (
                        <li key={g.letter}>
                          <a
                            href={`#group-${g.letter}`}
                            aria-current={activeGroup === g.letter ? "true" : undefined}
                            className={cn(
                              "-ml-px flex items-baseline gap-2 border-l-2 py-1.5 pl-3 pr-2 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                              activeGroup === g.letter
                                ? "border-brand font-semibold text-foreground"
                                : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                            )}
                          >
                            <span className="w-3 shrink-0 font-mono text-[10px] opacity-60">
                              {g.letter}
                            </span>
                            <span className="min-w-0 flex-1 truncate">{g.name}</span>
                            <span
                              className={cn(
                                "shrink-0 tabular-nums",
                                completedInGroup > 0 ? "text-brand" : "text-muted-foreground/50"
                              )}
                            >
                              {completedInGroup > 0
                                ? `${completedInGroup}/${g.notes.length}`
                                : g.notes.length}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  <Link
                    href="/psychiatry/self-test"
                    className="mt-5 flex items-center gap-1.5 pl-3 text-xs font-semibold text-brand hover:underline"
                  >
                    <ListChecks className="h-3.5 w-3.5" aria-hidden /> Self-test
                  </Link>
                </nav>
              </aside>

              {/* Chapter list */}
              <div className="min-w-0 flex-1">
                {filtered.length === 0 ? (
                  <div className="py-16 text-center">
                    <p className="text-sm font-medium text-foreground">
                      No lessons match your filters.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setQuery("");
                        setFilter("all");
                      }}
                      className="mt-2 text-sm text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                      Clear filters
                    </button>
                  </div>
                ) : (
                  <div className="space-y-12">
                    {filtered.map((group) => {
                      const coreCount = group.notes.filter((n) => n.priority === "P1").length;
                      const mcqs = group.notes.reduce((s, n) => s + n.mcqCount, 0);
                      const completedInGroup = group.notes.filter((n) =>
                        progressOf(n.slug, n.totalSections)?.done
                      ).length;
                      return (
                        <section
                          key={group.letter}
                          aria-labelledby={`group-${group.letter}`}
                          className="scroll-mt-36"
                          id={`group-${group.letter}`}
                          data-letter={group.letter}
                        >
                          {/* Chapter header — a textbook chapter, not a file group */}
                          <header className="border-b border-border pb-3">
                            <div className="flex items-baseline gap-3">
                              <span
                                aria-hidden
                                className="font-serif text-2xl font-semibold leading-none text-brand/50"
                              >
                                {group.letter}.
                              </span>
                              <div className="min-w-0 flex-1">
                                <h2
                                  id={`group-${group.letter}`}
                                  className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
                                >
                                  {group.name}
                                </h2>
                              </div>
                            </div>
                            <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 pl-9 text-caption text-muted-foreground">
                              <span>
                                {group.notes.length} lesson{group.notes.length === 1 ? "" : "s"}
                                {coreCount > 0 && ` · ${coreCount} core`}
                              </span>
                              <span aria-hidden>·</span>
                              <span>{mcqs} self-test questions</span>
                              {completedInGroup > 0 && (
                                <>
                                  <span aria-hidden>·</span>
                                  <span className="font-semibold text-brand">
                                    {completedInGroup} completed
                                  </span>
                                </>
                              )}
                            </p>
                          </header>

                          {/* Course rows */}
                          <ul className="mt-1 divide-y divide-border/50">
                            {group.notes.map((note) => {
                              const p = progressOf(note.slug, note.totalSections);
                              const pct =
                                p && note.totalSections > 0
                                  ? Math.round((p.completed / note.totalSections) * 100)
                                  : 0;
                              return (
                                <li key={note.slug}>
                                  <Link
                                    href={`/psychiatry/${note.slug}`}
                                    className="group relative flex items-center gap-3 py-3.5 pl-3 pr-1 transition-colors hover:bg-muted/40 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand sm:gap-4"
                                  >
                                    {/* Type marker — Disorder vs Concept, always visible */}
                                    <span
                                      aria-hidden
                                      className={cn(
                                        "absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-full transition-colors",
                                        note.kind === "disorder"
                                          ? "bg-brand/50 group-hover:bg-brand"
                                          : "bg-neural/50 group-hover:bg-neural"
                                      )}
                                    />
                                    <span className="sr-only">
                                      {note.kind === "disorder" ? "Disorder course" : "Concept course"}:{" "}
                                    </span>

                                    <div className="min-w-0 flex-1">
                                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                        <p className="text-[0.9375rem] font-semibold leading-snug text-foreground group-hover:text-brand">
                                          {note.title}
                                        </p>
                                        <span
                                          className={cn(
                                            "rounded-full px-1.5 py-px text-[10px] font-semibold uppercase tracking-wide",
                                            note.priority === "P1"
                                              ? "bg-brand/10 text-brand"
                                              : note.priority === "P3"
                                                ? "bg-muted text-muted-foreground"
                                                : "bg-neural/10 text-neural"
                                          )}
                                        >
                                          {priorityMeta(note.priority).label}
                                        </span>
                                      </div>
                                      {note.tagline && (
                                        <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                                          {note.tagline}
                                        </p>
                                      )}
                                      {/* Real progress — only when the store has this course */}
                                      {p && (
                                        <p className="mt-1.5 flex items-center gap-2 text-caption">
                                          <span
                                            className="h-1 w-16 overflow-hidden rounded-full bg-muted"
                                            aria-hidden
                                          >
                                            <span
                                              className={cn(
                                                "block h-full rounded-full",
                                                p.done ? "bg-brand" : "bg-brand/70"
                                              )}
                                              style={{ width: `${p.done ? 100 : pct}%` }}
                                            />
                                          </span>
                                          <span
                                            className={cn(
                                              "tabular-nums",
                                              p.done ? "font-semibold text-brand" : "text-muted-foreground"
                                            )}
                                          >
                                            {p.done ? (
                                              <span className="inline-flex items-center gap-1">
                                                <CheckCircle2 className="h-3 w-3" aria-hidden /> Completed
                                              </span>
                                            ) : (
                                              `${p.completed}/${note.totalSections}`
                                            )}
                                          </span>
                                        </p>
                                      )}
                                    </div>

                                    <div className="flex shrink-0 items-center gap-3 text-[11px] text-muted-foreground/80">
                                      <span
                                        className="hidden items-center gap-1 sm:inline-flex"
                                        title={
                                          note.kind === "disorder"
                                            ? "Disorder course"
                                            : "Concept course"
                                        }
                                      >
                                        {note.kind === "disorder" ? (
                                          <Layers className="h-3 w-3" aria-hidden />
                                        ) : (
                                          <Brain className="h-3 w-3" aria-hidden />
                                        )}
                                        {note.kind === "disorder" ? "Disorder" : "Concept"}
                                      </span>
                                      <span className="inline-flex items-center gap-1">
                                        <Clock className="h-3 w-3" aria-hidden />
                                        {note.readingMinutes} min read
                                      </span>
                                      {note.mcqCount > 0 && (
                                        <span
                                          className="hidden items-center gap-1 md:inline-flex"
                                          title="Self-test questions"
                                        >
                                          <ListChecks className="h-3 w-3" aria-hidden />
                                          {note.mcqCount}
                                        </span>
                                      )}
                                      <ChevronRight
                                        className="h-4 w-4 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
                                        aria-hidden
                                      />
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </section>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>
      </main>

      <Footer />
    </div>
  );
}
