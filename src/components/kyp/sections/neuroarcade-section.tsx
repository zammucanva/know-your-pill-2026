"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gamepad2, Brain, Trophy, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";

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
    <Section id="neuroarcade">
      <Container>
        <CardPrimitive
          variant="flat"
          interactive={false}
          className="overflow-hidden border-neural/20"
        >
          <CardBody className="relative p-0">
            <div className="grid items-stretch lg:grid-cols-[1fr_1.1fr]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent lg:bg-gradient-to-r" />
              </div>

              {/* Right: content */}
              <div className="p-8 sm:p-12">
                <Badge variant="neural" size="md">
                  <Gamepad2 className="h-3 w-3" />
                  NeuroArcade
                </Badge>
                <h2 className="mt-4 text-h1 text-foreground">
                  Learn neuroscience by{" "}
                  <span className="kyp-text-gradient">playing it.</span>
                </h2>
                <p className="mt-4 text-body-lg text-muted-foreground">
                  Mini-games that turn psychopharmacology into active recall. Built for students who need to remember receptor pathways under exam pressure, and for patients curious enough to want more than a leaflet.
                </p>

                <div className="mt-6 grid gap-3">
                  {features.map((f, i) => {
                    const Icon = f.icon;
                    return (
                      <motion.div
                        key={f.title}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="flex items-start gap-3 rounded-xl border border-border/40 bg-card/60 p-3"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neural-soft/60 text-neural">
                          <Icon className="h-4 w-4" strokeWidth={2} />
                        </span>
                        <div>
                          <h3 className="text-sm font-semibold">{f.title}</h3>
                          <p className="text-xs text-muted-foreground">{f.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button size="lg" className="rounded-xl">
                    Launch NeuroArcade
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-xl">
                    View Leaderboard
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </CardPrimitive>
      </Container>
    </Section>
  );
}
