import { describe, expect, test } from "bun:test";
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { importIndianLabel, validateSpec, readPdfText, type IndianImportSpec } from "../scripts/evidence/indian-import";
import { deriveFromPilDocs, type PilDoc } from "@/lib/kyp/evidence/pil-docs";
import { validateEvidence } from "@/lib/kyp/evidence";

/** A tiny valid one-page PDF whose text is `lines`. Enough for pdftotext; it is a test fixture, not a real label. */
function tinyPdf(lines: string[]): Buffer {
  const content = lines.map((l, i) => `BT /F1 11 Tf 40 ${760 - i * 16} Td (${l.replace(/[()\\]/g, "")}) Tj ET`).join("\n");
  const objs = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ];
  let out = "%PDF-1.4\n";
  const offsets: number[] = [];
  objs.forEach((o, i) => {
    offsets.push(out.length);
    out += `${i + 1} 0 obj\n${o}\nendobj\n`;
  });
  const xref = out.length;
  out += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n${offsets.map((o) => String(o).padStart(10, "0") + " 00000 n \n").join("")}trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return Buffer.from(out, "latin1");
}

const dir = mkdtempSync(join(tmpdir(), "kyp-in-"));
const pdf = join(dir, "insert.pdf");
writeFileSync(pdf, tinyPdf(["Test brand sertraline tablets 50 mg. Fixture document for the importer tests, not a real label.", "This fixture exists only so the importer can be tested without a genuine Indian package insert.", "Take one tablet once a day after food.", "Do not stop taking it suddenly without asking your doctor.", "Keep out of the reach of children."]));
const spec = (over: Partial<IndianImportSpec> = {}): IndianImportSpec => ({
  slug: "sertraline",
  documentType: "package-insert",
  provenance: "Synthetic test fixture written for the importer tests; not a real Indian document",
  pdf,
  url: "https://cdscoonline.gov.in/",
  product: "Test brand 50 mg tablets (sertraline)",
  holder: "Test Pharma India",
  revised: "01/2025",
  formulation: "50 mg tablets",
  claims: [
    { category: "how-to-take", passage: "Take one tablet once a day after food.", wording: "Take one tablet once a day, after food. Your own dose is set by your prescriber." },
    { category: "stopping", passage: "Do not stop taking it suddenly without asking your doctor.", wording: "Do not stop it suddenly without asking your doctor." },
  ],
  ...over,
});

describe("manual import of an Indian package insert", () => {
  test("the fixture PDF is readable and a good spec has no problems", () => {
    const text = readPdfText(pdf);
    expect(text).toContain("once a day after food");
    expect(validateSpec(spec(), text)).toEqual([]);
  });

  test("every defect class is reported and nothing is written", () => {
    const text = readPdfText(pdf);
    const bad = validateSpec(
      spec({
        slug: "nonexistent",
        url: "https://example.com/insert.pdf",
        claims: [
          { category: "how-to-take", passage: "Take two tablets twice a day.", wording: "Take two tablets twice a day." }, // not in the document
          { category: "stopping", passage: "Do not stop taking it suddenly without asking your doctor.", wording: "Do not stop it for 14 days." }, // number not in the passage
          { category: "precaution", passage: "Keep out of the reach of children.", wording: "Keep out of the reach of children." }, // not rewritten
          { category: "nonsense" as never, passage: "Keep out of the reach of children.", wording: "Keep children away from it." },
        ],
      }),
      text
    ).join(" | ");
    expect(bad).toMatch(/unknown slug/);
    expect(bad).toMatch(/host example\.com is not in ALLOWED_SOURCE_HOSTS/);
    expect(bad).toMatch(/passage not found/);
    expect(bad).toMatch(/number\(s\) 14/);
    expect(bad).toMatch(/wording equals the passage/);
    expect(bad).toMatch(/unknown category/);
    const out = join(dir, "never.json");
    const r = importIndianLabel(spec({ url: "https://example.com/x" }), out);
    expect(r.ok).toBe(false);
    expect(() => readFileSync(out)).toThrow();
  });

  test("an accepted import becomes Indian-label evidence that the validator accepts, still not reviewed", () => {
    const out = join(dir, "indian-docs.json");
    const r = importIndianLabel(spec(), out, "2026-10-14");
    expect(r.ok).toBe(true);
    const docs = JSON.parse(readFileSync(out, "utf8")) as PilDoc[];
    expect(docs).toHaveLength(1);
    expect(docs[0].kind).toBe("indian-label");
    expect(docs[0].importCheck?.sha256).toMatch(/^[0-9a-f]{64}$/);
    expect(docs[0].importCheck?.providedBy).toMatch(/person/);
    const derived = deriveFromPilDocs(docs);
    expect(derived.sources[0].jurisdiction).toBe("IN");
    expect(derived.sources[0].type).toBe("indian-product-label");
    expect(derived.claims).toHaveLength(2);
    for (const c of derived.claims) {
      expect(c.review).toBe("not-reviewed");
      expect(c.verification).toBe("passage-found-in-source");
    }
    expect(validateEvidence(derived.sources, derived.claims)).toEqual([]);
    // importing the same document again replaces its record rather than duplicating it
    importIndianLabel(spec(), out, "2026-10-15");
    expect(JSON.parse(readFileSync(out, "utf8"))).toHaveLength(1);
  });

  test("a PDF that is not about the named medicine is rejected", () => {
    const text = readPdfText(pdf);
    const bad = validateSpec(spec({ slug: "olanzapine", formulation: "50 mg tablets" }), text).join(" | ");
    expect(bad).toMatch(/never names olanzapine/);
  });

  test("a strength the document never states is rejected", () => {
    const bad = validateSpec(spec({ formulation: "100 mg tablets" }), readPdfText(pdf)).join(" | ");
    expect(bad).toMatch(/100 mg but the document never states/);
    // 5 mg must not be satisfied by 50 mg
    expect(validateSpec(spec({ formulation: "5 mg tablets" }), readPdfText(pdf)).join(" | ")).toMatch(/5 mg but the document never states/);
  });

  test("non-https, missing metadata, fabricated passages and altered numbers are all reported", () => {
    const text = readPdfText(pdf);
    const bad = validateSpec(spec({ url: "http://cdscoonline.gov.in/", product: " ", holder: "", revised: "" }), text).join(" | ");
    expect(bad).toMatch(/url must be https/);
    expect(bad).toMatch(/product is required/);
    expect(bad).toMatch(/holder is required/);
    expect(bad).toMatch(/revised is required/);
    const fab = validateSpec(spec({ claims: [{ category: "how-to-take", passage: "Take one tablet once a day before sleep.", wording: "Take one tablet daily before sleep." }] }), text).join(" | ");
    expect(fab).toMatch(/passage not found/);
    const alt = validateSpec(spec({ claims: [{ category: "how-to-take", passage: "Take one tablet once a day after food.", wording: "Take 2 tablets once a day, after food." }] }), text).join(" | ");
    expect(alt).toMatch(/number\(s\) 2/);
    expect(validateSpec(spec({ claims: [] }), text).join(" | ")).toMatch(/at least one claim/);
  });

  test("too-short, duplicate and approval-claiming statements are rejected", () => {
    const text = readPdfText(pdf);
    const p = "Do not stop taking it suddenly without asking your doctor.";
    const bad = validateSpec(
      spec({
        claims: [
          { category: "stopping", passage: p, wording: "Ask your doctor before you stop it. This was clinically reviewed." },
          { category: "stopping", passage: p, wording: "Check with your doctor first before you stop." },
          { category: "precaution", passage: "Keep out of", wording: "Keep away from children." },
        ],
      }),
      text
    ).join(" | ");
    expect(bad).toMatch(/claims a review or approval/);
    expect(bad).toMatch(/duplicates an earlier claim/);
    expect(bad).toMatch(/too short/);
  });

  test("a damaged or text-less PDF fails cleanly and writes nothing", () => {
    const junk = join(dir, "junk.pdf");
    writeFileSync(junk, "this is not a pdf at all");
    const out = join(dir, "junk-out.json");
    const r = importIndianLabel(spec({ pdf: junk }), out);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.problems.join(" ")).toMatch(/could not be read|almost no readable text/);
    expect(() => readFileSync(out)).toThrow();
    // a valid PDF with no text layer (a scan) is also refused
    const blank = join(dir, "blank.pdf");
    writeFileSync(blank, tinyPdf([""]));
    const r2 = importIndianLabel(spec({ pdf: blank }), out);
    expect(r2.ok).toBe(false);
    expect(() => readFileSync(out)).toThrow();
    expect(() => importIndianLabel(spec({ pdf: join(dir, "missing.pdf") }), out)).toThrow(/PDF not found/);
  });

  test("an import never creates a review, approval or reviewer", () => {
    const out = join(dir, "never-approved.json");
    expect(importIndianLabel(spec(), out, "2026-10-14").ok).toBe(true);
    const raw = readFileSync(out, "utf8");
    expect(raw).not.toMatch(/"review"\s*:\s*"(reviewed|approved)/i);
    expect(raw).not.toMatch(/reviewer/i);
    const derived = deriveFromPilDocs(JSON.parse(raw) as PilDoc[]);
    expect(derived.claims.every((c) => c.review === "not-reviewed")).toBe(true);
    expect(derived.sources.length).toBeGreaterThan(0);
  });

  test("two different documents for one medicine are both kept; the same document twice is not duplicated", () => {
    const out = join(dir, "two.json");
    importIndianLabel(spec(), out);
    const pdf2 = join(dir, "insert2.pdf");
    writeFileSync(pdf2, tinyPdf(["Another brand of sertraline tablets 50 mg. Fixture document for the importer tests, not a real label.", "This second fixture has different text so it hashes differently from the first.", "Keep out of the reach of children."]));
    importIndianLabel(spec({ pdf: pdf2, product: "Another brand 50 mg tablets (sertraline)", revised: "06/2025", claims: [{ category: "precaution", passage: "Keep out of the reach of children.", wording: "Store it where children cannot reach it." }] }), out);
    importIndianLabel(spec(), out);
    expect(JSON.parse(readFileSync(out, "utf8"))).toHaveLength(2);
  });

  test("the document type must be a product's own insert, leaflet or prescribing information", () => {
    const text = readPdfText(pdf);
    const bad = validateSpec(spec({ documentType: "safety-alert" as never }), text).join(" | ");
    expect(bad).toMatch(/documentType must be one of package-insert, prescribing-information, patient-information-leaflet/);
    expect(validateSpec(spec({ documentType: "patient-information-leaflet" }), text)).toEqual([]);
  });
  test("provenance is required, and safety alerts, news and advertisements are refused as product labels", () => {
    const text = readPdfText(pdf);
    expect(validateSpec(spec({ provenance: "" }), text).join()).toMatch(/provenance is required/);
    expect(validateSpec(spec({ provenance: "from a friend" }), text).join()).toMatch(/provenance is required/);
    for (const product of ["PvPI drug safety alert for sertraline", "Pharmacovigilance newsletter", "Sertraline advertisement"]) {
      expect(validateSpec(spec({ product }), text).join(), product).toMatch(/reads like a safety alert, news item or advertisement/);
    }
  });
  test("a wording that drops a negation or a condition from its passage is refused", () => {
    const text = readPdfText(pdf);
    const dropNeg = validateSpec(spec({ claims: [{ category: "stopping", passage: "Do not stop taking it suddenly without asking your doctor.", wording: "Stop it slowly and ask your doctor." }] }), text).join(" | ");
    expect(dropNeg).toMatch(/negation or an avoidance/);
    const dropCond = validateSpec(spec({ claims: [{ category: "how-to-take", passage: "Take one tablet once a day after food.", wording: "Take one tablet once a day. Your own dose is set by your prescriber." }] }), text).join(" | ");
    expect(dropCond).toMatch(/drops; keep it|drops a condition|condition or limit/);
  });
  test("conflicts with stored records: same document with other metadata, and two documents for one product and revision", () => {
    const out = join(dir, "conflict.json");
    expect(importIndianLabel(spec(), out, "2026-10-14").ok).toBe(true);
    // the very same document, relabelled with another formulation
    const relabelled = importIndianLabel(spec({ formulation: "100 mg tablets" }), out, "2026-10-14");
    expect(relabelled.ok).toBe(false);
    // a different document claiming the same product, holder, formulation and revision
    const pdf3 = join(dir, "insert3.pdf");
    writeFileSync(pdf3, tinyPdf(["Test brand sertraline tablets 50 mg. A different fixture document with other text entirely.", "Keep out of the reach of children and store in a cool dry place for the whole shelf life."]));
    const twin = importIndianLabel(spec({ pdf: pdf3, claims: [{ category: "precaution", passage: "Keep out of the reach of children and store in a cool dry place", wording: "Store it in a cool dry place where children cannot reach it." }] }), out, "2026-10-14");
    expect(twin.ok).toBe(false);
    if (!twin.ok) expect(twin.problems.join(" ")).toMatch(/different document is already stored for the same product/);
    if (!relabelled.ok) expect(relabelled.problems.join(" ")).toMatch(/this exact document is already stored as/);
    expect(JSON.parse(readFileSync(out, "utf8"))).toHaveLength(1);
  });
  test("every attempt is logged (accepted and rejected) with hashes and counts, never document text", () => {
    const out = join(dir, "audit.json");
    importIndianLabel(spec({ url: "https://example.com/x" }), out, "2026-10-14"); // rejected
    importIndianLabel(spec(), out, "2026-10-15"); // accepted
    const log = JSON.parse(readFileSync(join(dir, "audit.log.json"), "utf8")) as Record<string, unknown>[];
    expect(log.map((e) => e.outcome)).toEqual(["rejected", "accepted"]);
    for (const e of log) {
      expect(String(e.documentSha256)).toMatch(/^[0-9a-f]{64}$/);
      expect(String(e.specSha256)).toMatch(/^[0-9a-f]{64}$/);
    }
    const raw = readFileSync(join(dir, "audit.log.json"), "utf8");
    expect(raw).not.toContain("once a day after food");
    expect(raw).not.toMatch(/reviewer|approved/i);
  });
  test("the stored record keeps document type and provenance, and shows them in the limits a reader sees", () => {
    const out = join(dir, "meta.json");
    importIndianLabel(spec({ documentType: "prescribing-information" }), out, "2026-10-14");
    const [rec] = JSON.parse(readFileSync(out, "utf8")) as PilDoc[];
    expect(rec.importCheck?.documentType).toBe("prescribing-information");
    expect(rec.importCheck?.provenance).toMatch(/Synthetic test fixture/);
    expect(rec.limits.join(" ")).toMatch(/Document type: prescribing information\. Provenance/);
    expect(rec.importCheck?.importedAt).toBe("2026-10-14");
  });
});


import { acquisitionReport, IMPORT_RULES } from "@/lib/kyp/evidence/indian-acquisition";
describe("the Indian source acquisition report", () => {
  const md = acquisitionReport({ storedImports: [], logEntries: [] });
  test("it states there are no stored Indian labels and lists the requests without inventing a document", () => {
    expect(md).toContain("Indian product-label records stored: **0**");
    expect(md).toContain("Patient Guide medicines (12)");
    expect(md).toContain("Medicines with no verified product information (8)");
    for (const m of ["blonanserin", "perospirone", "zotepine", "cyamemazine", "loflazepate", "flunitrazepam", "tacrine", "caprylidene"]) expect(md).toContain(m);
    expect(md).not.toMatch(/approved by|reviewed by/i);
  });
  test("its rules match what the importer actually enforces", () => {
    const src = readFileSync("scripts/evidence/indian-import.ts", "utf8");
    for (const needle of ["DOCUMENT_TYPES", "provenance is required", "conflictsWith", "appendLog", "NEGATION", "CONDITION", "never names"]) expect(src).toContain(needle);
    expect(IMPORT_RULES.length).toBeGreaterThanOrEqual(8);
  });
  test("the saved report equals the generator's output for the stored data", () => {
    const read = (p: string) => (existsSync(p) ? JSON.parse(readFileSync(p, "utf8")) : []);
    const now = acquisitionReport({ storedImports: read("src/lib/kyp/evidence/data/indian-docs.json"), logEntries: read("src/lib/kyp/evidence/data/indian-docs.log.json") });
    expect(readFileSync("reports/medication-audit/indian-source-acquisition-report.md", "utf8").replace(/\r\n/g, "\n")).toBe(now);
  });
});
