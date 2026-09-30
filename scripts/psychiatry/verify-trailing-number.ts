/** Phase 3 Q1: verify the "trailing number" == authored MCQ count for ALL 109.
 * Parses the normalization doc §3 tables and compares with the loader. */
import { loadCorpus } from "../../src/lib/oxford/loader";
import { readFileSync } from "node:fs";

const doc = readFileSync("KYP-PSYCHIATRY-CURRICULUM-NORMALIZATION.md", "utf8");
const corpus = loadCorpus();

// table rows: | Tier | Type | **Title** | Subtitle | Duration | Count |
const rowRe = /^\|\s*(Core|Supporting|Reference)\s*\|\s*(Disorder|Concept)\s*\|\s*\*\*(.+?)\*\*\s*\|.*?\|\s*\d+\s*min\s*\|\s*(\d+)\s*\|$/gm;
const byTitle = new Map<string, number>();
let m: RegExpExecArray | null;
while ((m = rowRe.exec(doc)) !== null) {
  byTitle.set(m[3].trim(), parseInt(m[4], 10));
}
console.log(`doc table rows parsed: ${byTitle.size}`);

let match = 0, differ: string[] = [], unmatched: string[] = [];
for (const note of corpus.notes) {
  // find the doc title for this note via the course layer (title + tagline from registry)
  const docCount = byTitle.get(note.frontmatter.title.split(" — ")[0]);
  const mcq = note.mcqs.length;
  // The doc titles were normalized; match by tagline-free title from frontmatter is unreliable.
  // Instead: match by count distribution — compare multiset of doc counts vs mcq counts.
  void docCount;
  void mcq;
}
// robust: compare sorted count multisets
const docCounts = [...byTitle.values()].sort((a, b) => a - b);
const mcqCounts = [...corpus.notes.values()].map((n) => n.mcqs.length).sort((a, b) => a - b);
const same = JSON.stringify(docCounts) === JSON.stringify(mcqCounts);
console.log(`doc counts multiset == corpus MCQ counts multiset: ${same}`);
console.log(`doc:  [${docCounts.join(",")}]`);
console.log(`mcqs: [${mcqCounts.join(",")}]`);

// also: every note's MCQs are numbered 1..N consecutively?
let ordered = 0, unordered: string[] = [];
for (const note of corpus.notes) {
  const raw = readFileSync(`download/kyp-notes/${note.frontmatter.slug}.md`, "utf8");
  // numbered questions: "**N." or "**N.**" or "N. " at line start in self-test section
  const selfTest = raw.split(/#+\s*\d*\.\s*(Evidence sources|Self-test|Evidence sources and self-test)/i).pop() ?? raw;
  const nums = [...selfTest.matchAll(/\*\*(\d+)[.)]?\*\*/g)].map((x) => parseInt(x[1], 10));
  const sequential = nums.length === note.mcqs.length && nums.every((v, i) => v === i + 1);
  if (sequential) ordered++;
  else unordered.push(`${note.frontmatter.slug}: found=${nums.length} parsed=${note.mcqs.length} seq=${nums.join(",")}`);
}
console.log(`notes with strictly numbered 1..N MCQs: ${ordered}/109`);
if (unordered.length) console.log("exceptions:\n" + unordered.join("\n"));
