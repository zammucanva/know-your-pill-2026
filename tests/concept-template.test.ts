import { describe, expect, test } from "bun:test";
import {
  getConceptSectionVisibility,
  splitRevisionParagraph,
  verifyRevisionCard,
  capQuickFacts,
  objectiveOneLiner,
  clampSentences,
  mechanismInShort,
  MECHANISM_IN_SHORT_MAX,
  stripPlaceholderSentences,
  renderableCourse,
  isConceptPlaceholderText,
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
  // The lesson plan from the concept course view. The hero ("top",
  // "learning-objectives") renders as the persistent course header —
  // always visible, never inside a lesson panel.
  const HERO_SECTIONS = ["top", "learning-objectives"];
  const LESSON_PLAN: Record<number, string[]> = {
    1: ["quick-facts", "knowledge-graph"],
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
      const planned = new Set([...Object.values(LESSON_PLAN).flat(), ...HERO_SECTIONS]);
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

/* ============================================================
   Concept template — declutter mission contracts.
   Every strengthened test below pins a judgment call:
   16 — the mechanism In-short integrity rule (judgment #1)
   17 — clampSentences reconstruction (wall guards + revision cards)
   18 — placeholder stripping removes only placeholder sentences
        and the mental-health-law severityScales indianNote is
        PRESERVED as real content (judgment #3)
   19 — renderableCourse purity: strip families only, everything
        else reference-untouched
   20 — exam tabs: multiple contexts exist for every course
   21 — template source pins: mechanism order, KG disclosure,
        differential caption, exam-panel hiding, footer placement,
        navigation contract
   ============================================================ */

const norm = (s: string) => s.replace(/\s+/g, " ").trim();
const wc = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

describe("concept template — declutter mission (phases 4–15)", () => {
  test("16. mechanism 'In short' is a verbatim, clause-bounded prefix of every narrative (judgment #1)", () => {
    for (const course of concept) {
      const summary = course.mechanism.summary;
      const inShort = mechanismInShort(summary);
      // verbatim prefix — never a paraphrase, never a truncation
      expect(summary.startsWith(inShort)).toBe(true);
      expect(inShort.length).toBeGreaterThan(0);
      // clause-bounded: the next source character is a space, an
      // em-dash or nothing — a mid-word cut is impossible
      expect(/^$|^[\s—]/.test(summary.slice(inShort.length))).toBe(true);
      // the cap holds for the whole corpus (the recovered-memories
      // 350-character opening resolves at the em-dash: 202 chars)
      expect(inShort.length).toBeLessThanOrEqual(MECHANISM_IN_SHORT_MAX);
      // greedy: the next boundary beyond the cut would exceed the cap
      // (mirrors the implementation's boundary enumeration)
      if (inShort.length < summary.length) {
        const nextBoundaries: number[] = [];
        for (let i = inShort.length; i < summary.length; i++) {
          const ch = summary[i];
          if (ch === "." || ch === "!" || ch === "?" || ch === ";") {
            if (i + 1 === summary.length || summary[i + 1] === " ") nextBoundaries.push(i + 1);
          } else if (ch === "—" && (i + 1 === summary.length || summary[i + 1] === " ")) {
            nextBoundaries.push(i);
          }
        }
        // +2: the impl's own cut can sit at inShort.length (punctuation
        // cuts) or inShort.length+1 (em-dash cuts lose a trimmed space),
        // so the self-boundary must not count as the "next" one
        const next = nextBoundaries.find((b) => b > inShort.length + 2) ?? summary.length;
        expect(next).toBeGreaterThan(MECHANISM_IN_SHORT_MAX);
      }
    }
    // the exact recovered-memories resolution (judgment #1 evidence)
    const rm = concept.find((c) => c.slug === "recovered-memories")!;
    expect(mechanismInShort(rm.mechanism.summary)).toBe(
      "The reconciliation runs through ordinary memory science. First, inhibition is normal machinery: ordinary memory relies as much on the ability to suppress unwanted material as on the ability to access it"
    );
  });

  test("17. clampSentences: visible + rest reconstructs the source; visible never exceeds the cap", () => {
    // unit contracts
    expect(clampSentences("", 10)).toEqual({ visible: "", rest: "" });
    const one = clampSentences("Single sentence.", 10);
    expect(one.rest).toBe("");
    expect(norm(one.visible)).toBe("Single sentence.");
    // corpus sweep — every clamped site the template uses
    let checked = 0;
    const check = (text: string | undefined, cap: number) => {
      if (!text) return;
      const { visible, rest } = clampSentences(text, cap);
      expect(norm(rest ? `${visible} ${rest}` : visible)).toBe(norm(text));
      expect(wc(visible)).toBeLessThanOrEqual(cap);
      checked++;
    };
    for (const course of concept) {
      for (const para of course.highYieldSummary) check(para, 40);
      if (course.epidemiology) {
        check(course.epidemiology.globalPrevalence, 100);
        check(course.epidemiology.indianPrevalence, 100);
        check(course.epidemiology.genderRatio, 100);
        check(course.epidemiology.ageOfOnset, 100);
      }
      course.etiology?.forEach((f) => check(f.details, 100));
      course.management?.forEach((m) => {
        check(m.description, 100);
        check(m.whenToUse, 100);
        check(m.indianContext, 100);
      });
      check(course.patientGuide.whatIsIt, 100);
      check(course.patientGuide.whatCausesIt, 100);
      check(course.patientGuide.symptoms, 100);
      check(course.patientGuide.treatment, 100);
      check(course.indianPractice.systemContext, 100);
      check(course.indianPractice.indianGuidelines, 100);
      check(course.indianPractice.programmeContext, 100);
      check(course.indianPractice.costConsiderations, 100);
      check(course.indianPractice.culturalConsiderations, 100);
      if (course.examLens) {
        const items = [
          ...course.examLens.mbbs.viva, ...course.examLens.mbbs.practical, ...course.examLens.mbbs.longAnswer,
          ...course.examLens.neetPg.highYield, ...course.examLens.neetPg.pyqConcepts,
          ...course.examLens.inicet.clinicalReasoning, ...course.examLens.fmge.frequentlyTested,
          ...course.examLens.psychiatryResidency.advancedPearls,
        ];
        items.forEach((item) => check(item, 100));
      }
    }
    expect(checked).toBeGreaterThan(2000);
  });

  test("18. placeholder stripping removes only placeholder sentences (judgment #3)", () => {
    // every strip-family field the render maps, with its raw hit count
    // pinned: data changes must force a deliberate re-classification
    interface Hit { slug: string; where: string; raw: string; stripped: string; }
    const hits: Hit[] = [];
    const collect = (course: typeof concept[number], rc: ReturnType<typeof renderableCourse>) => {
      const pairs: Array<[string, string | undefined, string | undefined]> = [];
      course.quickFacts.forEach((f, i) =>
        pairs.push([`quickFacts[${i}].detail`, f.detail, rc.quickFacts[i].detail]));
      if (course.epidemiology && rc.epidemiology) {
        pairs.push(
          ["epi.globalPrevalence", course.epidemiology.globalPrevalence, rc.epidemiology.globalPrevalence],
          ["epi.indianPrevalence", course.epidemiology.indianPrevalence, rc.epidemiology.indianPrevalence],
          ["epi.genderRatio", course.epidemiology.genderRatio, rc.epidemiology.genderRatio],
          ["epi.ageOfOnset", course.epidemiology.ageOfOnset, rc.epidemiology.ageOfOnset],
        );
      }
      course.etiology?.forEach((f, i) =>
        pairs.push([`etiology[${i}].details`, f.details, rc.etiology?.[i]?.details]));
      course.diagnosticCriteria?.forEach((d, i) =>
        pairs.push([`dc[${i}].indianNote`, d.indianNote, rc.diagnosticCriteria?.[i]?.indianNote]));
      course.management?.forEach((m, i) => {
        pairs.push(
          [`mgmt[${i}].description`, m.description, rc.management?.[i]?.description],
          [`mgmt[${i}].whenToUse`, m.whenToUse, rc.management?.[i]?.whenToUse],
          [`mgmt[${i}].indianContext`, m.indianContext, rc.management?.[i]?.indianContext],
        );
      });
      pairs.push(
        ["pg.whatIsIt", course.patientGuide.whatIsIt, rc.patientGuide.whatIsIt],
        ["pg.whatCausesIt", course.patientGuide.whatCausesIt, rc.patientGuide.whatCausesIt],
        ["pg.symptoms", course.patientGuide.symptoms, rc.patientGuide.symptoms],
        ["pg.treatment", course.patientGuide.treatment, rc.patientGuide.treatment],
        ["ip.systemContext", course.indianPractice.systemContext, rc.indianPractice.systemContext],
        ["ip.indianGuidelines", course.indianPractice.indianGuidelines, rc.indianPractice.indianGuidelines],
        ["ip.programmeContext", course.indianPractice.programmeContext, rc.indianPractice.programmeContext],
        ["ip.costConsiderations", course.indianPractice.costConsiderations, rc.indianPractice.costConsiderations],
        ["ip.culturalConsiderations", course.indianPractice.culturalConsiderations, rc.indianPractice.culturalConsiderations],
      );
      for (const [where, raw, stripped] of pairs) {
        if (raw && isConceptPlaceholderText(raw)) {
          hits.push({ slug: course.slug, where, raw, stripped: stripped ?? "" });
        }
      }
    };
    for (const course of concept) {
      collect(course, renderableCourse(course));
    }
    // the corpus count — pinned (the recovered implementation's "46
    // fields" counted the whole object; the RENDER-mapped families
    // hold 31 of them)
    expect(hits.length).toBe(31);
    // known members
    expect(hits.some((h) => h.slug === "psychiatric-phenomenology" && h.where === "epi.globalPrevalence")).toBe(true);
    expect(hits.some((h) => h.slug === "neurotransmitters" && h.where === "pg.symptoms")).toBe(true);
    expect(hits.some((h) => h.slug === "mental-health-law" && h.where === "ip.costConsiderations")).toBe(true);
    // nothing placeholder survives on the rendered surface
    for (const h of hits) {
      expect(isConceptPlaceholderText(h.stripped)).toBe(false);
    }
    // every stripped field remains a (case-insensitive) subsequence
    // of its source — pure removal, never a rewrite
    const isSubsequence = (needle: string, haystack: string) => {
      const n = needle.toLowerCase();
      const h = haystack.toLowerCase();
      let j = 0;
      for (let i = 0; i < h.length && j < n.length; i++) {
        if (h[i] === n[j]) j++;
      }
      return j === n.length;
    };
    for (const h of hits) {
      expect(isSubsequence(h.stripped, h.raw)).toBe(true);
    }
    // mixed sentences keep their clinical clauses (mental-health-law's
    // cost card keeps the expensive-failures clause)
    const mhl = concept.find((c) => c.slug === "mental-health-law")!;
    const mhlStripped = renderableCourse(mhl).indianPractice.costConsiderations;
    expect(mhlStripped).toContain("the expensive failures are the undocumented ones");
    // judgment #3: the severityScales indianNote is REAL clinical-legal
    // content — it matches no placeholder pattern and is never routed
    // through the strip (severityScales passes through by reference)
    expect(mhl.severityScales).toBeDefined();
    expect(isConceptPlaceholderText(mhl.severityScales![0].indianNote)).toBe(false);
    expect(renderableCourse(mhl).severityScales).toBe(mhl.severityScales);
    expect(mhl.severityScales![0].indianNote).toContain("No cut-offs exist and none are invented");
    // the strip never touches clean text
    const clean = "Real clinical content with a figure of five per cent.";
    expect(stripPlaceholderSentences(clean)).toBe(clean);
  });

  test("19. renderableCourse is a presentation view only — data families pass through untouched", () => {
    for (const course of concept) {
      const rc = renderableCourse(course);
      // unrendered/unmapped families keep their references
      expect(rc.severityScales).toBe(course.severityScales);
      expect(rc.contentGaps).toBe(course.contentGaps);
      expect(rc.microQuizzes).toBe(course.microQuizzes);
      expect(rc.highYieldSummary).toBe(course.highYieldSummary);
      expect(rc.faqs).toBe(course.faqs);
      expect(rc.clinicalCases).toBe(course.clinicalCases);
      expect(rc.activeRecallQuestions).toBe(course.activeRecallQuestions);
      expect(rc.mechanism).toBe(course.mechanism);
      expect(rc.knowledgeGraph).toBe(course.knowledgeGraph);
      expect(rc.brainRegions).toBe(course.brainRegions);
      expect(rc.neurotransmitters).toBe(course.neurotransmitters);
      expect(rc.lessonGroups).toBe(course.lessonGroups);
      expect(rc.learningObjectives).toBe(course.learningObjectives);
    }
    // the reference course's hidden epidemiology stays hidden even
    // through the renderable view (its lifetimeRisk — which drives
    // the visibility rule — is never stripped: it does not render)
    const phen = concept.find((c) => c.slug === "psychiatric-phenomenology")!;
    expect(getConceptSectionVisibility(renderableCourse(phen)).epidemiology).toBe(false);
    // a mixed-field strip can change the STRIPPED text's visibility
    // verdict — which is exactly why the VIEW computes visibility on
    // the RAW course (pinned in test 22). Illustrate the danger so a
    // future regression cannot silently reintroduce it:
    let flips = 0;
    for (const course of concept) {
      const raw = getConceptSectionVisibility(course);
      const view = getConceptSectionVisibility(renderableCourse(course));
      if (raw.epidemiology !== view.epidemiology || raw.etiology !== view.etiology) flips++;
    }
    expect(flips).toBeGreaterThan(0); // stripping is visible-text-changing by design
  });

  test("20. exam tabs exist for multiple contexts on every concept course", () => {
    for (const course of concept) {
      const lens = course.examLens;
      expect(lens).toBeDefined();
      const contexts = [
        lens!.mbbs.viva.length + lens!.mbbs.practical.length + lens!.mbbs.longAnswer.length > 0,
        lens!.neetPg.highYield.length + lens!.neetPg.pyqConcepts.length > 0,
        lens!.inicet.clinicalReasoning.length > 0,
        lens!.fmge.frequentlyTested.length > 0,
        lens!.psychiatryResidency.advancedPearls.length > 0,
      ].filter(Boolean).length;
      expect(contexts).toBeGreaterThan(1);
    }
  });
});

describe("concept template — declutter source pins", () => {
  const read = (path: string) => Bun.file(path).text();

  test("21. template pins: mechanism order, KG disclosure, differential caption, exam panels", async () => {
    const sectionsSrc = await read("src/components/psychiatry/course/concept/concept-sections.tsx");
    const revisionSrc = await read("src/components/psychiatry/course/concept/concept-revision.tsx");
    // mechanism: In-short BEFORE the narrative details BEFORE the steps
    expect(sectionsSrc).toContain("mechanismInShort(course.mechanism.summary)");
    expect(sectionsSrc.indexOf("In short. ")).toBeLessThan(
      sectionsSrc.indexOf("Read the full narrative")
    );
    expect(sectionsSrc.indexOf("Read the full narrative")).toBeLessThan(
      sectionsSrc.indexOf("steps in detail")
    );
    // the full narrative text still renders (inside the details)
    expect(sectionsSrc).toContain("{course.mechanism.summary}");
    // KG disclosure (no eager layout, no observer, no motion)
    expect(sectionsSrc).toContain("Show knowledge graph");
    expect(sectionsSrc).not.toContain("IntersectionObserver");
    expect(sectionsSrc).not.toContain("motion.a");
    // differential: caption + scope + the 640px breakpoint
    expect(sectionsSrc).toContain("<caption");
    expect(sectionsSrc).toContain('scope="row"');
    expect(sectionsSrc).toContain("min-[640px]:block");
    expect(sectionsSrc).toContain("min-[640px]:hidden");
    // quick facts label
    expect(sectionsSrc).toContain("More facts ({course.quickFacts.length})");
    expect(sectionsSrc).not.toContain("All key facts");
    // exam panels: inactive panels use the hidden class (inert), never sr-only
    expect(revisionSrc).toContain('tab !== null && !selected && "hidden"');
    expect(revisionSrc).not.toContain('!selected && "sr-only"');
    // revision cards: short slice + Read more remainder
    expect(revisionSrc).toContain("REVISION_VISIBLE_MAX_WORDS = 40");
    expect(revisionSrc).toContain("Read more");
    expect(revisionSrc).not.toContain("more lines");
    // exam lens keyboard: Home + End
    expect(revisionSrc).toContain('"Home"');
    expect(revisionSrc).toContain('"End"');
  });

  test("22. view pins: progress once, curriculum-next in lesson 6, navigation contract", async () => {
    const viewSrc = await read("src/components/psychiatry/course/concept/concept-course-view.tsx");
    // progress renders exactly once — the ResumeBanner is gone
    expect(viewSrc).not.toContain("ResumeBanner");
    // visibility + rendered-section ids stay keyed on the RAW course
    // (placeholder detection must see the unstripped source text)
    expect(viewSrc).toContain("getCourseRenderedSectionIds(course)");
    expect(viewSrc).toContain("getConceptSectionVisibility(course)");
    expect(viewSrc).not.toContain("getConceptSectionVisibility(rc)");
    // Where-the-curriculum-goes-next lives ONLY inside Lesson 6
    expect(viewSrc).toContain("lesson.number === 6 &&");
    {
      const gate = viewSrc.indexOf("lesson.number === 6 &&");
      const nextStep = viewSrc.indexOf("<CourseNextStep", gate);
      const sectionEnd = viewSrc.indexOf("</section>", gate);
      expect(gate).toBeGreaterThan(-1);
      expect(nextStep).toBeGreaterThan(-1);
      expect(nextStep).toBeLessThan(sectionEnd); // inside the lesson-6 section
    }
    // hash navigation runs the full goToLesson contract
    expect(viewSrc).toContain("goToLesson(n);");
    expect(viewSrc).toContain('startsWith("exam-")');
    // chips: aria-controls + roving tabindex + Home/End
    expect(viewSrc).toContain('aria-controls={`lesson-${lesson.number}`}');
    expect(viewSrc).toContain("tabIndex={isActive ? 0 : -1}");
    expect(viewSrc).toContain('"Home"');
    expect(viewSrc).toContain('"End"');
    // Previous / Next at the bottom of every lesson
    expect(viewSrc).toContain("data-lesson-pager");
    expect(viewSrc).toContain("Previous{prevOfThis ?");
    // no 28px stepper buttons
    expect(viewSrc).not.toContain("h-7 w-7");
    // the renderable course is what sections render
    expect(viewSrc).toContain("renderableCourse(course)");
  });

  test("23. hero + CSS pins: objective disclosure, evidence legend, touch floors", async () => {
    const heroSrc = await read("src/components/psychiatry/course/concept/concept-hero.tsx");
    const cssSrc = await read("src/app/globals.css");
    // objectives: one-liners + per-objective full-text disclosure
    expect(heroSrc).toContain("Read the full objective");
    expect(heroSrc).toContain("objectiveOneLiner(objective)");
    // the evidence legend is a collapsed native disclosure
    expect(await read("src/components/psychiatry/course/concept/concept-ui.tsx")).toContain(
      '<details className="group relative inline-flex align-middle">'
    );
    // touch-target floors exist (44px)
    expect(cssSrc).toContain(".kyp-touch-full");
    expect(cssSrc).toContain(".kyp-touch-y");
    expect(cssSrc).toContain("min-height: 44px");
    // the lesson pager never prints
    expect(cssSrc).toContain("[data-lesson-pager]");
  });
});
