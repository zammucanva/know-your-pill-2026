/**
 * KYP Learning Test Suite — 21 checks.
 *   1-12  each medication page contains its micro-quiz question content
 *          (the inline active-recall MCQs from the locked medical data)
 *   13    the disease page contains its micro-quiz question content
 *   14-16 each substance page contains its core educational sections
 *   17    /quiz aggregate page renders the MCQ practice UI
 *   18    /learn learning hub renders educational content
 *   19-21 drug pages render the sticky lesson-progress tracker
 */

import { beforeAll, describe, expect, test } from "bun:test";
import { BASE_URL, ensureServer } from "./helpers/server";

const DRUGS = [
  "sertraline",
  "fluoxetine",
  "escitalopram",
  "paroxetine",
  "citalopram",
  "fluvoxamine",
  "venlafaxine",
  "duloxetine",
  "bupropion",
  "mirtazapine",
  "amitriptyline",
  "clomipramine",
];

function stripToText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ");
}

async function pageText(path: string): Promise<string> {
  const res = await fetch(`${BASE_URL}${path}`);
  expect(res.status).toBe(200);
  return stripToText(await res.text());
}

async function quizQuestionFor(slug: string, kind: "drug" | "disease"): Promise<string> {
  if (kind === "drug") {
    const { drugs } = await import("../src/lib/kyp/data/drugs/index");
    const drug = drugs.find((d) => d.slug === slug);
    return drug?.microQuizzes?.[0]?.question ?? "";
  }
  const { diseases } = await import("../src/lib/kyp/data/diseases/index");
  return diseases[0]?.microQuizzes?.[0]?.question ?? "";
}

beforeAll(async () => {
  await ensureServer();
});

describe("learning — medication pages embed micro-quiz content (12)", () => {
  for (const slug of DRUGS) {
    test(`${slug} page contains its first micro-quiz question`, async () => {
      const question = await quizQuestionFor(slug, "drug");
      expect(question.length).toBeGreaterThan(10);
      const text = await pageText(`/drugs/${slug}`);
      expect(text).toContain(question);
    }, 20000);
  }
});

describe("learning — disease and substance pages (4)", () => {
  test("major-depressive-disorder page contains its micro-quiz question", async () => {
    const question = await quizQuestionFor("major-depressive-disorder", "disease");
    expect(question.length).toBeGreaterThan(10);
    const text = await pageText("/diseases/major-depressive-disorder");
    expect(text).toContain(question);
  }, 20000);

  test("alcohol page contains core educational sections", async () => {
    const text = await pageText("/substances/alcohol");
    expect(text).toContain("Neurobiology");
    expect(text).toContain("Withdrawal");
  }, 20000);

  test("cannabis page contains core educational sections", async () => {
    const text = await pageText("/substances/cannabis");
    expect(text).toContain("Neurobiology");
  }, 20000);

  test("opioids page contains core educational sections", async () => {
    const text = await pageText("/substances/opioids");
    expect(text).toContain("Naloxone");
    expect(text).toContain("Withdrawal");
  }, 20000);
});

describe("learning — aggregate pages and progress UI (5)", () => {
  test("/quiz renders the MCQ practice interface", async () => {
    const res = await fetch(`${BASE_URL}/quiz`);
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(stripToText(html)).toContain("quiz");
  }, 20000);

  test("/learn renders the learning hub", async () => {
    const text = await pageText("/learn");
    expect(text.toLowerCase()).toContain("learn");
  }, 20000);

  async function assertLessonTracker(slug: string): Promise<void> {
    const { drugs } = await import("../src/lib/kyp/data/drugs/index");
    const drug = drugs.find((d) => d.slug === slug);
    const firstLesson = drug?.lessonGroups?.[0]?.title;
    expect(firstLesson).toBeTruthy();
    const res = await fetch(`${BASE_URL}/drugs/${slug}`);
    expect(res.status).toBe(200);
    const html = await res.text();
    // The sticky LessonProgress tracker renders the lesson group titles
    expect(stripToText(html)).toContain(firstLesson!);
  }

  test("sertraline page renders the lesson progress tracker", async () => {
    await assertLessonTracker("sertraline");
  }, 20000);

  test("fluoxetine page renders the lesson progress tracker", async () => {
    await assertLessonTracker("fluoxetine");
  }, 20000);

  test("escitalopram page renders the lesson progress tracker", async () => {
    await assertLessonTracker("escitalopram");
  }, 20000);
});
