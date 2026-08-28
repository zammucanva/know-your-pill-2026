"use client";

import { Network, Brain, Route, Activity } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { cn } from "@/lib/utils";

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
            <p className="text-overline text-neural mb-3">In Development</p>
            <h2 className="font-serif text-h1 font-semibold tracking-tight text-foreground max-w-2xl">
              What is being built next
            </h2>
            <p className="mt-4 text-body text-muted-foreground max-w-xl leading-relaxed">
              These features use real data from the KYP library but are not yet interactive. The information below is accurate; the visualisation layer is still being built.
            </p>
          </div>
        </Reveal>

        {/* Vertical numbered index */}
        <div className="divide-y divide-border/20">
          {roadmapItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="group flex items-start gap-6 py-10 transition-all duration-300">
                  {/* Large number */}
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-muted-foreground/15 tabular-nums leading-none shrink-0 w-16">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neural-soft/30 text-neural">
                        <Icon className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                        {item.title}
                      </h3>
                      <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-muted-foreground/60 border border-border/30 px-2 py-0.5 rounded-full">
                        Preview
                      </span>
                    </div>
                    <p className="text-body-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.preview.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.65rem] text-muted-foreground/50 font-medium"
                        >
                          {tag}{item.preview.indexOf(tag) < item.preview.length - 1 ? " · " : ""}
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
