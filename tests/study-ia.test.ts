/**
 * Study Mode IA unification regression suite.
 *
 * Pins the information-architecture contract:
 *   - Study Mode is the SINGLE top-level learning destination
 *     (navbar has no peer Practice entry; desktop + mobile share navLinks)
 *   - the footer Platform column points at Study Mode, not a competing
 *     practice destination
 *   - the Study Mode hub exposes BOTH stages — LEARN (continue +
 *     medication courses) and PRACTICE (Quick MCQs + Custom Test) —
 *     with real progress only (useLocalProgress, no fabricated numbers)
 *   - every existing route is preserved: /study, /quiz, /quiz/custom
 *     (no route was deleted by the consolidation)
 *   - breadcrumbs root at Study Mode so practice deep links always
 *     offer a path back to the hub
 *   - progress namespaces stay separate — the practice stats line reads
 *     data.practice and data.customTest independently, never merging them
 *
 * Pure source-level tests — no server required.
 */

import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const read = (rel: string): string =>
  readFileSync(join(process.cwd(), rel), "utf8");

const NAVBAR = "src/components/kyp/sections/navbar.tsx";
const FOOTER = "src/components/kyp/sections/footer.tsx";
const STUDY = "src/app/study/page.tsx";
const QUIZ = "src/app/quiz/page.tsx";
const CUSTOM = "src/app/quiz/custom/page.tsx";
const HERO_ACTIONS = "src/components/kyp/sections/study/study-hero-actions.tsx";
const STATS_LINE = "src/components/kyp/sections/study/practice-stats-line.tsx";

describe("study mode IA — single top-level learning destination", () => {
  test("navbar navLinks contain no peer Practice (/quiz) entry", () => {
    const src = read(NAVBAR);
    expect(src).not.toContain('{ href: "/quiz", label: "Practice" }');
    expect(src).not.toMatch(/label:\s*"Practice"/);
  });

  test("navbar exposes Study Mode exactly once", () => {
    const src = read(NAVBAR);
    const matches = src.match(/label: "Study Mode"/g) ?? [];
    expect(matches.length).toBe(1);
  });

  test("navLinks are exactly the five unified destinations", () => {
    const src = read(NAVBAR);
    const hrefs = [...src.matchAll(/href: "([^"]+)"/g)].map((m) => m[1]);
    expect(hrefs).toEqual([
      "/learn",
      "/drugs",
      "/#substances",
      "/study",
      "/medicine",
    ]);
  });

  test("desktop and mobile menus share one navLinks array (no separate mobile Practice link)", () => {
    const src = read(NAVBAR);
    // The mobile menu renders the same navLinks — there is no second
    // link list that could reintroduce a peer Practice item.
    expect(src).not.toMatch(/mobileLinks|navLinksMobile/);
  });

  test("footer Platform column points at Study Mode, not Practice MCQs", () => {
    const src = read(FOOTER);
    expect(src).toContain('{ label: "Study Mode", href: "/study" }');
    expect(src).not.toContain('{ label: "Practice MCQs", href: "/quiz" }');
  });
});

describe("study mode IA — unified hub exposes Learn and Practice", () => {
  test("study page has a LEARN anchor (id=medications) and a PRACTICE section (id=practice)", () => {
    const src = read(STUDY);
    expect(src).toContain('id="medications"');
    expect(src).toContain('id="practice"');
  });

  test("study page surfaces the existing Quick MCQs and Custom Test actions", () => {
    const src = read(STUDY);
    expect(src).toContain("Quick MCQs");
    expect(src).toContain("Custom Test");
    expect(src).toContain('href="/quiz"');
    expect(src).toContain('href="/quiz/custom"');
  });

  test("study page no longer presents the old competing hero CTA", () => {
    const src = read(STUDY);
    expect(src).not.toContain("Practice MCQs");
  });

  test("hero CTAs are progress-aware and honest (real store, no fabricated numbers)", () => {
    const src = read(HERO_ACTIONS);
    expect(src).toContain("useLocalProgress");
    expect(src).toContain("coursePercentComplete");
    expect(src).toContain("Continue where you left off");
    expect(src).toContain("Start Learning");
    // No-progress state must not fake a percentage.
    expect(src).not.toMatch(/(start|noProgress)[^\n]*%\s*complete/i);
  });

  test("practice stats line reads the separate progress namespaces without merging", () => {
    const src = read(STATS_LINE);
    expect(src).toContain("useLocalProgress");
    expect(src).toContain("data.practice");
    expect(src).toContain("data.customTest");
    // renders nothing until a real run exists
    expect(src).toContain("attempts === 0");
  });

  test("practice and learn sections use mobile-friendly wrapping", () => {
    const src = read(STUDY);
    // Hero CTA containers and section headers wrap instead of overflowing;
    // practice rows follow the site's established responsive row pattern.
    const heroSrc = read(HERO_ACTIONS);
    expect(heroSrc.match(/flex-wrap/g)?.length ?? 0).toBeGreaterThanOrEqual(2);
    expect(src.match(/flex-wrap/g)?.length ?? 0).toBeGreaterThanOrEqual(2);
  });
});

describe("study mode IA — existing routes preserved", () => {
  test("/study, /quiz and /quiz/custom route files all still exist", () => {
    expect(existsSync(join(process.cwd(), STUDY))).toBe(true);
    expect(existsSync(join(process.cwd(), QUIZ))).toBe(true);
    expect(existsSync(join(process.cwd(), CUSTOM))).toBe(true);
  });

  test("no /practice route directory was created", () => {
    expect(existsSync(join(process.cwd(), "src/app/practice"))).toBe(false);
  });

  test("custom test engine and progress store are untouched single sources", () => {
    expect(
      existsSync(join(process.cwd(), "src/lib/kyp/custom-test/engine.ts"))
    ).toBe(true);
    expect(
      existsSync(join(process.cwd(), "src/lib/kyp/progress/progress-store.ts"))
    ).toBe(true);
  });
});

describe("study mode IA — breadcrumbs root at Study Mode", () => {
  test("/quiz breadcrumb: Study Mode › Practice", () => {
    const src = read(QUIZ);
    expect(src).toContain('href="/study"');
    expect(src).toContain("Study Mode");
    expect(src).toContain('aria-current="page"');
  });

  test("/quiz/custom breadcrumb: Study Mode › Practice › Custom Test", () => {
    const src = read(CUSTOM);
    expect(src).toContain('href="/study"');
    expect(src).toContain('href="/quiz"');
    expect(src).toContain("Custom Test");
  });

  test("in-content practice CTAs keep their direct /quiz deep links", () => {
    // learn-banner and test-understanding-cta are practice-context
    // actions — they should keep pointing straight at the quiz engine.
    expect(read("src/components/kyp/sections/learn-banner.tsx")).toContain(
      'href="/quiz"'
    );
    expect(
      read("src/components/kyp/ui/test-understanding-cta.tsx")
    ).toContain('href="/quiz"');
  });
});
