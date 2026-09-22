"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Repeat2,
  Target,
  TrendingUp,
} from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { cn } from "@/lib/utils";
import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";
import {
  rollupByClass,
  mistakePersistence,
  trendSeries,
  MIN_TOPIC_SAMPLE,
} from "@/lib/kyp/analytics/topic-stats";
import type { RunRecord } from "@/lib/kyp/progress/progress-store";

/**
 * /study/analytics — Test History Analytics (NEXT-X5).
 *
 * The full trends view over existing practice history (the N9 chips
 * extended into a page): per-topic and per-class accuracy over time,
 * test duration trends, and mistake persistence — with a
 * minimum-sample rule on EVERY displayed statistic so no vanity or
 * noisy numbers ever render.
 *
 * Everything derives from the device-local kyp:progress:v1 store —
 * no backend, no tracking, no new data collection.
 */

function formatDuration(ms: number): string {
  const s = Math.round(ms / 1000);
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${s % 60}s`;
}

function formatDate(at: number): string {
  return new Date(at).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

const SURFACE_LABEL: Record<RunRecord["surface"], string> = {
  quiz: "Quick MCQs",
  custom: "Custom Test",
  review: "Review session",
};

const MODE_LABEL: Record<RunRecord["mode"], string> = {
  normal: "",
  timed: " · timed",
  exam: " · exam",
  retest: " · retest",
  review: "",
};

export default function AnalyticsPage() {
  const data = useLocalProgress();

  if (!data) {
    // Pre-hydration: the page shell only (no local data rendered).
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Section spacing="relaxed">
            <Container>
              <div className="h-8 w-64 rounded bg-muted/40" aria-hidden />
            </Container>
          </Section>
        </main>
        <Footer />
      </div>
    );
  }

  const classes = rollupByClass(data.answers);
  const topics = Object.entries(data.answers)
    .map(([slug, stats]) => ({
      slug,
      name: stats.topicName || slug,
      topicClass: stats.topicClass,
      answered: stats.answered,
      accuracy: stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 0,
      trend: trendSeries(stats).slice(-20),
    }))
    .sort((a, b) => b.answered - a.answered);

  const persistence = mistakePersistence(data.mistakeBook, data.answers);
  const timedRuns = data.runs.filter((r) => r.durationMs !== null);
  const avgDuration =
    timedRuns.length > 0
      ? timedRuns.reduce((sum, r) => sum + (r.durationMs ?? 0), 0) / timedRuns.length
      : null;
  const hasAnyHistory = data.runs.length > 0 || topics.length > 0;

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
                <span className="font-medium text-foreground">Analytics</span>
              </nav>
              <h1
                className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                Your practice history
              </h1>
              <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground leading-relaxed">
                Trends from your quiz and test history on this device —
                accuracy by topic and class, durations, and where the same
                mistakes come back. Numbers only appear once there is
                enough history to make them meaningful.
              </p>
            </Reveal>

            {!hasAnyHistory ? (
              <Reveal delay={0.06}>
                <div className="mt-10 max-w-xl rounded-xl border border-border/60 bg-card/50 p-5">
                  <p className="text-overline text-muted-foreground mb-2">
                    Nothing to analyse yet
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    Take a quick set or build a custom test and this page
                    fills in — every statistic here comes from your own
                    practice history, stored on this device only.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href="/quiz"
                      className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
                    >
                      Start practicing
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ) : (
              <>
                {/* ── Per-class accuracy (the N9 chips, extended) ── */}
                <Reveal delay={0.06}>
                  <div className="mt-12">
                    <p className="flex items-center gap-2 text-overline text-muted-foreground mb-4">
                      <Target className="h-3.5 w-3.5" aria-hidden />
                      Accuracy by class
                    </p>
                    <div className="overflow-hidden rounded-xl border border-border/60">
                      <table className="w-full border-collapse text-sm">
                        <caption className="sr-only">Per-class accuracy from your practice history</caption>
                        <thead>
                          <tr className="border-b border-border/60 bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                            <th scope="col" className="px-4 py-2.5 font-semibold">Class</th>
                            <th scope="col" className="px-4 py-2.5 font-semibold">Answers</th>
                            <th scope="col" className="px-4 py-2.5 font-semibold">Accuracy</th>
                          </tr>
                        </thead>
                        <tbody>
                          {classes.map((row) => (
                            <tr key={row.key} className="border-b border-border/30 last:border-0">
                              <th scope="row" className="px-4 py-2.5 text-left font-medium text-foreground">
                                {row.label}
                              </th>
                              <td className="px-4 py-2.5 tabular-nums text-foreground/80">{row.answered}</td>
                              <td className="px-4 py-2.5 tabular-nums">
                                {row.enoughData ? (
                                  <span className="font-medium text-foreground">{row.accuracy}%</span>
                                ) : (
                                  <span className="italic text-muted-foreground/60">
                                    not enough data yet
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground/70">
                      Percentages need {MIN_TOPIC_SAMPLE}+ answers per class — below
                      that the number would be noise, so it stays hidden.
                    </p>
                  </div>
                </Reveal>

                {/* ── Per-topic trends ── */}
                <Reveal delay={0.1}>
                  <div className="mt-12">
                    <p className="flex items-center gap-2 text-overline text-muted-foreground mb-4">
                      <TrendingUp className="h-3.5 w-3.5" aria-hidden />
                      Accuracy over time by topic
                    </p>
                    {topics.length === 0 ? (
                      <p className="text-sm text-muted-foreground">No topics practised yet.</p>
                    ) : (
                      <div className="space-y-3">
                        {topics.slice(0, 13).map((topic) => (
                          <div
                            key={topic.slug}
                            className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-border/20 pb-3 last:border-0"
                          >
                            <div className="min-w-0">
                              <p className="truncate text-sm font-medium text-foreground">
                                {topic.name}
                                <span className="ml-2 text-xs font-normal text-muted-foreground">
                                  {topic.topicClass}
                                </span>
                              </p>
                              <p className="text-xs text-muted-foreground tabular-nums">
                                {topic.answered} answers
                                {topic.answered >= MIN_TOPIC_SAMPLE
                                  ? ` · ${topic.accuracy}% accuracy`
                                  : " · not enough data yet"}
                              </p>
                            </div>
                            {/* Recent trend — chronological answer dots */}
                            {topic.trend.length > 0 && (
                              <div className="flex items-center gap-1" aria-hidden>
                                {topic.trend.map((t, i) => (
                                  <span
                                    key={i}
                                    title={`${formatDate(t.at)} — ${t.correct ? "correct" : "incorrect"}`}
                                    className={cn(
                                      "h-2.5 w-2.5 rounded-full",
                                      t.correct ? "bg-success/70" : "bg-emergency/70"
                                    )}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                        <p className="text-xs text-muted-foreground/70">
                          Dots are your last answers per topic (green = correct,
                          red = incorrect), oldest on the left. Accuracy figures
                          respect the same {MIN_TOPIC_SAMPLE}-answer minimum.
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>

                {/* ── Duration trends ── */}
                <Reveal delay={0.14}>
                  <div className="mt-12">
                    <p className="flex items-center gap-2 text-overline text-muted-foreground mb-4">
                      <Clock className="h-3.5 w-3.5" aria-hidden />
                      Test duration
                    </p>
                    {timedRuns.length === 0 ? (
                      <p className="text-sm text-muted-foreground">
                        No completed custom tests with timing yet — durations
                        appear here as you finish tests.
                      </p>
                    ) : (
                      <>
                        <p className="mb-3 text-sm text-foreground/90">
                          <span className="font-serif text-2xl font-bold tabular-nums">
                            {formatDuration(avgDuration ?? 0)}
                          </span>{" "}
                          average over your last {timedRuns.length} timed{" "}
                          {timedRuns.length === 1 ? "test" : "tests"}.
                        </p>
                        <div className="space-y-1.5">
                          {timedRuns.slice(0, 10).map((run, i) => (
                            <div key={`${run.at}-${i}`} className="flex items-center gap-3 text-xs">
                              <span className="w-14 shrink-0 text-muted-foreground tabular-nums">
                                {formatDate(run.at)}
                              </span>
                              <div
                                className="h-2 rounded-full bg-brand/60"
                                style={{
                                  width: `${Math.min(100, Math.round(((run.durationMs ?? 0) / Math.max(...timedRuns.map((r) => r.durationMs ?? 1))) * 100))}%`,
                                }}
                                aria-hidden
                              />
                              <span className="shrink-0 text-muted-foreground tabular-nums">
                                {formatDuration(run.durationMs ?? 0)} · {run.correct}/{run.total}
                                {MODE_LABEL[run.mode]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </Reveal>

                {/* ── Mistake persistence ── */}
                <Reveal delay={0.18}>
                  <div className="mt-12">
                    <p className="flex items-center gap-2 text-overline text-muted-foreground mb-4">
                      <Repeat2 className="h-3.5 w-3.5" aria-hidden />
                      Mistake persistence
                    </p>
                    {persistence.length === 0 ? (
                      <p className="text-sm text-muted-foreground">
                        No repeated misses recorded yet.
                      </p>
                    ) : (
                      <div className="overflow-hidden rounded-xl border border-border/60">
                        <table className="w-full border-collapse text-sm">
                          <caption className="sr-only">How often the same topics come back as wrong</caption>
                          <thead>
                            <tr className="border-b border-border/60 bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                              <th scope="col" className="px-4 py-2.5 font-semibold">Class</th>
                              <th scope="col" className="px-4 py-2.5 font-semibold">Missed 2+ times</th>
                              <th scope="col" className="px-4 py-2.5 font-semibold">To revisit now</th>
                              <th scope="col" className="px-4 py-2.5 font-semibold">Recent wrong rate</th>
                            </tr>
                          </thead>
                          <tbody>
                            {persistence.map((row) => (
                              <tr key={row.key} className="border-b border-border/30 last:border-0">
                                <th scope="row" className="px-4 py-2.5 text-left font-medium text-foreground">
                                  {row.key}
                                </th>
                                <td className="px-4 py-2.5 tabular-nums text-foreground/80">
                                  {row.repeatedMisses}
                                </td>
                                <td className="px-4 py-2.5 tabular-nums text-foreground/80">
                                  {row.openMistakes}
                                </td>
                                <td className="px-4 py-2.5 tabular-nums text-foreground/80">
                                  {row.recentWrongRate !== null ? `${row.recentWrongRate}%` : "—"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    <p className="mt-2 text-xs text-muted-foreground/70">
                      “Missed 2+ times” counts questions answered incorrectly
                      more than once — the ones worth scheduling for spaced
                      review.
                    </p>
                  </div>
                </Reveal>

                {/* ── Run history ── */}
                <Reveal delay={0.22}>
                  <div className="mt-12">
                    <p className="text-overline text-muted-foreground mb-4">
                      Recent runs
                    </p>
                    {data.runs.length === 0 ? (
                      <p className="text-sm text-muted-foreground">No runs recorded yet.</p>
                    ) : (
                      <div className="space-y-px">
                        {data.runs.slice(0, 10).map((run, i) => (
                          <div
                            key={`${run.at}-${i}`}
                            className="flex flex-wrap items-baseline justify-between gap-x-4 border-b border-border/15 py-2.5 text-sm last:border-0"
                          >
                            <span className="font-medium text-foreground">
                              {SURFACE_LABEL[run.surface]}
                              {MODE_LABEL[run.mode]}
                            </span>
                            <span className="tabular-nums text-muted-foreground">
                              {run.correct}/{run.total} correct
                              {run.durationMs !== null ? ` · ${formatDuration(run.durationMs)}` : ""}
                              {" · "}{formatDate(run.at)}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>

                <Reveal delay={0.24}>
                  <div className="mt-12 flex flex-wrap gap-3">
                    <Link
                      href="/study"
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to Study Mode
                    </Link>
                    <Link
                      href="/study/mistakes"
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      Questions to revisit
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              </>
            )}

            <p className="mt-12 max-w-2xl text-xs text-muted-foreground/60 leading-relaxed">
              All analytics are computed from your own local practice
              history — nothing is sent anywhere, nothing is tracked.
              Clearing your progress resets every number on this page.
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
