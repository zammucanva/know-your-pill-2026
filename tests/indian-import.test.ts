import { describe, expect, test } from "bun:test";
import { mkdtempSync, readFileSync, writeFileSync } from "fs";
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
writeFileSync(pdf, tinyPdf(["Take one tablet once a day after food.", "Do not stop taking it suddenly without asking your doctor.", "Keep out of the reach of children."]));
const spec = (over: Partial<IndianImportSpec> = {}): IndianImportSpec => ({
  slug: "sertraline",
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
});
