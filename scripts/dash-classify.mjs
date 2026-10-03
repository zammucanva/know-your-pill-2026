#!/usr/bin/env node
/**
 * KYP dash classification — Phase 2 (A–G buckets) + Phase 3 tags.
 *
 * Classifies every LEARNER-FACING em-dash occurrence into:
 *   A  clearly excessive editorial          → rewrite (Phase 4)
 *   B  repeated template prose (≥3 copies) → fix once per template (Phase 4)
 *   C  legitimate medical/scientific usage  → preserve
 *   D  numeric range                        → preserve
 *   E  source/citation title                → preserve
 *   F  empty/UI placeholder ("—")          → preserve
 *   G  needs human/clinical review          → leave unchanged, flag
 *
 * Derived/generated files are tagged `derived` (regenerate, never hand-edit)
 * and are NOT part of the A–G hand-edit surface.
 *
 * Learner-facing universe = rendered strings + JSX text in census
 * categories 01–13, excluding MCQ-protected spans/files, canonical
 * notes, dev comments, and category 14 (reports/docs/tests/scripts).
 *
 * Usage: node scripts/dash-classify.mjs
 * Output: reports/dash-classification-data.json + console summary
 */

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

const EM = "\u2014";
const EN = "\u2013";

const TEXT_EXT = new Set([
  ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".json",
  ".md", ".mdx", ".txt", ".html", ".css", ".yml", ".yaml",
  ".svg", ".xml", ".csv",
]);

/* ---------------- category mapping (same as census) ---------------- */

function categorize(p) {
  if (p.startsWith("download/kyp-notes/")) return { cat: "excluded-canonical-notes", excluded: true };
  if (p.startsWith("download/")) return { cat: "excluded-download", excluded: true };
  if (p.startsWith("tool-results/")) return { cat: "excluded-tool-results", excluded: true };
  if (p.startsWith("upload/")) return { cat: "excluded-upload", excluded: true };
  if (p.startsWith("data/mcq/")) return { cat: "protected-mcq-bank", mcq: true };
  if (p.startsWith("src/lib/kyp/stahl-mcqs/")) return { cat: "protected-mcq-bank", mcq: true };

  if (p === "src/app/page.tsx") return { cat: "01-homepage" };
  if (p === "src/app/layout.tsx" || p === "src/app/globals.css") return { cat: "10-navigation-ui" };
  if (p.startsWith("src/app/medicine/")) return { cat: "02-medicine-library" };
  if (p.startsWith("src/app/drugs/class/") || p === "src/lib/kyp/data/classes.ts" ||
      p === "src/lib/kyp/data/drug-taxonomy.ts" || p === "src/lib/kyp/data/class-id.ts" ||
      p.startsWith("src/app/compare/")) return { cat: "03-drug-class-pages" };
  if (p.startsWith("src/app/drugs/") || p.startsWith("src/lib/kyp/data/drugs/"))
    return { cat: "04-drug-pages" };
  if (p.startsWith("src/app/psychiatry/") || p.startsWith("src/lib/kyp/data/psychiatry-courses/") ||
      p.startsWith("src/components/psychiatry/") || p === "src/lib/kyp/data/psychiatry-course-sections.ts" ||
      p === "src/lib/kyp/data/psychiatry-concept-visibility.ts" ||
      p === "src/lib/kyp/data/psychiatry-search-records.generated.ts")
    return { cat: "05-psychiatry" };
  if (p.startsWith("src/app/diseases/") || p.startsWith("src/lib/kyp/data/diseases/") ||
      p.startsWith("src/app/substances/") || p.startsWith("src/lib/kyp/data/substances/") ||
      p.startsWith("src/app/interactions/") || p.startsWith("src/lib/kyp/interactions/"))
    return { cat: "06-clinical-pages" };
  if (p.startsWith("src/app/learn/") || p.startsWith("src/app/study/"))
    return { cat: "07-learning-pages" };
  if (p.startsWith("src/lib/kyp/patient/")) return { cat: "08-patient-education" };
  if (p.startsWith("src/app/quiz/") || p.startsWith("src/lib/kyp/custom-test/"))
    return { cat: "09-quiz-pages" };
  if (p.startsWith("src/app/dashboard/") || p.startsWith("src/app/welcome/") ||
      p.startsWith("src/app/enter/") || p.startsWith("src/app/reset/") ||
      p.startsWith("src/app/legal/") || p.startsWith("src/components/kyp/ui/"))
    return { cat: "10-navigation-ui" };
  if (p === "src/app/sitemap.tsx" || p.startsWith("src/lib/kyp/structured-data") ||
      p === "src/lib/kyp/site-url.ts") return { cat: "11-seo-meta" };
  if (p.startsWith("src/components/")) return { cat: "12-shared-components" };
  if (p.startsWith("src/lib/kyp/data/")) return { cat: "13-data-content" };
  if (p.startsWith("public/")) return { cat: "13-data-content" };
  if (p.startsWith("reports/") || p.startsWith("docs/") || p.startsWith("tests/") ||
      p.startsWith("scripts/") || p.startsWith("prisma/") || p.startsWith(".github/") ||
      p.endsWith(".md") || p === "package.json") return { cat: "14-reports-docs" };
  if (p.startsWith("src/")) return { cat: "12-shared-components" };
  return { cat: "14-reports-docs" };
}

const LEARNER_CATS = new Set([
  "01-homepage", "02-medicine-library", "03-drug-class-pages", "04-drug-pages",
  "05-psychiatry", "06-clinical-pages", "07-learning-pages", "08-patient-education",
  "09-quiz-pages", "10-navigation-ui", "11-seo-meta", "12-shared-components",
  "13-data-content",
]);

/* ---------------- TS/JS tokenizer (same as census) ---------------- */

function tokenizeTS(src) {
  const spans = [];
  const n = src.length;
  let i = 0;
  const push = (kind, start, end) => spans.push({ kind, start, end });
  while (i < n) {
    const c = src[i], c2 = src[i + 1];
    if (c === "/" && c2 === "/") {
      const s = i; i += 2;
      while (i < n && src[i] !== "\n") i++;
      push("comment", s, i); continue;
    }
    if (c === "/" && c2 === "*") {
      const s = i; i += 2;
      while (i < n && !(src[i] === "*" && src[i + 1] === "/")) i++;
      i = Math.min(n, i + 2);
      push("comment", s, i); continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      const q = c, s = i; i++;
      while (i < n) {
        if (src[i] === "\\") { i += 2; continue; }
        if (q === "`" && src[i] === "$" && src[i + 1] === "{") {
          let depth = 1; i += 2;
          while (i < n && depth > 0) {
            if (src[i] === "{") depth++;
            else if (src[i] === "}") depth--;
            i++;
          }
          continue;
        }
        if (src[i] === q) { i++; break; }
        if (q !== "`" && src[i] === "\n") { i++; break; }
        i++;
      }
      push("string", s, i); continue;
    }
    i++;
  }
  return spans;
}

function findQuizSpans(src, codeSpans) {
  const spans = [];
  const inCommentOrString = (off) => codeSpans.some((s) => off >= s.start && off < s.end);
  const re = /microQuizzes\s*:\s*\[/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    if (inCommentOrString(m.index)) continue;
    const open = m.index + m[0].length - 1;
    let depth = 0;
    for (let i = open; i < src.length; i++) {
      if (inCommentOrString(i)) continue;
      const ch = src[i];
      if (ch === "[" || ch === "{" || ch === "(") depth++;
      else if (ch === "]" || ch === "}" || ch === ")") {
        depth--;
        if (depth === 0) { spans.push([m.index, i]); break; }
      }
    }
  }
  return spans;
}

/** Field key owning a string that starts at `start`. */
function keyBefore(src, start) {
  let i = start - 1;
  while (i > 0 && /\s/.test(src[i])) i--;
  if (src[i] !== ":") return null;
  i--;
  while (i > 0 && /\s/.test(src[i])) i--;
  const end = i + 1;
  let s = i;
  while (s > 0 && /[\w$]/.test(src[s - 1])) s--;
  if (s === end) return null;
  return src.slice(s, end);
}

const lineOf = (src, idx) => src.slice(0, idx).split("\n").length;

/* ---------------- classification rules ---------------- */

const E_KEYS = new Set(["source", "section", "citation", "reference", "references", "provenance", "book", "journal"]);
const C_KEYS = new Set(["name", "symbol"]); // short clinical/technical labels
const G_PATTERNS = [
  /Suicidal Thoughts and Behaviou?rs\s+—/, // boxed-warning titles (FDA terminology adjacency)
];

function classifyOccurrence({ key, str, norm }) {
  // F — placeholder (exact em-dash string, quotes stripped)
  if (norm === "—" || str.trim() === "—") return "F";
  // E — source/citation text by field
  if (key && E_KEYS.has(key)) return "E";
  // D — numeric range
  // (checked per occurrence below)
  // G — known review-required patterns
  for (const re of G_PATTERNS) if (re.test(str)) return "G";
  // C — short clinical/technical label (< 70 chars, no sentence verb-ish punctuation)
  const t = norm;
  if (key && C_KEYS.has(key) && t.length < 70 && !/[.!?]$/.test(t)) return "C";
  return null; // undecided → A or B
}

/* ---------------- main ---------------- */

const files = execSync("git ls-files", { encoding: "utf8" })
  .trim().split("\n").filter(Boolean);

const occurrences = []; // learner-facing rendered occurrences
const derived = { files: 0, em: 0 };
let mcqTotal = 0, commentTotal = 0, excludedTotal = 0, enRange = 0, enOther = 0;

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (!TEXT_EXT.has(ext)) continue;
  let src;
  try { src = readFileSync(file, "utf8"); } catch { continue; }

  const { cat, excluded, mcq } = categorize(file);
  const isLearner = LEARNER_CATS.has(cat);
  const generated = /generated/.test(file);

  if (ext === ".json") {
    // machine-readable data — count only
    const emCount = src.split(EM).length - 1;
    if (excluded) excludedTotal += emCount;
    else if (mcq || file.startsWith("data/mcq/")) mcqTotal += emCount;
    else if (isLearner) {
      if (generated) { derived.em += emCount; derived.files++; }
      else if (file === "public/manifest.webmanifest") {
        occurrences.push({ file, line: 2, key: "name", str: src.match(/"name":\s*"([^"]*)"/)?.[1] ?? "", bucket: "C", note: "PWA manifest brand name" });
      }
    }
    for (let i = 0; i < src.length; i++) {
      if (src[i] === EN) {
        if (/\d/.test(src[i - 1] || "") && /\d/.test(src[i + 1] || "")) enRange++;
        else enOther++;
      }
    }
    continue;
  }

  if ([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"].includes(ext)) {
    const codeSpans = tokenizeTS(src);
    const quizSpans = mcq ? [[0, src.length]] : findQuizSpans(src, codeSpans);
    const inQuiz = (off) => quizSpans.some(([a, b]) => off >= a && off <= b);
    const spanAt = (off) => codeSpans.find((s) => off >= s.start && off < s.end);

    let i = src.indexOf(EM);
    while (i !== -1) {
      const sp = spanAt(i);
      if (excluded) excludedTotal++;
      else if (mcq || inQuiz(i)) mcqTotal++;
      else if (sp && sp.kind === "comment") commentTotal++;
      else if (isLearner) {
        if (generated) { derived.em++; if (derived.files === 0 || derived.lastFile !== file) { derived.files++; derived.lastFile = file; } }
        else {
          const occ = { file, line: lineOf(src, i), key: null, str: null, jsx: false };
          if (sp && sp.kind === "string") {
            occ.str = src.slice(sp.start, sp.end);
            occ.key = keyBefore(src, sp.start);
            // strip quotes for repeat-key normalization
            occ.norm = occ.str.replace(/^['"`]|['"`]$/g, "").replace(/\s+/g, " ").trim();
          } else {
            // JSX text or code position — capture the text-node line
            occ.jsx = true;
            const ls = src.lastIndexOf("\n", i) + 1;
            const le = src.indexOf("\n", i);
            occ.str = src.slice(ls, le > 0 ? le : src.length).trim();
            occ.norm = occ.str.replace(/\s+/g, " ").trim();
          }
          const before = src.slice(Math.max(0, i - 3), i);
          const after = src.slice(i + 1, i + 4);
          occ.rangeLike = /\d\s*$/.test(before) && /^\s*\d/.test(after);
          occurrences.push(occ);
        }
      }
      i = src.indexOf(EM, i + 1);
    }
    let j = src.indexOf(EN);
    while (j !== -1) {
      const beforeC = src[j - 1] || "", afterC = src[j + 1] || "";
      if (/\d/.test(beforeC) && /\d/.test(afterC)) enRange++;
      else if (!excluded) enOther++;
      j = src.indexOf(EN, j + 1);
    }
  } else {
    // markdown / other text
    const emCount = src.split(EM).length - 1;
    if (excluded) excludedTotal += emCount;
    else if (mcq) mcqTotal += emCount;
    // category 14 + root md handled as dev-facing (not learner) — counted in census
  }
}

/* -------- pass 2: repeat detection + final buckets -------- */

const normCount = new Map();
for (const o of occurrences) {
  if (!o.jsx && o.norm) {
    const k = o.norm.slice(0, 300);
    normCount.set(k, (normCount.get(k) || 0) + 1);
  }
}

const manualG = []; // filled after sampling

for (const o of occurrences) {
  if (o.rangeLike) { o.bucket = "D"; continue; }
  const rule = o.str ? classifyOccurrence({ key: o.key, str: o.str, norm: o.norm }) : null;
  if (rule) { o.bucket = rule; continue; }
  if (!o.jsx && o.norm && o.norm !== "—" && normCount.get(o.norm.slice(0, 300)) >= 3) { o.bucket = "B"; continue; }
  o.bucket = "A";
}

/* -------- aggregate -------- */

const buckets = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 };
const byBucketFiles = { A: new Set(), B: new Set(), C: new Set(), D: new Set(), E: new Set(), F: new Set(), G: new Set() };
const bFamilies = new Map();
const eFamilies = new Map();
const gItems = [];
const aPerFile = new Map();

for (const o of occurrences) {
  buckets[o.bucket]++;
  byBucketFiles[o.bucket].add(o.file);
  if (o.bucket === "B") {
    const k = o.norm.slice(0, 200);
    const e = bFamilies.get(k) || { count: 0, files: new Set(), sample: o.norm, key: o.key, cat: categorize(o.file).cat };
    e.count++; e.files.add(o.file);
    bFamilies.set(k, e);
  } else if (o.bucket === "E") {
    const k = o.norm.slice(0, 200);
    const e = eFamilies.get(k) || { count: 0, files: new Set(), sample: o.norm };
    e.count++; e.files.add(o.file);
    eFamilies.set(k, e);
  } else if (o.bucket === "G") {
    gItems.push({ file: o.file, line: o.line, str: o.norm.slice(0, 160) });
  } else if (o.bucket === "A") {
    aPerFile.set(o.file, (aPerFile.get(o.file) || 0) + 1);
  }
}

/* -------- output -------- */

const result = {
  meta: { generatedAt: new Date().toISOString(), occurrences: occurrences.length },
  totals: {
    learnerFaceOccurrences: occurrences.length,
    ...buckets,
    derivedGeneratedEm: derived.em,
    derivedGeneratedFiles: derived.files,
    mcqProtected: mcqTotal,
    comments: commentTotal,
    excluded: excludedTotal,
    enRangePreserved: enRange,
    enOtherPreserved: enOther,
  },
  filesPerBucket: Object.fromEntries(Object.entries(byBucketFiles).map(([k, v]) => [k, v.size])),
  bFamilies: [...bFamilies.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, 80)
    .map((e) => ({ count: e.count, files: e.files.size, key: e.key, cat: e.cat, sample: e.sample.slice(0, 180) })),
  bFamilyTotal: [...bFamilies.values()].length,
  eFamilies: [...eFamilies.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, 40)
    .map((e) => ({ count: e.count, files: e.files.size, sample: e.sample.slice(0, 180) })),
  gItems,
  topAFiles: [...aPerFile.entries()].map(([f, n]) => ({ file: f, aCount: n }))
    .sort((a, b) => b.aCount - a.aCount).slice(0, 30),
  aSamples: occurrences.filter((o) => o.bucket === "A" && o.str).slice(0, 0), // filled below
};

// stratified A samples for manual review (every 97th A)
const aAll = occurrences.filter((o) => o.bucket === "A" && o.str);
result.aSamples = aAll.filter((_, idx) => idx % 97 === 0).slice(0, 45)
  .map((o) => ({ file: o.file, line: o.line, key: o.key, str: o.norm.slice(0, 170) }));

mkdirSync("reports", { recursive: true });
writeFileSync("reports/dash-classification-data.json", JSON.stringify(result, null, 2));

console.log("=== KYP DASH CLASSIFICATION (Phase 2) ===");
console.log(`learner-facing occurrences classified: ${occurrences.length}`);
console.log(`A clearly excessive editorial : ${buckets.A} in ${byBucketFiles.A.size} files`);
console.log(`B repeated template prose      : ${buckets.B} in ${byBucketFiles.B.size} files (${result.bFamilyTotal} distinct families)`);
console.log(`C legitimate medical/scientific: ${buckets.C} in ${byBucketFiles.C.size} files`);
console.log(`D numeric range (em)           : ${buckets.D}`);
console.log(`E source/citation title        : ${buckets.E} in ${byBucketFiles.E.size} files`);
console.log(`F empty/UI placeholder         : ${buckets.F} in ${byBucketFiles.F.size} files`);
console.log(`G needs review                 : ${buckets.G} in ${byBucketFiles.G.size} files`);
console.log(`derived (generated files)      : ${derived.em} in ${derived.files} files — regenerate, not hand-edit`);
console.log(`\nen-dash ranges preserved: ${enRange} | en-dash other (scientific compounds etc.): ${enOther}`);
console.log(`\n--- top 20 B families ---`);
for (const f of result.bFamilies.slice(0, 20))
  console.log(`[${String(f.count).padStart(4)}x ${String(f.files).padStart(3)}f key=${f.key}] ${f.sample.slice(0, 100)}`);
console.log(`\n--- top 10 E families ---`);
for (const f of result.eFamilies.slice(0, 10))
  console.log(`[${String(f.count).padStart(4)}x ${String(f.files).padStart(3)}f] ${f.sample.slice(0, 100)}`);
console.log(`\n--- G items (${gItems.length}) ---`);
for (const g of gItems.slice(0, 15)) console.log(`${g.file}:${g.line}  ${g.str.slice(0, 90)}`);
console.log(`\n--- 20 C samples (of ${buckets.C}) ---`);
const cAll = occurrences.filter((o) => o.bucket === "C");
for (const s of cAll.filter((_, i) => i % Math.max(1, Math.floor(cAll.length / 20)) === 0).slice(0, 20))
  console.log(`${s.file}:${s.line} key=${s.key}  ${s.norm.slice(0, 100)}`);
console.log(`\n--- A split: shared sources vs data prose ---`);
const aComp = aAll.filter((o) => o.file.startsWith("src/app/") || o.file.startsWith("src/components/"));
const aData = aAll.filter((o) => o.file.startsWith("src/lib/"));
console.log(`A in app/components (single-source fixes): ${aComp.length} in ${new Set(aComp.map((o) => o.file)).size} files`);
console.log(`A in lib data (per-file prose edits):        ${aData.length} in ${new Set(aData.map((o) => o.file)).size} files`);
console.log(`\n--- 20 A samples (of ${aAll.length}) ---`);
for (const s of result.aSamples.slice(0, 20))
  console.log(`${s.file}:${s.line} key=${s.key}  ${s.str.slice(0, 110)}`);
console.log("\nWrote reports/dash-classification-data.json");
