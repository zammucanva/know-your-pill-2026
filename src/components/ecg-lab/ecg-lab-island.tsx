"use client";

import dynamic from "next/dynamic";

// The lab reads browser storage and the clock on first render, so it is client-only and is fetched
// only when /ecg-lab opens, never on other KYP routes.
const EcgLab = dynamic(() => import("@/components/ecg-lab/EcgLab"), {
  ssr: false,
  loading: () => (
    <p className="py-16 text-center text-sm text-muted-foreground" role="status">
      Loading ECG Lab…
    </p>
  ),
});

export function EcgLabIsland() {
  return <EcgLab />;
}
