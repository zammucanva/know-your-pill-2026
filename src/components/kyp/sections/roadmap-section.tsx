"use client";

import { Network, Brain, Route, Activity } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Badge } from "@/components/kyp/ui/badge";
import { OrganicGradient } from "@/components/kyp/ui/organic-gradient";
import { Reveal, RevealGroup } from "@/components/kyp/ui/reveal";

const roadmapItems = [
  {
    icon: Network,
    title: "Knowledge Graph",
    description:
      "Open a drug page and traverse everything connected to it: class, neurotransmitter, brain region, condition, side effects, clinical case, related drugs, and patient guide. Currently a static chain preview; interactive traversal is in development.",
    preview: ["Sertraline", "SSRI", "Serotonin", "Raphe Nuclei", "Prefrontal Cortex", "Depression"],
  },
  {
    icon: Brain,
    title: "Brain Atlas",
    description:
      "An interactive map where hovering a brain region reveals its functions, related disorders, and the drugs that act on it. Six regions are indexed now; the animated atlas is forthcoming.",
    preview: ["Prefrontal Cortex", "Nucleus Accumbens", "Amygdala", "Hippocampus", "Raphe Nuclei", "Substantia Nigra"],
  },
  {
    icon: Route,
    title: "Dopamine Pathways",
    description:
      "Four major pathways (mesolimbic, mesocortical, nigrostriatal, tuberoinfundibular) with origin, termination, and clinical relevance for every psychiatric drug. Data is ready; animation is next.",
    preview: ["Mesolimbic", "Mesocortical", "Nigrostriatal", "Tuberoinfundibular"],
  },
  {
    icon: Activity,
    title: "Side Effect Library",
    description:
      "Each adverse drug reaction gets its own page: the receptor responsible, the pathway disrupted, the drugs that cause it, and step-by-step management. Six high-yield effects are previewed below; full pages are planned.",
    preview: ["Akathisia", "EPS", "Serotonin Syndrome", "NMS", "Sexual Dysfunction", "Weight Gain"],
  },
];

export function RoadmapSection() {
  return (
    <Section id="roadmap" className="bg-muted/20 relative overflow-hidden">
      <OrganicGradient variant="neuro" />

      <Container className="relative">
        <Reveal>
          <SectionHeader
            eyebrow="In Development"
            title="What is being built next"
            description="These features use real data from the KYP library but are not yet interactive. The information below is accurate; the visualisation layer is still being built."
            tone="neural"
            align="center"
          />
        </Reveal>

        <RevealGroup className="mt-12 grid gap-4 lg:grid-cols-2">
          {roadmapItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-brand/30 hover:shadow-[var(--shadow-soft)]">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft/40 text-brand">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-base font-semibold text-foreground">{item.title}</h3>
                        <Badge variant="outline" size="sm">Preview</Badge>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.preview.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border/30 bg-background/40 px-2 py-0.5 text-[0.65rem] text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
