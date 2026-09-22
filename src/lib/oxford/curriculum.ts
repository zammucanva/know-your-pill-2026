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
