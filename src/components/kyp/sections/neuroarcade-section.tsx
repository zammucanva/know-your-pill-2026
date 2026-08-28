"use client";

import Image from "next/image";
import { Gamepad2, Brain, Trophy, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Badge } from "@/components/kyp/ui/badge";
import { Reveal, RevealGroup } from "@/components/kyp/ui/reveal";
import { OrganicGradient } from "@/components/kyp/ui/organic-gradient";

const features = [
  {
    icon: Brain,
    title: "Neural Tracker",
    description: "Trace a neurotransmitter from synthesis to receptor binding against the clock.",
  },
  {
    icon: Trophy,
    title: "Streak Mode",
    description: "Chain correct answers across mechanism, side effect, and safety rounds.",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Every answer comes with a one-line neuroscience explanation.",
  },
];

export function NeuroArcadeSection() {
  return (
    <Section id="neuroarcade" className="relative overflow-hidden">
      <OrganicGradient variant="neuro" />

      <Container className="relative">
        <div className="grid items-stretch overflow-hidden rounded-2xl border border-neural/15 bg-card/30 backdrop-blur-sm lg:grid-cols-[1fr_1.1fr]">
          {/* Left: artwork */}
          <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
            <Image
              src="/artwork/neuro-arcade.png"
              alt="NeuroArcade — gamified neuroscience learning platform with interactive psychopharmacology challenges"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>

          {/* Right: content */}
          <div className="p-8 sm:p-12">
            <Reveal>
              <Badge variant="neural" size="md">
                <Gamepad2 className="h-3 w-3" />
                NeuroArcade
              </Badge>
              <h2 className="mt-4 font-serif text-h1 font-semibold text-foreground leading-tight">
                Learn neuroscience by{" "}
                <span className="kyp-text-gradient">playing it.</span>
              </h2>
              <p className="mt-4 text-body-lg text-muted-foreground leading-relaxed">
                Mini-games that turn psychopharmacology into active recall. Built for students who need to remember receptor pathways under exam pressure, and for patients curious enough to want more than a leaflet.
              </p>
            </Reveal>

            <RevealGroup className="mt-8 grid gap-3">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <Reveal key={f.title}>
                    <div className="flex items-start gap-3 rounded-xl border border-border/30 bg-card/40 p-4 transition-all duration-200 hover:border-neural/30 hover:bg-neural-soft/10">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neural-soft/40 text-neural">
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">{f.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </RevealGroup>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="rounded-xl shadow-[var(--shadow-soft)]">
                  Launch NeuroArcade
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl">
                  View Leaderboard
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
