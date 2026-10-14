/**
 * Import an Indian package insert / CDSCO prescribing information that a PERSON has obtained and saved as a PDF.
 * No script can fetch these per medicine, so this is the validated path from "a person has the document" to
 * "claim-level evidence in KYP".
 *
 *   bun scripts/evidence/indian-import.ts <spec.json>
 *
 * spec.json:
 *   {
 *     "slug": "sertraline",
 *     "pdf": "C:/path/to/the-insert.pdf",
 *     "url": "https://...official address of the document (host must be in ALLOWED_SOURCE_HOSTS)",
 *     "product": "Brand X 50 mg film-coated tablets (sertraline)",
 *     "holder": "Manufacturer or marketing authorisation holder named in the document",
 *     "revised": "the document's own revision date, e.g. 03/2024, or 'date not stated in the document'",
 *     "formulation": "50 mg film-coated tablets",
 *     "claims": [ { "category": "how-to-take", "passage": "exact words from the document", "wording": "plain wording", "replacesRule": "optional" } ]
 *   }
 *
 * What it checks (and so what a pass proves): the PDF exists and its text can be read; every passage appears in
 * that text (whitespace and bullet layout aside); the URL's host is allowed; no number appears in a wording that is
 * not in its passage; the wording differs from the passage; the category is valid. It records the PDF's SHA-256 and
 * the date. It does NOT prove the statement is clinically right, that the document is current, or that it is the
 * brand a patient holds, and it never marks anything reviewed. The PDF itself is not stored (only short passages).
 *
 * Output: src/lib/kyp/evidence/data/indian-docs.json (read by pil-docs.ts as `indian-label` documents).
 */
import { execFileSync } from "child_process";
import { createHash } from "crypto";
import { existsSync, readFileSync, writeFileSync } from "fs";
import type { ClaimCategory } from "@/lib/kyp/evidence/types";
import { ALLOWED_SOURCE_HOSTS, numbersIn } from "@/lib/kyp/evidence";
import { drugs } from "@/lib/kyp/data";

/** Words that would make an imported wording read as a review or approval. Importing never does either. */
const APPROVAL_LANGUAGE = /\b(clinically (reviewed|approved|verified)|reviewed by|approved by|signed off|endorsed)\b/i;
/** The names a document about this medicine can use: generic name words and brand names (4+ letters). */
function namesFor(slug: string): string[] {
  const d = drugs.find((x) => x.slug === slug);
  if (!d) return [];
  return [...new Set([slug, d.genericName, ...(d.brandNames ?? [])].flatMap((n) => String(n).toLowerCase().split(/[^a-z]+/)).filter((w) => w.length >= 4 && !["sodium", "hydrochloride", "tablet", "tablets"].includes(w)))];
}

export interface IndianImportSpec {
  slug: string;
  pdf: string;
  url: string;
  product: string;
  holder: string;
  revised: string;
  formulation: string;
  claims: { category: ClaimCategory; passage: string; wording: string; replacesRule?: string }[];
}

const CATEGORIES: ClaimCategory[] = ["what-it-is", "used-for", "onset", "how-to-take", "precaution", "side-effects", "interactions", "stopping", "urgent-help", "monitoring", "contraindication"];
const flat = (t: string) =>
  t
    .replace(/[\u2022\u25cb\u25aa\u25cf]/g, " ")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\s+/g, " ")
    .trim();

export function validateSpec(spec: IndianImportSpec, text: string): string[] {
  const problems: string[] = [];
  if (!drugs.some((d) => d.slug === spec.slug)) problems.push(`unknown slug "${spec.slug}"`);
  let host = "";
  try {
    host = new URL(spec.url).host;
  } catch {
    problems.push(`url is not a web address: ${spec.url}`);
  }
  if (host && !ALLOWED_SOURCE_HOSTS.includes(host)) problems.push(`host ${host} is not in ALLOWED_SOURCE_HOSTS: a person must add it on purpose (src/lib/kyp/evidence/index.ts)`);
  for (const f of ["product", "holder", "revised", "formulation"] as const) if (!spec[f]?.trim()) problems.push(`${f} is required`);
  if (!spec.claims?.length) problems.push("at least one claim is required");
  const flatText = flat(text);
  if (flatText.length < 200) problems.push("the document has almost no readable text (scanned image or damaged PDF?): nothing can be checked against it");
  else {
    const names = namesFor(spec.slug);
    if (names.length && !names.some((n) => flatText.toLowerCase().includes(n))) problems.push(`the document never names ${spec.slug} (looked for: ${names.slice(0, 6).join(", ")}): wrong medicine or wrong document`);
    // Strengths in the stated formulation (for example "50 mg") must appear in the document, so a spec cannot claim a strength the document lacks.
    for (const m of spec.formulation?.matchAll(/(\d+(?:\.\d+)?)\s*(mg|mcg|g|ml|%)/gi) ?? []) {
      const re = new RegExp(`(^|[^0-9.])${m[1].replace(".", "\\.")}\\s*${m[2].replace("%", "\\%")}(?![a-z])`, "i");
      if (!re.test(flatText)) problems.push(`formulation says ${m[0]} but the document never states that strength`);
    }
  }
  if (spec.url && !/^https:\/\//i.test(spec.url)) problems.push("url must be https");
  const seen = new Set<string>();
  spec.claims?.forEach((c, i) => {
    const tag = `claim ${i + 1} (${c.category})`;
    if (!CATEGORIES.includes(c.category)) problems.push(`${tag}: unknown category`);
    if (!c.passage?.trim() || !c.wording?.trim()) problems.push(`${tag}: passage and wording are required`);
    else {
      if (!flatText.includes(flat(c.passage))) problems.push(`${tag}: passage not found in the document text: "${c.passage.slice(0, 70)}"`);
      const extra = [...numbersIn(c.wording)].filter((n) => !numbersIn(c.passage).has(n));
      if (extra.length) problems.push(`${tag}: wording has number(s) ${extra.join(", ")} that the passage does not`);
      if (flat(c.wording) === flat(c.passage)) problems.push(`${tag}: wording equals the passage; give a plain-language rewrite or leave it out`);
      if (flat(c.passage).length < 25) problems.push(`${tag}: passage is too short to identify where it came from (25 characters minimum)`);
      if (APPROVAL_LANGUAGE.test(c.wording)) problems.push(`${tag}: wording claims a review or approval; an import is never reviewed`);
      const key = `${c.category}|${flat(c.passage)}`;
      if (seen.has(key)) problems.push(`${tag}: duplicates an earlier claim (same category and passage)`);
      seen.add(key);
      if (c.passage.length > 1300) problems.push(`${tag}: passage is longer than 1300 characters; store a shorter extract`);
    }
  });
  return problems;
}

export function readPdfText(pdf: string): string {
  // Both reading orders: a passage may only survive in one of them (tables read better in raw order).
  return ["-layout", "-raw"].map((mode) => execFileSync("pdftotext", [mode, "-enc", "UTF-8", pdf, "-"], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 })).join("\n");
}

export function importIndianLabel(spec: IndianImportSpec, out: string, today = new Date().toLocaleDateString("en-CA")) {
  if (!existsSync(spec.pdf)) throw new Error(`PDF not found: ${spec.pdf}`);
  let text: string;
  try {
    text = readPdfText(spec.pdf);
  } catch (e) {
    return { ok: false as const, problems: [`the PDF could not be read (${(e as Error).message.slice(0, 120)}): malformed file or pdftotext missing`] };
  }
  const problems = validateSpec(spec, text);
  if (problems.length) return { ok: false as const, problems };
  const sha256 = createHash("sha256").update(readFileSync(spec.pdf)).digest("hex");
  const record = {
    slug: spec.slug,
    file: `in-${sha256.slice(0, 12)}`,
    kind: "indian-label",
    url: spec.url,
    product: spec.product,
    title: `${spec.product}: Indian product information`,
    holder: spec.holder,
    revised: spec.revised,
    formulation: spec.formulation,
    limits: ["Supplied by a person from an Indian document; the document itself is not stored here, only the short passages below and its SHA-256.", "It applies to the named brand and strength: other Indian brands, strengths and forms may differ."],
    accessedAt: today,
    claims: spec.claims.map((c) => [c.category, c.passage.replace(/\s+/g, " ").trim(), c.wording.trim(), c.replacesRule ? { replacesRule: c.replacesRule } : undefined].filter((x) => x !== undefined)),
    importCheck: { sha256, checkedAt: today, passagesFound: spec.claims.length, passages: spec.claims.length, readWith: "pdftotext -layout and -raw", providedBy: "a person (manual import)" },
  };
  const all: { slug: string; file: string }[] = existsSync(out) ? JSON.parse(readFileSync(out, "utf8")) : [];
  const next = [...all.filter((r) => !(r.slug === record.slug && r.file === record.file)), record];
  writeFileSync(out, JSON.stringify(next, null, 1) + "\n");
  return { ok: true as const, record };
}

if (import.meta.main) {
  const specPath = process.argv[2];
  if (!specPath) {
    console.error("usage: bun scripts/evidence/indian-import.ts <spec.json>");
    process.exit(2);
  }
  const spec = JSON.parse(readFileSync(specPath, "utf8")) as IndianImportSpec;
  const res = importIndianLabel(spec, "src/lib/kyp/evidence/data/indian-docs.json");
  if (!res.ok) {
    console.error("NOT imported:\n - " + res.problems.join("\n - "));
    process.exit(1);
  }
  console.log(`imported ${res.record.claims.length} statements for ${spec.slug} (sha256 ${res.record.importCheck.sha256.slice(0, 12)}...). Run: bun test; bun run audit:four-mode. Nothing is reviewed.`);
}
