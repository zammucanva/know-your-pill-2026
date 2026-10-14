import type { DashboardRow } from "./dashboard";
import { PART_ORDER, type PartId, type PartState } from "./patient-sections";

/**
 * The medicine-by-section gap matrix. Every cell is one of five content classes, derived from the part states the
 * page itself uses, so the matrix cannot disagree with the page. The classes are not a quality ranking and are never
 * added into one percentage.
 */
export type ContentClass = "patient-guide" | "source-backed" | "information-page-only" | "safety-alert-only" | "generic-or-template" | "unavailable";
export const CONTENT_CLASSES: ContentClass[] = ["patient-guide", "source-backed", "information-page-only", "safety-alert-only", "generic-or-template", "unavailable"];

export const classOf = (s: PartState): ContentClass =>
  s === "authored-guide" ? "patient-guide" : s === "source-backed" ? "source-backed" : s === "info-page-only" ? "information-page-only" : s === "safety-alert-only" ? "safety-alert-only" : s === "unavailable" ? "unavailable" : "generic-or-template";

export function gapMatrix(rows: Pick<DashboardRow, "slug" | "parts">[]) {
  const cells = rows.map((r) => ({ slug: r.slug, parts: Object.fromEntries(PART_ORDER.map((p) => [p, classOf(r.parts[p])])) as Record<PartId, ContentClass> }));
  const counts = Object.fromEntries(PART_ORDER.map((p) => [p, Object.fromEntries(CONTENT_CLASSES.map((c) => [c, cells.filter((x) => x.parts[p] === c).length]))])) as Record<PartId, Record<ContentClass, number>>;
  return { cells, counts };
}

export function gapMatrixCsv(m: ReturnType<typeof gapMatrix>): string {
  return [["slug", ...PART_ORDER].join(","), ...m.cells.map((c) => [c.slug, ...PART_ORDER.map((p) => c.parts[p])].join(","))].join("\n") + "\n";
}

export function gapMatrixMarkdown(m: ReturnType<typeof gapMatrix>): string {
  const n = m.cells.length;
  const lines = [
    "# Patient explanation: medicine-by-section gap matrix",
    "",
    `${n} medicines by nine parts. Generated from the part states the page shows (\`bun scripts/audit-four-mode-coverage.ts\`); do not edit by hand. Content classes are not a quality ranking and are never combined into one percentage. Nothing here is clinically reviewed.`,
    "",
    "| Part | " + CONTENT_CLASSES.join(" | ") + " |",
    "|---|" + CONTENT_CLASSES.map(() => "---:").join("|") + "|",
    ...PART_ORDER.map((p) => `| ${p} | ${CONTENT_CLASSES.map((c) => m.counts[p][c]).join(" | ")} |`),
    "",
    "- patient-guide: written in an authored Patient Guide.",
    "- source-backed: backed by at least one stored statement from a product label, leaflet, monograph or formulary entry that names its source (never an Indian product label unless the dashboard says so).",
    "- information-page-only: backed only by a MedlinePlus drug-information page (US National Library of Medicine): patient information, not a product label, not Indian.",
    "- safety-alert-only: backed only by an Indian PvPI safety-alert list entry (a signal from reports, not a label).",
    "- generic-or-template: guide wording, standard wording shared by many medicines, or a general direction. Not specific evidence about this medicine.",
    "- unavailable: nothing supported to show; the page says so.",
    "",
    "Per-medicine cells: `patient-section-matrix.csv`.",
    "",
  ];
  return lines.join("\n");
}
