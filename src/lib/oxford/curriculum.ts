/**
 * KYP Psychiatry — curriculum data access (SERVER ONLY).
 *
 * Everything here calls the fs-based corpus loader; it must only be
 * imported by server components / scripts / tests — never from a
 * client component (client bundles cannot read the filesystem).
 *
 * Client components receive these results as props from server pages.
 */
import type { PsychiatryGroup, PsychiatryNote } from "./types";
import { loadCorpus } from "./loader";

/* ─── Related notes (same group, index order) ────────────────────────── */

export function relatedNotes(note: PsychiatryNote, limit = 6): PsychiatryNote[] {
  const corpus = loadCorpus();
  const group = corpus.groupBySlug.get(note.frontmatter.slug);
  if (!group) return [];
  return group.noteSlugs
    .filter((slug) => slug !== note.frontmatter.slug)
    .map((slug) => corpus.bySlug.get(slug))
    .filter((n): n is PsychiatryNote => Boolean(n))
    .slice(0, limit);
}

/* ─── Curriculum positioning ────────────────────────────────────────── */

export function getGroupForSlug(slug: string): PsychiatryGroup | null {
  return loadCorpus().groupBySlug.get(slug) ?? null;
}

export function groupOf(note: PsychiatryNote): PsychiatryGroup | null {
  return loadCorpus().groupBySlug.get(note.frontmatter.slug) ?? null;
}

/** Stable sort key: group letter then index order. */
export function curriculumIndex(note: PsychiatryNote): { letter: string; position: number } | null {
  const group = loadCorpus().groupBySlug.get(note.frontmatter.slug);
  if (!group) return null;
  return { letter: group.letter, position: group.noteSlugs.indexOf(note.frontmatter.slug) + 1 };
}

/* ─── High-yield set (P1 notes) for hub/library surfaces ─────────────── */

export function coreNotes(): PsychiatryNote[] {
  return loadCorpus().notes.filter((n) => n.frontmatter.priority === "P1");
}

/* ─── Learner-facing curriculum order (single authority) ─────────────── */

/**
 * The curriculum-normalized section order (2026-09-30):
 * Q. Foundations & sciences FIRST, then the clinical progression
 * A–P, then R. The source index order is immutable; this is the
 * presentation-layer ordering used by the hub, library, self-test
 * AND the course-to-course navigation so all surfaces agree.
 */
export const LEARNER_SECTION_ORDER = [
  "Q", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "R",
] as const;

/**
 * The full learner-facing course order: groups in LEARNER_SECTION_ORDER,
 * and within each group Foundational/Core (P1) → Supporting (P2) →
 * Reference (P3), preserving the index order inside each tier
 * (stable sort). Returns slugs.
 */
export function curriculumOrderSlugs(): string[] {
  const corpus = loadCorpus();
  const TIER_ORDER: Record<string, number> = { P1: 0, P2: 1, P3: 2 };
  return [...corpus.groups]
    .sort(
      (a, b) =>
        LEARNER_SECTION_ORDER.indexOf(a.letter as never) -
        LEARNER_SECTION_ORDER.indexOf(b.letter as never)
    )
    .flatMap((g) =>
      g.noteSlugs
        .map((slug) => corpus.bySlug.get(slug))
        .filter((n): n is PsychiatryNote => Boolean(n))
        .sort((a, b) => TIER_ORDER[a.frontmatter.priority] - TIER_ORDER[b.frontmatter.priority])
        .map((n) => n.frontmatter.slug)
    );
}

/** Adjacent courses in the learner-facing order (prev/next). */
export function adjacentCurriculum(slug: string): { prev: string | null; next: string | null } {
  const order = curriculumOrderSlugs();
  const idx = order.indexOf(slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? order[idx - 1] : null,
    next: idx >= 0 && idx < order.length - 1 ? order[idx + 1] : null,
  };
}
