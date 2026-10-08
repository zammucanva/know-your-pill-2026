/** Quick check of the emphasis + tier classification on the pilots. */
import { layoutMechanism } from "../src/lib/mechanism/layout";
import { pilotMechanisms } from "../src/lib/mechanism/pilots";

for (const p of pilotMechanisms) {
  const L = layoutMechanism(p);
  console.log(`\n=== ${p.mechanismId} (${L.width.toFixed(0)}x${L.height.toFixed(0)}) ===`);
  for (const e of L.edges) {
    const tag = [
      e.isFeedback ? "FB" : e.isIntervention ? "IV" : e.emphasis === "primary" ? "BB" : "ctx",
      e.labelTier ?? "-",
    ].join("/");
    console.log(
      `  ${tag.padEnd(12)} ${e.edge.from.padEnd(14)} -> ${e.edge.to.padEnd(14)} [${(e.edge.label ?? "").slice(0, 40)}]`
    );
  }
}
