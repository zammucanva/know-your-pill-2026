"use client";

import * as React from "react";
import Link from "next/link";
import { Brain, CheckCircle2, ChevronRight, Clock, Search, ListChecks, Layers } from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { cn } from "@/lib/utils";
import type { PsychiatryNote } from "@/lib/oxford/types";
import { priorityMeta } from "@/lib/oxford/learn";

/**
 * /psychiatry/library — the KYP Psychiatry Library.
 *
 * A curriculum browser, not a file browser: domain → topic, with
 * importance (Core/Supporting/Reference), estimated time, MCQ
 * availability and learner progress. Source metadata is secondary.
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

export function LibraryClient({ groups }: { groups: LibraryGroup[] }) {
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState<"all" | "core" | "disorder" | "concept">("all");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return groups
      .map((g) => ({
        ...g,
        notes: g.notes.filter((n) => {
          if (q && !n.title.toLowerCase().includes(q) && !n.slug.includes(q)) return false;
          if (filter === "core") return n.priority === "P1";
          if (filter === "disorder") return n.kind === "disorder";
          if (filter === "concept") return n.kind === "concept";
          return true;
        }),
      }))
      .filter((g) => g.notes.length > 0);
  }, [groups, query, filter]);

  const totalNotes = React.useMemo(() => groups.reduce((s, g) => s + g.notes.length, 0), [groups]);
  const shown = filtered.reduce((s, g) => s + g.notes.length, 0);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main id="main-content" className="flex-1">
      <section className="border-b border-border bg-gradient-to-b from-neural/[0.07] to-transparent">
        <Container>
          <div className="py-10 sm:py-14">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link href="/psychiatry" className="inline-flex items-center gap-1.5 font-semibold text-neural hover:underline">
                <Brain className="h-3.5 w-3.5" aria-hidden /> KYP Psychiatry
              </Link>
              <span aria-hidden>/</span>
              <span aria-current="page">Library</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Psychiatry Library
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              The full curriculum — {totalNotes} lessons across {groups.length} domains.
              Filter by importance, format or your own progress.
            </p>

            {/* Search + filters */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1 sm:max-w-xs">
                <label htmlFor="psychiatry-library-search" className="sr-only">
                  Search Psychiatry
                </label>
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" aria-hidden />
                <input
                  id="psychiatry-library-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Psychiatry…"
                  className="w-full rounded-lg border border-border bg-card py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div role="group" aria-label="Filter lessons" className="flex flex-wrap gap-1.5">
                {(
                  [
                    ["all", "All"],
                    ["core", "Core"],
                    ["disorder", "Disorders"],
                    ["concept", "Concepts"],
                  ] as const
                ).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFilter(key)}
                    aria-pressed={filter === key}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                      filter === key
                        ? "bg-brand text-white"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            {query && (
              <p className="mt-3 text-xs text-muted-foreground" role="status">
                {shown} of {totalNotes} lessons match “{query}”.
              </p>
            )}
          </div>
        </Container>
      </section>

      <Section spacing="tight">
        <Container>
          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-sm font-medium text-foreground">No lessons match your filters.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setFilter("all");
                }}
                className="mt-2 text-sm text-brand hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              {filtered.map((group) => (
                <section key={group.letter} aria-labelledby={`group-${group.letter}`} className="scroll-mt-24" id={`group-${group.letter}`}>
                  <div className="flex items-baseline justify-between gap-3 border-b border-border pb-2">
                    <h2 id={`group-${group.letter}`} className="text-lg font-semibold tracking-tight text-foreground">
                      <span className="mr-2 font-mono text-xs text-muted-foreground/60">{group.letter}</span>
                      {group.name}
                    </h2>
                    <p className="shrink-0 text-xs text-muted-foreground">
                      {group.notes.length} lessons
                    </p>
                  </div>
                  <ul className="mt-3 divide-y divide-border/60">
                    {group.notes.map((note) => (
                      <li key={note.slug}>
                        <Link
                          href={`/psychiatry/${note.slug}`}
                          className="group flex items-center gap-3 py-3 transition-colors hover:bg-muted/40 sm:gap-4"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                              <p className="text-sm font-medium text-foreground group-hover:text-brand">
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
                          </div>
                          <div className="flex shrink-0 items-center gap-3 text-[11px] text-muted-foreground/80">
                            <span className="hidden items-center gap-1 sm:inline-flex">
                              {note.kind === "disorder" ? (
                                <Layers className="h-3 w-3" aria-hidden />
                              ) : (
                                <Brain className="h-3 w-3" aria-hidden />
                              )}
                              {note.kind === "disorder" ? "Disorder" : "Concept"}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Clock className="h-3 w-3" aria-hidden />
                              {note.readingMinutes}m
                            </span>
                            {note.mcqCount > 0 && (
                              <span className="hidden items-center gap-1 md:inline-flex">
                                <ListChecks className="h-3 w-3" aria-hidden />
                                {note.mcqCount}
                              </span>
                            )}
                            {note.completedSections > 0 && (
                              <span className="inline-flex items-center gap-1 text-brand">
                                <CheckCircle2 className="h-3 w-3" aria-hidden />
                                {note.completedSections}/{note.totalSections}
                              </span>
                            )}
                            <ChevronRight
                              className="h-4 w-4 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
                              aria-hidden
                            />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </Container>
      </Section>
      </main>

      <Footer />
    </div>
  );
}
