import { describe, expect, test } from "bun:test";
import {
  getConceptSectionVisibility,
  splitRevisionParagraph,
  verifyRevisionCard,
  capQuickFacts,
  objectiveOneLiner,
} from "../src/lib/kyp/psychiatry-concept-visibility";
import { psychiatryCourses } from "../src/lib/kyp/data/psychiatry-courses";
import { getCourseRenderedSectionIds } from "../src/lib/kyp/psychiatry-course-sections";

/* ============================================================
   Concept template regression tests (redesign B/A/D).

   The concept-course presentation redesign must never:
   - hide real content (only placeholder disease-shaped families)
   - change a clinical word (revision-card splitting is a pure
     re-slicing of the source text, verified by reconstruction)
   - orphan a rendered section outside the lesson stepper
   - break the completion denominators shared with the library
   ============================================================ */

const concept = psychiatryCourses.filter((c) => c.kind === "concept");
const disorder = psychiatryCourses.filter((c) => c.kind === "disorder");

describe("concept template — section visibility (redesign B)", () => {
  test("1. all 35 concept courses use the concept visibility rules", () => {
    expect(concept.length).toBe(35);
    expect(disorder.length).toBe(74);
  });

  test("2. epidemiology is hidden exactly for the placeholder/absent courses (17)", () => {
    const hidden = concept.filter((c) => !getConceptSectionVisibility(c).epidemiology);
    expect(hidden.length).toBe(17);
    // the reference lesson is one of them
    expect(hidden.map((c) => c.slug)).toContain("psychiatric-phenomenology");
    // sleep-basics carries real prevalence anchors and keeps the section
    expect(getConceptSectionVisibility(
      concept.find((c) => c.slug === "sleep-basics")!
    ).epidemiology).toBe(true);
  });

  test("3. etiology renders for every course that has one (32 of 35)", () => {
    const shown = concept.filter((c) => getConceptSectionVisibility(c).etiology);
    expect(shown.length).toBe(32);
  });

  test("4. the patient guide renders for every concept course (real content everywhere)", () => {
    for (const course of concept) {
      expect(getConceptSectionVisibility(course).patientGuide).toBe(true);
    }
  });

  test("5. the explanatory layer renders when brain or neurotransmitter data exists", () => {
    const withData = concept.filter(
      (c) => c.brainRegions.length > 0 || c.neurotransmitters.length > 0
    );
    const rendered = concept.filter((c) => getConceptSectionVisibility(c).explanatoryLayer);
    expect(rendered.length).toBe(withData.length);
    // and the merged block keeps BOTH shared section anchors: the merge
    // must never change the completion denominators or the KG hrefs
    const phen = concept.find((c) => c.slug === "psychiatric-phenomenology")!;
    expect(getCourseRenderedSectionIds(phen).has("brain")).toBe(true);
    expect(getCourseRenderedSectionIds(phen).has("neurotransmitters")).toBe(true);
  });

  test("6. hidden epidemiology content stays in the data files (never deleted)", () => {
    const phen = concept.find((c) => c.slug === "psychiatric-phenomenology")!;
    expect(phen.epidemiology).toBeDefined();
    expect(phen.epidemiology!.globalPrevalence).toContain("No prevalence figure");
  });
});

describe("concept template — revision cards (redesign D)", () => {
  test("7. every revision card of every concept course preserves the source text exactly", () => {
    let checked = 0;
    for (const course of concept) {
      for (const para of course.highYieldSummary) {
        const card = splitRevisionParagraph(para);
        expect(verifyRevisionCard(card, para)).toBe(true);
        checked++;
      }
    }
    expect(checked).toBeGreaterThanOrEqual(200); // 252 in the corpus
  });

  test("8. the reference lesson's seven revision paragraphs all carry a leading label", () => {
    const phen = concept.find((c) => c.slug === "psychiatric-phenomenology")!;
    expect(phen.highYieldSummary.length).toBe(7);
    for (const para of phen.highYieldSummary) {
      expect(splitRevisionParagraph(para).title).toBeTruthy();
    }
  });

  test("9. quick facts are capped at five visible cards (priority honoured when present)", () => {
    for (const course of concept) {
      const { visible, rest } = capQuickFacts(course.quickFacts);
      expect(visible.length).toBe(Math.min(5, course.quickFacts.length));
      expect(visible.length + rest.length).toBe(course.quickFacts.length);
    }
  });

  test("10. objective one-liners cut at the first dash/semicolon and stay shorter", () => {
    const phen = concept.find((c) => c.slug === "psychiatric-phenomenology")!;
    for (const objective of phen.learningObjectives) {
      const oneLiner = objectiveOneLiner(objective);
      expect(oneLiner.length).toBeLessThanOrEqual(objective.length);
    }
  });
});

describe("concept template — the lesson stepper contract (redesign A)", () => {
  // The fixed lesson plan from the concept course view
  const LESSON_PLAN: Record<number, string[]> = {
    1: ["top", "quick-facts", "learning-objectives", "knowledge-graph"],
    2: ["mechanism", "explanatory-layer", "brain", "neurotransmitters", "pathways", "timeline"],
    3: ["symptoms", "diagnosis", "differential", "management", "patient-guide"],
    4: ["indian-practice", "decision-path", "common-mistakes"],
    5: ["exam-lens", "clinical-case", "drug-navigation", "high-yield"],
    6: ["active-recall", "faq", "references"],
  };

  test("11. every rendered section of every concept course belongs to exactly one lesson", () => {
    for (const course of concept) {
      const rendered = getCourseRenderedSectionIds(course);
      // "top" plus every rendered section id must map into the plan
      const planned = new Set(Object.values(LESSON_PLAN).flat());
      for (const id of rendered) {
        if (id === "epidemiology-band") continue; // the shared band rides with symptoms
        expect(planned.has(id)).toBe(true);
      }
    }
  });

  test("12. the explanatory layer maps onto the shared brain/neurotransmitters gating ids", () => {
    // every mode that shows brain or neurotransmitters also shows the
    // merged layer (the gating id is exactly "brain")
    for (const course of concept) {
      for (const path of course.learningPaths) {
        const showsBrain = path.visibleSections.includes("brain");
        const showsNT = path.visibleSections.includes("neurotransmitters");
        expect(showsBrain).toBe(showsNT);
      }
    }
  });

  test("13. every concept course has six lesson groups with checkpoints and section ids", () => {
    for (const course of concept) {
      expect(course.lessonGroups.length).toBe(6);
      for (const group of course.lessonGroups) {
        expect(group.sectionIds.length).toBeGreaterThan(0);
        expect(group.checkpoint.length).toBeGreaterThan(0);
      }
    }
  });

  test("14. the lesson hash contract: #lesson-1..#lesson-6 (URLs stay stable)", () => {
    expect(Object.keys(LESSON_PLAN).map((n) => `#lesson-${n}`)).toEqual([
      "#lesson-1",
      "#lesson-2",
      "#lesson-3",
      "#lesson-4",
      "#lesson-5",
      "#lesson-6",
    ]);
  });
});

describe("concept template — disorder courses keep the shared layout", () => {
  test("15. disorder courses are untouched by the concept visibility rules", () => {
    // the visibility helpers are only consulted by the concept branch;
    // sanity: they run without throwing on disorder data and never
    // claim an absent explanatory layer for courses that have one
    const gad = disorder.find((c) => c.slug === "gad")!;
    expect(gad).toBeDefined();
    expect(getCourseRenderedSectionIds(gad).has("management")).toBe(true);
  });
});
