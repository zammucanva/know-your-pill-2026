"use client";

import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { EmergencyAlert } from "@/components/kyp/ui/emergency-alert";
import { emergencyContacts } from "@/lib/kyp/data";

export function EmergencySection() {
  return (
    <Section id="emergency">
      <Container>
        <EmergencyAlert contacts={emergencyContacts} />
      </Container>
    </Section>
  );
}
