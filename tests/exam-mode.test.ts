/**
 * Exam Mode Test Suite — the NEXT-X6 contract.
 *
 * Unit tests for the per-section breakdown (pure) and source-level
 * pins for the deferred-feedback composition. No server needed.
 *
 * Coverage map:
 *   1-3   breakdown: groups by class, counts correct/total/unanswered
 *   4     breakdown: first-appearance order, no reordering
 *   5-6   the toggle exists and DEFAULTS OFF; timed is included
 *   7     feedback is fully withheld during the exam (no correct
 *         styling, no explanation, no section link)
 *   8     the submit-only acknowledgement exists
 *   9     the results screen carries the per-section breakdown
 *   10    run summaries record mode "exam"
 */

import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { breakDownBySection } from "@/lib/kyp/custom-test/exam-breakdown";
import { buildTest } from "@/lib/kyp/custom-test/engine";
import { drugs } from "@/lib/kyp/data/drugs/index";
import type { TestQuestion } from "@/lib/kyp/custom-test/types";

const read = (rel: string): string =>
  readFileSync(join(process.cwd(), rel), "utf8");

const PAGE = "src/app/quiz/custom/custom-test-builder.tsx"; // the builder moved out of page.tsx (server-rendered shell)

describe("exam mode — per-section breakdown (pure)", () => {
  const ALL_SLUGS = drugs.map((d) => d.slug);
  const built = buildTest(ALL_SLUGS, 30, 97239);
  const questions: TestQuestion[] = built.questions;
  // Deterministic answer key: correct for even indexes, wrong for odd,
  // and leave every 7th unanswered (time-up scenario).
  const answers: (number | null)[] = questions.map((q, i) =>
    i % 7 === 3 ? null : i % 2 === 0 ? q.attemptCorrectIndex : (q.attemptCorrectIndex + 1) % q.attemptOptions.length
  );

  test("1. groups by medication class with correct totals", () => {
    const sections = breakDownBySection(questions, answers);
    expect(sections.length).toBeGreaterThan(0);
    const total = sections.reduce((sum, s) => sum + s.total, 0);
    expect(total).toBe(questions.length);
    for (const s of sections) {
      expect(s.label.length).toBeGreaterThan(0);
      expect(s.correct).toBeLessThanOrEqual(s.total);
      expect(s.unanswered).toBeLessThanOrEqual(s.total);
    }
  });

  test("2. correct + unanswered never exceed the section total", () => {
    const sections = breakDownBySection(questions, answers);
    for (const s of sections) {
      expect(s.correct + s.unanswered).toBeLessThanOrEqual(s.total);
    }
  });

  test("3. all-null answers count every question as unanswered", () => {
    const sections = breakDownBySection(
      questions.slice(0, 5),
      questions.slice(0, 5).map(() => null)
    );
    expect(sections.reduce((sum, s) => sum + s.unanswered, 0)).toBe(5);
    expect(sections.reduce((sum, s) => sum + s.correct, 0)).toBe(0);
  });

  test("4. sections appear in first-appearance order", () => {
    const firstAppearance = new Map<string, number>();
    questions.forEach((q, i) => {
      if (!firstAppearance.has(q.source.sourceClass)) {
        firstAppearance.set(q.source.sourceClass, i);
      }
    });
    const sections = breakDownBySection(questions, answers);
    const ordered = [...firstAppearance.keys()];
    expect(sections.map((s) => s.label)).toEqual(ordered);
  });
});

describe("exam mode — composition pins", () => {
  test("5. the exam toggle exists and defaults OFF", () => {
    const src = read(PAGE);
    expect(src).toMatch(/\[exam,\s*setExam\]\s*=\s*React\.useState\(false\)/);
    expect(src).toContain('id="exam-toggle"');
    expect(src).toContain("Exam — feedback after submission");
    expect(src).toContain("Off by");
  });

  test("6. exam mode composes timed pacing (countdown always on)", () => {
    const src = read(PAGE);
    expect(src).toContain("useExam || (config?.timed ?? timed)");
    expect(src).toContain("Included in exam mode");
    expect(src).toContain("disabled={selectedCount === 0 || exam}");
  });

  test("7. feedback is fully withheld during the exam", () => {
    const src = read(PAGE);
    expect(src).toContain("const withhold = attempt.exam;");
    // Correct/wrong styling gated on !withhold.
    expect(src).toContain("showCorrect = answered && isThisCorrect && !withhold;");
    expect(src).toContain("!isThisCorrect && !withhold;");
    // The explanation block is gated on !withhold.
    expect(src).toContain("{answered && !withhold && (");
  });

  test("8. the only post-answer UI is a neutral acknowledgement", () => {
    const src = read(PAGE);
    expect(src).toContain("Answer recorded — feedback comes after you submit.");
    expect(src).toContain("Submit exam");
    expect(src).toContain("{answered && withhold && (");
  });

  test("9. the results screen explains itself with a per-section breakdown", () => {
    const src = read(PAGE);
    expect(src).toContain("Per-section breakdown");
    expect(src).toContain("breakDownBySection(attempt.questions, attempt.answers)");
    expect(src).toContain("Section score");
    // The commissioning rule, stated in the code itself.
    expect(src).toContain("just a raw score");
  });

  test("10. run summaries distinguish exam runs", () => {
    const src = read(PAGE);
    expect(src).toContain('? "exam"');
    expect(src).toContain('attempt.exam');
  });
});
