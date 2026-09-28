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

  test("4b. non-migrated lessons still render the finalized note shell", async () => {
    // A non-pilot disorder lesson keeps the note-shell contract
    // (phases + India layer + sources disclosure).
    const { status, html } = await get("/psychiatry/gad");
    expect(status).toBe(200);
    expect(html).toContain("Understand");
    expect(html).toContain("India in Practice");
    expect(html).toContain("Sources &amp; References");
  });

  test("5. concept lesson (couples-therapy) serves 200", async () => {
    const { status, html } = await get("/psychiatry/couples-therapy");
    expect(status).toBe(200);
    expect(html).toContain("Couples");
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
    expect(searchIndex.length).toBe(164);
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

  test("15. registry integrity: 3 pilots + batch 1 + batch 2 (15 courses), note-slug keyed, valid status", () => {
    expect(psychiatryCourses.length).toBe(15); // 3 validated pilots + 6 batch-1 + 6 batch-2 courses
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
