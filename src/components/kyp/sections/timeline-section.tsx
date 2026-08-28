"use client";

import { Clock } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Timeline } from "@/components/kyp/ui/timeline";
import { Callout } from "@/components/kyp/ui/callout";
import { Badge } from "@/components/kyp/ui/badge";
import { Reveal } from "@/components/kyp/ui/reveal";
import { ssriTimeline } from "@/lib/kyp/data";

export function TimelineSection() {
  return (
    <Section id="timeline">
      <Container width="narrow">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-overline text-brand mb-4">Drug Timeline</p>
            <h2
              className="font-serif font-semibold tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              What happens, hour by hour, week by week
            </h2>
            <p className="mt-4 text-body text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Every drug page includes a timeline showing onset, peak, duration, and recovery. Here is the SSRI timeline as an example, built from the same component every drug page uses.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <Badge variant="brand" size="lg">
              <Clock className="h-3.5 w-3.5" />
              Sertraline (SSRI) · 6-week onset
            </Badge>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12">
            <Timeline events={ssriTimeline} />
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-12">
            <Callout variant="tip" title="Clinical pearl">
              Patients often feel worse in week 1 (nausea, anxiety, sleep disruption) before they feel
              better in week 4. Setting this expectation at the first visit dramatically improves
              adherence.
            </Callout>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
