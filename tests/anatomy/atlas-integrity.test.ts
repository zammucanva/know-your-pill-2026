import { describe, it, expect } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { brainStructureGroups } from "@/lib/anatomy/brain-registry";
import { getNormalizedSystem } from "@/lib/anatomy/kyp-normalization";
import { systems } from "@/lib/anatomy/systems";

/**
 * The anatomy registries checked against the atlas the site actually ships
 * (public/models/atlas.json and atlas-lite.json). The unit tests next to this
 * file check each registry on its own; these check the documented contracts
 * between the registries and the real model data, which is where a
 * regenerated atlas or an edited registry would silently break the viewer.
 */

interface AtlasPart {
  id: string;
  name: string;
  conceptId: string;
  system: string;
}
interface Atlas {
  parts: AtlasPart[];
  concepts: { id: string; name: string }[];
}

const readAtlas = (file: string): Atlas =>
  JSON.parse(readFileSync(join(process.cwd(), "public/models", file), "utf8"));

const full = readAtlas("atlas.json");
const lite = readAtlas("atlas-lite.json");
const conceptIds = new Set(full.concepts.map((c) => c.id));

describe("atlas — full and lite manifests", () => {
  it("both contain parts and concepts", () => {
    expect(full.parts.length).toBeGreaterThan(0);
    expect(full.concepts.length).toBeGreaterThan(0);
  });

  it("the lite atlas has the same parts, ids, systems and concepts as the full atlas (atlas-source contract)", () => {
    // Phones get the lite atlas; every registry lookup must behave the same on it.
    const key = (p: AtlasPart) => `${p.id}|${p.conceptId}|${p.system}|${p.name}`;
    expect(lite.parts.map(key)).toEqual(full.parts.map(key));
    expect(lite.concepts).toEqual(full.concepts);
  });

  it("part ids are unique", () => {
    const ids = full.parts.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("atlas — systems registry", () => {
  it("every atlas part belongs to a registered system, so each part can be toggled", () => {
    const registered = new Set<string>(systems.map((s) => s.id));
    const unknown = [...new Set(full.parts.map((p) => p.system))].filter((s) => !registered.has(s));
    expect(unknown).toEqual([]);
  });

  it("every registered system has at least one part, so no toggle is empty", () => {
    const present = new Set(full.parts.map((p) => p.system));
    for (const s of systems) expect(present.has(s.id), `${s.id} has no atlas parts`).toBe(true);
  });
});

describe("atlas — brain registry", () => {
  it("every brain group concept exists in the atlas (brain-registry rule 1)", () => {
    for (const g of brainStructureGroups) {
      const missing = g.conceptIds.filter((id) => !conceptIds.has(id));
      expect(missing, `${g.id} references concepts missing from the atlas`).toEqual([]);
    }
  });

  it("every brain group concept has at least one renderable part", () => {
    const withParts = new Set(full.parts.map((p) => p.conceptId));
    for (const g of brainStructureGroups) {
      const meshless = g.conceptIds.filter((id) => !withParts.has(id));
      expect(meshless, `${g.id} concepts with no mesh`).toEqual([]);
    }
  });
});

describe("atlas — brain and heart ventricles end up in the right system", () => {
  const partsFor = (conceptId: string) => full.parts.filter((p) => p.conceptId === conceptId);

  it("every ventricular-system part resolves to the nervous system", () => {
    const group = brainStructureGroups.find((g) => g.id === "ventricular-system")!;
    for (const id of group.conceptIds) {
      for (const part of partsFor(id)) expect(getNormalizedSystem(part), part.name).toBe("nervous");
    }
  });

  it("the heart's ventricles stay in the cardiac system", () => {
    for (const id of ["ZA-left-ventricle", "ZA-right-ventricle"]) {
      const parts = partsFor(id);
      expect(parts.length, id).toBeGreaterThan(0);
      for (const part of parts) expect(getNormalizedSystem(part), part.name).toBe("cardiac");
    }
  });
});
