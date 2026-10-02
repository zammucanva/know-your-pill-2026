"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { GuidedLearningToggle } from "@/components/kyp/ui/guided-learning-toggle";
import { GuidedLearningVisibility } from "@/components/kyp/ui/guided-learning-visibility";
import { MicroQuiz } from "@/components/kyp/ui/micro-quiz";
import { ActiveRecallSection } from "@/components/kyp/ui/active-recall";
import { SectionReadTracker } from "@/components/kyp/ui/section-read-tracker";
import { Container } from "@/components/kyp/ui/container";
import { useCourseProgress } from "@/lib/kyp/progress/use-local-progress";
import { useGuidedLearning } from "@/components/kyp/ui/guided-learning-toggle";
import { courseNavItems, getCourseRenderedSectionIds } from "@/lib/kyp/psychiatry-course-sections";
import { getConceptSectionVisibility, renderableCourse } from "@/lib/kyp/psychiatry-concept-visibility";
import type { PsychiatryCourse } from "@/lib/kyp/data/psychiatry-courses/types";
import type { MicroQuiz as MicroQuizType } from "@/lib/kyp/data";
import type { AdjacentCourseRef } from "../course-recall";
import { CourseNextStep, CourseFaq, CourseReferences } from "../course-recall";
import { CourseDrugNavigation } from "../course-clinical";
import {
  ConceptQuickFacts,
  ConceptKnowledgeGraph,
  ConceptMechanism,
  ConceptExplanatoryLayer,
  ConceptPathways,
  ConceptTimeline,
  ConceptClinicalContext,
  ConceptSymptoms,
  ConceptDiagnosis,
  ConceptDifferential,
  ConceptManagement,
  ConceptPatientGuide,
} from "./concept-sections";
import {
  ConceptIndianPractice,
  ConceptDecisionPathSection,
  ConceptCommonMistakes,
  ConceptExamLens,
  ConceptClinicalCases,
  ConceptHighYield,
} from "./concept-revision";
import { ConceptHero } from "./concept-hero";
import { cn } from "@/lib/utils";

/* ============================================================
   ConceptCourseView — the lesson-at-a-time concept template
   (redesign A).

   Contract:
   - ONE compact lesson navigator: horizontal on desktop, a
     select on mobile. No section rail, no duplicate progress
     counters, no "Lesson N Complete" banners.
   - ONE progress indicator: "Lesson X of Y" with a thin bar
     showing the same section-completion fraction every other
     surface (library, Study Mode) shows.
   - ONE lesson rendered at a time (JS on); every lesson stays
     in the DOM so the no-JS fallback, SEO and print all keep
     the full content (progressive enhancement, not a JS-only
     content system).
   - URL hash per lesson (#lesson-3); links and the browser back
     button work; the last visited lesson persists per page in
     localStorage (try/catch guarded).
   - The section ids, mode gating, read tracking, resume and
     completion denominators are EXACTLY the shared course
     layer's — this is a presentation redesign only.
   ============================================================ */

const storageKey = (slug: string) => `kyp:concept-lesson:${slug}`;

function readStoredLesson(slug: string): number | null {
  try {
    const raw = window.localStorage.getItem(storageKey(slug));
    const n = raw ? parseInt(raw, 10) : NaN;
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

function writeStoredLesson(slug: string, lesson: number) {
  try {
    window.localStorage.setItem(storageKey(slug), String(lesson));
  } catch {
    /* private mode / quota — persistence is best-effort */
  }
}

interface ConceptLesson {
  number: number;
  title: string;
  description: string;
  checkpoint: string;
  sections: string[];
}

/** The fixed concept lesson plan (mirrors the shared course
 *  view's section order). Each section renders only when the
 *  course has the data AND the guided-learning mode shows it. */
function lessonPlan(course: PsychiatryCourse): ConceptLesson[] {
  return [
    { number: 1, sections: ["quick-facts", "knowledge-graph"] },
    { number: 2, sections: ["mechanism", "explanatory-layer", "pathways", "timeline"] },
    { number: 3, sections: ["symptoms", "diagnosis", "differential", "management", "patient-guide"] },
    { number: 4, sections: ["indian-practice", "decision-path", "common-mistakes"] },
    { number: 5, sections: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"] },
    { number: 6, sections: ["active-recall", "faq", "references"] },
  ].map((lesson) => {
    const group = course.lessonGroups.find((g) => g.number === lesson.number);
    return {
      number: lesson.number,
      title: group?.title ?? `Lesson ${lesson.number}`,
      description: group?.description ?? "",
      checkpoint: group?.checkpoint ?? "",
      sections: lesson.sections,
    };
  });
}

function sectionToLesson(plan: ConceptLesson[], sectionId: string): number | null {
  if (sectionId === "top") return null; // the persistent course hero
  for (const lesson of plan) {
    if (lesson.sections.includes(sectionId)) return lesson.number;
  }
  return null;
}

export function ConceptCourseView({
  course,
  adjacent,
}: {
  course: PsychiatryCourse;
  adjacent?: { prev: AdjacentCourseRef | null; next: AdjacentCourseRef | null };
}) {
  const lessons = React.useMemo(() => lessonPlan(course), [course]);
  const quizzes: MicroQuizType[] = course.microQuizzes;
  const rendered = React.useMemo(() => getCourseRenderedSectionIds(course), [course]);
  const visibility = React.useMemo(() => getConceptSectionVisibility(course), [course]);
  // The render-time view of the course: placeholder meta sentences
  // stripped at the PRESENTATION layer only (data files untouched).
  // Visibility and completion stay keyed on the RAW course above —
  // placeholder detection must see the unstripped source text.
  const rc = React.useMemo(() => renderableCourse(course), [course]);
  const navItems = React.useMemo(() => courseNavItems(rendered), [rendered]);
  const completionIds = React.useMemo(
    () => navItems.filter((item) => item.id !== "top").map((item) => item.id),
    [navItems]
  );
  const mode = useGuidedLearning((s) => s.mode);

  // The mode's visible sections — the same rule GuidedLearningVisibility applies
  const modeVisible = React.useMemo(() => {
    const path = course.learningPaths?.find((p) => p.mode === mode);
    return path ? new Set(path.visibleSections) : null;
  }, [course.learningPaths, mode]);
  const modeShows = React.useCallback(
    (sectionId: string) => (modeVisible === null ? true : modeVisible.has(sectionId)),
    [modeVisible]
  );

  // Does a planned section actually render (data + mode)?
  const sectionRenders = React.useCallback(
    (sectionId: string) => {
      switch (sectionId) {
        case "explanatory-layer":
          return (
            visibility.explanatoryLayer &&
            (modeShows("brain") || modeShows("neurotransmitters"))
          );
        case "symptoms":
          // the clinical-context band (epidemiology / etiology) rides
          // with the symptoms flow, so the lesson renders when either
          // carries visible content
          return (
            (rendered.has("symptoms") && modeShows("symptoms")) ||
            (visibility.epidemiology && modeShows("symptoms")) ||
            (visibility.etiology && modeShows("symptoms"))
          );
        case "drug-navigation":
          return rendered.has("drug-navigation") && modeShows("drug-navigation");
        case "patient-guide":
          return visibility.patientGuide && modeShows("patient-guide");
        default:
          return rendered.has(sectionId) && modeShows(sectionId);
      }
    },
    [modeShows, rendered, visibility]
  );

  // Lessons with at least one renderable section in this mode
  const visibleLessons = React.useMemo(
    () => lessons.filter((lesson) => lesson.sections.some(sectionRenders)),
    [lessons, sectionRenders]
  );

  const [activeLesson, setActiveLesson] = React.useState<number | null>(null);
  const [announce, setAnnounce] = React.useState("");
  const panelHeadingRefs = React.useRef<Record<number, HTMLHeadingElement | null>>({});

  // Progress (the same denominator every other surface shows)
  const progress = useCourseProgress(course.slug);
  const completedCount = React.useMemo(
    () => completionIds.filter((id) => progress?.completedSections.includes(id)).length,
    [completionIds, progress]
  );

  const goToLesson = React.useCallback(
    (number: number, focus = true) => {
      setActiveLesson(number);
      writeStoredLesson(course.slug, number);
      const lesson = lessons.find((l) => l.number === number);
      setAnnounce(
        lesson ? `Lesson ${number}: ${lesson.title}.` : `Lesson ${number}.`
      );
      if (focus) {
        window.requestAnimationFrame(() => {
          panelHeadingRefs.current[number]?.focus?.();
        });
      }
    },
    [course.slug, lessons]
  );

  // Initial lesson + hash navigation + back button. A #lesson-N (or
  // a section / #exam-* anchor) hash change runs the FULL goToLesson
  // contract — state, persistence, scroll to the lesson top and
  // focus on the lesson heading (declutter mission fix: the old
  // applyHash only flipped state and never scrolled or focused).
  React.useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash;
      const lessonMatch = hash.match(/^#lesson-(\d+)$/);
      if (lessonMatch) {
        const n = parseInt(lessonMatch[1], 10);
        if (lessons.some((l) => l.number === n)) {
          goToLesson(n);
          return;
        }
      }
      // section anchors (#mechanism, #brain, …) open the owning lesson
      const sectionMatch = hash.match(/^#([a-z-]+)$/);
      if (sectionMatch) {
        const owner = sectionToLesson(lessons, sectionMatch[1]);
        if (owner) {
          goToLesson(owner);
          return;
        }
        // #exam-<tab> anchors restore their owning lesson (5)
        if (sectionMatch[1].startsWith("exam-")) {
          goToLesson(5);
          return;
        }
      }
      // last visited lesson, else lesson 1 (no focus jump on a plain visit)
      const stored = readStoredLesson(course.slug);
      if (stored !== null && lessons.some((l) => l.number === stored)) {
        setActiveLesson(stored);
      } else {
        setActiveLesson(1);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [course.slug, goToLesson, lessons]);

  // If the active lesson is not visible in this mode, move to the
  // first visible one.
  React.useEffect(() => {
    if (activeLesson === null) return;
    if (visibleLessons.length > 0 && !visibleLessons.some((l) => l.number === activeLesson)) {
      setActiveLesson(visibleLessons[0].number);
    }
  }, [activeLesson, visibleLessons]);

  const activeIndex = visibleLessons.findIndex((l) => l.number === activeLesson);
  const prevLesson = activeIndex > 0 ? visibleLessons[activeIndex - 1] : null;
  const nextLesson =
    activeIndex >= 0 && activeIndex < visibleLessons.length - 1
      ? visibleLessons[activeIndex + 1]
      : null;

  // Navigation through the address-bar hash so links + the back
  // button work (hash changes create history entries).
  const navigateToLesson = (number: number) => {
    if (window.location.hash === `#lesson-${number}`) {
      goToLesson(number);
    } else {
      window.location.hash = `lesson-${number}`;
    }
  };

  const quizAfter = (sectionId: string) => quizzes.find((q) => q.afterSectionId === sectionId);
  const renderQuiz = (sectionId: string) => {
    const quiz = quizAfter(sectionId);
    if (!quiz) return null;
    return (
      <Container>
        <MicroQuiz courseSlug={course.slug} quiz={quiz} />
      </Container>
    );
  };

  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case "quick-facts":
        return <ConceptQuickFacts course={rc} />;
      case "knowledge-graph":
        return <ConceptKnowledgeGraph course={rc} />;
      case "mechanism":
        return <ConceptMechanism course={rc} />;
      case "explanatory-layer":
        return <ConceptExplanatoryLayer course={rc} />;
      case "pathways":
        return <ConceptPathways course={rc} />;
      case "timeline":
        return <ConceptTimeline course={rc} />;
      case "symptoms":
        return (
          <>
            <ConceptClinicalContext course={rc} visibility={visibility} />
            <ConceptSymptoms course={rc} />
          </>
        );
      case "diagnosis":
        return <ConceptDiagnosis course={rc} />;
      case "differential":
        return <ConceptDifferential course={rc} />;
      case "management":
        return <ConceptManagement course={rc} />;
      case "patient-guide":
        return <ConceptPatientGuide course={rc} />;
      case "indian-practice":
        return <ConceptIndianPractice course={rc} />;
      case "decision-path":
        return <ConceptDecisionPathSection course={rc} />;
      case "common-mistakes":
        return <ConceptCommonMistakes course={rc} />;
      case "exam-lens":
        return <ConceptExamLens course={rc} />;
      case "clinical-case":
        return <ConceptClinicalCases course={rc} />;
      case "drug-navigation":
        return <CourseDrugNavigation course={rc} />;
      case "high-yield":
        return <ConceptHighYield course={rc} />;
      case "active-recall":
        return (
          <ActiveRecallSection questions={course.activeRecallQuestions} subject={course.title} />
        );
      case "faq":
        return <CourseFaq course={rc} />;
      case "references":
        return <CourseReferences course={rc} />;
      default:
        return null;
    }
  };

  // The mode-gating id for a planned section (the explanatory layer
  // rides the shared brain/neurotransmitters ids).
  const gatingId = (sectionId: string) =>
    sectionId === "explanatory-layer" ? "brain" : sectionId;

  return (
    <>
      <SectionReadTracker
        drugSlug={course.slug}
        title={course.title}
        items={navItems}
        offset={120}
        completionIds={completionIds}
      />

      <div className="fixed right-4 top-20 z-30 hidden sm:block">
        <GuidedLearningToggle />
      </div>

      {/* ===== The persistent course header (the h1 hero — always
            visible, never inside a lesson panel, so the page never
            loses its level-one heading while stepping) ===== */}
      <ConceptHero course={course} />

      {/* ===== The ONE lesson navigator + progress indicator ===== */}
      <div className="sticky top-16 z-20 border-b border-border/40 bg-card/85 backdrop-blur-sm concept-stepper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 py-2.5">
            <p className="text-xs font-semibold tabular-nums text-foreground">
              Lesson {activeIndex >= 0 ? activeIndex + 1 : 1} of {visibleLessons.length || lessons.length}
            </p>
            <div
              className="h-1 min-w-24 flex-1 overflow-hidden rounded-full bg-muted"
              role="progressbar"
              aria-label="Sections completed"
              aria-valuemin={0}
              aria-valuemax={completionIds.length}
              aria-valuenow={completedCount}
            >
              <div
                className="h-full rounded-full bg-brand transition-[width] duration-300"
                style={{
                  width: `${
                    completionIds.length > 0 ? (completedCount / completionIds.length) * 100 : 0
                  }%`,
                }}
              />
            </div>
            <p className="text-caption tabular-nums text-muted-foreground">
              {completedCount}/{completionIds.length} sections
            </p>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => prevLesson && navigateToLesson(prevLesson.number)}
                disabled={!prevLesson}
                aria-label={prevLesson ? `Previous lesson: ${prevLesson.title}` : "No previous lesson"}
                className="kyp-touch-full inline-flex items-center justify-center rounded-full border border-border/70 bg-card text-foreground transition-colors hover:border-brand/40 hover:text-brand disabled:opacity-35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => nextLesson && navigateToLesson(nextLesson.number)}
                disabled={!nextLesson}
                aria-label={nextLesson ? `Next lesson: ${nextLesson.title}` : "No next lesson"}
                className="kyp-touch-full inline-flex items-center justify-center rounded-full border border-border/70 bg-card text-foreground transition-colors hover:border-brand/40 hover:text-brand disabled:opacity-35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </button>
            </div>
          </div>
          {/* Desktop: horizontal lesson chips (scrollable — never widens
              the page). Roving tabindex + Home/End (declutter mission). */}
          <div
            className="hidden gap-1.5 overflow-x-auto pb-2.5 kyp-scroll md:flex"
            role="tablist"
            aria-label="Lessons"
            onKeyDown={(e) => {
              const idx = visibleLessons.findIndex((l) => l.number === activeLesson);
              if (idx < 0) return;
              if (e.key === "ArrowRight") {
                e.preventDefault();
                navigateToLesson(visibleLessons[(idx + 1) % visibleLessons.length].number);
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                navigateToLesson(
                  visibleLessons[(idx - 1 + visibleLessons.length) % visibleLessons.length].number
                );
              } else if (e.key === "Home") {
                e.preventDefault();
                navigateToLesson(visibleLessons[0].number);
              } else if (e.key === "End") {
                e.preventDefault();
                navigateToLesson(visibleLessons[visibleLessons.length - 1].number);
              }
            }}
          >
            {visibleLessons.map((lesson) => {
              const isActive = lesson.number === activeLesson;
              return (
                <button
                  key={lesson.number}
                  type="button"
                  role="tab"
                  id={`lesson-tab-${lesson.number}`}
                  aria-selected={isActive}
                  aria-controls={`lesson-${lesson.number}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => navigateToLesson(lesson.number)}
                  className={cn(
                    "kyp-touch-y flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                    isActive
                      ? "bg-brand-soft/40 text-brand-ink"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "flex h-4 w-4 items-center justify-center rounded-full text-[0.6rem] font-bold",
                      isActive ? "bg-brand text-primary-foreground" : "bg-muted text-muted-foreground"
                    )}
                  >
                    {lesson.number}
                  </span>
                  <span>{lesson.title}</span>
                </button>
              );
            })}
          </div>
          {/* Mobile: the lesson select */}
          <div className="pb-2.5 md:hidden">
            <label className="sr-only" htmlFor="concept-lesson-select">
              Go to lesson
            </label>
            <select
              id="concept-lesson-select"
              value={activeLesson ?? 1}
              onChange={(e) => navigateToLesson(parseInt(e.target.value, 10))}
              className="kyp-touch-y w-full rounded-lg border border-border/70 bg-card px-3 py-2 text-sm text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {visibleLessons.map((lesson) => (
                <option key={lesson.number} value={lesson.number}>
                  {lesson.number}. {lesson.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p aria-live="polite" className="sr-only">
          {announce}
        </p>
      </div>

      {/* ===== The lesson panels (all in the DOM; JS shows one) ===== */}
      {lessons.map((lesson) => {
        const isActive = activeLesson === null || lesson.number === activeLesson;
        const lessonSections = lesson.sections.filter(sectionRenders);
        if (lessonSections.length === 0) return null;
        // Each lesson's footer targets the neighbouring visible lessons BY POSITION
        // (independent of which lesson is currently active, so SSR and
        // client render agree before hydration).
        const thisIdx = visibleLessons.findIndex((l) => l.number === lesson.number);
        const prevOfThis = thisIdx >= 1 ? visibleLessons[thisIdx - 1] : null;
        const nextOfThis = thisIdx >= 0 ? (visibleLessons[thisIdx + 1] ?? null) : null;
        return (
          <section
            key={lesson.number}
            id={`lesson-${lesson.number}`}
            data-concept-lesson={lesson.number}
            aria-label={`Lesson ${lesson.number}: ${lesson.title}`}
            data-inactive={isActive ? undefined : "true"}
            className="concept-lesson"
          >
            {/* Lesson heading — every lesson panel gets an h2 (the
                persistent hero provides the h1 course title) */}
            {(
              <div className="border-b border-border/40 bg-muted/20">
                <Container>
                  <h2
                    ref={(el) => {
                      panelHeadingRefs.current[lesson.number] = el;
                    }}
                    tabIndex={-1}
                    className="scroll-mt-36 pt-8 text-h2 text-foreground outline-none"
                  >
                    <span className="text-overline text-brand-ink">Lesson {lesson.number}</span>
                    <span className="mt-1 block">{lesson.title}</span>
                  </h2>
                  {lesson.description && (
                    <p className="mb-8 mt-2 max-w-[68ch] text-body-lg leading-relaxed text-muted-foreground">
                      {lesson.description}
                    </p>
                  )}
                </Container>
              </div>
            )}

            {lessonSections.map((sectionId) => (
              <React.Fragment key={sectionId}>
                <GuidedLearningVisibility
                  paths={course.learningPaths}
                  sectionId={gatingId(sectionId)}
                >
                  {renderSection(sectionId)}
                </GuidedLearningVisibility>
                {renderQuiz(gatingId(sectionId))}
              </React.Fragment>
            ))}

            {/* End-of-lesson checkpoint: the one-line takeaway only
                (declutter mission — the Continue chrome moved into
                the Previous / Next pager below, and "Where the
                curriculum goes next" renders ONLY inside Lesson 6). */}
            {lesson.checkpoint && (
              <Container className="pb-2 pt-8">
                <div className="rounded-xl border border-brand/20 bg-brand-soft/20 px-5 py-4">
                  <p className="text-overline text-brand-ink">You should now be able to…</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                    {lesson.checkpoint}
                  </p>
                </div>
              </Container>
            )}

            {/* Previous / Next at the bottom of EVERY lesson
                (declutter mission) — 44px targets, keyboard
                operable, and the course-complete state on the last. */}
            <Container className="pb-10">
              <nav
                data-lesson-pager
                aria-label={`Lesson ${lesson.number} navigation`}
                className="flex flex-wrap items-center justify-between gap-3"
              >
                <button
                  type="button"
                  onClick={() => prevOfThis && navigateToLesson(prevOfThis.number)}
                  disabled={!prevOfThis}
                  aria-label={prevOfThis ? `Previous lesson: ${prevOfThis.title}` : "No previous lesson"}
                  className="kyp-touch-y inline-flex min-w-0 items-center gap-1.5 rounded-full border border-border/70 bg-card px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand disabled:opacity-35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <ArrowLeft className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  <span className="truncate">Previous{prevOfThis ? `: ${prevOfThis.title}` : ""}</span>
                </button>
                {nextOfThis ? (
                  <button
                    type="button"
                    onClick={() => navigateToLesson(nextOfThis.number)}
                    aria-label={`Next lesson: ${nextOfThis.title}`}
                    className="kyp-touch-y inline-flex min-w-0 items-center gap-1.5 rounded-full border border-brand/40 bg-brand-soft/40 px-4 py-2 text-xs font-semibold text-brand-ink transition-colors hover:bg-brand hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    <span className="truncate">Next: {nextOfThis.title}</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-caption font-medium text-success">
                    <Check className="h-3.5 w-3.5" aria-hidden /> Course complete
                  </span>
                )}
              </nav>
            </Container>

            {/* Curriculum continuation lives ONLY inside Lesson 6
                (declutter mission) — never after every lesson. */}
            {lesson.number === 6 && (
              <CourseNextStep course={rc} adjacent={adjacent ?? { prev: null, next: null }} />
            )}
          </section>
        );
      })}
    </>
  );
}
