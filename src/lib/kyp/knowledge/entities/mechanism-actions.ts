/**
 * Mechanism action registry — the canonical vocabulary of pharmacodynamic
 * actions a KYP drug can exert on a molecular target.
 *
 * DERIVED, NEVER INVENTED: every id below is a label for a relationship
 * pattern that already exists verbatim in the locked medical data layer
 * (src/lib/kyp/data — do not modify). The chain builder resolves a drug's
 * receptor/target strings against this registry so that chips can carry a
 * stable, machine-readable action id plus a human label.
 *
 * Consumption order in the resolver (see graph.ts → deriveAction):
 *   1. negligible-affinity   (must win over reuptake-inhibition — bupropion's
 *                             SERT entry says "serotonin transporter … negligible")
 *   2. receptor-antagonism   ("antagonist", "antagonism", "antagonised")
 *   3. receptor-agonism      ("agonist" — but NOT "antagonist")
 *   4. reuptake-inhibition   ("blockade", "inhibitor", "inhibition", "reuptake"
 *                             — transporters)
 *   5. autoreceptor-desensitisation ("desensitises")
 *   6. enzyme-inhibition     ("inhibitor" — enzymes)
 *   7. ion-channel-blockade  ("blocker", "channel")
 * An edge with no derivable action still renders — it simply carries no
 * action meta. No medical claim is ever strengthened or invented here.
 */

export interface MechanismAction {
  /** Stable machine id — the value rendered as chip meta. */
  id: string;
  /** Human label for the chip meta / tooltips. */
  label: string;
}

export const mechanismActions: MechanismAction[] = [
  { id: "reuptake-inhibition", label: "Reuptake inhibition" },
  { id: "receptor-antagonism", label: "Receptor antagonism" },
  { id: "receptor-agonism", label: "Receptor agonism" },
  { id: "enzyme-inhibition", label: "Enzyme inhibition" },
  { id: "ion-channel-blockade", label: "Ion-channel blockade" },
  { id: "autoreceptor-desensitisation", label: "Autoreceptor desensitisation" },
  { id: "negligible-affinity", label: "Negligible affinity" },
];

const byId = new Map(mechanismActions.map((a) => [a.id, a]));

/** Look up an action's human label by id (null when unknown). */
export function getMechanismActionLabel(id: string): string | null {
  return byId.get(id)?.label ?? null;
}
