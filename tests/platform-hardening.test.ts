/**
 * Platform Hardening contract suite — pins the master-continuation
 * run's implementation (learning-chain deep links, accessibility,
 * stale-copy elimination, bundle boundaries, print, PWA, search).
 *
 * Two test families:
 *   - BEHAVIORAL (pure data, no server): the ?drug= focused-practice
 *     pool is non-empty for every canonical drug; deep-link slugs are
 *     registry-valid by construction.
 *   - SOURCE PINS (UI wiring): the deep links are actually rendered,
 *     the a11y contracts exist, no stale counts remain, the print
 *     stylesheet and PWA manifest ship, and the client bundle stays
 *     free of the registry through the converted components.
 */

import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const read = (rel: string): string =>
  readFileSync(join(process.cwd(), rel), "utf8");

const QUIZ_PAGE = "src/app/quiz/page.tsx";
const MICRO_QUIZ = "src/components/kyp/ui/micro-quiz.tsx";
const CTA = "src/components/kyp/ui/test-understanding-cta.tsx";
const DRUG_PAGE = "src/app/drugs/[slug]/page.tsx";
const DISEASE_PAGE = "src/app/diseases/[slug]/page.tsx";
const DRUG_INTERACTIONS = "src/components/kyp/sections/drug/drug-interactions.tsx";
const INTERACTIONS_PAGE = "src/app/interactions/page.tsx";
const NOT_FOUND = "src/app/drugs/[slug]/not-found.tsx";
const DRUGS_PAGE = "src/app/drugs/page.tsx";
const STUDY_PAGE = "src/app/study/page.tsx";
const MED_LIBRARY = "src/components/kyp/sections/medication-library-section.tsx";
const LEARN_BANNER = "src/components/kyp/sections/learn-banner.tsx";
const HOME_HERO = "src/components/kyp/sections/home-hero.tsx";
const HOME_CONTENT = "src/components/kyp/home-content.tsx";
const STATS_SECTION = "src/components/kyp/sections/stats-section.tsx";
const LEARN_PAGE = "src/app/learn/page.tsx";
const CONTINUE_LEARNING = "src/app/learn/continue-learning.tsx";
const LAYOUT = "src/app/layout.tsx";
const SKIP_LINK = "src/components/kyp/ui/skip-to-content.tsx";
const GLOBALS = "src/app/globals.css";
const NAVBAR = "src/components/kyp/sections/navbar.tsx";
const FOOTER = "src/components/kyp/sections/footer.tsx";
const FLOATING_SEARCH = "src/components/kyp/ui/floating-search.tsx";
const STICKY_NAV = "src/components/kyp/ui/sticky-learning-nav.tsx";
const LEARNING_MODULE = "src/components/kyp/sections/drug/learning-module.tsx";
const SEARCH_MODAL = "src/components/kyp/ui/search-modal.tsx";
const ANALYTICS = "src/app/study/analytics/page.tsx";
const MANIFEST = "public/manifest.webmanifest";

// ─── Behavioral: the ?drug= focused-practice pool ─────────────────────────────

describe("hardening — ?drug= focused practice (behavioral)", async () => {
  const { drugs } = await import("../src/lib/kyp/data/drugs/index");
  const { stahlMcqs } = await import("../src/lib/kyp/stahl-mcqs/index");

  const questionCountBySlug = new Map<string, number>();
  for (const d of drugs) {
    questionCountBySlug.set(d.slug, (d.microQuizzes?.length ?? 0));
  }
  for (const mcq of stahlMcqs) {
    questionCountBySlug.set(
      mcq.drugSlug,
      (questionCountBySlug.get(mcq.drugSlug) ?? 0) + 1
    );
  }

  test("every canonical drug has at least one focused-practice question", () => {
    // The /quiz?drug={slug} pool = the drug's micro-quizzes + its Stahl
    // MCQs. If any drug had zero, the deep link from its page would
    // start an empty run — the CTA must never promise an empty test.
    const empty = drugs.filter((d) => (questionCountBySlug.get(d.slug) ?? 0) === 0);
    expect(empty).toEqual([]);
  });

  test("focused-practice counts are registry-derived and complete (143/143)", () => {
    expect(drugs.length).toBe(143);
    for (const d of drugs) {
      expect(questionCountBySlug.get(d.slug)).toBeGreaterThan(0);
    }
  });

  test("Stahl MCQ drug slugs are all canonical registry slugs", () => {
    const registrySlugs = new Set(drugs.map((d) => d.slug));
    const orphan = stahlMcqs.filter((m) => !registrySlugs.has(m.drugSlug));
    expect(orphan).toEqual([]);
  });
});

// ─── Source pins: learning-chain deep links ───────────────────────────────────

describe("hardening — learning-chain deep links (source pins)", () => {
  test("/quiz reads ?drug= and validates it against the canonical registry", () => {
    const src = read(QUIZ_PAGE);
    expect(src).toContain('params.get("drug")');
    expect(src).toContain("drugBySlug.has(drugParam)");
    expect(src).toContain("q.sourceSlug === drugFilter");
  });

  test("/quiz focused practice filters out disease questions", () => {
    const src = read(QUIZ_PAGE);
    expect(src).toContain('q.sourceType !== "disease"');
  });

  test("the drug page CTA deep-links focused practice (?drug={slug})", () => {
    const src = read(DRUG_PAGE);
    expect(src).toContain("quizHref={`/quiz?drug=${drug.slug}`}");
  });

  test("the disease page CTA deep-links the disease-filtered pool", () => {
    const src = read(DISEASE_PAGE);
    expect(src).toContain('quizHref="/quiz?filter=disease"');
  });

  test("TestUnderstandingCTA accepts and uses a quizHref prop", () => {
    const src = read(CTA);
    expect(src).toContain("quizHref");
    expect(src).toContain('quizHref = "/quiz"');
    expect(src).toContain('href={quizHref}');
  });

  test("/interactions prefills the selection from ?drug= (registry-validated)", () => {
    const src = read(INTERACTIONS_PAGE);
    expect(src).toContain('get("drug")');
    expect(src).toContain("drugs.some((d) => d.slug === param)");
  });

  test("the drug page interactions section links into the checker preselected", () => {
    const src = read(DRUG_INTERACTIONS);
    expect(src).toContain(`/interactions?drug=${"$"}{drug.slug}`);
  });

  test("the shared interactions callout is class-agnostic (no SSRI-only claims)", () => {
    // The callout renders on all 143 pages — the copy must be true for
    // every class. The old text asserted serotonin syndrome specifics.
    const src = read(DRUG_INTERACTIONS);
    expect(src).not.toContain("serotonin syndrome");
    expect(src).not.toContain("sibutramine");
    expect(src).toContain("over-the-counter products and herbal supplements");
  });

  test("/study/analytics class rows drill through to Custom Test", () => {
    const src = read(ANALYTICS);
    expect(src).toContain("classHref");
    expect(src).toContain("/quiz/custom?class=${drugClassIdFromLabel(classKey)}");
    expect(src).toContain('"/quiz?filter=disease"');
  });
});

// ─── Source pins: stale-copy elimination ──────────────────────────────────────

describe("hardening — stale-copy elimination (source pins)", () => {
  test("no page claims 'Twelve psychiatric medications' (143 exist)", () => {
    const offenders = [
      DRUGS_PAGE,
      MED_LIBRARY,
      LEARN_BANNER,
      NOT_FOUND,
      STUDY_PAGE,
      LEARN_PAGE,
    ].filter((f) => read(f).match(/Twelve|twelve psychiatric/));
    expect(offenders).toEqual([]);
  });

  test("no page references the obsolete 'Sprint 2' / 'only Sertraline' state", () => {
    const src = read(NOT_FOUND);
    expect(src).not.toContain("Sprint 2");
    expect(src).not.toContain("only");
    // The 404 derives its count from the registry, so it can't go stale
    expect(src).toContain("{drugs.length}");
  });

  test("the /drugs page derives its counts from the registry", () => {
    const src = read(DRUGS_PAGE);
    expect(src).toContain("${drugs.length} psychiatric medications");
    expect(src).not.toMatch(/"[0-9]+ psychiatric medications/);
  });

  test("the homepage medication-library heading derives from the registry", () => {
    const src = read(MED_LIBRARY);
    expect(src).toContain("{drugs.length} psychiatric medications");
  });

  test("the /study OG description derives from the registry", () => {
    const src = read(STUDY_PAGE);
    expect(src).toContain("${drugs.length} psychiatric medications");
    expect(src).not.toMatch(/"[0-9]+ psychiatric medications/);
  });

  test("the /learn pathway line derives the class count from the registry", () => {
    const src = read(LEARN_PAGE);
    expect(src).toContain("classGroupCount");
    expect(src).not.toContain("SSRIs · SNRIs · NDRIs · NaSSAs · TCAs");
  });

  test("the quiz header comment no longer claims '78 total'", () => {
    const src = read(QUIZ_PAGE);
    expect(src).not.toContain("(78 total)");
  });
});

// ─── Source pins: client-bundle boundaries ────────────────────────────────────

describe("hardening — registry stays out of the homepage/learn client bundle", () => {
  test("learn-banner is a Server Component (no use client, no registry in client JS)", () => {
    const src = read(LEARN_BANNER);
    expect(src).not.toContain('"use client"');
    // still counts from the registry — but on the server
    expect(src).toContain("drugs.length");
  });

  test("medication-library-section is a Server Component", () => {
    const src = read(MED_LIBRARY);
    expect(src).not.toContain('"use client"');
  });

  test("stats-section is a Server Component", () => {
    const src = read(STATS_SECTION);
    expect(src).not.toContain('"use client"');
  });

  test("home-hero receives its search plumbing as props (no registry import)", () => {
    const src = read(HOME_HERO);
    expect(src).toContain('"use client"'); // genuinely interactive (typeahead)
    expect(src).not.toMatch(/from "@\/lib\/kyp\/data"/);
    expect(src).toContain("drugSlugs: string[]");
    expect(src).toContain("popularSearches: string[]");
  });

  test("HomeContent (server) derives and passes the hero props", () => {
    const src = read(HOME_CONTENT);
    expect(src).not.toContain('"use client"');
    expect(src).toContain("const drugSlugs = drugs.map((d) => d.slug)");
    expect(src).toContain("popularSearches={popularSearches}");
  });

  test("/learn is a Server Component; only ContinueLearning is a client island", () => {
    const src = read(LEARN_PAGE);
    expect(src).not.toContain('"use client"');
    expect(src).toContain('from "./continue-learning"');
    const cont = read(CONTINUE_LEARNING);
    expect(cont).toContain('"use client"');
    // the client island must not import the registry either
    expect(cont).not.toMatch(/from "@\/lib\/kyp\/data"/);
  });
});

// ─── Source pins: accessibility contracts ─────────────────────────────────────

describe("hardening — accessibility contracts (source pins)", () => {
  test("quiz practice announces the verdict via a polite live region", () => {
    const src = read(QUIZ_PAGE);
    expect(src).toContain('aria-live="polite"');
    expect(src).toContain('"Correct." : "Not quite."');
  });

  test("quiz practice moves focus onto the explanation and next question", () => {
    const src = read(QUIZ_PAGE);
    expect(src).toContain("explanationRef.current.focus()");
    expect(src).toContain("questionRef.current.focus()");
    expect(src).toContain('ref={explanationRef}');
  });

  test("quiz filter chips expose pressed state (aria-pressed)", () => {
    const src = read(QUIZ_PAGE);
    expect(src).toContain("aria-pressed={filter === f.id}");
  });

  test("quiz progress bar has progressbar semantics", () => {
    const src = read(QUIZ_PAGE);
    expect(src).toContain('role="progressbar"');
    expect(src).toContain("aria-valuenow");
  });

  test("MicroQuiz announces its verdict too (aria-live + focus)", () => {
    const src = read(MICRO_QUIZ);
    expect(src).toContain('aria-live="polite"');
    expect(src).toContain("explanationRef.current.focus()");
  });

  test("a skip-to-content link is the first focusable element of every page", () => {
    const layout = read(LAYOUT);
    expect(layout).toContain("SkipToContentLink");
    const skip = read(SKIP_LINK);
    expect(skip).toContain('"use client"'); // needs the click handler
    expect(skip).toContain("Skip to main content");
    expect(skip).toContain('document.querySelector("main")');
  });

  test("the sticky-nav manual-complete checkbox is keyboard-reachable", () => {
    const src = read(STICKY_NAV);
    expect(src).toContain("focus-visible:opacity-100");
    expect(src).toContain("aria-pressed={isCompleted}");
  });

  test("the learning module implements the ARIA tabs pattern", () => {
    const src = read(LEARNING_MODULE);
    expect(src).toContain('role="tablist"');
    expect(src).toContain('role="tab"');
    expect(src).toContain("aria-selected={tab === t.key}");
    expect(src).toContain('role="tabpanel"');
    expect(src).toContain('"ArrowRight"');
  });
});

// ─── Source pins: contrast, print, PWA ────────────────────────────────────────

describe("hardening — contrast, print stylesheet, PWA (source pins)", () => {
  test("light-mode tokens are WCAG-AA tuned (brand/warning/success/emergency)", () => {
    const css = read(GLOBALS);
    // brand 0.55 → 0.50 (5.5:1 as text and as white-on-brand)
    expect(css).toContain("--brand: oklch(0.5 0.11 195);");
    // warning 0.70 → 0.52 (5.7:1 on background, 4.9:1 on warning-soft)
    expect(css).toContain("--warning: oklch(0.52 0.15 60);");
    // success 0.62 → 0.52 (5.2:1)
    expect(css).toContain("--success: oklch(0.52 0.13 155);");
    // emergency 0.60 → 0.55 (4.9:1)
    expect(css).toContain("--emergency: oklch(0.55 0.22 25);");
    expect(css).toContain("--ring: oklch(0.5 0.11 195);");
  });

  test("a print stylesheet exists and forces revealed content visible", () => {
    const css = read(GLOBALS);
    expect(css).toContain("@media print");
    // framer-motion inline styles are overridden for printing
    expect(css).toContain('[style*="opacity"]');
    expect(css).toContain(".sticky {\n    position: static !important;");
    expect(css).toContain(".overflow-x-auto");
    expect(css).toContain(".dark {"); // dark mode forced to light palette
  });

  test("floating chrome is print:hidden", () => {
    expect(read(NAVBAR)).toContain("print:hidden");
    expect(read(FLOATING_SEARCH)).toContain("print:hidden");
    expect(read(STICKY_NAV)).toContain("print:hidden");
    expect(read(FOOTER)).toContain("print:hidden");
    expect(read(DRUG_PAGE)).toContain("print:hidden");
  });

  test("a PWA manifest ships with icons and theme colour", () => {
    const manifest = JSON.parse(read(MANIFEST));
    expect(manifest.name).toContain("Know Your Pill");
    expect(manifest.icons.length).toBeGreaterThanOrEqual(3);
    const sizes = manifest.icons.map((i: { sizes: string }) => i.sizes);
    expect(sizes).toContain("512x512");
    expect(manifest.theme_color).toMatch(/^#[0-9a-f]{6}$/);
    expect(manifest.start_url).toBe(".");
    expect(manifest.scope).toBe(".");
  });

  test("the layout links the manifest and exports a themeColor viewport", () => {
    const src = read(LAYOUT);
    expect(src).toContain("manifest.webmanifest");
    expect(src).toContain("themeColor");
    expect(src).toContain('export const viewport: Viewport');
  });
});

// ─── Source pins: search multi-word matching ─────────────────────────────────

describe("hardening — search multi-word matching (source pins)", () => {
  test("the ranker tokenizes multi-word queries with AND semantics", () => {
    const src = read(SEARCH_MODAL);
    expect(src).toContain("function rankToken(");
    expect(src).toContain("q.split(/\\s+/).filter(Boolean)");
    expect(src).toContain("// AND semantics — one unmatched token excludes the item");
  });
});

// ─── Behavioral: generated client artifacts never drift from the registries ───

describe("hardening — generated client artifacts match the canonical registries", async () => {
  const { searchIndex: liveIndex, searchTypeLabels: liveLabels } =
    await import("../src/lib/kyp/data/search-index");
  const { searchIndexGenerated, searchTypeLabelsGenerated } =
    await import("../src/lib/kyp/data/search-index-generated");
  const { drugs } = await import("../src/lib/kyp/data/drugs/index");
  const { COURSE_STATS, COURSE_COUNT, FIRST_COURSE_SLUG } =
    await import("../src/lib/kyp/study/course-stats-generated");

  test("the generated search index is deep-equal to the live derivation (227 entries)", () => {
    // If this fails: a registry/data change was made without re-running
    // `bun scripts/gen-client-data.ts`. Regenerate — do NOT edit the
    // generated file by hand, and do NOT relax this test.
    expect(searchIndexGenerated).toEqual(liveIndex);
    expect(searchIndexGenerated.length).toBe(227);
    expect(searchTypeLabelsGenerated).toEqual(liveLabels);
  });

  test("the generated search artifact is self-contained (no registry imports)", () => {
    const src = read("src/lib/kyp/data/search-index-generated.ts");
    expect(src).not.toContain('from "./drugs/index"');
    expect(src).not.toContain('from "./drug-taxonomy"');
    expect(src).toContain('import type { SearchableItem }');
  });

  test("the generated course stats match the registry derivation (143 courses)", () => {
    const expected = Object.fromEntries(
      drugs.map((d) => [
        d.slug,
        { total: new Set((d.lessonGroups ?? []).flatMap((l) => l.sectionIds)).size },
      ])
    );
    expect(COURSE_STATS).toEqual(expected);
    expect(COURSE_COUNT).toBe(drugs.length);
    expect(COURSE_COUNT).toBe(143);
    expect(FIRST_COURSE_SLUG).toBe(drugs[0].slug);
  });

  test("the generated class-drug map matches the registry class membership", async () => {
    const { CLASS_DRUG_SLUGS } = await import("../src/lib/kyp/study/course-stats-generated");
    const expected: Record<string, string[]> = {};
    for (const d of drugs) {
      (expected[d.drugClassLabel] ??= []).push(d.slug);
    }
    expect(CLASS_DRUG_SLUGS).toEqual(expected);
    expect(Object.keys(CLASS_DRUG_SLUGS).length).toBe(40);
  });

  test("drugClassIdFromLabel lives in a pure module (no registry import)", async () => {
    const { drugClassIdFromLabel } = await import("../src/lib/kyp/data/class-id");
    expect(drugClassIdFromLabel("SSRI")).toBe("ssri");
    expect(drugClassIdFromLabel("Atypical Antipsychotic")).toBe("atypical-antipsychotic");
    const src = read("src/lib/kyp/data/class-id.ts");
    expect(src).not.toMatch(/from "\./); // zero module imports — pure
    // drug-taxonomy re-exports it so the public API is unchanged
    expect(read("src/lib/kyp/data/drug-taxonomy.ts"))
      .toContain('from "./class-id"');
    // client consumers import the pure module, not the taxonomy
    expect(read("src/components/kyp/sections/study/topic-accuracy-chips.tsx"))
      .toContain('from "@/lib/kyp/data/class-id"');
    expect(read("src/app/study/analytics/page.tsx"))
      .toContain('from "@/lib/kyp/data/class-id"');
  });

  test("the weak-area selector uses the generated class map, not the registry", () => {
    const src = read("src/lib/kyp/custom-test/weak-area.ts");
    expect(src).toContain("CLASS_DRUG_SLUGS[row.key] ?? []");
    expect(src).not.toMatch(/from "@\/lib\/kyp\/data\/drugs\/index"/);
  });

  test("only the five data-engine client surfaces import the registry", () => {
    // The full 143-monograph registry may ship to the browser ONLY on
    // the surfaces whose client-side engines genuinely need full drug
    // records: /quiz, /quiz/custom, /compare, /interactions,
    // /study/review. Every browsing surface (home, /drugs, /learn,
    // /study hub, drug pages, class pages, search) must stay clean.
    const allowed = new Set([
      "src/app/quiz/page.tsx",
      "src/app/quiz/custom/page.tsx",
      "src/app/compare/page.tsx",
      "src/app/interactions/page.tsx",
      "src/app/study/review/page.tsx",
      // lib modules consumed by those client pages:
      "src/lib/kyp/custom-test/engine.ts",
      "src/lib/kyp/study/daily-plan.ts", // re-exports selectWeakTopics only — no direct registry import remains
    ]);
    const registryPathRe =
      /from\s+"@\/lib\/kyp\/data\/drugs\/index"|from\s+"@\/lib\/kyp\/data\/drug-taxonomy"|from\s+"@\/lib\/kyp\/knowledge"/;
    const offenders: string[] = [];
    const scan = (dir: string) => {
      for (const entry of Array.from(
        new Bun.Glob("*.tsx").scanSync(dir)
      ).concat(Array.from(new Bun.Glob("*.ts").scanSync(dir)))) {
        const f = `${dir}/${entry}`;
        if (allowed.has(f)) continue;
        const src = read(f);
        // Only CLIENT components drag modules into the browser bundle;
        // server components importing the registry is correct usage.
        if (!src.startsWith('"use client"')) continue;
        if (registryPathRe.test(src)) offenders.push(f);
      }
    };
    scan("src/components/kyp/sections/drug");
    scan("src/components/kyp/sections");
    scan("src/components/kyp/ui");
    scan("src/app/quiz");
    scan("src/app/study");
    scan("src/app/compare");
    scan("src/app/interactions");
    scan("src/app/learn");
    scan("src/app/drugs");
    expect(`offenders: ${offenders.join(", ") || "none"}`).toBe(
      "offenders: none"
    );
  });

  test("the knowledge chain renders server-side and is passed into the client graph", () => {
    // RSC children pattern: the registry-backed knowledge-graph module
    // must never be imported by a client component.
    expect(read("src/components/kyp/sections/drug/medical-knowledge-chain.tsx"))
      .not.toContain('"use client"');
    const graph = read("src/components/kyp/sections/drug/drug-knowledge-graph.tsx");
    expect(graph).toContain("knowledgeChain: React.ReactNode");
    expect(graph).toContain("{knowledgeChain}");
    expect(graph).not.toMatch(/from "@\/lib\/kyp\/knowledge"/);
    expect(read("src/app/drugs/[slug]/page.tsx"))
      .toContain("knowledgeChain={<MedicalKnowledgeChain drugSlug={drug.slug} />}");
  });

  test("links into registry-heavy routes disable viewport prefetch", () => {
    // /quiz and /interactions bundles embed the 143-drug registry
    // (~1.5MB gzipped). Next's default <Link> prefetch would download
    // them in the background whenever such a link enters the viewport
    // — on every page for the navbar. These links opt out; browsing
    // routes keep default prefetch.
    const navSrc = read(NAVBAR);
    expect(navSrc).toContain('prefetch: false as const');
    const ctaSrc = read(CTA);
    expect((ctaSrc.match(/prefetch={false}/g) ?? []).length).toBe(2);
    const drugIntSrc = read(DRUG_INTERACTIONS);
    expect(drugIntSrc).toContain("prefetch={false}");
  });

  test("the search modal consumes the generated artifact, not the live derivation", () => {
    const src = read(SEARCH_MODAL);
    expect(src).toContain('from "@/lib/kyp/data/search-index-generated"');
    expect(src).not.toMatch(/from "@\/lib\/kyp\/data";/);
  });

  test("the study surfaces consume the generated course stats, not the registry", () => {
    expect(read("src/components/kyp/sections/study/continue-studying.tsx"))
      .toContain("course-stats-generated");
    expect(read("src/components/kyp/sections/study/study-next-panel.tsx"))
      .toContain("course-stats-generated");
    expect(read("src/lib/kyp/study/daily-plan.ts"))
      .toContain("course-stats-generated");
  });

  test("no LIVE client component imports values from the data barrel", () => {
    // The barrel re-exports all 143 monographs via `export *`; any
    // client value-import drags the whole registry into the browser.
    // Server components importing the barrel are fine (computed at
    // request/build time) — only "use client" files are checked.
    // (Legacy dead components — categories, emergency-banner,
    // medication-library, stats, substance-use — are unused and
    // therefore never bundled; they are exempted.)
    const dead = new Set([
      "src/components/kyp/categories.tsx",
      "src/components/kyp/emergency-banner.tsx",
      "src/components/kyp/medication-library.tsx",
      "src/components/kyp/stats.tsx",
      "src/components/kyp/substance-use.tsx",
    ]);
    const candidates = [
      "src/components/kyp/ui/search-modal.tsx",
      "src/components/kyp/ui/floating-search.tsx",
      "src/components/kyp/sections/faq-section.tsx",
      "src/components/kyp/sections/emergency-section.tsx",
      "src/components/kyp/sections/timeline-section.tsx",
      "src/components/kyp/sections/categories-section.tsx",
      "src/components/kyp/sections/brain-atlas-section.tsx",
      "src/components/kyp/sections/side-effects-section.tsx",
      "src/components/kyp/sections/substance-use-section.tsx",
      "src/components/kyp/sections/home-hero.tsx",
      "src/components/kyp/sections/study/continue-studying.tsx",
      "src/components/kyp/sections/study/study-next-panel.tsx",
      "src/app/quiz/page.tsx",
      "src/app/compare/page.tsx",
      "src/app/interactions/page.tsx",
      "src/app/study/review/page.tsx",
      "src/app/study/mistakes/page.tsx",
      "src/app/study/analytics/page.tsx",
      "src/app/quiz/custom/page.tsx",
      "src/app/dashboard/page.tsx",
    ];
    const barrelValueImportRe =
      /import\s+(?!type)\{[^}]*\}\s+from\s+"@\/lib\/kyp\/data";/;
    let checked = 0;
    for (const f of candidates) {
      if (dead.has(f)) continue;
      const src = read(f);
      if (!src.startsWith('"use client"')) continue; // server component — barrel is fine
      checked += 1;
      const barrelValueImport = barrelValueImportRe.test(src);
      expect(`${f} free of barrel value imports: ${barrelValueImport ? "FAIL" : "OK"}`)
        .toBe(`${f} free of barrel value imports: OK`);
    }
    // The check must have actually checked a meaningful set of files.
    expect(checked).toBeGreaterThanOrEqual(10);
  });
});

// ─── Engine-route prefetch discipline ────────────────────────────────────────
// The five data-engine routes (/quiz, /quiz/custom, /compare, /interactions,
// /study/review) legitimately bundle the 143-drug registry (~1.5 MB gzipped).
// Any <Link> to them from a BROWSING surface must opt out of Next.js
// viewport prefetch, or every browsing page would speculatively download
// the registry chunk the moment such a link enters the viewport. Engine
// surfaces linking to each other keep default prefetch (the user has
// already crossed into the engine context).

describe("hardening — engine-route prefetch discipline (source pins)", () => {
  // Browsing-surface files that render links to engine routes.
  const BROWSING_FILES = [
    "src/app/drugs/page.tsx",
    "src/app/learn/page.tsx",
    "src/components/kyp/sections/learn-banner.tsx",
    "src/app/medicine/page.tsx",
    "src/components/kyp/sections/study/retention-due-entry.tsx",
    "src/app/study/page.tsx",
    "src/app/study/analytics/page.tsx",
    "src/app/study/mistakes/page.tsx",
    "src/app/drugs/class/[classId]/page.tsx",
    "src/components/kyp/sections/drug/drug-prescriber-guide.tsx",
    "src/components/kyp/sections/drug/drug-interactions.tsx",
    "src/components/kyp/ui/test-understanding-cta.tsx",
  ];

  test("every browsing-surface <Link> to an engine route sets prefetch={false}", () => {
    // href patterns that target an engine route: literal paths (with
    // optional query), template literals, and the CTA/classHref indirections.
    const engineHrefRe =
      /href=\{?["`](\/quiz|\/interactions|\/compare|\/study\/review)([?"`}]|\/)/;
    const engineIndirectRe = /href=\{(quizHref|classHref\()/;
    const violations: string[] = [];
    let linkCount = 0;
    for (const f of BROWSING_FILES) {
      const src = read(f);
      // Each segment starts at a <Link opening; attributes live before
      // the first ">" after it in practice for these files.
      const parts = src.split(/<Link\b/).slice(1);
      for (const part of parts) {
        const attrs = part.slice(0, part.indexOf(">"));
        const isEngine =
          engineHrefRe.test(attrs) || engineIndirectRe.test(attrs);
        if (!isEngine) continue;
        linkCount += 1;
        if (!/prefetch=\{false\}/.test(attrs)) {
          violations.push(`${f}: engine <Link${attrs.slice(0, 80)}… lacks prefetch={false}`);
        }
      }
    }
    expect(violations.join(" | ")).toBe("");
    // The scan must have found the known links (18 sites across 12 files).
    expect(linkCount).toBeGreaterThanOrEqual(18);
  });

  test("navbar's engine-route nav entry keeps prefetch: false", () => {
    const src = read(NAVBAR);
    expect(src).toContain(
      `{ href: "/interactions", label: "Interactions", prefetch: false as const },`,
    );
    // and the nav really passes it through to <Link>
    expect(src).toContain(`prefetch={"prefetch" in l ? l.prefetch : undefined}`);
  });
});
