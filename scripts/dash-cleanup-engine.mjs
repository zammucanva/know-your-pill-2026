#!/usr/bin/env node
/**
 * KYP dash cleanup engine — Phase 4 implementation tool.
 *
 * Deterministic, rule-based editorial em-dash cleanup for learner-facing
 * authored prose. NEVER touches:
 *   - microQuizzes spans (MCQ data — frozen)
 *   - data/mcq/** and src/lib/kyp/stahl-mcqs/** (whole files)
 *   - citation fields (source:, section:, citation:, reference:, …)
 *   - clinical/technical labels (name:, symbol:) — incl. test-pinned
 *     indication names and gene-symbol glosses
 *   - exact "—" placeholder strings
 *   - boxed-warning titles (NEEDS CLINICAL REVIEW items)
 *   - numeric ranges (digit—digit)
 *   - generated files, comments, machine keys (id/slug/href/keywords/…)
 *
 * Transformations (in order of application):
 *   1. CURATED — exact substring replacements for the top repeated
 *      template families + mission showcase sentences.
 *   2. PAIRING — "X — Y — Z" parentheticals (no sentence break between
 *      the dashes) become "X (Y) Z".
 *   3. RULE CASCADE for each remaining " — ":
 *        continuation starts uppercase        → ". "  (new sentence)
 *        conjunctive adverb (however, thus…)  → "; "
 *        subordinator/conjunction/appositive  → ", "
 *        imperative verb                      → ". " + capitalize
 *        participial (-ing) continuation      → ", "
 *        independent clause (be/have/verb)   → ". " + capitalize
 *        default                              → ": "  ("; " if the
 *            lead already contains a colon)
 *
 * Every change is logged with before/after fragments and the rule that
 * produced it (reports/dash-transform-log.json). Strings whose
 * transformation would create double punctuation are left unchanged and
 * logged for manual review.
 *
 * Usage:
 *   node scripts/dash-cleanup-engine.mjs --group shared
 *   node scripts/dash-cleanup-engine.mjs --group drugs
 *   node scripts/dash-cleanup-engine.mjs --group psych
 *   node scripts/dash-cleanup-engine.mjs --group all --dry
 */

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";

const EM = "\u2014";
const DRY = process.argv.includes("--dry");
const groupArg = (process.argv.find((a) => a.startsWith("--group")) ?? "--group=all").split("=")[1] || "all";

const GROUPS = {
  shared: [
    "src/app/", "src/components/", "src/lib/oxford/",
    "src/lib/kyp/data/", // root files only (depth filter below)
    "src/lib/kyp/concerns/", "src/lib/kyp/knowledge/", "src/lib/kyp/study/",
    "src/lib/kyp/custom-test/", "src/lib/kyp/retention/", "src/lib/kyp/analytics/",
    "src/lib/kyp/pharmacokinetics/", "src/lib/kyp/interactions/",
    "src/lib/kyp/psychiatry-course-sections.ts", "src/lib/kyp/psychiatry-concept-visibility.ts",
    "src/lib/kyp/structured-data", "src/lib/kyp/side-effects.ts",
  ],
  drugs: ["src/lib/kyp/data/drugs/", "src/lib/kyp/patient/"],
  psych: ["src/lib/kyp/data/psychiatry-courses/", "src/lib/kyp/data/diseases/", "src/lib/kyp/data/substances/"],
};

function inGroup(file) {
  const groups = groupArg === "all" ? Object.keys(GROUPS) : [groupArg];
  for (const g of groups) {
    for (const prefix of GROUPS[g]) {
      if (file.startsWith(prefix)) {
        // data root only: exclude subdirectories for the shared group
        if (prefix === "src/lib/kyp/data/") {
          const rest = file.slice(prefix.length);
          if (rest.includes("/")) continue;
        }
        return true;
      }
    }
  }
  return false;
}

/* ------------------------------------------------------------------ */
/* Protection sets                                                     */
/* ------------------------------------------------------------------ */

const E_KEYS = new Set(["source", "section", "citation", "reference", "references", "provenance", "book", "journal"]);
const C_KEYS = new Set(["name", "symbol"]); // clinical/technical labels (test-pinned)
const MACHINE_KEYS = new Set([
  "id", "slug", "href", "url", "sectionId", "afterSectionId", "anchor", "icon",
  "className", "keywords", "key", "type", "phase", "status", "grade", "sourceType",
  "dateReviewed", "lastReviewed", "stroke", "fill", "d", "path", "color", "value",
  "learningPath", "pathwayIds", "brainRegionIds", "drugClass", "drugClassLabel",
]);
const G_PATTERNS = [/Suicidal Thoughts and Behaviou?rs\s+—/];

/* Brand/tagline and other exact strings where the dash is part of the
   established identity (mirrors the PWA manifest name). */
const PROTECTED_STRINGS = new Set([
  "Know Your Pill — Medication Education Made Visual",
]);

/* -ing words that are nouns/adjectives, not participles */
const ING_NOUNS = new Set([
  "nothing", "something", "anything", "everything", "morning", "evening",
  "warning", "screening", "monitoring", "counselling", "nursing", "training",
  "writing", "reading", "learning", "teaching", "coding", "dosing", "spelling",
  "hearing", "underlying", "findings", "beginning", "surroundings", "earnings",
  "savings", "suffering", "bleeding", "swelling", "vomiting", "shaking",
  "sweating", "wheezing", "thinking", "reasoning", "feeling", "meaning",
  "understanding", "processing", "counselling", "offering", "pricing",
]);

/* ------------------------------------------------------------------ */
/* Word sets for the rule cascade                                      */
/* ------------------------------------------------------------------ */

const COMMA_WORDS = new Set([
  "because", "especially", "particularly", "including", "such", "but", "and", "or",
  "yet", "so", "which", "who", "whose", "where", "while", "though", "although",
  "since", "unlike", "despite", "given", "if", "then", "whether", "nor", "as",
  "at", "in", "on", "for", "to", "from", "with", "without", "between", "among",
  "during", "before", "after", "when", "unless", "once", "rather", "even",
  "still", "also", "instead", "similar", "akin", "equivalent", "comparable",
  "like", "one", "ones", "some", "most", "many", "all", "both", "few", "others",
  "not", "via", "through", "across", "within", "toward", "towards", "against",
  "making", "keeping", "using", "taking", "starting", "stopping", "never", "always",
]);

const SEMICOLON_ADVERBS = new Set([
  "however", "therefore", "thus", "hence", "moreover", "furthermore",
  "alternatively", "instead", "meanwhile", "nevertheless", "nonetheless",
  "consequently", "accordingly", "otherwise",
]);

const IMPERATIVES = new Set([
  "see", "take", "start", "stop", "check", "monitor", "taper", "skip", "call",
  "ask", "tell", "report", "avoid", "use", "give", "consider", "review", "watch",
  "look", "note", "remember", "keep", "wait", "ensure", "verify", "discuss",
  "follow", "read", "learn", "study", "treat", "prefer", "choose", "count",
  "add", "split", "place", "prescribe", "titrate", "screen", "refer", "admit",
  "discharge", "continue", "discontinue", "switch", "combine", "repeat", "apply",
  "document", "educate", "counsel", "warn", "inform", "observe", "examine",
  "investigate", "test", "measure", "weigh", "record", "schedule", "plan",
  "intervene", "escalate", "reassess", "increase", "decrease", "reduce", "raise",
  "lower", "maintain", "hold", "try", "attempt", "begin", "resume", "return",
  "come", "go", "send", "bring", "write", "get", "seek", "proceed",
  "don't", "do", "does", "expect", "compare", "ask",
]);

const CLAUSE_STARTERS = new Set([
  "the", "a", "an", "its", "his", "her", "their", "this", "that", "these",
  "those", "it", "they", "he", "she", "we", "you", "each", "every", "both",
  "another", "several", "many", "much", "most", "some", "any", "all", "either",
  "neither", "none", "there", "here", "what", "why", "how",
]);

const VERB_RE = /\b(is|are|was|were|has|have|had|does|do|did|makes?|means?|remains?|becomes?|comes?|goes|gets?|takes?|gives?|puts?|brings?|holds?|keeps?|turns?|shows?|reveals?|suggests?|supports?|mirrors?|reflects?|represents?|carries?|targets?|blocks?|binds?|inhibits?|increases?|decreases?|reduces?|raises?|lowers?|causes?|requires?|warrants?|deserves?|starts?|begins?|ends?|lasts?|exists?|stays?|feels?|looks?|seems?|appears?|works?|acts?|serves?|fails?|drives?|follows?|dominates?|defines?|marks?|shines?|teaches?|tells?|asks?|warns?|pays?|builds?|rescues?|wins?|loses?|gains?|protects?|prevents?|treats?|responds?|matters?)\b/;

/* ------------------------------------------------------------------ */
/* Curated replacements (exact substrings; applied before the cascade) */
/* ------------------------------------------------------------------ */

const CURATED = [
  // mission showcase + top repeated families, hand-chosen phrasing
  ["The hepatotoxic last-resort stimulant — ADHD's liver-monitoring lesson in a tablet.",
   "A hepatotoxic last-resort stimulant: an ADHD lesson in liver monitoring."],
  ["Everything — advanced reasoning", "Everything: advanced reasoning"],
  ["(2017) — facts paraphrased, not reproduced.", "(2017); facts are paraphrased, not reproduced."],
  ["No — taper gradually", "No. Taper gradually"],
  ["next dose — in that case, skip", "next dose. In that case, skip"],
  ["recall questions cold — if not", "recall questions cold. If not"],
  ["Take exactly as prescribed — same time each day.",
   "Take it exactly as prescribed, at the same time each day."],
  ["Low — weight gain not expected.", "Low: weight gain not expected."],
  ["Weight gain common — the tricyclic story.", "Weight gain common: the tricyclic story."],
  ["Common — exploited by bedtime dosing.", "Common: exploited by bedtime dosing."],
  ["As per international guidance — see Monitoring section.",
   "As per international guidance; see the Monitoring section."],
  ["Weight neutral to reducing — appetite effects common.",
   "Weight neutral to reducing: appetite effects common."],
  ["Benzodiazepine — see full guide", "Benzodiazepine: see full guide"],
  ["Different mechanism — see its guide", "Different mechanism: see its guide"],
  ["Dependence or misuse potential exists — see the warnings in this guide.",
   "Dependence or misuse potential exists; see the warnings in this guide."],
  ["First presentation — schizophrenia — psychotic manifestations",
   "First presentation: schizophrenia with psychotic manifestations"],
  ["First presentation — ", "First presentation: "],
];

/* ------------------------------------------------------------------ */
/* Tokenizer (same proven logic as census/classifier/lint)             */
/* ------------------------------------------------------------------ */

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
        if (q === "`" && src[i] === "$" && src[i + 1] === "{") {
          let d = 1; i += 2;
          while (i < n && d > 0) { if (src[i] === "{") d++; else if (src[i] === "}") d--; i++; }
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
      else if (ch === "]" || ch === "}" || ch === ")") {
        depth--;
        if (depth === 0) { spans.push([m.index, i]); break; }
      }
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

/* ------------------------------------------------------------------ */
/* Transformation core                                                  */
/* ------------------------------------------------------------------ */

function findSpacedDashes(text) {
  const out = [];
  let i = text.indexOf(EM);
  while (i !== -1) {
    const prevOk = i > 0 && /[ \t]/.test(text[i - 1]);
    const nextOk = i < text.length - 1 && /[ \t]/.test(text[i + 1]);
    out.push({ idx: i, prevOk, nextOk });
    i = text.indexOf(EM, i + 1);
  }
  return out;
}

function sentenceStartBefore(text, idx) {
  // walk back to the start of the current sentence
  let i = idx - 1;
  while (i >= 0) {
    const c = text[i];
    if (c === "." || c === "!" || c === "?" || c === ";" || c === "\n") return i + 1;
    i--;
  }
  return 0;
}

function badPunctuation(s) {
  return /(\s[,.:;]|[,.:;]{2,}|\(\s|\s\)|\(\)|:\s*—|\s{3,})/.test(s);
}

function transformContent(content, log) {
  let text = content;
  let changed = false;

  // 1. curated exact substrings
  for (const [find, replace] of CURATED) {
    if (text.includes(find)) {
      text = text.split(find).join(replace);
      changed = true;
      log.rules.push("curated");
    }
  }

  // 2 + 3. dash processing
  let guard = 0;
  while (guard++ < 12) {
    const dashes = findSpacedDashes(text).filter((d) => d.prevOk && d.nextOk);
    if (dashes.length === 0) break;

    // pairing: two dashes with no sentence break between them
    let paired = false;
    for (let a = 0; a < dashes.length - 1 && !paired; a++) {
      const d1 = dashes[a];
      for (let b = a + 1; b < dashes.length; b++) {
        const d2 = dashes[b];
        const between = text.slice(d1.idx + 1, d2.idx);
        if (/[.!?;\n]/.test(between) || between.length > 170) break;
        if (between.trim().length === 0) break;
        // apply pairing
        let t = text.slice(0, d1.idx - 1) + " (" + text.slice(d1.idx + 2, d2.idx - 1).trim() + ") " + text.slice(d2.idx + 2);
        t = t.replace(/ {2,}/g, " ");
        if (badPunctuation(t)) break;
        text = t;
        changed = true;
        log.rules.push("parenthetical");
        paired = true;
        break;
      }
    }
    if (paired) continue;

    // single dash: rule cascade (leftmost first)
    const d = dashes[0];
    const before = text.slice(sentenceStartBefore(text, d.idx), d.idx - 1);
    const after = text.slice(d.idx + 2);
    let m = after.match(/^(\d+)(?=[\s.,]|$)/) || after.match(/^([A-Za-z][A-Za-z'’-]*)/);
    const quotedLead = !m && /^['\"“‘]/.test(after);
    if (!m && !quotedLead) { log.skipped.push({ reason: "non-word continuation", snippet: text.slice(Math.max(0, d.idx - 40), d.idx + 40) }); break; }
    const W = m ? m[1].toLowerCase() : "";
    const wCap = m ? m[1] : "";

    let repl = null; let rule = null;
    const leadHasVerb = VERB_RE.test(before);
    if (quotedLead) { repl = ": "; rule = "quoted"; }
    if (quotedLead) { /* handled above */ }
    else if (/^[A-Z]/.test(wCap)) {
      // page-title pattern "Page — Description · Know Your Pill" → colon
      if (/\s·\s/.test(text)) { repl = ": "; rule = "title-colon"; }
      else { repl = ". "; rule = "sentence"; }
    }
    else if (SEMICOLON_ADVERBS.has(W)) { repl = "; "; rule = "conj-adverb"; }
    else if (COMMA_WORDS.has(W)) { repl = ", "; rule = "comma"; }
    else if (IMPERATIVES.has(W) && leadHasVerb) { repl = ". "; rule = "imperative"; }
    else if (W.length > 5 && /ing$/.test(W) && !ING_NOUNS.has(W) && leadHasVerb) { repl = ", "; rule = "participial"; }
    else {
      const segEnd = after.search(/[.!?]/);
      const cont = segEnd === -1 ? after : after.slice(0, segEnd);
      const firstWords = cont.split(/\s+/).slice(0, 9).join(" ");
      if (CLAUSE_STARTERS.has(W) && VERB_RE.test(firstWords) && leadHasVerb) {
        repl = ". "; rule = "independent";
      } else if (before.includes(":")) { repl = "; "; rule = "after-colon"; }
      else { repl = ": "; rule = "colon"; }
    }
    // dash already inside parentheses → comma (avoid ; inside parens)
    if (repl && repl !== ". " && repl !== ", ") {
      const opens = (before.match(/\(/g) || []).length;
      const closes = (before.match(/\)/g) || []).length;
      if (opens > closes) { repl = ", "; rule = "in-paren"; }
    }

    // capitalization for sentence splits
    let afterText = after;
    if (repl === ". " && /^[a-z]/.test(wCap)) {
      afterText = wCap[0].toUpperCase() + after.slice(1);
    }
    let t = text.slice(0, d.idx - 1) + repl + afterText.replace(/^ +/, "");
    if (badPunctuation(t)) {
      log.skipped.push({ reason: "would create bad punctuation", snippet: text.slice(Math.max(0, d.idx - 40), d.idx + 40) });
      break;
    }
    text = t;
    changed = true;
    log.rules.push(rule);
  }

  return changed ? text : null;
}

/* ------------------------------------------------------------------ */
/* File processing                                                      */
/* ------------------------------------------------------------------ */

const files = execSync("git ls-files", { encoding: "utf8" }).trim().split("\n").filter(Boolean);
const EXT = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs"]);
const report = { files: 0, filesChanged: 0, stringsChanged: 0, occurrences: 0, skipped: [], changes: [] };

function learnerFacing(file) {
  if (!inGroup(file)) return false;
  if (file.includes("generated")) return false;
  if (file.startsWith("src/lib/kyp/stahl-mcqs/")) return false;
  return true;
}

for (const file of files) {
  if (!learnerFacing(file)) continue;
  const ext = path.extname(file);
  if (!EXT.has(ext)) continue;
  const src = readFileSync(file, "utf8");
  if (!src.includes(EM)) continue;

  const codeSpans = tokenizeTS(src);
  const quizSpans = findQuizSpans(src, codeSpans);
  const inQuiz = (off) => quizSpans.some(([a, b]) => off >= a && off <= b);

  const edits = []; // {start, end, text, line, rule, before, after}

  for (const sp of codeSpans) {
    if (sp.kind !== "string") continue;
    if (inQuiz(sp.start)) continue;
    const key = keyBefore(src, sp.start);
    if (key && (E_KEYS.has(key) || C_KEYS.has(key) || MACHINE_KEYS.has(key))) continue;
    const q = src[sp.start];
    if (q !== src[sp.end - 1]) continue; // unterminated — skip
    const content = src.slice(sp.start + 1, sp.end - 1);
    if (!content.includes(EM)) continue;
    if (content.trim() === EM) continue; // placeholder
    if (PROTECTED_STRINGS.has(content.trim())) continue; // brand/tagline
    if (G_PATTERNS.some((re) => re.test(content))) continue; // boxed warning
    // digit—digit range check happens per-dash (spaced dashes only here)
    const log = { rules: [], skipped: [] };
    const out = transformContent(content, log);
    if (out === null) {
      if (log.skipped.length) report.skipped.push({ file, kind: "string", ...log.skipped[0] });
      continue;
    }
    const line = src.slice(0, sp.start).split("\n").length;
    edits.push({
      start: sp.start + 1, end: sp.end - 1, text: out, line,
      rule: [...new Set(log.rules)].join("+"),
      before: content.slice(0, 200), after: out.slice(0, 200),
    });
    if (log.skipped.length) report.skipped.push({ file, kind: "string", ...log.skipped[0] });
  }

  // JSX text pass (tsx only): em dashes outside strings/comments/quiz spans
  if (ext === ".tsx") {
    const jsxRe = /([\w.,!?%)\]'\u201d]) \u2014 (\d+|[A-Za-z][A-Za-z'\u2019-]*)/g;
    let m;
    while ((m = jsxRe.exec(src)) !== null) {
      const idx = m.index + m[1].length + 1; // position of EM
      if (inQuiz(idx)) continue;
      if (codeSpans.some((sp) => idx >= sp.start && idx < sp.end)) continue;
      const W = m[2].toLowerCase();
      let repl, rule;
      if (/^[A-Z]/.test(m[2])) { repl = ". "; rule = "jsx-sentence"; }
      else if (/\s\u00b7\s/.test(src.slice(m.index - 60 > 0 ? m.index - 60 : 0, m.index))) { repl = ": "; rule = "jsx-title-colon"; }
      else if (SEMICOLON_ADVERBS.has(W) || COMMA_WORDS.has(W)) { repl = ", "; rule = "jsx-comma"; }
      else if (IMPERATIVES.has(W)) { repl = ". "; rule = "jsx-imperative"; }
      else { repl = ": "; rule = "jsx-colon"; }
      const line = src.slice(0, idx).split("\n").length;
      // span covers " \u2014 " (3 chars); when sentence-splitting an
      // lowercase word, extend the span over that word to capitalize it
      if (repl === ". " && /^[a-z]/.test(m[2])) {
        edits.push({ start: idx - 1, end: idx + 2 + m[2].length, text: ". " + m[2][0].toUpperCase() + m[2].slice(1), line, rule, before: src.slice(Math.max(0, idx - 60), idx + 60), after: "JSX" });
      } else {
        edits.push({ start: idx - 1, end: idx + 2, text: repl, line, rule, before: src.slice(Math.max(0, idx - 60), idx + 60), after: "JSX" });
      }
    }
  }

  if (!edits.length) continue;
  report.files++;
  // apply edits right-to-left
  edits.sort((a, b) => b.start - a.start);
  let out = src;
  for (const e of edits) {
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
    report.occurrences++;
  }
  report.filesChanged++;
  report.changes.push({ file, editCount: edits.length, edits: edits.map((e) => ({ line: e.line, rule: e.rule, before: e.before, after: e.after })) });
  if (!DRY) writeFileSync(file, out);
}

mkdirSync("reports", { recursive: true });
const logPath = "reports/dash-transform-log.json";
const prev = existsSync(logPath) ? JSON.parse(readFileSync(logPath, "utf8")) : { changes: [], skipped: [] };
const merged = {
  meta: { group: groupArg, dry: DRY, generatedAt: new Date().toISOString(), files: report.files, filesChanged: report.filesChanged, stringsChanged: report.occurrences },
  changes: [...prev.changes, ...report.changes],
  skipped: [...prev.skipped, ...report.skipped],
};
writeFileSync(logPath, JSON.stringify(merged, null, 2));

console.log(`=== dash-cleanup-engine group=${groupArg}${DRY ? " (DRY)" : ""} ===`);
console.log(`files scanned with em: ${report.files}, files changed: ${report.filesChanged}, strings changed: ${report.occurrences}`);
console.log(`skipped-for-review: ${report.skipped.length} (see ${logPath})`);
const ruleCount = {};
for (const c of report.changes) for (const e of c.edits) for (const r of e.rule.split("+")) ruleCount[r] = (ruleCount[r] || 0) + 1;
console.log("rules used:", JSON.stringify(ruleCount));
