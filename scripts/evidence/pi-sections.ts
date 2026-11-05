/**
 * Stores, word for word, the prescribing-information sections that name other medicines for the DailyMed label
 * each stored Medication Guide came from: boxed warning, contraindications, drug interactions and the
 * counselling section. Statements about other medicines can then rest on a stored passage of the same label.
 *
 *   bun scripts/evidence/pi-sections.ts [slug ...]     (no slugs: every medicine in INTERACTION_TARGETS)
 *
 * Writes src/lib/kyp/evidence/data/pi-sections.json. It extracts text; it does not decide what is true.
 */
import { readFileSync, writeFileSync } from "fs";
import type { MedGuideRecord } from "@/lib/kyp/evidence/types";
import { sections, textOf } from "./spl";

const OUT = "src/lib/kyp/evidence/data/pi-sections.json";
const CAP = 14000;
const WANTED: Record<string, string> = {
  "34066-1": "BOXED WARNING",
  "34070-3": "CONTRAINDICATIONS",
  "34073-7": "DRUG INTERACTIONS",
  "34076-0": "INFORMATION FOR PATIENTS",
};

export interface PiSectionsRecord {
  slug: string;
  setid: string;
  accessedAt: string;
  excerpts: { id: string; loinc: string; section: string; text: string; truncated: boolean }[];
}

const guides = JSON.parse(readFileSync("src/lib/kyp/evidence/data/medguides.json", "utf8")) as MedGuideRecord[];
const existing: PiSectionsRecord[] = (() => {
  try {
    return JSON.parse(readFileSync(OUT, "utf8"));
  } catch {
    return [];
  }
})();
const wanted = process.argv.slice(2);
const targets = guides.filter((g) => g.status === "medication-guide-found" && g.setid && (wanted.length ? wanted.includes(g.slug) : true));
const today = new Date().toLocaleDateString("en-CA");
const out = new Map(existing.map((r) => [r.slug, r]));
for (const g of targets) {
  const res = await fetch(`https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/${g.setid}.xml`, { headers: { "user-agent": "KYP-evidence-script/1.0 (educational, local)" } });
  if (!res.ok) {
    console.log(g.slug.padEnd(22), "HTTP", res.status);
    continue;
  }
  const xml = await res.text();
  const byCode = new Map<string, { title: string; texts: string[] }>();
  for (const s of sections(xml).filter((x) => WANTED[x.loinc])) {
    const t = textOf(s.body);
    const grp = byCode.get(s.loinc) ?? { title: s.title || WANTED[s.loinc], texts: [] };
    if (grp.texts.some((x) => x.includes(t))) continue;
    grp.texts = grp.texts.filter((x) => !t.includes(x));
    grp.texts.push(t);
    byCode.set(s.loinc, grp);
  }
  const excerpts = [...byCode].map(([loinc, grp]) => {
    const t = grp.texts.join("\n");
    return { id: `${g.slug}:pi:${loinc}`, loinc, section: grp.title, text: t.slice(0, CAP), truncated: t.length > CAP };
  });
  out.set(g.slug, { slug: g.slug, setid: g.setid!, accessedAt: today, excerpts });
  console.log(g.slug.padEnd(22), excerpts.map((e) => `${e.loinc}:${e.text.length}${e.truncated ? "*" : ""}`).join(" "));
  await new Promise((r) => setTimeout(r, 200));
}
writeFileSync(OUT, JSON.stringify([...out.values()].sort((a, b) => a.slug.localeCompare(b.slug)), null, 1) + "\n");
console.log(`stored ${out.size} labels`);
