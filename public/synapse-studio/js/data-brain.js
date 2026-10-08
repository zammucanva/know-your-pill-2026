/* KYP Synapse Studio — shared reference data: neurotransmitter species, receptors,
   enzymes, schematic brain regions and pathways. Classic script (window.KYP_CORE). */
(function (global) {
  "use strict";

  /** Neurotransmitter / neuromodulator species drawn in the synapse scene. */
  const SPECIES = {
    serotonin:      { name: "Serotonin (5-HT)",  color: "#d98aa8", clear: { kind: "transporter", label: "SERT", full: "Serotonin transporter" } },
    dopamine:       { name: "Dopamine",          color: "#5aa9c9", clear: { kind: "transporter", label: "DAT",  full: "Dopamine transporter" } },
    norepinephrine: { name: "Norepinephrine",    color: "#a3b86b", clear: { kind: "transporter", label: "NET",  full: "Norepinephrine transporter" } },
    gaba:           { name: "GABA",              color: "#5fb89a", clear: { kind: "transporter", label: "GAT",  full: "GABA transporter" } },
    glutamate:      { name: "Glutamate",         color: "#d4756e", clear: { kind: "transporter", label: "EAAT", full: "Glutamate transporter (EAAT)" } },
    acetylcholine:  { name: "Acetylcholine",     color: "#9a95d9", clear: { kind: "enzyme", label: "AChE", full: "Acetylcholinesterase (AChE)" } },
    histamine:      { name: "Histamine",         color: "#6fb3b3", clear: { kind: "diffusion", label: "", full: "" } },
    opioid:         { name: "Endogenous opioid peptides (endorphins)", color: "#d39a6f", clear: { kind: "enzyme", label: "Peptidases", full: "Peptidases (break down opioid peptides)" } },
    endocannabinoid:{ name: "Endocannabinoids (anandamide, 2-AG)", color: "#b3a46e", clear: { kind: "enzyme", label: "FAAH/MAGL", full: "Endocannabinoid-degrading enzymes (FAAH, MAGL)" } },
    orexin:         { name: "Orexin (hypocretin)", color: "#c9a46a", clear: { kind: "diffusion", label: "", full: "" } },
    melatonin:      { name: "Melatonin", color: "#8f9cc4", clear: { kind: "diffusion", label: "", full: "" } },
    adenosine:      { name: "Adenosine",         color: "#9aa8b8", clear: { kind: "transporter", label: "ENT", full: "Nucleoside transporter (ENT)" } },
  };

  /** Receptors that can sit on the post- (or pre-) synaptic membrane. */
  const RECEPTORS = {
    "D1":     { label: "D1 receptor",  full: "Dopamine D1 receptor",  species: "dopamine",  kind: "gpcr" },
    "D2":     { label: "D2 receptor",  full: "Dopamine D2 receptor",  species: "dopamine",  kind: "gpcr" },
    "5-HT1A": { label: "5-HT1A receptor", full: "Serotonin 5-HT1A receptor", species: "serotonin", kind: "gpcr" },
    "5-HT2A": { label: "5-HT2A receptor", full: "Serotonin 5-HT2A receptor", species: "serotonin", kind: "gpcr" },
    "MOR":    { label: "μ-opioid receptor (MOR)", full: "μ-opioid receptor, postsynaptic", species: "opioid", kind: "gpcr", inhibitory: true },
    "MOR_pre":{ label: "μ-opioid receptor (presynaptic)", full: "μ-opioid receptor on the presynaptic terminal", species: "opioid", kind: "gpcr", inhibitory: true, loc: "pre" },
    "GABA-A": { label: "GABA-A receptor", full: "GABA-A receptor (Cl⁻ channel)", species: "gaba", kind: "ionotropic", ion: "Cl⁻", allosteric: "Benzodiazepine site" },
    "NMDA":   { label: "NMDA receptor", full: "NMDA glutamate receptor (Ca²⁺/Na⁺ channel)", species: "glutamate", kind: "ionotropic", ion: "Ca²⁺" },
    "AMPA":   { label: "AMPA receptor", full: "AMPA glutamate receptor (Na⁺ channel)", species: "glutamate", kind: "ionotropic", ion: "Na⁺" },
    "nAChR":  { label: "Nicotinic ACh receptor", full: "Nicotinic acetylcholine receptor (Na⁺/Ca²⁺ channel)", species: "acetylcholine", kind: "ionotropic", ion: "Na⁺" },
    "D3":     { label: "D3 receptor",  full: "Dopamine D3 receptor",  species: "dopamine",  kind: "gpcr" },
    "5-HT1B": { label: "5-HT1B/1D receptor", full: "Serotonin 5-HT1B/1D receptor", species: "serotonin", kind: "gpcr", inhibitory: true },
    "5-HT2C": { label: "5-HT2C receptor", full: "Serotonin 5-HT2C receptor", species: "serotonin", kind: "gpcr" },
    "5-HT3":  { label: "5-HT3 receptor", full: "Serotonin 5-HT3 receptor (Na⁺/K⁺ channel)", species: "serotonin", kind: "ionotropic", ion: "Na⁺" },
    "M1":     { label: "Muscarinic M1 receptor", full: "Muscarinic acetylcholine receptor (M1)", species: "acetylcholine", kind: "gpcr" },
    "alpha1": { label: "α1-adrenergic receptor", full: "α1-adrenergic receptor", species: "norepinephrine", kind: "gpcr" },
    "beta1":  { label: "β-adrenergic receptor", full: "β-adrenergic receptor", species: "norepinephrine", kind: "gpcr" },
    "GABA-B": { label: "GABA-B receptor", full: "GABA-B receptor (G-protein coupled)", species: "gaba", kind: "gpcr", inhibitory: true },
    "CB1":    { label: "CB1 receptor (presynaptic)", full: "Cannabinoid CB1 receptor on the presynaptic terminal", species: "endocannabinoid", kind: "gpcr", inhibitory: true, loc: "pre" },
    "OX2":    { label: "Orexin receptor", full: "Orexin receptor (OX1/OX2)", species: "orexin", kind: "gpcr" },
    "MT1":    { label: "Melatonin MT1/MT2 receptor", full: "Melatonin MT1/MT2 receptor", species: "melatonin", kind: "gpcr", inhibitory: true },
    "H3":     { label: "H3 autoreceptor (presynaptic)", full: "Histamine H3 autoreceptor on the presynaptic terminal", species: "histamine", kind: "gpcr", inhibitory: true, loc: "pre" },
    "A1":     { label: "A1 adenosine receptor", full: "Adenosine A1 receptor", species: "adenosine", kind: "gpcr", inhibitory: true },
    "A2A":    { label: "A2A adenosine receptor", full: "Adenosine A2A receptor", species: "adenosine", kind: "gpcr" },
    "H1":     { label: "H1 receptor", full: "Histamine H1 receptor", species: "histamine", kind: "gpcr" },
    "alpha_post": { label: "Adrenergic receptor", full: "Postsynaptic adrenergic receptor", species: "norepinephrine", kind: "gpcr" },
    "alpha2_pre": { label: "α2A autoreceptor (presynaptic)", full: "α2A-adrenergic autoreceptor on the presynaptic terminal", species: "norepinephrine", kind: "gpcr", inhibitory: true, loc: "pre" },
  };

  /** Default postsynaptic receptor drawn for a species when the drug lists none for it. */
  const DEFAULT_RECEPTOR = {
    serotonin: "5-HT2A", dopamine: "D1", norepinephrine: "alpha_post", gaba: "GABA-A", glutamate: "AMPA",
    acetylcholine: "nAChR", histamine: "H1", opioid: "MOR", adenosine: "A2A", endocannabinoid: "CB1", orexin: "OX2", melatonin: "MT1",
  };

  /** Enzymes referenced by drug.actsOn. */
  const ENZYMES = {
    MAO:  { label: "MAO (monoamine oxidase)", full: "Monoamine oxidase on mitochondria", loc: "terminal" },
    AADC: { label: "AADC (DOPA decarboxylase)", full: "Aromatic L-amino-acid decarboxylase", loc: "terminal" },
    AChE: { label: "AChE", full: "Acetylcholinesterase", loc: "cleft" },
    COX:  { label: "COX (cyclooxygenase)", full: "Cyclooxygenase enzymes", loc: "terminal" },
    "GABA-T": { label: "GABA-T (GABA transaminase)", full: "GABA transaminase (breaks down GABA inside the terminal)", loc: "terminal" },
  };

  /* ---- Schematic sagittal brain (viewBox 0 0 800 520). Not anatomically exact. ---- */
  const OUTLINE = {
    cerebrum: "M 130 260 C 105 160 190 70 330 58 C 470 48 640 78 700 185 C 735 250 715 305 665 330 C 615 352 555 348 515 334 C 470 326 420 346 350 342 C 270 338 150 335 130 260 Z",
    cerebellum: "M 540 350 C 560 335 650 330 690 350 C 725 372 700 420 650 430 C 600 440 545 415 540 350 Z",
    brainstem: "M 430 335 C 455 335 505 335 520 342 C 525 395 510 450 500 495 L 462 495 C 455 450 440 395 430 335 Z",
    sulci: [
      "M 235 92 C 260 120 255 150 232 168",
      "M 330 70 C 345 105 335 135 350 160",
      "M 430 62 C 440 95 455 112 450 140",
      "M 540 72 C 548 100 575 118 570 150",
      "M 640 120 C 630 150 650 170 640 205",
      "M 160 215 C 190 232 222 232 250 218",
    ],
  };

  /* Regions sit on the real mid-sagittal section (assets/brain_sagittal.png, drawn at 0,0 800x560). */
  const REGIONS = {
    pfc:         { name: "Prefrontal cortex",          cx: 190, cy: 150, rx: 58, ry: 52, rot: 0 },
    motor:       { name: "Motor cortex",               cx: 384, cy: 78,  rx: 40, ry: 20, rot: 0 },
    parietal:    { name: "Parietal cortex",            cx: 520, cy: 128, rx: 52, ry: 28, rot: 15 },
    occipital:   { name: "Occipital cortex",           cx: 645, cy: 245, rx: 34, ry: 56, rot: 0 },
    temporal:    { name: "Temporal cortex",            cx: 318, cy: 352, rx: 30, ry: 26, rot: 0 },
    acc:         { name: "Anterior cingulate cortex",  cx: 244, cy: 190, rx: 42, ry: 12, rot: 15 },
    thalamus:    { name: "Thalamus",                   cx: 407, cy: 262, rx: 26, ry: 20, rot: 0 },
    hypothalamus:{ name: "Hypothalamus",               cx: 337, cy: 298, rx: 14, ry: 12, rot: 0 },
    striatum:    { name: "Dorsal striatum (caudate/putamen)", cx: 354, cy: 244, rx: 20, ry: 20, rot: 0 },
    nacc:        { name: "Nucleus accumbens",          cx: 318, cy: 272, rx: 11, ry: 9, rot: 0 },
    amygdala:    { name: "Amygdala",                   cx: 342, cy: 318, rx: 12, ry: 10, rot: 0 },
    hippocampus: { name: "Hippocampus",                cx: 402, cy: 312, rx: 24, ry: 9, rot: 20 },
    bf:          { name: "Basal forebrain",            cx: 306, cy: 296, rx: 9, ry: 8, rot: 0 },
    vta:         { name: "Ventral tegmental area (VTA)", cx: 398, cy: 322, rx: 7, ry: 6, rot: 0 },
    sn:          { name: "Substantia nigra",           cx: 418, cy: 330, rx: 8, ry: 6, rot: 0 },
    pag:         { name: "Periaqueductal gray (PAG)",  cx: 432, cy: 316, rx: 8, ry: 7, rot: 0 },
    raphe:       { name: "Raphe nuclei",               cx: 424, cy: 404, rx: 6, ry: 34, rot: 5 },
    lc:          { name: "Locus coeruleus",            cx: 444, cy: 384, rx: 7, ry: 6, rot: 0 },
    medulla:     { name: "Medulla (breathing centres)", cx: 440, cy: 452, rx: 15, ry: 20, rot: 0 },
    cerebellum:  { name: "Cerebellum",                 cx: 552, cy: 398, rx: 54, ry: 40, rot: 0 },
  };

  // positions and sizes measured from the 3D model (see tools/brain_atlas); falls back to the hand-placed values
  if (window.KYP_REGION_GEOM) Object.keys(window.KYP_REGION_GEOM).forEach((k) => { if (REGIONS[k]) Object.assign(REGIONS[k], window.KYP_REGION_GEOM[k]); });

  /** Projection pathways: curves are generated from region centres (cubic beziers, gently bowed). */
  const PATHWAYS = {
    mesolimbic:   { name: "Mesolimbic dopamine pathway",   species: "dopamine",       from: "vta", to: "nacc", targets: ["nacc"] },
    mesocortical: { name: "Mesocortical dopamine pathway", species: "dopamine",       from: "vta", to: "pfc",  targets: ["pfc"] },
    nigrostriatal:{ name: "Nigrostriatal dopamine pathway", species: "dopamine",      from: "sn",  to: "striatum", targets: ["striatum"] },
    serotonergic: { name: "Serotonergic projections (raphe)", species: "serotonin",   from: "raphe", to: "pfc", targets: ["pfc", "hippocampus", "occipital"] },
    noradrenergic:{ name: "Noradrenergic projections (locus coeruleus)", species: "norepinephrine", from: "lc", to: "pfc", targets: ["pfc", "parietal"] },
    cholinergic:  { name: "Cholinergic projections (basal forebrain)", species: "acetylcholine", from: "bf", to: "hippocampus", targets: ["hippocampus", "pfc"] },
    histaminergic:{ name: "Histaminergic projections (hypothalamus)", species: "histamine", from: "hypothalamus", to: "pfc", targets: ["pfc"] },
    glutamatergic:{ name: "Cortico-cortical glutamate pathways", species: "glutamate", from: "pfc", to: "parietal", targets: ["parietal", "motor"] },
    gabaergic:    { name: "Inhibitory GABA circuits", species: "gaba", from: "thalamus", to: "pfc", targets: ["pfc"] },
    opioid:       { name: "Endogenous opioid circuits", species: "opioid", from: "pag", to: "thalamus", targets: ["thalamus"] },
  };
  Object.keys(PATHWAYS).forEach((k) => {
    const P = PATHWAYS[k], A = REGIONS[P.from];
    P.curves = P.targets.map((t, i) => {
      const B = REGIONS[t], dx = B.cx - A.cx, dy = B.cy - A.cy, L = Math.hypot(dx, dy) || 1;
      const nx = -dy / L, ny = dx / L, bow = (0.16 + 0.06 * i) * L * (i % 2 ? -1 : 1) * -1;
      return [
        { x: A.cx, y: A.cy },
        { x: A.cx + dx * 0.3 + nx * bow, y: A.cy + dy * 0.3 + ny * bow },
        { x: A.cx + dx * 0.7 + nx * bow, y: A.cy + dy * 0.7 + ny * bow },
        { x: B.cx, y: B.cy },
      ];
    });
  });

  /** Other drug targets the scene can draw (vesicle proteins, K+ channels, intracellular enzymes). */
  const TARGETS = {
    SV2A:   { label: "SV2A", full: "SV2A, a protein on synaptic vesicles" },
    VMAT2:  { label: "VMAT2", full: "Vesicular monoamine transporter 2 (VMAT2)" },
    Kv:     { label: "Kv channel", full: "voltage-gated K⁺ channels (Kv)" },
    IMPase: { label: "IMPase", full: "inositol monophosphatase (IMPase)" },
    GSK3B:  { label: "GSK-3β", full: "glycogen synthase kinase 3β (GSK-3β)" },
  };

  global.KYP_CORE = { SPECIES, RECEPTORS, DEFAULT_RECEPTOR, ENZYMES, TARGETS, OUTLINE, REGIONS, PATHWAYS };
})(window);
