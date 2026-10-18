/**
 * Builds src/lib/kyp/evidence/pil-docs-pvpi.ts from the Indian Pharmacopoeia Commission's "List of Drugs Safety
 * Alerts issued by PvPI" (a PDF the IPC publishes at ipc.gov.in). Each chosen row (drug, indication, suspected
 * reaction) becomes one statement whose passage is copied word for word from the PDF text.
 *
 *   bun scripts/evidence/pvpi-rows.ts
 *
 * It needs `pdftotext`. Rows are chosen by hand in ROWS below (medicines in the KYP registry); nothing else is
 * inferred. A row is a pharmacovigilance SIGNAL from reports: it is not a label, not a rate and not proof of cause.
 */
import { execFileSync } from "child_process";
import { mkdtempSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

const URL = "https://ipc.gov.in/images/pvpi/List-of-drug-safety-alerts-issued-by-PvPI.pdf";
const UA = "KYP-evidence-script/1.0 (educational, local)";

/** [registry slug, row number in the list, drug as written in the row, reaction as written, plain name of the reaction] */
const ROWS: [string, number, string, string, string][] = [
  ["olanzapine", 4, "Olanzapine", "Hyponatraemia", "hyponatraemia (a low sodium level in the blood)"],
  ["olanzapine", 31, "Olanzapine", "Drug Reaction with Eosinophilia and Systemic Symptoms", "drug reaction with eosinophilia and systemic symptoms (DRESS, a rare serious reaction with rash, fever and organ involvement)"],
  ["olanzapine", 99, "Olanzapine", "Hyponatremia", "hyponatraemia (a low sodium level in the blood)"],
  ["clozapine", 7, "Clozapine", "Neutropenia", "neutropenia (a low white blood cell count)"],
  ["clozapine", 92, "Clozapine", "Neural Tube Defects", "neural tube defects (birth defects of the brain and spine)"],
  ["disulfiram", 8, "Disulfiram", "Erythroderma", "erythroderma (widespread redness and peeling of the skin)"],
  ["disulfiram", 97, "Disulfiram", "Skin Hyperpigmentation", "skin hyperpigmentation (darkening of the skin)"],
  ["amisulpride", 36, "Amisulpride", "Tinnitus", "tinnitus (ringing in the ears)"],
  ["carbamazepine", 37, "Carbamazepine", "Bruxism", "bruxism (teeth grinding)"],
  ["clomipramine", 38, "Clomipramine", "Melasma", "melasma (brownish patches on the skin)"],
  ["clomipramine", 187, "Clomipramine", "Akathisia", "akathisia (an inner restlessness with an urge to keep moving)"],
  ["lurasidone", 44, "Lurasidone", "Thrombocytopenia", "thrombocytopenia (a low platelet count)"],
  ["valproate", 48, "Sodium valproate", "Psoriasis", "psoriasis (a skin condition with scaly patches)"],
  ["hydroxyzine", 52, "Hydroxyzine", "Bullous pemphigoid", "bullous pemphigoid (a skin condition with large fluid-filled blisters)"],
  ["hydroxyzine", 116, "Hydroxyzine", "Photosensitivity Reaction", "a photosensitivity reaction (skin reacting to sunlight)"],
  ["amitriptyline", 53, "Amitriptyline", "Gingival discolouration", "gingival discolouration (discoloured gums)"],
  ["quetiapine", 68, "Quetiapine", "Gynaecomastia", "gynaecomastia (breast enlargement in men)"],
  ["fluoxetine", 70, "Fluoxetine", "Urinary incontinence", "urinary incontinence (leaking urine)"],
  ["fluoxetine", 75, "Fluoxetine", "Hypoacusis (Hearing impairment)", "hypoacusis (hearing impairment)"],
  ["sertraline", 81, "Sertraline", "Maculopathy", "maculopathy (a disorder of the centre of the retina at the back of the eye)"],
  ["risperidone", 88, "Risperidone", "Rabbit Syndrome", "rabbit syndrome (rapid fine tremor of the lips and mouth)"],
  ["fluvoxamine", 106, "Fluvoxamine", "Intracranial/Pulmonary Hypertension", "intracranial or pulmonary hypertension (raised pressure inside the head or in the lung blood vessels)"],
  ["ziprasidone", 151, "Ziprasidone", "DRESS Syndrome", "DRESS syndrome (drug reaction with eosinophilia and systemic symptoms, a rare serious reaction)"],
  ["clonidine", 189, "Clonidine", "Hyponatremia", "hyponatraemia (a low sodium level in the blood)"],
  ["oxcarbazepine", 17, "Oxcarbamazepine", "Syndrome of Inappropriate Antidiuretic Hormone secretion (SIADH)", "SIADH (syndrome of inappropriate antidiuretic hormone secretion, which can lower blood sodium)"],
];

const dir = mkdtempSync(join(tmpdir(), "pvpi-"));
const res = await fetch(URL, { headers: { "user-agent": UA } });
const pdf = join(dir, "dsa.pdf");
writeFileSync(pdf, Buffer.from(await res.arrayBuffer()));
const raw = execFileSync("pdftotext", ["-raw", "-enc", "UTF-8", pdf, "-"], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
// Same normalisation as pil-verify: whitespace only.
const text = raw.replace(/\s+/g, " ");
const header = /File No\. ([A-Z0-9./-]+)\s+Date: ([^ ]+ [A-Za-z]+, \d{4})/.exec(text);

// Locate row starts " N " in order.
const starts: [number, number][] = [];
let idx = 0;
for (let k = 1; k < 260; k++) {
  const m = new RegExp(`(?<=\\s)${k} (?=[A-Z+(*0-9a-z])`).exec(text.slice(idx));
  if (!m) continue;
  starts.push([k, idx + m.index]);
  idx += m.index + m[0].length;
}
const rowText = (n: number) => {
  const i = starts.findIndex((s) => s[0] === n);
  if (i < 0) throw new Error(`row ${n} not found`);
  return text.slice(starts[i][1], i + 1 < starts.length ? starts[i + 1][1] : starts[i][1] + 400);
};

const bySlug = new Map<string, string[]>();
for (const [slug, n, drug, adr, plain] of ROWS) {
  const row = rowText(n);
  const a = row.indexOf(drug);
  const b = row.indexOf(adr, a);
  if (a < 0 || b < 0) throw new Error(`row ${n}: cannot find "${drug}" ... "${adr}" in: ${row.slice(0, 200)}`);
  const passage = row.slice(a, b + adr.length).replace(/\s+/g, " ").trim();
  const wording = `India's Pharmacovigilance Programme (PvPI) lists ${drug.toLowerCase() === "oxcarbamazepine" ? "oxcarbazepine" : drug.toLowerCase()} as a suspected cause of ${plain}. This comes from analysing reports sent to the programme: it is a safety signal, it does not say how often this happens, and it does not mean it will happen to you.`;
  const entry = `      ["side-effects", ${JSON.stringify(passage)}, ${JSON.stringify(wording)}],`;
  bySlug.set(slug, [...(bySlug.get(slug) ?? []), entry]);
}

const out: string[] = [];
out.push('import type { PilDoc } from "./pil-docs";', "");
out.push("/**", " * Statements from the Indian Pharmacopoeia Commission's list of drug safety alerts issued by the Pharmacovigilance", " * Programme of India (PvPI). Generated by scripts/evidence/pvpi-rows.ts: each passage is a table row copied from the", " * PDF. A row is a pharmacovigilance signal, not a product label. Not clinically reviewed.", " */");
out.push("export const PVPI_DOCS: PilDoc[] = [");
for (const [slug, entries] of bySlug) {
  out.push("  {", `    slug: ${JSON.stringify(slug)},`, `    file: "pvpi-dsa-list",`, `    kind: "in-safety-alert",`, `    raw: true,`, `    url: ${JSON.stringify(URL)},`,
    `    product: "Drug safety alerts issued by PvPI (not a product label)",`,
    `    title: "List of Drugs Safety Alerts issued by PvPI from March 2016 to till date (Indian Pharmacopoeia Commission)",`,
    `    holder: "Indian Pharmacopoeia Commission, Pharmacovigilance Programme of India (PvPI)",`,
    `    revised: ${JSON.stringify(header ? `${header[2]} (file ${header[1]})` : "date not read")},`,
    `    formulation: "not stated: the list names the medicine, not a product or strength",`,
    `    limits: ["This is a list of safety signals from adverse-drug-reaction reports. It names a suspected reaction, not a rate, a cause or advice for one person.", "It is not a package insert and says nothing about dose, onset, interactions or how to take the medicine."],`,
    `    accessedAt: ${JSON.stringify(new Date().toLocaleDateString("en-CA"))},`, "    claims: [", ...entries, "    ],", "  },");
}
out.push("];", "");
writeFileSync("src/lib/kyp/evidence/pil-docs-pvpi.ts", out.join("\n"));
console.log(`${ROWS.length} rows, ${bySlug.size} medicines; header:`, header?.slice(1));
