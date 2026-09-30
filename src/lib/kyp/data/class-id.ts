/**
 * drugClassIdFromLabel — pure label → URL-id transform.
 *
 * Extracted from ./drug-taxonomy.ts (which re-exports it, so the
 * public API is unchanged) because that module imports the entire
 * 145-monograph registry at module scope to derive the taxonomy —
 * correct on the server, but CLIENT consumers of this pure function
 * (Study Mode accuracy chips, /study/analytics drill-through links)
 * must not drag the registry into their bundles. This module has zero
 * data imports; the function is a deterministic string transform.
 */

export function drugClassIdFromLabel(drugClassLabel: string): string {
  return drugClassLabel
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
