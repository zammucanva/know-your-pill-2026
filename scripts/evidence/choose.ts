/**
 * Deterministic choice of which US label to read for a medicine, recorded rather than remembered:
 * never a combination product (unless the medicine itself is one), an ordinary oral tablet or capsule before any
 * other form, a non-repackager before a repackager, then the newest. Injection, patch and inhaled products are
 * never offered for a medicine unless it is on NON_ORAL_MEDICINES.
 */
import type { DiscoveryCandidate } from "@/lib/kyp/evidence/types";
import { formOf, isCombinationTitle } from "@/lib/kyp/evidence/label-form";
import { REPACKAGERS } from "./repackagers";

/** The only medicines in the registry that are themselves a fixed combination: a combination label is right for these and wrong for every other medicine. */
export const COMBINATION_MEDICINES = ["naltrexone-bupropion", "phentermine-topiramate"];
/** Medicines whose registry form is itself an injection or similar. */
export const NON_ORAL_MEDICINES = ["nalmefene", "flumazenil", "ketamine"];

const pub = (d: string) => new Date(d).getTime() || 0;
/** 0 = ordinary oral tablet/capsule, 1 = another oral form, 2 = injection, patch or inhaled product. */
export const formRank = (title: string) => (formOf(title).plainOral ? 0 : /^(injection|skin patch|inhaled or spray product)$/.test(formOf(title).label) ? 2 : 1);

export function chooseCandidates(slug: string, candidates: DiscoveryCandidate[], limit = 12): DiscoveryCandidate[] {
  const combo = COMBINATION_MEDICINES.includes(slug);
  return candidates
    .filter((c) => combo || !isCombinationTitle(c.title))
    .filter((c) => formRank(c.title) < 2 || NON_ORAL_MEDICINES.includes(slug))
    .sort((a, b) => formRank(a.title) - formRank(b.title) || Number(REPACKAGERS.test(a.title)) - Number(REPACKAGERS.test(b.title)) || pub(b.publishedDate) - pub(a.publishedDate))
    .slice(0, limit);
}

if (import.meta.main) {
  const { readFileSync } = await import("fs");
  const disc = JSON.parse(readFileSync("src/lib/kyp/evidence/data/discovery.json", "utf8")) as { slug: string; candidates: DiscoveryCandidate[] }[];
  const ids = process.argv.includes("--ids");
  for (const slug of process.argv.slice(2).filter((x) => !x.startsWith("--"))) {
    const r = disc.find((d) => d.slug === slug);
    if (ids) {
      const top = r ? chooseCandidates(slug, r.candidates, 1)[0] : undefined;
      if (top) console.log(slug, top.setid);
      continue;
    }
    const top = r ? chooseCandidates(slug, r.candidates, 3) : [];
    console.log(slug.padEnd(20), top.map((c) => `${c.setid} ${c.title.slice(0, 60)} (${c.publishedDate})`).join(" | ") || "no candidate");
  }
}
