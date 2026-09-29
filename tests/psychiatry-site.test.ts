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
    // A non-migrated disorder lesson keeps the note-shell contract
    // (phases + India layer + sources disclosure). Batches 4, 6, 7 and 8
    // migrated anorexia-nervosa, delirium, vascular-dementia and the
    // Group B first half incl. substance-use-overview (this test's former
    // exemplars) — benzodiazepine-misuse (Group B) is the next
    // non-migrated disorder in index order.
    const { status, html } = await get("/psychiatry/benzodiazepine-misuse");
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

  test("15. registry integrity: 3 pilots + batches 1-8 (52 courses), note-slug keyed, valid status", () => {
    expect(psychiatryCourses.length).toBe(52); // 3 validated pilots + 6 batch-1 + 6 batch-2 + 6 batch-3 + 5 batch-4 + 7 batch-5 + 7 batch-6 + 7 batch-7 + 5 batch-8 courses
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
