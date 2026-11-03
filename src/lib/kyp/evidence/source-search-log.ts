/**
 * What was looked for, and found, for medicines that still have no source-backed statements. It turns "no source"
 * into a stated result: where the search went, what turned up, and why it was not used. It makes no claim
 * about the medicine itself. Dates are the day the search was made.
 *
 * "Checked" lists only searches that were actually run. "Not used" lists documents that exist but were not
 * imported, with the reason. A medicine missing from a place is not shown to be absent from it: the search
 * was by generic name through the tools named.
 */
export interface SearchLogEntry {
  date: string;
  checked: string[];
  notUsed: string[];
  next: string;
}

const D = "2026-10-14";
const BASE = ["US DailyMed labels (searched by generic name)", "MedlinePlus drug-information pages (searched by generic name)"];

export const SOURCE_SEARCH_LOG: Record<string, SearchLogEntry> = {
  blonanserin: { date: D, checked: [...BASE], notUsed: [], next: "Product information from the Japanese or Korean regulator, or an Indian insert if sold in India, has not been looked for yet." },
  perospirone: { date: D, checked: [...BASE], notUsed: [], next: "Product information from the Japanese regulator has not been looked for yet." },
  zotepine: {
    date: D,
    checked: [...BASE, "A web search for a UK leaflet for Zoleptil"],
    notUsed: [
      "UK NHS medicines listings show Zoleptil packs as discontinued, and no leaflet was found.",
      "Indian pharmacy pages for zotepine brands exist but are commercial listings, not an official insert.",
    ],
    next: "Obtain the package insert of the Indian brand being taken, then import it.",
  },
  cyamemazine: { date: D, checked: [...BASE], notUsed: [], next: "French regulator information has not been looked for yet." },
  loflazepate: { date: D, checked: [...BASE], notUsed: [], next: "French regulator information has not been looked for yet." },
  flunitrazepam: { date: D, checked: [...BASE], notUsed: [], next: "A regulator document from a country where it is sold has not been looked for yet." },
  tacrine: {
    date: D,
    checked: [...BASE, "US FDA Drugs@FDA record for Cognex (NDA 020070)"],
    notUsed: ["Drugs@FDA lists approval letters for Cognex but offers no label document, so there was no label text to quote."],
    next: "Nothing further is expected: the product was withdrawn. A person may choose a historical source.",
  },
  caprylidene: { date: D, checked: [...BASE, "DailyMed search for the brand Axona"], notUsed: [], next: "A source for this medical food, if one exists, has not been found." },
};

export const searchLogFor = (slug: string): SearchLogEntry | null => SOURCE_SEARCH_LOG[slug] ?? null;
