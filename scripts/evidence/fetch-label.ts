/**
 * Retrieve one DailyMed label and store VERBATIM excerpts of the sections KYP's patient content may rest on.
 *
 *   bun scripts/evidence/fetch-label.ts <slug> <setid> "<formulation note>"
 *
 * The label must be one of the candidates recorded by discover.ts (so its title, date and revision come from
 * the listing, not from this script's memory). Text is captured as published: tags removed, entities decoded,
 * whitespace collapsed, nothing reworded. Sections longer than the cap are cut and marked truncated.
 * Writes/updates src/lib/kyp/evidence/data/sources.json. It extracts text; it does not decide what is true.
 */
import { existsSync, readFileSync, writeFileSync } from "fs";
import type { DiscoveryRecord, SourceExcerpt, SourceRecord } from "@/lib/kyp/evidence/types";
import { sections, textOf } from "./spl";

const [slug, setid, formulation] = process.argv.slice(2);
if (!slug || !setid) {
  console.error("usage: bun scripts/evidence/fetch-label.ts <slug> <setid> [formulation note]");
  process.exit(2);
}
const DISC = "src/lib/kyp/evidence/data/discovery.json";
const OUT = "src/lib/kyp/evidence/data/sources.json";
const CAP = 9000;

/** Sections captured (LOINC). Others are ignored: a claim can only rest on what is stored. */
const WANTED: Record<string, string> = {
  "34066-1": "BOXED WARNING",
  "34067-9": "INDICATIONS AND USAGE",
  "34068-7": "DOSAGE AND ADMINISTRATION",
  "34070-3": "CONTRAINDICATIONS",
  "34071-1": "WARNINGS",
  "42232-9": "PRECAUTIONS",
  "43685-7": "WARNINGS AND PRECAUTIONS",
  "34073-7": "DRUG INTERACTIONS",
  "34084-4": "ADVERSE REACTIONS",
  "34076-0": "INFORMATION FOR PATIENTS",
  "42231-1": "MEDICATION GUIDE",
  "34088-5": "OVERDOSAGE",
  "34090-1": "CLINICAL PHARMACOLOGY",
};

const disc = JSON.parse(readFileSync(DISC, "utf8")) as DiscoveryRecord[];
const cand = disc.find((d) => d.slug === slug)?.candidates.find((c) => c.setid === setid);
if (!cand) {
  console.error(`set id ${setid} is not a recorded discovery candidate for ${slug}`);
  process.exit(2);
}

const res = await fetch(`https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/${setid}.xml`, { headers: { "user-agent": "KYP-evidence-script/1.0 (educational, local)" } });
if (!res.ok) {
  console.error(`retrieval failed: HTTP ${res.status}`);
  process.exit(1);
}
const xml = await res.text();
const found = sections(xml).filter((s) => WANTED[s.loinc]);
const excerpts: SourceExcerpt[] = [];
// A label may split one heading (e.g. Indications) into several same-coded sub-sections. All of them are kept, in
// label order, so a claim can rest on any; a sub-section already contained in another one is not repeated.
const byCode = new Map<string, { title: string; texts: string[] }>();
for (const s of found) {
  const t = textOf(s.body);
  const g = byCode.get(s.loinc) ?? { title: s.title || WANTED[s.loinc], texts: [] };
  if (g.texts.some((x) => x.includes(t))) continue;
  g.texts = g.texts.filter((x) => !t.includes(x));
  g.texts.push(t);
  byCode.set(s.loinc, g);
}
for (const [loinc, g] of byCode) {
  const t = g.texts.join("\n");
  excerpts.push({ id: `${slug}:${loinc}`, section: g.title, loinc, text: t.slice(0, CAP), truncated: t.length > CAP });
}

const labeler = /\[(.+)\]\s*$/.exec(cand.title)?.[1] ?? "unknown labeler";
const rec: SourceRecord = {
  id: `${slug}:us-product-label:${setid}`,
  slug,
  ingredient: slug,
  productTitle: cand.title,
  formulation: formulation || undefined,
  organisation: labeler,
  type: "us-product-label",
  jurisdiction: "US",
  title: cand.title,
  url: `https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=${setid}`,
  identifier: setid,
  publishedDate: cand.publishedDate,
  revision: cand.version,
  accessedAt: new Date().toISOString().slice(0, 10),
  excerpts,
  limitations: [
    "US FDA-approved labelling for this US product. It is not an Indian product label and Indian approval, indications, strengths and warnings may differ.",
    "Applies to the formulation named in this record only.",
  ],
};
const all: SourceRecord[] = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : [];
const next = [...all.filter((r) => r.id !== rec.id), rec].sort((a, b) => a.id.localeCompare(b.id));
writeFileSync(OUT, JSON.stringify(next, null, 1) + "\n");
console.log(`${slug}: stored ${excerpts.length} excerpts from "${cand.title}" (${excerpts.map((e) => e.loinc + (e.truncated ? "*" : "")).join(", ")})`);
