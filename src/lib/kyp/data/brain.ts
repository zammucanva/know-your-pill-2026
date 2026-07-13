import type { BrainRegion, Pathway } from "./types";

/**
 * Major brain regions relevant to psychiatric pharmacology.
 * Phase 6 (Brain Module) will consume this directly.
 */
export const brainRegions: BrainRegion[] = [
  {
    id: "prefrontal-cortex",
    name: "Prefrontal Cortex",
    functions: ["Executive function", "Decision-making", "Working memory", "Personality expression"],
    disorders: ["Depression", "Schizophrenia", "ADHD"],
    affectedDrugs: ["SSRIs", "Stimulants", "Antipsychotics"],
    neurotransmitter: "Glutamate · Dopamine",
  },
  {
    id: "nucleus-accumbens",
    name: "Nucleus Accumbens",
    functions: ["Reward processing", "Motivation", "Reinforcement learning"],
    disorders: ["Addiction", "Depression", "Anhedonia"],
    affectedDrugs: ["Opioids", "Stimulants", "Alcohol"],
    neurotransmitter: "Dopamine",
  },
  {
    id: "amygdala",
    name: "Amygdala",
    functions: ["Fear processing", "Emotional memory", "Threat detection"],
    disorders: ["Anxiety disorders", "PTSD", "Phobias"],
    affectedDrugs: ["Benzodiazepines", "SSRIs", "Beta-blockers"],
    neurotransmitter: "GABA · Glutamate",
  },
  {
    id: "hippocampus",
    name: "Hippocampus",
    functions: ["Memory consolidation", "Spatial navigation", "Contextual learning"],
    disorders: ["Alzheimer's", "Depression", "PTSD"],
    affectedDrugs: ["Antidepressants", "Benzodiazepines"],
    neurotransmitter: "Glutamate · Acetylcholine",
  },
  {
    id: "raphe-nuclei",
    name: "Raphe Nuclei",
    functions: ["Serotonin synthesis", "Mood regulation", "Sleep-wake cycle"],
    disorders: ["Depression", "Anxiety", "Insomnia"],
    affectedDrugs: ["SSRIs", "SNRIs", "MAOIs", "Triptans"],
    neurotransmitter: "Serotonin",
  },
  {
    id: "substantia-nigra",
    name: "Substantia Nigra",
    functions: ["Movement control", "Reward", "Habit learning"],
    disorders: ["Parkinson's disease", "Schizophrenia", "Addiction"],
    affectedDrugs: ["Antipsychotics", "L-DOPA", "Stimulants"],
    neurotransmitter: "Dopamine",
  },
];

/**
 * Major dopamine & serotonin pathways.
 * Phase 7 (Pathways) will animate these.
 */
export const pathways: Pathway[] = [
  {
    id: "mesolimbic",
    name: "Mesolimbic Pathway",
    origin: "Ventral Tegmental Area (VTA)",
    termination: "Nucleus Accumbens",
    neurotransmitter: "Dopamine",
    function: "Reward, motivation, and reinforcement learning — the brain's primary reward circuit.",
    relatedDrugs: ["Cocaine", "Amphetamines", "Opioids", "Antipsychotics"],
    clinicalRelevance: "Central to addiction. Antipsychotics block D2 here, reducing positive symptoms of schizophrenia.",
  },
  {
    id: "mesocortical",
    name: "Mesocortical Pathway",
    origin: "Ventral Tegmental Area (VTA)",
    termination: "Prefrontal Cortex",
    neurotransmitter: "Dopamine",
    function: "Cognition, working memory, and executive function.",
    relatedDrugs: ["Antipsychotics", "Stimulants"],
    clinicalRelevance: "Dysfunction linked to negative & cognitive symptoms of schizophrenia. Stimulants enhance focus here.",
  },
  {
    id: "nigrostriatal",
    name: "Nigrostriatal Pathway",
    origin: "Substantia Nigra (pars compacta)",
    termination: "Dorsal Striatum",
    neurotransmitter: "Dopamine",
    function: "Motor control and habitual movement.",
    relatedDrugs: ["Antipsychotics", "L-DOPA", "Anticholinergics"],
    clinicalRelevance: "Degeneration causes Parkinson's. D2 blockade by antipsychotics causes extrapyramidal side effects.",
  },
  {
    id: "tuberoinfundibular",
    name: "Tuberoinfundibular Pathway",
    origin: "Arcuate Nucleus (Hypothalamus)",
    termination: "Pituitary Gland",
    neurotransmitter: "Dopamine",
    function: "Inhibits prolactin release from the anterior pituitary.",
    relatedDrugs: ["Antipsychotics", "Metoclopramide"],
    clinicalRelevance: "D2 blockade causes hyperprolactinaemia — galactorrhoea, gynaecomastia, amenorrhoea.",
  },
];
