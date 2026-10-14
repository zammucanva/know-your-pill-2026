import type { SourceRecord } from "./types";

type S = Pick<SourceRecord, "jurisdiction" | "organisation" | "identifier" | "type">;

/** What kind of document this is and where it comes from, in words a reader can use. Never implies an Indian label. */
export const sourceKind = (s: S) => (s.jurisdiction === "US" ? (s.identifier.startsWith("fda.") ? "US label (archived FDA copy, not an Indian label)" : "US label") : s.jurisdiction === "UK" ? "UK patient leaflet (not an Indian label)" : s.jurisdiction === "IN" ? "Indian product label" : s.organisation);

/** The identifier, named for what it is. */
export const sourceIdLabel = (s: S) => (s.jurisdiction === "US" ? (s.identifier.startsWith("fda.") ? `Drugs@FDA document ${s.identifier.slice(4)}` : `DailyMed set id ${s.identifier}`) : s.jurisdiction === "UK" ? `Leaflet file ${s.identifier}` : s.jurisdiction === "IN" ? `Indian label record ${s.identifier}` : s.identifier);
