"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  ChevronDown,
  Clock,
  Landmark,
  Lightbulb,
  ListChecks,
  Microscope,
  Stethoscope,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { NoteSection, PsychiatryNote } from "@/lib/oxford/types";
import {
  AUDIENCE_LENSES,
  buildLessonPhases,
  priorityMeta,
  type LearningPhase,
  type PhaseMeta,
} from "@/lib/oxford/learn";
import { MarkdownView } from "./markdown-view";
import { MicroQuiz } from "@/components/kyp/ui/micro-quiz";
import { LearningPath } from "@/components/kyp/ui/learning-path";
import { SectionReadTracker } from "@/components/kyp/ui/section-read-tracker";
import { ResumeBanner } from "@/components/kyp/ui/resume-banner";
import { Container } from "@/components/kyp/ui/container";
import { Badge } from "@/components/kyp/ui/badge";
import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";
import {
  markSectionComplete,
  unmarkSectionComplete,
  syncCourseCompletion,
} from "@/lib/kyp/progress/progress-store";
import { useScrollSpy, type NavItem } from "@/lib/kyp/use-scroll-spy";

/* ─── Phase visual language ─────────────────────────────────────────── */

const PHASE_STYLE: Record<
  LearningPhase,
  { icon: React.ElementType; chip: string }
> = {
  understand: { icon: BookOpen, chip: "bg-brand/10 text-brand" },
  learn: { icon: Microscope, chip: "bg-brand/10 text-brand" },
  india: { icon: Landmark, chip: "bg-[var(--warning)]/10 text-[var(--warning)]" },
  think: { icon: Stethoscope, chip: "bg-emergency/10 text-emergency" },
  remember: { icon: Lightbulb, chip: "bg-neural/10 text-neural" },
  practice: { icon: ListChecks, chip: "bg-neural/10 text-neural" },
  sources: { icon: ChevronDown, chip: "bg-muted text-muted-foreground" },
};

/**
 * Serif display titles for the phase headers. The India phase carries
 * the editorial "The India lens" title — the navigator labels stay the
 * standard PHASE_META wording ("India in Practice") so the six-phase
 * contract reads consistently in the strip, rail and mobile sheet.
 */
const PHASE_DISPLAY: Record<LearningPhase, string> = {
  understand: "Understand",
  learn: "Learn",
  india: "The India lens",
  think: "Think",
  remember: "Remember",
  practice: "Practice",
  sources: "Sources & References",
};

const EMPTY_IDS: string[] = [];

/* ─── Lesson shell props (serialisable from the server page) ────────── */

/** A curriculum neighbour for the bottom prev/next lesson cards. */
export interface LessonRef {
  slug: string;
  title: string;
  priorityLabel: string;
  readingMinutes: number;
}

export interface LessonShellProps {
  note: PsychiatryNote;
  /** Pre-computed on the server: the note's group name + letter. */
  groupName: string | null;
  groupLetter: string | null;
  /** Pre-computed on the server: related notes (slug/title/meta only). */
  related: Array<{
    slug: string;
    title: string;
    tagline: string | null;
    priorityLabel: string;
    readingMinutes: number;
    mcqCount: number;
  }>;
  /** Same-group curriculum neighbours, pre-computed on the server. */
  prevLesson?: LessonRef | null;
  nextLesson?: LessonRef | null;
  selfTestHref: string;
}

/* ─── Lesson shell — the drug-workspace composition ─────────────────── */

/**
 * LessonShell — KYP Psychiatry lesson rendered inside the SAME lesson
 * workspace model the Drug pages use (the canonical KYP shell):
 *
 *   global navbar (page level)
 *   → compact breadcrumb strip
 *   → resume banner          (shared component, psychiatry adapter props)
 *   → sticky six-phase strip (directly below the resume band)
 *   → efficient lesson hero  (breadcrumb path, metadata row, serif title,
 *                             identity card right)
 *   → reading column at a controlled measure, one coherent workspace
 *     with the fixed left progress rail
 *
 * Psychiatry semantics stay Psychiatry: the six learning phases, note
 * structure, cases, Teaching Points, India in Practice, MCQs and the
 * quiet Sources disclosure all render through the same phase blocks as
 * before — only the shell composition changes.
 */
export function LessonShell({
  note,
  groupName,
  groupLetter,
  related,
  prevLesson = null,
  nextLesson = null,
  selfTestHref,
}: LessonShellProps) {
  const phases = React.useMemo(() => buildLessonPhases(note), [note]);
  const prio = priorityMeta(note.frontmatter.priority);
  const course = `psychiatry/${note.frontmatter.slug}`;

  // ── Progress (existing kyp:progress:v1 architecture ONLY) ──────────
  // Reactive-derivation contract: subscribe to the TOP-LEVEL store
  // snapshot (new object identity on every store update) and derive the
  // per-course record inline. The store mutates the course record in
  // place, so memoising on the record itself (useCourseProgress) goes
  // stale — this is the same pattern the drug pages' sticky nav uses.
  const progressData = useLocalProgress();
  const courseRecord = progressData?.courses[course] ?? null;
  // The hero "top" anchor is position-tracking only (ResumeBanner
  // parity) — it must never count toward the displayed X/N progress, so
  // the counter stays 14 (disorder) / 7 (concept).
  const completedIds = React.useMemo(
    () => (courseRecord?.completedSections ?? EMPTY_IDS).filter((id) => id !== "top"),
    [courseRecord]
  );
  const completedCount = completedIds.length;

  // Six numbered learning phases (sources stays the quiet disclosure).
  const learningPhases = React.useMemo(
    () => phases.phases.filter((p) => p.meta.key !== "sources"),
    [phases]
  );
  const phaseCount = learningPhases.length;

  // Trackable sections: every rendered section anchor except the MCQ
  // self-test section (its content renders as parsed quizzes, not as a
  // readable section). Objectives (section 2) never enter the phase map;
  // the sources disclosure keeps always-present anchors and stays
  // trackable. 16-section disorder note → 14; 8-section concept → 7.
  const trackableSections = React.useMemo(
    () => phases.phases.filter((p) => p.meta.key !== "practice").flatMap((p) => p.sections),
    [phases]
  );
  const totalSections = trackableSections.length;

  const navItems = React.useMemo<NavItem[]>(
    () => [
      // The hero is the first trackable anchor — same contract as the
      // drug course rail (DRUG_COURSE_NAV_ITEMS starts with
      // "top"/Overview). Including it here means the read tracker's
      // observer band pins a position on mount, so a fresh visit records
      // currentSectionId "top" and the ResumeBanner behaves exactly
      // like the drug lessons on revisit (brief §11 normalization).
      { id: "top", label: "Overview" },
      ...phases.phases
        .filter((p) => p.meta.key !== "practice")
        .flatMap((p) =>
          p.sections.map((s) => ({
            id: `${p.meta.key}-${s.id}`,
            label: shortTitle(s.title),
          }))
        ),
    ],
    [phases]
  );

  // Scrollspy over the section anchors — same geometry as the read
  // tracker (120px offset: sticky navbar + phase strip band).
  const { activeId } = useScrollSpy(
    React.useMemo(() => navItems.map((n) => n.id), [navItems]),
    120
  );
  // While the hero occupies the scrollspy band the lesson is at its
  // opening — highlight the first phase, exactly as the pre-hero-anchor
  // default did ("top" is not itself a phase key).
  const activePhase = activeId && activeId !== "top"
    ? (activeId.split("-")[0] as LearningPhase)
    : learningPhases[0]?.meta.key;

  const completedSet = React.useMemo(() => new Set(completedIds), [completedIds]);
  const phaseComplete = React.useCallback(
    (key: LearningPhase) => {
      const p = learningPhases.find((x) => x.meta.key === key);
      if (!p || p.sections.length === 0) return false;
      if (key === "practice") return completedCount === totalSections && totalSections > 0;
      return p.sections.every((s) => completedSet.has(`${key}-${s.id}`));
    },
    [learningPhases, completedSet, completedCount, totalSections]
  );

  // Manual section completion — the same drug-workspace affordance the
  // medication course rail offers (manual ticks share the store with
  // dwell-based tracking and re-evaluate course completion). Completion
  // evaluates against the phase sections only (the displayed X/N), so
  // the hero "top" anchor is tracked for position but never required —
  // legacy completed courses keep their completedAt.
  const outlineIds = React.useMemo(
    () => navItems.filter((n) => n.id !== "top").map((n) => n.id),
    [navItems]
  );
  const toggleSection = React.useCallback(
    (sectionId: string) => {
      if (completedSet.has(sectionId)) {
        unmarkSectionComplete(course, sectionId);
      } else {
        markSectionComplete(course, sectionId);
      }
      syncCourseCompletion(course, outlineIds);
    },
    [course, outlineIds, completedSet]
  );

  // Audience lenses land on the first entry phase this lesson actually has.
  const presentPhases = React.useMemo(
    () => new Set(phases.phases.map((p) => p.meta.key)),
    [phases]
  );
  const lensHref = React.useCallback(
    (entryPhases: LearningPhase[]) => {
      const target = entryPhases.find((k) => presentPhases.has(k) && k !== "sources");
      return target ? `#phase-${target}` : "#lesson-top";
    },
    [presentPhases]
  );

  // Rail + sheet groups: the trackable phases only. Practice renders as
  // the self-test phase (its MCQ section anchor never exists in the DOM —
  // the phase strip chip covers #phase-practice), and sources stays a
  // group whose sr-only anchors keep deep links working.
  const navGroups = React.useMemo(() => {
    const groups: Array<{ key: string; label: string; sections: Array<{ id: string; label: string }> }> = [];
    learningPhases.forEach((p, i) => {
      if (p.meta.key === "practice" || p.sections.length === 0) return;
      groups.push({
        key: p.meta.key,
        label: `Phase ${i + 1} · ${p.meta.label}`,
        sections: p.sections.map((s) => ({
          id: `${p.meta.key}-${s.id}`,
          label: shortTitle(s.title),
        })),
      });
    });
    const sources = phases.phases.find((p) => p.meta.key === "sources");
    if (sources && sources.sections.length > 0) {
      groups.push({
        key: "sources",
        label: "Sources",
        sections: sources.sections.map((s) => ({
          id: `sources-${s.id}`,
          label: shortTitle(s.title),
        })),
      });
    }
    return groups;
  }, [learningPhases, phases]);

  const groupHref = groupLetter ? `/psychiatry/library#group-${groupLetter}` : "/psychiatry/library";

  return (
    <>
      {/* ─── LEFT PROGRESS RAIL (desktop) — drug-workspace geometry ── */}
      <aside
        aria-label="Lesson progress"
        className="hidden lg:block fixed left-0 top-16 z-30 w-48 xl:w-52 border-r border-border/40 bg-card/40 backdrop-blur-sm"
      >
        <div className="px-3 py-3">
          {/* Progress header — compact */}
          <div className="flex items-center justify-between text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground/80">
            <span>Progress</span>
            <span className="tabular-nums">{completedCount}/{totalSections}</span>
          </div>
          <div className="mt-1 h-0.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-brand transition-all duration-300"
              style={{ width: `${totalSections > 0 ? Math.min(100, (completedCount / totalSections) * 100) : 0}%` }}
            />
          </div>

          {/* Section list — grouped by learning phase, file-tree feel */}
          <nav className="kyp-scroll mt-3 max-h-[calc(100vh-12rem)] overflow-y-auto" aria-label="Lesson sections">
            {navGroups.map((group) => (
              <div key={group.key} className="mb-1.5">
                <p className="px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground/60">
                  {group.label}
                </p>
                {group.sections.map((item) => {
                  const isActive = activeId === item.id;
                  const isCompleted = completedSet.has(item.id);
                  return (
                    <div key={item.id} className="group flex items-center gap-0.5">
                      <button
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "flex flex-1 items-center gap-1.5 rounded px-2 py-1 text-[0.72rem] font-normal leading-tight transition-colors text-left truncate",
                          isActive
                            ? "bg-brand/10 text-brand-ink font-medium"
                            : isCompleted
                              ? "text-foreground/50 hover:bg-accent/40"
                              : "text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                        )}
                      >
                        <span className="truncate">{item.label}</span>
                      </button>
                      {/* Manual completion checkbox — minimal */}
                      <button
                        type="button"
                        onClick={() => toggleSection(item.id)}
                        aria-label={isCompleted ? `Mark ${item.label} as not complete` : `Mark ${item.label} as complete`}
                        className={cn(
                          "flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border transition-colors opacity-0 group-hover:opacity-100",
                          isCompleted
                            ? "border-success bg-success text-white opacity-100"
                            : "border-border text-transparent hover:border-brand"
                        )}
                      >
                        {isCompleted && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                      </button>
                    </div>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* ─── MOBILE: progress pill + grouped bottom sheet ──────────── */}
      <MobileLessonNav
        groups={navGroups}
        activeId={activeId}
        completedSet={completedSet}
        completedCount={completedCount}
        totalSections={totalSections}
        selfTestHref={selfTestHref}
      />

      {/* ─── WORKSPACE — main reserves the fixed rail's width ──────── */}
      <main id="lesson-top" className="flex-1 min-w-0 pt-16 lg:pl-52 xl:pl-56">
        {/* ===== BREADCRUMB STRIP ===== */}
        <div className="border-b border-border/40 bg-muted/20">
          <Container>
            <nav className="flex items-center gap-2 py-2 text-xs text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/psychiatry" className="hover:text-brand">Psychiatry</Link>
              <span aria-hidden>/</span>
              <Link href={groupHref} className="hover:text-brand">
                {groupName ?? "Library"}
              </Link>
              <span aria-hidden>/</span>
              <span className="font-medium text-foreground">{note.frontmatter.title}</span>
            </nav>
          </Container>
        </div>

        {/* ===== RESUME BANNER (shared component, psychiatry adapter) ===== */}
        <ResumeBanner
          courseSlug={course}
          items={navItems}
          noun="lesson"
          patientFilter={false}
        />

        {/* ===== STICKY SIX-PHASE STRIP — directly below the resume band ===== */}
        <div className="sticky top-16 z-20 border-b border-border/40 bg-background/85 backdrop-blur-sm">
          <Container>
            <div data-lesson-strip className="kyp-scroll flex items-center gap-1.5 overflow-x-auto py-2">
              {learningPhases.map((p, i) => {
                const isActive = p.meta.key === activePhase;
                const isRead = phaseComplete(p.meta.key);
                return (
                  <React.Fragment key={p.meta.key}>
                    {i > 0 && (
                      <span
                        className={cn("h-px w-5 shrink-0", isRead ? "bg-brand/50" : "bg-border")}
                        aria-hidden
                      />
                    )}
                    <a
                      href={`#phase-${p.meta.key}`}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
                        isActive
                          ? "bg-brand-soft/40 text-brand-ink"
                          : isRead
                            ? "text-brand/60 hover:text-brand"
                            : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-4 w-4 items-center justify-center rounded-full text-[0.6rem] font-bold tabular-nums",
                          isActive
                            ? "bg-brand text-primary-foreground"
                            : isRead
                              ? "bg-brand/20 text-brand"
                              : "bg-muted text-muted-foreground"
                        )}
                      >
                        {isRead ? <Check className="h-2.5 w-2.5" strokeWidth={3} /> : i + 1}
                      </span>
                      <span className="hidden sm:inline">{p.meta.label}</span>
                      <span className="sm:hidden">{i + 1}</span>
                    </a>
                  </React.Fragment>
                );
              })}
            </div>
          </Container>
        </div>

        {/* ===== LESSON HERO — efficient, identity card right ===== */}
        <section id="top" aria-labelledby="lesson-title" className="relative overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-12">
          <div className="pointer-events-none absolute inset-0 kyp-grid-bg opacity-30" aria-hidden />
          <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-brand/10 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-neural/10 blur-3xl" aria-hidden />

          <Container className="relative">
            {/* Learning path — Home → Psychiatry → domain → lesson */}
            <div className="mb-4">
              <LearningPath
                path={["Psychiatry", groupName ?? "Lessons", note.frontmatter.title]}
                links={["/psychiatry", groupHref, undefined]}
              />
            </div>

            <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
              <div className="min-w-0">
                {/* Metadata row above the title — drug hero grammar */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="brand" size="sm">
                    <Brain className="h-2.5 w-2.5" />
                    KYP Psychiatry
                  </Badge>
                  <span className="text-muted-foreground/70">
                    {note.kind === "disorder" ? "Disorder lesson" : "Concept note"}
                  </span>
                  {groupName && (
                    <>
                      <span className="text-muted-foreground/40">·</span>
                      <span>{groupName}</span>
                    </>
                  )}
                  <span className="text-muted-foreground/40">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {note.readingMinutes} min read
                  </span>
                  <span className="text-muted-foreground/40">·</span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[11px] font-semibold",
                      prio.label === "Core"
                        ? "bg-brand/10 text-brand"
                        : prio.label === "Reference"
                          ? "bg-muted text-muted-foreground"
                          : "bg-neural/10 text-neural"
                    )}
                    title={prio.hint}
                  >
                    {prio.label}
                  </span>
                </div>

                <h1
                  id="lesson-title"
                  className="mt-3 text-display text-foreground leading-[1.05]"
                >
                  {note.frontmatter.title}
                </h1>

                {note.tagline && (
                  <p className="mt-4 max-w-2xl text-base text-foreground/80 leading-relaxed">
                    {note.tagline}
                  </p>
                )}
              </div>

              {/* Identity card — Lesson / Study / Reviewed */}
              <LessonIdentityCard
                note={note}
                groupName={groupName}
                phaseCount={phaseCount}
              />
            </div>
          </Container>
        </section>

        {/* ===== BODY — one coherent workspace with the rail ===== */}
        <div className="py-10 pb-16">
          <Container>
            {/* Reading progress — existing architecture, honest dwell tracking.
                completionIds keeps course completion pinned to the phase
                sections (the displayed X/N) while items includes the hero
                "top" anchor for position tracking. */}
            <SectionReadTracker
              drugSlug={course}
              title={note.frontmatter.title}
              items={navItems}
              offset={120}
              completionIds={outlineIds}
            />

            {/* Reading measure — controlled, aligned with the hero copy edge */}
            <div className="max-w-[46rem] space-y-12">
              {/* Learning objectives */}
              {phases.objectives && (
                <section aria-labelledby="objectives-heading" className="rounded-xl border border-brand/25 bg-brand/[0.04] p-5 sm:p-6">
                  <h2 id="objectives-heading" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand">
                    <ListChecks className="h-4 w-4" aria-hidden /> Learning objectives
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">After this lesson you should be able to:</p>
                  <MarkdownView blocks={phases.objectives.blocks} className="mt-3" />
                </section>
              )}

              {/* Audience lenses — presentation-only entry points */}
              <section aria-label="Choose your learning lens" className="grid gap-3 sm:grid-cols-3">
                {AUDIENCE_LENSES.map((lens) => (
                  <a
                    key={lens.key}
                    href={lensHref(lens.entryPhases)}
                    className="group rounded-lg border border-border bg-card p-3.5 transition-colors hover:border-brand/40"
                  >
                    <p className="text-sm font-semibold text-foreground group-hover:text-brand">{lens.label}</p>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{lens.blurb}</p>
                  </a>
                ))}
              </section>

              {/* Phase sections with quiet checkpoints between them */}
              <div className="space-y-12">
                {phases.phases.map((p, idx) => {
                  const isSources = p.meta.key === "sources";
                  const learningIndex = isSources ? -1 : learningPhases.findIndex((x) => x.meta.key === p.meta.key);
                  const nextLearning = !isSources && learningIndex >= 0 && learningIndex < learningPhases.length - 1
                    ? learningPhases[learningIndex + 1]
                    : null;
                  return (
                    <React.Fragment key={p.meta.key}>
                      <PhaseBlock
                        meta={p.meta}
                        index={learningIndex >= 0 ? learningIndex + 1 : undefined}
                        sections={p.sections}
                        note={note}
                      />
                      {nextLearning && nextLearning.meta.key !== "sources" && (
                        <PhaseCheckpoint
                          index={learningIndex + 1}
                          total={phaseCount}
                          completedCount={completedCount}
                          totalSections={totalSections}
                          next={nextLearning.meta}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Prev / next curriculum neighbours — drug page grammar */}
              {(prevLesson || nextLesson) && (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {prevLesson ? (
                    <LessonPrevNextCard lesson={prevLesson} direction="prev" />
                  ) : (
                    <div className="hidden sm:block" />
                  )}
                  {nextLesson ? (
                    <LessonPrevNextCard lesson={nextLesson} direction="next" />
                  ) : (
                    <div className="hidden sm:block" />
                  )}
                </div>
              )}

              {/* Related lessons */}
              {related.length > 0 && (
                <section aria-labelledby="related-heading">
                  <h2 id="related-heading" className="text-lg font-semibold tracking-tight text-foreground">
                    Continue the curriculum
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {groupName ? `More from ${groupName}` : "Related psychiatry lessons"}
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/psychiatry/${r.slug}`}
                        className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-brand/40"
                      >
                        <p className="text-sm font-semibold text-foreground group-hover:text-brand">{r.title}</p>
                        {r.tagline && <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{r.tagline}</p>}
                        <p className="mt-2 text-[11px] text-muted-foreground/70">
                          {r.priorityLabel} · {r.readingMinutes} min{r.mcqCount ? ` · ${r.mcqCount} MCQs` : ""}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}

/* ─── Identity card — drug HeroIdentityCard geometry, psychiatry data ── */

function LessonIdentityCard({
  note,
  groupName,
  phaseCount,
}: {
  note: PsychiatryNote;
  groupName: string | null;
  phaseCount: number;
}) {
  const prio = priorityMeta(note.frontmatter.priority);
  return (
    <aside
      aria-label="Lesson identity"
      className="rounded-xl border border-border/70 bg-card p-4 shadow-[var(--shadow-soft)]"
    >
      <div>
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">Lesson</p>
        <dl className="mt-2 space-y-1.5 text-xs">
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-muted-foreground">Type</dt>
            <dd className="font-medium text-foreground">
              {note.kind === "disorder" ? "Disorder lesson" : "Concept note"}
            </dd>
          </div>
          {groupName && (
            <div className="flex items-baseline justify-between gap-2">
              <dt className="text-muted-foreground">Domain</dt>
              <dd className="text-right font-medium text-foreground">{groupName}</dd>
            </div>
          )}
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-muted-foreground">Priority</dt>
            <dd className="font-medium text-foreground" title={prio.hint}>
              {prio.label}
            </dd>
          </div>
        </dl>
      </div>

      <div className="my-3 h-px bg-border/50" />

      <div>
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">Study</p>
        <dl className="mt-2 space-y-1.5 text-xs">
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" /> Reading
            </dt>
            <dd className="font-medium text-foreground tabular-nums">{note.readingMinutes} min</dd>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-muted-foreground">Phases</dt>
            <dd className="font-medium text-foreground tabular-nums">{phaseCount}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-muted-foreground">MCQs</dt>
            <dd className="font-medium text-foreground tabular-nums">{note.mcqs.length}</dd>
          </div>
        </dl>
      </div>

      <div className="my-3 h-px bg-border/50" />

      <div>
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">Reviewed</p>
        <dl className="mt-2 space-y-1.5 text-xs">
          <div className="flex items-baseline justify-between gap-2">
            <dt className="text-muted-foreground">Last reviewed</dt>
            <dd className="font-medium text-foreground">{formatReviewDate(note.frontmatter.last_reviewed)}</dd>
          </div>
        </dl>
      </div>
    </aside>
  );
}

/* ─── Prev / next lesson card — drug DrugPrevNext grammar ───────────── */

function LessonPrevNextCard({
  lesson,
  direction,
}: {
  lesson: LessonRef;
  direction: "prev" | "next";
}) {
  const isNext = direction === "next";
  return (
    <Link
      href={`/psychiatry/${lesson.slug}`}
      className={cn(
        "group flex min-w-0 items-center gap-3 rounded-xl border border-border/70 bg-card p-4 transition-all hover:border-brand/40 hover:shadow-[var(--shadow-soft)]",
        isNext && "sm:flex-row-reverse sm:text-right"
      )}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft/60 text-brand">
        {isNext ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
          {isNext ? "Next lesson" : "Previous lesson"}
        </p>
        <p className="mt-0.5 truncate text-sm font-medium text-foreground">{lesson.title}</p>
        <p className="truncate text-xs text-muted-foreground">
          {lesson.priorityLabel} · {lesson.readingMinutes} min
        </p>
      </div>
    </Link>
  );
}

/* ─── Phase block ───────────────────────────────────────────────────── */

function PhaseBlock({
  meta,
  index,
  sections,
  note,
}: {
  meta: PhaseMeta;
  /** 1-based learning phase number (undefined for sources). */
  index?: number;
  sections: NoteSection[];
  note: PsychiatryNote;
}) {
  const isPractice = meta.key === "practice";
  const isSources = meta.key === "sources";

  if (isPractice) {
    return (
      <section aria-labelledby="phase-practice-heading" id="phase-practice" className="scroll-mt-24">
        <PhaseHeader meta={meta} index={index} />
        <div className="mt-5 space-y-6">
          {note.mcqs.map((mcq) => (
            <MicroQuiz
              key={mcq.id}
              quiz={{
                id: mcq.id,
                question: mcq.question,
                options: mcq.options,
                correctIndex: mcq.correctIndex,
                explanation: mcq.explanation,
                afterSectionId: `practice-${mcq.id}`,
              }}
              courseSlug={`psychiatry/${note.frontmatter.slug}`}
              courseQuizCount={note.mcqs.length}
            />
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Want a mixed run across every lesson?{" "}
          <Link href="/psychiatry/self-test" className="font-medium text-brand hover:underline">
            Open the Psychiatry Self-Test
          </Link>
          .
        </p>
      </section>
    );
  }

  if (isSources) {
    return <SourcesSection meta={meta} sections={sections} note={note} />;
  }

  return (
    <section aria-labelledby={`phase-${meta.key}-heading`} id={`phase-${meta.key}`} className="scroll-mt-24">
      <PhaseHeader meta={meta} index={index} />
      <div
        className={cn(
          "mt-5 space-y-10",
          meta.key === "india" &&
            "rounded-2xl border border-[var(--warning)]/25 bg-[var(--warning)]/[0.04] p-5 sm:p-7"
        )}
      >
        {sections.map((s) => (
          <div key={`${meta.key}-${s.id}`} id={`${meta.key}-${s.id}`} className="scroll-mt-24">
            <h3 className="mb-3 text-[17px] font-semibold tracking-tight text-foreground">
              {s.title}
            </h3>
            <MarkdownView blocks={s.blocks} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Phase header — numbered, serif ────────────────────────────────── */

function PhaseHeader({ meta, index }: { meta: PhaseMeta; index?: number }) {
  const style = PHASE_STYLE[meta.key];
  const Icon = style.icon;
  return (
    <div className="border-b border-border/70 pb-4">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span
          className={cn(
            "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums",
            style.chip
          )}
          aria-hidden
        >
          {index ?? <Icon className="h-4 w-4" />}
        </span>
        <h2
          id={`phase-${meta.key}-heading`}
          className="font-serif text-[1.35rem] font-semibold leading-snug tracking-tight text-foreground"
        >
          {index !== undefined && (
            <span className="mr-1.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Phase {index} ·
            </span>
          )}
          {PHASE_DISPLAY[meta.key]}
        </h2>
        <Icon className="h-4 w-4 shrink-0 text-muted-foreground/70" aria-hidden />
      </div>
      <p className="mt-2 pl-11 text-xs leading-relaxed text-muted-foreground">{meta.intent}</p>
    </div>
  );
}

/* ─── Quiet checkpoint between learning phases ─────────────────────── */

function PhaseCheckpoint({
  index,
  total,
  completedCount,
  totalSections,
  next,
}: {
  index: number;
  total: number;
  completedCount: number;
  totalSections: number;
  next: PhaseMeta;
}) {
  return (
    <aside
      aria-label={`Phase ${index} checkpoint`}
      className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-xl border border-dashed border-border/70 bg-muted/20 px-5 py-3.5"
    >
      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        <Check className="h-3.5 w-3.5 text-brand" aria-hidden />
        Phase {index} of {total} complete
      </span>
      <span className="hidden h-3 w-px bg-border sm:block" aria-hidden />
      <span className="text-xs tabular-nums text-muted-foreground">
        {completedCount}/{totalSections} sections read
      </span>
      <a
        href={`#phase-${next.key}`}
        className="inline-flex items-center gap-1 text-xs font-semibold text-brand transition-colors hover:text-brand/80"
      >
        Continue to {next.label}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </a>
    </aside>
  );
}

/* ─── Sources & References (secondary, expandable, provenance-kept) ──── */

function SourcesSection({
  meta,
  sections,
  note,
}: {
  meta: PhaseMeta;
  sections: NoteSection[];
  note: PsychiatryNote;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <section aria-labelledby="phase-sources-heading" className="rounded-xl border border-border bg-muted/30 p-5 sm:p-6">
      {/* Anchor targets always present — deep links land even when the
          disclosure is collapsed (the items inside render without ids). */}
      {sections.map((s) => (
        <span key={`${meta.key}-${s.id}`} id={`${meta.key}-${s.id}`} className="sr-only" />
      ))}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="sources-content"
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="flex items-center gap-2.5">
          <BookOpen className="h-4 w-4 text-muted-foreground" aria-hidden />
          <span id="phase-sources-heading" className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Sources &amp; References
          </span>
        </span>
        <ChevronDown
          className={cn("h-4 w-4 text-muted-foreground transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>
      <p className="mt-2 text-xs text-muted-foreground">
        Evidence sources for this lesson, plus editorial provenance. Reviewed{" "}
        {note.frontmatter.last_reviewed || "2026-09"}.
      </p>
      {open && (
        <div id="sources-content" className="mt-4 space-y-6">
          {sections.map((s) => (
            <div key={`${meta.key}-${s.id}`}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {s.title}
              </h3>
              <MarkdownView blocks={s.blocks} className="text-sm" />
            </div>
          ))}
          <p className="border-t border-border pt-3 text-[11px] leading-relaxed text-muted-foreground/80">
            Provenance: {note.frontmatter.source_map}. KYP presents these notes as original
            teaching material for learning purposes.
          </p>
        </div>
      )}
    </section>
  );
}

/* ─── Mobile: floating progress pill + grouped bottom sheet ─────────── */

function ProgressRing({ value, total }: { value: number; total: number }) {
  const pct = total > 0 ? Math.min(1, value / total) : 0;
  const r = 9;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
      <circle cx="12" cy="12" r={r} fill="none" strokeWidth="3" className="stroke-muted" />
      <circle
        cx="12"
        cy="12"
        r={r}
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        className="stroke-brand transition-[stroke-dashoffset] duration-500"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - pct)}
        transform="rotate(-90 12 12)"
      />
    </svg>
  );
}

function MobileLessonNav({
  groups,
  activeId,
  completedSet,
  completedCount,
  totalSections,
  selfTestHref,
}: {
  groups: Array<{
    key: string;
    label: string;
    sections: Array<{ id: string; label: string }>;
  }>;
  activeId: string;
  completedSet: Set<string>;
  completedCount: number;
  totalSections: number;
  selfTestHref: string;
}) {
  const [open, setOpen] = React.useState(false);
  const openButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);

  // Escape + focus management + scroll lock while the sheet is open.
  React.useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        openButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    openButtonRef.current?.focus();
  };

  return (
    <>
      {/* Floating progress pill — the drug-lesson mobile affordance */}
      <button
        ref={openButtonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="lesson-section-sheet"
        aria-label="Open section navigator"
        className="lg:hidden fixed bottom-20 left-4 z-40 flex items-center gap-2 rounded-full border border-border/70 bg-card/90 backdrop-blur-xl px-4 py-2.5 shadow-[var(--shadow-lift)]"
      >
        <ProgressRing value={completedCount} total={totalSections} />
        <span className="text-xs font-semibold tabular-nums">
          {completedCount}/{totalSections}
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Section navigator"
          className="fixed inset-0 z-50"
        >
          <button
            type="button"
            tabIndex={-1}
            aria-label="Close section navigator"
            onClick={close}
            className="absolute inset-0 cursor-default bg-foreground/25"
          />
          <div
            id="lesson-section-sheet"
            className="kyp-scroll absolute inset-x-0 bottom-0 max-h-[78vh] overflow-y-auto rounded-t-2xl border-t border-border bg-card shadow-xl"
          >
            <div className="sticky top-0 z-10 border-b border-border/60 bg-card px-4 pb-3 pt-3">
              <div className="mx-auto h-1 w-10 rounded-full bg-muted" aria-hidden />
              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Section navigator
                  </p>
                  <p className="mt-0.5 font-serif text-lg font-semibold tabular-nums text-foreground">
                    {completedCount} of {totalSections} read
                  </p>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={close}
                  aria-label="Close section navigator"
                  className="rounded-full border border-border p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>
              <div
                className="mt-2 h-1 overflow-hidden rounded-full bg-muted"
                role="progressbar"
                aria-valuenow={completedCount}
                aria-valuemin={0}
                aria-valuemax={totalSections}
                aria-label="Sections read"
              >
                <div
                  className="h-full rounded-full bg-brand transition-all"
                  style={{
                    width: `${totalSections > 0 ? Math.min(100, Math.round((completedCount / totalSections) * 100)) : 0}%`,
                  }}
                />
              </div>
            </div>
            <nav className="px-3 py-3" aria-label="Lesson sections">
              {groups.map((p) => (
                <div key={p.key} className="pb-2">
                  <p className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                    {p.label}
                  </p>
                  {p.sections.map((s) => {
                    const done = completedSet.has(s.id);
                    const isActive = activeId === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          scrollToSection(s.id);
                          close();
                        }}
                        className={cn(
                          "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm transition-colors text-left",
                          isActive
                            ? "bg-brand-soft/40 font-medium text-brand-ink"
                            : done
                              ? "bg-brand-soft/30 font-medium text-brand-ink"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        <span className="min-w-0 truncate">{s.label}</span>
                        {done && <Check className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden />}
                      </button>
                    );
                  })}
                </div>
              ))}
              {/* Self-test entry — always reachable from the navigator */}
              <div className="border-t border-border/60 px-2 pb-1 pt-3">
                <Link
                  href={selfTestHref}
                  onClick={close}
                  className="flex items-center justify-between rounded-lg bg-brand px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
                >
                  Self-test
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

/* ─── Helpers ───────────────────────────────────────────────────────── */

/** Same behaviour as the drug rail's scrollToSection (smooth, block:start). */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** "2026-06" → "Jun 2026" (month precision — no fabricated day). */
function formatReviewDate(value: string | undefined): string {
  const v = value || "2026-09";
  const m = /^(\d{4})-(\d{2})$/.exec(v);
  if (!m) return v;
  return new Date(Number(m[1]), Number(m[2]) - 1, 1).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });
}

function shortTitle(title: string): string {
  const t = title
    .replace(/\s*\(de-identified\)\s*/i, "")
    .replace(/^Active recall prompts$/i, "Active recall")
    .replace(/^FAQ: asked the way patients ask it$/i, "FAQ")
    .replace(/^What happens in the body\/brain.*$/i, "Body & brain")
    .replace(/^In one line \+ overview$/i, "Overview");
  return t.length > 34 ? t.slice(0, 32) + "…" : t;
}
