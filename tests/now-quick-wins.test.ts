/**
 * NOW Quick Wins contract suite — pins the N1–N8 commissioning specs.
 *
 * Source-level tests (no server required):
 *   N1  Mistake Book: /study/mistakes route exists; the list UI uses
 *       the real progress store; neutral framing ("questions to
 *       revisit"); per-entry clear + class filters + empty state that
 *       invites a quiz.
 *   N2  Retest: "Retest me on these" exists on Review Incorrect AND
 *       the Mistake Book; the handoff is one-shot sessionStorage.
 *   N3  Timed mode: opt-in toggle that DEFAULTS OFF.
 *   N4  Presets: one-tap chips in the builder; presets live in the
 *       namespaced progress store.
 *   N5  Related medications: rendered on EVERY drug page from the
 *       related-drug schema, with "coming soon" degradation — never
 *       a dead link.
 *   N6  Question-to-knowledge deep links: authored questions link to
 *       anchored sections verified against the course outline.
 *   N7  Class landing pages carry an at-a-glance comparison table +
 *       "Test this class" entry; the builder accepts ?class=.
 *   N8  Study Next panel composes resume + unfinished + mistakes +
 *       saved tests, and renders no placeholder padding.
 */

import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const read = (rel: string): string =>
  readFileSync(join(process.cwd(), rel), "utf8");

const MISTAKES_PAGE = "src/app/study/mistakes/page.tsx";
const CUSTOM_PAGE = "src/app/quiz/custom/custom-test-builder.tsx"; // the builder moved out of page.tsx (server-rendered shell)
const QUIZ_PAGE = "src/app/quiz/page.tsx";
const STUDY_PAGE = "src/app/study/page.tsx";
const DRUG_PAGE = "src/app/drugs/[slug]/page.tsx";
const CLASS_PAGE = "src/app/drugs/class/[classId]/page.tsx";
const RELATED = "src/components/kyp/sections/drug/drug-related-drugs.tsx";
const NEXT_PANEL = "src/components/kyp/sections/study/study-next-panel.tsx";
const ENGINE = "src/lib/kyp/custom-test/engine.ts";
const HANDOFF = "src/lib/kyp/custom-test/retest-handoff.ts";
const STORE = "src/lib/kyp/progress/progress-store.ts";

describe("NOW quick wins — contract pins", () => {
  test("N1: the Mistake Book route /study/mistakes exists", () => {
    expect(existsSync(join(process.cwd(), MISTAKES_PAGE))).toBe(true);
  });

  test("N1: the Mistake Book reads the real store and stays neutral", () => {
    const src = read(MISTAKES_PAGE);
    expect(src).toContain("useLocalProgress");
    expect(src).toContain("clearMistake");
    expect(src).toContain("clearAllMistakes");
    // Class filters + aggregation
    expect(src).toContain("getMistakeBookStats");
    expect(src).toContain("Filter by class");
    // Neutral framing — questions to revisit, not failures
    expect(src).toContain("Questions to revisit");
    expect(src).not.toMatch(/you failed|shame|stupid|bad score/i);
    // Empty state invites a quiz
    expect(src).toContain("Nothing to revisit yet");
    expect(src).toContain('href="/quiz"');
    expect(src).toContain('href="/quiz/custom"');
  });

  test("N2: retest actions exist on the Mistake Book and the per-test screens", () => {
    expect(read(MISTAKES_PAGE)).toContain("Retest me on these");
    const custom = read(CUSTOM_PAGE);
    expect(custom).toContain("Retest me on these");
    expect(custom).toContain("Retest these");
    // Before/after comparison is present
    expect(custom).toContain("Compared with last time");
    expect(custom).toContain("Previously chose");
  });

  test("N2: the retest handoff is a one-shot sessionStorage request", () => {
    const handoff = read(HANDOFF);
    expect(handoff).toContain("sessionStorage");
    expect(handoff).toContain("RETEST_REQUEST_KEY");
    expect(read(HANDOFF)).toContain("takeRetestRequest");
    // The engine regenerates the exact identity set deterministically
    expect(read(ENGINE)).toContain("export function buildRetest");
  });

  test("N3: timed mode is opt-in and defaults OFF", () => {
    const custom = read(CUSTOM_PAGE);
    expect(custom).toContain("useState(false)"); // const [timed, setTimed] = React.useState(false)
    expect(custom).toMatch(/\[timed,\s*setTimed\]\s*=\s*React\.useState\(false\)/);
    expect(custom).toContain("Timed — exam pacing");
    expect(custom).toContain("Off by");
    // Pacing indicator + results timing
    expect(custom).toContain("On pace");
    expect(custom).toContain("Behind pace");
    expect(custom).toContain("allotted");
  });

  test("N4: presets are stored in the namespaced progress store and launched in one tap", () => {
    const store = read(STORE);
    expect(store).toContain("testPresets");
    expect(store).toContain("saveTestPreset");
    expect(store).toContain("recordPresetLaunch");
    const custom = read(CUSTOM_PAGE);
    expect(custom).toContain("Saved tests");
    expect(custom).toContain("launchPreset");
    expect(custom).toContain("get(\"preset\")");
    expect(custom).toContain("Save this setup");
  });

  test("N5: every drug page renders Related Medications with graceful degradation", () => {
    const page = read(DRUG_PAGE);
    expect(page).toContain("<DrugRelatedDrugs");
    // The registry decides which pages exist — never a dead link.
    expect(page).toContain("builtDrugSlugs={builtDrugSlugs}");
    const related = read(RELATED);
    // The registry decides which pages exist — never a dead link (the
    // resolver checks the explicit slug OR the registry name match).
    expect(related).toContain("resolveRelatedDrugHref(rd, built)");
    expect(related).toContain("Page coming soon");
    // The when-NOT-to-choose callout is data-driven, not hardcoded
    expect(related).toContain("drug.whenNotToUse");
    expect(related).not.toContain("When NOT to choose sertraline");
  });

  test("N6: authored questions deep-link to verified anchored sections", () => {
    const engine = read(ENGINE);
    expect(engine).toContain("anchoredDrugHref(drug.slug, quiz.afterSectionId)");
    // The course outline is the single source of truth for anchors
    expect(
      existsSync(join(process.cwd(), "src/lib/kyp/drug-course-sections.ts"))
    ).toBe(true);
    expect(read(DRUG_PAGE)).toContain("DRUG_COURSE_NAV_ITEMS");
    // /quiz deep-links drug questions to sections too
    expect(read(QUIZ_PAGE)).toContain("anchoredDrugHref(drug.slug, q.afterSectionId)");
  });

  test("N7: class pages present the comparison table and a class test entry", () => {
    const cls = read(CLASS_PAGE);
    expect(cls).toContain("classAttributeRows");
    expect(cls).toContain("Test this class");
    expect(cls).toContain("getPoolStats");
    expect(cls).toContain("at-a-glance");
    // Aggregation only — no new medical claims
    expect(cls).toContain("no new claims");
    // The builder accepts ?class= and offers quick-select class chips
    const custom = read(CUSTOM_PAGE);
    expect(custom).toContain('get("class")');
    expect(custom).toContain("Quick select a class");
  });

  test("N8: the Study Next panel composes the four inputs with no padding", () => {
    const panel = read(NEXT_PANEL);
    expect(panel).toContain("useLocalProgress");
    expect(panel).toContain("coursePercentComplete");
    expect(panel).toContain("Continue where you left off");
    expect(panel).toContain("Start Learning");
    expect(panel).toContain('href="/study/mistakes"');
    expect(panel).toContain("preset=");
    // No fabricated numbers on the start state
    expect(panel).not.toMatch(/(start|noProgress)[^\n]*%\s*complete/i);
    // And the study hub actually uses it
    expect(read(STUDY_PAGE)).toContain("StudyNextPanel");
    expect(read(STUDY_PAGE)).toContain("MistakeBookEntry");
    // The replaced component is gone (one owner, no dead code)
    expect(
      existsSync(
        join(process.cwd(), "src/components/kyp/sections/study/study-hero-actions.tsx")
      )
    ).toBe(false);
  });

  test("N1: both practice surfaces record misses and resolve correct answers", () => {
    const quiz = read(QUIZ_PAGE);
    expect(quiz).toContain("recordMistakes");
    expect(quiz).toContain("resolveMistakes");
    const custom = read(CUSTOM_PAGE);
    expect(custom).toContain("recordMistakes");
    expect(custom).toContain("resolveMistakes");
  });
});
