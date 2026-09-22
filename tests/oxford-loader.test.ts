/**
 * KYP Psychiatry — corpus loader contract (CI test).
 *
 * Pins the note-corpus contract so any accidental content or parser
 * regression fails the build:
 *   - 109 notes / 82 disorder / 27 concept / 18 groups / 719 MCQs
 *   - unique slugs, ordered sections, complete front matter
 *   - deterministic MCQ ids; valid answer indices
 *   - index-group membership for every note
 *
 * Pure module tests — no server required.
 */
import { describe, expect, test } from "bun:test";
import {
  corpusStats,
  getAllNoteSlugs,
  getNoteBySlug,
  loadCorpus,
} from "../src/lib/oxford/loader";
import { relatedNotes } from "../src/lib/oxford/curriculum";
import {
  buildLessonPhases,
  courseSlug,
  priorityMeta,
} from "../src/lib/oxford/learn";

describe("oxford loader — corpus contract", () => {
  test("1. corpus counts: 109 notes, 82 disorder, 27 concept, 719 MCQs, 18 groups", () => {
    const stats = corpusStats();
    expect(stats.noteCount).toBe(109);
    expect(stats.disorderCount).toBe(82);
    expect(stats.conceptCount).toBe(27);
    expect(stats.mcqCount).toBe(719);
    expect(stats.groupCount).toBe(18);
  });

  test("2. 109 unique slugs", () => {
    const slugs = getAllNoteSlugs();
    expect(slugs.length).toBe(109);
    expect(new Set(slugs).size).toBe(109);
  });

  test("3. every note has ordered 16/8 sections + complete front matter (provenance kept)", () => {
    const corpus = loadCorpus();
    for (const note of corpus.notes) {
      const expected = note.kind === "disorder" ? 16 : 8;
      expect(note.sections.length).toBe(expected);
      expect(note.sections.map((s) => s.number)).toEqual(
        Array.from({ length: expected }, (_, i) => i + 1)
      );
      expect(note.frontmatter.title.length).toBeGreaterThan(0);
      expect(note.frontmatter.category.length).toBeGreaterThan(0);
      // Provenance is preserved in the data layer (never public branding).
      expect(note.frontmatter.source_map.length).toBeGreaterThan(0);
      expect(["P1", "P2", "P3"]).toContain(note.frontmatter.priority);
      expect(note.frontmatter.audiences.length).toBeGreaterThan(0);
    }
  });

  test("4. every MCQ parses with valid options, answer, explanation + deterministic unique ids", () => {
    const corpus = loadCorpus();
    const ids = new Set<string>();
    for (const note of corpus.notes) {
      for (const mcq of note.mcqs) {
        expect(mcq.options.length).toBeGreaterThanOrEqual(2);
        expect(mcq.correctIndex).toBeGreaterThanOrEqual(0);
        expect(mcq.correctIndex).toBeLessThan(mcq.options.length);
        expect(mcq.question.length).toBeGreaterThan(0);
        expect(mcq.explanation.length).toBeGreaterThan(0);
        expect(mcq.id.startsWith(`psych-${note.frontmatter.slug}-`)).toBe(true);
        expect(ids.has(mcq.id)).toBe(false);
        ids.add(mcq.id);
      }
    }
    expect(ids.size).toBe(719);
  });

  test("5. every note belongs to exactly one index group", () => {
    const corpus = loadCorpus();
    for (const note of corpus.notes) {
      expect(corpus.groupBySlug.has(note.frontmatter.slug)).toBe(true);
    }
    const totalGrouped = corpus.groups.reduce((s, g) => s + g.noteSlugs.length, 0);
    expect(totalGrouped).toBe(109);
  });

  test("6. schizophrenia spot-check: 16 sections, 6 MCQs, tagline + overview", () => {
    const note = getNoteBySlug("schizophrenia");
    expect(note).not.toBeNull();
    expect(note!.kind).toBe("disorder");
    expect(note!.sections.length).toBe(16);
    expect(note!.mcqs.length).toBe(6);
    expect(note!.tagline).toContain("Schizophrenia is a long-term");
    expect(note!.overview).toContain("1 in 300");
  });

  test("7. concept note with shared evidence + self-test section parses MCQs", () => {
    const note = getNoteBySlug("couples-therapy");
    expect(note).not.toBeNull();
    expect(note!.kind).toBe("concept");
    expect(note!.mcqs.length).toBeGreaterThan(0);
  });
});

describe("oxford learn — presentation view-model", () => {
  const corpus = loadCorpus();
  const schizophrenia = corpus.bySlug.get("schizophrenia")!;

  test("8. phases cover every non-objective section exactly once (109 notes)", () => {
    for (const note of corpus.notes) {
      const lesson = buildLessonPhases(note);
      const covered = lesson.phases.flatMap((p) => p.sections.map((s) => s.number)).sort((a, b) => a - b);
      const expected = note.sections.filter((s) => s.number !== 2).map((s) => s.number);
      expect(covered).toEqual(expected);
      expect(lesson.objectives?.number).toBe(2);
    }
  });

  test("9. India material is its own phase (section 10 disorder / 6 concept)", () => {
    const disorderLesson = buildLessonPhases(schizophrenia);
    expect(
      disorderLesson.phases.find((p) => p.meta.key === "india")!.sections.some((s) => s.number === 10)
    ).toBe(true);
    const couples = corpus.bySlug.get("couples-therapy")!;
    const conceptLesson = buildLessonPhases(couples);
    expect(
      conceptLesson.phases.find((p) => p.meta.key === "india")!.sections.some((s) => s.number === 6)
    ).toBe(true);
  });

  test("10. priority maps to learner language, never internal codes", () => {
    expect(priorityMeta("P1").label).toBe("Core");
    expect(priorityMeta("P2").label).toBe("Supporting");
    expect(priorityMeta("P3").label).toBe("Reference");
  });

  test("11. related notes: same group, never the note itself", () => {
    const related = relatedNotes(schizophrenia, 6);
    expect(related.length).toBeGreaterThan(0);
    for (const r of related) {
      expect(r.frontmatter.slug).not.toBe("schizophrenia");
      expect(
        corpus.groupBySlug.get(r.frontmatter.slug)?.letter
      ).toBe("C");
    }
  });

  test("12. progress uses the shared store namespace (no second system)", () => {
    expect(courseSlug("schizophrenia")).toBe("psychiatry/schizophrenia");
  });
});
