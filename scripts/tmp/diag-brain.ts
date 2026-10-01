import { drugs } from "../../src/lib/kyp/data/drugs/index";
import { brainRegionsIntro } from "../../src/components/kyp/sections/drug/drug-brain-regions";
import { pathwaysEmptyExplainer } from "../../src/components/kyp/sections/drug/drug-neural-pathways";
const mentions = (h: string, n: string) =>
  new RegExp(`\\b${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`).test(h);

console.log("=== drugs whose intro does NOT mention own name ===");
for (const d of drugs) {
  const intro = brainRegionsIntro(d);
  if (!mentions(intro, d.genericName)) console.log(`  ${d.slug}: genericName="${d.genericName}" | intro="${intro.slice(0,120)}..."`);
}
console.log("=== drugs whose intro mentions ANOTHER drug ===");
outer: for (const d of drugs) {
  const intro = brainRegionsIntro(d);
  for (const o of drugs) {
    if (o.slug === d.slug) continue;
    if (mentions(intro, o.genericName)) { console.log(`  ${d.slug} mentions ${o.genericName}`); continue outer; }
  }
}
console.log("=== pathway explainer failures ===");
for (const d of drugs) {
  try {
    const { title, body } = pathwaysEmptyExplainer(d);
    if (!mentions(body, d.genericName)) console.log(`  ${d.slug}: body doesn't mention own name`);
  } catch (e) { console.log(`  ${d.slug}: THROWS ${(e as Error).message.slice(0,150)}`); }
}
