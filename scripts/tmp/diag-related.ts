import { drugs } from "../../src/lib/kyp/data/drugs/index";
import { resolveRelatedDrugHref } from "../../src/components/kyp/sections/drug/drug-related-drugs";
const ALL = new Set(drugs.map((d) => d.slug));
const byName = new Map(drugs.map((d) => [d.genericName.toLowerCase(), d.slug]));

console.log("=== entries where name IS a registry drug but href mismatches ===");
for (const drug of drugs) {
  for (const rd of drug.relatedDrugs) {
    const href = resolveRelatedDrugHref(rd, ALL);
    const slug = byName.get(rd.name.trim().toLowerCase());
    if (slug && href !== `/drugs/${slug}`) {
      console.log(`  [${drug.slug}] rd.name="${rd.name}" rd.slug=${rd.slug ?? "none"} -> href=${href ?? "undefined"} (registry: ${slug})`);
    }
  }
}
console.log("=== unbuilt-name test cases now resolve to ===");
for (const n of ["Trazodone","Nortriptyline","Imipramine","Varenicline"]) {
  console.log(`  "${n}" -> ${resolveRelatedDrugHref({ name: n }, ALL)}`);
}
console.log("=== false-coming-soon population (registrySlug && !rd.slug) ===");
let n = 0;
for (const drug of drugs) for (const rd of drug.relatedDrugs) {
  const slug = byName.get(rd.name.trim().toLowerCase());
  if (slug && !rd.slug) n++;
}
console.log(`  count: ${n}`);
