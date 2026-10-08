/* KYP Synapse Studio — medications that use the newer animation types:
 *   vesicle_protein_ligand      (SV2A: levetiracetam, brivaracetam)
 *   vesicle_loading_inhibitor   (VMAT2 blockers: tetrabenazine, valbenazine, deutetrabenazine, reserpine)
 *   k_channel_modulator         (Kv openers and blockers)
 *   intracellular_modulator     (lithium: second-messenger cascade)
 *   enzyme_inhibitor on GABA-T  (vigabatrin)
 * plus a few drugs that fit the existing types. Teaching schematic; confirm against prescribing information.
 */
(function (global) {
  "use strict";

  const LIB = global.KYP_DRUGS;
  const SRC = "Standard pharmacology references (e.g. Katzung & Trevor; Goodman & Gilman; Stahl's Essential Psychopharmacology). Confirm against current prescribing information.";
  function add(d) { d.evidence = d.evidence || SRC; d.aliases = d.aliases || []; LIB[d.id] = d; }
  function family(base, list) { list.forEach((o) => add(Object.assign({}, base, o))); }
  const R = (id, effect, note) => ({ id, effect, note: note || "" });
  const P = (id, effect) => ({ id, effect });

  /* ------------------------------ SV2A ligands ------------------------------ */
  family({
    class: "SV2A ligand (synaptic-vesicle protein)", uses: "Epilepsy", species: ["glutamate"], receptors: ["AMPA"], action: "vesicle_protein_ligand", actsOn: ["SV2A"],
    regions: [R("temporal", "down", "Less excitatory transmitter released in seizure-prone circuits"), R("hippocampus", "down", "Dampens seizure spread"), R("pfc", "down")],
    pathways: [P("glutamatergic", "down")], onset: "Seizure protection begins within days.",
    simplifications: "Only the reduced release probability is drawn. How binding SV2A changes release is still being worked out; effects on calcium channels are proposed but not drawn.",
  }, [
    { id: "levetiracetam", name: "Levetiracetam", aliases: ["Keppra"], extra: "One of the most widely used anticonvulsants; its target (SV2A) differs from other antiseizure drugs." },
    { id: "brivaracetam", name: "Brivaracetam", aliases: ["Briviact"], extra: "Binds SV2A more strongly than levetiracetam." },
  ]);

  /* ------------------------------ VMAT2 blockers ------------------------------ */
  family({
    class: "VMAT2 inhibitor", species: ["dopamine"], receptors: ["D1", "D2"], action: "vesicle_loading_inhibitor", actsOn: ["VMAT2"],
    uses: "Chorea in Huntington disease, tardive dyskinesia",
    regions: [R("striatum", "down", "Less dopamine released onto movement circuits"), R("nacc", "down", "Less dopamine in reward circuits"), R("sn", "mixed", "Dopamine neurons here lose vesicle filling")],
    pathways: [P("nigrostriatal", "down"), P("mesolimbic", "down")], onset: "Effect builds over days to weeks.",
    simplifications: "Vesicular loading is blocked, so less dopamine is released. Depression and sedation are recognised side effects of depleting monoamines.",
  }, [
    { id: "tetrabenazine", name: "Tetrabenazine", aliases: ["Xenazine"], extra: "Short-acting; taken several times a day." },
    { id: "valbenazine", name: "Valbenazine", aliases: ["Ingrezza"], extra: "A prodrug of a tetrabenazine metabolite; once daily." },
    { id: "deutetrabenazine", name: "Deutetrabenazine", aliases: ["Austedo"], extra: "Deuterium-modified tetrabenazine with a longer half-life." },
  ]);
  add({
    id: "reserpine", name: "Reserpine", aliases: ["Serpasil"], class: "VMAT inhibitor (monoamine depleter)", uses: "Hypertension (rarely used today)",
    species: ["norepinephrine", "serotonin", "dopamine"], receptors: ["5-HT2A", "D1"], action: "vesicle_loading_inhibitor", actsOn: ["VMAT2"],
    regions: [R("lc", "down", "Norepinephrine stores run low"), R("raphe", "down", "Serotonin stores run low"), R("pfc", "down", "Less monoamine signalling"), R("striatum", "down", "Less dopamine: parkinsonism can develop")],
    pathways: [P("noradrenergic", "down"), P("serotonergic", "down"), P("nigrostriatal", "down")], onset: "Slow onset; effects last for days because the block is irreversible.",
    simplifications: "It blocks VMAT irreversibly, so recovery needs new transporters to be made. Its role in the monoamine theory of depression is historical.",
  });

  /* ------------------------------ Potassium-channel modulators ------------------------------ */
  add({
    id: "ezogabine", name: "Ezogabine (retigabine)", aliases: ["Potiga", "Trobalt"], class: "Kv7 (KCNQ) potassium-channel opener", uses: "Focal seizures (withdrawn from the market in 2017)",
    species: ["glutamate"], receptors: ["AMPA"], action: "k_channel_modulator", kdir: "open", actsOn: ["Kv"],
    regions: [R("temporal", "down", "Hyperpolarises seizure-prone neurons"), R("hippocampus", "down"), R("motor", "down")], pathways: [P("glutamatergic", "down")],
    onset: "Within days of regular dosing.", simplifications: "It stabilises the resting membrane by opening Kv7 channels. It was withdrawn because it caused blue-grey skin and retinal discolouration.",
  });
  add({
    id: "dalfampridine", name: "Dalfampridine (fampridine, 4-aminopyridine)", aliases: ["Ampyra", "Fampyra"], class: "Potassium-channel blocker", uses: "Improving walking in multiple sclerosis",
    species: ["glutamate"], receptors: ["AMPA"], action: "k_channel_modulator", kdir: "block", actsOn: ["Kv"],
    regions: [R("motor", "up", "Helps signals cross demyelinated axons"), R("cerebellum", "up", "Improves conduction in damaged pathways")], pathways: [P("glutamatergic", "up")],
    onset: "Within weeks; taken twice daily.", simplifications: "It acts mostly on axons exposed by demyelination, lengthening the action potential so signals get through. It lowers the seizure threshold, so dose limits matter.",
  });

  /* ------------------------------ Lithium ------------------------------ */
  add({
    id: "lithium", name: "Lithium", aliases: ["Lithobid", "lithium carbonate"], class: "Mood stabiliser", uses: "Bipolar disorder (mania and relapse prevention)",
    species: ["serotonin"], receptors: ["5-HT2A", "5-HT1A"], action: "intracellular_modulator", actsOn: ["IMPase", "GSK3B"],
    regions: [R("pfc", "mixed", "Steadies over-active signalling and supports plasticity (proposed)"), R("amygdala", "mixed", "Emotional-circuit stabilisation"), R("hippocampus", "mixed", "Neuroprotective effects are proposed")],
    pathways: [P("serotonergic", "mixed")], onset: "Antimanic effect takes days to weeks; levels in the blood must be monitored (narrow safety margin).",
    simplifications: "Lithium has several targets. Inhibiting inositol monophosphatase and GSK-3β are the best-supported ones and are the ones drawn; the exact route to mood stabilisation is still being studied. Blood level, kidney and thyroid monitoring matter clinically.",
  });

  /* ------------------------------ Drugs that fit the existing types ------------------------------ */
  add({
    id: "vigabatrin", name: "Vigabatrin", aliases: ["Sabril"], class: "GABA transaminase inhibitor", uses: "Infantile spasms, refractory focal seizures",
    species: ["gaba"], receptors: ["GABA-A"], action: "enzyme_inhibitor", actsOn: ["GABA-T"],
    regions: [R("thalamus", "up", "More inhibition calms seizure circuits"), R("hippocampus", "up"), R("pfc", "up")], pathways: [P("gabaergic", "up")],
    onset: "Within days; requires regular eye (visual field) checks.", simplifications: "It irreversibly blocks GABA-T, so more GABA is stored and each release is larger.",
  });
  add({
    id: "tiagabine", name: "Tiagabine", aliases: ["Gabitril"], class: "GABA reuptake inhibitor", uses: "Focal seizures",
    species: ["gaba"], receptors: ["GABA-A"], action: "reuptake_inhibitor", actsOn: ["GAT"],
    regions: [R("thalamus", "up", "More GABA stays in the cleft"), R("hippocampus", "up"), R("pfc", "up")], pathways: [P("gabaergic", "up")],
    onset: "Within days.", simplifications: "It blocks GAT-1, the main neuronal GABA transporter.",
  });
  add({
    id: "perampanel", name: "Perampanel", aliases: ["Fycompa"], class: "AMPA receptor antagonist", uses: "Focal and generalised seizures",
    species: ["glutamate"], receptors: ["AMPA"], action: "receptor_antagonist", actsOn: ["AMPA"],
    regions: [R("temporal", "down", "Less fast excitatory signalling"), R("hippocampus", "down"), R("motor", "down")], pathways: [P("glutamatergic", "down")],
    onset: "Within weeks of slow titration.", simplifications: "It binds a non-competitive site and blocks AMPA channel opening; irritability and mood changes are known side effects (not drawn).",
  });
  add({
    id: "pimavanserin", name: "Pimavanserin", aliases: ["Nuplazid"], class: "5-HT2A inverse agonist", uses: "Hallucinations and delusions in Parkinson disease psychosis",
    species: ["serotonin"], receptors: ["5-HT2A"], action: "receptor_antagonist", actsOn: ["5-HT2A"],
    regions: [R("pfc", "down", "Calms 5-HT2A-driven cortical signalling"), R("temporal", "down")], pathways: [P("serotonergic", "down")],
    onset: "Within weeks.", simplifications: "It has no activity at dopamine receptors, which is why it does not worsen Parkinson movement symptoms.",
  });
})(window);
