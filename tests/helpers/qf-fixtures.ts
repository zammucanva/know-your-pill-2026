/**
 * Synthetic fixtures for the Question Factory tests.
 *
 * Drug names are invented and the "facts" are arbitrary assignments from
 * small pools: this data exists only to exercise the engine offline. It is
 * never shipped and asserts nothing about real medicine. Relationship
 * structure is deliberate: classes of several sizes, effects shared across
 * neighbouring drugs, and a few drugs missing optional fields.
 */

import {
  buildFactStore,
  type FactSourceDrug,
  type FactSources,
  type FactStore,
} from "@/lib/kyp/question-factory/facts";

const REGIONS = [
  { id: "pfc", name: "Prefrontal Cortex", functions: ["Executive function", "Working memory"], disorders: ["Depression", "ADHD"], neurotransmitter: "Dopamine" },
  { id: "nacc", name: "Nucleus Accumbens", functions: ["Reward processing", "Motivation"], disorders: ["Addiction", "Anhedonia"], neurotransmitter: "Dopamine" },
  { id: "hipp", name: "Hippocampus", functions: ["Memory formation", "Spatial navigation"], disorders: ["Dementia", "Trauma disorders"], neurotransmitter: "Glutamate" },
  { id: "amy", name: "Amygdala", functions: ["Fear processing", "Emotional memory"], disorders: ["Anxiety", "Trauma disorders"], neurotransmitter: "GABA" },
  { id: "str", name: "Striatum", functions: ["Motor control", "Habit learning"], disorders: ["Parkinsonism", "Compulsive disorders"], neurotransmitter: "Dopamine" },
];

const PATHWAYS = [
  { id: "p-meso", name: "Mesolimbic Pathway", origin: "Ventral Tegmental Area (VTA)", termination: "Nucleus Accumbens", neurotransmitter: "Dopamine" },
  { id: "p-cort", name: "Mesocortical Pathway", origin: "Ventral Tegmental Area (VTA)", termination: "Prefrontal Cortex", neurotransmitter: "Dopamine" },
  { id: "p-nigro", name: "Nigrostriatal Pathway", origin: "Substantia Nigra", termination: "Striatum", neurotransmitter: "Dopamine" },
  { id: "p-tub", name: "Tuberoinfundibular Pathway", origin: "Hypothalamus", termination: "Pituitary Gland", neurotransmitter: "Dopamine" },
];

const TARGETS = [
  { id: "sert", name: "SERT", fullName: "Serotonin transporter", kind: "transporter" as const, geneSymbol: "SLC6A4" },
  { id: "net", name: "NET", fullName: "Noradrenaline transporter", kind: "transporter" as const, geneSymbol: "SLC6A2" },
  { id: "dat", name: "DAT", fullName: "Dopamine transporter", kind: "transporter" as const, geneSymbol: "SLC6A3" },
  { id: "d2", name: "D2", fullName: "Dopamine D2 receptor", kind: "receptor" as const },
];

const EFFECTS = ["Nausea", "Insomnia", "Headache", "Dry mouth", "Dizziness", "Somnolence", "Tremor", "Constipation", "Weight gain", "Sweating", "Blurred vision", "Tachycardia", "Fatigue", "Anxiety"];
const SERIOUS = ["Serotonin syndrome", "Seizures", "QT prolongation", "Agranulocytosis", "Hepatotoxicity", "Hyponatraemia", "Hypertensive crisis"];
const INDICATIONS = ["Major depressive disorder", "Generalised anxiety disorder", "Panic disorder", "Obsessive-compulsive disorder", "Social anxiety disorder", "Schizophrenia", "Bipolar disorder", "Insomnia"];
const CONTRA = ["Hypersensitivity", "Concurrent MAOI use", "Severe hepatic impairment", "Narrow-angle glaucoma", "Recent myocardial infarction", "Uncontrolled epilepsy"];
const MONITOR = ["Blood pressure", "Heart rate", "Liver function tests", "Serum sodium", "ECG", "Body weight", "Full blood count"];
const AGENTS = ["Warfarin", "Lithium", "Tramadol", "Alcohol", "Aspirin", "St John's Wort", "Linezolid", "Digoxin"];
const MECHS = ["Additive pharmacodynamic effect", "Inhibition of hepatic metabolism", "Displacement from protein binding", "Additive effect on bleeding risk"];
const NTS = ["Serotonin (5-HT)", "Dopamine", "Noradrenaline", "GABA", "Glutamate"];
const DIAGNOSES = ["Major Depressive Disorder", "Generalised Anxiety Disorder", "Panic Disorder", "Obsessive-Compulsive Disorder", "Schizophrenia"];

/** [slug, name, classLabel, classFullName, chapter, topicLabel] */
const SPEC: Array<[string, string, string, string, string, string]> = [
  ["alvexin", "Alvexin", "ALPHA-RI", "Alpha Reuptake Inhibitor", "Antidepressants", "Alpha-RIs"],
  ["brolamine", "Brolamine", "ALPHA-RI", "Alpha Reuptake Inhibitor", "Antidepressants", "Alpha-RIs"],
  ["cetrazone", "Cetrazone", "ALPHA-RI", "Alpha Reuptake Inhibitor", "Antidepressants", "Alpha-RIs"],
  ["dolfapram", "Dolfapram", "ALPHA-RI", "Alpha Reuptake Inhibitor", "Antidepressants", "Alpha-RIs"],
  ["evelitane", "Evelitane", "BETA-RI", "Beta Reuptake Inhibitor", "Antidepressants", "Beta-RIs"],
  ["furoxetil", "Furoxetil", "BETA-RI", "Beta Reuptake Inhibitor", "Antidepressants", "Beta-RIs"],
  ["gammaprine", "Gammaprine", "BETA-RI", "Beta Reuptake Inhibitor", "Antidepressants", "Beta-RIs"],
  ["heptolam", "Heptolam", "GAMMA-C", "Gamma Cyclic", "Antidepressants", "Gamma-Cs"],
  ["ixoramide", "Ixoramide", "GAMMA-C", "Gamma Cyclic", "Antidepressants", "Gamma-Cs"],
  ["jelvazine", "Jelvazine", "GAMMA-C", "Gamma Cyclic", "Antidepressants", "Gamma-Cs"],
  ["kontrafil", "Kontrafil", "DELTA-I", "Delta Inhibitor", "Antidepressants", "Delta-Is"],
  ["lumexone", "Lumexone", "DELTA-I", "Delta Inhibitor", "Antidepressants", "Delta-Is"],
  ["mirvadol", "Mirvadol", "EPS-ATYP", "Epsilon Atypical Antipsychotic", "Antipsychotics", "Epsilon Atypicals"],
  ["noxapine", "Noxapine", "EPS-ATYP", "Epsilon Atypical Antipsychotic", "Antipsychotics", "Epsilon Atypicals"],
  ["orthelin", "Orthelin", "EPS-ATYP", "Epsilon Atypical Antipsychotic", "Antipsychotics", "Epsilon Atypicals"],
  ["pyrazone", "Pyrazone", "ZETA-TYP", "Zeta Typical Antipsychotic", "Antipsychotics", "Zeta Typicals"],
  ["quilenex", "Quilenex", "ZETA-TYP", "Zeta Typical Antipsychotic", "Antipsychotics", "Zeta Typicals"],
];

const pick = <T,>(pool: T[], start: number, n: number): T[] =>
  Array.from({ length: n }, (_, k) => pool[(start + k) % pool.length]);

function makeDrug(i: number): FactSourceDrug {
  const [slug, name, classLabel, classFull, chapter, topic] = SPEC[i];
  const effects = pick(EFFECTS, i * 2, 3);
  const indications = pick(INDICATIONS, i, 2).map((n) => ({
    name: n,
    status: "fda-approved",
    description: `${n} is a documented use of ${name}.`,
  }));
  indications.push({
    name: INDICATIONS[(i + 3) % INDICATIONS.length],
    status: "off-label",
    description: `${INDICATIONS[(i + 3) % INDICATIONS.length]} is documented off-label for ${name}.`,
  });
  return {
    slug,
    genericName: name,
    drugClassLabel: classLabel,
    drugClassFullName: classFull,
    learningPath: ["Psychiatry", chapter, topic, name],
    neurotransmitters: [NTS[i % NTS.length]],
    brainRegionIds: pick(REGIONS, i, 2).map((r) => r.id),
    indications,
    contraindications: pick(CONTRA, i, 2).map((n) => ({
      name: n,
      severity: "absolute",
      rationale: `${n} is a documented contraindication.`,
    })),
    blackBoxWarnings: i % 4 === 0 ? [{ title: `Boxed warning ${i}`, text: `Boxed warning text ${i}.` }] : [],
    commonSideEffects: effects.map((n) => ({
      name: n,
      frequency: "common",
      description: `${n} is a documented common effect of ${name}.`,
    })),
    seriousSideEffects: pick(SERIOUS, i, 1 + (i % 2)).map((n) => ({
      name: n,
      severity: "severe",
      description: `${n} is a documented serious effect of ${name}.`,
    })),
    monitoring: pick(MONITOR, i, 2).map((n) => ({
      parameter: n,
      frequency: "Each visit",
      rationale: `${n} is monitored for ${name}.`,
    })),
    interactions: pick(AGENTS, i, 3).map((agent, k) => ({
      drug: agent,
      severity: "major",
      mechanism: MECHS[(i + k) % MECHS.length],
      action: "Use with caution.",
    })),
    mechanism: {
      effect: `${classLabel} net effect: increases synaptic availability (${i % 5}).`,
      halfLife: i % 6 === 5 ? "Variable" : `${6 + ((i * 7) % 40)} hours`,
      activeMetabolite: i % 3 === 0 ? `${name}-M1 (active)` : undefined,
      molecularTarget: i < 4 ? "SERT" : i < 7 ? "NET" : "DAT",
    },
    clinicalCases:
      i % 2 === 0
        ? [
            {
              title: `Teaching case ${i}`,
              presentation: `A ${20 + i}-year-old patient presents with persistent symptoms over several weeks (case ${i}).`,
              diagnosis: `${DIAGNOSES[i % DIAGNOSES.length]}, moderate episode. Differential noted.`,
            },
          ]
        : [],
  };
}

export const FIXTURE_DRUG_COUNT = SPEC.length;

export function fixtureSources(): FactSources {
  const primary = new Map<string, string>();
  SPEC.forEach(([slug], i) => {
    if (i < 4) primary.set(slug, "sert");
    else if (i < 7) primary.set(slug, "net");
  });
  return {
    drugs: SPEC.map((_, i) => makeDrug(i)),
    brainRegions: REGIONS,
    pathways: PATHWAYS,
    targets: TARGETS,
    primaryTargetOf: (slug) => primary.get(slug) ?? null,
  };
}

let cached: FactStore | null = null;
export function fixtureStore(): FactStore {
  return (cached ??= buildFactStore(fixtureSources()));
}
