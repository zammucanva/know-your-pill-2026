import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugQuickFacts — 4-card grid of the most important facts a clinician
 * or patient needs at a glance: drug class, primary uses, onset, key side effects.
 *
 * Server Component.
 */
interface DrugQuickFactsProps {
  drug: Drug;
}

export function DrugQuickFacts({ drug }: DrugQuickFactsProps) {
  const facts = [
    {
      label: "Drug class",
      value: drug.drugClassLabel,
      text: drug.drugClassFullName,
    },
    {
      label: "Primary uses",
      value: drug.indications
        .filter((i) => i.status === "fda-approved")
        .slice(0, 3)
        .map((i) => i.name.split(" (")[0])
        .join(", "),
      text: `${drug.indications.length} total indications (${drug.indications.filter((i) => i.status === "fda-approved").length} FDA-approved)`,
    },
    {
      label: "Typical onset",
      value: "4–6 weeks",
      text: "Full antidepressant effect. Anxiety disorders may take 8–12 weeks.",
    },
    {
      label: "Key side effects",
      value: drug.commonSideEffects
        .slice(0, 3)
        .map((s) => s.name.split(" & ")[0])
        .join(", "),
      text: `${drug.commonSideEffects.length} common, ${drug.seriousSideEffects.length} serious — see full list below.`,
    },
  ];

  return (
    <Section id="quick-facts" spacing="tight">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <CardPrimitive key={f.label} variant="flat" interactive={false} showArrow={false}>
              <CardBody>
                <p className="text-overline text-muted-foreground">{f.label}</p>
                <p className="mt-1.5 font-serif text-lg font-semibold leading-tight text-foreground">
                  {f.value}
                </p>
                <p className="mt-2 text-caption text-muted-foreground leading-relaxed">
                  {f.text}
                </p>
              </CardBody>
            </CardPrimitive>
          ))}
        </div>
      </Container>
    </Section>
  );
}
