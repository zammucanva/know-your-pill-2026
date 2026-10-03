#!/usr/bin/env node
/**
 * KYP dash census — site-wide dash/em-dash audit tool.
 *
 * Counts and classifies across the tracked repo:
 *   - em dashes (U+2014)
 *   - en dashes (U+2013)
 *   - spaced "--" used as an em-dash substitute in prose
 *
 * Every em-dash occurrence is bucketed by:
 *   - content kind: rendered string / JSX-text / code comment /
 *     MCQ-protected span / generated file / excluded area
 *   - census category (homepage, medicine, drug class, drug pages,
 *     psychiatry, clinical, learning, patient education, quiz,
 *     nav/UI, SEO/meta, shared components, data/content, reports/docs)
 *
 * The scanner tokenizes TS/TSX/JS so that dev-facing comments are
 * never confused with rendered learner-facing copy, and so that
 * `microQuizzes` arrays (protected MCQ data) are counted separately
 * from prose strings.
 *
 * Usage:  node scripts/dash-census.mjs
 * Output: reports/dash-census-data.json + console summary
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

/* ------------------------------------------------------------------ */
/* Category mapping (single primary category per file, documented)    */
/* ------------------------------------------------------------------ */

function categorize(p) {
  // --- exclusions / protected areas first -------------------------
  if (p.startsWith("download/kyp-notes/")) return { cat: "excluded-canonical-notes", excluded: true };
  if (p.startsWith("download/")) return { cat: "excluded-download", excluded: true };
  if (p.startsWith("tool-results/")) return { cat: "excluded-tool-results", excluded: true };
  if (p.startsWith("upload/")) return { cat: "excluded-upload", excluded: true };
  if (p.startsWith("data/mcq/")) return { cat: "protected-mcq-bank", mcq: true };
  if (p.startsWith("src/lib/kyp/stahl-mcqs/")) return { cat: "protected-mcq-bank", mcq: true };

  // --- learner-facing routes & their data ---------------------------
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
    return { cat: "05-psychiatry", generated: p.includes(".generated.") };
  if (p.startsWith("src/app/diseases/") || p.startsWith("src/lib/kyp/data/diseases/") ||
      p.startsWith("src/app/substances/") || p.startsWith("src/lib/kyp/data/substances/") ||
      p.startsWith("src/app/interactions/") || p.startsWith("src/lib/kyp/interactions/"))
    return { cat: "06-clinical-pages" };
  if (p.startsWith("src/app/learn/") || p.startsWith("src/app/study/"))
    return { cat: "07-learning-pages" };
  if (p.startsWith("src/lib/kyp/patient/"))
    return { cat: "08-patient-education" };
  if (p.startsWith("src/app/quiz/") || p.startsWith("src/lib/kyp/custom-test/"))
    return { cat: "09-quiz-pages" };

  // --- app shell / utility routes -----------------------------------
  if (p.startsWith("src/app/dashboard/") || p.startsWith("src/app/welcome/") ||
      p.startsWith("src/app/enter/") || p.startsWith("src/app/reset/") ||
      p.startsWith("src/app/legal/") || p.startsWith("src/components/kyp/ui/"))
    return { cat: "10-navigation-ui" };

  // --- SEO / metadata machinery --------------------------------------
  if (p === "src/app/sitemap.tsx" || p.startsWith("src/lib/kyp/structured-data") ||
      p === "src/lib/kyp/site-url.ts")
    return { cat: "11-seo-meta" };

  // --- shared components ---------------------------------------------
  if (p.startsWith("src/components/")) return { cat: "12-shared-components" };

  // --- remaining data/content (search index, registries, brain, ...) --
  if (p.startsWith("src/lib/kyp/data/"))
    return { cat: "13-data-content", generated: p.includes("generated") };
  if (p.startsWith("public/")) return { cat: "13-data-content" };

  // --- everything else: reports, docs, tests, scripts, infra ---------
  if (p.startsWith("reports/") || p.startsWith("docs/") || p.startsWith("tests/") ||
      p.startsWith("scripts/") || p.startsWith("prisma/") || p.startsWith(".github/") ||
      p.endsWith(".md") || p === "package.json")
    return { cat: "14-reports-docs" };

  // remaining src/lib + src/app fallthrough
  if (p.startsWith("src/")) return { cat: "12-shared-components" };
  return { cat: "14-reports-docs" };
}

/* ------------------------------------------------------------------ */
/* TS/JS tokenizer — classifies offsets into comment/string/code      */
/* ------------------------------------------------------------------ */

function tokenizeTS(src) {
  const spans = []; // {start, end, kind}
  const n = src.length;
  let i = 0;
  const push = (kind, start, end) => spans.push({ kind, start, end });
  while (i < n) {
    const c = src[i], c2 = src[i + 1];
    if (c === "/" && c2 === "/") {
      const s = i;
      i += 2;
      while (i < n && src[i] !== "\n") i++;
      push("comment", s, i);
      continue;
    }
    if (c === "/" && c2 === "*") {
      const s = i;
      i += 2;
      while (i < n && !(src[i] === "*" && src[i + 1] === "/")) i++;
      i = Math.min(n, i + 2);
      push("comment", s, i);
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      const q = c, s = i;
      i++;
      while (i < n) {
        if (src[i] === "\\") { i += 2; continue; }
        if (q === "`" && src[i] === "$" && src[i + 1] === "{") {
          // template interpolation — skip to matching brace
          let depth = 1; i += 2;
          while (i < n && depth > 0) {
            if (src[i] === "{") depth++;
            else if (src[i] === "}") depth--;
            i++;
          }
          continue;
        }
        if (src[i] === q) { i++; break; }
        if (q !== "`" && src[i] === "\n") { i++; break; } // unterminated line string
        i++;
      }
      push("string", s, i);
      continue;
    }
    i++;
  }
  return spans;
}

/** Find byte spans of `microQuizzes: [ ... ]` (bracket-matched, code-only). */
function findQuizSpans(src, codeSpans) {
  const spans = [];
  // codeSpans only contains comment/string spans — being inside one
  // means the offset is NOT plain code.
  const inCommentOrString = (off) =>
    codeSpans.some((s) => off >= s.start && off < s.end);
  const re = /microQuizzes\s*:\s*\[/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    if (inCommentOrString(m.index)) continue; // mention in comment/string
    const open = m.index + m[0].length - 1; // position of '['
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

/* ------------------------------------------------------------------ */
/* Analysis                                                            */
/* ------------------------------------------------------------------ */

const rangeAround = (src, idx, radius) =>
  src.slice(Math.max(0, idx - radius), Math.min(src.length, idx + radius + 1));

function countAll(haystack, needle) {
  let c = 0, i = haystack.indexOf(needle);
  while (i !== -1) { c++; i = haystack.indexOf(needle, i + 1); }
  return c;
}

const files = execSync("git ls-files", { encoding: "utf8" })
  .trim().split("\n").filter(Boolean);

const result = {
  meta: { generatedAt: new Date().toISOString(), fileCount: files.length },
  totals: {},
  byCategory: {},
  topFiles: [],
  repeatedStrings: [],
  preDashContexts: [],
  preservedSamples: [],
  perFile: [],
};

const repeatedMap = new Map();   // normalized string -> {count, files:Set, sample}
const contextMap = new Map();    // pre-dash text -> count
const stringLitMap = new Map();  // literalKey -> occurrences (offset list per file handled inline)

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (!TEXT_EXT.has(ext)) continue;
  let src;
  try { src = readFileSync(file, "utf8"); } catch { continue; }

  const { cat, excluded, mcq } = categorize(file);
  const generated = file.includes("generated");
  const counts = {
    file, cat, excluded: !!excluded, mcq: !!mcq, generated,
    em: 0, em_string: 0, em_jsx: 0, em_comment: 0, em_mcq: 0, em_range: 0,
    en: 0, en_range: 0, dd_prose: 0,
  };

  let occurrences = []; // {idx, bucket}
  let codeSpans = [];

  if ([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"].includes(ext)) {
    codeSpans = tokenizeTS(src);
    const quizSpans = mcq ? [[0, src.length]] : findQuizSpans(src, codeSpans);
    const inQuiz = (off) => quizSpans.some(([a, b]) => off >= a && off <= b);
    const spanAt = (off) => codeSpans.find((s) => off >= s.start && off < s.end);

    let i = src.indexOf(EM);
    while (i !== -1) {
      counts.em++;
      const sp = spanAt(i);
      const before = src.slice(Math.max(0, i - 3), i);
      const after = src.slice(i + 1, i + 4);
      const rangeLike = /\d\s*$/.test(before) && /^\s*\d/.test(after);
      if (rangeLike) counts.em_range++;
      if (mcq || inQuiz(i)) counts.em_mcq++;
      else if (!sp) counts.em_jsx++;
      else if (sp.kind === "comment") counts.em_comment++;
      else if (sp.kind === "string") counts.em_string++;
      else counts.em_jsx++;
      if (!excluded && !mcq && sp && sp.kind === "string" && !inQuiz(i)) {
        // record for repeated-pattern analysis
        const lit = src.slice(sp.start, sp.end);
        const key = lit.replace(/\s+/g, " ").trim().slice(0, 220);
        const entry = repeatedMap.get(key) || { count: 0, files: new Set(), sample: lit, cat };
        entry.count++; entry.files.add(file);
        repeatedMap.set(key, entry);
        const pre = src.slice(Math.max(sp.start, i - 46), i).replace(/\s+/g, " ").trim().slice(-42);
        contextMap.set(pre, (contextMap.get(pre) || 0) + 1);
      }
      occurrences.push({ idx: i, bucket: mcq || inQuiz(i) ? "mcq" : !sp ? "jsx" : sp.kind });
      i = src.indexOf(EM, i + 1);
    }
    let j = src.indexOf(EN);
    while (j !== -1) {
      counts.en++;
      if (/\d/.test(src[j - 1] || "") && /\d/.test(src[j + 1] || "")) counts.en_range++;
      j = src.indexOf(EN, j + 1);
    }
  } else if (ext === ".json") {
    counts.em = countAll(src, EM);
    counts.em_mcq = mcq ? counts.em : 0;
    counts.en = countAll(src, EN);
    counts.em_range = 0;
  } else {
    // markdown / text / other — everything is prose
    counts.em = countAll(src, EM);
    counts.em_string = excluded ? 0 : counts.em; // prose bucket reported as "string"
    if (mcq) { counts.em_mcq = counts.em; counts.em_string = 0; }
    counts.en = countAll(src, EN);
    let k = src.indexOf(EN);
    while (k !== -1) {
      if (/\d/.test(src[k - 1] || "") && /\d/.test(src[k + 1] || "")) counts.en_range++;
      k = src.indexOf(EN, k + 1);
    }
    if (!excluded && !mcq) {
      let i2 = src.indexOf(EM);
      while (i2 !== -1) {
        const line = src.slice(src.lastIndexOf("\n", i2) + 1, src.indexOf("\n", i2) > 0 ? src.indexOf("\n", i2) : src.length);
        const key = line.replace(/\s+/g, " ").trim().slice(0, 220);
        const entry = repeatedMap.get(key) || { count: 0, files: new Set(), sample: line, cat };
        entry.count++; entry.files.add(file);
        repeatedMap.set(key, entry);
        i2 = src.indexOf(EM, i2 + 1);
      }
    }
  }

  // spaced "--" as em-dash substitute (prose convention " -- ")
  const dd = (src.match(/ -- /g) || []).length;
  counts.dd_prose = dd;

  if (counts.em || counts.en || counts.dd_prose) {
    result.perFile.push(counts);
    const c = result.byCategory[cat] || (result.byCategory[cat] = {
      files: 0, em: 0, em_string: 0, em_jsx: 0, em_comment: 0, em_mcq: 0,
      em_range: 0, en: 0, en_range: 0, dd_prose: 0,
    });
    c.files++;
    for (const k of ["em", "em_string", "em_jsx", "em_comment", "em_mcq", "em_range", "en", "en_range", "dd_prose"])
      c[k] += counts[k];
  }
}

/* ---------------- aggregate ---------------- */

const sum = (k) => result.perFile.reduce((a, f) => a + f[k], 0);
result.totals = {
  filesScanned: result.perFile.length,
  em: sum("em"), em_string: sum("em_string"), em_jsx: sum("em_jsx"),
  em_comment: sum("em_comment"), em_mcq: sum("em_mcq"), em_range: sum("em_range"),
  en: sum("en"), en_range: sum("en_range"), dd_prose: sum("dd_prose"),
};

result.topFiles = result.perFile
  .filter((f) => !f.excluded)
  .sort((a, b) => b.em - a.em)
  .slice(0, 25)
  .map((f) => ({ file: f.file, cat: f.cat, em: f.em, string: f.em_string, jsx: f.em_jsx, comment: f.em_comment, mcq: f.em_mcq, generated: f.generated }));

result.repeatedStrings = [...repeatedMap.entries()]
  .filter(([k, v]) => v.count >= 3)
  .sort((a, b) => b[1].count - a[1].count)
  .slice(0, 40)
  .map(([k, v]) => ({ count: v.count, files: v.files.size, sample: v.sample.slice(0, 200), cat: v.cat }));

result.preDashContexts = [...contextMap.entries()]
  .filter(([k, v]) => v >= 5)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 40)
  .map(([k, v]) => ({ context: k, count: v }));

/* ---------------- write + report ---------------- */

mkdirSync("reports", { recursive: true });
writeFileSync("reports/dash-census-data.json", JSON.stringify(result, null, 2));

console.log("=== KYP DASH CENSUS ===");
console.log(`files with any dash: ${result.totals.filesScanned}`);
console.log(`EM (U+2014) total:            ${result.totals.em}`);
console.log(`  in rendered strings:         ${result.totals.em_string}`);
console.log(`  in JSX text:                 ${result.totals.em_jsx}`);
console.log(`  in code comments:            ${result.totals.em_comment}`);
console.log(`  in MCQ-protected data:       ${result.totals.em_mcq}`);
console.log(`  digit—digit range-like:      ${result.totals.em_range}`);
console.log(`EN (U+2013) total:            ${result.totals.en} (numeric ranges: ${result.totals.en_range})`);
console.log(`spaced "--" prose substitute: ${result.totals.dd_prose}`);
console.log("\n--- by category ---");
for (const [cat, c] of Object.entries(result.byCategory).sort((a, b) => b[1].em - a[1].em)) {
  console.log(
    `${cat.padEnd(26)} em=${String(c.em).padStart(6)} str=${String(c.em_string).padStart(6)} jsx=${String(c.em_jsx).padStart(4)} cmt=${String(c.em_comment).padStart(5)} mcq=${String(c.em_mcq).padStart(5)} files=${c.files}`
  );
}
console.log("\n--- top repeated strings (count>=3) ---");
for (const r of result.repeatedStrings.slice(0, 15))
  console.log(`[${r.count}x in ${r.files} files] ${r.sample.slice(0, 110)}`);
console.log("\n--- top pre-dash contexts (count>=5) ---");
for (const r of result.preDashContexts.slice(0, 15))
  console.log(`[${r.count}x] ...${r.context} — `);
console.log("\nWrote reports/dash-census-data.json");
