/** Check content completeness of the 8 reclassified concept courses + route targets of the 5 unusual hrefs. */
import { psychiatryCourses } from "../../src/lib/kyp/data/psychiatry-courses";
import { loadCorpus } from "../../src/lib/oxford/loader";

const corpus = loadCorpus();
const reclassified = [
  "personality-disorder-treatment", "dementia-management", "substance-use-overview",
  "id-treatment-services", "mental-health-law", "psychiatry-offending",
  "homicide-infanticide", "juvenile-offending",
];

console.log("=== 8 reclassified concept courses: clinical content presence ===");
for (const slug of reclassified) {
  const c = psychiatryCourses.find((x) => x.slug === slug)!;
  const note = corpus.bySlug.get(slug)!;
  console.log(
    `${slug}: note sections=${note.sections.length} | symptomClusters=${c.symptomClusters?.length ?? 0} diagCriteria=${c.diagnosticCriteria?.length ?? 0} differential=${c.differentialDiagnosis?.length ?? 0} management=${c.management?.length ?? 0} epi=${c.epidemiology ? "Y" : "N"} cases=${c.clinicalCases?.length ?? 0} examLens=${c.examLens ? "Y" : "N"}`
  );
}

console.log("\n=== concept count breakdown ===");
const concepts = psychiatryCourses.filter((c) => c.kind === "concept").map((c) => `${c.groupLetter}:${c.slug}`);
console.log(`total concepts: ${concepts.length}`);
console.log(concepts.join("\n"));
