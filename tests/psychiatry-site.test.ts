/**
 * KYP Psychiatry — site regression + public source-name audit.
 *
 * Runs against the standalone build (tests/helpers/server.ts) and pins:
 *   1-5   hub / library / self-test / two sample lesson routes serve 200
 *         with the KYP Psychiatry identity
 *   6     all 109 lesson routes serve 200 HTML (full census)
 *   7     a disorder lesson renders its learning phases + India layer
 *   8     a concept lesson renders concept phases
 *   9     self-test page carries the 719-question corpus entry point
 *   10    the library page lists all 18 domain groups
 *   11-13 PUBLIC SOURCE-NAME AUDIT: the source textbook name must NOT
 *         appear as learner-facing branding on hub, library, or lesson
 *         pages (permitted surfaces: Sources & References disclosure,
 *         Who is KYP / About).
 */
import { beforeAll, describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { BASE_URL, ensureServer } from "./helpers/server";
import { getAllNoteSlugs, loadCorpus } from "../src/lib/oxford/loader";

/**
 * The source textbook identity — used ONLY for this audit (internal
 * provenance terminology stays in the data layer; the public product is
 * KYP Psychiatry). We check the distinctive source-work title fragment.
 */
const SOURCE_BOOK_PHRASES = [
  "New Oxford Textbook of Psychiatry",
  "Oxford Textbook of Psychiatry",
];

/** Text allowed to contain the phrase (secondary disclosure surfaces). */
function isPermittedSurface(html: string, phrase: string): boolean {
  // The Sources & References disclosure (expandable) may carry the
  // provenance line. It must never appear in nav/hero/title/headings.
  const occurrences = html.split(phrase).length - 1;
  if (occurrences === 0) return true;
  // Check it only appears inside the sources disclosure container.
  const idx = html.indexOf(phrase);
  const before = html.slice(Math.max(0, idx - 2000), idx);
  const inSourcesBlock = /Sources &amp; References|Sources & References/.test(before);
  return inSourcesBlock && occurrences <= 2;
}

async function get(path: string): Promise<{ status: number; html: string }> {
  const res = await fetch(`${BASE_URL}${path}`, {
    redirect: "follow",
    signal: AbortSignal.timeout(15000),
  });
  return { status: res.status, html: await res.text() };
}

/** The rendered DOM text: script/style payloads (RSC flight data,
 * JSON-LD, hydration props) are NOT learner-facing surfaces — only
 * visible markup counts for the branding audit. */
function visibleDom(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
}

beforeAll(async () => {
  await ensureServer();
});

describe("psychiatry — routes and identity", () => {
  test("1. hub serves 200 with the KYP Psychiatry identity", async () => {
    const { status, html } = await get("/psychiatry");
    expect(status).toBe(200);
    expect(html).toContain("KYP Psychiatry");
    expect(html).toContain("psychiatry curriculum");
  });

  test("2. library serves 200 and links every domain", async () => {
    const { status, html } = await get("/psychiatry/library");
    expect(status).toBe(200);
    expect(html).toContain("Psychiatry Library");
    expect(html).toContain("Search Psychiatry");
  });

  test("3. self-test serves 200", async () => {
    const { status, html } = await get("/psychiatry/self-test");
    expect(status).toBe(200);
    expect(html).toContain("Psychiatry Self-Test");
  });

  test("4a. migrated pilot lessons render the six-lesson KYP course", async () => {
    // Learning-system pilots (depressive-disorders, schizophrenia,
    // neurotransmitters): same URL, new course view — six lessons,
    // mode system, active recall, references.
    for (const slug of ["depressive-disorders", "schizophrenia", "neurotransmitters"]) {
      const { status, html } = await get(`/psychiatry/${slug}`);
      expect(status).toBe(200);
      expect(html).toContain("Foundations");
      expect(html).toContain("Mechanism &amp; Neuroscience");
      expect(html).toContain("Clinical Practice");
      expect(html).toContain("Indian Practice");
      expect(html).toContain("Exam Revision");
      expect(html).toContain("Active Recall");
      expect(html).toContain('id="top"');
    }
    // The schizophrenia course specifically carries its decision path +
    // recorded content gaps (antipsychotic lessons do not exist yet).
    const sz = await get("/psychiatry/schizophrenia");
    expect(sz.html).toContain("Decision Path");
    expect(sz.html).toContain("content gaps");
  });

  test("4b. migration complete: all 109 lessons render the six-lesson course view (no note shells remain)", async () => {
    // The migration is COMPLETE: batches 1-16 + the three pilots have
    // migrated every one of the 109 source lessons to the six-lesson
    // PsychiatryCourse architecture. The former contract (non-migrated
    // lessons render the finalized note shell) has no remaining
    // subject — this test now asserts the COMPLETED state: every
    // lesson route serves the migrated course view, and no page still
    // renders the note-shell phase markers.
    const slugs = getAllNoteSlugs();
    expect(slugs.length).toBe(109);
    let nonCourse: string[] = [];
    for (const slug of slugs) {
      if (!getPsychiatryCourse(slug)) nonCourse.push(slug);
    }
    expect(nonCourse).toEqual([]); // every source lesson registered
    // Spot-census the last batch's exemplars (Group R) — migrated
    // course view, not the note shell.
    for (const slug of ["primary-care-psychiatry", "mh-services", "refugee-mental-health", "voluntary-sector"]) {
      const { status, html } = await get(`/psychiatry/${slug}`);
      expect(status).toBe(200);
      expect(html).toContain("Foundations");
      expect(html).toContain("Indian Practice");
    }
  });

  test("5. concept lesson (primary-care-psychiatry) serves the migrated course", async () => {
    // Batch 16 migrated primary-care-psychiatry (Group R, P1) — the
    // final concept note. The migration census is complete: all 109
    // source lessons are registered PsychiatryCourses.
    const { status, html } = await get("/psychiatry/primary-care-psychiatry");
    expect(status).toBe(200);
    expect(html).toContain("Primary Care");
    expect(html).toContain("Foundations");
  });

  test("6. all 109 lesson routes serve 200", async () => {
    const slugs = getAllNoteSlugs();
    expect(slugs.length).toBe(109);
    let bad: string[] = [];
    for (const slug of slugs) {
      const { status } = await get(`/psychiatry/${slug}`);
      if (status !== 200) bad.push(`${slug}:${status}`);
    }
    expect(bad).toEqual([]);
  }, 120000);

  test("7. the universal search index carries the psychiatry records", async () => {
    const { searchIndex } = await import("../src/lib/kyp/data/search-index");
    const psych = searchIndex.filter((i) => i.type === "psychiatry-note");
    expect(psych.length).toBe(111);
    // 340 = 229 registry-era entries (145-drug Stahl integration) +
    // 111 psychiatry records. Tracked in scripts/content-lock.ts counts.
    expect(searchIndex.length).toBe(340);
    const hub = searchIndex.find((i) => i.id === "psychiatry-hub");
    expect(hub?.href).toBe("/psychiatry");
  });
});

describe("psychiatry — public source-name audit", () => {
  test("11. hub does not use the source textbook name as branding", async () => {
    const { html } = await get("/psychiatry");
    const dom = visibleDom(html);
    for (const phrase of SOURCE_BOOK_PHRASES) {
      expect(dom.includes(phrase)).toBe(false);
    }
  });

  test("12. library does not use the source textbook name as branding", async () => {
    const { html } = await get("/psychiatry/library");
    const dom = visibleDom(html);
    for (const phrase of SOURCE_BOOK_PHRASES) {
      expect(dom.includes(phrase)).toBe(false);
    }
  });

  test("13. lesson pages: source name only inside the permitted sources disclosure", async () => {
    const slugs = ["schizophrenia", "gad", "alzheimers-dementia", "couples-therapy", "ptsd"];
    for (const slug of slugs) {
      const { html } = await get(`/psychiatry/${slug}`);
      const dom = visibleDom(html);
      const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
      expect(title).toContain("KYP Psychiatry");
      expect(title.includes("Oxford")).toBe(false);
      for (const phrase of SOURCE_BOOK_PHRASES) {
        expect(isPermittedSurface(dom, phrase)).toBe(true);
      }
    }
  });
});

describe("psychiatry — resume-banner parity (finalization §11)", () => {
  // The drug lessons record currentSectionId "top" on mount because the
  // hero ("Overview") is the first tracked nav item. Psychiatry lessons
  // normalised to the same contract: the hero carries id="top" and the
  // lesson nav starts with the Overview anchor, so a fresh visit saves a
  // top-level position and the ResumeBanner appears on revisit exactly
  // like a drug course.
  test("14. every lesson hero carries the top anchor (all 109)", async () => {
    const slugs = getAllNoteSlugs();
    const missing: string[] = [];
    for (const slug of slugs) {
      const { status, html } = await get(`/psychiatry/${slug}`);
      if (status !== 200 || !html.includes('id="top"')) {
        missing.push(`${slug}:${status}${html.includes('id="top"') ? "" : ":no-top-anchor"}`);
      }
    }
    expect(slugs.length).toBe(109);
    expect(missing).toEqual([]);
  }, 120000);
});

// Learning-system course registry (ESM import — top level so the
// bun:test runner resolves it before describe bodies execute).
import { psychiatryCourses, getPsychiatryCourse } from "../src/lib/kyp/data/psychiatry-courses";

describe("psychiatry — learning-system course registry (pilot batch)", () => {
  // The learning-system brief §33-34 + §38: the course layer is a typed
  // registry with provenance, status, mode projections and honest
  // content-gap recording. These tests pin the architecture contract.

  test("15. registry integrity: 3 pilots + batches 1-16 (109 courses — COMPLETE), note-slug keyed, valid status", () => {
    expect(psychiatryCourses.length).toBe(109); // 3 validated pilots + 6 batch-1 + 6 batch-2 + 6 batch-3 + 5 batch-4 + 7 batch-5 + 7 batch-6 + 7 batch-7 + 5 batch-8 + 5 batch-9 + 8 batch-10 + 8 batch-11 + 7 batch-12 + 7 batch-13 + 7 batch-14 + 11 batch-15 + 4 batch-16 courses = every source lesson
    const noteSlugs = getAllNoteSlugs();
    for (const course of psychiatryCourses) {
      expect(noteSlugs).toContain(course.slug); // one URL per topic
      expect(["DRAFT", "RESEARCHED", "VERIFIED", "PUBLISHED", "NEEDS_REVIEW"]).toContain(course.status);
      expect(course.status).toBe("PUBLISHED");
      expect(course.lessonGroups.length).toBe(6); // the six-lesson journey
      expect(course.lessonGroups.map((l: any) => l.number)).toEqual([1, 2, 3, 4, 5, 6]);
      expect(course.provenance.length).toBeGreaterThanOrEqual(10);
      expect(course.evidenceMap.length).toBeGreaterThanOrEqual(10);
    }
    expect(getPsychiatryCourse("depressive-disorders")?.kind).toBe("disorder");
    expect(getPsychiatryCourse("schizophrenia")?.kind).toBe("disorder");
    expect(getPsychiatryCourse("neurotransmitters")?.kind).toBe("concept");
    expect(getPsychiatryCourse("recovered-memories")?.kind).toBe("concept"); // batch-2 concept course
    expect(getPsychiatryCourse("ptsd")?.groupLetter).toBe("E"); // Group E — batch 2
    expect(getPsychiatryCourse("gad")?.groupLetter).toBe("F"); // Group F — batch 3
    expect(getPsychiatryCourse("ocd")?.groupLetter).toBe("G"); // Group G — batch 3
    expect(getPsychiatryCourse("anorexia-nervosa")?.groupLetter).toBe("H"); // Group H — batch 4
    expect(getPsychiatryCourse("gender-identity-adults")?.groupLetter).toBe("I"); // Group I — batch 4
    expect(getPsychiatryCourse("personality-disorders-overview")?.groupLetter).toBe("J"); // Group J — batch 5
    expect(getPsychiatryCourse("personality-disorder-treatment")?.kind).toBe("concept"); // batch-5 concept course
    expect(getPsychiatryCourse("hypersomnia")?.groupLetter).toBe("K"); // Group K — batch 5
    expect(getPsychiatryCourse("sleep-basics")?.kind).toBe("concept"); // batch-5 concept course
    expect(getPsychiatryCourse("delirium")?.groupLetter).toBe("A"); // Group A — batch 6
    expect(getPsychiatryCourse("huntingtons-neuropsychiatry")?.kind).toBe("disorder"); // batch-6 disorder course
    expect(getPsychiatryCourse("alzheimers-dementia")?.groupLetter).toBe("A"); // Group A — batch 6
    expect(getPsychiatryCourse("vascular-dementia")?.groupLetter).toBe("A"); // Group A — batch 7
    expect(getPsychiatryCourse("dementia-management")?.kind).toBe("concept"); // batch-7 concept course
    expect(getPsychiatryCourse("memory-rehabilitation")?.kind).toBe("concept"); // batch-7 concept course
    expect(getPsychiatryCourse("substance-use-overview")?.groupLetter).toBe("B"); // Group B — batch 8
    expect(getPsychiatryCourse("substance-use-overview")?.kind).toBe("concept"); // batch-8 umbrella concept course
    expect(getPsychiatryCourse("alcohol-use-disorders")?.groupLetter).toBe("B"); // Group B — batch 8
    expect(getPsychiatryCourse("hallucinogen-use-disorders")?.kind).toBe("disorder"); // batch-8 disorder course
    expect(getPsychiatryCourse("benzodiazepine-misuse")?.groupLetter).toBe("B"); // Group B — batch 9
    expect(getPsychiatryCourse("nicotine-dependence")?.kind).toBe("disorder"); // batch-9 disorder course
    expect(getPsychiatryCourse("elderly-delirium")?.groupLetter).toBe("M"); // Group M — batch 10
    expect(getPsychiatryCourse("elderly-mood")?.kind).toBe("disorder"); // batch-10 disorder course
    expect(getPsychiatryCourse("elderly-suicide")?.groupLetter).toBe("M"); // Group M — batch 10
    expect(getPsychiatryCourse("intellectual-disability-overview")?.groupLetter).toBe("N"); // Group N — batch 11
    expect(getPsychiatryCourse("id-treatment-services")?.kind).toBe("concept"); // batch-11 concept course
    expect(getPsychiatryCourse("mental-health-law")?.groupLetter).toBe("O"); // Group O — batch 11
    expect(getPsychiatryCourse("juvenile-offending")?.kind).toBe("concept"); // batch-11 concept course
    expect(getPsychiatryCourse("child-assessment-epidemiology")?.groupLetter).toBe("L"); // Group L — batch 12
    expect(getPsychiatryCourse("child-assessment-epidemiology")?.kind).toBe("concept"); // batch-12 concept course
    expect(getPsychiatryCourse("autism")?.groupLetter).toBe("L"); // Group L — batch 12
    expect(getPsychiatryCourse("paediatric-mood")?.groupLetter).toBe("L"); // Group L — batch 13
    expect(getPsychiatryCourse("youth-suicide")?.kind).toBe("disorder"); // batch-13 disorder course
    expect(getPsychiatryCourse("dynamic-psychotherapy")?.groupLetter).toBe("P"); // Group P — batch 14
    expect(getPsychiatryCourse("couples-therapy")?.kind).toBe("concept"); // batch-14 concept course
    expect(getPsychiatryCourse("psychiatric-phenomenology")?.groupLetter).toBe("Q"); // Group Q — batch 15
    expect(getPsychiatryCourse("psychiatric-assessment")?.kind).toBe("concept"); // batch-15 concept course
    expect(getPsychiatryCourse("cognitive-assessment")?.groupLetter).toBe("Q"); // Group Q — batch 15
    expect(getPsychiatryCourse("neuroendocrinology")?.kind).toBe("concept"); // batch-15 concept course
    expect(getPsychiatryCourse("psychiatric-genetics")?.groupLetter).toBe("Q"); // Group Q — batch 15
    expect(getPsychiatryCourse("neuroimaging")?.kind).toBe("concept"); // batch-15 concept course
    expect(getPsychiatryCourse("transcultural-stigma")?.groupLetter).toBe("Q"); // Group Q — batch 15
    expect(getPsychiatryCourse("primary-care-psychiatry")?.groupLetter).toBe("R"); // Group R — batch 16
    expect(getPsychiatryCourse("mh-services")?.kind).toBe("concept"); // batch-16 concept course
    expect(getPsychiatryCourse("refugee-mental-health")?.groupLetter).toBe("R"); // Group R — batch 16
    expect(getPsychiatryCourse("voluntary-sector")?.kind).toBe("concept"); // batch-16 concept course — the last of 109
  });

  test("16. mode projections: all four modes declared, sections resolve", () => {
    for (const course of psychiatryCourses) {
      const modes = course.learningPaths.map((p: any) => p.mode);
      expect(modes).toEqual(["patient", "mbbs", "neetPg", "resident"]); // the EXISTING modes
      const lessonSectionIds = new Set(course.lessonGroups.flatMap((l: any) => l.sectionIds));
      for (const path of course.learningPaths) {
        for (const sectionId of path.visibleSections) {
          expect(lessonSectionIds.has(sectionId)).toBe(true); // no orphan visibility
        }
      }
    }
  });

  test("17. provenance: every evidenceMap claim maps to registered sources", () => {
    for (const course of psychiatryCourses) {
      const sourceIds = new Set(course.provenance.map((p: any) => p.id));
      for (const claim of course.evidenceMap) {
        expect(claim.sources.length).toBeGreaterThan(0);
        for (const s of claim.sources) {
          expect(sourceIds.has(s)).toBe(true); // no fabricated source refs
        }
      }
    }
  });

  test("18. drug navigation only links existing KYP drug lessons", async () => {
    const { getAllDrugSlugs } = await import("../src/lib/kyp/data");
    const built = new Set(getAllDrugSlugs());
    for (const course of psychiatryCourses) {
      for (const link of course.drugLinks) {
        if (link.slug) {
          expect(built.has(link.slug)).toBe(true); // no invented routes
        }
      }
    }
    // The schizophrenia course records the antipsychotic gap honestly.
    const sz = getPsychiatryCourse("schizophrenia")!;
    expect(sz.drugLinks.length).toBe(0);
    expect(sz.contentGaps.join(" ")).toContain("Antipsychotics");
  });
});

describe("psychiatry — batch-1 content QA regressions (2026-09-28 user audit)", () => {
  // The 2026-09-28 user audit of the 6 batch-1 pages found 3 systemic
  // template bugs (empty severity tables, duplicated case Presentation
  // text, brain-region graph misrouting) plus minor issues (typo, flipped
  // KG label, hub badge formats). PR #36 fixed the systemic trio; this
  // suite pins all of them plus the QA-minors pass that followed.

  const BATCH1 = [
    "bipolar-disorders",
    "acute-transient-psychosis",
    "schizoaffective-schizotypal",
    "delusional-disorder",
    "persistent-mood-disorders",
    "suicide-self-harm",
  ];

  test("19. severity scales: no header-only Score tables on any course page (all 9)", async () => {
    for (const course of psychiatryCourses) {
      const { status, html } = await get(`/psychiatry/${course.slug}`);
      expect(status).toBe(200);
      const tables = html.match(/<table[\s\S]*?<\/table>/g) ?? [];
      for (const t of tables) {
        if (t.includes(">Score<")) {
          // a scored instrument must render data rows, never a bare shell;
          // non-scored instruments (ranges: []) must not render a table at all
          expect(t.includes("<td")).toBe(true);
        }
      }
    }
  });

  test("20. clinical cases: distinct structured Presentation on all batch-1 courses", () => {
    for (const slug of BATCH1) {
      const course = getPsychiatryCourse(slug)!;
      expect(course.clinicalCases?.length).toBe(2);
      for (const c of course.clinicalCases ?? []) {
        expect(c.initialPresentation).toBeTruthy();
        // the Presentation field must be a separate structured summary —
        // never a repeat of the narrative hook
        expect(c.initialPresentation).not.toBe(c.presentation);
        expect(c.initialPresentation!).not.toContain(c.presentation);
        expect(c.presentation).not.toContain(c.initialPresentation!);
        expect(c.initialPresentation!.length).toBeGreaterThan(80);
      }
    }
  });

  test("21. knowledge graph: brain-region nodes anchor to the page's own brain section", () => {
    const failures: string[] = [];
    for (const course of psychiatryCourses) {
      for (const node of course.knowledgeGraph) {
        if (node.type === "brain-region" && node.href !== "#brain") {
          // the pre-fix bug: brain-region nodes silently routed to the
          // neurotransmitter hub page
          failures.push(`${course.slug}: "${node.label}" -> ${node.href}`);
        }
      }
    }
    expect(failures).toEqual([]);
  });

  test("22. knowledge graph: condition-node labels match target course titles", () => {
    // Neurotransmitter-type nodes carry the molecule name and link to the
    // signalling hub by design; every OTHER node targeting a registry
    // course must carry the target page's title (or a word-order-true
    // prefix of it). Catches flips like "Schizotypal & Schizoaffective".
    const titles = new Map(psychiatryCourses.map((c) => [c.slug, c.title.toLowerCase()]));
    const failures: string[] = [];
    for (const course of psychiatryCourses) {
      for (const node of course.knowledgeGraph) {
        const m = node.href.match(/^\/psychiatry\/([a-z0-9-]+)\/?$/);
        if (!m || node.type === "neurotransmitter") continue;
        const title = titles.get(m[1]);
        if (!title) continue; // legacy note targets keep short labels by design
        if (!title.startsWith(node.label.toLowerCase())) {
          failures.push(`${course.slug}: "${node.label}" -> ${m[1]} (title "${title}")`);
        }
      }
    }
    expect(failures).toEqual([]);
  });

  test("23. hub domain-group badges are uniformly 'Name (count)' with the true count", () => {
    const groups = loadCorpus().groups;
    expect(groups.length).toBe(18);
    const failures: string[] = [];
    for (const g of groups) {
      const m = g.name.match(/^(.*\S)\s\((\d+)\)$/);
      if (!m || m[2] !== String(g.noteSlugs.length)) {
        // pre-fix: O/P lost the space before the count ("Forensic
        // psychiatry(4)"), Q/R lost the count entirely
        failures.push(`${g.letter}: ${g.name} [${g.noteSlugs.length} slugs]`);
      }
    }
    expect(failures).toEqual([]);
  });

  test("24. known typo regressions stay fixed", () => {
    const blob = JSON.stringify(psychiatryCourses);
    expect(blob.includes("fragtle")).toBe(false);
    expect(blob.includes("adherence-fragile")).toBe(true);
  });
});

describe("psychiatry — batch-2 content QA (Group E, stress/trauma/dissociation)", () => {
  // Batch 2 migration (Group E): the six courses below must uphold the
  // same content invariants the 2026-09-28 user audit forced for batch 1 —
  // distinct structured case presentations, no header-only severity
  // tables (also covered per-course by test 19's loop), honest drug-gap
  // recording — plus the batch-2-specific architecture checks: the PTSD
  // course links only real drug lessons, and the concept course
  // (recovered-memories) omits the disorder-only sections by design.

  const BATCH2 = [
    "acute-stress-reaction",
    "ptsd",
    "adjustment-disorder",
    "bereavement",
    "depersonalization-disorder",
    "recovered-memories",
  ];

  test("25. batch-2 registry: all six Group E courses present, published, keyed to canonical note slugs", () => {
    for (const slug of BATCH2) {
      const course = getPsychiatryCourse(slug)!;
      expect(course).toBeTruthy();
      expect(course.status).toBe("PUBLISHED");
      expect(course.groupLetter).toBe("E");
      expect(course.lessonGroups.length).toBe(6);
    }
  });

  test("26. batch-2 clinical cases: distinct structured Presentation on the five disorder courses", () => {
    for (const slug of BATCH2) {
      const course = getPsychiatryCourse(slug)!;
      if (course.kind !== "disorder") continue; // concept course exempt
      expect(course.clinicalCases?.length).toBe(2);
      for (const c of course.clinicalCases ?? []) {
        expect(c.initialPresentation).toBeTruthy();
        expect(c.initialPresentation).not.toBe(c.presentation);
        expect(c.initialPresentation!).not.toContain(c.presentation);
        expect(c.presentation).not.toContain(c.initialPresentation!);
        expect(c.initialPresentation!.length).toBeGreaterThan(80);
      }
    }
  });

  test("27. batch-2 drug links only to existing KYP drug lessons; gaps recorded honestly", async () => {
    const { getAllDrugSlugs } = await import("../src/lib/kyp/data");
    const built = new Set(getAllDrugSlugs());
    for (const slug of BATCH2) {
      const course = getPsychiatryCourse(slug)!;
      for (const link of course.drugLinks) {
        if (link.slug) {
          expect(built.has(link.slug)).toBe(true); // no invented routes
        }
      }
    }
    // the sleep-bridge medicines of the acute window have no KYP lessons
    const asr = getPsychiatryCourse("acute-stress-reaction")!;
    expect(asr.drugLinks.length).toBe(0);
    expect(asr.contentGaps.join(" ")).toContain("Sedative-hypnotics");
    // PTSD teaches the real pharmacotherapy tier: sertraline/paroxetine/venlafaxine
    const ptsd = getPsychiatryCourse("ptsd")!;
    expect(ptsd.drugLinks.length).toBe(3);
    expect(ptsd.contentGaps.join(" ")).toContain("Prazosin");
  });

  test("28. batch-2 time gates recited in content (exam-critical numbers)", () => {
    const asrBlob = JSON.stringify(getPsychiatryCourse("acute-stress-reaction")!);
    expect(asrBlob).toContain("3 days"); // DSM-5 ASD minimum
    const ptsdBlob = JSON.stringify(getPsychiatryCourse("ptsd")!);
    expect(ptsdBlob).toContain("1-1-2-2"); // cluster minimum counts
    const adjBlob = JSON.stringify(getPsychiatryCourse("adjustment-disorder")!);
    expect(adjBlob).toContain("3 months"); // onset gate
    const berBlob = JSON.stringify(getPsychiatryCourse("bereavement")!);
    expect(berBlob).toContain("6 months"); // ICD-11 PGD gate
    expect(berBlob).toContain("12 months"); // DSM-5-TR adult gate
    const dpdrBlob = JSON.stringify(getPsychiatryCourse("depersonalization-disorder")!);
    expect(dpdrBlob).toContain("reality-testing"); // the intact-insight key
    const rmBlob = JSON.stringify(getPsychiatryCourse("recovered-memories")!);
    expect(rmBlob).toContain("20–60%"); // forgetting evidence
    expect(rmBlob).toContain("25–30%"); // implantation rate
  });
});

describe("psychiatry — batch-3 content QA (Groups F+G, anxiety/OCD/impulse/gambling)", () => {
  // Batch 3 migration (Groups F + G): the six courses below must uphold
  // the same content invariants the batch-1 audit and batch-2 suite
  // established — distinct structured case Presentations, no
  // header-only severity tables (also covered per-course by test 19's
  // loop), honest drug-gap recording — plus the batch-3-specific
  // architecture checks: the anxiety-triad cross-routing, the OCD
  // high-dose prescribing discipline, the honest pharmacology of the
  // impulse/gambling tiers, and the exam-critical numbers.

  const BATCH3 = [
    "gad",
    "social-anxiety-phobias",
    "panic-disorder",
    "ocd",
    "impulse-control-disorders",
    "gambling-disorder",
  ];

  test("29. batch-3 registry: all six Group F+G courses present, published, keyed to canonical note slugs", () => {
    for (const slug of BATCH3) {
      const course = getPsychiatryCourse(slug)!;
      expect(course).toBeTruthy();
      expect(course.status).toBe("PUBLISHED");
      expect(["F", "G"]).toContain(course.groupLetter);
      expect(course.lessonGroups.length).toBe(6);
    }
  });

  test("30. batch-3 clinical cases: distinct structured Presentation on all six disorder courses", () => {
    for (const slug of BATCH3) {
      const course = getPsychiatryCourse(slug)!;
      if (course.kind !== "disorder") continue; // concept course exempt (none in batch 3)
      expect(course.clinicalCases?.length).toBe(2);
      for (const c of course.clinicalCases ?? []) {
        expect(c.initialPresentation).toBeTruthy();
        expect(c.initialPresentation).not.toBe(c.presentation);
        expect(c.initialPresentation!).not.toContain(c.presentation);
        expect(c.presentation).not.toContain(c.initialPresentation!);
        expect(c.initialPresentation!.length).toBeGreaterThan(80);
      }
    }
  });

  test("31. batch-3 drug links only to existing KYP drug lessons; gaps recorded honestly", async () => {
    const { getAllDrugSlugs } = await import("../src/lib/kyp/data");
    const built = new Set(getAllDrugSlugs());
    for (const slug of BATCH3) {
      const course = getPsychiatryCourse(slug)!;
      for (const link of course.drugLinks) {
        if (link.slug) {
          expect(built.has(link.slug)).toBe(true); // no invented routes
        }
      }
    }
    // GAD teaches the four-drug pharmacotherapy tier with honest gaps
    const gad = getPsychiatryCourse("gad")!;
    expect(gad.drugLinks.length).toBe(4);
    expect(gad.contentGaps.join(" ")).toContain("Pregabalin");
    expect(gad.contentGaps.join(" ")).toContain("Buspirone");
    // social anxiety: the SSRI tier for the generalised subtype; propranolol gap recorded
    const social = getPsychiatryCourse("social-anxiety-phobias")!;
    expect(social.drugLinks.length).toBe(3);
    expect(social.contentGaps.join(" ")).toContain("Propranolol");
    // panic: the start-low SSRI/SNRI tier with the benzo gap
    const panic = getPsychiatryCourse("panic-disorder")!;
    expect(panic.drugLinks.length).toBe(4);
    expect(panic.contentGaps.join(" ")).toContain("benzodiazepine class");
    // OCD: the four core OCD drugs; augmentation gaps recorded
    const ocd = getPsychiatryCourse("ocd")!;
    expect(ocd.drugLinks.length).toBe(4);
    expect(ocd.contentGaps.join(" ")).toContain("risperidone");
    // impulse: honest two-drug tier; NAC gap recorded
    const icd = getPsychiatryCourse("impulse-control-disorders")!;
    expect(icd.drugLinks.length).toBe(2);
    expect(icd.contentGaps.join(" ")).toContain("N-acetylcysteine");
    // gambling: the comorbid tiers only; naltrexone gap recorded
    const gambling = getPsychiatryCourse("gambling-disorder")!;
    expect(gambling.drugLinks.length).toBe(2);
    expect(gambling.contentGaps.join(" ")).toContain("Naltrexone");
  });

  test("32. batch-3 time gates and exam-critical numbers recited in content", () => {
    const gadBlob = JSON.stringify(getPsychiatryCourse("gad")!);
    expect(gadBlob).toContain("6 months"); // the duration gate
    expect(gadBlob).toContain("8–12"); // full-trial discipline
    const socialBlob = JSON.stringify(getPsychiatryCourse("social-anxiety-phobias")!);
    expect(socialBlob).toContain("applied tension"); // the BII cure
    expect(socialBlob).toContain("one-session treatment"); // Öst
    const panicBlob = JSON.stringify(getPsychiatryCourse("panic-disorder")!);
    expect(panicBlob).toContain("peaks within minutes"); // the attack definition
    expect(panicBlob).toContain("1 month"); // the disorder clause
    expect(panicBlob).toContain("interoceptive"); // the signature technique
    const ocdBlob = JSON.stringify(getPsychiatryCourse("ocd")!);
    expect(ocdBlob).toContain("10–12"); // OCD trial length
    expect(ocdBlob).toContain("80–90%"); // intrusive-thought universality
    expect(ocdBlob).toContain("200 mg"); // sertraline ceiling
    const icdBlob = JSON.stringify(getPsychiatryCourse("impulse-control-disorders")!);
    expect(icdBlob).toContain("5% of shoplifters"); // the court figure
    expect(icdBlob).toContain("Rapunzel"); // the trichobezoar
    expect(icdBlob).toContain("N-acetylcysteine"); // the NAC tier
    const gamblingBlob = JSON.stringify(getPsychiatryCourse("gambling-disorder")!);
    expect(gamblingBlob).toContain("4 of 9"); // the DSM-5 tally
    expect(gamblingBlob).toContain("12 months"); // the criteria window
    expect(gamblingBlob).toContain("near-miss"); // the master illusion
    expect(gamblingBlob).toContain("variable-ratio"); // the schedule
  });
});

describe("psychiatry — batch-4 content QA (Groups H+I, eating disorders/sexuality-gender)", () => {
  // Batch 4 migration (Groups H + I): the five courses below must uphold
  // the same content invariants the batch-1 audit and the batch-2/3
  // suites established — distinct structured case Presentations, no
  // header-only severity tables (also covered per-course by test 19's
  // loop), honest drug-gap recording — plus the batch-4-specific
  // architecture checks: the eating-disorder medical discipline
  // (refeeding numbers, the fluoxetine dose point), the sexual-medicine
  // craft (the NATSAL durations, the nitrate law), the forensic-hygiene
  // anchors of the paraphilia tier, and the de-pathologising facts of
  // the gender course.

  const BATCH4 = [
    "anorexia-nervosa",
    "bulimia-nervosa",
    "sexual-dysfunctions",
    "paraphilias",
    "gender-identity-adults",
  ];

  test("33. batch-4 registry: all five Group H+I courses present, published, keyed to canonical note slugs", () => {
    for (const slug of BATCH4) {
      const course = getPsychiatryCourse(slug)!;
      expect(course).toBeTruthy();
      expect(course.status).toBe("PUBLISHED");
      expect(["H", "I"]).toContain(course.groupLetter);
      expect(course.lessonGroups.length).toBe(6);
    }
  });

  test("34. batch-4 clinical cases: distinct structured Presentation on all five disorder courses", () => {
    for (const slug of BATCH4) {
      const course = getPsychiatryCourse(slug)!;
      expect(course.clinicalCases?.length).toBe(2);
      for (const c of course.clinicalCases ?? []) {
        expect(c.initialPresentation).toBeTruthy();
        expect(c.initialPresentation).not.toBe(c.presentation);
        expect(c.initialPresentation!).not.toContain(c.presentation);
        expect(c.presentation).not.toContain(c.initialPresentation!);
        expect(c.initialPresentation!.length).toBeGreaterThan(80);
      }
    }
  });

  test("35. batch-4 drug links only to existing KYP drug lessons; gaps recorded honestly", async () => {
    const { getAllDrugSlugs } = await import("../src/lib/kyp/data");
    const built = new Set(getAllDrugSlugs());
    for (const slug of BATCH4) {
      const course = getPsychiatryCourse(slug)!;
      for (const link of course.drugLinks) {
        if (link.slug) {
          expect(built.has(link.slug)).toBe(true); // no invented routes
        }
      }
    }
    // anorexia: no drug treats the core; the olanzapine gap recorded
    const anorexia = getPsychiatryCourse("anorexia-nervosa")!;
    expect(anorexia.drugLinks.length).toBe(0);
    expect(anorexia.contentGaps.join(" ")).toContain("Olanzapine");
    // bulimia: fluoxetine only; topiramate/ondansetron gaps recorded
    const bulimia = getPsychiatryCourse("bulimia-nervosa")!;
    expect(bulimia.drugLinks.length).toBe(1);
    expect(bulimia.drugLinks[0]?.slug).toBe("fluoxetine");
    expect(bulimia.contentGaps.join(" ")).toContain("Topiramate");
    // sexual dysfunctions: the bupropion switch + the SSRI PE tier; PDE-5/dapoxetine gaps recorded
    const sd = getPsychiatryCourse("sexual-dysfunctions")!;
    expect(sd.drugLinks.length).toBe(4);
    expect(sd.contentGaps.join(" ")).toContain("Sildenafil");
    expect(sd.contentGaps.join(" ")).toContain("Dapoxetine");
    // paraphilias: the SSRI compulsivity tier; the anti-androgen gap recorded
    const para = getPsychiatryCourse("paraphilias")!;
    expect(para.drugLinks.length).toBe(2);
    expect(para.contentGaps.join(" ")).toContain("Cyproterone");
    // gender identity: the comorbid tier only; the pathway-medicine gap recorded
    const gi = getPsychiatryCourse("gender-identity-adults")!;
    expect(gi.drugLinks.length).toBe(2);
    expect(gi.contentGaps.join(" ")).toContain("oestrogen");
  });

  test("36. batch-4 time gates and exam-critical numbers recited in content", () => {
    const anBlob = JSON.stringify(getPsychiatryCourse("anorexia-nervosa")!);
    expect(anBlob).toContain("24–72 hours"); // the refeeding window
    expect(anBlob).toContain("Amenorrhoea"); // the deleted criterion
    expect(anBlob).toContain("Minnesota"); // the starvation-experiment lesson
    const buBlob = JSON.stringify(getPsychiatryCourse("bulimia-nervosa")!);
    expect(buBlob).toContain("3 months"); // the frequency gate
    expect(buBlob).toContain("60 mg"); // the fluoxetine dose point
    expect(buBlob).toContain("once a week"); // the DSM-5 gate phrasing
    const sdBlob = JSON.stringify(getPsychiatryCourse("sexual-dysfunctions")!);
    expect(sdBlob).toContain("15.6%"); // the NATSAL 6-month tier (women)
    expect(sdBlob).toContain("nitrates"); // the absolute contraindication
    expect(sdBlob).toContain("Dual Control Model"); // Bancroft
    const paraBlob = JSON.stringify(getPsychiatryCourse("paraphilias")!);
    expect(paraBlob).toContain("Navtej"); // the Indian legal hygiene
    expect(paraBlob).toContain("POCSO"); // the mandatory-reporting anchor
    expect(paraBlob).toContain("two clocks"); // the risk model
    const giBlob = JSON.stringify(getPsychiatryCourse("gender-identity-adults")!);
    expect(giBlob).toContain("NALSA"); // the self-ID architecture
    expect(giBlob).toContain("minority-stress"); // the comorbidity model
    expect(giBlob).toContain("fertility"); // the before-hormones discipline
  });
});

describe("psychiatry — batch-5 content QA (Groups J+K, personality disorders/sleep-wake)", () => {
  // Batch 5 migration (Groups J + K): the seven courses below must
  // uphold the same content invariants the batch-1 audit and the
  // batch-2/3/4 suites established — distinct structured case
  // Presentations, honest drug-gap recording — plus the batch-5-
  // specific architecture checks: the personality trilogy's numbers
  // (the 88% remission, the 8-10% suicide mortality, the DBT trial
  // figures, the prison meta-analysis), the sleep quartet's gates
  // (the 3x3 insomnia gates, the four-engine differential, the
  // cataplexy question, the RBD prodrome, the master grid), and the
  // Indian anchors (EUPD terminology, the relabelling trap, the
  // terrace safety audit, the pharmacy-first exit).

  const BATCH5 = [
    "personality-disorders-overview",
    "personality-disorder-types",
    "personality-disorder-treatment",
    "sleep-basics",
    "insomnia",
    "hypersomnia",
    "parasomnias",
  ];

  test("37. batch-5 registry: all seven Group J+K courses present, published, keyed to canonical note slugs", () => {
    for (const slug of BATCH5) {
      const course = getPsychiatryCourse(slug)!;
      expect(course).toBeTruthy();
      expect(course.status).toBe("PUBLISHED");
      expect(["J", "K"]).toContain(course.groupLetter);
      expect(course.lessonGroups.length).toBe(6);
      expect(course.provenance.length).toBeGreaterThanOrEqual(10);
      expect(course.evidenceMap.length).toBeGreaterThanOrEqual(10);
    }
  });

  test("38. batch-5 clinical cases: distinct structured Presentation on all seven courses", () => {
    for (const slug of BATCH5) {
      const course = getPsychiatryCourse(slug)!;
      expect(course.clinicalCases?.length).toBe(2);
      for (const c of course.clinicalCases ?? []) {
        expect(c.initialPresentation).toBeTruthy();
        expect(c.initialPresentation).not.toBe(c.presentation);
        expect(c.initialPresentation!).not.toContain(c.presentation);
        expect(c.presentation).not.toContain(c.initialPresentation!);
        expect(c.initialPresentation!.length).toBeGreaterThan(80);
      }
    }
  });

  test("39. batch-5 drug links only to existing KYP drug lessons; gaps recorded honestly", async () => {
    const { getAllDrugSlugs } = await import("../src/lib/kyp/data");
    const built = new Set(getAllDrugSlugs());
    for (const slug of BATCH5) {
      const course = getPsychiatryCourse(slug)!;
      for (const link of course.drugLinks) {
        if (link.slug) {
          expect(built.has(link.slug)).toBe(true); // no invented routes
        }
      }
    }
    // personality trilogy: overview none; types fluoxetine only; treatment the honest audit tier
    const pdo = getPsychiatryCourse("personality-disorders-overview")!;
    expect(pdo.drugLinks.length).toBe(0);
    expect(pdo.contentGaps.join(" ")).toContain("No drug is licensed");
    const pdt = getPsychiatryCourse("personality-disorder-types")!;
    expect(pdt.drugLinks.length).toBe(1);
    expect(pdt.drugLinks[0]?.slug).toBe("fluoxetine");
    expect(pdt.contentGaps.join(" ")).toContain("Topiramate");
    const pdx = getPsychiatryCourse("personality-disorder-treatment")!;
    expect(pdx.drugLinks.length).toBe(3);
    expect(pdx.contentGaps.join(" ")).toContain("aripiprazole");
    // sleep quartet: sleep-basics none; insomnia mirtazapine+amitriptyline; hypersomnia the cataplexy trio; parasomnias mirtazapine+clomipramine
    const sb = getPsychiatryCourse("sleep-basics")!;
    expect(sb.drugLinks.length).toBe(0);
    const ins = getPsychiatryCourse("insomnia")!;
    expect(ins.drugLinks.length).toBe(2);
    expect(ins.contentGaps.join(" ")).toContain("Zolpidem");
    const hyp = getPsychiatryCourse("hypersomnia")!;
    expect(hyp.drugLinks.length).toBe(3);
    expect(hyp.drugLinks.map((d: any) => d.slug).sort()).toEqual(["clomipramine", "fluoxetine", "venlafaxine"]);
    expect(hyp.contentGaps.join(" ")).toContain("Modafinil");
    const par = getPsychiatryCourse("parasomnias")!;
    expect(par.drugLinks.length).toBe(2);
    expect(par.contentGaps.join(" ")).toContain("Clonazepam");
  });

  test("40. batch-5 exam-critical numbers and anchors recited in content", () => {
    const pdoBlob = JSON.stringify(getPsychiatryCourse("personality-disorders-overview")!);
    expect(pdoBlob).toContain("10–13%"); // the community prevalence
    expect(pdoBlob).toContain("47% of prisoners"); // the antisocial PD meta-analysis anchor
    expect(pdoBlob).toContain("EUPD"); // the Indian terminology
    const pdtBlob = JSON.stringify(getPsychiatryCourse("personality-disorder-types")!);
    expect(pdtBlob).toContain("8–10%"); // the borderline suicide mortality
    expect(pdtBlob).toContain("grandiosity"); // the narcissistic-borderline discriminator
    expect(pdtBlob).toContain("anankastic"); // the ICD translation
    const pdxBlob = JSON.stringify(getPsychiatryCourse("personality-disorder-treatment")!);
    expect(pdxBlob).toContain("88%"); // the remission revolution
    expect(pdxBlob).toContain("8.5 vs 38.8"); // the DBT inpatient-days numbers
    expect(pdxBlob).toContain("pseudo-diagnoses"); // the APA 2001 critique
    expect(pdxBlob).toContain("nidotherapy"); // the Type R answer
    const sbBlob = JSON.stringify(getPsychiatryCourse("sleep-basics")!);
    expect(sbBlob).toContain("Process S"); // the two-process model
    expect(sbBlob).toContain("adenosine"); // the pressure currency
    expect(sbBlob).toContain("SCN"); // the circadian clock seat
    const insBlob = JSON.stringify(getPsychiatryCourse("insomnia")!);
    expect(insBlob).toContain("3 nights/week"); // the DSM-5 gates
    expect(insBlob).toContain("CBT-I"); // the first line
    expect(insBlob).toContain("Perpetuating"); // the 3P treatment target
    const hypBlob = JSON.stringify(getPsychiatryCourse("hypersomnia")!);
    expect(hypBlob).toContain("cataplexy"); // the pathognomonic sign
    expect(hypBlob).toContain("8 minutes"); // the MSLT latency
    expect(hypBlob).toContain("orexin"); // the narcolepsy biology
    expect(hypBlob).toContain("STOP-BANG"); // the OSA screen (named)
    const parBlob = JSON.stringify(getPsychiatryCourse("parasomnias")!);
    expect(parBlob).toContain("synucleinopathy"); // the RBD prodrome
    expect(parBlob).toContain("scheduled awakening"); // the behavioural core
    expect(parBlob).toContain("Imagery rehearsal"); // the nightmare treatment
    expect(parBlob).toContain("terraces"); // the Indian safety audit
  });
});

describe("psychiatry — batch-6 content QA (Group A part 1, neurocognitive disorders)", () => {
  // Batch 6 migration (Group A, first half): the seven courses below
  // must uphold the same content invariants the batch-1 audit and the
  // batch-2/3/4/5 suites established — distinct structured case
  // Presentations, honest drug-gap recording, brain-region graph
  // anchoring — plus the batch-6-specific architecture checks: the
  // antipsychotic-catastrophe rules (DLB and PDD teaching the
  // forbidden tier), the one-year rule twins (DLB vs PDD), the
  // genetic counselling discipline (Huntington's three hard rules),
  // and the tempo signatures that sort the dementias.

  const BATCH6 = [
    "delirium",
    "alzheimers-dementia",
    "frontotemporal-dementia",
    "prion-disease",
    "lewy-body-dementia",
    "parkinsons-dementia",
    "huntingtons-neuropsychiatry",
  ];

  test("41. batch-6 registry: all seven Group A (part 1) courses present, published, keyed to canonical note slugs", () => {
    for (const slug of BATCH6) {
      const course = getPsychiatryCourse(slug)!;
      expect(course).toBeTruthy();
      expect(course.status).toBe("PUBLISHED");
      expect(course.groupLetter).toBe("A");
      expect(course.lessonGroups.length).toBe(6);
    }
  });

  test("42. batch-6 clinical cases: distinct structured Presentation on all seven disorder courses", () => {
    for (const slug of BATCH6) {
      const course = getPsychiatryCourse(slug)!;
      if (course.kind !== "disorder") continue; // concept course exempt
      expect(course.clinicalCases?.length).toBe(2);
      for (const c of course.clinicalCases ?? []) {
        expect(c.initialPresentation).toBeTruthy();
        expect(c.initialPresentation).not.toBe(c.presentation);
        expect(c.initialPresentation!).not.toContain(c.presentation);
        expect(c.presentation).not.toContain(c.initialPresentation!);
        expect(c.initialPresentation!.length).toBeGreaterThan(80);
      }
    }
  });

  test("43. batch-6 drug links only to existing KYP drug lessons; gaps recorded honestly", async () => {
    const { getAllDrugSlugs } = await import("../src/lib/kyp/data");
    const built = new Set(getAllDrugSlugs());
    for (const slug of BATCH6) {
      const course = getPsychiatryCourse(slug)!;
      for (const link of course.drugLinks) {
        if (link.slug) {
          expect(built.has(link.slug)).toBe(true); // no invented routes
        }
      }
    }
    // the antipsychotic and cognitive-enhancer tiers have no KYP lessons:
    // every batch-6 course records its gaps honestly
    const dlb = getPsychiatryCourse("lewy-body-dementia")!;
    expect(dlb.drugLinks.length).toBe(0);
    expect(dlb.contentGaps.join(" ")).toContain("Rivastigmine"); // the best-evidenced tier, gap-recorded
    const prion = getPsychiatryCourse("prion-disease")!;
    expect(prion.drugLinks.length).toBe(0); // no drug treats it — the absence IS the teaching
    expect(prion.contentGaps.join(" ")).toContain("no drug treats");
    // the SSRI-first tier links only where it is genuinely first line
    const hd = getPsychiatryCourse("huntingtons-neuropsychiatry")!;
    expect(hd.drugLinks.map((l: any) => l.slug).sort()).toEqual(["escitalopram", "sertraline"]);
  });

  test("44. batch-6 exam-critical numbers and anchors recited in content", () => {
    const delBlob = JSON.stringify(getPsychiatryCourse("delirium")!);
    expect(delBlob).toContain("hours to days"); // the onset tempo
    expect(delBlob).toContain("hypoactive"); // the missed subtype
    expect(delBlob).toContain("months backwards"); // the bedside screen (paraphrased test)
    expect(delBlob).toContain("0.25"); // haloperidol dosing taught
    const alzBlob = JSON.stringify(getPsychiatryCourse("alzheimers-dementia")!);
    expect(alzBlob).toContain("50–70%"); // the share of dementia
    expect(alzBlob).toContain("6 in 10"); // the plain-language share
    expect(alzBlob).toContain("8.8 million"); // the Indian figure
    expect(alzBlob).toContain("10–15%"); // MCI yearly conversion
    expect(alzBlob).toContain("donepezil"); // the cholinesterase tier
    const ftdBlob = JSON.stringify(getPsychiatryCourse("frontotemporal-dementia")!);
    expect(ftdBlob).toContain("45–65"); // the age window
    expect(ftdBlob).toContain("kolonel"); // the surface dyslexia pearl
    expect(ftdBlob).toContain("C9orf72"); // the FTD-ALS gene
    expect(ftdBlob).toContain("weight gain"); // the hyperorality sign (lowercase variant)
    const prionBlob = JSON.stringify(getPsychiatryCourse("prion-disease")!);
    expect(prionBlob).toContain("weeks-to-months"); // the tempo signature
    expect(prionBlob).toContain("ribbon"); // the DWI MRI sign
    expect(prionBlob).toContain("RT-QuIC"); // the modern specific test
    expect(prionBlob).toContain("1–1.5 per million"); // the incidence
    const dlbBlob2 = JSON.stringify(getPsychiatryCourse("lewy-body-dementia")!);
    expect(dlbBlob2).toContain("one-year rule"); // the DLB/PDD hinge
    expect(dlbBlob2).toContain("flips, films, freeze, fights-in-sleep"); // the four-feature hook
    expect(dlbBlob2).toContain("5–15 years"); // the RBD prodrome
    const pddBlob = JSON.stringify(getPsychiatryCourse("parkinsons-dementia")!);
    expect(pddBlob).toContain("25–40%"); // the dementia share in Parkinson's
    expect(pddBlob).toContain("see-saw"); // the chemistry image
    expect(pddBlob).toContain("pimavanserin"); // the name-to-know taught in gaps
    const hdBlob = JSON.stringify(getPsychiatryCourse("huntingtons-neuropsychiatry")!);
    expect(hdBlob).toContain("50-50"); // the coin flip (hyphen form)
    expect(hdBlob).toContain("anticipation"); // the lengthening repeat
    expect(hdBlob).toContain("boxcar"); // the imaging sign
    expect(hdBlob).toContain("15–20 years"); // the survival arc
  });
});

describe("psychiatry — batch-7 content QA (Group A part 2, neurocognitive disorders)", () => {
  // Batch 7 migration (Group A, second half): the seven courses below
  // must uphold the same content invariants the batch-1 audit and the
  // batch-2 through 6 suites established — distinct structured case
  // Presentations, honest drug-gap recording, brain-region graph
  // anchoring — plus the batch-7-specific architecture checks: the
  // sequence law (thiamine before glucose) taught across the alcohol
  // and amnesic courses, the PTA-outpredicts-LOC rule of the TBI
  // course, the staircase history of the vascular course, and the
  // two concept courses (the five-floor umbrella and the
  // restoration-versus-compensation verdict) carrying their own
  // discipline without inventing drug routes.

  const BATCH7 = [
    "vascular-dementia",
    "hiv-neuropsychiatry",
    "tbi-neuropsychiatry",
    "alcohol-related-dementia",
    "amnesic-syndromes",
    "dementia-management",
    "memory-rehabilitation",
  ];

  test("45. batch-7 registry: all seven Group A (part 2) courses present, published, keyed to canonical note slugs", () => {
    for (const slug of BATCH7) {
      const course = getPsychiatryCourse(slug)!;
      expect(course).toBeTruthy();
      expect(course.status).toBe("PUBLISHED");
      expect(course.groupLetter).toBe("A");
      expect(course.lessonGroups.length).toBe(6);
    }
  });

  test("46. batch-7 clinical cases: distinct structured Presentation on the five disorder courses", () => {
    for (const slug of BATCH7) {
      const course = getPsychiatryCourse(slug)!;
      if (course.kind !== "disorder") continue; // concept courses exempt
      expect(course.clinicalCases?.length).toBe(2);
      for (const c of course.clinicalCases ?? []) {
        expect(c.initialPresentation).toBeTruthy();
        expect(c.initialPresentation).not.toBe(c.presentation);
        expect(c.initialPresentation!).not.toContain(c.presentation);
        expect(c.presentation).not.toContain(c.initialPresentation!);
        expect(c.initialPresentation!.length).toBeGreaterThan(80);
      }
    }
  });

  test("47. batch-7 drug links only to existing KYP drug lessons; gaps recorded honestly", async () => {
    const { getAllDrugSlugs } = await import("../src/lib/kyp/data");
    const built = new Set(getAllDrugSlugs());
    for (const slug of BATCH7) {
      const course = getPsychiatryCourse(slug)!;
      for (const link of course.drugLinks) {
        if (link.slug) {
          expect(built.has(link.slug)).toBe(true); // no invented routes
        }
      }
    }
    // the amnesic course's pharmacology IS the absence: no drug restores
    // the filed gap, and the thiamine sequence rule is taught, not routed
    const amn = getPsychiatryCourse("amnesic-syndromes")!;
    expect(amn.drugLinks.length).toBe(0);
    expect(amn.contentGaps.join(" ")).toContain("no drug restores");
    // the memory-rehabilitation prescription pad is a diagram, not a tablet
    const mr = getPsychiatryCourse("memory-rehabilitation")!;
    expect(mr.drugLinks.length).toBe(0);
    expect(mr.contentGaps.join(" ")).toContain("a diagram, not a tablet");
    // the umbrella course links only the one SSRI it genuinely uses
    const dm = getPsychiatryCourse("dementia-management")!;
    expect(dm.drugLinks.map((l: any) => l.slug)).toEqual(["sertraline"]);
    // the vascular course links the SSRI pair for the riders
    const vad = getPsychiatryCourse("vascular-dementia")!;
    expect(vad.drugLinks.map((l: any) => l.slug).sort()).toEqual(["escitalopram", "sertraline"]);
  });

  test("48. batch-7 exam-critical numbers and anchors recited in content", () => {
    const vadBlob = JSON.stringify(getPsychiatryCourse("vascular-dementia")!);
    expect(vadBlob).toContain("staircase"); // the course's shape
    expect(vadBlob).toContain("15–25%"); // the pure-form share
    expect(vadBlob).toContain("thalamus"); // the strategic site
    expect(vadBlob).toContain("NOTCH3"); // CADASIL
    const hivBlob = JSON.stringify(getPsychiatryCourse("hiv-neuropsychiatry")!);
    expect(hivBlob).toContain("21.1"); // the pre-HAART incidence
    expect(hivBlob).toContain("38.5"); // the HAART-era survival
    expect(hivBlob).toContain("Trojan horse"); // the entry mechanism
    expect(hivBlob).toContain("St John's Wort"); // the classic interaction
    const tbiBlob = JSON.stringify(getPsychiatryCourse("tbi-neuropsychiatry")!);
    expect(tbiBlob).toContain("LOC lies; PTA tells"); // the grading rule
    expect(tbiBlob).toContain("10–15%"); // the persistent mild tier
    expect(tbiBlob).toContain("subdural"); // the surgical mimic
    expect(tbiBlob).toContain("hypopituitarism"); // the endocrine mimic
    const ardBlob = JSON.stringify(getPsychiatryCourse("alcohol-related-dementia")!);
    expect(ardBlob).toContain("B1 before D5"); // the sequence law
    expect(ardBlob).toContain("Marchiafava-Bignami"); // the callosal classic
    expect(ardBlob).toContain("vermis"); // the gait's first sign
    expect(ardBlob).toContain("a quarter to a half"); // the honest reversibility
    const amnBlob = JSON.stringify(getPsychiatryCourse("amnesic-syndromes")!);
    expect(amnBlob).toContain("immediate intact, recent ruined, remote retained"); // the architecture
    expect(amnBlob).toContain("one sign is enough"); // the Wernicke rule (lowercase variant)
    expect(amnBlob).toContain("procedural"); // the surviving gift
    expect(amnBlob).toContain("₹10–30"); // the prevention cost
    const dmBlob = JSON.stringify(getPsychiatryCourse("dementia-management")!);
    expect(dmBlob).toContain("PAIN FUSES"); // the checklist
    expect(dmBlob).toContain("five floors"); // the architecture
    expect(dmBlob).toContain("hand-feeding"); // the final-phase evidence
    expect(dmBlob).toContain("14416"); // the carer's line
    const mrBlob = JSON.stringify(getPsychiatryCourse("memory-rehabilitation")!);
    expect(mrBlob).toContain("errorless"); // the founding law
    expect(mrBlob).toContain("spaced retrieval"); // the fact-planting technique
    expect(mrBlob).toContain("dependency cage"); // the failure mode
    expect(mrBlob).toContain("the wall calendar"); // the Indian answer
  });
});

describe("psychiatry — batch-8 content QA (Group B part 1, substance use disorders)", () => {
  // Batch 8 migration (Group B, first half): the five courses below
  // must uphold the same content invariants the batch-1 audit and the
  // batch-2 through 7 suites established — distinct structured case
  // Presentations, honest drug-gap recording, brain-region graph
  // anchoring — plus the batch-8-specific architecture checks: the
  // umbrella concept course teaching the pharmacotherapy logic
  // without owning a single drug route, the withdrawal-ladder hours
  // of the alcohol course, the overdose-drill and never-use-alone
  // discipline of the opioid course, the no-maintenance honesty of
  // the stimulant course, and the quiet-vitals rule of the
  // hallucinogen course.

  const BATCH8 = [
    "substance-use-overview",
    "alcohol-use-disorders",
    "opioid-use-disorders",
    "stimulant-use-disorders",
    "hallucinogen-use-disorders",
  ];

  test("49. batch-8 registry: all five Group B (part 1) courses present, published, keyed to canonical note slugs", () => {
    for (const slug of BATCH8) {
      const course = getPsychiatryCourse(slug)!;
      expect(course).toBeTruthy();
      expect(course.status).toBe("PUBLISHED");
      expect(course.groupLetter).toBe("B");
      expect(course.lessonGroups.length).toBe(6);
      expect(course.provenance.length).toBeGreaterThanOrEqual(10);
      expect(course.evidenceMap.length).toBeGreaterThanOrEqual(10);
    }
  });

  test("50. batch-8 clinical cases: distinct structured Presentation on all five courses", () => {
    for (const slug of BATCH8) {
      const course = getPsychiatryCourse(slug)!;
      expect(course.clinicalCases?.length).toBe(2);
      for (const c of course.clinicalCases ?? []) {
        expect(c.initialPresentation).toBeTruthy();
        expect(c.initialPresentation).not.toBe(c.presentation);
        expect(c.initialPresentation!).not.toContain(c.presentation);
        expect(c.presentation).not.toContain(c.initialPresentation!);
        expect(c.initialPresentation!.length).toBeGreaterThan(80);
      }
    }
  });

  test("51. batch-8 drug links only to existing KYP drug lessons; gaps recorded honestly", async () => {
    const { getAllDrugSlugs } = await import("../src/lib/kyp/data");
    const built = new Set(getAllDrugSlugs());
    for (const slug of BATCH8) {
      const course = getPsychiatryCourse(slug)!;
      for (const link of course.drugLinks) {
        if (link.slug) {
          expect(built.has(link.slug)).toBe(true); // no invented routes
        }
      }
    }
    // the umbrella teaches the pharmacotherapy LOGIC; every actual
    // maintenance medicine belongs to the drug-specific courses and
    // no KYP lesson exists for any of them — the absence is the lesson
    const suo = getPsychiatryCourse("substance-use-overview")!;
    expect(suo.drugLinks.length).toBe(0);
    expect(suo.contentGaps.join(" ")).toContain("naltrexone");
    expect(suo.contentGaps.join(" ")).toContain("buprenorphine");
    // alcohol links only the one rider tier the note assigns; the
    // relapse-prevention trio is gap-recorded by name
    const aud = getPsychiatryCourse("alcohol-use-disorders")!;
    expect(aud.drugLinks.map((l: any) => l.slug)).toEqual(["mirtazapine"]);
    expect(aud.contentGaps.join(" ")).toContain("naltrexone");
    expect(aud.contentGaps.join(" ")).toContain("disulfiram");
    // opioid: the whole maintenance tier (buprenorphine, methadone,
    // naloxone, naltrexone) is gap-recorded — routes never invented
    const oud = getPsychiatryCourse("opioid-use-disorders")!;
    expect(oud.drugLinks.length).toBe(0);
    expect(oud.contentGaps.join(" ")).toContain("Buprenorphine");
    expect(oud.contentGaps.join(" ")).toContain("Methadone");
    // stimulant: no approved maintenance — the honesty IS the teaching
    const stu = getPsychiatryCourse("stimulant-use-disorders")!;
    expect(stu.drugLinks.length).toBe(0);
    expect(stu.contentGaps.join(" ")).toContain("modest");
    // hallucinogen: the crisis tier has no KYP lessons either
    const hud = getPsychiatryCourse("hallucinogen-use-disorders")!;
    expect(hud.drugLinks.length).toBe(0);
    expect(hud.contentGaps.join(" ")).toContain("Lamotrigine");
  });

  test("52. batch-8 exam-critical numbers and anchors recited in content", () => {
    const suoBlob = JSON.stringify(getPsychiatryCourse("substance-use-overview")!);
    expect(suoBlob).toContain("Want, Like, Calm"); // the three currencies
    expect(suoBlob).toContain("240–290 million"); // the global burden
    expect(suoBlob).toContain("1 in 9"); // the treatment gap
    expect(suoBlob).toContain("Control-Social-Risk-Pharma"); // the DSM clusters
    expect(suoBlob).toContain("2–6 weeks"); // the new-diagnosis timing rule
    const audBlob = JSON.stringify(getPsychiatryCourse("alcohol-use-disorders")!);
    expect(audBlob).toContain("48–96"); // the DT window
    expect(audBlob).toContain("B1 before D5"); // the sequence law
    expect(audBlob).toContain("kindling"); // the withdrawal amplifier
    expect(audBlob).toContain("400 million"); // the global AUD figure
    expect(audBlob).toContain("2.6 million"); // the deaths figure
    expect(audBlob).toContain("five-floor"); // the management architecture (source-true)
    const oudBlob = JSON.stringify(getPsychiatryCourse("opioid-use-disorders")!);
    expect(oudBlob).toContain("Shout–Breathe–Naloxone–Side–Send"); // the overdose drill
    expect(oudBlob).toContain("miserable, not lethal"); // the withdrawal framing
    expect(oudBlob).toContain("precipitated withdrawal"); // the induction error
    expect(oudBlob).toContain("never use alone"); // the home rule
    expect(oudBlob).toContain("locus coeruleus"); // the alarm centre
    const stuBlob = JSON.stringify(getPsychiatryCourse("stimulant-use-disorders")!);
    expect(stuBlob).toContain("formication"); // the perceptual signature
    expect(stuBlob).toContain("Run–Crash–Crave"); // the cycle mnemonic
    expect(stuBlob).toContain("unopposed beta-blockade"); // the cocaine chest-pain law
    expect(stuBlob).toContain("4–6 week"); // the re-assessment rule
    const hudBlob = JSON.stringify(getPsychiatryCourse("hallucinogen-use-disorders")!);
    expect(hudBlob).toContain("5-HT2A"); // the receptor
    expect(hudBlob).toContain("visual snow"); // the HPPD signature
    expect(hudBlob).toContain("palinopsia"); // the trailing images
    expect(hudBlob).toContain("nystagmus"); // the PCP pearl
    expect(hudBlob).toContain("NBOMe"); // the substitution masquerade
    expect(hudBlob).toContain("re-emergence"); // the PCP cycle
  });
});

describe("psychiatry — batch-9 content QA (Group B part 2, substance use disorders)", () => {
  // Batch 9 migration (Group B, second half): the five courses below
  // must uphold the same content invariants the batch-1 audit and the
  // batch-2 through 8 suites established — distinct structured case
  // Presentations, honest drug-gap recording, brain-region graph
  // anchoring — plus the batch-9-specific architecture checks: the
  // conversion-and-taper discipline of the benzodiazepine course, the
  // two-deaths teaching of the party-drug course, the child-protection
  // architecture of the inhalant course, the two-sided honesty of the
  // cannabis course, and the 5-A + CYP1A2 discipline of the nicotine
  // course.

  const BATCH9 = [
    "benzodiazepine-misuse",
    "party-drug-use-disorders",
    "volatile-substance-misuse",
    "cannabis-mental-health",
    "nicotine-dependence",
  ];

  test("53. batch-9 registry: all five Group B (part 2) courses present, published, keyed to canonical note slugs", () => {
    for (const slug of BATCH9) {
      const course = getPsychiatryCourse(slug)!;
      expect(course).toBeTruthy();
      expect(course.status).toBe("PUBLISHED");
      expect(course.groupLetter).toBe("B");
      expect(course.lessonGroups.length).toBe(6);
      expect(course.provenance.length).toBeGreaterThanOrEqual(10);
      expect(course.evidenceMap.length).toBeGreaterThanOrEqual(10);
    }
  });

  test("54. batch-9 clinical cases: distinct structured Presentation on all five courses", () => {
    for (const slug of BATCH9) {
      const course = getPsychiatryCourse(slug)!;
      expect(course.clinicalCases?.length).toBe(2);
      for (const c of course.clinicalCases ?? []) {
        expect(c.initialPresentation).toBeTruthy();
        expect(c.initialPresentation).not.toBe(c.presentation);
        expect(c.initialPresentation!).not.toContain(c.presentation);
        expect(c.presentation).not.toContain(c.initialPresentation!);
        expect(c.initialPresentation!.length).toBeGreaterThan(80);
      }
    }
  });

  test("55. batch-9 drug links only to existing KYP drug lessons; gaps recorded honestly", async () => {
    const { getAllDrugSlugs } = await import("../src/lib/kyp/data");
    const built = new Set(getAllDrugSlugs());
    for (const slug of BATCH9) {
      const course = getPsychiatryCourse(slug)!;
      for (const link of course.drugLinks) {
        if (link.slug) {
          expect(built.has(link.slug)).toBe(true); // no invented routes
        }
      }
    }
    // benzodiazepine: the SSRI exit-prescription tier links; the taper
    // kit (diazepam, carbamazepine, propranolol, the Z-drugs) is
    // gap-recorded by name
    const bzd = getPsychiatryCourse("benzodiazepine-misuse")!;
    expect(bzd.drugLinks.map((l: any) => l.slug)).toEqual(["sertraline"]);
    expect(bzd.contentGaps.join(" ")).toContain("Diazepam");
    // party drugs: the emergency tier (baclofen, phenobarbital,
    // cyproheptadine) has no KYP lessons — the gaps are the teaching
    const pty = getPsychiatryCourse("party-drug-use-disorders")!;
    expect(pty.drugLinks.length).toBe(0);
    expect(pty.contentGaps.join(" ")).toContain("Baclofen");
    // inhalants: the pharmacological desert is the honest content
    const inh = getPsychiatryCourse("volatile-substance-misuse")!;
    expect(inh.drugLinks.length).toBe(0);
    expect(inh.contentGaps.join(" ")).toContain("B12");
    // cannabis: no approved pharmacotherapy; trial-tier gaps recorded
    const can = getPsychiatryCourse("cannabis-mental-health")!;
    expect(can.drugLinks.length).toBe(0);
    expect(can.contentGaps.join(" ")).toContain("N-acetylcysteine");
    // nicotine: bupropion is the one KYP-lessoned cessation medicine;
    // NRT/varenicline/cytisine gap-recorded
    const nic = getPsychiatryCourse("nicotine-dependence")!;
    expect(nic.drugLinks.map((l: any) => l.slug)).toEqual(["bupropion"]);
    expect(nic.contentGaps.join(" ")).toContain("Varenicline");
    expect(nic.contentGaps.join(" ")).toContain("Cytisine");
  });

  test("56. batch-9 exam-critical numbers and anchors recited in content", () => {
    const bzdBlob = JSON.stringify(getPsychiatryCourse("benzodiazepine-misuse")!);
    expect(bzdBlob).toContain("Convert–Chart–Cover–Rebuild–Supervise"); // the taper architecture
    expect(bzdBlob).toContain("Seizure-Stack-Seniors"); // the dangers mnemonic
    expect(bzdBlob).toContain("0.5 mg alprazolam ≈ 10 mg diazepam"); // the exam equivalence
    expect(bzdBlob).toContain("2–4 weeks"); // the prescribing ceiling
    expect(bzdBlob).toContain("10–25%"); // the taper step
    const ptyBlob = JSON.stringify(getPsychiatryCourse("party-drug-use-disorders")!);
    expect(ptyBlob).toContain("heat-death triangle"); // MDMA death one
    expect(ptyBlob).toContain("water-death"); // MDMA death two
    expect(ptyBlob).toContain("500 ml"); // the middle-path hydration rule
    expect(ptyBlob).toContain("3 a.m."); // the GHB dependence clock
    expect(ptyBlob).toContain("baclofen"); // the withdrawal backbone
    expect(ptyBlob).toContain("ulcerative cystitis"); // the ketamine bladder
    const inhBlob = JSON.stringify(getPsychiatryCourse("volatile-substance-misuse")!);
    expect(inhBlob).toContain("sudden sniffing death"); // the sensitised heart
    expect(inhBlob).toContain("Childline 1098"); // the child's door
    expect(inhBlob).toContain("Child Welfare Committee"); // the statutory lever
    expect(inhBlob).toContain("35–70%"); // the street-children prevalence
    expect(inhBlob).toContain("Lhermitte"); // the nitrous sign
    const canBlob = JSON.stringify(getPsychiatryCourse("cannabis-mental-health")!);
    expect(canBlob).toContain("220 million"); // the global figure
    expect(canBlob).toContain("1 in 6"); // the adolescent dependence rate
    expect(canBlob).toContain("doubles relapse"); // the schizophrenia message
    expect(canBlob).toContain("hot shower"); // the hyperemesis pearl
    expect(canBlob).toContain("4–6 week"); // the re-assessment rule
    const nicBlob = JSON.stringify(getPsychiatryCourse("nicotine-dependence")!);
    expect(nicBlob).toContain("Ask–Advise–Agree–Assist–Arrange"); // the 5-As
    expect(nicBlob).toContain("30 minutes"); // the severity question
    expect(nicBlob).toContain("CYP1A2"); // the interaction
    expect(nicBlob).toContain("clozapine"); // the level-rise pearl
    expect(nicBlob).toContain("submucous fibrosis"); // the chewer's lesion
    expect(nicBlob).toContain("4–5 kg"); // the weight script
  });
});


describe("psychiatry — batch-10 content QA (Group M, psychiatry of old age)", () => {
  // Batch 10 migration (Group M): the eight courses below must uphold
  // the same content invariants the batch-1 through 9 suites
  // established — distinct structured case Presentations, honest
  // drug-gap recording, brain-region graph anchoring — plus the
  // group-M-specific checks: the quiet-emergency discipline of the
  // elderly delirium course, the crossroads honesty of MCI, the
  // silent-epidemic and tablet-bag craft of elderly substance use,
  // the ridden-upon workup of late-life psychosis, the
  // pseudodementia trap and geriatric prescribing laws of elderly
  // mood, the wrong-tablet lesson of elderly anxiety, the disguises
  // and informant discipline of elderly personality, and the
  // lethality-not-attempts + means-audit safety craft of elderly
  // suicide.

  const BATCH10 = [
    "elderly-delirium",
    "mci",
    "elderly-substance-use",
    "late-life-psychosis",
    "elderly-mood",
    "elderly-anxiety-ocd",
    "elderly-personality",
    "elderly-suicide",
  ];

  test("57. batch-10 registry: all eight Group M courses present, published, keyed to canonical note slugs", () => {
    for (const slug of BATCH10) {
      const course = getPsychiatryCourse(slug)!;
      expect(course).toBeTruthy();
      expect(course.status).toBe("PUBLISHED");
      expect(course.groupLetter).toBe("M");
      expect(course.lessonGroups.length).toBe(6);
      expect(course.provenance.length).toBeGreaterThanOrEqual(10);
      expect(course.evidenceMap.length).toBeGreaterThanOrEqual(10);
    }
  });

  test("58. batch-10 clinical cases: distinct structured Presentation on all eight courses", () => {
    for (const slug of BATCH10) {
      const course = getPsychiatryCourse(slug)!;
      expect(course.clinicalCases?.length).toBe(2);
      for (const c of course.clinicalCases ?? []) {
        expect(c.initialPresentation).toBeTruthy();
        expect(c.initialPresentation).not.toBe(c.presentation);
        expect(c.initialPresentation!).not.toContain(c.presentation);
        expect(c.presentation).not.toContain(c.initialPresentation!);
        expect(c.initialPresentation!.length).toBeGreaterThan(80);
      }
    }
  });

  test("59. batch-10 drug links only to existing KYP drug lessons; gaps recorded honestly", async () => {
    const { getAllDrugSlugs } = await import("../src/lib/kyp/data");
    const built = new Set(getAllDrugSlugs());
    for (const slug of BATCH10) {
      const course = getPsychiatryCourse(slug)!;
      for (const link of course.drugLinks) {
        if (link.slug) {
          expect(built.has(link.slug)).toBe(true); // no invented routes
        }
      }
    }
    // elderly-delirium / mci / late-life-psychosis / elderly-personality:
    // no drug routes by design — the haloperidol, donepezil, antipsychotic
    // and refusal-rule tiers are gap-recorded
    const ed = getPsychiatryCourse("elderly-delirium")!;
    expect(ed.drugLinks.length).toBe(0);
    expect(ed.contentGaps.join(" ")).toContain("Haloperidol");
    const mc = getPsychiatryCourse("mci")!;
    expect(mc.drugLinks.length).toBe(0);
    expect(mc.contentGaps.join(" ")).toMatch(/[Dd]onepezil/);
    const llp = getPsychiatryCourse("late-life-psychosis")!;
    expect(llp.drugLinks.length).toBe(0);
    expect(llp.contentGaps.join(" ")).toContain("risperidone");
    const ep = getPsychiatryCourse("elderly-personality")!;
    expect(ep.drugLinks.length).toBe(0);
    // elderly-mood links the note's first-line SSRI pair + mirtazapine niche
    const em = getPsychiatryCourse("elderly-mood")!;
    expect(em.drugLinks.map((l: any) => l.slug).sort()).toEqual(["escitalopram", "mirtazapine", "sertraline"]);
    // elderly-anxiety-ocd links the SSRI pair; oxazepam gap-recorded
    const eao = getPsychiatryCourse("elderly-anxiety-ocd")!;
    expect(eao.drugLinks.map((l: any) => l.slug).sort()).toEqual(["escitalopram", "sertraline"]);
    expect(eao.contentGaps.join(" ")).toContain("Oxazepam");
    // elderly-suicide links the engine-treatment pair
    const es = getPsychiatryCourse("elderly-suicide")!;
    expect(es.drugLinks.map((l: any) => l.slug).sort()).toEqual(["escitalopram", "sertraline"]);
    // elderly-substance-use: naltrexone + the benzo class gap-recorded
    const esu = getPsychiatryCourse("elderly-substance-use")!;
    expect(esu.drugLinks.length).toBe(0);
    expect(esu.contentGaps.join(" ")).toContain("Naltrexone");
  });

  test("60. batch-10 exam-critical numbers and anchors recited in content", () => {
    const edBlob = JSON.stringify(getPsychiatryCourse("elderly-delirium")!);
    expect(edBlob).toContain("hypoactive"); // the missed subtype
    expect(edBlob).toContain("vulnerability"); // x insult framing
    expect(edBlob).toContain("haloperidol"); // with the 0.5 mg start
    expect(edBlob).toContain("0.5"); // the geriatric dose
    expect(edBlob).toContain("prevention bundle"); // the proactive craft
    const mcBlob = JSON.stringify(getPsychiatryCourse("mci")!);
    expect(mcBlob).toContain("10–15%"); // the yearly conversion
    expect(mcBlob).toContain("reversible"); // the honest workup
    expect(mcBlob).toContain("MoCA"); // the testing tier
    const esuBlob = JSON.stringify(getPsychiatryCourse("elderly-substance-use")!);
    expect(esuBlob).toContain("silent"); // the epidemic's shape
    expect(esuBlob).toContain("threshold"); // the lower-dose problem
    expect(esuBlob).toContain("23%"); // the setting ladder top
    expect(esuBlob).toContain("CIWA"); // the withdrawal protocol
    const llpBlob = JSON.stringify(getPsychiatryCourse("late-life-psychosis")!);
    expect(llpBlob).toContain("partition"); // the delusion theme
    expect(llpBlob).toContain("deafness"); // the sensory driver
    expect(llpBlob).toContain("very-late-onset"); // the after-60 subtype
    const emBlob = JSON.stringify(getPsychiatryCourse("elderly-mood")!);
    expect(emBlob).toContain("pseudodementia"); // the mask
    expect(emBlob).toContain("Start LOW, go SLOW, but GO"); // the dose law
    expect(emBlob).toContain("HY-FIB"); // the watch-list
    expect(emBlob).toContain("M-T-M-S-D"); // the mania workup
    expect(emBlob).toContain("ECT"); // the positioning
    const eaoBlob = JSON.stringify(getPsychiatryCourse("elderly-anxiety-ocd")!);
    expect(eaoBlob).toContain("general neurotic syndrome"); // the note's frame
    expect(eaoBlob).toContain("oxazepam"); // the benzo exception
    expect(eaoBlob).toContain("fear of falling"); // the elderly phobia
    expect(eaoBlob).toContain("after-50"); // the obsessional organic rule
    const epBlob = JSON.stringify(getPsychiatryCourse("elderly-personality")!);
    expect(epBlob).toContain("7–10%"); // the prevalence synthesis
    expect(epBlob).toContain("ECA"); // the decline data
    expect(epBlob).toContain("informant"); // the discipline
    const esBlob = JSON.stringify(getPsychiatryCourse("elderly-suicide")!);
    expect(esBlob).toContain("D-PBI-BA"); // the risk stack
    expect(esBlob).toContain("SETTLED"); // the warning signs
    expect(esBlob).toContain("lethality"); // the pattern
    expect(esBlob).toContain("means"); // the audit
    expect(esBlob).toContain("14416"); // Tele-MANAS
  });
});


describe("psychiatry — batch-11 content QA (Groups N+O, intellectual disability and forensic psychiatry)", () => {
  // Batch 11 migration (Groups N + O): the eight courses below must
  // uphold the established invariants — distinct structured case
  // Presentations, honest drug-gap recording, brain-region graph
  // anchoring — plus the group-specific checks: the supports-not-scores
  // definition of ID, the syndrome-by-syndrome psychiatry map, the
  // diagnostic-overshadowing discipline of dual diagnosis, the
  // life-course service architecture, the four-abilities capacity law,
  // the formulation-not-checklist offending discipline, the
  // destigmatising arithmetic of homicide, and the risk-overlap
  // principle with the preserved partial-source honesty.

  const BATCH11 = [
    "intellectual-disability-overview",
    "id-syndromes",
    "id-dual-diagnosis",
    "id-treatment-services",
    "mental-health-law",
    "psychiatry-offending",
    "homicide-infanticide",
    "juvenile-offending",
  ];

  test("61. batch-11 registry: all eight Group N+O courses present, published, keyed to canonical note slugs", () => {
    for (const slug of BATCH11) {
      const course = getPsychiatryCourse(slug)!;
      expect(course).toBeTruthy();
      expect(course.status).toBe("PUBLISHED");
      expect(["N", "O"]).toContain(course.groupLetter);
      expect(course.lessonGroups.length).toBe(6);
      expect(course.provenance.length).toBeGreaterThanOrEqual(10);
      expect(course.evidenceMap.length).toBeGreaterThanOrEqual(10);
    }
  });

  test("62. batch-11 clinical cases: distinct structured Presentation on all eight courses", () => {
    for (const slug of BATCH11) {
      const course = getPsychiatryCourse(slug)!;
      expect(course.clinicalCases?.length).toBe(2);
      for (const c of course.clinicalCases ?? []) {
        expect(c.initialPresentation).toBeTruthy();
        expect(c.initialPresentation).not.toBe(c.presentation);
        expect(c.initialPresentation!).not.toContain(c.presentation);
        expect(c.presentation).not.toContain(c.initialPresentation!);
        expect(c.initialPresentation!.length).toBeGreaterThan(80);
      }
    }
  });

  test("63. batch-11 drug links only to existing KYP drug lessons; gaps recorded honestly", async () => {
    const { getAllDrugSlugs } = await import("../src/lib/kyp/data");
    const built = new Set(getAllDrugSlugs());
    for (const slug of BATCH11) {
      const course = getPsychiatryCourse(slug)!;
      for (const link of course.drugLinks) {
        if (link.slug) {
          expect(built.has(link.slug)).toBe(true); // no invented routes
        }
      }
      // the whole group is honest-absence: no KYP drug lesson carries an
      // ID- or forensic-specific role — the comorbidity tiers are
      // cross-referenced to their own courses, never invented here
      expect(course.drugLinks.length).toBe(0);
      expect(course.contentGaps.length).toBeGreaterThanOrEqual(3);
    }
    const idd = getPsychiatryCourse("id-dual-diagnosis")!;
    expect(idd.contentGaps.join(" ")).toContain("risperidone"); // the caution tier, gap-recorded
    const idts = getPsychiatryCourse("id-treatment-services")!;
    expect(idts.contentGaps.join(" ")).toMatch(/[Nn]euroleptic/); // the drug-class audit
  });

  test("64. batch-11 exam-critical numbers and anchors recited in content", () => {
    const idoBlob = JSON.stringify(getPsychiatryCourse("intellectual-disability-overview")!);
    expect(idoBlob).toContain("IQ"); // with the threshold framing
    expect(idoBlob).toContain("adaptive"); // the real definition
    expect(idoBlob).toContain("RPwD"); // the Indian entitlements
    const idsBlob = JSON.stringify(getPsychiatryCourse("id-syndromes")!);
    expect(idsBlob).toContain("FMR1"); // fragile X genetics
    expect(idsBlob).toContain("MECP2"); // Rett genetics
    expect(idsBlob).toContain("hyperphagia"); // Prader-Willi signature
    expect(idsBlob).toContain("Woods lamp"); // TSC craft
    const iddBlob = JSON.stringify(getPsychiatryCourse("id-dual-diagnosis")!);
    expect(iddBlob).toContain("diagnostic overshadowing"); // the cardinal error
    expect(iddBlob).toContain("Antecedent-Behaviour-Consequence"); // the ABC lens
    expect(iddBlob).toContain("supported-decision-making"); // the consent model
    const idtsBlob = JSON.stringify(getPsychiatryCourse("id-treatment-services")!);
    expect(idtsBlob).toContain("transition cliff"); // the service gap
    expect(idtsBlob).toContain("double ageing"); // the demographic reality
    expect(idtsBlob).toContain("National Trust"); // the India legal layer
    const mhlBlob = JSON.stringify(getPsychiatryCourse("mental-health-law")!);
    expect(mhlBlob).toContain("four abilities"); // the capacity test
    expect(mhlBlob).toContain("best-interests"); // the checklist logic
    expect(mhlBlob).toContain("Bolam"); // negligence
    expect(mhlBlob).toContain("MHA 2017"); // the India lens
    const poBlob = JSON.stringify(getPsychiatryCourse("psychiatry-offending")!);
    expect(poBlob).toContain("Farrington"); // the cohort architecture
    expect(poBlob).toContain("2–4"); // the schizophrenia multiplier
    expect(poBlob).toContain("MAOA"); // the gene x maltreatment line
    expect(poBlob).toContain("NTORS"); // the treatment-outcome data
    expect(poBlob).toContain("formulation"); // the discipline
    const hiBlob = JSON.stringify(getPsychiatryCourse("homicide-infanticide")!);
    expect(hiBlob).toContain("neonaticide"); // the day-one concealment pattern
    expect(hiBlob).toContain("National Confidential"); // the data quartet
    expect(hiBlob).toContain("28%"); // predictable
    expect(hiBlob).toContain("65%"); // preventable
    expect(hiBlob).toContain("99.97%"); // the stigma answer
    const joBlob = JSON.stringify(getPsychiatryCourse("juvenile-offending")!);
    expect(joBlob).toContain("JJ Act"); // the India lens
    expect(joBlob).toContain("risk-overlap"); // the principle
    expect(joBlob).toContain("custody"); // the custody reality
    expect(joBlob).toContain("partial-source"); // the preserved honesty flag (case as in the course object)
  });
});


describe("psychiatry — batch-12 content QA (Group L part 1, child & adolescent psychiatry)", () => {
  // Batch 12 migration (Group L, first half): the seven courses below
  // must uphold the established invariants — distinct structured case
  // Presentations, honest drug-gap recording, brain-region graph
  // anchoring — plus the group-L-specific checks: the prevalence-mover
  // arithmetic and multi-informant discipline, the behavioural-
  // phenotype craft, the learning channels with the both-language
  // rule, the 18-month flags and ComDEAL/WHO-CST parent training of
  // the autism course, the brakes-and-engine metaphor with the
  // Schedule-X discipline, the empathy specifier with the case-manager
  // model, and the four school-refusal engines with the selective-
  // mutism ladder.

  const BATCH12 = [
    "child-assessment-epidemiology",
    "child-neuropsychiatry",
    "developmental-disorders",
    "autism",
    "adhd",
    "conduct-disorder",
    "child-anxiety",
  ];

  test("65. batch-12 registry: all seven Group L (part 1) courses present, published, keyed to canonical note slugs", () => {
    for (const slug of BATCH12) {
      const course = getPsychiatryCourse(slug)!;
      expect(course).toBeTruthy();
      expect(course.status).toBe("PUBLISHED");
      expect(course.groupLetter).toBe("L");
      expect(course.lessonGroups.length).toBe(6);
      expect(course.provenance.length).toBeGreaterThanOrEqual(10);
      expect(course.evidenceMap.length).toBeGreaterThanOrEqual(10);
    }
  });

  test("66. batch-12 clinical cases: distinct structured Presentation on all seven courses", () => {
    for (const slug of BATCH12) {
      const course = getPsychiatryCourse(slug)!;
      expect(course.clinicalCases?.length).toBe(2);
      for (const c of course.clinicalCases ?? []) {
        expect(c.initialPresentation).toBeTruthy();
        expect(c.initialPresentation).not.toBe(c.presentation);
        expect(c.initialPresentation!).not.toContain(c.presentation);
        expect(c.presentation).not.toContain(c.initialPresentation!);
        expect(c.initialPresentation!.length).toBeGreaterThan(80);
      }
    }
  });

  test("67. batch-12 drug links only to existing KYP drug lessons; gaps recorded honestly", async () => {
    const { getAllDrugSlugs } = await import("../src/lib/kyp/data");
    const built = new Set(getAllDrugSlugs());
    for (const slug of BATCH12) {
      const course = getPsychiatryCourse(slug)!;
      for (const link of course.drugLinks) {
        if (link.slug) {
          expect(built.has(link.slug)).toBe(true); // no invented routes
        }
      }
      // the whole batch is honest-absence: the child pharmacotherapy
      // tiers (stimulants, atomoxetine, the risperidone irritability
      // tier, the child SSRI tier) have no KYP lessons — cross-
      // referenced, never invented
      expect(course.drugLinks.length).toBe(0);
      expect(course.contentGaps.length).toBeGreaterThanOrEqual(3);
    }
    const adhdCourse = getPsychiatryCourse("adhd")!;
    expect(adhdCourse.contentGaps.join(" ")).toContain("methylphenidate");
    const autismCourse = getPsychiatryCourse("autism")!;
    expect(autismCourse.contentGaps.join(" ")).toContain("risperidone");
    const caCourse = getPsychiatryCourse("child-anxiety")!;
    expect(caCourse.contentGaps.join(" ")).toContain("SSRI");
  });

  test("68. batch-12 exam-critical numbers and anchors recited in content", () => {
    const caeBlob = JSON.stringify(getPsychiatryCourse("child-assessment-epidemiology")!);
    expect(caeBlob).toContain("9.5%"); // the UK survey prevalence
    expect(caeBlob).toContain("13.5%"); // the multi-informant arithmetic
    expect(caeBlob).toContain("multi-informant"); // the discipline
    const cnBlob = JSON.stringify(getPsychiatryCourse("child-neuropsychiatry")!);
    expect(cnBlob).toContain("behavioural phenotype"); // the frame
    expect(cnBlob).toContain("FASD"); // the teratology
    expect(cnBlob).toContain("pseudoseizure"); // the differentiation
    const ddBlob = JSON.stringify(getPsychiatryCourse("developmental-disorders")!);
    expect(ddBlob).toContain("RPwD"); // the entitlements
    expect(ddBlob).toContain("accommodation"); // the board provisions
    const auBlob = JSON.stringify(getPsychiatryCourse("autism")!);
    expect(auBlob).toContain("18-month"); // the red-flag age
    expect(auBlob).toContain("masking"); // the missed-girl story
    expect(auBlob).toContain("ComDEAL"); // the NIMHANS programme
    expect(auBlob).toContain("WHO CST"); // the caregiver training
    const adhdBlob = JSON.stringify(getPsychiatryCourse("adhd")!);
    expect(adhdBlob).toContain("brakes"); // the metaphor
    expect(adhdBlob).toContain("engine"); // the metaphor
    expect(adhdBlob).toContain("Schedule X"); // the India rule
    expect(adhdBlob).toContain("methylphenidate"); // the first-line tier
    expect(adhdBlob).toContain("adult ADHD"); // the lifespan frame
    const cdBlob = JSON.stringify(getPsychiatryCourse("conduct-disorder")!);
    expect(cdBlob).toContain("ODD"); // the ladder
    expect(cdBlob).toContain("prosocial"); // the specifier
    expect(cdBlob).toContain("JJ Act"); // the India interface
    expect(cdBlob).toContain("case-manager"); // the service model
    const canBlob = JSON.stringify(getPsychiatryCourse("child-anxiety")!);
    expect(canBlob).toContain("somatic"); // the carousel
    expect(canBlob).toContain("school refusal"); // the four engines
    expect(canBlob).toContain("selective mutism"); // the ladder
  });
});


describe("psychiatry — batch-13 content QA (Group L part 2, child & adolescent psychiatry)", () => {
  // Batch 13 migration (Group L, second half): the seven courses below
  // must uphold the established invariants — distinct structured case
  // Presentations, honest drug-gap recording, brain-region graph
  // anchoring — plus the group-L-specific checks: the irritability
  // costume and DMDD gate, the accommodation grid and PANDAS honesty,
  // the hyperactivity masquerade with the do-not-wake rule, the
  // safety-first card with means audit and postvention, the critical
  // age with the bilingual rules, the disclosure discipline with
  // POCSO, and the adversity-contexts architecture.

  const BATCH13 = [
    "paediatric-mood",
    "paediatric-ocd-tics",
    "child-sleep",
    "youth-suicide",
    "speech-language-disorders",
    "child-trauma-abuse",
    "child-adversity-contexts",
  ];

  test("69. batch-13 registry: all seven Group L (part 2) courses present, published, keyed to canonical note slugs", () => {
    for (const slug of BATCH13) {
      const course = getPsychiatryCourse(slug)!;
      expect(course).toBeTruthy();
      expect(course.status).toBe("PUBLISHED");
      expect(course.groupLetter).toBe("L");
      expect(course.lessonGroups.length).toBe(6);
      expect(course.provenance.length).toBeGreaterThanOrEqual(10);
      expect(course.evidenceMap.length).toBeGreaterThanOrEqual(10);
    }
  });

  test("70. batch-13 clinical cases: distinct structured Presentation on all seven courses", () => {
    for (const slug of BATCH13) {
      const course = getPsychiatryCourse(slug)!;
      expect(course.clinicalCases?.length).toBe(2);
      for (const c of course.clinicalCases ?? []) {
        expect(c.initialPresentation).toBeTruthy();
        expect(c.initialPresentation).not.toBe(c.presentation);
        expect(c.initialPresentation!).not.toContain(c.presentation);
        expect(c.presentation).not.toContain(c.initialPresentation!);
        expect(c.initialPresentation!.length).toBeGreaterThan(80);
      }
    }
  });

  test("71. batch-13 drug links only to existing KYP drug lessons; gaps recorded honestly", async () => {
    const { getAllDrugSlugs } = await import("../src/lib/kyp/data");
    const built = new Set(getAllDrugSlugs());
    for (const slug of BATCH13) {
      const course = getPsychiatryCourse(slug)!;
      for (const link of course.drugLinks) {
        if (link.slug) {
          expect(built.has(link.slug)).toBe(true); // no invented routes
        }
      }
    }
    const pm = getPsychiatryCourse("paediatric-mood")!;
    expect(pm.drugLinks.map((l: any) => l.slug).sort()).toEqual(["escitalopram", "fluoxetine", "mirtazapine", "sertraline"]);
    const pot = getPsychiatryCourse("paediatric-ocd-tics")!;
    expect(pot.drugLinks.map((l: any) => l.slug).sort()).toEqual(["clomipramine", "fluoxetine", "fluvoxamine", "sertraline"]);
    const ys = getPsychiatryCourse("youth-suicide")!;
    expect(ys.drugLinks.map((l: any) => l.slug)).toEqual(["fluoxetine"]);
    expect(ys.contentGaps.join(" ")).toContain("DBT-A"); // the missing tier, recorded
    const cs = getPsychiatryCourse("child-sleep")!;
    expect(cs.drugLinks.length).toBe(0);
    expect(cs.contentGaps.join(" ")).toContain("Melatonin");
  });

  test("72. batch-13 exam-critical numbers and anchors recited in content", () => {
    const pmBlob = JSON.stringify(getPsychiatryCourse("paediatric-mood")!);
    expect(pmBlob).toContain("DMDD"); // the gate
    expect(pmBlob).toContain("TADS"); // the trial tier
    expect(pmBlob).toContain("irritab"); // the costume
    const potBlob = JSON.stringify(getPsychiatryCourse("paediatric-ocd-tics")!);
    expect(potBlob).toContain("accommodation"); // the grid
    expect(potBlob).toContain("POTS"); // the trial
    expect(potBlob).toContain("CBIT"); // the tic treatment
    expect(potBlob).toContain("PANDAS"); // the honest position
    const csBlob = JSON.stringify(getPsychiatryCourse("child-sleep")!);
    expect(csBlob).toContain("20–30%"); // the prevalence
    expect(csBlob).toContain("DSPS"); // the delayed phase
    expect(csBlob).toContain("do not wake"); // the arousal rule
    const ysBlob = JSON.stringify(getPsychiatryCourse("youth-suicide")!);
    expect(ysBlob).toContain("means"); // the audit
    expect(ysBlob).toContain("NCRB"); // the data
    expect(ysBlob).toContain("s.115"); // the duty
    expect(ysBlob).toContain("postvention"); // the school response
    expect(ysBlob).toContain("safety plan"); // the card
    const slBlob = JSON.stringify(getPsychiatryCourse("speech-language-disorders")!);
    expect(slBlob).toContain("3–7%"); // the SLI prevalence
    expect(slBlob).toContain("critical age"); // the rule
    expect(slBlob).toContain("bilingual"); // the India rules
    const ctBlob = JSON.stringify(getPsychiatryCourse("child-trauma-abuse")!);
    expect(ctBlob).toContain("POCSO"); // the reporting duty
    expect(ctBlob).toContain("TF-CBT"); // the phases
    expect(ctBlob).toContain("disclosure"); // the discipline
    const caBlob = JSON.stringify(getPsychiatryCourse("child-adversity-contexts")!);
    expect(caBlob).toContain("six dimensions"); // adoption's framework
    expect(caBlob).toContain("four mechanisms"); // parental illness
    expect(caBlob).toContain("1 in 5"); // the referral figure
  });
});


describe("psychiatry — batch-14 content QA (Group P, treatment methods)", () => {
  // Batch 14 migration (Group P): the seven concept courses below must
  // uphold the established invariants — distinct structured case
  // Presentations, honest drug-gap recording, brain-region graph
  // anchoring — plus the group-P-specific checks: the procedural
  // unconscious and Malan's triangles, Yalom's paraphrased factors with
  // the storming wave, the ALI hierarchy with decentring, circular
  // causality with the honest EE arithmetic, the four Henderson
  // principles with the Erwadi lesson, the well-part-of-ego philosophy,
  // and the culturally-embedded-care discipline.

  const BATCH14 = [
    "dynamic-psychotherapy",
    "group-therapy",
    "couples-therapy",
    "family-therapy",
    "therapeutic-communities",
    "psychiatric-rehabilitation",
    "indigenous-healing",
  ];

  test("73. batch-14 registry: all seven Group P courses present, published, keyed to canonical note slugs", () => {
    for (const slug of BATCH14) {
      const course = getPsychiatryCourse(slug)!;
      expect(course).toBeTruthy();
      expect(course.status).toBe("PUBLISHED");
      expect(course.groupLetter).toBe("P");
      expect(course.kind).toBe("concept"); // the whole group is concept courses
      expect(course.lessonGroups.length).toBe(6);
      expect(course.provenance.length).toBeGreaterThanOrEqual(10);
      expect(course.evidenceMap.length).toBeGreaterThanOrEqual(10);
    }
  });

  test("74. batch-14 clinical cases: distinct structured Presentation on all seven courses", () => {
    for (const slug of BATCH14) {
      const course = getPsychiatryCourse(slug)!;
      expect(course.clinicalCases?.length).toBe(2);
      for (const c of course.clinicalCases ?? []) {
        expect(c.initialPresentation).toBeTruthy();
        expect(c.initialPresentation).not.toBe(c.presentation);
        expect(c.initialPresentation!).not.toContain(c.presentation);
        expect(c.presentation).not.toContain(c.initialPresentation!);
        expect(c.initialPresentation!.length).toBeGreaterThan(80);
      }
    }
  });

  test("75. batch-14 drug links only to existing KYP drug lessons; gaps recorded honestly", async () => {
    const { getAllDrugSlugs } = await import("../src/lib/kyp/data");
    const built = new Set(getAllDrugSlugs());
    for (const slug of BATCH14) {
      const course = getPsychiatryCourse(slug)!;
      for (const link of course.drugLinks) {
        if (link.slug) {
          expect(built.has(link.slug)).toBe(true); // no invented routes
        }
      }
      // the whole group is honest-absence: psychotherapy is not a
      // tablet — the comorbidity tiers belong to their own courses
      expect(course.drugLinks.length).toBe(0);
      expect(course.contentGaps.length).toBeGreaterThanOrEqual(3);
    }
  });

  test("76. batch-14 exam-critical anchors recited in content", () => {
    const dpBlob = JSON.stringify(getPsychiatryCourse("dynamic-psychotherapy")!);
    expect(dpBlob).toContain("triangle of conflict"); // Malan one
    expect(dpBlob).toContain("triangle of person"); // Malan two
    expect(dpBlob).toContain("Bose"); // the Indian story
    expect(dpBlob).toContain("working through"); // the craft
    const gtBlob = JSON.stringify(getPsychiatryCourse("group-therapy")!);
    expect(gtBlob).toContain("curative factors"); // Yalom, paraphrased
    expect(gtBlob).toContain("storming"); // the wave
    expect(gtBlob).toContain("selection"); // the discipline
    const ctBlob = JSON.stringify(getPsychiatryCourse("couples-therapy")!);
    expect(ctBlob).toContain("four schools"); // the map
    expect(ctBlob).toContain("ALI"); // the hierarchy
    expect(ctBlob).toContain("decentre"); // the craft
    expect(ctBlob).toContain("Leff"); // the trial
    const ftBlob = JSON.stringify(getPsychiatryCourse("family-therapy")!);
    expect(ftBlob).toContain("circular causality"); // the paradigm
    expect(ftBlob).toContain("expressed emotion"); // the arithmetic
    expect(ftBlob).toContain("NIMHANS"); // the Indian family ward
    expect(ftBlob).toContain("four-rung"); // the ladder
    const tcBlob = JSON.stringify(getPsychiatryCourse("therapeutic-communities")!);
    expect(tcBlob).toContain("Henderson"); // the principles
    expect(tcBlob).toContain("Geel"); // the history
    expect(tcBlob).toContain("Lees"); // the meta-analysis
    expect(tcBlob).toContain("Erwadi"); // the Indian lesson
    const prBlob = JSON.stringify(getPsychiatryCourse("psychiatric-rehabilitation")!);
    expect(prBlob).toContain("ICF"); // the frame
    expect(prBlob).toContain("supported employment"); // the practice
    expect(prBlob).toContain("well part of the ego"); // the philosophy
    const ihBlob = JSON.stringify(getPsychiatryCourse("indigenous-healing")!);
    expect(ihBlob).toContain("zar"); // the dissociation distinction
    expect(ihBlob).toContain("Rumpelstiltskin"); // the naming principle
    expect(ihBlob).toContain("common factors"); // the mechanism
  });
});

describe("psychiatry — post-migration layer consistency (2026-09-30 audit)", () => {
  test("77. library shows the course-layer type for the 8 reclassified concept courses", async () => {
    // Treatment/services/law notes built on the 16-section disorder
    // template are taught as Concept courses; the library must agree
    // with the course hero (single learner-facing classification).
    const { loadCorpus } = await import("../src/lib/oxford/loader");
    const corpus = loadCorpus();
    const reclassified = [
      "dementia-management", "substance-use-overview",
      "personality-disorder-treatment", "id-treatment-services",
      "mental-health-law", "psychiatry-offending",
      "homicide-infanticide", "juvenile-offending",
    ];
    for (const slug of reclassified) {
      const course = getPsychiatryCourse(slug);
      expect(course?.kind).toBe("concept");
      const note = corpus.bySlug.get(slug);
      expect(note?.kind).toBe("disorder"); // structural layer untouched
    }
    // Registry-wide: course layer = 74 disorder / 35 concept
    const courses = reclassified.map((s) => getPsychiatryCourse(s)!);
    expect(courses.length).toBe(8);
    const all = corpus.notes.map((n) => getPsychiatryCourse(n.frontmatter.slug)?.kind);
    expect(all.filter((k) => k === "disorder").length).toBe(74);
    expect(all.filter((k) => k === "concept").length).toBe(35);
  });

  test("78. library rows use the honest self-test label and min-read duration", async () => {
    const { html } = await get("/psychiatry/library");
    expect(html).toContain("Self-test questions");
    expect(html).toContain("min read");
    // The pre-resolution ambiguous label must be gone.
    expect(html.includes("Count (unlabelled in source)")).toBe(false);
  });

  test("79. lesson metadata uses the normalized course title (no em-dash source taglines)", async () => {
    // A reclassified long-title exemplar: the note frontmatter title is
    // "Mental Health Law — Capacity, Responsibility and the State's Duty"
    // but the learner-facing <title> is the normalized course title.
    const ml = await get("/psychiatry/mental-health-law");
    expect(ml.status).toBe(200);
    const title = ml.html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
    expect(title).toContain("Mental Health Law");
    expect(title).toContain("KYP Psychiatry");
    expect(title.includes("Capacity, Responsibility")).toBe(false);
    const dm = await get("/psychiatry/dementia-management");
    const dmTitle = dm.html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
    expect(dmTitle).toContain("Managing Dementia");
    expect(dmTitle.includes("practical umbrella note")).toBe(false);
  });

  test("80. self-test question titles use the normalized course layer", async () => {
    const { html } = await get("/psychiatry/self-test");
    expect(html).toContain("Mental Health Law"); // normalized title present
    expect(html.includes("Capacity, Responsibility and the State")).toBe(false);
  });

  test("81. every course page ends with the curriculum continuation block", async () => {
    // Spot: a mid-curriculum course shows prev+next; the first course
    // (Q1, foundations first) links back to the library; the last course
    // ends at the self-test.
    const mid = await get("/psychiatry/schizophrenia");
    expect(mid.html).toContain('id="next-course"');
    expect(mid.html).toContain("Next lesson");
    const first = await get("/psychiatry/neurotransmitters");
    expect(first.html).toContain("Back to the Library");
    const last = await get("/psychiatry/voluntary-sector");
    expect(last.html).toContain("Curriculum complete");
  });

  test("82. /learn dashboard includes the psychiatry pathway with real counts", async () => {
    const { status, html } = await get("/learn");
    expect(status).toBe(200);
    expect(html).toContain("Psychiatry");
    expect(html).toContain("109"); // lessons — from generated psychiatryStats
  });

  test("83. search records: course-layer identity + honest counts", async () => {
    const { psychiatrySearchRecords, psychiatryStats } =
      await import("../src/lib/kyp/data/psychiatry-search-records.generated");
    expect(psychiatryStats.lessons).toBe(109);
    expect(psychiatryStats.domains).toBe(18);
    expect(psychiatryStats.questions).toBe(719);
    expect(psychiatryStats.disorderCourses).toBe(74);
    expect(psychiatryStats.conceptLessons).toBe(35);
    const library = psychiatrySearchRecords.find((r) => r.id === "psychiatry-library");
    expect(library?.description).toContain("74 disorder courses");
    expect(library?.description).toContain("35 concept lessons");
    const ml = psychiatrySearchRecords.find((r) => r.id === "psychiatry-mental-health-law");
    expect(ml?.title).toBe("Mental Health Law");
    expect(ml?.description).toContain("min read");
    // No record carries a stale note-layer title for the reclassified set
    for (const slug of ["dementia-management", "homicide-infanticide"]) {
      const rec = psychiatrySearchRecords.find((r) => r.id === `psychiatry-${slug}`);
      expect(rec?.description.includes("MCQs")).toBe(false);
    }
  });

  test("84. curriculum order: single learner-facing authority (Q first, tier-stable)", async () => {
    const { curriculumOrderSlugs } = await import("../src/lib/oxford/curriculum");
    const order = curriculumOrderSlugs();
    expect(order.length).toBe(109);
    expect(order[0]).toBe("neurotransmitters"); // Q1 — Foundations first
    // Adjacency for a known course resolves to real neighbours
    const { adjacentCurriculum } = await import("../src/lib/oxford/curriculum");
    const { prev, next } = adjacentCurriculum("schizophrenia");
    expect(prev).toBeTruthy();
    expect(next).toBeTruthy();
    expect(order.indexOf(prev!)).toBe(order.indexOf("schizophrenia") - 1);
    expect(order.indexOf(next!)).toBe(order.indexOf("schizophrenia") + 1);
  });

  test("85. library per-course totals derive from the course outline registry", async () => {
    const { getCourseRenderedSectionIds, courseNavItems } =
      await import("../src/lib/kyp/psychiatry-course-sections");
    for (const slug of ["schizophrenia", "neurotransmitters", "mental-health-law"]) {
      const course = getPsychiatryCourse(slug)!;
      const rendered = getCourseRenderedSectionIds(course);
      const nav = courseNavItems(rendered);
      // The library total is the tracked-outline count: nav items minus
      // the hero anchor (the exact completionIds contract of the course
      // view — "epidemiology-band" is a render marker, not a nav id).
      const total = nav.filter((i) => i.id !== "top").length;
      expect(total).toBeGreaterThan(10);
      // every completion id is a real rendered section
      for (const item of nav.filter((i) => i.id !== "top")) {
        expect(rendered.has(item.id)).toBe(true);
      }
    }
  });

  test("86. D-1: universal search returns AND renders Psychiatry results", async () => {
    const { searchUniversal } = await import("../src/lib/kyp/search");
    const { searchIndex } = await import("../src/lib/kyp/data/search-index");
    const { searchTypeLabels } = await import("../src/lib/kyp/data/search-index");
    const { SEARCH_RESULT_GROUPS } = await import("../src/lib/kyp/search-groups");

    // (a) Exact title search reaches the course route.
    const exact = searchUniversal(searchIndex, "schizophrenia").items;
    const course = exact.find(
      (r) => r.type === "psychiatry-note" && r.href === "/psychiatry/schizophrenia"
    );
    expect(course).toBeDefined();
    expect(course!.title).toBe("Schizophrenia");

    // (b) Partial title search still returns it.
    const partial = searchUniversal(searchIndex, "schizo").items;
    expect(
      partial.some((r) => r.type === "psychiatry-note" && r.href === "/psychiatry/schizophrenia")
    ).toBe(true);

    // (c) A concept course is reachable the same way.
    const concept = searchUniversal(searchIndex, "neurotransmitters").items;
    expect(
      concept.some((r) => r.type === "psychiatry-note" && r.href === "/psychiatry/neurotransmitters")
    ).toBe(true);

    // (d) THE D-1 REGRESSION GUARD: every result type the engine can
    // return belongs to exactly one rendered group — a type with no
    // group is invisible in the query results UI.
    const groupedTypes = SEARCH_RESULT_GROUPS.flatMap((g) => g.types);
    const allTypes = Object.keys(searchTypeLabels);
    for (const type of allTypes) {
      expect(groupedTypes.filter((t) => t === type)).toHaveLength(1);
    }
    // …and the groups carry no unknown types.
    for (const type of groupedTypes) {
      expect(allTypes).toContain(type);
    }
  });

  test("87. D-2: ONE progress denominator — course view ≡ library ≡ completable sections", async () => {
    const { getCourseRenderedSectionIds, courseNavItems } =
      await import("../src/lib/kyp/psychiatry-course-sections");

    // GAD is the QA-observed defect case (course page showed 3/24,
    // library 3/23); representative disorder + concept + P3 coverage.
    for (const slug of ["gad", "schizophrenia", "neurotransmitters"]) {
      const course = getPsychiatryCourse(slug)!;
      const rendered = getCourseRenderedSectionIds(course);
      const nav = courseNavItems(rendered);

      // Library denominator (library/page.tsx): tracked outline minus
      // the hero "top" anchor.
      const libraryTotal = nav.filter((i) => i.id !== "top").length;

      // Course-view denominator (what StickyLearningNav + ResumeBanner
      // receive as their items after D-2): the SAME list —
      // courseNavItems(rendered) minus "top" — so the two surfaces can
      // never disagree again.
      const courseItems = nav.filter((item) => item.id !== "top");
      expect(courseItems.length).toBe(libraryTotal);

      // The completion contract the read tracker syncs against is
      // exactly these ids.
      const completionIds = courseItems.map((item) => item.id);
      expect(completionIds).not.toContain("top");
      for (const id of completionIds) {
        expect(rendered.has(id)).toBe(true);
      }

      // The hero anchor stays in the observed outline for position/
      // resume tracking (the tracker keeps the full navItems).
      expect(nav.some((item) => item.id === "top")).toBe(true);
    }

    // Pin the exact QA case: GAD's canonical denominator is 23 (was
    // displayed as 24 on the course page before the fix).
    const gad = getPsychiatryCourse("gad")!;
    expect(
      courseNavItems(getCourseRenderedSectionIds(gad)).filter((i) => i.id !== "top").length
    ).toBe(23);
  });
});

describe("psychiatry — final-closure QA (D-3/D-4/D-5 + Study Mode, 2026-10-01)", () => {
  test("88. D-5: every learner-facing NMHS claim carries the NMHS learner reference", () => {
    // The D-5 defect: NMHS India statistics are re-researched claims with
    // course-level provenance, but 14 courses cited them in learner-facing
    // content while the "Sources — clean and checkable" section omitted
    // the survey (its header promises every claim maps to these sources).
    // Data-level audit: any NMHS mention outside the internal provenance
    // array must be matched by an NMHS entry in the learner references.
    let audited = 0;
    for (const course of psychiatryCourses) {
      const { provenance: _prov, references, ...learnerContent } = course;
      const content = JSON.stringify(learnerContent);
      if (/NMHS/.test(content)) {
        audited += 1;
        const refs = JSON.stringify(references);
        expect(refs).toMatch(/National Mental Health Survey|NMHS/);
      }
    }
    // The fix covered 14 courses; pin that the audit still sees them.
    expect(audited).toBeGreaterThanOrEqual(14);
  });

  test("89. Study Mode catalog resolves both course kinds honestly (totals + routes)", async () => {
    const { studyCourseTotal, studyCourseBase, continueHref } = await import(
      "../src/lib/kyp/study/course-catalog"
    );
    // Psychiatry: the D-2 canonical denominator + the real route.
    expect(studyCourseTotal("gad")).toBe(23);
    expect(studyCourseBase("gad")).toBe("/psychiatry/gad");
    expect(studyCourseTotal("neurotransmitters")).toBe(19);
    // Drug: the 26-section contract + the drug route (unchanged).
    expect(studyCourseTotal("sertraline")).toBe(26);
    expect(studyCourseBase("sertraline")).toBe("/drugs/sertraline");
    // Resume links keep the saved anchor on both kinds.
    const psychResume = { slug: "gad", currentSectionId: "symptoms", completedSections: ["quick-facts"] } as never;
    expect(continueHref(psychResume)).toBe("/psychiatry/gad#symptoms");
    const drugResume = { slug: "sertraline", currentSectionId: "overview", completedSections: ["overview"] } as never;
    expect(continueHref(drugResume)).toBe("/drugs/sertraline#overview");
  });

  test("90. generated study-totals map is fresh (matches the canonical registry computation)", async () => {
    const { PSYCHIATRY_COURSE_TOTALS } = await import(
      "../src/lib/kyp/study/psychiatry-course-meta.generated"
    );
    const { getCourseRenderedSectionIds, courseNavItems } = await import(
      "../src/lib/kyp/psychiatry-course-sections"
    );
    expect(Object.keys(PSYCHIATRY_COURSE_TOTALS).length).toBe(109);
    for (const course of psychiatryCourses) {
      const canonical = courseNavItems(getCourseRenderedSectionIds(course)).filter(
        (i) => i.id !== "top"
      ).length;
      expect(PSYCHIATRY_COURSE_TOTALS[course.slug]).toBe(canonical);
    }
  });

  test("91. D-3/D-4: Escape closes the mobile navbar menu and the section-navigator sheet", () => {
    // Source-contract tests (same style as study-ia.test.ts): pin the
    // mechanism, not just the word "Escape" (which lives in comments too).
    const read = (rel: string) =>
      readFileSync(join(process.cwd(), rel), "utf8");

    // D-3 — main Navbar: listener gated on `open`, guarded against
    // already-handled Radix dismissals, focus returns to the toggle.
    const navbar = read("src/components/kyp/sections/navbar.tsx");
    expect(navbar).toContain('if (e.key !== "Escape" || e.defaultPrevented) return;');
    expect(navbar).toContain("menuButtonRef.current?.focus();");
    expect(navbar).toContain('aria-controls="mobile-nav-menu"');

    // D-3 — the /enter page's navbar shares the same contract.
    const enterNavbar = read("src/components/kyp/enter/enter-navbar.tsx");
    expect(enterNavbar).toContain('if (e.key !== "Escape" || e.defaultPrevented) return;');
    expect(enterNavbar).toContain("menuButtonRef.current?.focus();");

    // D-4 — the psychiatry/drug Section Navigator sheet: dialog
    // semantics + scroll lock + Escape + focus restoration (mirrors the
    // drug lesson's MobileLessonNav contract).
    const sheet = read("src/components/kyp/ui/sticky-learning-nav.tsx");
    expect(sheet).toContain('role="dialog"');
    expect(sheet).toContain('aria-modal="true"');
    expect(sheet).toContain('aria-label="Section navigator"');
    expect(sheet).toContain('document.body.style.overflow = "hidden"');
    expect(sheet).toContain('if (e.key !== "Escape" || e.defaultPrevented) return;');
    expect(sheet).toContain("e.preventDefault();");
    expect(sheet).toContain("openButtonRef.current?.focus();");
    expect(sheet).toContain('aria-controls="section-navigator-sheet"');
  });

  test("92. ⌘K opens ONE search modal (no stacked duplicates across triggers)", () => {
    // Pre-existing defect found during the closure Escape audit: the
    // navbar's button-variant FloatingSearch AND the page's floating
    // variant both mount on most pages, and both listened for ⌘K —
    // one keypress opened TWO stacked identical modals, so the first
    // Escape only dismissed the hidden duplicate. The
    // stopImmediatePropagation guard makes the keypress open exactly
    // one modal (whichever trigger registered first).
    const read = (rel: string) =>
      readFileSync(join(process.cwd(), rel), "utf8");
    const src = read("src/components/kyp/ui/floating-search.tsx");
    expect(src).toContain("e.stopImmediatePropagation();");
    // The guard must sit inside the ⌘K branch (not a blanket swallow).
    expect(src).toMatch(
      /if \(\(e\.metaKey \|\| e\.ctrlKey\) && e\.key\.toLowerCase\(\) === "k"\) \{\s*\n\s*e\.preventDefault\(\);\s*\n\s*e\.stopImmediatePropagation\(\);/
    );
  });
});
