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
 *     "documentType": "package-insert | prescribing-information | patient-information-leaflet",
 *     "provenance": "who supplied the document, or where and when you obtained it (at least 15 characters)",
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

/** What kind of Indian document this is. Pharmacovigilance alerts and general health information are NOT accepted here. */
export const DOCUMENT_TYPES = ["package-insert", "prescribing-information", "patient-information-leaflet"] as const;
export type DocumentType = (typeof DOCUMENT_TYPES)[number];
/** Words that mark a document as a safety alert, news item or general article, which must not enter as a product label. */
const NOT_A_LABEL = /\b(pvpi|pharmacovigilance|safety alert|drug safety|adverse (?:drug )?reaction (?:report|list|alert)|press release|newsletter|advertis(?:e|ement)|blog)\b/i;
const NEGATION = /\b(?:not|never|no|avoid|without|cannot|can't|don't|do not|must not|should not)\b/i;
const CONDITION = /\b(?:if|unless|except|only|until|before|after|when|while)\b/i;

export interface IndianImportSpec {
  slug: string;
  /** package-insert, prescribing-information or patient-information-leaflet of a specific Indian product. */
  documentType: DocumentType;
  /** How the person came to hold the document: who supplied it or where it was obtained, and when. Free text, required. */
  provenance: string;
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
  if (!DOCUMENT_TYPES.includes(spec.documentType)) problems.push(`documentType must be one of ${DOCUMENT_TYPES.join(", ")} (got "${spec.documentType ?? ""}"). Safety alerts and general articles are not product labels and are not imported here`);
  if ((spec.provenance ?? "").trim().length < 15) problems.push("provenance is required: say who supplied the document or where and when it was obtained (at least 15 characters)");
  const labelText = `${spec.product ?? ""} ${spec.provenance ?? ""} ${spec.url ?? ""}`;
  if (NOT_A_LABEL.test(labelText)) problems.push(`the product, provenance or address reads like a safety alert, news item or advertisement ("${(NOT_A_LABEL.exec(labelText) ?? [""])[0]}"). Only a product's own package insert, prescribing information or leaflet is accepted`);
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
      if (NEGATION.test(c.passage) && !NEGATION.test(c.wording)) problems.push(`${tag}: the passage contains a negation or an avoidance ("not", "no", "avoid", "without" ...) that the wording drops; keep it, or the statement may say the opposite`);
      if (CONDITION.test(c.passage) && !CONDITION.test(c.wording)) problems.push(`${tag}: the passage states a condition or limit ("if", "unless", "only", "before", "after" ...) that the wording drops; keep it`);
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

interface StoredRecord {
  slug: string;
  file: string;
  product: string;
  holder: string;
  revised: string;
  formulation: string;
  importCheck?: { sha256: string };
}

/**
 * Conflicts with records already stored. The same document (same bytes) must carry the same product, holder,
 * formulation and revision; two different documents must not claim to be the same product at the same revision
 * (one of them is mislabelled). Re-importing identical metadata is fine: it replaces its own record.
 */
export function conflictsWith(existing: StoredRecord[], spec: Pick<IndianImportSpec, "slug" | "product" | "holder" | "revised" | "formulation">, sha256: string): string[] {
  const norm = (t: string) => t.toLowerCase().replace(/\s+/g, " ").trim();
  const problems: string[] = [];
  for (const r of existing.filter((x) => x.slug === spec.slug)) {
    const same = r.importCheck?.sha256 === sha256;
    const sameMeta = norm(r.product) === norm(spec.product) && norm(r.holder) === norm(spec.holder) && norm(r.formulation) === norm(spec.formulation) && norm(r.revised) === norm(spec.revised);
    if (same && !sameMeta) problems.push(`this exact document is already stored as "${r.product}" (${r.holder}, ${r.formulation}, revised ${r.revised}); the metadata given now differs. Correct one of them: a document has one product, holder, formulation and revision`);
    if (!same && sameMeta) problems.push(`a different document is already stored for the same product, holder, formulation and revision ("${r.product}", revised ${r.revised}). One of the two is mislabelled or out of date; resolve before importing`);
  }
  return problems;
}

/** Append-only record of every import attempt (accepted or rejected). It holds metadata and counts, never document text. */
function appendLog(logPath: string, entry: Record<string, unknown>) {
  const all: unknown[] = existsSync(logPath) ? JSON.parse(readFileSync(logPath, "utf8")) : [];
  writeFileSync(logPath, JSON.stringify([...all, entry], null, 1) + "\n");
}

export function importIndianLabel(spec: IndianImportSpec, out: string, today = new Date().toLocaleDateString("en-CA")) {
  const logPath = out.replace(/\.json$/, "") + ".log.json";
  const specSha = createHash("sha256").update(JSON.stringify({ ...spec, pdf: undefined })).digest("hex");
  if (!existsSync(spec.pdf)) throw new Error(`PDF not found: ${spec.pdf}`);
  let text: string;
  try {
    text = readPdfText(spec.pdf);
  } catch (e) {
    const problems = [`the PDF could not be read (${(e as Error).message.slice(0, 120)}): malformed file or pdftotext missing`];
    appendLog(logPath, { at: today, slug: spec.slug, outcome: "rejected", specSha256: specSha, problems: problems.length });
    return { ok: false as const, problems };
  }
  const sha256 = createHash("sha256").update(readFileSync(spec.pdf)).digest("hex");
  const existing: StoredRecord[] = existsSync(out) ? JSON.parse(readFileSync(out, "utf8")) : [];
  const problems = [...validateSpec(spec, text), ...conflictsWith(existing, spec, sha256)];
  if (problems.length) {
    appendLog(logPath, { at: today, slug: spec.slug, outcome: "rejected", documentSha256: sha256, specSha256: specSha, problems: problems.length });
    return { ok: false as const, problems };
  }
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
    limits: [`Document type: ${spec.documentType.replace(/-/g, " ")}. Provenance as stated by the person who imported it: ${spec.provenance.trim()}`, "Supplied by a person from an Indian document; the document itself is not stored here, only the short passages below and its SHA-256.", "It applies to the named brand and strength: other Indian brands, strengths and forms may differ."],
    accessedAt: today,
    claims: spec.claims.map((c) => [c.category, c.passage.replace(/\s+/g, " ").trim(), c.wording.trim(), c.replacesRule ? { replacesRule: c.replacesRule } : undefined].filter((x) => x !== undefined)),
    importCheck: { sha256, checkedAt: today, passagesFound: spec.claims.length, passages: spec.claims.length, readWith: "pdftotext -layout and -raw", providedBy: "a person (manual import)", documentType: spec.documentType, provenance: spec.provenance.trim(), importedAt: today },
  };
  const all: { slug: string; file: string }[] = existsSync(out) ? JSON.parse(readFileSync(out, "utf8")) : [];
  const next = [...all.filter((r) => !(r.slug === record.slug && r.file === record.file)), record];
  writeFileSync(out, JSON.stringify(next, null, 1) + "\n");
  appendLog(logPath, { at: today, slug: spec.slug, outcome: "accepted", documentSha256: sha256, specSha256: specSha, product: spec.product, claims: spec.claims.length });
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
