import type { Metadata } from "next";

import { loadCorpus, corpusStats } from "@/lib/oxford/loader";
import { getPsychiatryCourse } from "@/lib/kyp/data/psychiatry-courses";
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
 *   3. The learner-facing Title/Subtitle come from the migrated course
 *      layer when available (all 109 are migrated), falling back to
 *      the note frontmatter only if a course were absent.
 * Learner progress numbers are merged in client-side (localStorage) —
 * the server render shows the curriculum itself.
 */
export const metadata: Metadata = {
  title: "Psychiatry Library — KYP Psychiatry",
  description:
    "Browse the full psychiatry curriculum — 109 lessons across 18 clinical domains, filterable by domain, importance, format and progress.",
  keywords: ["psychiatry library", "psychiatry curriculum", "psychiatry topics", "KYP Psychiatry"],
  openGraph: {
    title: "Psychiatry Library — KYP Psychiatry",
    description: "109 lessons across 18 clinical domains — the full psychiatry curriculum.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

export default function LibraryPage() {
  const corpus = loadCorpus();
  const stats = corpusStats();

  // Curriculum-normalization ordering: Foundations first, then the
  // clinical progression A–P, R (the source index order minus Q).
  const SECTION_ORDER = ["Q", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R"];
  const TIER_ORDER: Record<string, number> = { P1: 0, P2: 1, P3: 2 };

  const groups: LibraryGroup[] = [...corpus.groups]
    .sort((a, b) => SECTION_ORDER.indexOf(a.letter) - SECTION_ORDER.indexOf(b.letter))
    .map((g) => ({
      letter: g.letter,
      name: g.name,
      notes: g.noteSlugs
        .map((slug) => corpus.bySlug.get(slug))
        .filter((n): n is NonNullable<typeof n> => Boolean(n))
        .map((n) => ({
          slug: n.frontmatter.slug,
          // Normalized course-layer title/subtitle (see header note);
          // the note frontmatter title is the immutable fallback.
          title: getPsychiatryCourse(n.frontmatter.slug)?.title ?? n.frontmatter.title,
          tagline: getPsychiatryCourse(n.frontmatter.slug)?.tagline ?? n.tagline,
          priority: n.frontmatter.priority,
          readingMinutes: n.readingMinutes,
          mcqCount: n.mcqs.length,
          kind: n.kind,
          completedSections: 0,
          totalSections: n.sections.filter((s) => s.number !== 2).length,
        }))
        // Foundational/Core → Core clinical → Supporting → Reference,
        // index order preserved inside each tier (stable sort).
        .sort((a, b) => TIER_ORDER[a.priority] - TIER_ORDER[b.priority]),
    }));

  return <LibraryClient groups={groups} />;
}
