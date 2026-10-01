import type { PsychiatryCourse } from "@/lib/kyp/data/psychiatry-courses/types";

/* ============================================================
   Concept-course section visibility — the data-driven rules
   that keep concept lessons topic-relevant (redesign B).

   A concept course (kind === "concept") describes a discipline,
   a method or a science — not an illness. Five section families
   on the shared course template are disease-shaped, so for
   concept courses they render ONLY when the course data
   contains real, non-placeholder content.

   Placeholder detection follows the redesign specification:
   text matching phrases such as "Not applicable",
   "No … figure", "is not recorded", "not invented".

   The authority for which sections EXIST remains
   getCourseRenderedSectionIds (psychiatry-course-sections.ts);
   this module only decides the concept-course presentation of
   the disease-shaped families. Nothing here changes the data
   files, the completion denominators or the library totals.
   ============================================================ */

const PLACEHOLDER_PATTERNS: RegExp[] = [
  /not applicable/i,
  /no [a-z ]{0,30}figure/i,
  /is not recorded/i,
  /not invented/i,
  /no survey counts/i,
  /records no (?:gender|figure|distribution)/i,
  /not a condition carrying/i,
  /structural, not numerical/i,
];

/** True when a text block matches the placeholder phrases. */
export function isConceptPlaceholderText(text: string | null | undefined): boolean {
  if (!text) return false;
  return PLACEHOLDER_PATTERNS.some((re) => re.test(text));
}

export interface ConceptSectionVisibility {
  /** Epidemiology band renders (real numbers / burden content). */
  epidemiology: boolean;
  /** Causes / underlying-factors band renders. */
  etiology: boolean;
  /** Patient guide renders. */
  patientGuide: boolean;
  /** Merged brain+neurotransmitter explanatory layer renders. */
  explanatoryLayer: boolean;
}

/**
 * Which disease-shaped families render for THIS concept course.
 *
 * Judgement calls (documented in the redesign summary):
 *  - epidemiology: placeholder when the defining "numbers" fields
 *    (globalPrevalence / lifetimeRisk) match the placeholder
 *    phrases — the section would open by saying there are no numbers.
 *  - etiology: placeholder only when EVERY factor's details match.
 *  - patientGuide: keyed on `whatIsIt` — the defining explanation.
 *    (The phenomenology guide's "Not applicable as an illness" lead-in
 *    lives inside the `symptoms` field and is followed by real
 *    plain-language content, so the guide renders.)
 *  - explanatoryLayer: renders when brain or neurotransmitter data
 *    exists (the merge is presentational — the section ids, mode
 *    gating and completion denominators are unchanged).
 */
export function getConceptSectionVisibility(
  course: PsychiatryCourse
): ConceptSectionVisibility {
  const epi = course.epidemiology;
  const epidemiology = Boolean(
    epi &&
      !isConceptPlaceholderText(epi.globalPrevalence) &&
      !isConceptPlaceholderText(epi.lifetimeRisk)
  );

  const etiology = Boolean(
    course.etiology &&
      course.etiology.length > 0 &&
      !course.etiology.every((f) => isConceptPlaceholderText(f.details))
  );

  const guide = course.patientGuide;
  const patientGuide = Boolean(guide && !isConceptPlaceholderText(guide.whatIsIt));

  const explanatoryLayer =
    course.brainRegions.length > 0 || course.neurotransmitters.length > 0;

  return { epidemiology, etiology, patientGuide, explanatoryLayer };
}

/* ============================================================
   Revision-card splitting (redesign D) — convert the long
   one-page-revision paragraphs into cards with a short title
   and 3–6 bullets WITHOUT changing a single clinical word.

   Safety contract: the transformation is a pure re-slicing of
   the source text. `title` is the leading "Label:" segment the
   source itself provides; `bullets` are the slices between
   enumeration boundaries (numbered markers, semicolons that
   introduce a capitalised term, and sentence ends). When the
   reconstruction check fails, the paragraph degrades to a
   single-bullet card carrying the full verbatim text — content
   is never lost or rewritten.
   ============================================================ */

export interface RevisionCard {
  /** Short title from the source's leading label (null when absent). */
  title: string | null;
  /** Verbatim slices of the source paragraph. */
  bullets: string[];
  /** The original unmodified paragraph (expander + print sheet). */
  fullText: string;
}

/**
 * Split a revision paragraph into a card.
 *
 * The split points are chosen so the joined result reproduces the
 * source exactly — verified with `verifyRevisionCard`.
 */
export function splitRevisionParagraph(text: string): RevisionCard {
  const fullText = text;

  // 1. Leading label: "Some Label:" — up to 60 chars, no sentence
  //    punctuation (allows commas, ampersands, dashes, slashes).
  const labelMatch = text.match(/^([A-Z][^.:;!?"()]{2,59}):\s+/);
  const title = labelMatch ? labelMatch[1].trim() : null;
  let body = text;
  let consumed = "";
  if (labelMatch) {
    consumed = labelMatch[0];
    body = text.slice(consumed.length);
  }

  // 2. Split the body at enumeration boundaries:
  //    - "(1) …", "(2) …" numbered markers
  //    - a semicolon followed by a CAPITALISED term
  //    - sentence ends (. ! ?) followed by a capital
  //    matchAll (unlike a manual exec loop) advances past zero-width
  //    matches, so the lookbehind/lookahead boundaries cannot loop.
  const boundaries: Array<{ start: number; end: number }> = [];
  const markerRe =
    /(\(\d+\)\s+)|(?<=; )(?=[A-Z][A-Za-z“"(])|(?<=[.!?]) (?=[A-Z“"(])/g;
  let cursor = 0;
  for (const match of body.matchAll(markerRe)) {
    const start = match.index + match[0].length;
    if (start > cursor) boundaries.push({ start: cursor, end: start });
    cursor = Math.max(cursor, start);
  }
  boundaries.push({ start: cursor, end: body.length });

  const bullets = boundaries
    .map(({ start, end }) => body.slice(start, end))
    .map((b) => b.trim())
    .filter((b) => b.length > 0);

  if (bullets.length === 0) {
    return { title, bullets: [fullText], fullText };
  }

  return { title, bullets, fullText };
}

/**
 * Verify a card preserves the source text exactly:
 * title-with-colon + bullets must reconstruct the paragraph.
 */
export function verifyRevisionCard(card: RevisionCard, source: string): boolean {
  if (card.title !== null) {
    const rebuilt = `${card.title}: ${card.bullets.join(" ")}`;
    return normalizeSpace(rebuilt) === normalizeSpace(source);
  }
  return normalizeSpace(card.bullets.join(" ")) === normalizeSpace(source);
}

function normalizeSpace(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

/* ============================================================
   Quick Facts cap (redesign D) — five cards by priority.
   The content model has no priority field yet, so the fallback
   is the FIRST five (the corpus authors front-load the
   highest-yield facts). `priority` is honoured when present.
   ============================================================ */

export interface PrioritisedFact<T> {
  fact: T;
  priority: number;
}

export function capQuickFacts<T extends object>(facts: T[]): { visible: T[]; rest: T[] } {
  const indexed = facts.map((fact, i) => ({
    fact,
    priority: typeof (fact as { priority?: number }).priority === "number"
      ? (fact as { priority?: number }).priority
      : i,
  }));
  indexed.sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
  const ordered = indexed.map((x) => x.fact);
  return { visible: ordered.slice(0, 5), rest: ordered.slice(5) };
}

/* ============================================================
   Learning objectives one-liners (redesign D) — the first
   clause up to the first dash or semicolon, first three only.
   ============================================================ */

export function objectiveOneLiner(objective: string): string {
  const cut = objective.search(/[—–;]/);
  const head = cut > 24 ? objective.slice(0, cut).trim() : objective;
  return head.replace(/[.]$/, "");
}
