/**
 * KYP Psychiatry — data types for the note corpus.
 *
 * The canonical source is download/kyp-notes/*.md (109 notes + index +
 * template). These types model the parsed note contract: YAML front matter
 * plus a fixed section list (16 disorder sections / 8 concept sections)
 * plus authored self-test MCQs.
 *
 * Naming note: the internal module path keeps the "oxford" identifier for
 * provenance traceability (the notes are original rewrites derived from
 * the New Oxford Textbook of Psychiatry 2e (2009), updated to DSM-5/ICD-11).
 * The PUBLIC product identity is KYP Psychiatry — never the source name.
 */

/* ─── Front matter ─────────────────────────────────────────────────── */

export type Audience = "patients & families" | "medical students" | "residents & clinicians";

export type Priority = "P1" | "P2" | "P3";

export interface NoteFrontMatter {
  title: string;
  slug: string;
  /** Group name, e.g. "Psychotic disorders" — must match the index groups. */
  category: string;
  /** Provenance — INTERNAL ONLY, never rendered as public branding. */
  source_map: string;
  audiences: Audience[];
  priority: Priority;
  last_reviewed: string;
  reading_time?: string;
}

/* ─── Markdown blocks (the subset used by the notes) ────────────────── */

export interface MdTable {
  kind: "table";
  columns: string[];
  rows: string[][];
}

export interface MdList {
  kind: "list";
  ordered: boolean;
  /** Items carry inline markup as plain strings (renderer handles them). */
  items: string[];
}

export interface MdQuote {
  kind: "quote";
  text: string;
}

export interface MdHeading {
  kind: "heading";
  level: 3 | 4;
  text: string;
}

export interface MdParagraph {
  kind: "paragraph";
  text: string;
}

export type MdBlock = MdTable | MdList | MdQuote | MdHeading | MdParagraph;

/* ─── Sections ─────────────────────────────────────────────────────── */

/** The parsed, canonical section (## N. Title) of a note. */
export interface NoteSection {
  /** Section number from the heading (1-16 disorder / 1-8 concept). */
  number: number;
  /** Section title without the leading "N.". */
  title: string;
  /** Stable anchor id (s1, s2, ...) — also the progress key. */
  id: string;
  /** Raw markdown body of the section (MCQ parsing + display fallback). */
  raw: string;
  /** Parsed markdown blocks. */
  blocks: MdBlock[];
}

/* ─── MCQs ─────────────────────────────────────────────────────────── */

/**
 * Authored self-test question. Parsed from the note's self-test section —
 * the note remains the single authority (task rule: never regenerate or
 * edit questions to improve presentation).
 */
export interface PsychiatryMcq {
  /** Deterministic id: psych-<note-slug>-<n> (stable across builds). */
  id: string;
  /** Note slug the question belongs to. */
  noteSlug: string;
  question: string;
  options: string[];
  /** 0-based index of the correct option. */
  correctIndex: number;
  explanation: string;
}

/* ─── Notes ────────────────────────────────────────────────────────── */

export type NoteKind = "disorder" | "concept";

export interface PsychiatryNote {
  frontmatter: NoteFrontMatter;
  kind: NoteKind;
  sections: NoteSection[];
  mcqs: PsychiatryMcq[];
  /** Section 1 tagline (first bold sentence of the overview), if present. */
  tagline: string | null;
  /** Section 1 overview paragraph (plain text), if present. */
  overview: string | null;
  /** Computed word count of the body (used for reading-time estimates). */
  wordCount: number;
  /** Estimated reading time in minutes (front matter value if present,
   *  else computed from word count at 200 wpm). */
  readingMinutes: number;
}

/* ─── Groups (the index's 18 content groups) ────────────────────────── */

export interface PsychiatryGroup {
  /** Index letter (A-R) — stable ordering key. */
  letter: string;
  /** Display name, e.g. "Neurocognitive disorders". */
  name: string;
  /** Slugs of member notes in index order. */
  noteSlugs: string[];
}

/* ─── Learning view model (see learn.ts) ────────────────────────────── */

export type LearningPhase = "understand" | "learn" | "think" | "india" | "remember" | "practice" | "sources";

export interface PhaseModel {
  understand: NoteSection[];
  learn: NoteSection[];
  think: NoteSection[];
  india: NoteSection[];
  remember: NoteSection[];
  practice: NoteSection[];
  sources: NoteSection[];
}
