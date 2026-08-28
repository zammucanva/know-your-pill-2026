"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Timeline } from "@/components/kyp/ui/timeline";
import { Callout } from "@/components/kyp/ui/callout";
import { Badge } from "@/components/kyp/ui/badge";
import { ssriTimeline } from "@/lib/kyp/data";

/**
 * TimelineSection — demo of the Timeline component.
 * Shows the SSRI onset-of-action timeline (Sertraline as example).
 *
 * Phase 4 (Drug Pages) will reuse this with per-drug timeline data.
 */
export function TimelineSection() {
  return (
    <Section id="timeline" className="bg-muted/20">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Drug Timeline"
          title="What happens, hour by hour, week by week"
          description="Every drug page includes a timeline showing onset, peak, duration, and recovery. Here is the SSRI timeline as an example, built from the same component every drug page uses."
          align="center"
        />

        <div className="mt-10 flex justify-center">
          <Badge variant="brand" size="lg">
            <Clock className="h-3.5 w-3.5" />
            Sertraline (SSRI) · 6-week onset
          </Badge>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <Timeline events={ssriTimeline} />
        </motion.div>

        <div className="mt-10">
          <Callout variant="tip" title="Clinical pearl">
            Patients often feel worse in week 1 (nausea, anxiety, sleep disruption) before they feel
            better in week 4. Setting this expectation at the first visit dramatically improves
            adherence.
          </Callout>
        </div>
      </Container>
    </Section>
  );
}
