/**
 * Loader contract test (runnable standalone):
 *   bun run scripts/test-oxford-loader.ts
 *
 * Validates the parsed in-memory model against the corpus contract:
 * counts, kinds, section ordering, MCQ parsing (options/answer/explanation),
 * determinism (stable ids), and index-group membership.
 */
import { corpusStats, loadCorpus, getNoteBySlug, getAllNoteSlugs } from "../src/lib/oxford/loader";

let pass = 0;
let fail = 0;
function check(name: string, ok: boolean, detail = "") {
  if (ok) {
    pass++;
    console.log(`  ✓ ${name}`);
  } else {
    fail++;
    console.log(`  ✗ ${name}${detail ? ` — ${detail}` : ""}`);
  }
}

console.log("KYP Oxford loader contract:");

const stats = corpusStats();
check("109 notes", stats.noteCount === 109, `got ${stats.noteCount}`);
check("82 disorder notes", stats.disorderCount === 82, `got ${stats.disorderCount}`);
check("27 concept notes", stats.conceptCount === 27, `got ${stats.conceptCount}`);
check("719 MCQs", stats.mcqCount === 719, `got ${stats.mcqCount}`);
check("18 groups", stats.groupCount === 18, `got ${stats.groupCount}`);

const corpus = loadCorpus();
check("109 unique slugs", new Set(getAllNoteSlugs()).size === 109);

// Every note: valid structure
let structureOk = true;
let frontmatterOk = true;
for (const note of corpus.notes) {
  const expected = note.kind === "disorder" ? 16 : 8;
  if (note.sections.length !== expected) structureOk = false;
  if (
    !note.frontmatter.title ||
    !note.frontmatter.slug ||
    !note.frontmatter.category ||
    !note.frontmatter.source_map ||
    !note.frontmatter.priority ||
    note.frontmatter.audiences.length === 0
  ) {
    frontmatterOk = false;
    console.log(`    front matter incomplete: ${note.frontmatter.slug}`);
  }
}
check("all notes have 16/8 ordered sections", structureOk);
check("all front matter complete (provenance kept)", frontmatterOk);

// MCQ shape
let mcqOk = true;
let ids = new Set<string>();
for (const note of corpus.notes) {
  for (const mcq of note.mcqs) {
    if (mcq.options.length < 2) mcqOk = false;
    if (mcq.correctIndex < 0 || mcq.correctIndex >= mcq.options.length) mcqOk = false;
    if (!mcq.question || !mcq.explanation) mcqOk = false;
    if (!mcq.id.startsWith(`psych-${note.frontmatter.slug}-`)) mcqOk = false;
    if (ids.has(mcq.id)) mcqOk = false;
    ids.add(mcq.id);
  }
}
check("every MCQ has options/valid answer/explanation + unique deterministic ids", mcqOk);

// Spot-check a known note
const schizophrenia = getNoteBySlug("schizophrenia");
check("schizophrenia parses (6 MCQs, 16 sections, tagline)", !!schizophrenia
  && schizophrenia.mcqs.length === 6
  && schizophrenia.sections.length === 16
  && !!schizophrenia.tagline);

// Concept note with shared evidence+self-test section
const couples = getNoteBySlug("couples-therapy");
check("couples-therapy (concept, shared section 8) parses with MCQs", !!couples
  && couples.kind === "concept"
  && couples.mcqs.length > 0);

// Determinism: reload produces identical ids
const again = loadCorpus();
const a = corpus.notes.flatMap((n) => n.mcqs.map((m) => m.id)).join(",");
const b = again.notes.flatMap((n) => n.mcqs.map((m) => m.id)).join(",");
check("deterministic (cached reload identical)", a === b);

// Group membership: every note in exactly one group
let groupOk = true;
for (const note of corpus.notes) {
  if (!corpus.groupBySlug.has(note.frontmatter.slug)) groupOk = false;
}
check("every note belongs to an index group", groupOk);

console.log(`\n${pass} pass / ${fail} fail`);
if (fail > 0) process.exit(1);
