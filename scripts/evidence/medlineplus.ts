/**
 * Captures MedlinePlus drug-information pages (US National Library of Medicine; text from ASHP) for the
 * medicines listed in TARGETS, section by section and word for word.
 *
 *   bun scripts/evidence/medlineplus.ts            capture (writes src/lib/kyp/evidence/data/medlineplus.json)
 *   bun scripts/evidence/medlineplus.ts --verify   re-download and check every stored section is still on its page
 *
 * Why these medicines: they are the ones whose Patient explanation had no source, or no source for a part
 * (how to take it, precautions, side effects), after the DailyMed and UK/IE leaflet work. MedlinePlus is a
 * patient-directed US page, not a product label and not an Indian source. It is added only where it fills
 * a real gap, so that a medicine with a full Medication Guide is not given a second, thinner US source.
 *
 * The record keeps "no page found" as a stated result, so a gap is explained rather than silent.
 */
import { createHash } from "crypto";
import { readFileSync, writeFileSync } from "fs";
import { drugs } from "@/lib/kyp/data";

const OUT = "src/lib/kyp/evidence/data/medlineplus.json";
const UA = "KYP-evidence-script/1.0 (educational, local)";
const BASE = "https://medlineplus.gov/druginfo/";

/** Medicines with no source, plus those missing how-to-take, precautions or side effects, as measured on 2026-10-14. */
export const TARGETS = [
  "tianeptine", "l-methylfolate", "ketamine", "blonanserin", "perospirone", "sertindole", "zotepine", "cyamemazine", "mesoridazine",
  "pipothiazine", "loflazepate", "midazolam", "flunitrazepam", "pemoline", "tacrine", "caprylidene", "dextromethorphan", "lorcaserin",
  "milnacipran", "iloperidone", "risperidone", "ziprasidone", "levetiracetam", "pregabalin", "dexamphetamine", "amphetamine", "lisdexamfetamine",
  "dexmethylphenidate", "methylphenidate", "donepezil", "phentermine-topiramate", "zolpidem", "sodium-oxybate", "selegiline", "pimavanserin",
  "quetiapine", "tiagabine", "diphenhydramine", "flurazepam", "suvorexant", "atomoxetine", "modafinil",
];

/** Names MedlinePlus uses where they differ from the registry's generic name. */
const ALIAS: Record<string, string[]> = {
  dexamphetamine: ["dextroamphetamine"],
  "phentermine-topiramate": ["phentermine and topiramate"],
  "sodium-oxybate": ["sodium oxybate"],
  pipothiazine: ["pipotiazine"],
  tianeptine: ["tianeptine"],
};

const SECTION_IDS = ["boxed-warning", "why", "how", "precautions", "special-dietary", "if-i-forget", "side-effects", "overdose", "other-information"] as const;

export interface MlpSection {
  id: string;
  heading: string;
  text: string;
}
export interface MlpRecord {
  slug: string;
  status: "page-found" | "no-page-found" | "error";
  pageId?: string;
  title?: string;
  lastRevised?: string;
  accessedAt: string;
  sha256?: string;
  /** Text of the page footnote(s), e.g. "This branded product is no longer on the market." */
  footnote?: string;
  sections: MlpSection[];
  note?: string;
}

const entities: Record<string, string> = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&nbsp;": " ", "&rsquo;": "’", "&lsquo;": "‘", "&ndash;": "–", "&mdash;": "—" };
export function htmlToText(h: string): string {
  return h
    .replace(/<li[^>]*>/gi, "\n• ")
    .replace(/<\/(p|h3|ul|div)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&[a-z]+;|&#39;/gi, (e) => entities[e.toLowerCase()] ?? e)
    .replace(/[ \t]+/g, " ")
    .replace(/ ?\n ?/g, "\n")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

export function parsePage(html: string) {
  const title = /<title>([^<]*?):\s*MedlinePlus Drug Information/.exec(html)?.[1]?.trim();
  const revised = /Last Revised - <\/span><span>([^<]*)<\/span>/.exec(html)?.[1]?.trim();
  const footnote = htmlToText(/<div id="footnote">([\s\S]*?)<\/div>/.exec(html)?.[1] ?? "");
  const sections: MlpSection[] = [];
  const re = /<section><div id="([\w-]+)" class="section">[\s\S]*?<h2>([\s\S]*?)<\/h2>[\s\S]*?<div class="section-body"[^>]*>([\s\S]*?)<\/div><\/div><\/section>/g;
  for (const m of html.matchAll(re)) {
    if (!(SECTION_IDS as readonly string[]).includes(m[1])) continue;
    const text = htmlToText(m[3]);
    if (text) sections.push({ id: m[1], heading: htmlToText(m[2]).replace(/:$/, ""), text });
  }
  return { title, revised, footnote, sections };
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
const get = async (url: string) => {
  const res = await fetch(url, { headers: { "user-agent": UA } });
  return { status: res.status, text: await res.text() };
};
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function buildIndex(): Promise<Map<string, { id: string; name: string }[]>> {
  const idx = new Map<string, { id: string; name: string }[]>();
  for (const L of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    const { status, text } = await get(`${BASE}drug_${L}a.html`);
    if (status !== 200) continue;
    for (const m of text.matchAll(/<a href="\.\/meds\/(a\d+)\.html">([^<]+)<\/a>/g)) {
      const key = norm(htmlToText(m[2]));
      const list = idx.get(key) ?? [];
      if (!list.some((x) => x.id === m[1])) list.push({ id: m[1], name: htmlToText(m[2]) });
      idx.set(key, list);
    }
    await sleep(150);
  }
  return idx;
}

async function capture() {
  const today = new Date().toLocaleDateString("en-CA");
  const index = await buildIndex();
  console.log(`index: ${index.size} names`);
  const out: MlpRecord[] = [];
  for (const slug of TARGETS) {
    const drug = drugs.find((d) => d.slug === slug);
    if (!drug) throw new Error(`unknown slug ${slug}`);
    const names = [drug.genericName, slug.replace(/-/g, " "), ...(ALIAS[slug] ?? [])].map(norm);
    const hit = names.map((n) => index.get(n)).find((x) => x && x.length);
    if (!hit) {
      out.push({ slug, status: "no-page-found", accessedAt: today, sections: [], note: `No MedlinePlus drug-information page is listed under: ${[...new Set(names)].join(", ")}.` });
      console.log(slug.padEnd(24), "no page");
      continue;
    }
    const pick = hit[0];
    try {
      const { status, text } = await get(`${BASE}meds/${pick.id}.html`);
      const p = parsePage(text);
      if (status !== 200 || !p.sections.length) {
        out.push({ slug, status: "error", pageId: pick.id, accessedAt: today, sections: [], note: `HTTP ${status}, ${p.sections.length} sections read.` });
        console.log(slug.padEnd(24), "ERROR", status);
        continue;
      }
      out.push({ slug, status: "page-found", pageId: pick.id, title: p.title ?? pick.name, lastRevised: p.revised, accessedAt: today, sha256: createHash("sha256").update(text).digest("hex"), footnote: p.footnote || undefined, sections: p.sections, note: hit.length > 1 ? `More than one page listed under this name: ${hit.map((h) => h.id).join(", ")}; the first was used.` : undefined });
      console.log(slug.padEnd(24), pick.id, p.title, p.revised, p.sections.map((s) => s.id).join(","));
    } catch (e) {
      out.push({ slug, status: "error", pageId: pick.id, accessedAt: today, sections: [], note: String(e) });
    }
    await sleep(250);
  }
  writeFileSync(OUT, JSON.stringify(out, null, 1) + "\n");
  console.log(`found ${out.filter((r) => r.status === "page-found").length} of ${out.length}`);
}

async function verify() {
  const recs = JSON.parse(readFileSync(OUT, "utf8")) as MlpRecord[];
  let bad = 0;
  for (const r of recs.filter((x) => x.status === "page-found")) {
    const { status, text } = await get(`${BASE}meds/${r.pageId}.html`);
    const p = parsePage(text);
    const missing = r.sections.filter((s) => !p.sections.some((q) => q.id === s.id && q.text === s.text));
    if (status !== 200 || missing.length) bad++;
    console.log(r.slug.padEnd(24), status, `${r.sections.length - missing.length}/${r.sections.length} sections identical`, p.revised === r.lastRevised ? "" : `REVISED ${r.lastRevised} -> ${p.revised}`);
    await sleep(200);
  }
  console.log(bad ? `${bad} pages differ` : "all stored sections match their pages");
}

if (import.meta.main) await (process.argv.includes("--verify") ? verify() : capture());
