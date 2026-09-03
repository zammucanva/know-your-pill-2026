"use client";

import { imgPath } from "@/lib/kyp/image-path";
import { Gamepad2, Brain, Trophy, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Badge } from "@/components/kyp/ui/badge";
import { Reveal } from "@/components/kyp/ui/reveal";

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
    <Section id="neuroarcade" className="relative overflow-hidden bg-foreground text-background">
      {/* Subtle neural shapes on dark */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
      </div>

      <Container className="relative py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: visual */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgPath("/artwork/neuro-arcade.png")}
                alt="NeuroArcade — gamified neuroscience learning platform with interactive psychopharmacology challenges"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/60 via-transparent to-transparent" />
            </div>
          </Reveal>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <Badge variant="neural" size="md" className="mb-6">
                <Gamepad2 className="h-3 w-3" />
                NeuroArcade
              </Badge>
              <h2
                className="font-sans font-semibold tracking-[-0.03em] leading-[1.05]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Learn neuroscience by{" "}
                <span className="text-neural">playing it.</span>
              </h2>
              <p className="mt-5 text-lg text-background/60 leading-relaxed max-w-lg">
                Mini-games that turn psychopharmacology into active recall. Built for students who need to remember receptor pathways under exam pressure, and for patients curious enough to want more than a leaflet.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 space-y-4">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title} className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neural/15 text-neural mt-0.5">
                        <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-background">{f.title}</h3>
                        <p className="text-xs text-background/50">{f.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="rounded-xl bg-neural text-primary-foreground hover:bg-neural/90">
                  Launch NeuroArcade
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
                <Button size="lg" variant="ghost" className="rounded-xl text-background/60 hover:text-background hover:bg-background/10">
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
