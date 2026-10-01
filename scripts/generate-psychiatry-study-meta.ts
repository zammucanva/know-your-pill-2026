/**
 * Generator: psychiatry study metadata → static, client-safe module.
 *
 * Emits src/lib/kyp/study/psychiatry-course-meta.generated.ts — the
 * slug → completable-section total map used by the Study Mode surfaces
 * (StudyNextPanel, ContinueStudying, DailyPlan). The totals are the
 * D-2 canonical denominator: courseNavItems(getCourseRenderedSectionIds(
 * course)) minus the hero "top" anchor — EXACTLY what the course page,
 * the section tracker and the library row totals use.
 *
 * The generated module is a plain object with ZERO fs/loader imports so
 * it stays browser-safe (Study Mode components are client components;
 * importing the full 11 MB psychiatry registry there is not acceptable).
 *
 * Run after any change to the course registry:
 *   bun run scripts/generate-psychiatry-study-meta.ts
 *
 * Freshness is verified by tests/psychiatry-site.test.ts #88 (the map
 * must match the canonical computation for all 109 courses).
 */
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import {
  psychiatryCourses,
} from "../src/lib/kyp/data/psychiatry-courses";
import {
  getCourseRenderedSectionIds,
  courseNavItems,
} from "../src/lib/kyp/psychiatry-course-sections";

const totals: Record<string, number> = {};
for (const course of psychiatryCourses) {
  totals[course.slug] = courseNavItems(
    getCourseRenderedSectionIds(course)
  ).filter((i) => i.id !== "top").length;
}

const header = `/**
 * AUTO-GENERATED — KYP Psychiatry study metadata. DO NOT EDIT BY HAND.
 *
 * Generated from the canonical course registry by:
 *   bun run scripts/generate-psychiatry-study-meta.ts
 *
 * One entry per registered psychiatry course: the completable-section
 * total (the D-2 canonical denominator — rendered outline minus the
 * hero "top" anchor). This is the same number the course page, the
 * read tracker and the library rows show, so Study Mode progress
 * fractions can never disagree with them.
 *
 * Static + client-safe on purpose (imported by Study Mode client
 * components; the full registry is too heavy for the browser bundle).
 * Freshness is verified by tests/psychiatry-site.test.ts #88.
 */
export const PSYCHIATRY_COURSE_TOTALS: Record<string, number> = {
`;

const body = Object.keys(totals)
  .sort()
  .map((slug) => `  ${JSON.stringify(slug)}: ${totals[slug]},`)
  .join("\n");

const footer = `
};
`;

const out = header + body + footer;
const target = resolve(
  dirname(process.argv[1] ?? "."),
  "../src/lib/kyp/study/psychiatry-course-meta.generated.ts"
);
writeFileSync(target, out);
console.log(
  `wrote ${target} — ${Object.keys(totals).length} courses, ` +
    `sanity: gad=${totals["gad"]} schizophrenia=${totals["schizophrenia"]} neurotransmitters=${totals["neurotransmitters"]}`
);
