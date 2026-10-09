import { ArrowRight, Brain } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { STUDIO_DRUG_COUNT, studioHref } from "@/lib/kyp/synapse-studio";

/**
 * SynapseStudioSection: homepage entry point to the Synapse Studio
 * (labelled 2D brain and synapse animations, static app in
 * /public/synapse-studio). Server Component; links are raw anchors
 * (the studio is a static page, not a Next route) routed through
 * linkPath via studioHref so the GitHub Pages basePath is applied.
 */
const examples = [
  { slug: "sertraline", label: "Sertraline" },
  { slug: "haloperidol", label: "Haloperidol" },
  { slug: "diazepam", label: "Diazepam" },
  { slug: "lithium", label: "Lithium" },
  { slug: "naloxone", label: "Naloxone" },
];

export function SynapseStudioSection() {
  return (
    <Section spacing="tight">
      <Container>
        <Reveal>
          <div className="rounded-lg border border-border/60 bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <p className="text-overline text-brand mb-2 inline-flex items-center gap-2">
                  <Brain className="h-4 w-4" aria-hidden />
                  Synapse Studio
                </p>
                <h2
                  className="font-serif font-semibold tracking-tight text-foreground"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                >
                  See how a medication acts in the brain
                </h2>
                <p className="mt-2 max-w-xl text-body-sm text-muted-foreground">
                  Pick any of {STUDIO_DRUG_COUNT} medications and watch a labelled 2D animation: first the
                  brain regions it affects, then a zoom into the synapse showing the receptor, transporter
                  or enzyme it acts on. Pause, scrub, switch to full screen.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Example medications">
                  {examples.map((e) => (
                    <li key={e.slug}>
                      <a
                        href={studioHref(e.slug)}
                        className="inline-flex min-h-[36px] items-center rounded-full border border-border bg-muted/30 px-3 text-body-sm text-foreground/80 transition-colors hover:border-brand/40 hover:text-brand"
                      >
                        {e.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0">
                <a
                  href={studioHref()}
                  className="group inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
                >
                  Open Synapse Studio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
