/**
 * D-2 regression — the antidepressant FAQ-tail removal contract.
 *
 * History (PR #98, D-2): a copy-pasted antidepressant onset tail —
 *
 *     "Like most psychotropic medications, the full benefit builds
 *      gradually, some symptoms (sleep, energy, appetite) may improve
 *      before the main target symptoms respond. Do not stop early
 *      because you don't feel immediate effects."
 *
 * — had been appended to the "How long does X take to work?" FAQ answer
 * of 124 registry medications, 95 of which are NOT antidepressants
 * (alprazolam peaks in 30–60 minutes, zolpidem works in minutes,
 * methylphenidate the same day: the tail was clinically false on every
 * one of them). D-2 surgically removed it from those 95 while keeping it
 * on the 29 antidepressants whose onset it actually describes.
 *
 * This suite protects the BEHAVIOUR, not a file count:
 *
 *   1.  A non-antidepressant's FAQ answers never contain any distinctive
 *       tail fragment. Fragment matching is insensitive to whitespace,
 *       case, and punctuation, because the original defect was a raw
 *       string concatenation — the pre-fix answers literally ended
 *       "…smoother.. Like most psychotropic medications…" with a double
 *       period where the pasted tail met the authored answer. A future
 *       reintroduction via any join variant ("." / " ." / ".." / no
 *       separator / newline / curly apostrophe) must still be caught.
 *   2.  The antidepressants that legitimately carry the tail KEEP it —
 *       a future content sweep must not over-remove into the 29. The
 *       retention set is derived from registry structure (antidepressant
 *       family + authored onset FAQ + no dedicated patient guide),
 *       never from a hardcoded slug list.
 *   3.  "Antidepressant" means the registry's own authoritative family
 *       classification — learningPath[1] === "Antidepressants" — not a
 *       guessed slug list and not `drugClass` (bupropion's drugClass is
 *       "stimulant" and mirtazapine's is "depressant", yet both are
 *       antidepressant-family medications).
 *   4.  Malformed registry data (missing learningPath, missing faqs,
 *       empty question/answer) fails loudly instead of silently
 *       skipping the drug.
 *
 * Legitimate near-miss content that must NOT be flagged:
 *   - tacrine's authored onset answer ends "Do not stop early because
 *     you don't see immediate effects…" (see, not feel) — a genuinely
 *     different sentence on a cognitive enhancer with a slow onset.
 *   - the seven patient-guide antidepressants (sertraline … venlafaxine)
 *     carry hand-authored onset answers ("Some early changes (sleep,
 *     appetite, energy) can happen within 1–2 weeks…") that are not the
 *     pasted tail.
 *
 * Pure module tests — no server required.
 */

import { describe, expect, test } from "bun:test";
import { drugs } from "@/lib/kyp/data/drugs/index";
import { patientGuides } from "@/lib/kyp/patient/index";
import type { Drug, FAQItem } from "@/lib/kyp/data/types";

/* ------------------------------------------------------------------ */
/* The contract's data                                                */
/* ------------------------------------------------------------------ */

/**
 * The distinctive fragments of the pasted tail. A hit on ANY fragment
 * means the tail (or a partial reintroduction of it) is present.
 * Ordered from opening to closing sentence; each is distinctive on its
 * own across the whole registry.
 */
const TAIL_FRAGMENTS = [
  "Like most psychotropic medications",
  "full benefit builds gradually",
  "some symptoms (sleep, energy, appetite) may improve before the main target symptoms respond",
  "Do not stop early because you don't feel immediate effects",
] as const;

/**
 * Normalisation for fragment matching: collapse everything a copy-paste
 * or a paraphrasing of the tail could vary — whitespace (including line
 * breaks), letter case, apostrophe variants (don't / don’t), and the
 * punctuation of the join boundary (periods, commas, parentheses).
 * Words and their order are the invariant that identifies the tail.
 */
const squash = (s: string): string =>
  s
    .toLowerCase()
    .replace(/[\s'’‘′`".,;:!?()[\]—–-]/g, "");

const SQUASHED_TAIL: string[] = TAIL_FRAGMENTS.map(squash);

/** Which tail fragments appear in an answer? (empty = clean) */
const tailFragmentsIn = (answer: string): string[] =>
  TAIL_FRAGMENTS.filter((_, i) => squash(answer).includes(SQUASHED_TAIL[i]));

/** True when the answer carries the COMPLETE tail (all fragments). */
const carriesCompleteTail = (answer: string): boolean =>
  tailFragmentsIn(answer).length === TAIL_FRAGMENTS.length;

/* ------------------------------------------------------------------ */
/* Registry access — fail-loud on malformed data                       */
/* ------------------------------------------------------------------ */

const ANTIDEPRESSANT_FAMILY = "Antidepressants";

/** Registry's authoritative family classification: learningPath[1]. */
const familyOf = (drug: Drug): string => {
  if (
    !Array.isArray(drug.learningPath) ||
    drug.learningPath.length < 2 ||
    drug.learningPath[1].length === 0
  ) {
    throw new Error(
      `[d2] "${drug.slug}" has a malformed learningPath — the family ` +
        `classification ("${ANTIDEPRESSANT_FAMILY}" at index 1) cannot be ` +
        `derived. Fix the registry entry; never skip the drug.`
    );
  }
  return drug.learningPath[1];
};

const isAntidepressant = (drug: Drug): boolean =>
  familyOf(drug) === ANTIDEPRESSANT_FAMILY;

/** Every drug's faqs — fail-loud, never silently skipped. */
const faqsOf = (drug: Drug): FAQItem[] => {
  if (!Array.isArray(drug.faqs)) {
    throw new Error(
      `[d2] "${drug.slug}" is missing its faqs array — malformed registry entry.`
    );
  }
  for (const f of drug.faqs) {
    if (typeof f.question !== "string" || f.question.trim().length === 0) {
      throw new Error(`[d2] "${drug.slug}" has an FAQ with an empty question.`);
    }
    if (typeof f.answer !== "string" || f.answer.trim().length === 0) {
      throw new Error(`[d2] "${drug.slug}" has an FAQ with an empty answer.`);
    }
  }
  return drug.faqs;
};

/**
 * The onset FAQ — the surface the tail was pasted onto. Every authored
 * onset question in the registry has the exact shape
 * "How long does <name> take to work?".
 */
const isOnsetQuestion = (question: string): boolean =>
  /^how long does .{1,80} take to work\?$/i.test(question.trim());

/* ------------------------------------------------------------------ */
/* 1. Classification sanity — the classifier itself is guarded         */
/* ------------------------------------------------------------------ */

describe("d2 — antidepressant classification is the registry family, never a guess", () => {
  test("every registry entry yields a classifiable learningPath (fail-loud)", () => {
    // familyOf throws on malformed data; the loop is the assertion.
    for (const drug of drugs) {
      expect(familyOf(drug).length).toBeGreaterThan(0);
    }
  });

  test("the antidepressant family is non-degenerate within the registry", () => {
    const antidepressants = drugs.filter(isAntidepressant);
    expect(antidepressants.length).toBeGreaterThan(0);
    expect(antidepressants.length).toBeLessThan(drugs.length);
  });

  test("family anchors: known members and known non-members", () => {
    const inFamily = (slug: string) =>
      isAntidepressant(drugs.find((d) => d.slug === slug)!);
    // Members — including the two whose drugClass values mislead.
    expect(inFamily("sertraline")).toBe(true);
    expect(inFamily("phenelzine")).toBe(true);
    expect(inFamily("bupropion")).toBe(true); // drugClass: "stimulant"
    expect(inFamily("mirtazapine")).toBe(true); // drugClass: "depressant"
    // Non-members — the families the tail was false on.
    expect(inFamily("alprazolam")).toBe(false);
    expect(inFamily("zolpidem")).toBe(false);
    expect(inFamily("methylphenidate")).toBe(false);
    expect(inFamily("propranolol")).toBe(false);
    expect(inFamily("lithium")).toBe(false);
    expect(inFamily("clozapine")).toBe(false);
  });
});

/* ------------------------------------------------------------------ */
/* 2. The exclusion direction — the actual D-2 bug                    */
/* ------------------------------------------------------------------ */

describe("d2 — no non-antidepressant FAQ contains any tail fragment", () => {
  test("every non-antidepressant's every FAQ answer is tail-free", () => {
    expect(drugs.length).toBeGreaterThan(0); // registry loaded and non-empty
    const offenders: string[] = [];
    for (const drug of drugs) {
      if (isAntidepressant(drug)) continue;
      for (const f of faqsOf(drug)) {
        const hits = tailFragmentsIn(f.answer);
        if (hits.length > 0) {
          offenders.push(
            `${drug.slug} :: "${f.question}" carries: ${hits[0]}…`
          );
        }
      }
    }
    expect(offenders).toEqual([]); // each offender names its drug and fragment
  });

  test("spot contract — the live-bug cases stay fixed", () => {
    // alprazolam: the D-2 example. Its onset is minutes, and the tail
    // had been appended after a double period.
    const alprazolam = drugs.find((d) => d.slug === "alprazolam")!;
    const onset = faqsOf(alprazolam).find((f) => isOnsetQuestion(f.question))!;
    expect(tailFragmentsIn(onset.answer)).toEqual([]);
    expect(squash(onset.answer)).not.toContain("week"); // minutes-scale onset
    // zolpidem: the D-1/D-2 non-antidepressant exemplar (minutes, not weeks).
    const zolpidem = drugs.find((d) => d.slug === "zolpidem")!;
    for (const f of faqsOf(zolpidem)) {
      expect(tailFragmentsIn(f.answer)).toEqual([]);
    }
  });
});

/* ------------------------------------------------------------------ */
/* 3. The retention direction — no over-removal on antidepressants    */
/* ------------------------------------------------------------------ */

describe("d2 — antidepressants that legitimately carry the tail keep it", () => {
  /**
   * The retention set, derived from registry structure: antidepressant
   * family + authored onset FAQ + no dedicated patient guide. These are
   * the 29 medications whose onset answer is the standard tail; the
   * twelve patient-guide antidepressants are exempt because their
   * patient-facing onset content is hand-authored elsewhere (and five of
   * them carry no canonical onset FAQ at all).
   */
  const retentionSet = drugs.filter(
    (d) =>
      isAntidepressant(d) &&
      !patientGuides[d.slug] &&
      faqsOf(d).some((f) => isOnsetQuestion(f.question))
  );

  test("the retention set is non-degenerate (fail-loud, not a count freeze)", () => {
    expect(retentionSet.length).toBeGreaterThan(0);
    // Structural anchors from the registry, not a slug list.
    expect(retentionSet.map((d) => d.slug)).toContain("phenelzine");
    expect(retentionSet.map((d) => d.slug)).toContain("trazodone");
  });

  test("every retained antidepressant keeps the COMPLETE tail intact", () => {
    const regressions: string[] = [];
    for (const drug of retentionSet) {
      const onset = faqsOf(drug).find((f) => isOnsetQuestion(f.question))!;
      if (!carriesCompleteTail(onset.answer)) {
        regressions.push(
          `${drug.slug} lost tail fragments: ${tailFragmentsIn(onset.answer).length}/4 present`
        );
      }
    }
    expect(regressions).toEqual([]);
  });

  test("the tail lives in the onset FAQ, never pasted onto unrelated answers", () => {
    for (const drug of retentionSet) {
      for (const f of faqsOf(drug)) {
        if (isOnsetQuestion(f.question)) continue;
        expect(tailFragmentsIn(f.answer)).toEqual([]);
      }
    }
  });
});

/* ------------------------------------------------------------------ */
/* 4. Onset-FAQ well-formedness — the surface the contract rides on   */
/* ------------------------------------------------------------------ */

describe("d2 — onset FAQs are well-formed across the registry", () => {
  test("every drug carries at most one onset question", () => {
    const duplicates: string[] = [];
    for (const drug of drugs) {
      const onsets = faqsOf(drug).filter((f) => isOnsetQuestion(f.question));
      if (onsets.length > 1) duplicates.push(drug.slug);
    }
    expect(duplicates).toEqual([]);
  });

  test("non-antidepressants with an onset FAQ exist (the D-2 population)", () => {
    const population = drugs.filter(
      (d) =>
        !isAntidepressant(d) &&
        faqsOf(d).some((f) => isOnsetQuestion(f.question))
    );
    expect(population.length).toBeGreaterThan(0);
    expect(population.map((d) => d.slug)).toContain("alprazolam");
  });
});

/* ------------------------------------------------------------------ */
/* 5. The matcher itself — punctuation and concatenation boundaries    */
/* ------------------------------------------------------------------ */

describe("d2 — the tail matcher survives concatenation and punctuation variants", () => {
  const TAIL_BODY =
    "Like most psychotropic medications, the full benefit builds gradually, " +
    "some symptoms (sleep, energy, appetite) may improve before the main " +
    "target symptoms respond. Do not stop early because you don't feel " +
    "immediate effects.";

  test("the original double-period concatenation is caught", () => {
    // The pre-fix answers literally contained ".. Like most…" — the
    // authored period followed by the pasted sentence.
    const answer = `Oral: 30–60 min (peak 1–2 h); XR slower and smoother.. ${TAIL_BODY}`;
    expect(tailFragmentsIn(answer).length).toBe(TAIL_FRAGMENTS.length);
  });

  test("single period, no space, newline, and lowercase joins are all caught", () => {
    for (const answer of [
      `Peak effect in 45 minutes. ${TAIL_BODY}`,
      `Peak effect in 45 minutes.${TAIL_BODY}`,
      `Peak effect in 45 minutes.\n${TAIL_BODY}`,
      `Peak effect in 45 minutes. ${TAIL_BODY.toLowerCase()}`,
    ]) {
      expect(tailFragmentsIn(answer).length).toBe(TAIL_FRAGMENTS.length);
    }
  });

  test("curly-apostrophe and comma-less tail variants are caught", () => {
    const curly = TAIL_BODY.replace(/don't/, "don’t");
    expect(tailFragmentsIn(curly).length).toBe(TAIL_FRAGMENTS.length);
    const commaless = TAIL_BODY.replace(
      "(sleep, energy, appetite)",
      "(sleep energy appetite)"
    );
    expect(tailFragmentsIn(commaless).length).toBe(TAIL_FRAGMENTS.length);
  });

  test("a partial paste (first sentence only) is still caught", () => {
    const answer =
      "Sedation within the hour. Like most psychotropic medications, the full benefit builds gradually.";
    expect(tailFragmentsIn(answer).length).toBeGreaterThan(0);
  });

  test("legitimate near-miss content is NOT flagged", () => {
    // tacrine (cognitive enhancer): "see", not "feel" — a genuinely
    // different sentence with a slow-onset meaning of its own.
    const tacrineAnswer =
      "It may take up to 6 weeks before any improvement in memory or behaviour " +
      "is evident, and months before any stabilisation in the degenerative " +
      "course is apparent. Do not stop early because you don't see immediate " +
      "effects, but tell the doctor about nausea, which limits the dose more " +
      "than anything else.";
    expect(tailFragmentsIn(tacrineAnswer)).toEqual([]);
    // venlafaxine (patient-guide antidepressant): hand-authored onset.
    const venlafaxineAnswer =
      "Some early changes (sleep, appetite, energy) can happen within 1–2 " +
      "weeks, but clearer mood benefit typically takes 4–6 weeks or longer " +
      "for depression. For anxiety disorders (GAD, social anxiety, panic), " +
      "full effect may take 8–12 weeks. Don't stop early just because you " +
      "don't feel better yet, and don't increase the dose on your own.";
    expect(tailFragmentsIn(venlafaxineAnswer)).toEqual([]);
  });
});
