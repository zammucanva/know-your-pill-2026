import type { AnatomicalStructure } from "./types";

/**
 * Anatomical structures — the hierarchically organised list of every
 * inspectable structure in the atlas.
 *
 * NOTE: These structures are defined now so the engine, UI, and inspector
 * are all wired and demonstrable. The meshName field references mesh names
 * that a real anatomical GLB will provide. The placeholder body uses the
 * same ids so the architecture is identical whether the placeholder or a
 * real GLB is loaded.
 *
 * The nervous system has the deepest hierarchy, per KYP's brain-first depth.
 */
export const structures: AnatomicalStructure[] = [
  // ── Nervous System (deepest detail) ──────────────────────────────
  {
    id: "brain",
    systemId: "nervous",
    name: "Brain",
    region: "Central Nervous System",
    functions: [
      "Cognition, thought, and consciousness",
      "Sensory processing and perception",
      "Motor control and coordination",
      "Memory, learning, and emotion",
      "Regulation of autonomic and endocrine functions",
    ],
    anatomyDescription:
      "The brain is the central organ of the nervous system, located in the cranial cavity. It is divided into the cerebrum, cerebellum, and brainstem, with deep structures including the thalamus, hypothalamus, basal ganglia, and limbic system.",
    clinicalRelevance:
      "Brain lesions produce focal neurological deficits that map to affected regions, e.g. left frontal lesions cause expressive aphasia, occipital lesions cause visual field cuts.",
    meshName: "Brain",
    explodeVector: [0, 0.2, 0],
    explodeMagnitude: 0.15,
    kypLinks: {
      neurotransmitters: ["dopamine", "serotonin", "norepinephrine", "gaba", "glutamate", "acetylcholine"],
    },
  },
  {
    id: "cerebrum",
    systemId: "nervous",
    parentId: "brain",
    name: "Cerebrum",
    region: "Central Nervous System",
    functions: [
      "Higher cognitive functions",
      "Voluntary motor control",
      "Sensory interpretation",
      "Language and thought",
    ],
    anatomyDescription:
      "The largest part of the brain, divided into two hemispheres connected by the corpus callosum. Its outer layer is the cerebral cortex.",
    meshName: "Cerebrum",
    explodeVector: [0, 0.15, 0],
    explodeMagnitude: 0.2,
  },
  {
    id: "frontal-lobe",
    systemId: "nervous",
    parentId: "cerebrum",
    name: "Frontal Lobe",
    region: "Cerebral Cortex",
    functions: [
      "Executive function and decision-making",
      "Voluntary motor control (motor cortex)",
      "Language production (Broca's area, left hemisphere)",
      "Personality and social behaviour",
      "Working memory",
    ],
    anatomyDescription:
      "The anterior-most lobe of the cerebrum, located behind the forehead. Contains the precentral gyrus (motor cortex), prefrontal cortex, and Broca's area.",
    clinicalRelevance:
      "Frontal lobe damage can cause personality changes, executive dysfunction, motor weakness (contralateral), and expressive aphasia (if left-sided).",
    meshName: "FrontalLobe",
    explodeVector: [0, 0, -0.3],
    explodeMagnitude: 0.25,
    kypLinks: {
      neurotransmitters: ["dopamine", "norepinephrine"],
      pathways: ["mesocortical"],
      drugs: ["haloperidol", "risperidone", "fluoxetine"],
      disorders: ["schizophrenia", "adhd", "depression"],
    },
  },
  {
    id: "parietal-lobe",
    systemId: "nervous",
    parentId: "cerebrum",
    name: "Parietal Lobe",
    region: "Cerebral Cortex",
    functions: [
      "Somatosensory processing (touch, pressure, pain, temperature)",
      "Spatial orientation and navigation",
      "Integration of sensory information",
      "Visuospatial attention",
    ],
    anatomyDescription:
      "Located posterior to the frontal lobe, separated by the central sulcus. Contains the postcentral gyrus (primary somatosensory cortex).",
    clinicalRelevance:
      "Damage causes contralateral sensory loss, neglect syndrome (right parietal), or apraxia.",
    meshName: "ParietalLobe",
    explodeVector: [0, 0.2, 0],
    explodeMagnitude: 0.2,
    kypLinks: {
      disorders: ["neglect-syndrome"],
    },
  },
  {
    id: "temporal-lobe",
    systemId: "nervous",
    parentId: "cerebrum",
    name: "Temporal Lobe",
    region: "Cerebral Cortex",
    functions: [
      "Auditory processing",
      "Language comprehension (Wernicke's area, left hemisphere)",
      "Memory formation (with hippocampus)",
      "Emotional processing (with amygdala)",
    ],
    anatomyDescription:
      "Located on the lateral aspect of the cerebrum, beneath the lateral sulcus. Contains the primary auditory cortex, Wernicke's area, and houses the hippocampus and amygdala in its medial portion.",
    clinicalRelevance:
      "Damage can cause receptive aphasia (left), memory impairment (bilateral), or auditory hallucinations.",
    meshName: "TemporalLobe",
    explodeVector: [0.25, 0, 0],
    explodeMagnitude: 0.2,
    kypLinks: {
      neurotransmitters: ["serotonin", "acetylcholine"],
      drugs: ["donepezil"],
      disorders: ["alzheimer-disease"],
    },
  },
  {
    id: "occipital-lobe",
    systemId: "nervous",
    parentId: "cerebrum",
    name: "Occipital Lobe",
    region: "Cerebral Cortex",
    functions: [
      "Visual processing",
      "Colour and motion perception",
      "Object and face recognition",
    ],
    anatomyDescription:
      "The posterior-most lobe of the cerebrum. Contains the primary visual cortex (V1) around the calcarine sulcus.",
    clinicalRelevance:
      "Damage causes visual field defects (contralateral homonymous hemianopia) or cortical blindness.",
    meshName: "OccipitalLobe",
    explodeVector: [0, 0, 0.3],
    explodeMagnitude: 0.25,
  },
  {
    id: "cerebellum",
    systemId: "nervous",
    parentId: "brain",
    name: "Cerebellum",
    region: "Hindbrain",
    functions: [
      "Motor coordination and balance",
      "Fine motor control",
      "Motor learning",
      "Postural adjustment",
    ],
    anatomyDescription:
      "Located posterior to the brainstem, beneath the occipital lobe. Has a highly folded cortex and deep nuclei.",
    clinicalRelevance:
      "Damage causes ataxia, dysmetria, intention tremor, and gait instability, ipsilateral to the lesion.",
    meshName: "Cerebellum",
    explodeVector: [0, -0.3, 0.1],
    explodeMagnitude: 0.3,
    kypLinks: {
      neurotransmitters: ["gaba", "glutamate"],
    },
  },
  {
    id: "brainstem",
    systemId: "nervous",
    parentId: "brain",
    name: "Brainstem",
    region: "Hindbrain",
    functions: [
      "Relay between cerebrum and spinal cord",
      "Cranial nerve nuclei (III–XII)",
      "Autonomic control (respiration, cardiovascular)",
      "Consciousness and arousal (reticular formation)",
    ],
    anatomyDescription:
      "Composed of the midbrain, pons, and medulla oblongata. Connects the cerebrum to the spinal cord.",
    clinicalRelevance:
      "Brainstem lesions are often life-threatening and produce 'crossed' deficits (ipsilateral cranial nerve signs + contralateral body signs).",
    meshName: "Brainstem",
    explodeVector: [0, -0.4, 0],
    explodeMagnitude: 0.25,
  },
  {
    id: "thalamus",
    systemId: "nervous",
    parentId: "brain",
    name: "Thalamus",
    region: "Diencephalon",
    functions: [
      "Major sensory relay station (except olfaction)",
      "Motor integration (via basal ganglia and cerebellar loops)",
      "Regulation of consciousness and alertness",
    ],
    anatomyDescription:
      "Paired egg-shaped structures in the diencephalon, flanking the third ventricle.",
    clinicalRelevance:
      "Thalamic lesions cause contralateral sensory loss, thalamic pain syndrome (Dejerine-Roussy), or transient aphasia.",
    meshName: "Thalamus",
    explodeVector: [0, 0, 0],
    explodeMagnitude: 0.1,
    kypLinks: {
      neurotransmitters: ["gaba", "glutamate"],
    },
  },
  {
    id: "hypothalamus",
    systemId: "nervous",
    parentId: "brain",
    name: "Hypothalamus",
    region: "Diencephalon",
    functions: [
      "Hormonal regulation (via pituitary)",
      "Autonomic nervous system control",
      "Body temperature regulation",
      "Hunger, thirst, and satiety",
      "Circadian rhythm (suprachiasmatic nucleus)",
    ],
    anatomyDescription:
      "Located below the thalamus, forming the floor of the third ventricle. Connects to the pituitary via the infundibulum.",
    clinicalRelevance:
      "Lesions cause endocrine dysfunction, temperature dysregulation, appetite disturbance, or sleep disorders.",
    meshName: "Hypothalamus",
    explodeVector: [0, -0.1, 0],
    explodeMagnitude: 0.1,
    kypLinks: {
      neurotransmitters: ["dopamine", "serotonin", "norepinephrine", "histamine"],
    },
  },
  {
    id: "hippocampus",
    systemId: "nervous",
    parentId: "brain",
    name: "Hippocampus",
    region: "Limbic System",
    functions: [
      "Learning",
      "Memory consolidation (especially episodic and spatial)",
      "Spatial navigation",
    ],
    anatomyDescription:
      "Located in the medial temporal lobe. Part of the limbic system. Has a characteristic seahorse shape in coronal section.",
    clinicalRelevance:
      "Bilateral damage causes anterograde amnesia (inability to form new memories), as famously seen in patient H.M. Affected early in Alzheimer's disease.",
    meshName: "Hippocampus",
    explodeVector: [0.15, -0.05, 0],
    explodeMagnitude: 0.2,
    kypLinks: {
      neurotransmitters: ["acetylcholine", "glutamate", "serotonin"],
      receptors: ["5-ht1a"],
      pathways: ["mesolimbic"],
      drugs: ["donepezil", "fluoxetine"],
      disorders: ["alzheimer-disease", "ptsd", "depression"],
    },
  },
  {
    id: "amygdala",
    systemId: "nervous",
    parentId: "brain",
    name: "Amygdala",
    region: "Limbic System",
    functions: [
      "Emotional processing (especially fear and aggression)",
      "Emotional memory formation",
      "Social cognition",
    ],
    anatomyDescription:
      "Almond-shaped structure in the anterior medial temporal lobe, anterior to the hippocampus. Part of the limbic system.",
    clinicalRelevance:
      "Hyperactivity implicated in anxiety disorders and PTSD. Lesions can cause Klüver-Bucy syndrome (flattened affect, hyperorality).",
    meshName: "Amygdala",
    explodeVector: [0.2, -0.1, -0.1],
    explodeMagnitude: 0.2,
    kypLinks: {
      neurotransmitters: ["gaba", "serotonin", "norepinephrine"],
      drugs: ["fluoxetine", "diazepam"],
      disorders: ["ptsd", "anxiety", "depression"],
    },
  },
  {
    id: "basal-ganglia",
    systemId: "nervous",
    parentId: "brain",
    name: "Basal Ganglia",
    region: "Subcortical",
    functions: [
      "Motor control and movement selection",
      "Habit learning and procedural memory",
      "Reward and reinforcement",
    ],
    anatomyDescription:
      "A group of subcortical nuclei including the caudate, putamen, globus pallidus, subthalamic nucleus, and substantia nigra.",
    clinicalRelevance:
      "Degeneration of basal ganglia circuits causes movement disorders: Parkinson's disease (substantia nigra), Huntington's disease (caudate), and dystonia.",
    meshName: "BasalGanglia",
    explodeVector: [-0.1, 0, 0],
    explodeMagnitude: 0.15,
    kypLinks: {
      neurotransmitters: ["dopamine", "gaba"],
      pathways: ["nigrostriatal"],
      drugs: ["levodopa", "haloperidol"],
      disorders: ["parkinson-disease", "huntington-disease"],
    },
  },
  // ── Substantia nigra / VTA / nucleus accumbens ─────────────────
  //
  // These three structures are intentionally NOT in this registry.
  // BodyParts3D does not provide meshes for them, and the user-facing
  // rule is: do not fabricate missing structures, do not show them as
  // selectable 3D anatomy. They may still appear in pathway / disorder
  // / drug content as conceptual references (e.g. the nigrostriatal
  // pathway in mock-data.ts references "substantia nigra" as a pathway
  // endpoint), but they are NOT selectable anatomical structures.

  // ── Spinal Cord (Nervous) ────────────────────────────────────────
  {
    id: "spinal-cord",
    systemId: "nervous",
    name: "Spinal Cord",
    region: "Central Nervous System",
    functions: [
      "Conduit for motor and sensory signals between brain and body",
      "Reflex arcs",
      "Segmental motor and sensory control",
    ],
    anatomyDescription:
      "Extends from the medulla to L1–L2. 31 segments (8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal).",
    clinicalRelevance:
      "Spinal cord injury causes paralysis and sensory loss below the lesion level.",
    meshName: "SpinalCord",
    explodeVector: [0, -0.5, 0],
    explodeMagnitude: 0.1,
  },

  // ── Skeletal System (selected structures) ────────────────────────
  {
    id: "skull",
    systemId: "skeletal",
    name: "Skull",
    region: "Axial Skeleton",
    functions: [
      "Protects the brain",
      "Forms the structure of the face",
      "Houses the organs of special sense",
    ],
    anatomyDescription:
      "Composed of 22 bones (8 cranial, 14 facial). The cranial vault protects the brain.",
    meshName: "Skull",
    explodeVector: [0, 0.3, 0],
    explodeMagnitude: 0.1,
  },
  {
    id: "vertebral-column",
    systemId: "skeletal",
    name: "Vertebral Column",
    region: "Axial Skeleton",
    functions: [
      "Protects the spinal cord",
      "Supports the trunk",
      "Enables flexion, extension, and rotation",
    ],
    anatomyDescription:
      "33 vertebrae: 7 cervical, 12 thoracic, 5 lumbar, 5 sacral (fused), 4 coccygeal (fused).",
    meshName: "VertebralColumn",
    explodeVector: [0, -0.3, -0.1],
    explodeMagnitude: 0.1,
  },
  {
    id: "rib-cage",
    systemId: "skeletal",
    name: "Rib Cage",
    region: "Axial Skeleton",
    functions: [
      "Protects thoracic organs",
      "Enables respiration (with intercostal muscles)",
    ],
    anatomyDescription:
      "12 pairs of ribs, 12 thoracic vertebrae, and the sternum.",
    meshName: "RibCage",
    explodeVector: [0, 0, -0.15],
    explodeMagnitude: 0.15,
  },

  // ── Cardiovascular ─────────────────────────────────────────────
  {
    id: "heart",
    systemId: "cardiac",
    name: "Heart",
    region: "Thoracic Cavity",
    functions: [
      "Pumps blood through the circulatory system",
      "Right side: pulmonary circulation",
      "Left side: systemic circulation",
    ],
    anatomyDescription:
      "Four chambers (2 atria, 2 ventricles). Located in the mediastinum, between the lungs.",
    clinicalRelevance:
      "Myocardial infarction, heart failure, arrhythmias.",
    meshName: "Heart",
    explodeVector: [0.15, 0, 0.1],
    explodeMagnitude: 0.2,
    kypLinks: {
      neurotransmitters: ["norepinephrine"],
      drugs: ["metoprolol"],
      disorders: ["hypertension", "heart-failure"],
    },
  },

  // ── Respiratory ─────────────────────────────────────────────────
  {
    id: "lungs",
    systemId: "respiratory",
    name: "Lungs",
    region: "Thoracic Cavity",
    functions: [
      "Gas exchange (oxygen in, carbon dioxide out)",
      "Regulates blood pH",
    ],
    anatomyDescription:
      "Paired organs flanking the heart. Right lung has 3 lobes, left lung has 2 (cardiac notch).",
    meshName: "Lungs",
    explodeVector: [-0.2, 0, 0],
    explodeMagnitude: 0.2,
  },

  // ── Digestive (selected) ────────────────────────────────────────
  {
    id: "liver",
    systemId: "digestive",
    name: "Liver",
    region: "Abdominal Cavity",
    functions: [
      "Detoxification",
      "Protein synthesis (albumin, clotting factors)",
      "Bile production",
      "Glycogen storage",
    ],
    anatomyDescription:
      "Largest internal organ. Located in the right upper quadrant of the abdomen.",
    meshName: "Liver",
    explodeVector: [-0.15, -0.1, 0.1],
    explodeMagnitude: 0.2,
    kypLinks: {
      drugs: ["acetaminophen"],
      disorders: ["cirrhosis"],
    },
  },
];

// ── Convenience selectors ──────────────────────────────────────────

export const getStructureById = (id: string): AnatomicalStructure | undefined =>
  structures.find((s) => s.id === id);

export const getStructuresBySystem = (systemId: string): AnatomicalStructure[] =>
  structures.filter((s) => s.systemId === systemId);

export const getStructuresByParent = (parentId: string): AnatomicalStructure[] =>
  structures.filter((s) => s.parentId === parentId);

/** Get the children of a structure, or all root structures if no parent given. */
export const getChildStructures = (parentId?: string): AnatomicalStructure[] =>
  parentId
    ? structures.filter((s) => s.parentId === parentId)
    : structures.filter((s) => !s.parentId);

/** Get all ancestors of a structure, from root to immediate parent. */
export const getAncestors = (structureId: string): AnatomicalStructure[] => {
  const ancestors: AnatomicalStructure[] = [];
  let current = getStructureById(structureId);
  while (current?.parentId) {
    const parent = getStructureById(current.parentId);
    if (!parent) break;
    ancestors.unshift(parent);
    current = parent;
  }
  return ancestors;
};
