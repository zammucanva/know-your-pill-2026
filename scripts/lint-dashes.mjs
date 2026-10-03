#!/usr/bin/env node
/**
 * KYP editorial dash lint — `npm run lint:dashes`
 *
 * Gates the site against the excessive-editorial-em-dash writing pattern
 * (KYP site-wide dash cleanup mission, Phase 7).
 *
 * What it flags:
 *   1. editorial em-dash occurrences — rendered learner-facing strings/JSX
 *      not in a preserved category
 *   2. repeated template prose — the same normalized string carrying an
 *      editorial em-dash in >= 3 files ("X — Y" template families)
 *   3. "structure — list" constructions —
 *      /\b(structure|considerations|cautions|lessons|steps|reasons)\s+—\s/
 *   4. clusters — more than DASH_CLUSTER_MAX editorial dashes in one file
 *
 * What it deliberately does NOT flag (preserved categories):
 *   - numeric ranges written with en dash (2–6 weeks) or digit—digit
 *   - source/citation fields (source:, section:, references, …)
 *   - short clinical/technical labels (name:/symbol: under 70 chars)
 *   - exact "—" placeholder strings (value: "—", duration: "—")
 *   - boxed-warning titles (FDA terminology adjacency) and other
 *     NEEDS-CLINICAL-REVIEW items via G patterns
 *   - allowlisted strings (reports/dash-allowlist.json) — deliberate keeps
 *   - MCQ-protected spans (microQuizzes), data/mcq/, stahl-mcqs/
 *   - generated files (regenerate via `npm run gen:client-data`; their
 *     content mirrors sources and is pinned deep-equal by
 *     tests/platform-hardening.test.ts)
 *   - dev-facing comments, canonical notes, reports/tests/scripts
 *
 * Usage:
 *   npm run lint:dashes            # gate mode — exits 1 on any finding
 *   npm run lint:dashes -- --report  # summary mode — exits 0
 */

import { execSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const EM = "\u2014";
const DASH_CLUSTER_MAX = 25;
const STRUCTURE_RE = /\b(structure|considerations|cautions|lessons?|steps?|reasons?|questions?)\s+—\s/i;

const TEXT_EXT = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".json"]);
const REPORT_ONLY = process.argv.includes("--report");

/* Brand/tagline and machine-regex lines kept deliberately (documented) */
const PROTECTED_BRAND = "Know Your Pill — Medication Education Made Visual";
const CODE_REGEX_LINES = [
  ["src/lib/kyp/custom-test/templates.ts", 34, "dose-range regex pattern"],
  ["src/lib/kyp/knowledge/graph.ts", 220, "knowledge-graph strip regex"],
  ["src/lib/kyp/pharmacokinetics/half-life.ts", 46, "half-life range regex"],
  ["src/lib/kyp/psychiatry-concept-visibility.ts", 212, "segment cut regex"],
  ["src/lib/kyp/psychiatry-concept-visibility.ts", 242, "segment split regex"],
  ["src/lib/kyp/psychiatry-concept-visibility.ts", 359, "leading separator strip regex"],
  ["src/lib/oxford/loader.ts", 249, "note-group header parse regex"],
];

/* allowlist: exact normalized strings kept deliberately */
const ALLOWLIST_PATH = "reports/dash-allowlist.json";
const allowlist = existsSync(ALLOWLIST_PATH)
  ? new Set(JSON.parse(readFileSync(ALLOWLIST_PATH, "utf8")).strings ?? [])
  : new Set();

function categorize(p) {
  if (p.startsWith("download/") || p.startsWith("tool-results/") || p.startsWith("upload/"))
    return { excluded: true };
  if (p.startsWith("data/mcq/") || p.startsWith("src/lib/kyp/stahl-mcqs/"))
    return { mcq: true };
  if (p === "src/app/page.tsx") return { cat: "01-homepage" };
  if (p === "src/app/layout.tsx" || p === "src/app/globals.css") return { cat: "10" };
  if (p.startsWith("src/app/medicine/")) return { cat: "02" };
  if (p.startsWith("src/app/drugs/class/") || p === "src/lib/kyp/data/classes.ts" ||
      p === "src/lib/kyp/data/drug-taxonomy.ts" || p === "src/lib/kyp/data/class-id.ts" ||
      p.startsWith("src/app/compare/")) return { cat: "03" };
  if (p.startsWith("src/app/drugs/") || p.startsWith("src/lib/kyp/data/drugs/")) return { cat: "04" };
  if (p.startsWith("src/app/psychiatry/") || p.startsWith("src/lib/kyp/data/psychiatry-courses/") ||
      p.startsWith("src/components/psychiatry/") || p === "src/lib/kyp/data/psychiatry-course-sections.ts" ||
      p === "src/lib/kyp/data/psychiatry-concept-visibility.ts" ||
      p === "src/lib/kyp/data/psychiatry-search-records.generated.ts") return { cat: "05" };
  if (p.startsWith("src/app/diseases/") || p.startsWith("src/lib/kyp/data/diseases/") ||
      p.startsWith("src/app/substances/") || p.startsWith("src/lib/kyp/data/substances/") ||
      p.startsWith("src/app/interactions/") || p.startsWith("src/lib/kyp/interactions/")) return { cat: "06" };
  if (p.startsWith("src/app/learn/") || p.startsWith("src/app/study/")) return { cat: "07" };
  if (p.startsWith("src/lib/kyp/patient/")) return { cat: "08" };
  if (p.startsWith("src/app/quiz/") || p.startsWith("src/lib/kyp/custom-test/")) return { cat: "09" };
  if (p.startsWith("src/app/dashboard/") || p.startsWith("src/app/welcome/") ||
      p.startsWith("src/app/enter/") || p.startsWith("src/app/reset/") ||
      p.startsWith("src/app/legal/") || p.startsWith("src/components/kyp/ui/")) return { cat: "10" };
  if (p === "src/app/sitemap.tsx" || p.startsWith("src/lib/kyp/structured-data") ||
      p === "src/lib/kyp/site-url.ts") return { cat: "11" };
  if (p.startsWith("src/components/")) return { cat: "12" };
  if (p.startsWith("src/lib/kyp/data/") || p.startsWith("public/")) return { cat: "13" };
  if (p.startsWith("src/")) return { cat: "12" };
  return { cat: "14" }; // reports/docs/tests/scripts/infra — dev-facing
}

function tokenizeTS(src) {
  const spans = [];
  const n = src.length;
  let i = 0;
  const push = (kind, start, end) => spans.push({ kind, start, end });
  while (i < n) {
    const c = src[i], c2 = src[i + 1];
    if (c === "/" && c2 === "/") { const s = i; i += 2; while (i < n && src[i] !== "\n") i++; push("comment", s, i); continue; }
    if (c === "/" && c2 === "*") { const s = i; i += 2; while (i < n && !(src[i] === "*" && src[i + 1] === "/")) i++; i = Math.min(n, i + 2); push("comment", s, i); continue; }
    if (c === '"' || c === "'" || c === "`") {
      const q = c, s = i; i++;
      while (i < n) {
        if (src[i] === "\\") { i += 2; continue; }
        if (q === "`" && src[i] === "$" && src[i + 1] === "{") { let d = 1; i += 2; while (i < n && d > 0) { if (src[i] === "{") d++; else if (src[i] === "}") d--; i++; } continue; }
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
  const inC = (off) => codeSpans.some((s) => off >= s.start && off < s.end);
  const re = /microQuizzes\s*:\s*\[/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    if (inC(m.index)) continue;
    const open = m.index + m[0].length - 1;
    let depth = 0;
    for (let i = open; i < src.length; i++) {
      if (inC(i)) continue;
      const ch = src[i];
      if (ch === "[" || ch === "{" || ch === "(") depth++;
      else if (ch === "]" || ch === "}" || ch === ")") { depth--; if (depth === 0) { spans.push([m.index, i]); break; } }
    }
  }
  return spans;
}

function keyBefore(src, start) {
  let i = start - 1;
  while (i > 0 && /\s/.test(src[i])) i--;
  if (src[i] !== ":") return null;
  i--;
  while (i > 0 && /\s/.test(src[i])) i--;
  const end = i + 1;
  let s = i;
  while (s > 0 && /[\w$]/.test(src[s - 1])) s--;
  return s === end ? null : src.slice(s, end);
}

const E_KEYS = new Set(["source", "section", "citation", "reference", "references", "provenance", "book", "journal"]);
const C_KEYS = new Set(["name", "symbol"]);
const G_PATTERNS = [/Suicidal Thoughts and Behaviou?rs\s+—/];

/* ---------------- scan ---------------- */

const files = execSync("git ls-files", { encoding: "utf8" }).trim().split("\n").filter(Boolean);
const findings = [];       // editorial occurrences {file, line}
const familyMap = new Map(); // norm string -> Set(files)
const structureHits = [];
const perFileCount = new Map();
let preserved = { F: 0, E: 0, C: 0, D: 0, G: 0, mcq: 0, comment: 0, derived: 0, allow: 0 };

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (!TEXT_EXT.has(ext)) continue;
  if (ext === ".json") continue; // machine data (manifest brand name preserved)
  let src;
  try { src = readFileSync(file, "utf8"); } catch { continue; }

  const { cat, excluded, mcq } = categorize(file);
  if (excluded || cat === "14") continue;
  const generated = /generated/.test(file);
  const codeSpans = tokenizeTS(src);
  const quizSpans = mcq ? [[0, src.length]] : findQuizSpans(src, codeSpans);
  const inQuiz = (off) => quizSpans.some(([a, b]) => off >= a && off <= b);
  const spanAt = (off) => codeSpans.find((s) => off >= s.start && off < s.end);

  let i = src.indexOf(EM);
  while (i !== -1) {
    if (mcq || inQuiz(i)) preserved.mcq++;
    else {
      const sp = spanAt(i);
      if (sp && sp.kind === "comment") preserved.comment++;
      else if (generated) preserved.derived++;
      else {
        let norm = null, key = null;
        if (sp && sp.kind === "string") {
          const raw = src.slice(sp.start, sp.end);
          norm = raw.replace(/^['"`]|['"`]$/g, "").replace(/\s+/g, " ").trim();
          key = keyBefore(src, sp.start);
        } else {
          const ls = src.lastIndexOf("\n", i) + 1;
          const le = src.indexOf("\n", i);
          norm = src.slice(ls, le > 0 ? le : src.length).trim().replace(/\s+/g, " ").trim();
        }
        const before = src.slice(Math.max(0, i - 3), i);
        const after = src.slice(i + 1, i + 4);
        const rangeLike = /\d\s*$/.test(before) && /^\s*\d/.test(after);
        if (rangeLike) preserved.D++;
        else if (norm === EM || /\(—\)/.test(norm)) preserved.F++;
        else if (key && E_KEYS.has(key)) preserved.E++;
        else if (key && C_KEYS.has(key) && (norm?.length ?? 0) <= 70) preserved.C++;
        else if (G_PATTERNS.some((re) => re.test(norm || ""))) preserved.G++;
        else if (norm && allowlist.has(norm.slice(0, 300))) preserved.allow++;
        else if (norm && norm.includes(PROTECTED_BRAND)) preserved.allow++;
        else if (/\([A-Z0-9]{2,8} — [a-z]/.test(norm || "")) preserved.allow++; // gene-symbol gloss convention
        else if (CODE_REGEX_LINES.some(([f, l]) => f === file && l === src.slice(0, i).split("\n").length)) preserved.allow++;
        else {
          const line = src.slice(0, i).split("\n").length;
          findings.push({ file, line, norm: (norm || "").slice(0, 140) });
          perFileCount.set(file, (perFileCount.get(file) || 0) + 1);
          if (norm) {
            const k = norm.slice(0, 300);
            if (!familyMap.has(k)) familyMap.set(k, new Set());
            familyMap.get(k).add(file);
          }
          if (STRUCTURE_RE.test(norm || "")) structureHits.push({ file, line, norm: (norm || "").slice(0, 140) });
        }
      }
    }
    i = src.indexOf(EM, i + 1);
  }
}

/* ---------------- report ---------------- */

const families = [...familyMap.entries()]
  .map(([k, s]) => ({ norm: k, files: s.size }))
  .filter((f) => f.files >= 3)
  .sort((a, b) => b.files - a.files);

const clusters = [...perFileCount.entries()]
  .filter(([, n]) => n > DASH_CLUSTER_MAX)
  .sort((a, b) => b[1] - a[1]);

console.log("=== KYP lint:dashes — editorial em-dash gate ===");
console.log(`editorial occurrences: ${findings.length} in ${perFileCount.size} files`);
console.log(`repeated template families (>=3 files): ${families.length}`);
console.log(`"structure/list —" constructions: ${structureHits.length}`);
console.log(`cluster files (>${DASH_CLUSTER_MAX}): ${clusters.length}`);
console.log(`preserved: placeholder=${preserved.F} citation=${preserved.E} clinical-label=${preserved.C} numeric=${preserved.D} review=${preserved.G} allowlist=${preserved.allow} mcq=${preserved.mcq} comment=${preserved.comment} derived=${preserved.derived}`);

if (findings.length) {
  console.log("\nTop files:");
  for (const [f, n] of clusters.slice(0, 12)) console.log(`  ${f}  (${n})`);
  console.log("\nTop repeated families:");
  for (const f of families.slice(0, 12)) console.log(`  [${f.files} files] ${f.norm.slice(0, 110)}`);
  console.log("\nSample findings:");
  for (const f of (process.env.FULL ? findings : findings.slice(0, 10))) console.log(`  ${f.file}:${f.line}  ${f.norm.slice(0, 100)}`);
}

if (!REPORT_ONLY && (findings.length > 0)) {
  console.error(`\nlint:dashes — FAIL: ${findings.length} editorial em-dash occurrences remain.`);
  console.error("Preserved categories are exempt (ranges, citations, placeholders, MCQ, generated).");
  console.error("Rewrite flagged editorial constructions, or document deliberate keeps in reports/dash-allowlist.json.");
  process.exit(1);
}
console.log(REPORT_ONLY ? "\nlint:dashes — done (report mode)." : "\nlint:dashes — PASS (gate mode).");
