"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BookMarked,
  ChevronDown,
  ListChecks,
  RotateCcw,
  X,
  Zap,
} from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { cn } from "@/lib/utils";
import {
  clearAllMistakes,
  clearMistake,
  getMistakeBookStats,
  type MistakeEntry,
} from "@/lib/kyp/progress/progress-store";
import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";
import { verifyDrugHref } from "@/lib/kyp/drug-course-sections";
import { stageRetestRequest } from "@/lib/kyp/custom-test/retest-handoff";

/**
 * /study/mistakes — the Mistake Book (NOW-N1).
 *
 * One honest, cross-test list of "questions to revisit": every
 * question answered incorrectly in Quick MCQs (/quiz) or Custom Test
 * (/quiz/custom), kept on this device. A question answered correctly
 * anywhere later leaves the book automatically.
 *
 * Framing rules (from the commissioning spec):
 *   - NEUTRAL language — no scores, no streaks, no shaming. These are
 *     "questions to revisit", not failures.
 *   - Every entry deep-links to the exact anchored section that teaches
 *     it (NOW-N6), with a page-root fallback.
 *   - Empty state invites a quiz — it never pads with placeholders.
 *
 * "Retest me on these" (NOW-N2) hands the exact identity set to the
 * Custom Test runner via a one-shot sessionStorage request.
 */

function timeAgo(ms: number): string {
  const diffMin = Math.floor((Date.now() - ms) / 60000);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);
  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay < 7) return `${diffDay}d ago`;
  return new Date(ms).toLocaleDateString();
}

export default function MistakeBookPage() {
  const router = useRouter();
  const data = useLocalProgress();
  const [filter, setFilter] = React.useState<string>("all");
  const [confirmingClearAll, setConfirmingClearAll] = React.useState(false);

  const entries = React.useMemo(
    () =>
      Object.values(data?.mistakeBook ?? {}).sort(
        (a, b) => b.lastWrongAt - a.lastWrongAt
      ),
    [data]
  );

  const stats = React.useMemo(
    () => getMistakeBookStats(),
    [data] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const filtered = React.useMemo(
    () =>
      filter === "all"
        ? entries
        : entries.filter((e) => e.source.sourceClass === filter),
    [entries, filter]
  );

  const startRetest = (set: MistakeEntry[]) => {
    if (set.length === 0) return;
    const previousChosen: Record<string, string> = {};
    for (const entry of set) previousChosen[entry.identity] = entry.chosenOption;
    const staged = stageRetestRequest({
      identities: set.map((e) => e.identity),
      label: "Questions to revisit",
      previousChosen,
    });
    router.push(staged ? "/quiz/custom?retest=1" : "/quiz/custom");
  };

  /* ── Pre-hydration: render nothing (matches the server markup) ── */
  if (!data) return null;

  /* ── GENUINE EMPTY STATE — invites a quiz, no placeholders ── */
  if (entries.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <FloatingSearch variant="floating" />
        <main className="flex-1 pt-16">
          <Section spacing="relaxed">
            <Container>
              <Reveal>
                <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
                  <Link href="/study" className="hover:text-brand">Study Mode</Link>
                  <span aria-hidden>›</span>
                  <span className="font-medium text-foreground">Mistake Book</span>
                </nav>
                <p className="text-overline text-brand mb-6">Mistake Book</p>
                <h1
                  className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
                >
                  Nothing to revisit yet
                </h1>
                <p className="mt-6 max-w-xl text-body-lg text-muted-foreground leading-relaxed">
                  Questions you answer incorrectly in practice and custom
                  tests are kept here, so you can come back to exactly
                  those — with the section that teaches each one. Miss
                  something, and this page remembers it for you.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/quiz"
                    className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
                  >
                    <Zap className="h-4 w-4" />
                    Start Practice
                  </Link>
                  <Link
                    href="/quiz/custom"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <ListChecks className="h-4 w-4" />
                    Build a Custom Test
                  </Link>
                </div>
              </Reveal>
            </Container>
          </Section>
        </main>
        <Footer />
      </div>
    );
  }

  /* ── THE BOOK ─────────────────────────────────────────────────── */
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />
      <main className="flex-1 pt-16">
        <Section spacing="relaxed">
          <Container>
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
                <Link href="/study" className="hover:text-brand">Study Mode</Link>
                <span aria-hidden>›</span>
                <span className="font-medium text-foreground">Mistake Book</span>
              </nav>
              <p className="text-overline text-brand mb-4">Mistake Book</p>
              <h1
                className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                Questions to revisit
              </h1>
              <p className="mt-6 max-w-xl text-body-lg text-muted-foreground leading-relaxed">
                Every question you&apos;ve answered incorrectly in practice
                and custom tests, kept on this device. Answer one correctly
                later and it leaves this list on its own — or clear it
                yourself once you&apos;re confident.
              </p>
            </Reveal>

            {/* Honest stats line */}
            <Reveal delay={0.08}>
              <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <BookMarked className="h-4 w-4" aria-hidden />
                <span className="tabular-nums">
                  {entries.length}{" "}
                  {entries.length === 1 ? "question" : "questions"}
                </span>
                {stats.bySource.length > 0 && (
                  <>
                    <span aria-hidden>·</span>
                    <span className="tabular-nums">
                      across {stats.bySource.length}{" "}
                      {stats.bySource.length === 1 ? "topic" : "topics"}
                    </span>
                  </>
                )}
                <span aria-hidden>·</span>
                <span>last missed {timeAgo(entries[0].lastWrongAt)}</span>
              </p>
            </Reveal>

            {/* Retest the current selection */}
            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => startRetest(filtered)}
                  disabled={filtered.length === 0}
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <RotateCcw className="h-4 w-4" />
                  Retest me on these
                  <span className="ml-1 text-sm font-normal opacity-80">
                    · {filtered.length}
                  </span>
                </button>
                {filter !== "all" && (
                  <button
                    type="button"
                    onClick={() => setFilter("all")}
                    className="text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
                  >
                    Show all {entries.length} instead
                  </button>
                )}
              </div>
            </Reveal>

            {/* Class filter chips */}
            <Reveal delay={0.16}>
              <div className="mt-8">
                <p className="text-overline text-muted-foreground mb-3">Filter by class</p>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Filter questions by class">
                  <button
                    type="button"
                    aria-pressed={filter === "all"}
                    onClick={() => setFilter("all")}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                      filter === "all"
                        ? "border-brand bg-brand-soft/40 text-brand"
                        : "border-border text-muted-foreground hover:border-brand/30 hover:text-foreground"
                    )}
                  >
                    All · {entries.length}
                  </button>
                  {stats.byClass.map((c) => (
                    <button
                      key={c.sourceClass}
                      type="button"
                      aria-pressed={filter === c.sourceClass}
                      onClick={() => setFilter(c.sourceClass)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                        filter === c.sourceClass
                          ? "border-brand bg-brand-soft/40 text-brand"
                          : "border-border text-muted-foreground hover:border-brand/30 hover:text-foreground"
                      )}
                    >
                      {c.sourceClass || "Other"} · {c.count}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Entry cards */}
            <div className="mt-10 space-y-6">
              {filtered.map((entry, i) => (
                <Reveal key={entry.identity} delay={Math.min(i * 0.03, 0.2)}>
                  <article className="rounded-xl border border-border/60 bg-card/50 p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground/70">
                      <span>From </span>
                      <Link
                        href={verifyDrugHref(entry.source.sectionHref)}
                        className="font-medium text-foreground hover:text-brand"
                      >
                        {entry.source.sourceName}
                      </Link>
                      <span>· {entry.source.sectionLabel}</span>
                      <span className="rounded-full border border-border/60 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                        {entry.source.sourceClass || "General"}
                      </span>
                      {entry.wrongCount > 1 && (
                        <span className="tabular-nums">
                          · missed {entry.wrongCount} times
                        </span>
                      )}
                      <span>· {timeAgo(entry.lastWrongAt)}</span>
                    </div>

                    <h2 className="mt-4 font-serif text-lg font-semibold leading-snug text-foreground">
                      {entry.question}
                    </h2>

                    <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      <div className="rounded-lg border border-emergency/40 bg-emergency-soft/20 p-3 text-sm">
                        <p className="text-overline text-muted-foreground mb-1">You chose</p>
                        <p className="text-foreground [overflow-wrap:anywhere]">{entry.chosenOption}</p>
                      </div>
                      <div className="rounded-lg border border-success/40 bg-success-soft/20 p-3 text-sm">
                        <p className="text-overline text-muted-foreground mb-1">Correct answer</p>
                        <p className="font-medium text-foreground [overflow-wrap:anywhere]">
                          {entry.options[entry.correctIndex]}
                        </p>
                      </div>
                    </div>

                    <details className="group mt-3">
                      <summary className="inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-brand">
                        <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" aria-hidden />
                        Why
                      </summary>
                      <p className="mt-2 rounded-lg border border-border/60 bg-muted/30 p-3.5 text-sm leading-relaxed text-foreground/90">
                        {entry.explanation}
                      </p>
                    </details>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/40 pt-4">
                      <Link
                        href={verifyDrugHref(entry.source.sectionHref)}
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-brand"
                      >
                        Review this section
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                      <button
                        type="button"
                        onClick={() => clearMistake(entry.identity)}
                        aria-label={`Clear this question: ${entry.question.slice(0, 60)}`}
                        className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-muted-foreground/60 transition-colors hover:text-muted-foreground"
                      >
                        <X className="h-3 w-3" aria-hidden />
                        I&apos;m confident — clear
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Clear-all — deliberate two-step confirm */}
            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border/30 pt-6">
                <p className="text-xs text-muted-foreground/60">
                  Kept on this device only — never uploaded.
                </p>
                {confirmingClearAll ? (
                  <div role="group" aria-label="Confirm clearing the Mistake Book" className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-foreground" aria-live="polite">
                      Clear all {entries.length} questions?
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        clearAllMistakes();
                        setConfirmingClearAll(false);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-emergency px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-emergency/90"
                    >
                      Yes, clear all
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmingClearAll(false)}
                      className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/40"
                    >
                      <X className="h-3 w-3" aria-hidden />
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setConfirmingClearAll(true)}
                    className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-muted-foreground/50 transition-colors hover:text-muted-foreground"
                  >
                    <RotateCcw className="h-3 w-3" aria-hidden />
                    Clear the whole book
                  </button>
                )}
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
