/**
 * Which atlas manifest this device loads.
 *
 * The full atlas is ~35 MB gzip (about 2.7M triangles). Phones and slow or data-saving connections get
 * the lite atlas (same parts and ids, ~40% of the triangles). `?quality=full` or `?quality=lite` on the page URL
 * overrides the choice. The decision is made once per page load so every hook reads the same manifest.
 */
export type AtlasQuality = "full" | "lite";

let decided: AtlasQuality | null = null;

interface NetworkInformationLike {
  saveData?: boolean;
  effectiveType?: string;
}

export function atlasQuality(): AtlasQuality {
  if (decided) return decided;
  if (typeof window === "undefined") return "full";
  const forced = new URLSearchParams(window.location.search).get("quality");
  if (forced === "full" || forced === "lite") return (decided = forced);
  const conn = (navigator as Navigator & { connection?: NetworkInformationLike }).connection;
  const slow = !!conn && (conn.saveData === true || /^(slow-2g|2g|3g)$/.test(conn.effectiveType ?? ""));
  const phone = window.innerWidth < 768;
  return (decided = slow || phone ? "lite" : "full");
}

export function atlasManifestPath(): string {
  return atlasQuality() === "lite" ? "/models/atlas-lite.json" : "/models/atlas.json";
}
