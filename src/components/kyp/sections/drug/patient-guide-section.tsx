import {
  Check,
  Pill,
  ListChecks,
  Brain,
  Clock,
  Activity,
  AlertTriangle,
  MessageSquare,
  ArrowLeftRight,
  CalendarX,
  Pause,
  Stethoscope,
  Siren,
  Lightbulb,
  ChevronDown,
} from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Callout } from "@/components/kyp/ui/callout";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import {
  PATIENT_GUIDE_SECTIONS,
  IN_SIMPLE_TERMS_LABEL,
  MEDICAL_DETAIL_LABEL,
} from "@/lib/kyp/patient/labels";
import type { PatientGuide } from "@/lib/kyp/patient/types";
import type { Drug } from "@/lib/kyp/data";

/**
 * PatientGuideSection — the structured plain-language patient guide.
 *
 * Rendered in place of DrugPatientEducation when guided learning mode
 * is "patient" (the page wires the switch). Server Component — all
 * content comes from the PatientGuide layer as props, so it stays
 * static-export friendly with no client JavaScript of its own. The
 * only interactive element is a native <details> disclosure for the
 * "Medical detail" layer, which works without any JavaScript.
 */
interface PatientGuideSectionProps {
  drug: Drug;
  guide: PatientGuide;
}

function SubHeading({
  icon: Icon,
  children,
  id,
}: {
  icon: typeof Pill;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <h3
      id={id}
      className="flex items-center gap-2.5 font-serif text-xl font-semibold text-foreground"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
        <Icon className="h-4 w-4" />
      </span>
      {children}
    </h3>
  );
}

export function PatientGuideSection({ drug, guide }: PatientGuideSectionProps) {
  return (
    <Section id="patient-education" className="bg-muted/20">
      <Container>
        <SectionHeader
          eyebrow="Patient Guide"
          title={`Your guide to ${drug.genericName}`}
          description="Written in plain language for patients and caregivers. It explains what this medicine is, what to expect, and what to watch out for. It is general information — your doctor's instructions for you always come first."
          tone="success"
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-12">
          {/* 1. What is this medicine? */}
          <div className="space-y-4">
            <SubHeading icon={Pill}>{PATIENT_GUIDE_SECTIONS.whatIsThis}</SubHeading>
            <p className="text-body text-foreground/90 leading-relaxed">{guide.whatIsThis}</p>
            <p className="text-body text-foreground/90 leading-relaxed">
              {guide.classInPlainWords}
            </p>
            <p className="text-body text-muted-foreground leading-relaxed">
              {drug.patientExplanation}
            </p>
          </div>

          {/* 2. What is it used for? */}
          <div className="space-y-4">
            <SubHeading icon={ListChecks}>{PATIENT_GUIDE_SECTIONS.usedFor}</SubHeading>
            <p className="text-body text-foreground/90 leading-relaxed">{guide.usedFor.intro}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {guide.usedFor.uses.map((use) => (
                <CardPrimitive key={use.name} variant="flat" interactive={false} showArrow={false}>
                  <CardBody className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-medium text-foreground">{use.name}</p>
                      <Badge variant="outline" size="sm" className="shrink-0">
                        {use.status === "approved" ? (
                          <>
                            <Check className="h-2.5 w-2.5 text-success" aria-hidden />
                            Approved
                          </>
                        ) : (
                          "Off-label"
                        )}
                      </Badge>
                    </div>
                    <p className="mt-1.5 text-body-sm text-muted-foreground leading-relaxed">
                      {use.plain}
                    </p>
                  </CardBody>
                </CardPrimitive>
              ))}
            </div>
            <p className="text-caption text-muted-foreground">
              “Off-label” means doctors prescribe it for this use based on evidence and experience,
              even though the medicine was not officially approved for it.
            </p>
          </div>

          {/* 3. How does it work? — two layers */}
          <div className="space-y-4">
            <SubHeading icon={Brain}>{PATIENT_GUIDE_SECTIONS.howItWorks}</SubHeading>
            <Callout variant="info" title={IN_SIMPLE_TERMS_LABEL}>
              {guide.howItWorks.simple}
            </Callout>
            <details className="group rounded-lg border border-border/70 bg-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-body-sm font-medium text-foreground transition-colors hover:bg-muted/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
                <span>
                  {MEDICAL_DETAIL_LABEL}
                  <span className="font-normal text-muted-foreground">
                    {" "}
                    — optional, more technical
                  </span>
                </span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <div className="border-t border-border/50 px-4 py-3">
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {guide.howItWorks.medicalDetail}
                </p>
              </div>
            </details>
          </div>

          {/* 4. When might I notice a difference? */}
          <div className="space-y-4">
            <SubHeading icon={Clock}>{PATIENT_GUIDE_SECTIONS.whenNotice}</SubHeading>
            <p className="text-body text-foreground/90 leading-relaxed">{guide.whenNotice}</p>
            <Callout variant="tip" title="How to take it">
              {guide.usuallyTaken}. If your doctor gave you different instructions, follow those.
            </Callout>
          </div>

          {/* 5. Common side effects */}
          <div className="space-y-4">
            <SubHeading icon={Activity}>{PATIENT_GUIDE_SECTIONS.commonSideEffects}</SubHeading>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              {guide.commonSideEffects.intro}
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {guide.commonSideEffects.list.map((effect) => (
                <li
                  key={effect}
                  className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-card px-3.5 py-2.5 text-body-sm text-foreground/90"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70"
                    aria-hidden
                  />
                  {effect}
                </li>
              ))}
            </ul>
            {guide.commonSideEffects.note && (
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {guide.commonSideEffects.note}
              </p>
            )}
          </div>

          {/* 6. Important side effects */}
          <div className="space-y-4">
            <SubHeading icon={AlertTriangle}>
              {PATIENT_GUIDE_SECTIONS.importantSideEffects}
            </SubHeading>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              {guide.importantSideEffects.intro}
            </p>
            <div className="space-y-3">
              {guide.importantSideEffects.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-lg border-l-4 border-l-warning bg-warning-soft/30 px-4 py-3.5"
                >
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="mt-1 text-body-sm text-foreground/80 leading-relaxed">
                    {item.whatItMeans}
                  </p>
                  <p className="mt-1.5 text-body-sm font-medium text-foreground leading-relaxed">
                    What to do: {item.whatToDo}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 7. What should I tell my doctor? */}
          <div className="space-y-4">
            <SubHeading icon={MessageSquare}>{PATIENT_GUIDE_SECTIONS.tellYourDoctor}</SubHeading>
            <ul className="space-y-2">
              {guide.tellYourDoctor.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-body-sm text-foreground/90 leading-relaxed">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* 8. Interactions */}
          <div className="space-y-4">
            <SubHeading icon={ArrowLeftRight}>{PATIENT_GUIDE_SECTIONS.interactions}</SubHeading>
            <p className="text-body text-foreground/90 leading-relaxed">{guide.interactions}</p>
          </div>

          {/* 9. Missed dose */}
          <div className="space-y-4">
            <SubHeading icon={CalendarX}>{PATIENT_GUIDE_SECTIONS.missedDose}</SubHeading>
            <p className="text-body text-foreground/90 leading-relaxed">{guide.missedDose}</p>
          </div>

          {/* 10. Stopping */}
          <div className="space-y-4">
            <SubHeading icon={Pause}>{PATIENT_GUIDE_SECTIONS.stopping}</SubHeading>
            <p className="text-body text-foreground/90 leading-relaxed">{guide.stopping}</p>
          </div>

          {/* 11. Monitoring */}
          <div className="space-y-4">
            <SubHeading icon={Stethoscope}>{PATIENT_GUIDE_SECTIONS.monitoring}</SubHeading>
            <p className="text-body text-foreground/90 leading-relaxed">{guide.monitoring}</p>
          </div>

          {/* 12. When to get urgent help — never softened */}
          <div className="space-y-4">
            <SubHeading icon={Siren}>{PATIENT_GUIDE_SECTIONS.urgentHelp}</SubHeading>
            <div className="rounded-xl border-2 border-emergency/40 bg-emergency-soft/40 p-5">
              <p className="font-medium text-foreground leading-relaxed">{guide.urgentHelp.intro}</p>
              <ul className="mt-3 space-y-2">
                {guide.urgentHelp.signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-2.5 text-body-sm text-foreground leading-relaxed">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-emergency" />
                    {sign}
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg bg-card/80 px-4 py-3 text-body-sm font-medium text-foreground leading-relaxed">
                {guide.urgentHelp.action}
              </p>
            </div>
          </div>

          {/* 13. What should I remember? */}
          <div className="space-y-4">
            <SubHeading icon={Lightbulb}>{PATIENT_GUIDE_SECTIONS.keyReminders}</SubHeading>
            <div className="space-y-2.5">
              {guide.keyReminders.map((reminder, i) => (
                <div
                  key={reminder}
                  className="flex items-start gap-3 rounded-lg border border-border/60 bg-card px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15 font-mono text-xs font-semibold text-foreground">
                    {i + 1}
                  </span>
                  <p className="text-body-sm text-foreground/90 leading-relaxed pt-0.5">
                    {reminder}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
