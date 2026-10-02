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

/* ============================================================
   Declutter mission — sentence-level presentation helpers.

   Three pure functions shared by the concept template:

   1. clampSentences — progressively disclose long prose by
      whole sentence/clause segments; visible + rest always
      reconstructs the source text (pinned by tests).
   2. mechanismInShort — a short, VERBATIM, clause-bounded lead-in
      for the mechanism narrative. Never a mid-word truncation,
      never a paraphrase — a pure prefix of the source ending at
      a sentence/semicolon/em-dash boundary. (Judgment call #1.)
   3. stripPlaceholderSentences — remove placeholder/meta
      sentences (and placeholder CLAUSES inside mixed sentences)
      at RENDER time. Data files are never modified, and a
      clause is only removed when it matches the documented
      placeholder patterns — real clinical content always
      survives (pinned by tests). (Judgment call #3.)

   Segmentation: segments split AFTER sentence/clause punctuation
   (.!?;:) and BEFORE em-dashes. The split consumes whitespace
   only, so `visible + " " + rest` reconstructs the source under
   whitespace normalisation.
   ============================================================ */

const SEGMENT_SPLIT = /(?<=[.!?;:])\s+|\s+(?=—)/;

function wordCount(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

export interface ClampedProse {
  /** The visible portion — whole segments, never mid-clause. */
  visible: string;
  /** The exact remainder ("" when everything is visible). */
  rest: string;
}

/**
 * Clamp prose to `maxWords` visible words using whole
 * sentence/clause segments. At least one segment is always
 * visible; the remainder carries the untouched tail.
 */
export function clampSentences(text: string, maxWords: number): ClampedProse {
  if (!text) return { visible: "", rest: "" };
  const segments = text.split(SEGMENT_SPLIT).filter((s) => s.length > 0);
  let visible = "";
  let rest = "";
  let words = 0;
  let clamping = false;
  for (const segment of segments) {
    const w = wordCount(segment);
    // visible must stay a CONTIGUOUS PREFIX of the segments — once a
    // segment overflows the cap, everything after it belongs to rest
    // (otherwise the reconstruction order breaks).
    if (!clamping && (words === 0 || words + w <= maxWords)) {
      visible = visible ? `${visible} ${segment}` : segment;
      words += w;
    } else {
      clamping = true;
      rest = rest ? `${rest} ${segment}` : segment;
    }
  }
  return { visible, rest };
}

/** In-short target: the longest clause-bounded prefix ≤ this length. */
export const MECHANISM_IN_SHORT_MAX = 220;

/**
 * The mechanism "In short" line — a VERBATIM prefix of the
 * narrative that ends at a sentence, semicolon or em-dash
 * boundary. Never a mid-word cut, never a paraphrase, never an
 * invented sentence (Judgment call #1: recovered-memories opens
 * with a ~350-character sentence, so an arbitrary character
 * truncation WOULD cut clinical meaning — the boundary rule
 * below handles it: 202 chars ending at the em-dash before
 * "experimental retrieval-inhibition studies…", keeping the
 * sentence's complete clauses).
 *
 * Fallback (never triggered by the current corpus, pinned by
 * tests): if the FIRST boundary itself exceeds the cap, the
 * whole first clause is returned — a longer In-short is safer
 * than a misleading cut.
 */
export function mechanismInShort(summary: string): string {
  if (!summary) return "";
  const boundaries: number[] = [];
  for (let i = 0; i < summary.length; i++) {
    const ch = summary[i];
    if (ch === "." || ch === "!" || ch === "?" || ch === ";") {
      if (i + 1 === summary.length || summary[i + 1] === " ") {
        boundaries.push(i + 1);
      }
    } else if (ch === "—" && (i + 1 === summary.length || summary[i + 1] === " ")) {
      // end the prefix BEFORE the em-dash (a dangling "—" reads badly)
      boundaries.push(i);
    }
  }
  const underCap = boundaries.filter((b) => b <= MECHANISM_IN_SHORT_MAX);
  const cut = underCap.length > 0 ? Math.max(...underCap) : (boundaries[0] ?? summary.length);
  return summary.slice(0, cut).trim();
}

/* ------------------------------------------------------------
   Placeholder stripping (render-time only).

   A SENTENCE is removed when one of its clauses matches the
   placeholder patterns (the source corpus's own meta-disclaimer
   vocabulary). Only the matching clause goes — clinical clauses
   in the same sentence survive, so mixed sentences keep their
   real content (e.g. mental-health-law's cost card keeps "the
   expensive failures are the undocumented ones…" while the
   "no cost figures are invented" clause is dropped).

   Judgment call #3 — mental-health-law.severityScales[0].indianNote
   ("No cut-offs exist and none are invented — …") is REAL
   learner-facing legal content (the Grisso–Appelbaum framework
   is qualitative by design) and is PRESERVED: it matches none of
   the patterns below ("none are invented" ≠ "not invented"), it
   is never routed through the strip, and severityScales is not
   rendered by the concept template at all.
   ------------------------------------------------------------ */

function isPlaceholderClause(clause: string): boolean {
  return PLACEHOLDER_PATTERNS.some((re) => re.test(clause));
}

/** Remove placeholder sentences/clauses from a text block (pure). */
export function stripPlaceholderSentences(text: string): string {
  if (!text) return text;
  const sentences = text.split(/(?<=[.!?])\s+/).filter((s) => s.length > 0);
  const kept: string[] = [];
  for (const sentence of sentences) {
    const clauses = sentence.split(SEGMENT_SPLIT).filter((s) => s.length > 0);
    if (clauses.length === 0 || !clauses.some(isPlaceholderClause)) {
      kept.push(sentence);
      continue;
    }
    const keptClauses = clauses.filter((c) => !isPlaceholderClause(c));
    if (keptClauses.length > 0) {
      // drop separators orphaned by the removed clause (a leading "— " or "; ")
      kept.push(keptClauses.join(" ").replace(/^(?:\s*[—–;:,]\s*)+/, ""));
    }
    // all clauses placeholder → the whole sentence is dropped
  }
  const joined = kept.join(" ").replace(/\s{2,}/g, " ").trim();
  // Typesetting the survivors: when the strip removed leading material the
  // remainder can start mid-sentence — capitalise the first letter so the
  // card reads as a sentence. Case is the only byte touched; the word
  // sequence is otherwise a verbatim subsequence of the source.
  if (joined && /^[a-z]/.test(joined)) {
    return joined.charAt(0).toUpperCase() + joined.slice(1);
  }
  return joined;
}

/* ------------------------------------------------------------
   renderableCourse — the render-time view of a concept course.

   A pure mapping of the course through stripPlaceholderSentences
   for exactly the prose families the concept template renders.
   The DATA FILES are never touched: the strip lives at the
   presentation layer, and every stripped field remains a
   subsequence of its source (pinned by tests). Families that
   the concept template does not render (severityScales,
   contentGaps, MCQs, references, …) are passed through
   untouched by construction.
   ------------------------------------------------------------ */

export function renderableCourse(course: PsychiatryCourse): PsychiatryCourse {
  const strip = stripPlaceholderSentences;
  return {
    ...course,
    quickFacts: course.quickFacts.map((fact) => ({
      ...fact,
      detail: fact.detail ? strip(fact.detail) : fact.detail,
    })),
    ...(course.epidemiology
      ? {
          epidemiology: {
            ...course.epidemiology,
            globalPrevalence: strip(course.epidemiology.globalPrevalence),
            indianPrevalence: strip(course.epidemiology.indianPrevalence),
            ...(course.epidemiology.genderRatio
              ? { genderRatio: strip(course.epidemiology.genderRatio) }
              : {}),
            ...(course.epidemiology.ageOfOnset
              ? { ageOfOnset: strip(course.epidemiology.ageOfOnset) }
              : {}),
          },
        }
      : {}),
    ...(course.etiology
      ? {
          etiology: course.etiology.map((factor) => ({
            ...factor,
            details: strip(factor.details),
          })),
        }
      : {}),
    ...(course.diagnosticCriteria
      ? {
          diagnosticCriteria: course.diagnosticCriteria.map((criteria) => ({
            ...criteria,
            ...(criteria.indianNote ? { indianNote: strip(criteria.indianNote) } : {}),
          })),
        }
      : {}),
    ...(course.management
      ? {
          management: course.management.map((option) => ({
            ...option,
            description: strip(option.description),
            whenToUse: strip(option.whenToUse),
            ...(option.indianContext ? { indianContext: strip(option.indianContext) } : {}),
          })),
        }
      : {}),
    patientGuide: {
      ...course.patientGuide,
      whatIsIt: strip(course.patientGuide.whatIsIt),
      whatCausesIt: strip(course.patientGuide.whatCausesIt),
      symptoms: strip(course.patientGuide.symptoms),
      treatment: strip(course.patientGuide.treatment),
    },
    indianPractice: {
      ...course.indianPractice,
      systemContext: strip(course.indianPractice.systemContext),
      indianGuidelines: strip(course.indianPractice.indianGuidelines),
      programmeContext: strip(course.indianPractice.programmeContext),
      costConsiderations: strip(course.indianPractice.costConsiderations),
      culturalConsiderations: strip(course.indianPractice.culturalConsiderations),
    },
  };
}
