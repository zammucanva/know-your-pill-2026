/**
 * Study Mode course catalog — ONE place that knows how to resolve a
 * course slug from the progress store into its total and its route.
 *
 * The store (kyp:progress:v1) is slug-keyed and shared by BOTH course
 * systems: drug lessons (/drugs/<slug>, 26-section contract) and
 * psychiatry courses (/psychiatry/<slug>, the D-2 canonical denominator).
 * Study Mode surfaces used to assume drug-only, which rendered
 * psychiatry courses as "X/0 sections" with broken /drugs/<slug> links
 * — the exact dishonesty the panels' own rules forbid ("no fabricated
 * numbers, no fake routes").
 *
 * Psychiatry totals come from a small GENERATED map (the full registry
 * is too heavy for client bundles); test #88 verifies it stays in sync
 * with the canonical computation. Drug totals keep the existing
 * lessonGroups derivation.
 */
import { drugs } from "@/lib/kyp/data";
import type { CourseProgress } from "@/lib/kyp/progress/progress-store";
import { PSYCHIATRY_COURSE_TOTALS } from "./psychiatry-course-meta.generated";

/** Course outline sizes for the drug registry (unchanged derivation). */
const DRUG_COURSE_TOTALS: Record<string, number> = Object.fromEntries(
  drugs.map((d) => [
    d.slug,
    new Set((d.lessonGroups ?? []).flatMap((l) => l.sectionIds)).size,
  ])
);

/** Is this slug a psychiatry course? (Drug slugs take precedence —
 *  the two registries are disjoint today and this guard keeps the
 *  resolution unambiguous if that ever changes.) */
export function isPsychiatryCourseSlug(slug: string): boolean {
  return (
    !(slug in DRUG_COURSE_TOTALS) && slug in PSYCHIATRY_COURSE_TOTALS
  );
}

/** The learner-completable section total for a stored course slug. */
export function studyCourseTotal(slug: string): number {
  return DRUG_COURSE_TOTALS[slug] ?? PSYCHIATRY_COURSE_TOTALS[slug] ?? 0;
}

/** The course page route for a stored course slug. */
export function studyCourseBase(slug: string): string {
  return isPsychiatryCourseSlug(slug)
    ? `/psychiatry/${slug}`
    : `/drugs/${slug}`;
}

/** The real section anchor to continue at, if the course has one. */
export function continueHref(course: CourseProgress): string {
  const base = studyCourseBase(course.slug);
  if (course.currentSectionId && course.completedSections.length > 0) {
    return `${base}#${course.currentSectionId}`;
  }
  return base;
}
