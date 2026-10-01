import { buildQuestionPool } from "../../src/lib/kyp/custom-test/engine";
const ALL = (await import("../../src/lib/kyp/data/drugs/index")).drugs.map(d => d.slug);
const pool = buildQuestionPool(ALL);
console.log("pool size:", pool.length);
const bad = pool.filter(q => q.options.length !== 4);
console.log("questions without exactly 4 options:", bad.length);
for (const q of bad.slice(0, 12)) {
  console.log(`  [${q.templateId}] ${q.identity}`);
  console.log(`    opts: ${JSON.stringify(q.options.map(o => o.slice(0, 40)))}`);
}
// also check duplicates within options
const dupOpts = pool.filter(q => new Set(q.options).size !== q.options.length);
console.log("questions with duplicate options:", dupOpts.length);
for (const q of dupOpts.slice(0, 8)) console.log(`  [${q.templateId}] ${q.identity}`);
