import { Globe, MapPin, BookOpen, FileText, FlaskConical, ClipboardList, Heart, ExternalLink, GraduationCap } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import { Badge } from "@/components/kyp/ui/badge";
import type {
  Drug,
  CategorisedReferences,
  DrugReference,
  IndianReference,
  EvidenceSources,
} from "@/lib/kyp/data";

/**
 * DrugReferences — Evidence Sources (International vs Indian).
 *
 * India Layer: when `evidenceSources` is populated, renders the
 * restructured International vs Indian split.
 * Falls back to the old `references` categorised format if
 * `evidenceSources` is not yet populated.
 *
 * Server Component.
 */
interface DrugReferencesProps {
  drug: Drug;
}

export function DrugReferences({ drug }: DrugReferencesProps) {
  // Use new evidenceSources format if available
  if (drug.evidenceSources) {
    return <EvidenceSourcesView drug={drug} />;
  }

  // Fall back to old categorised references
  return <CategorisedReferencesView drug={drug} />;
}

/* ============================================================
   New: Evidence Sources (International vs Indian)
   ============================================================ */
function EvidenceSourcesView({ drug }: { drug: Drug }) {
  const es = drug.evidenceSources as EvidenceSources;

  return (
    <Section id="references">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Evidence Sources"
          title="Where does this content come from?"
          description="International references provide the scientific foundation. Indian references provide local guideline, curriculum, and regulatory context. Both are presented clearly so you understand the source of every recommendation."
        />

        <div className="mt-10 space-y-6">
          {/* International */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft/60 text-brand">
                <Globe className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-h4">International</h3>
                <p className="text-caption text-muted-foreground">Global scientific foundation</p>
              </div>
              <Badge variant="outline" size="sm" className="ml-auto">{es.international.length}</Badge>
            </div>
            <ul className="space-y-2">
              {es.international.map((ref, i) => (
                <ReferenceItem key={i} ref_={ref} index={i} />
              ))}
            </ul>
          </div>

          {/* Indian */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft/60 text-brand">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-h4">Indian</h3>
                <p className="text-caption text-muted-foreground">Indian guidelines, curriculum, and regulatory sources</p>
              </div>
              <Badge variant="brand" size="sm" className="ml-auto">{es.indian.length}</Badge>
            </div>
            <ul className="space-y-2">
              {es.indian.map((ref, i) => (
                <IndianReferenceItem key={i} ref_={ref} index={i} />
              ))}
            </ul>
          </div>
        </div>

        <DisclaimerCallout drug={drug} />
      </Container>
    </Section>
  );
}

function IndianReferenceItem({ ref_, index }: { ref_: IndianReference; index: number }) {
  const typeIcons = {
    textbook: BookOpen,
    guideline: ClipboardList,
    curriculum: GraduationCap,
    regulatory: FileText,
  };
  const Icon = typeIcons[ref_.type];

  return (
    <li className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground font-mono text-xs font-semibold">
        {index + 1}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <Icon className="h-3 w-3 shrink-0 text-brand" />
          <p className="text-body-sm font-medium text-foreground leading-snug">{ref_.source}</p>
        </div>
        {ref_.section && (
          <p className="mt-0.5 text-caption text-muted-foreground">{ref_.section}</p>
        )}
        <div className="mt-1 flex items-center gap-2">
          <Badge variant="outline" size="sm">{ref_.type}</Badge>
          {ref_.url && (
            <a
              href={ref_.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-caption text-brand underline-offset-4 hover:underline"
            >
              Open <ExternalLink className="h-2.5 w-2.5" />
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

/* ============================================================
   Legacy: Categorised References (fallback)
   ============================================================ */
function CategorisedReferencesView({ drug }: { drug: Drug }) {
  const refs = drug.references;
  const categoryMeta: {
    key: keyof CategorisedReferences;
    label: string;
    icon: typeof BookOpen;
    description: string;
  }[] = [
    { key: "guidelines", label: "Clinical Guidelines", icon: ClipboardList, description: "National and international treatment guidelines" },
    { key: "textbooks", label: "Textbooks", icon: BookOpen, description: "Standard pharmacology and psychiatry references" },
    { key: "trials", label: "Landmark Trials", icon: FlaskConical, description: "Key clinical trials and meta-analyses" },
    { key: "reviews", label: "Review Articles & Labels", icon: FileText, description: "Systematic reviews and regulatory prescribing information" },
    { key: "patientResources", label: "Patient Resources", icon: Heart, description: "Patient-friendly information and helplines" },
  ];

  const nonEmptyCategories = categoryMeta.filter((c) => refs[c.key].length > 0);

  return (
    <Section id="references">
      <Container width="narrow">
        <SectionHeader
          eyebrow="References"
          title="Where does this content come from?"
          description="Every fact on this page is traceable to a standard pharmacology reference, regulatory document, clinical trial, or guideline."
        />

        <div className="mt-10 space-y-8">
          {nonEmptyCategories.map(({ key, label, icon: Icon, description }) => (
            <div key={key}>
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft/60 text-brand">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-h4">{label}</h3>
                  <p className="text-caption text-muted-foreground">{description}</p>
                </div>
                <Badge variant="outline" size="sm" className="ml-auto">{refs[key].length}</Badge>
              </div>
              <ul className="space-y-2">
                {refs[key].map((ref, i) => (
                  <ReferenceItem key={i} ref_={ref} index={i} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <DisclaimerCallout drug={drug} />
      </Container>
    </Section>
  );
}

/* ============================================================
   Shared sub-components
   ============================================================ */
function ReferenceItem({ ref_, index }: { ref_: DrugReference; index: number }) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground font-mono text-xs font-semibold">
        {index + 1}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-body-sm font-medium text-foreground leading-snug">{ref_.source}</p>
        {ref_.section && <p className="mt-0.5 text-caption text-muted-foreground">{ref_.section}</p>}
        {ref_.url && (
          <a
            href={ref_.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-0.5 text-caption text-brand underline-offset-4 hover:underline"
          >
            Open source <ExternalLink className="h-2.5 w-2.5" />
          </a>
        )}
      </div>
    </li>
  );
}

function DisclaimerCallout({ drug }: { drug: Drug }) {
  return (
    <>
      {drug.reviewers && drug.reviewers.length > 0 && (
        <div className="mt-10">
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
    </>
  );
}

