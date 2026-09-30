/** Investigate the 8 type mismatches + count types on both layers. */
import { psychiatryCourses } from "../../src/lib/kyp/data/psychiatry-courses";
import { loadCorpus } from "../../src/lib/oxford/loader";

const corpus = loadCorpus();
const mismatches = psychiatryCourses.filter((c) => {
  const note = corpus.bySlug.get(c.slug);
  return note && note.kind !== c.kind;
});
console.log("MISMATCHES:");
for (const c of mismatches) {
  const note = corpus.bySlug.get(c.slug)!;
  const fm = JSON.stringify(note.frontmatter).slice(0, 200);
  console.log(`\n${c.slug}: note.kind=${note.kind} course.kind=${c.kind}`);
  console.log(`  note frontmatter: ${fm}`);
  console.log(`  course title: ${c.title} | group: ${c.groupLetter}`);
}
const courseD = psychiatryCourses.filter((c) => c.kind === "disorder").length;
const courseC = psychiatryCourses.filter((c) => c.kind === "concept").length;
const noteD = [...corpus.bySlug.values()].filter((n) => n.kind === "disorder").length;
const noteC = [...corpus.bySlug.values()].filter((n) => n.kind === "concept").length;
console.log(`\ncourse layer: ${courseD} disorder / ${courseC} concept`);
console.log(`note layer:   ${noteD} disorder / ${noteC} concept`);
