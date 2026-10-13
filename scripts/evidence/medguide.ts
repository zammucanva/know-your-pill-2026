/**
 * Capture the patient-directed MEDICATION GUIDE of a medicine's US label, section by section, verbatim.
 *
 *   bun scripts/evidence/medguide.ts            # every medication with a discovered label
 *   bun scripts/evidence/medguide.ts slug ...   # only these
 *
 * A Medication Guide is FDA-required text written for patients, so quoting it exactly avoids paraphrase risk.
 * It is still a US document: jurisdiction, formulation and limits are recorded with it, and nothing here says
 * it applies to an Indian product.
 *
 * Label choice is deterministic and recorded: the newest non-repackager candidate that contains a Medication
 * Guide, trying up to 6 candidates. If none has one, the medicine is recorded as having no Medication Guide
 * in the labels checked (which is not a statement that none exists).
 *
 * Writes src/lib/kyp/evidence/data/medguides.json. Sections are cut at a sentence boundary if over the cap.
 */
import { existsSync, readFileSync, writeFileSync } from "fs";
import type { DiscoveryRecord, MedGuideRecord, MedGuideSection } from "@/lib/kyp/evidence/types";
import { sections, textOf } from "./spl";
import { REPACKAGERS } from "./repackagers";
import { CLAIM_SOURCE_SETID } from "@/lib/kyp/evidence/claims";
import { getPatientGuide } from "@/lib/kyp/patient";

const DISC = "src/lib/kyp/evidence/data/discovery.json";
const OUT = "src/lib/kyp/evidence/data/medguides.json";
const CAP = 3500;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const only = process.argv.slice(2);

/** A heading is a whole line that is a question (optionally numbered), not a cross-reference inside a sentence. */
const HEADING = /^(?:\d+\.\s*)?((?:what|who|how|before|can|is|should|when|where|why)\b[^?\n]{4,180}\?)$/i;

export function splitGuide(text: string): MedGuideSection[] {
  const raw = text.split("\n").map((l) => l.replace(/^\|\s*|\s*\|$/g, "").trim()).filter(Boolean);
  // The source puts list markers ("•", "o") on their own line. Re-attach each to the line it introduces.
  // This is layout only: no word is added, removed or changed.
  const lines: string[] = [];
  for (let i = 0; i < raw.length; i++) {
    if (/^[•·o\-–]$/.test(raw[i]) && i + 1 < raw.length) {
      lines.push(`${raw[i] === "o" ? "–" : "•"} ${raw[i + 1]}`);
      i++;
    } else lines.push(raw[i]);
  }
  const out: { heading: string; body: string[] }[] = [];
  for (const l of lines) {
    const m = HEADING.exec(l);
    if (m) out.push({ heading: m[1], body: [] });
    else if (out.length) out[out.length - 1].body.push(l);
  }
  return out
    .map((s) => {
      let t = s.body.join("\n").trim();
      let truncated = false;
      if (t.length > CAP) {
        const cut = t.slice(0, CAP);
        const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf(".\n"));
        t = end > 400 ? cut.slice(0, end + 1) : cut;
        truncated = true;
      }
      return { heading: s.heading, text: t, truncated };
    })
    .filter((s) => s.text.length >= 40);
}

if (import.meta.main) {
  const disc = JSON.parse(readFileSync(DISC, "utf8")) as DiscoveryRecord[];
  const prev: MedGuideRecord[] = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : [];
  const bySlug = new Map(prev.map((r) => [r.slug, r]));
  const pub = (d: string) => new Date(d).getTime() || 0;
  // Medicines whose claims are authored by hand from a specific label keep that label: not regenerated here.
  const HAND = new Set(Object.keys(CLAIM_SOURCE_SETID));

  for (const r of disc) {
    if (only.length && !only.includes(r.slug)) continue;
    if (HAND.has(r.slug) || getPatientGuide(r.slug)) continue; // hand-authored claims, or a Patient Guide exists
    const accessedAt = new Date().toISOString().slice(0, 10);
    if (!r.candidates.length) {
      bySlug.set(r.slug, { slug: r.slug, status: "no-us-label-found", accessedAt, labelsChecked: 0, sections: [], note: "No US label was found; this says nothing about Indian product information." });
      continue;
    }
    const ordered = [...r.candidates].sort((a, b) => pub(b.publishedDate) - pub(a.publishedDate));
    const pool = [...ordered.filter((c) => !REPACKAGERS.test(c.title)), ...ordered.filter((c) => REPACKAGERS.test(c.title))].slice(0, 6);
    let rec: MedGuideRecord = { slug: r.slug, status: "no-medication-guide-in-labels-checked", accessedAt, labelsChecked: 0, sections: [], note: "None of the labels checked contained a Medication Guide. Not a statement that none exists." };
    try {
      for (const c of pool) {
        rec.labelsChecked++;
        const res = await fetch(`https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/${c.setid}.xml`, { headers: { "user-agent": "KYP-evidence-script/1.0 (educational, local)" } });
        await sleep(300);
        if (!res.ok) continue;
        const xml = await res.text();
        const mg = sections(xml).find((s) => s.loinc === "42231-1");
        if (!mg) continue;
        const secs = splitGuide(textOf(mg.body));
        if (!secs.length) continue;
        rec = { slug: r.slug, status: "medication-guide-found", labelTitle: c.title, setid: c.setid, publishedDate: c.publishedDate, version: c.version, accessedAt, labelsChecked: rec.labelsChecked, sections: secs };
        break;
      }
    } catch (e) {
      rec = { ...rec, status: "error", note: String(e) };
    }
    bySlug.set(r.slug, rec);
    console.log(r.slug.padEnd(24), rec.status.padEnd(40), rec.sections.length, rec.labelTitle?.slice(0, 50) ?? "");
  }
  writeFileSync(OUT, JSON.stringify(disc.map((d) => bySlug.get(d.slug)).filter(Boolean), null, 1) + "\n");
  console.log("wrote", OUT);
}
