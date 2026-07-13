import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import type { Drug } from "@/lib/kyp/data";

/**
 * DrugReferences — the source list for the page's clinical content.
 *
 * Server Component.
 */
interface DrugReferencesProps {
  drug: Drug;
}

export function DrugReferences({ drug }: DrugReferencesProps) {
  return (
    <Section id="references">
      <Container width="narrow">
        <SectionHeader
          eyebrow="References"
          title="Where does this content come from?"
          description="Every fact on this page is traceable to a standard pharmacology reference, regulatory document, or clinical guideline. Last clinical review date is shown in the hero."
        />

        <ol className="mt-10 space-y-3">
          {drug.references.map((ref, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground font-mono text-xs font-semibold">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-body-sm font-medium text-foreground">{ref.source}</p>
                {ref.section && (
                  <p className="mt-0.5 text-caption text-muted-foreground">{ref.section}</p>
                )}
                {ref.url && (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-caption text-brand underline-offset-4 hover:underline"
                  >
                    Open source →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>

        {drug.reviewers && drug.reviewers.length > 0 && (
          <div className="mt-8">
            <Callout variant="info" title="Review methodology">
              {drug.reviewers.join(" · ")}
            </Callout>
          </div>
        )}

        <div className="mt-8 rounded-xl border border-border/70 bg-muted/30 p-4 text-center">
          <p className="text-caption text-muted-foreground">
            This page is for educational support only. It does not replace clinical judgment,
            prescribing information, or local guidelines. Always verify dosing and interactions
            against the current edition of your formulary.
          </p>
        </div>
      </Container>
    </Section>
  );
}
