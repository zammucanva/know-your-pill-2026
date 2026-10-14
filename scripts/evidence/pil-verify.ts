/**
 * Re-download each UK patient leaflet in src/lib/kyp/evidence/pil-docs.ts and check that every stored
 * passage really appears in it.
 *
 *   bun scripts/evidence/pil-verify.ts
 *
 * Needs `pdftotext` (poppler) on PATH. Writes src/lib/kyp/evidence/data/pil-verification.json.
 * This proves a quote is real. It does not prove the statement is correct for any patient.
 */
import { execFileSync } from "child_process";
import { createHash } from "crypto";
import { mkdtempSync, readFileSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { PIL_DOCS } from "@/lib/kyp/evidence/pil-docs";
import { htmlToText } from "./medlineplus";

const OUT = "src/lib/kyp/evidence/data/pil-verification.json";

/** Layout noise only: page markers, list bullets, curly quotes, dashes, whitespace. Words are never changed. */
export function normalise(t: string): string {
  return t
    .split("\n")
    .map((l) => l.replace(/^\s*(?:[•▪–—o-]|-)\s+/, ""))
    .join(" ")
    .replace(/Page \d+ of \d+/g, " ")
    .replace(/2023-0088319/g, " ")
    .replace(/Reference ID: \d+/g, " ")
    .replace(/This label may not be the latest approved by FDA\. For current labeling information, please visit https:\/\/www\.fda\.gov\/drugsatfda/g, " ")
    .replace(/Lof70mgin5mlSusp-PL-UK-3/g, " ")
    .replace(/REG_\d+ v\.\d+\.\d+/g, " ")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/[•▪]/g, " ")
    .replace(/\s+/g, " ")
    .replace(/ - /g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

if (import.meta.main) {
const dir = mkdtempSync(join(tmpdir(), "pil-"));
const results: Record<string, unknown>[] = [];
for (const d of PIL_DOCS) {
  const url = d.url ?? `https://www.medicines.org.uk/emc/files/pil.${d.file}.pdf`;
  const res = await fetch(url, { headers: { "user-agent": "KYP-evidence-script/1.0 (educational, local)" } });
  const buf = Buffer.from(await res.arrayBuffer());
  const pdf = join(dir, `pil.${d.file}.pdf`);
  writeFileSync(pdf, buf);
  // A web page (the Singapore formulary) is read as visible text; every other document is a PDF.
  const text = normalise(d.kind === "sg-formulary" ? htmlToText(buf.toString("utf8")) : execFileSync("pdftotext", ["-enc", "UTF-8", ...(d.kind === "fda-label" || d.kind === "ca-monograph" || d.layout === false ? [] : ["-layout"]), pdf, "-"], { encoding: "utf8" }));
  const missing = d.claims.map((c) => normalise(c[1])).filter((p) => !text.includes(p));
  results.push({
    slug: d.slug,
    file: d.file,
    url,
    httpStatus: res.status,
    sha256: createHash("sha256").update(buf).digest("hex"),
    checkedAt: new Date().toLocaleDateString("en-CA"),
    passages: d.claims.length,
    passagesFound: d.claims.length - missing.length,
    missing,
  });
  console.log(d.slug, `${d.claims.length - missing.length}/${d.claims.length}`, missing.map((m) => "\n  MISSING: " + m.slice(0, 100)).join(""));
}
writeFileSync(OUT, JSON.stringify(results, null, 1) + "\n");
}
