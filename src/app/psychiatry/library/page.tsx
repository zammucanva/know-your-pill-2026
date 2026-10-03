import type { Metadata } from "next";

import { loadCorpus } from "@/lib/oxford/loader";
import { LEARNER_SECTION_ORDER } from "@/lib/oxford/curriculum";
import { getPsychiatryCourse } from "@/lib/kyp/data/psychiatry-courses";
import { getCourseRenderedSectionIds, courseNavItems } from "@/lib/kyp/psychiatry-course-sections";
import { LibraryClient, type LibraryGroup } from "./library-client";

/**
 * /psychiatry/library — server shell for the KYP Psychiatry Library.
 *
 * The group/ordering authority is the canonical topic index
 * (00-topic-index.md); notes are read-only. This presentation layer
 * applies the curriculum-normalization rules (2026-09-30):
 *   1. Q. Foundations & sciences is the FIRST learner-facing section
 *      (ordering lives here, never in the immutable source index).
 *   2. Within a section, lessons run Foundational/Core (P1) → Core
 *      clinical → Supporting (P2) → Reference (P3), keeping the
 *      index order inside each tier.
 *   3. Learner-facing identity (title/subtitle/type) comes from the
 *      migrated course layer (all 109 are migrated); the note
 *      frontmatter is the immutable fallback only.
 *   4. Per-course totals come from the course outline the learner
 *      actually walks (getCourseRenderedSectionIds — the same
 *      registry the course view and progress system use).
 * Learner progress is merged in client-side from the localStorage
 * progress store (see library-client.tsx useLocalProgress).
 */
export const metadata: Metadata = {
  title: "Psychiatry Library. KYP Psychiatry",
  description:
    "Browse the full psychiatry curriculum: 109 lessons across 18 clinical domains, filterable by domain, importance, format and progress.",
  keywords: ["psychiatry library", "psychiatry curriculum", "psychiatry topics", "KYP Psychiatry"],
  openGraph: {
    title: "Psychiatry Library. KYP Psychiatry",
    description: "109 lessons across 18 clinical domains: the full psychiatry curriculum.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

export default function LibraryPage() {
  const corpus = loadCorpus();

  // Curriculum-normalization ordering: Foundations first, then the
  // clinical progression A–P, R (the source index order minus Q).
  const TIER_ORDER: Record<string, number> = { P1: 0, P2: 1, P3: 2 };

  const groups: LibraryGroup[] = [...corpus.groups]
    .sort(
      (a, b) =>
        LEARNER_SECTION_ORDER.indexOf(a.letter as never) -
        LEARNER_SECTION_ORDER.indexOf(b.letter as never)
    )
    .map((g) => ({
      letter: g.letter,
      name: g.name,
      notes: g.noteSlugs
        .map((slug) => corpus.bySlug.get(slug))
        .filter((n): n is NonNullable<typeof n> => Boolean(n))
        .map((n) => {
          const course = getPsychiatryCourse(n.frontmatter.slug);
          // Per-course total — EXACTLY the tracked-outline count the
          // course view + progress system use (courseNavItems over the
          // rendered ids, minus the hero anchor), so a 100% library bar
          // always means a 100% course completion.
          const outline = course
            ? courseNavItems(getCourseRenderedSectionIds(course)).filter((i) => i.id !== "top")
                .length
            : 0;
          return {
            slug: n.frontmatter.slug,
            // Normalized course-layer title/subtitle/type (see header note);
            // the note frontmatter is the immutable fallback.
            title: course?.title ?? n.frontmatter.title,
            tagline: course?.tagline ?? n.tagline,
            priority: n.frontmatter.priority,
            readingMinutes: n.readingMinutes,
            mcqCount: n.mcqs.length,
            // Course-layer type (semantic classification — e.g. treatment
            // and services topics are concepts even when the source note
            // used the 16-section disorder template).
            kind: course?.kind ?? n.kind,
            completedSections: 0,
            totalSections: outline || n.sections.filter((s) => s.number !== 2).length,
          };
        })
        // Foundational/Core → Core clinical → Supporting → Reference,
        // index order preserved inside each tier (stable sort).
        .sort((a, b) => TIER_ORDER[a.priority] - TIER_ORDER[b.priority]),
    }));

  return <LibraryClient groups={groups} />;
}
