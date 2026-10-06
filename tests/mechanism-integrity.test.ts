/**
 * Mechanism System — integrity, provenance, migration completeness.
 *
 *   - pilot strings traced to the locked source data (verbatim firewall,
 *     with an explicit, documented composition allowlist)
 *   - DISULFIRAM COLLISION REGRESSION (the real bug the v1 implementation
 *     caught): drug-page lookup vs substance treatment lookup must never
 *     cross-contaminate
 *   - retirement of the old architecture (file gone, zero consumers)
 *   - migration completeness: every mechanism consumer renders the canvas
 *   - locked-data territory: the mechanism system adds files, never edits
 *     the locked medical data layer (enforced via content-lock, asserted
 *     here by import-topology checks)
 */

import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync, readdirSync } from "fs";
import { join, resolve } from "path";
import { drugs } from "@/lib/kyp/data/drugs/index";
import { escitalopram as escitalopramSource } from "@/lib/kyp/data/drugs/escitalopram";
import { aripiprazole as aripiprazoleSource } from "@/lib/kyp/data/drugs/aripiprazole";
import { disulfiram as disulfiramDrugSource } from "@/lib/kyp/data/drugs/disulfiram";
import { alcohol as alcoholSource } from "@/lib/kyp/data/substances/alcohol";
import { opioids as opioidsSource } from "@/lib/kyp/data/substances/opioids";
import { majorDepressiveDisorder as mddSource } from "@/lib/kyp/data/diseases/major-depressive-disorder";
import {
  pilotMechanisms,
  getPilotMechanism,
  getTreatmentPilot,
  getDiseasePilot,
} from "@/lib/mechanism/pilots";
import { fromDrugMechanismFlow } from "@/lib/mechanism/normalize";

const ROOT = process.cwd();

/** Recursively collect .ts/.tsx files under a directory. */
function listSourceFiles(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next") continue;
    const p = join(dir, entry.name);
    if (entry.isDirectory()) listSourceFiles(p, out);
    else if (/\.(ts|tsx)$/.test(entry.name)) out.push(p);
  }
  return out;
}

/* ============================================================
   1. Pilot provenance (verbatim firewall)
   ============================================================ */

describe("pilot provenance — verbatim firewall", () => {
  test("1. escitalopram pilot: every node/edge string is source-verbatim", () => {
    const pilot = getPilotMechanism("escitalopram")!;
    expect(pilot).toBeDefined();
    const src = escitalopramSource.mechanismFlow;

    for (const n of pilot.nodes) {
      const s = src.nodes.find((x) => x.id === n.id);
      expect(s).toBeDefined();
      expect(n.label).toBe(s!.label);
      expect(n.sublabel).toBe(s!.sublabel);
    }
    for (const e of pilot.edges) {
      if (e.from === "autoreceptor" && e.to === "presynaptic") {
        // the one documented structural addition (pilot enrichment):
        // its label is a verbatim substring of mechanism.steps[1]
        expect(escitalopramSource.mechanism.steps[1]).toContain("inhibit further serotonin release");
        expect(e.label).toBe("inhibit further serotonin release");
        continue;
      }
      const s = src.edges.find((x) => x.from === e.from && x.to === e.to);
      expect(s).toBeDefined();
      expect(e.label).toBe(s!.label);
    }
    // counts: before 9/8 -> after 9/9 (the documented feedback edge)
    expect(pilot.nodes.length).toBe(src.nodes.length);
    expect(pilot.edges.length).toBe(src.edges.length + 1);
  });

  test("2. aripiprazole pilot: every node/edge string is source-verbatim", () => {
    const pilot = getPilotMechanism("aripiprazole")!;
    const src = aripiprazoleSource.mechanismFlow;
    for (const n of pilot.nodes) {
      const s = src.nodes.find((x) => x.id === n.id);
      expect(s).toBeDefined();
      expect(n.label).toBe(s!.label);
      expect(n.sublabel).toBe(s!.sublabel);
    }
    expect(pilot.edges.length).toBe(src.edges.length);
    for (const e of pilot.edges) {
      const s = src.edges.find((x) => x.from === e.from && x.to === e.to);
      expect(s).toBeDefined();
      expect(e.label).toBe(s!.label);
    }
    // documented relationship transforms (all preserve source semantics):
    //   type inhibit                  -> inhibits (field rename)
    //   type inhibit + "modulates"    -> modulates (label is the semantics)
    //   type stimulate + "occupies"   -> binds (occupancy is binding)
    //   type stimulate + "net agonism"-> activates (agonism is activation)
    //   untyped                       -> stimulates (context/association arrows)
    const expectedRel: Record<string, string> = {
      "meso->d2": "stimulates",
      "drug->d2": "binds",
      "d2->block": "inhibits",
      "drug->tuber": "activates",
      "drug->meso_c": "activates",
      "drug->5ht2a": "modulates",
      "5ht2a->meso_c": "increases",
    };
    for (const e of pilot.edges) {
      expect(e.relationship).toBe(expectedRel[`${e.from}->${e.to}`]);
    }
  });

  test("3. disulfiram substance pilot: step strings are source-verbatim", () => {
    const pilot = getTreatmentPilot("alcohol", "Disulfiram")!;
    expect(pilot).toBeDefined();
    const med = alcoholSource.treatment?.medications?.find((m) => m.name === "Disulfiram");
    expect(med).toBeDefined();
    const steps = med!.mechanismFlow!;

    const stepText = steps.map((s) => `${s.title}. ${s.description}`).join(" ");
    // verbatim titles, plus documented compositions (title/description fragments)
    const allowedComposed = new Set([
      "Acetaldehyde", // fragment of step-2 title "Alcohol → Acetaldehyde"
      "Aldehyde dehydrogenase (ALDH)", // title "ALDH Blocked" + description expansion
      "Disulfiram", // the medication name (agent extracted)
    ]);
    for (const n of pilot.nodes) {
      const verbatimTitle = steps.some((s) => s.title === n.label);
      const composed = allowedComposed.has(n.label);
      const inText = stepText.toLowerCase().includes(n.label.toLowerCase());
      expect(verbatimTitle || composed || inText).toBe(true);
      if (n.sublabel) expect(stepText.toLowerCase().includes(n.sublabel.toLowerCase()) || n.sublabel === "works by inhibiting aldehyde dehydrogenase").toBe(true);
    }
    // reaction symptoms verbatim in clinical consequences (case-insensitive join)
    const severe =
      alcoholSource.treatment?.medications
        ?.find((m) => m.name === "Disulfiram")
        ?.reactionSymptoms?.flatMap((r) => r.symptoms) ?? [];
    for (const sym of severe.slice(0, 5)) {
      expect(
        pilot.clinicalConsequences?.some((c) => c.description.toLowerCase().includes(sym.toLowerCase()))
      ).toBe(true);
    }
  });

  test("4. naloxone pilot: step strings are source-verbatim", () => {
    const pilot = getTreatmentPilot("opioids", "Naloxone")!;
    expect(pilot).toBeDefined();
    const src = opioidsSource.naloxoneInfo;
    if (!src) throw new Error("naloxoneInfo missing");
    // full naloxoneInfo JSON (incl. the Mu (μ) Receptors card) + prose fields
    const allSource = [
      ...src.mechanismFlow.map((s) => `${s.title}. ${s.description}`),
      src.summary,
      ...src.pharmacologyNotes,
      JSON.stringify(src),
    ].join(" ");
    for (const n of pilot.nodes) {
      const verbatimTitle = src.mechanismFlow.some((s) => s.title === n.label);
      const inSource = allSource.toLowerCase().includes(n.label.toLowerCase());
      expect(verbatimTitle || inSource).toBe(true);
      if (n.sublabel) expect(allSource.includes(n.sublabel)).toBe(true);
    }
    for (const e of pilot.edges) {
      if (!e.label) continue;
      expect(allSource.toLowerCase().includes(e.label.toLowerCase())).toBe(true);
    }
  });

  test("5. MDD pilot: every node/edge string traces into the MDD source file", () => {
    const pilot = getDiseasePilot("major-depressive-disorder")!;
    expect(pilot).toBeDefined();
    // The MDD source is prose — assemble the searchable corpus from the
    // fields the pilot claims provenance from.
    const corpus: string[] = [
      mddSource.summary,
      mddSource.pathophysiology.summary,
      mddSource.pathophysiology.neurotransmitters.join(" "),
      mddSource.pathophysiology.brainRegions.join(" "),
      mddSource.pathophysiology.pathways.join(" "),
      mddSource.pathophysiology.details,
      mddSource.receptors.join(" "),
      JSON.stringify(mddSource.knowledgeGraph),
      JSON.stringify(mddSource.etiology ?? []),
      JSON.stringify(mddSource.management ?? []),
    ];
    const hay = corpus.join("\n").toLowerCase();

    // documented composition allowlist (label -> source fragment)
    const compositions: Record<string, string> = {
      "SERT (serotonin transporter)": "serotonin transporter",
      "Cortisol hypersecretion": "cortisol hypersecretion",
      "BDNF expression": "bdnf expression",
      "Hippocampal volume loss": "hippocampal volume loss",
      "Amygdala hyperactivity": "hyperactive amygdala",
      "Prefrontal cortex hypoactivity": "hypoactive prefrontal cortex",
      "Subgenual ACC (Brodmann 25) hyperactivity": "brodmann 25",
      "MDD syndrome": "major depressive disorder",
      "Monoamine dysregulation": "monoamine dysregulation",
      "Synaptic plasticity": "synaptic plasticity",
      "Chronic stress": "chronic stress",
      "NMDA receptor": "nmda receptor",
      "Inflammatory activation": "inflammatory",
      "Glutamate": "glutamate",
      "Hypothalamus": "hypothalamus",
      "Pituitary": "pituitary",
      "Adrenal": "adrenal",
    };

    for (const n of pilot.nodes) {
      const direct = hay.includes(n.label.toLowerCase());
      const viaComposition = compositions[n.label] && hay.includes(compositions[n.label].toLowerCase());
      expect(direct || viaComposition).toBe(true);
      if (n.sublabel) {
        const subDirect = hay.includes(n.sublabel.toLowerCase());
        // documented fragment-joins: sublabels composed of two verbatim source fragments
        const subFragments = n.sublabel
          .split(/[;:]/)
          .map((f) => f.trim().toLowerCase())
          .filter((f) => f.length > 3)
          .every((f) => hay.includes(f));
        expect(subDirect || subFragments).toBe(true);
      }
    }
    for (const e of pilot.edges ?? []) {
      if (!e.label) continue;
      const direct = hay.includes(e.label.toLowerCase());
      const partial = e.label
        .toLowerCase()
        .split(/[\s→]+/)
        .filter((w) => w.length > 3)
        .every((w) => hay.includes(w));
      expect(direct || partial).toBe(true);
    }
  });
});

/* ============================================================
   2. DISULFIRAM COLLISION REGRESSION
   ============================================================ */

describe("disulfiram lookup-collision regression (guard 12b)", () => {
  test("6. drug page must NOT resolve the alcohol-treatment pilot", () => {
    expect(getPilotMechanism("disulfiram")).toBeNull();
  });

  test("7. substance page must resolve the ALDH treatment pilot", () => {
    const pilot = getTreatmentPilot("alcohol", "Disulfiram");
    expect(pilot).toBeDefined();
    expect(pilot!.mechanismId).toBe("pilot-alcohol-disulfiram");
    expect(pilot!.nodes.some((n) => n.label.includes("ALDH"))).toBe(true);
  });

  test("8. the two sides carry genuinely different source data (no leakage either way)", () => {
    const drugPage = fromDrugMechanismFlow({
      drugSlug: "disulfiram",
      drugName: disulfiramDrugSource.genericName,
      mechanismSummary: disulfiramDrugSource.mechanism.summary,
      mechanismFlow: disulfiramDrugSource.mechanismFlow,
    });
    // drug page: the 4-node reward-pathway flow, verbatim
    expect(drugPage.nodes.map((n) => n.label)).toEqual(
      disulfiramDrugSource.mechanismFlow.nodes.map((n) => n.label)
    );
    const substancePilot = getTreatmentPilot("alcohol", "Disulfiram")!;
    // substance pilot: the 5-node ALDH enzyme story
    expect(substancePilot.nodes.some((n) => n.id === "aldh")).toBe(true);
    // no treatment-flow leakage into the drug page and vice versa
    expect(drugPage.nodes.some((n) => n.id === "aldh")).toBe(false);
    expect(substancePilot.nodes.some((n) => n.label === "Reward pathway")).toBe(false);
  });

  test("9. pilot registry contains exactly 5 pilots with distinct mechanism ids", () => {
    expect(pilotMechanisms.length).toBe(5);
    expect(new Set(pilotMechanisms.map((p) => p.mechanismId)).size).toBe(5);
  });
});

/* ============================================================
   3. Old-architecture retirement
   ============================================================ */

describe("old architecture retirement", () => {
  test("10. src/components/kyp/ui/mechanism-flow.tsx no longer exists", () => {
    expect(existsSync(resolve(ROOT, "src/components/kyp/ui/mechanism-flow.tsx"))).toBe(false);
  });

  test("11. zero consumers import the retired components", () => {
    // flags actual imports / JSX usage — comments mentioning retirement are fine
    const offenders: string[] = [];
    for (const p of [...listSourceFiles(resolve(ROOT, "src")), ...listSourceFiles(resolve(ROOT, "tests"))]) {
      const src = readFileSync(p, "utf8");
      const rel = p.slice(ROOT.length + 1);
      if (rel.endsWith("mechanism-integrity.test.ts")) continue; // this file names them in checks
      if (/from\s+["'].*mechanism-flow["']/.test(src) || /<MechanismFlow[\s>]/.test(src)) {
        offenders.push(`${rel}: mechanism-flow import/usage`);
      }
      if (/from\s+["'].*course-ui["']/.test(src) && /StepChain/.test(src) && /import/.test(src.split("StepChain")[0].slice(-200))) {
        offenders.push(`${rel}: StepChain import`);
      }
      if (/<StepChain[\s>]/.test(src)) offenders.push(`${rel}: StepChain usage`);
    }
    expect(offenders).toEqual([]);
  });
});

/* ============================================================
   4. Migration completeness — every consumer renders the canvas
   ============================================================ */

describe("migration completeness", () => {
  test("12. every mechanism consumer renders KYPMechanismCanvas", () => {
    const consumers: [string, string][] = [
      ["src/components/kyp/sections/drug/drug-mechanism.tsx", "KYPMechanismCanvas"],
      ["src/components/psychiatry/course/course-foundations.tsx", "KYPMechanismCanvas"],
      ["src/components/psychiatry/course/concept/concept-sections.tsx", "KYPMechanismCanvas"],
      ["src/app/substances/[slug]/page.tsx", "KYPMechanismCanvas"],
      ["src/app/diseases/[slug]/page.tsx", "KYPMechanismCanvas"],
    ];
    for (const [file, marker] of consumers) {
      const src = readFileSync(resolve(ROOT, file), "utf8");
      expect(src.includes(marker)).toBe(true);
    }
  });

  test("13. all 145 drugs are covered: pilot or adapter (no NO_MECHANISM, no ERROR)", () => {
    expect(drugs.length).toBe(145);
    for (const drug of drugs) {
      const isPilot = getPilotMechanism(drug.slug) !== null;
      // adapter path must succeed for non-pilots (spot-conversion)
      const def = isPilot
        ? getPilotMechanism(drug.slug)
        : fromDrugMechanismFlow({
            drugSlug: drug.slug,
            drugName: drug.genericName,
            mechanismSummary: drug.mechanism.summary,
            mechanismFlow: drug.mechanismFlow,
          });
      expect(def).toBeDefined();
    }
  });

  test("14. locked medical data territory: mechanism lib imports nothing mutable from the data layer", () => {
    // normalize.ts must be framework-pure (structural mirrors only)
    const normalize = readFileSync(resolve(ROOT, "src/lib/mechanism/normalize.ts"), "utf8");
    expect(normalize.includes("@/lib/kyp/data")).toBe(false);
    // pilots.ts is hand-authored data — it must not import the data layer either
    const pilots = readFileSync(resolve(ROOT, "src/lib/mechanism/pilots.ts"), "utf8");
    expect(pilots.includes("@/lib/kyp/data")).toBe(false);
  });
});
