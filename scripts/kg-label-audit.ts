/** KG label-consistency audit (2026-09-28 user request):
 *  every knowledge-graph node pointing at /psychiatry/<slug>/ must carry a
 *  label that is a case-insensitive prefix of the target page's title
 *  (course titles for the 9-course registry; corpus note titles for
 *  legacy targets are informational only). */
import { psychiatryCourses } from "../src/lib/kyp/data/psychiatry-courses";
import { loadCorpus } from "../src/lib/oxford/loader";

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();

const courseTitles = new Map(psychiatryCourses.map((c) => [c.slug, c.title]));
const corpus = loadCorpus();
const noteTitles = new Map<string, string>();
for (const [slug, note] of corpus.bySlug) noteTitles.set(slug, note.frontmatter.title);

let mismatch = 0;
for (const course of psychiatryCourses) {
  for (const node of course.knowledgeGraph) {
    const m = node.href.match(/^\/psychiatry\/([a-z0-9-]+)\/?$/);
    if (!m) continue;
    const slug = m[1];
    const courseTitle = courseTitles.get(slug);
    const noteTitle = noteTitles.get(slug);
    if (courseTitle) {
      // Neurotransmitter-type nodes carry the molecule name and link to the
      // signalling hub by design — only non-hub node types must title-match.
      const isHubLink = node.type === "neurotransmitter";
      if (!isHubLink && !norm(courseTitle).startsWith(norm(node.label))) {
        mismatch++;
        console.log(`MISMATCH [course-target] ${course.slug}: label "${node.label}" vs title "${courseTitle}" (${slug})`);
      }
    } else if (noteTitle) {
      if (!norm(noteTitle).startsWith(norm(node.label))) {
        console.log(`INFO    [legacy-note-target] ${course.slug}: label "${node.label}" vs note title "${noteTitle}" (${slug})`);
      }
    } else {
      console.log(`WARN    ${course.slug}: node "${node.label}" -> unknown target ${slug}`);
    }
  }
}

console.log(`\ncourse-target label mismatches: ${mismatch}`);

// group-name normalization check (hub badges)
console.log("\nnormalized group names:");
for (const g of corpus.groups) console.log(`  ${g.letter}: ${g.name} [${g.noteSlugs.length} slugs]`);
