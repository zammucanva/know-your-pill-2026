"use client";

import { Network, Brain, Route, Activity } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";

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
    <Section id="roadmap" className="bg-muted/15">
      <Container>
        <Reveal>
          <div className="mb-16">
            <p className="text-overline text-neural mb-4">In Development</p>
            <h2
              className="font-sans font-semibold tracking-[-0.03em] text-foreground max-w-2xl"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              What is being built next
            </h2>
            <p className="mt-4 text-body text-muted-foreground max-w-xl leading-relaxed">
              These features use real data from the KYP library but are not yet interactive. The information below is accurate; the visualisation layer is still being built.
            </p>
          </div>
        </Reveal>

        {/* Numbered vertical index — no cards */}
        <div>
          {roadmapItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="group flex items-start gap-6 py-10 border-b border-border/15 last:border-0">
                  {/* Large number */}
                  <span
                    className="font-sans font-bold text-muted-foreground/10 tabular-nums leading-none shrink-0"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="h-4 w-4 text-neural/50" strokeWidth={1.5} />
                      <h3 className="font-sans text-lg sm:text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground/40">
                        · Preview
                      </span>
                    </div>
                    <p className="text-body-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-2">
                      {item.preview.map((tag, ti) => (
                        <span key={tag} className="text-[0.65rem] text-muted-foreground/40 font-medium">
                          {tag}{ti < item.preview.length - 1 ? " ·" : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
