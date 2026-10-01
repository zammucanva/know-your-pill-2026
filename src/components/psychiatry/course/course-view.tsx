import * as React from "react";
import { StickyLearningNav } from "@/components/kyp/ui/sticky-learning-nav";
import { GuidedLearningToggle } from "@/components/kyp/ui/guided-learning-toggle";
import { GuidedLearningVisibility } from "@/components/kyp/ui/guided-learning-visibility";
import { MicroQuiz } from "@/components/kyp/ui/micro-quiz";
import { Checkpoint } from "@/components/kyp/ui/checkpoint";
import { ActiveRecallSection } from "@/components/kyp/ui/active-recall";
import { LessonProgress } from "@/components/kyp/ui/lesson-progress";
import { SectionReadTracker } from "@/components/kyp/ui/section-read-tracker";
import { ResumeBanner } from "@/components/kyp/ui/resume-banner";
import { PatientHidden } from "@/components/kyp/ui/patient-hidden";
import { Container } from "@/components/kyp/ui/container";

import {
  CourseHero,
  CourseQuickFacts,
  CourseKnowledgeGraph,
  CourseMechanism,
  CourseBrain,
  CourseNeurotransmitters,
  CoursePathways,
  CourseTimeline,
} from "./course-foundations";
import {
  CourseClinicalContext,
  CourseSymptoms,
  CourseDiagnosis,
  CourseDifferential,
  CourseManagement,
  CourseDrugNavigation,
  CoursePatientGuide,
} from "./course-clinical";
import {
  CourseIndianPractice,
  CourseDecisionPath,
  CourseCommonMistakes,
  CourseExamLens,
  CourseClinicalCases,
  CourseHighYield,
} from "./course-india-exam";
import { CourseFaq, CourseReferences, CourseNextStep, type AdjacentCourseRef } from "./course-recall";

import { courseNavItems, getCourseRenderedSectionIds } from "@/lib/kyp/psychiatry-course-sections";
import type { PsychiatryCourse } from "@/lib/kyp/data/psychiatry-courses/types";
import type { LessonGroup } from "@/lib/kyp/data";
import { ConceptCourseView } from "./concept/concept-course-view";

/**
 * PsychiatryCourseView — the six-lesson KYP learning journey.
 *
 * Mirrors the drug course architecture (the learning oracle) with the
 * psychiatry content model:
 *   Lesson 1 Foundations → Lesson 2 Mechanism & Neuroscience →
 *   Lesson 3 Clinical Practice → Lesson 4 Indian Context →
 *   Lesson 5 Exam Revision → Lesson 6 Active Recall
 *
 * Mode gating (Patient / MBBS / NEET-PG / Resident) reuses the SAME
 * guided-learning store the drug lessons use — one selection site-wide.
 * Progress, section tracking and resume reuse the SAME per-course store
 * the note shell uses (slug-keyed) — existing progress for a migrated
 * topic keeps working.
 */
/** Lesson dispatcher — the concept template for concept courses,
 *  the shared endless-scroll layout for disorder courses. Kept as a
 *  hook-free wrapper so both implementations own their hook order. */
export function PsychiatryCourseView({
  course,
  adjacent,
}: {
  course: PsychiatryCourse;
  adjacent?: { prev: AdjacentCourseRef | null; next: AdjacentCourseRef | null };
}) {
  if (course.kind === "concept") {
    return <ConceptCourseView course={course} adjacent={adjacent} />;
  }
  return <DisorderCourseView course={course} adjacent={adjacent} />;
}

function DisorderCourseView({
  course,
  adjacent,
}: {
  course: PsychiatryCourse;
  adjacent?: { prev: AdjacentCourseRef | null; next: AdjacentCourseRef | null };
}) {
  const lessons = course.lessonGroups;
  const quizzes = course.microQuizzes;
  const hasLessons = lessons.length > 0;

  // Sections this course actually renders (drives nav + progress).
  // Single authority: getCourseRenderedSectionIds (shared with the
  // library's per-course totals so the two surfaces never disagree).
  const rendered = React.useMemo(() => getCourseRenderedSectionIds(course), [course]);

  const navItems = React.useMemo(() => courseNavItems(rendered), [rendered]);

  // Completion counts the tracked sections excluding the hero "top"
  // anchor (position-tracking only — the same contract the finalized
  // note shell uses, so legacy progress stays compatible).
  const completionIds = React.useMemo(
    () => navItems.filter((item) => item.id !== "top").map((item) => item.id),
    [navItems]
  );

  // The single canonical learner-completable outline: nav items minus
  // the hero "top" anchor — the exact list `completionIds` derives from
  // and the Library's per-course totals use (test 85 pins the equality).
  // Every surface that displays or syncs a denominator gets THIS list:
  //   StickyLearningNav  — X/N counter, tick checkboxes, toggle sync
  //   ResumeBanner      — "X/N sections" + completed state
  // Only SectionReadTracker keeps the FULL navItems (with "top") so the
  // observer band pins the hero position for resume; its completion
  // sync uses completionIds, which already excludes "top".
  const completionNavItems = React.useMemo(
    () => navItems.filter((item) => item.id !== "top"),
    [navItems]
  );

  const quizAfter = (sectionId: string) => quizzes.find((q) => q.afterSectionId === sectionId);
  const visibility = (sectionId: string, children: React.ReactNode) => (
    <GuidedLearningVisibility paths={course.learningPaths} sectionId={sectionId}>
      {children}
    </GuidedLearningVisibility>
  );
  const renderQuiz = (sectionId: string) => {
    const quiz = quizAfter(sectionId);
    if (!quiz) return null;
    return <Container><MicroQuiz courseSlug={course.slug} quiz={quiz} /></Container>;
  };
  const checkpoint = (index: number) => {
    const lesson = lessons[index];
    if (!hasLessons || !lesson) return null;
    return (
      <Container>
        <PatientHidden>
          <Checkpoint
            lessonNumber={lesson.number}
            lessonTitle={lesson.title}
            message={lesson.checkpoint}
            nextLessonTitle={lessons[index + 1]?.title}
          />
        </PatientHidden>
      </Container>
    );
  };

  return (
    <>
      <StickyLearningNav items={completionNavItems} drugSlug={course.slug} />
      <div className="fixed right-4 top-20 z-30 hidden sm:block">
        <GuidedLearningToggle />
      </div>

      {/* Progress + resume — same slug-keyed course store the note
          shell uses: existing progress for a migrated topic keeps
          working (position ids change; completion is re-derived). */}
      <SectionReadTracker
        drugSlug={course.slug}
        title={course.title}
        items={navItems}
        offset={120}
        completionIds={completionIds}
      />
      <ResumeBanner courseSlug={course.slug} items={completionNavItems} noun="lesson" patientFilter={false} />

      {/* Lesson progress strip (hidden in Patient mode) */}
      {hasLessons && (
        <div className="sticky top-16 z-20">
          <PatientHidden>
            <LessonProgress lessons={lessons} />
          </PatientHidden>
        </div>
      )}

      {/* ===== LESSON 1: Foundations ===== */}
      {visibility("top", <CourseHero course={course} />)}
      {visibility("quick-facts", <CourseQuickFacts course={course} />)}
      {visibility("knowledge-graph", <CourseKnowledgeGraph course={course} />)}
      {checkpoint(0)}

      {/* ===== LESSON 2: Mechanism & Neuroscience ===== */}
      {visibility("mechanism", <CourseMechanism course={course} />)}
      {visibility("brain", <CourseBrain course={course} />)}
      {visibility("neurotransmitters", <CourseNeurotransmitters course={course} />)}
      {visibility("pathways", <CoursePathways course={course} />)}
      {visibility("timeline", <CourseTimeline course={course} />)}
      {renderQuiz("mechanism")}
      {renderQuiz("timeline")}
      {checkpoint(1)}

      {/* ===== LESSON 3: Clinical Practice ===== */}
      {visibility("symptoms", <CourseClinicalContext course={course} />)}
      {visibility("symptoms", <CourseSymptoms course={course} />)}
      {visibility("diagnosis", <CourseDiagnosis course={course} />)}
      {renderQuiz("symptoms")}
      {visibility("differential", <CourseDifferential course={course} />)}
      {renderQuiz("differential")}
      {visibility("management", <CourseManagement course={course} />)}
      {renderQuiz("management")}
      {visibility("patient-guide", <CoursePatientGuide course={course} />)}
      {checkpoint(2)}

      {/* ===== LESSON 4: Indian Context ===== */}
      {visibility("indian-practice", <CourseIndianPractice course={course} />)}
      {visibility("decision-path", <CourseDecisionPath course={course} />)}
      {visibility("common-mistakes", <CourseCommonMistakes course={course} />)}
      {renderQuiz("common-mistakes")}
      {checkpoint(3)}

      {/* ===== LESSON 5: Exam Revision ===== */}
      {visibility("exam-lens", <CourseExamLens course={course} />)}
      {visibility("clinical-case", <CourseClinicalCases course={course} />)}
      {visibility("drug-navigation", <CourseDrugNavigation course={course} />)}
      {visibility("high-yield", <CourseHighYield course={course} />)}
      {checkpoint(4)}

      {/* ===== LESSON 6: Active Recall ===== */}
      {visibility("active-recall", <ActiveRecallSection questions={course.activeRecallQuestions} subject={course.title} />)}
      {visibility("faq", <CourseFaq course={course} />)}
      {visibility("references", <CourseReferences course={course} />)}
      {checkpoint(5)}

      {/* ===== Curriculum continuation (closed journey end) ===== */}
      <CourseNextStep course={course} adjacent={adjacent ?? { prev: null, next: null }} />
    </>
  );
}
