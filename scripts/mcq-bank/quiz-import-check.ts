// Runtime sanity: import merged drug records and audit their microQuizzes.
// Extend the drug list as desired. Run: bun run scripts/mcq-bank/quiz-import-check.ts
import { sertraline } from "../../src/lib/kyp/data/drugs/sertraline";
import { alprazolam } from "../../src/lib/kyp/data/drugs/alprazolam";
import { lithium } from "../../src/lib/kyp/data/drugs/lithium";
import { clozapine } from "../../src/lib/kyp/data/drugs/clozapine";
import { fluvoxamine } from "../../src/lib/kyp/data/drugs/fluvoxamine";
for (const d of [sertraline, alprazolam, lithium, clozapine, fluvoxamine]) {
  const qs = d.microQuizzes ?? [];
  const bad = qs.filter(q => q.options.length !== 4 || q.correctIndex < 0 || q.correctIndex > 3 || !q.explanation || !q.afterSectionId);
  const ids = new Set(qs.map(q => q.id));
  console.log(`${d.slug}: ${qs.length} quizzes, uniqueIds=${ids.size}, invalid=${bad.length}, sampleNewId=${qs.find(q=>!q.id.startsWith("quiz-"))?.id}`);
}
