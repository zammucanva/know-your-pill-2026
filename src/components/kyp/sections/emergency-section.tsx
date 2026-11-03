"use client";

import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { EmergencyAlert } from "@/components/kyp/ui/emergency-alert";
import { RegionPicker } from "@/components/kyp/ui/region-picker";
import { useEmergencyContacts } from "@/lib/kyp/region";

export function EmergencySection() {
  const contacts = useEmergencyContacts();

  return (
    <Section id="emergency">
      <Container>
        <div className="mb-4 flex flex-wrap items-center justify-end gap-2 text-xs text-muted-foreground">
          <span>Numbers shown for</span>
          <RegionPicker />
        </div>
        <EmergencyAlert contacts={contacts} />
      </Container>
    </Section>
  );
}
