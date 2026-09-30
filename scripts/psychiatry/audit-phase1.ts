/**
 * KYP Psychiatry — Phase 1 Curriculum Integrity Audit
 *
 * Programmatic audit of all 109 registered courses across the
 * mission's Phase 1 dimensions. Read-only: imports the registry,
 * validates metadata + structure, cross-checks against the source
 * corpus, and emits a classified issue report (A/B/C/D).
 *
 * Usage: bun scripts/psychiatry/audit-phase1.ts
 */
import { psychiatryCourses } from "../../src/lib/kyp/data/psychiatry-courses";
import { loadCorpus, corpusStats } from "../../src/lib/oxford/loader";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

/* ---------------- helpers ---------------- */

const WC = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);
const SENTENCES = (s: string) =>
  s.split(/(?<=[.!?])\s+/).map((x) => x.trim()).filter(Boolean);

type Severity = "A" | "B" | "C" | "D";
const issues: { sev: Severity; area: string; course: string; detail: string }[] = [];
const stats: Record<string, number> = {};
const bump = (k: string) => (stats[k] = (stats[k] ?? 0) + 1);
const add = (sev: Severity, area: string, slug: string, detail: string) => {
  issues.push({ sev, area, course: slug, detail });
  bump(`issue-${sev}`);
};

/* drug lesson routes that exist (for drugLinks validation) */
const drugSlugs = new Set<string>();
for (const f of readdirSync(resolve(__dirname, "../../src/lib/kyp/data/drugs"))) {
  if (f.endsWith(".ts") && f !== "index.ts") drugSlugs.add(f.replace(/\.ts$/, ""));
}

/* ---------------- corpus cross-check ---------------- */

const corpus = loadCorpus();
const cstats = corpusStats();
console.log(`Corpus: ${cstats.noteCount} notes, ${cstats.groupCount} groups, ${cstats.mcqCount} MCQs`);
console.log(`Registry: ${psychiatryCourses.length} courses`);

// census: missing / duplicate
const slugs = psychiatryCourses.map((c) => c.slug);
const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
if (dupes.length) add("A", "census", "*", `duplicate slugs: ${dupes.join(", ")}`);
const missing = [...corpus.bySlug.keys()].filter((s) => !slugs.includes(s));
if (missing.length) add("A", "census", "*", `notes without a course: ${missing.join(", ")}`);
if (psychiatryCourses.length !== cstats.noteCount)
  add("A", "census", "*", `registry ${psychiatryCourses.length} != corpus ${cstats.noteCount}`);

/* ---------------- per-course audit ---------------- */

const courseSlugs = new Set(psychiatryCourses.map((c) => c.slug));

for (const c of psychiatryCourses) {
  const note = corpus.bySlug.get(c.slug);

  /* --- metadata rules (normalization model) --- */
  if (c.title.length > 60) add("A", "title", c.slug, `title ${c.title.length} chars > 60`);
  if (c.tagline && c.tagline.length > 90)
    add("A", "tagline", c.slug, `tagline ${c.tagline.length} chars > 90`);
  const summaryWords = WC(c.summary);
  if (summaryWords > 45) add("A", "summary", c.slug, `summary ${summaryWords} words > 45`);
  const longSentence = SENTENCES(c.summary).find((s) => WC(s) > 30);
  if (longSentence) add("B", "summary", c.slug, `sentence > 30 words`);
  if (SENTENCES(c.summary).length > 2) add("B", "summary", c.slug, `> 2 sentences`);

  /* --- type consistency --- */
  if (note && note.kind !== c.kind)
    add("A", "type-mismatch", c.slug, `note kind=${note.kind} course kind=${c.kind}`);

  /* --- group consistency --- */
  if (!/^[A-R]$/.test(c.groupLetter)) add("A", "group", c.slug, `bad group letter ${c.groupLetter}`);

  /* --- journey vs note duration (duality record) --- */
  if (note) {
    const m = c.estimatedReadTime.match(/(\d+)/);
    if (m) {
      const courseMin = parseInt(m[1], 10);
      bump(`journey-${courseMin <= 30 ? "short" : courseMin <= 45 ? "medium" : "long"}`);
      if (courseMin < note.readingMinutes)
        add("C", "duration", c.slug, `journey ${courseMin}min < note reading ${note.readingMinutes}min (duality)`);
    }
  }

  /* --- structure: six lesson groups --- */
  if (c.lessonGroups.length === 0) {
    add("A", "lessons", c.slug, "no lesson groups");
  } else {
    const nums = c.lessonGroups.map((l) => l.number);
    const expect = [1, 2, 3, 4, 5, 6];
    if (JSON.stringify(nums) !== JSON.stringify(expect))
      add("B", "lessons", c.slug, `lesson numbers ${nums.join(",")} != 1..6`);
    for (const l of c.lessonGroups) {
      if (!l.title || !l.checkpoint) add("B", "lessons", c.slug, `lesson ${l.number} missing title/checkpoint`);
    }
  }

  /* --- learning objectives --- */
  if (c.learningObjectives.length < 3)
    add("B", "objectives", c.slug, `only ${c.learningObjectives.length} objectives`);

  /* --- knowledge graph --- */
  if (c.knowledgeGraph.length === 0) add("B", "kgraph", c.slug, "empty knowledge graph");
  for (const n of c.knowledgeGraph) {
    if (!n.label) add("B", "kgraph", c.slug, `node missing label`);
    if (!n.href) add("C", "kgraph", c.slug, `node "${n.label}" missing href`);
    else if (n.href.startsWith("/psychiatry/")) {
      const target = n.href.replace(/^\/psychiatry\//, "").replace(/\/$/, "");
      if (!courseSlugs.has(target))
        add("A", "kgraph", c.slug, `node "${n.label}" links to unregistered course: ${n.href}`);
    } else if (n.href.startsWith("#")) {
      bump("kgraph-anchor");
    } else if (n.href.startsWith("/drugs/")) {
      const target = n.href.replace(/^\/drugs\//, "").replace(/\/$/, "");
      if (!drugSlugs.has(target))
        add("A", "kgraph", c.slug, `node "${n.label}" links to non-existent drug: ${n.href}`);
    } else {
      add("C", "kgraph", c.slug, `node "${n.label}" unusual href: ${n.href}`);
    }
  }

  /* --- evidence / provenance --- */
  if (c.provenance.length < 3)
    add("B", "provenance", c.slug, `only ${c.provenance.length} provenance records`);
  if (c.evidenceMap.length < 3)
    add("B", "evidence", c.slug, `only ${c.evidenceMap.length} graded facts`);
  const provIds = new Set(c.provenance.map((p) => p.id));
  for (const f of c.evidenceMap) {
    for (const s of f.sources) {
      if (!provIds.has(s)) add("A", "evidence", c.slug, `evidenceMap source ${s} not in provenance`);
    }
    if (!f.text || !f.grade) add("B", "evidence", c.slug, "graded fact missing text/grade");
  }
  if (c.status !== "PUBLISHED") add("A", "status", c.slug, `status ${c.status} != PUBLISHED`);

  /* --- India lens --- */
  const ip = c.indianPractice;
  if (
    !ip.indianGuidelines || !ip.systemContext || !ip.programmeContext ||
    !ip.costConsiderations || !ip.culturalConsiderations || ip.patientCounselling.length === 0
  )
    add("B", "india", c.slug, "incomplete indianPractice fields");

  /* --- exam lens + cases + recall (type-aware) --- */
  if (!c.examLens) add("B", "exam-lens", c.slug, "missing examLens");
  if (c.kind === "disorder") {
    if (!c.clinicalCases || c.clinicalCases.length === 0)
      add("B", "cases", c.slug, "disorder course without clinical cases");
    if (!c.symptomClusters?.length) add("B", "clinical", c.slug, "disorder without symptom clusters");
    if (!c.diagnosticCriteria?.length) add("B", "clinical", c.slug, "disorder without diagnostic criteria");
    if (!c.differentialDiagnosis?.length) add("B", "clinical", c.slug, "disorder without differential");
    if (!c.management?.length) add("B", "clinical", c.slug, "disorder without management");
    if (!c.epidemiology) add("B", "clinical", c.slug, "disorder without epidemiology");
  } else {
    bump("concept-optional-ok");
  }
  if (c.activeRecallQuestions.length === 0) add("B", "recall", c.slug, "no active recall questions");
  if (c.microQuizzes.length === 0) add("B", "recall", c.slug, "no micro quizzes");
  if (c.faqs.length === 0) add("B", "faq", c.slug, "no FAQs");
  if (c.highYieldSummary.length === 0) add("B", "highyield", c.slug, "no high-yield summary");

  /* --- drug links honesty --- */
  for (const dl of c.drugLinks) {
    const target = (dl as { slug?: string; drugSlug?: string }).slug ??
      (dl as { drugSlug?: string }).drugSlug ?? "";
    if (target && !drugSlugs.has(target))
      add("A", "drug-links", c.slug, `drugLink to non-existent lesson: ${target}`);
  }

  /* --- MCQ parity with source note --- */
  if (note && note.mcqs.length > 0 && c.microQuizzes.length === 0)
    add("B", "mcq", c.slug, `note has ${note.mcqs.length} MCQs, course has no micro quizzes`);

  /* --- breadcrumb / learningPath --- */
  if (!c.learningPath || c.learningPath.length < 2)
    add("B", "nav", c.slug, "learningPath breadcrumb < 2 segments");
}

/* ---------------- registry-level structure ---------------- */

const groupLetters = [...new Set(psychiatryCourses.map((c) => c.groupLetter))];
console.log(`Groups present: ${groupLetters.sort().join(",")}`);

/* ---------------- report ---------------- */

console.log("\n================ AUDIT REPORT ================");
console.log(`Courses audited: ${psychiatryCourses.length}`);
const sevOrder: Severity[] = ["A", "B", "C", "D"];
for (const sev of sevOrder) {
  const rows = issues.filter((i) => i.sev === sev);
  if (!rows.length) continue;
  console.log(`\n--- ${sev} (${rows.length}) ---`);
  const byArea: Record<string, typeof rows> = {};
  for (const r of rows) (byArea[r.area] ??= []).push(r);
  for (const [area, list] of Object.entries(byArea).sort((a, b) => b[1].length - a[1].length)) {
    console.log(`  [${area}] ${list.length}: ${list.slice(0, 6).map((r) => `${r.course} (${r.detail})`).join(" | ")}${list.length > 6 ? " …" : ""}`);
  }
}
console.log("\nStats:", JSON.stringify(stats));
console.log(`\nTOTAL: A=${issues.filter((i) => i.sev === "A").length} B=${issues.filter((i) => i.sev === "B").length} C=${issues.filter((i) => i.sev === "C").length} D=${issues.filter((i) => i.sev === "D").length}`);
