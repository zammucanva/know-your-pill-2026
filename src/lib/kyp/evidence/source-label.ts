import type { SourceRecord } from "./types";

type S = Pick<SourceRecord, "jurisdiction" | "organisation" | "identifier" | "type">;

/** What kind of document this is and where it comes from, in words a reader can use. Never implies an Indian label. */
export const sourceKind = (s: S) => (s.type === "indian-safety-communication" ? "Indian drug safety alert list (IPC, PvPI): a safety signal from reports, not a product label" : s.identifier.startsWith("mlp.") ? "US drug-information page for patients (MedlinePlus; not a product label, not an Indian source)" : s.jurisdiction === "US" ? (s.identifier.startsWith("fda.") ? "US label (archived FDA copy, not an Indian label)" : "US label") : s.jurisdiction === "UK" ? "UK patient leaflet (not an Indian label)" : s.jurisdiction === "IE" ? "Irish patient leaflet (not an Indian label)" : s.jurisdiction === "SG" ? "Singapore National Drug Formulary entry (not an Indian label)" : s.jurisdiction === "CA" ? "Canadian product monograph (not an Indian label)" : s.jurisdiction === "IN" ? "Indian product label" : s.organisation);

/** The identifier, named for what it is. */
export const sourceIdLabel = (s: S) => (s.type === "indian-safety-communication" ? "PvPI drug safety alert list" : s.identifier.endsWith(".pi") ? `DailyMed set id ${s.identifier.slice(0, -3)} (prescribing information)` : s.identifier.startsWith("mlp.") ? `MedlinePlus page ${s.identifier.slice(4)}` : s.jurisdiction === "US" ? (s.identifier.startsWith("fda.") ? `Drugs@FDA document ${s.identifier.slice(4)}` : `DailyMed set id ${s.identifier}`) : s.jurisdiction === "UK" ? `Leaflet file ${s.identifier}` : s.jurisdiction === "IE" ? `HPRA leaflet ${s.identifier}` : s.jurisdiction === "CA" ? `Health Canada document ${s.identifier.slice(3)}` : s.jurisdiction === "SG" ? `Singapore registration ${s.identifier.replace(/^sg\./, "")}` : s.jurisdiction === "IN" ? `Indian label record ${s.identifier}` : s.identifier);

/** Which jurisdiction note to show: a MedlinePlus page is a US information page, not a US label. */
export const jurisdictionNoteKey = (s: Pick<SourceRecord, "jurisdiction" | "identifier"> & { type?: SourceRecord["type"] }): "US" | "USINFO" | "INSAFETY" | "UK" | "IE" | "SG" | "CA" | "IN" =>
  s.type === "indian-safety-communication" ? "INSAFETY" : s.identifier.startsWith("mlp.") ? "USINFO" : s.jurisdiction === "UK" || s.jurisdiction === "IN" || s.jurisdiction === "IE" || s.jurisdiction === "SG" || s.jurisdiction === "CA" ? s.jurisdiction : "US";
