import type { SearchableItem } from "./data/types";

/**
 * The result groups the universal search UI renders — the presentation
 * contract for GroupedResults (search-modal).
 *
 * Every SearchableItem type MUST appear in exactly one group: a type
 * with no group is returned by the engine but invisible in the query
 * results — the D-1 regression (Psychiatry results existed and ranked
 * but never rendered). Pinned by tests/psychiatry-site.test.ts §86.
 *
 * This is presentation metadata only — no medical content, no ranking,
 * no index duplication — which is why it lives beside the search engine
 * module and NOT inside the content-locked src/lib/kyp/data/ tree.
 *
 * Order = display order: Medications first (the core product), then
 * the Psychiatry curriculum, then taxonomy browsing and the rest.
 */
export const SEARCH_RESULT_GROUPS: readonly {
  label: string;
  types: SearchableItem["type"][];
}[] = [
  { label: "Medications", types: ["drug"] },
  { label: "Psychiatry", types: ["psychiatry-note"] },
  { label: "Collections", types: ["collection"] },
  { label: "Diseases", types: ["disease"] },
  { label: "Substances", types: ["substance"] },
  { label: "Neuroscience", types: ["brain-region", "pathway", "neurotransmitter"] },
  { label: "Side Effects", types: ["side-effect"] },
  { label: "Drug Classes", types: ["class"] },
  { label: "Clinical & Guides", types: ["clinical", "patient-guide"] },
];
