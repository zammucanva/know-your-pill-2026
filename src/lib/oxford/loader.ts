/**
 * KYP Psychiatry — corpus loader.
 *
 * Reads the canonical notes from download/kyp-notes/ at build time
 * (Next.js SSG — no runtime fs in the browser) and exposes a typed,
 * validated, cached in-memory model.
 *
 * Contract (pinned by tests/oxford-loader.test.ts and
 * scripts/validate-oxford-library.py):
 *   - 109 notes, 109 unique slugs
 *   - 82 disorder notes with sections 1-16, 27 concept notes with 1-8
 *   - 719 authored self-test MCQs across the corpus
 *   - every note has title/slug/category/source_map/priority/audiences
 *
 * The loader NEVER modifies the notes — read-only transformation.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import type {
  NoteKind,
  NoteSection,
  PsychiatryGroup,
  PsychiatryMcq,
  PsychiatryNote,
} from "./types";
import { normaliseFrontMatter, parseFrontMatter } from "./frontmatter";
import { parseBlocks, inlineToPlain } from "./markdown";

/* ─── Canonical location ──────────────────────────────────────────────
 * download/kyp-notes/ is the ONLY canonical note directory. Backups,
 * snapshots and temporary copies must never be read (see the content
 * source rule). Resolution order handles both the repo layout and the
 * test/CI working directory (process cwd = repo root).
 */
const HERE = dirname(fileURLToPath(import.meta.url));

function resolveNotesDir(): string {
  const candidates = [
    process.env.KYP_NOTES_DIR, // explicit override (tests only)
    join(process.cwd(), "download/kyp-notes"),
    resolve(HERE, "../../../download/kyp-notes"), // from src/lib/oxford
  ].filter(Boolean) as string[];
  for (const dir of candidates) {
    try {
      if (statSync(dir).isDirectory()) return dir;
    } catch {
      /* try next */
    }
  }
  throw new Error(
    "KYP Psychiatry: canonical notes directory not found (expected download/kyp-notes/)"
  );
}

const EXCLUDED_FILES = new Set(["00-topic-index.md", "template.md"]);

/* ─── Note parsing ──────────────────────────────────────────────────── */

const SECTION_RE = /^## (\d+)\. (.+)$/gm;

function parseNote(fileSlug: string, raw: string): PsychiatryNote {
  const { fm: rawFm, body } = parseFrontMatter(raw);
  const fm = normaliseFrontMatter(rawFm, fileSlug);

  // Split the body into "## N. Title" sections.
  const sectionMatches: Array<{ number: number; title: string; head: number; tail: number }> = [];
  let m: RegExpExecArray | null;
  const re = new RegExp(SECTION_RE.source, "gm");
  while ((m = re.exec(body))) {
    sectionMatches.push({
      number: parseInt(m[1], 10),
      title: m[2].trim(),
      head: m.index,
      tail: re.lastIndex,
    });
  }

  const sections: NoteSection[] = sectionMatches.map((s, idx) => {
    const end = idx + 1 < sectionMatches.length ? sectionMatches[idx + 1].head : body.length;
    const raw = body.slice(s.tail, end);
    return {
      number: s.number,
      title: s.title,
      id: `s${s.number}`,
      raw,
      blocks: parseBlocks(raw),
    };
  });

  const kind: NoteKind = sections.length === 16 ? "disorder" : "concept";
  if (sections.length !== 16 && sections.length !== 8) {
    throw new Error(
      `${fileSlug}: expected 16 or 8 sections, found ${sections.length}`
    );
  }

  // Self-test MCQs — disorder: section titled "Self-test MCQs";
  // concept: evidence + self-test share the final section and the
  // questions begin after the "Self-test MCQs" bold marker. Parsing
  // operates on the RAW section text (block rendering is separate).
  const mcqs: PsychiatryMcq[] = [];
  const selfTestSection = sections.find((s) => /self-test/i.test(s.title));
  if (selfTestSection) {
    let region = selfTestSection.raw;
    const marker = /\*\*Self-test MCQs:?\*\*/;
    const markerMatch = marker.exec(region);
    if (markerMatch) region = region.slice(markerMatch.index + markerMatch[0].length);
    mcqs.push(...parseMcqs(fm.slug, region));
  }

  // Tagline + overview from section 1 raw text.
  const firstRaw = sections[0]?.raw ?? "";
  const taglineMatch = /\*\*Tagline:\*\* (.+?)(?:\n|$)/.exec(firstRaw);
  const overviewMatch = /\*\*Overview,? in plain words?:?\*\* ([\s\S]+?)(?=\n\n|\n\*\*|$)/.exec(firstRaw);
  const tagline = taglineMatch ? inlineToPlain(taglineMatch[1]) : null;
  const overview = overviewMatch ? inlineToPlain(overviewMatch[1]) : null;

  // Reading time: prefer front matter, else compute at 200 wpm.
  const wordCount = body.split(/\s+/).filter(Boolean).length;
  const fmMinutes = fm.reading_time ? parseInt(fm.reading_time, 10) : NaN;
  const readingMinutes =
    Number.isFinite(fmMinutes) && fmMinutes > 0
      ? fmMinutes
      : Math.max(2, Math.round(wordCount / 200));

  return { frontmatter: fm, kind, sections, mcqs, tagline, overview, wordCount, readingMinutes };
}

/* ─── MCQ parser ────────────────────────────────────────────────────── */

const QUESTION_START_RE = /^\*\*(Q?\d+)\.(?:\*\*|\s)\s*(.*)$/;
const ANSWER_RE = /^\*\*Answer:\s*\(?([A-Da-d])\)?\.?\*\*\s*(.*)$/;
const BULLET_OPTION_RE = /^-\s+\(([a-d])\)\s+(.*)$/;
const LINE_OPTION_RE = /^([A-D])\.\s+(.*)$/;

/**
 * Split a run like "A. x B. y C. z D. w" (or "head text A. x B. y ...").
 * Returns null when the line holds fewer than two option markers.
 */
function splitInlineOptions(line: string): { head: string; options: string[] } | null {
  const markerRe = /\b([A-D])\.\s/g;
  const positions: Array<{ letter: string; index: number }> = [];
  let mm: RegExpExecArray | null;
  while ((mm = markerRe.exec(line))) positions.push({ letter: mm[1], index: mm.index });
  if (positions.length < 2) return null;
  const head = line.slice(0, positions[0].index).trim();
  const options: string[] = [];
  for (let p = 0; p < positions.length; p++) {
    const start = positions[p].index + 3; // skip "X. "
    const end = p + 1 < positions.length ? positions[p + 1].index : line.length;
    options.push(line.slice(start, end).trim());
  }
  return { head, options };
}

export function parseMcqs(noteSlug: string, region: string): PsychiatryMcq[] {
  const mcqs: PsychiatryMcq[] = [];
  const lines = region.split("\n");
  let i = 0;

  while (i < lines.length) {
    const qm = QUESTION_START_RE.exec(lines[i]);
    if (!qm) {
      i++;
      continue;
    }

    // Question start — the remainder may itself carry inline options.
    const questionLines: string[] = [];
    let options: string[] = [];
    let optionStyle: "inline" | "line" | "bullet" | null = null;
    let answerIndex = -1;
    const explanationLines: string[] = [];

    const inlineInStart = splitInlineOptions(qm[2]);
    if (inlineInStart) {
      questionLines.push(inlineInStart.head);
      options.push(...inlineInStart.options);
      optionStyle = "inline";
    } else {
      questionLines.push(qm[2].replace(/\*+$/, ""));
    }
    i++;

    while (i < lines.length) {
      const cur = lines[i];
      const am = ANSWER_RE.exec(cur);
      if (am && options.length >= 2) {
        answerIndex = "ABCD".indexOf(am[1].toUpperCase());
        if (am[2].trim()) explanationLines.push(am[2].trim());
        i++;
        while (i < lines.length) {
          const nxt = lines[i];
          if (QUESTION_START_RE.test(nxt) || ANSWER_RE.test(nxt)) break;
          if (nxt.trim()) explanationLines.push(nxt.trim());
          i++;
        }
        break;
      }
      if (optionStyle === null || optionStyle === "inline") {
        const inlineOpts = splitInlineOptions(cur);
        if (inlineOpts && (optionStyle === null || optionStyle === "inline")) {
          if (inlineOpts.head) questionLines.push(inlineOpts.head);
          options.push(...inlineOpts.options);
          optionStyle = "inline";
          i++;
          continue;
        }
      }
      const bm = BULLET_OPTION_RE.exec(cur);
      if (bm) {
        optionStyle = "bullet";
        options.push(bm[2].trim());
        i++;
        continue;
      }
      const lm = LINE_OPTION_RE.exec(cur);
      if (lm && optionStyle !== "bullet") {
        if (optionStyle === null || optionStyle === "line") {
          optionStyle = "line";
          options.push(lm[2].trim());
          i++;
          continue;
        }
      }
      questionLines.push(cur.replace(/\*+$/, ""));
      i++;
    }

    const question = questionLines.filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
    if (question && options.length >= 2 && answerIndex >= 0 && answerIndex < options.length) {
      mcqs.push({
        id: `psych-${noteSlug}-${mcqs.length + 1}`,
        noteSlug,
        question,
        options,
        correctIndex: answerIndex,
        explanation: explanationLines.join(" ").replace(/\s+/g, " ").trim(),
      });
    }
  }
  return mcqs;
}

/* ─── Index / groups ─────────────────────────────────────────────────── */

const GROUP_RE = /^### Group ([A-R]) — (.+)$/;

export function parseGroups(indexRaw: string): PsychiatryGroup[] {
  const groups: PsychiatryGroup[] = [];
  let current: PsychiatryGroup | null = null;
  // Index rows look like: | A1 | Delirium (`delirium`) | 4.1.1 | 2 | P1 |
  const rowRe = /^\|\s*[A-R]\d+\s*\|.*?`([a-z0-9-]+)`/;
  for (const line of indexRaw.split(/\r?\n/)) {
    const gm = GROUP_RE.exec(line);
    if (gm) {
      current = {
        letter: gm[1],
        name: gm[2].replace(/\s*\((?:available subset|select)[^)]*\)\s*/i, "").trim(),
        noteSlugs: [],
      };
      groups.push(current);
      continue;
    }
    if (current) {
      const rm = rowRe.exec(line);
      if (rm) current.noteSlugs.push(rm[1]);
    }
  }
  return groups;
}

/* ─── Public API (cached) ───────────────────────────────────────────── */

export interface CorpusModel {
  notes: PsychiatryNote[];
  bySlug: Map<string, PsychiatryNote>;
  groups: PsychiatryGroup[];
  /** Group letter per slug (from the canonical index). */
  groupBySlug: Map<string, PsychiatryGroup>;
  noteCount: number;
  mcqCount: number;
  disorderCount: number;
  conceptCount: number;
}

let cache: CorpusModel | null = null;

export function loadCorpus(): CorpusModel {
  if (cache) return cache;

  const dir = resolveNotesDir();
  const files = readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !EXCLUDED_FILES.has(f))
    .sort();

  const notes: PsychiatryNote[] = files.map((f) =>
    parseNote(f.replace(/\.md$/, ""), readFileSync(join(dir, f), "utf-8"))
  );

  const bySlug = new Map<string, PsychiatryNote>();
  for (const n of notes) {
    if (bySlug.has(n.frontmatter.slug)) {
      throw new Error(`KYP Psychiatry: duplicate slug ${n.frontmatter.slug}`);
    }
    bySlug.set(n.frontmatter.slug, n);
  }

  const indexRaw = readFileSync(join(dir, "00-topic-index.md"), "utf-8");
  const groups = parseGroups(indexRaw);
  const groupBySlug = new Map<string, PsychiatryGroup>();
  for (const g of groups) {
    for (const slug of g.noteSlugs) groupBySlug.set(slug, g);
  }

  cache = {
    notes,
    bySlug,
    groups,
    groupBySlug,
    noteCount: notes.length,
    mcqCount: notes.reduce((sum, n) => sum + n.mcqs.length, 0),
    disorderCount: notes.filter((n) => n.kind === "disorder").length,
    conceptCount: notes.filter((n) => n.kind === "concept").length,
  };
  return cache;
}

export function getAllNotes(): PsychiatryNote[] {
  return loadCorpus().notes;
}

export function getNoteBySlug(slug: string): PsychiatryNote | null {
  return loadCorpus().bySlug.get(slug) ?? null;
}

export function getAllNoteSlugs(): string[] {
  return loadCorpus().notes.map((n) => n.frontmatter.slug);
}

export function getGroups(): PsychiatryGroup[] {
  return loadCorpus().groups;
}

export function getGroupForSlug(slug: string): PsychiatryGroup | null {
  return loadCorpus().groupBySlug.get(slug) ?? null;
}

export function corpusStats(): {
  noteCount: number;
  mcqCount: number;
  disorderCount: number;
  conceptCount: number;
  groupCount: number;
} {
  const c = loadCorpus();
  return {
    noteCount: c.noteCount,
    mcqCount: c.mcqCount,
    disorderCount: c.disorderCount,
    conceptCount: c.conceptCount,
    groupCount: c.groups.length,
  };
}
