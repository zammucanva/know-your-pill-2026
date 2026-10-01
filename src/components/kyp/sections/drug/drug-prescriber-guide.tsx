import Link from "next/link";
import {
  Pill,
  Clock,
  TrendingUp,
  TrendingDown,
  Layers,
  FlaskConical,
  Activity,
  ShieldAlert,
  ArrowDownToLine,
  Users,
  Target,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  Baby,
  HeartPulse,
  Stethoscope,
  Sparkles,
  Ban,
} from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import { Callout } from "@/components/kyp/ui/callout";
import { HalfLifeVisualizer } from "@/components/kyp/ui/half-life-visualizer";
import type { Drug, PrescriberDosingRow, PrescriberSpecialPopulation } from "@/lib/kyp/data";

/**
 * DrugPrescriberGuide — the Stahl "Prescriber's Guide" layer.
 *
 * Renders drug.prescriberGuide: a structured five-zone prescriber
 * playbook (therapeutics → side effects → dosing & use → special
 * populations → the art of psychopharmacology), distilled from
 * Stahl's Essential Psychopharmacology: The Prescriber's Guide.
 *
 * The section is prescriber-focused: page.tsx hides it in Patient
 * difficulty mode and the patient guided-learning path.
 *
 * Server Component.
 */
interface DrugPrescriberGuideProps {
  drug: Drug;
}

/* ─── Small helpers ─────────────────────────────────────────── */

function BulletList({ items, tone = "bg-brand" }: { items: string[]; tone?: string }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-xs text-foreground/90 leading-relaxed">
          <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${tone}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-xs text-foreground/90 leading-relaxed">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-[10px] font-semibold text-brand">
            {i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function BlockHeading({ icon: Icon, title, hint }: { icon: typeof Pill; title: string; hint?: string }) {
  return (
    <div className="mb-4 flex items-start justify-between gap-3">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-brand" />
        <h3 className="text-h4">{title}</h3>
      </div>
      {hint && <Badge variant="outline" size="sm">{hint}</Badge>}
    </div>
  );
}

/* ─── 1. Dosing & titration table ───────────────────────────── */

function DosingTable({ rows }: { rows: PrescriberDosingRow[] }) {
  const notes = rows.flatMap((r) => (r.notes ?? []).map((n) => ({ indication: r.indication, note: n })));

  return (
    <div>
      <BlockHeading icon={Pill} title="Dosing & Titration" hint={`${rows.length} indication${rows.length > 1 ? "s" : ""}`} />
      <div className="overflow-x-auto rounded-lg border border-border/70">
        <table className="w-full border-collapse text-body-sm">
          <thead>
            <tr className="border-b border-border/70 bg-muted/40 text-left">
              <th scope="col" className="p-3 font-semibold">Indication</th>
              <th scope="col" className="p-3 font-semibold">Start</th>
              <th scope="col" className="p-3 font-semibold">Titrate</th>
              <th scope="col" className="p-3 font-semibold">Target</th>
              <th scope="col" className="p-3 font-semibold">Max</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-border/40 last:border-0 align-top">
                <td className="p-3 font-medium">{row.indication}</td>
                <td className="p-3 text-foreground/90">{row.starting}</td>
                <td className="p-3 text-foreground/90">{row.titration}</td>
                <td className="p-3 text-foreground/90">{row.target}</td>
                <td className="p-3">
                  <Badge variant="outline" size="sm">{row.max}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {notes.length > 0 && (
        <div className="mt-4 space-y-1.5">
          {notes.map((n, i) => (
            <p key={i} className="text-xs leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground/80">{n.indication}:</span> {n.note}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── 3. Special populations grid ───────────────────────────── */

function SpecialPopCard({ pop, icon: Icon }: { pop: PrescriberSpecialPopulation; icon: typeof Users }) {
  return (
    <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-border/60">
      <CardBody>
        <div className="mb-3 flex items-center gap-2">
          <Icon className="h-4 w-4 text-neural" />
          <h4 className="text-sm font-semibold">{pop.population}</h4>
        </div>
        <BulletList items={pop.guidance} tone="bg-neural" />
      </CardBody>
    </CardPrimitive>
  );
}

const POPULATION_ICONS: Record<string, typeof Users> = {
  renal: FlaskConical,
  hepatic: Activity,
  cardiac: HeartPulse,
  elderly: Users,
  children: Baby,
  adolescent: Baby,
  pregnancy: Baby,
  breast: Baby,
  breastfeeding: Baby,
};

function iconForPopulation(label: string): typeof Users {
  const l = label.toLowerCase();
  for (const key of Object.keys(POPULATION_ICONS)) {
    if (l.includes(key)) return POPULATION_ICONS[key];
  }
  return Stethoscope;
}

/* ─── Main component ────────────────────────────────────────── */

export function DrugPrescriberGuide({ drug }: DrugPrescriberGuideProps) {
  const pg = drug.prescriberGuide;
  if (!pg) return null;

  return (
    <Section id="prescriber-guide" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Prescriber's Guide · after Stahl"
          title="Dose it. Titrate it. Stop it safely."
          description={`The complete prescribing playbook for ${drug.genericName} — onset, dosing, side-effect rescue, tapering, special populations, and the art of psychopharmacology.`}
          tone="neural"
        />

        <div className="mt-10 space-y-10">
          {/* ── Zone 1: Therapeutics — onset & response management ── */}
          <div className="grid gap-4 lg:grid-cols-2">
            <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-brand/20 bg-brand-soft/30">
              <CardBody>
                <BlockHeading icon={Clock} title="How Long Until It Works" />
                <BulletList items={pg.onsetTimeline} />
              </CardBody>
            </CardPrimitive>

            <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-success/20 bg-success-soft/30">
              <CardBody>
                <BlockHeading icon={TrendingUp} title="If It Works" hint="continuation rules" />
                <BulletList items={pg.ifItWorks} tone="bg-success" />
              </CardBody>
            </CardPrimitive>

            <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-warning/20 bg-warning-soft/30">
              <CardBody>
                <BlockHeading icon={TrendingDown} title="If It Doesn't Work" hint="next moves" />
                <BulletList items={pg.ifItDoesNotWork} tone="bg-warning" />
              </CardBody>
            </CardPrimitive>

            <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-neural/20 bg-neural-soft/30">
              <CardBody>
                <BlockHeading icon={Layers} title="Best Augmenting Combos" hint="partial response" />
                <BulletList items={pg.augmentationCombos} tone="bg-neural" />
              </CardBody>
            </CardPrimitive>
          </div>

          {pg.testsBeforeStarting.length > 0 && (
            <Callout variant="info" title="Before you start — baseline workup">
              <ul className="mt-1 space-y-1">
                {pg.testsBeforeStarting.map((t, i) => (
                  <li key={i} className="text-xs leading-relaxed text-foreground/90">• {t}</li>
                ))}
              </ul>
            </Callout>
          )}

          {/* ── Zone 3: Dosing & use ── */}
          <DosingTable rows={pg.dosing} />

          <div className="grid gap-4 lg:grid-cols-2">
            <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-border/60">
              <CardBody>
                <BlockHeading icon={Pill} title="Dosage Forms" />
                <div className="flex flex-wrap gap-2">
                  {pg.dosageForms.map((form, i) => (
                    <Badge key={i} variant="outline" size="sm">{form}</Badge>
                  ))}
                </div>
                {pg.dosingTips.length > 0 && (
                  <div className="mt-5">
                    <p className="mb-2 text-overline text-muted-foreground">Dosing pearls</p>
                    <BulletList items={pg.dosingTips} />
                  </div>
                )}
              </CardBody>
            </CardPrimitive>

            <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-border/60">
              <CardBody>
                <BlockHeading icon={ShieldAlert} title="Side Effects — The Management Ladder" hint="wait → reduce → switch" />
                <NumberedList items={pg.sideEffectManagement} />
                {pg.sideEffectRescue.length > 0 && (
                  <div className="mt-5 border-t border-border/60 pt-4">
                    <p className="mb-2 text-overline text-muted-foreground">Rescue add-ons (keep the drug, treat the effect)</p>
                    <BulletList items={pg.sideEffectRescue} tone="bg-warning" />
                  </div>
                )}
                <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-4">
                  <Badge variant="outline" size="sm" className="border-warning/30">Weight: {pg.weightGain}</Badge>
                  <Badge variant="outline" size="sm" className="border-neural/30">Sedation: {pg.sedation}</Badge>
                </div>
                {/* Stahl's Phase 5 — see how the rest of this class differs
                    across documented concerns (weight, sedation, prolactin,
                    EPS…). Educational comparison, never a ranking. */}
                <p className="mt-3 text-[0.7rem] leading-relaxed">
                  {/* prefetch={false}: engine route bundles the registry chunk */}
                  <Link
                    href={`/compare/classes?class=${drug.drugClass}`}
                    prefetch={false}
                    className="font-medium text-brand hover:underline"
                  >
                    Compare {drug.drugClassLabel} medications across concerns →
                  </Link>
                </p>
              </CardBody>
            </CardPrimitive>
          </div>

          {pg.sideEffectLogic.length > 0 && (
            <Callout variant="info" title="Why the side effects happen">
              <ul className="mt-1 space-y-1">
                {pg.sideEffectLogic.map((s, i) => (
                  <li key={i} className="text-xs leading-relaxed text-foreground/90">• {s}</li>
                ))}
              </ul>
            </Callout>
          )}

          {/* ── Zone 3b: Stopping, PK, long-term ── */}
          <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-brand/20">
            <CardBody>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <BlockHeading icon={ArrowDownToLine} title="How To Stop — Taper Protocol" />
                  <NumberedList items={pg.howToStop} />
                </div>
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" size="sm" className="border-success/30">Long-term: {pg.longTermUse}</Badge>
                    <Badge variant="outline" size="sm" className="border-warning/30">Habit-forming: {pg.habitForming}</Badge>
                  </div>
                  {pg.pharmacokinetics.length > 0 && (
                    <div>
                      <p className="mb-2 text-overline text-muted-foreground">Pharmacokinetics</p>
                      <BulletList items={pg.pharmacokinetics} />
                    </div>
                  )}
                  {pg.overdose.length > 0 && (
                    <div>
                      <p className="mb-2 text-overline text-muted-foreground">Overdose</p>
                      <BulletList items={pg.overdose} tone="bg-emergency" />
                    </div>
                  )}
                </div>
              </div>
            </CardBody>
          </CardPrimitive>

          {/* ── Zone 3c: Half-life visualizer (Phase 4) ── */}
          {drug.mechanism?.halfLife && (
            <HalfLifeVisualizer
              drugName={drug.genericName}
              halfLifeText={drug.mechanism.halfLife}
            />
          )}

          {/* ── Zone 4: Special populations ── */}
          {pg.specialPopulations.length > 0 && (
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-brand" />
                <h3 className="text-h4">Special Populations</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pg.specialPopulations.map((pop, i) => (
                  <SpecialPopCard key={i} pop={pop} icon={iconForPopulation(pop.population)} />
                ))}
              </div>
            </div>
          )}

          {/* ── Hard stops ── */}
          {pg.doNotUse.length > 0 && (
            <Callout variant="danger" title="Do Not Use — Hard Stops">
              <ul className="mt-1 space-y-1">
                {pg.doNotUse.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-foreground/90">
                    <Ban className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emergency" />
                    {d}
                  </li>
                ))}
              </ul>
            </Callout>
          )}

          {/* ── Zone 5: The art of psychopharmacology ── */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand" />
              <h3 className="text-h4">The Art of Psychopharmacology</h3>
              <Badge variant="outline" size="sm">when to choose it — and when not to</Badge>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-success/20 bg-success-soft/30">
                <CardBody>
                  <div className="mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <h4 className="text-sm font-semibold">Potential Advantages</h4>
                  </div>
                  <BulletList items={pg.potentialAdvantages} tone="bg-success" />
                </CardBody>
              </CardPrimitive>
              <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-warning/20 bg-warning-soft/30">
                <CardBody>
                  <div className="mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-warning" />
                    <h4 className="text-sm font-semibold">Potential Disadvantages</h4>
                  </div>
                  <BulletList items={pg.potentialDisadvantages} tone="bg-warning" />
                </CardBody>
              </CardPrimitive>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              {pg.primaryTargetSymptoms.length > 0 && (
                <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-border/60">
                  <CardBody>
                    <div className="mb-3 flex items-center gap-2">
                      <Target className="h-4 w-4 text-neural" />
                      <h4 className="text-sm font-semibold">Primary Target Symptoms</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pg.primaryTargetSymptoms.map((s, i) => (
                        <Badge key={i} variant="outline" size="sm" className="border-neural/30">{s}</Badge>
                      ))}
                    </div>
                  </CardBody>
                </CardPrimitive>
              )}
              {pg.pearls.length > 0 && (
                <CardPrimitive variant="flat" interactive={false} showArrow={false} className="border-brand/20">
                  <CardBody>
                    <div className="mb-3 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-brand" />
                      <h4 className="text-sm font-semibold">Practice Pearls</h4>
                    </div>
                    <BulletList items={pg.pearls} />
                  </CardBody>
                </CardPrimitive>
              )}
            </div>
          </div>

          {/* ── Source & disclaimer ── */}
          <Callout variant="warning" title="Source & clinical disclaimer">
            <div className="flex items-start gap-2">
              <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
              <p className="text-xs leading-relaxed text-foreground/90">
                Prescriber content on this page is an educational paraphrase of{" "}
                <span className="font-medium">{pg.sourceEdition}</span> (Cambridge University Press). Facts are
                restated, not reproduced. This is study material for medical education — not a prescription
                aid or substitute for the current FDA/CDSCO product label, institutional protocols, or clinical
                judgement. Some entries reflect the source edition&rsquo;s era; always cross-check doses against
                the latest label before prescribing.
              </p>
            </div>
          </Callout>
        </div>
      </Container>
    </Section>
  );
}
