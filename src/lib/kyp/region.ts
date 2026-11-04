"use client";

import * as React from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { EmergencyContact } from "@/lib/kyp/data/types";

/**
 * Region: which country's emergency numbers the visitor sees.
 *
 * Asked at sign-up and changeable from the header on any page. The choice
 * is kept in this browser only (localStorage `kyp:region:v1`): it is a
 * display preference, not personal data, and nothing is sent to a server.
 *
 * Until a visitor chooses, India is shown (the site's primary audience and
 * the previous behaviour). "Other / universal" shows only the GSM standard
 * 112, which mobile networks route to local emergency services in most
 * countries, and tells the visitor to use their own national number.
 */

export type Region = "india" | "us" | "uk" | "universal";

export const REGION_OPTIONS: { id: Region; label: string }[] = [
  { id: "india", label: "India" },
  { id: "us", label: "United States" },
  { id: "uk", label: "United Kingdom" },
  { id: "universal", label: "Other / universal" },
];

export const DEFAULT_REGION: Region = "india";

const REGION_IDS = REGION_OPTIONS.map((r) => r.id);

/** Emergency and poison/crisis lines per region. Keep each list short. */
export const REGION_CONTACTS: Record<Region, EmergencyContact[]> = {
  india: [
    {
      label: "Emergency Services",
      number: "112",
      description: "All India emergency number: medical, police, fire",
      href: "tel:112",
    },
    {
      label: "Tele-MANAS",
      number: "14416",
      description: "National mental health helpline: free, confidential, 24/7",
      href: "tel:14416",
    },
    {
      // AIIMS National Poisons Information Centre (Delhi), toll-free, 24/7.
      // Source: https://aiims.edu/index.php/en/npic_intro. The number the
      // old list carried (1800-222-1222) is the US Poison Help line.
      label: "Poison Information (AIIMS)",
      number: "1800 116 117",
      description: "National Poisons Information Centre: free, 24/7",
      href: "tel:1800116117",
    },
  ],
  us: [
    {
      label: "Emergency Services",
      number: "911",
      description: "Medical, police, fire",
      href: "tel:911",
    },
    {
      label: "988 Suicide & Crisis Lifeline",
      number: "988",
      description: "Free, confidential support 24/7 by call or text",
      href: "tel:988",
    },
    {
      label: "Poison Help",
      number: "1-800-222-1222",
      description: "Poisoning and overdose advice, 24/7",
      href: "tel:18002221222",
    },
  ],
  uk: [
    {
      label: "Emergency Services",
      number: "999",
      description: "Medical, police, fire (112 also works)",
      href: "tel:999",
    },
    {
      label: "Samaritans",
      number: "116 123",
      description: "Free emotional support, 24/7",
      href: "tel:116123",
    },
    {
      label: "NHS 111",
      number: "111",
      description: "Urgent medical advice, including poisoning, when it is not a 999 emergency",
      href: "tel:111",
    },
  ],
  universal: [
    {
      label: "Emergency (mobile)",
      number: "112",
      description:
        "Works from most mobile phones worldwide and connects to local emergency services. If unsure, use your own country's emergency number.",
      href: "tel:112",
    },
  ],
};

interface RegionStore {
  region: Region;
  /** True once the visitor has picked a country themselves. */
  chosen: boolean;
  setRegion: (region: Region) => void;
}

export const useRegionStore = create<RegionStore>()(
  persist(
    (set) => ({
      region: DEFAULT_REGION,
      chosen: false,
      setRegion: (region) => set({ region, chosen: true }),
    }),
    {
      name: "kyp:region:v1",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      // Rehydrate guard: only known regions pass through.
      merge: (persisted, current) => {
        const p = persisted as Partial<RegionStore> | null;
        if (p && typeof p === "object" && REGION_IDS.includes(p.region as Region)) {
          return { ...current, region: p.region as Region, chosen: p.chosen === true };
        }
        return current;
      },
    }
  )
);

const noopSubscribe = () => () => {};

/**
 * Region for rendering. Returns the default on the server and during the
 * first client render so server and client markup match, then the saved
 * choice once mounted.
 */
export function useRegion() {
  const mounted = React.useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
  const stored = useRegionStore((s) => s.region);
  const chosen = useRegionStore((s) => s.chosen);
  const setRegion = useRegionStore((s) => s.setRegion);
  return {
    region: mounted ? stored : DEFAULT_REGION,
    chosen: mounted && chosen,
    setRegion,
  };
}

/** Emergency contacts for the visitor's region. */
export function useEmergencyContacts(): EmergencyContact[] {
  const { region } = useRegion();
  return REGION_CONTACTS[region];
}
