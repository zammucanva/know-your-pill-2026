// Engine unit test — validates transformation quality on representative cases
import { readFileSync } from "node:fs";

const CASES = [
  // [input, expected-output or null to just show]
  ["Each guide below follows the same structure — mechanism of action, receptor pharmacology, and a real clinical case.",
   "Each guide below follows the same structure: mechanism of action, receptor pharmacology, and a real clinical case."],
  ["The hepatotoxic last-resort stimulant — ADHD's liver-monitoring lesson in a tablet.",
   "A hepatotoxic last-resort stimulant: an ADHD lesson in liver monitoring."],
  ["It was reserved for ADHD patients who fail to respond to other treatments — never first-line, because of hepatotoxicity: drug-induced liver failure made pemoline the textbook example.",
   "It was reserved for ADHD patients who fail to respond to other treatments, never first-line, because of hepatotoxicity: drug-induced liver failure made pemoline the textbook example."],
  ["Over 2–6 weeks, downstream neuroadaptive changes — including 5-HT1A autoreceptor desensitisation and increased BDNF expression in the hippocampus — produce the clinical antidepressant effects.",
   "Over 2–6 weeks, downstream neuroadaptive changes (including 5-HT1A autoreceptor desensitisation and increased BDNF expression in the hippocampus) produce the clinical antidepressant effects."],
  ["No — taper gradually under medical supervision rather than stopping abruptly.",
   "No. Taper gradually under medical supervision rather than stopping abruptly."],
  ["Take it as soon as you remember unless it is nearly time for your next dose — in that case, skip the missed dose.",
   "Take it as soon as you remember unless it is nearly time for your next dose. In that case, skip the missed dose."],
  ["You can answer the recall questions cold — if not, you know which lesson to revisit.",
   "You can answer the recall questions cold. If not, you know which lesson to revisit."],
  ["Take exactly as prescribed — same time each day.",
   "Take it exactly as prescribed, at the same time each day."],
  ["As per international guidance — see Monitoring section.",
   "As per international guidance; see the Monitoring section."],
  ["Benefit from Amoxapine builds over weeks — do not judge it in the first days.",
   "Benefit from Amoxapine builds over weeks. Do not judge it in the first days."],
  ["The 5-HT2A and 5-HT2C receptors are also blocked — contributing to anxiolytic and sleep-restoring effects.",
   "The 5-HT2A and 5-HT2C receptors are also blocked, contributing to anxiolytic and sleep-restoring effects."],
  ["Overdose with Buprenorphine is managed supportively — no specific antidote.",
   "Overdose with Buprenorphine is managed supportively: no specific antidote."],
  ["This is a tricyclic antidepressant — one of the oldest and most studied families.",
   "This is a tricyclic antidepressant, one of the oldest and most studied families."],
  ["Rapid relief — but the dependence severity makes SSRIs the long-term answer.",
   "Rapid relief, but the dependence severity makes SSRIs the long-term answer."],
  ["Daily routine — get up, dress, and eat meals at the same times each day.",
   "Daily routine: get up, dress, and eat meals at the same times each day."],
  ["Bupropion's #1 advantage — it does NOT cause this",
   "Bupropion's #1 advantage: it does NOT cause this"],
  ["Aripiprazole puts a 'rip' in the wall of pure D2 blockade — partial agonism lets some dopamine signal through.",
   "Aripiprazole puts a 'rip' in the wall of pure D2 blockade: partial agonism lets some dopamine signal through."],
  ["Least metabolic burden among atypicals — the activating 'thermostat' antipsychotic",
   "Least metabolic burden among atypicals: the activating 'thermostat' antipsychotic"],
  ["Mechanism: GABA-A positive allosteric modulation — amplified natural inhibition.",
   "Mechanism: GABA-A positive allosteric modulation; amplified natural inhibition."],
  ["Contact your doctor immediately — do not wait — if you feel more agitated or irritable.",
   "Contact your doctor immediately (do not wait) if you feel more agitated or irritable."],
  ["Typical antipsychotics all share one mechanism — D2 blockade — so efficacy is similar across the class.",
   "Typical antipsychotics all share one mechanism (D2 blockade) so efficacy is similar across the class."],
  ["Its legacy is the every-2-weeks ALT monitoring ritual — pharmacovigilance history every prescriber should know.",
   "Its legacy is the every-2-weeks ALT monitoring ritual: pharmacovigilance history every prescriber should know."],
  ["The founding TCA — depression, enuresis, and panic history",
   "The founding TCA: depression, enuresis, and panic history"],
  ["Acute reuptake blockade within hours; clinical response after weeks — the central paradox of antidepressant pharmacology.",
   "Acute reuptake blockade within hours; clinical response after weeks: the central paradox of antidepressant pharmacology."],
  ["Benzodiazepines amplify the brain's own inhibitory signal (GABA) rather than activating the receptor directly — which is why their effect is powerful.",
   "Benzodiazepines amplify the brain's own inhibitory signal (GABA) rather than activating the receptor directly, which is why their effect is powerful."],
  ["Schizophrenia. Differentials are considered — and excluded clinically.",
   "Schizophrenia. Differentials are considered, and excluded clinically."],
];

// Load engine source and reuse its internals by dynamic import with a shim
const engineSrc = readFileSync("scripts/dash-cleanup-engine.mjs", "utf8");
const mod = engineSrc
  .replace(/^#!.*\n/, "")
  .split("const files =")[0] // cut off file-walking part
  .replace(/^import .*$/gm, "");
const fn = new Function(mod + "\nreturn { transformContent, CURATED };");
const { transformContent } = fn();

let pass = 0, fail = 0;
for (const [input, expected] of CASES) {
  const log = { rules: [], skipped: [] };
  const out = transformContent(input, log);
  const got = out === null ? input : out;
  if (expected === null) { console.log("SHOW:", JSON.stringify(got)); continue; }
  if (got === expected) { pass++; }
  else { fail++; console.log("FAIL in : " + input.slice(0, 80)); console.log("  got     : " + got); console.log("  expected: " + expected); }
}
console.log(`\n${pass} pass, ${fail} fail`);
