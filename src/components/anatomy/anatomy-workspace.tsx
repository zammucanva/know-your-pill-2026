"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { SystemsPanel } from "@/components/anatomy/panels/systems-panel";
import { InspectorPanel } from "@/components/anatomy/panels/inspector-panel";
import { ViewportToolbar } from "@/components/anatomy/panels/viewport-toolbar";
import { ZoomControl } from "@/components/anatomy/panels/zoom-control";
import { BrainModePanel, BrainModeToggle } from "@/components/anatomy/panels/brain-mode-panel";
import { ModelStatusBadge } from "@/components/anatomy/panels/model-status-badge";
import { ModelLoadingOverlay } from "@/components/anatomy/panels/model-loading-overlay";
import { MobilePanelTriggers } from "@/components/anatomy/panels/mobile-panel-triggers";
import { atlasQuality, type AtlasQuality } from "@/lib/anatomy/atlas-source";

// The 3D engine (three.js + react-three-fiber) is only fetched when this
// workspace mounts, never on other KYP routes.
const AnatomyCanvas = dynamic(
  () => import("@/components/anatomy/anatomy-canvas").then((m) => m.AnatomyCanvas),
  {
    ssr: false,
    // The viewport's loading overlay already shows the KYP loader from the
    // first frame, so this fallback stays empty rather than doubling it.
    loading: () => null,
  }
);

/**
 * AnatomyWorkspace: the 3D anatomy tool inside the KYP page shell.
 * Desktop: systems list | viewport | inspector. Below lg the two side
 * panels move into sheets opened from the bar above the viewport.
 */
export function AnatomyWorkspace() {
  // The lite atlas is chosen on phones and slow connections; offer the full model explicitly.
  const [quality, setQuality] = React.useState<AtlasQuality>("full");
  React.useEffect(() => setQuality(atlasQuality()), []);

  return (
    <section aria-label="3D anatomy workspace" className="mx-auto w-full max-w-[96rem] px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <MobilePanelTriggers />
          <ModelStatusBadge />
        </div>
        <BrainModeToggle />
      </div>

      <div className="flex flex-col gap-3 lg:grid lg:h-[clamp(32rem,calc(100dvh-14rem),58rem)] lg:grid-cols-[17rem_minmax(0,1fr)_21.5rem]">
        <div className="hidden min-h-0 lg:block">
          <SystemsPanel />
        </div>

        <div
          className="relative h-[68dvh] min-h-[26rem] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--viewport-backdrop)] shadow-[var(--shadow-soft)] lg:h-auto lg:min-h-0"
          role="region"
          aria-label="3D anatomy viewport"
        >
          <div className="absolute inset-0">
            <AnatomyCanvas />
          </div>
          {/* Chrome layer: pointer-events-none so hover, click, drag and wheel reach the canvas
              underneath; each control below opts back in with pointer-events-auto. */}
          <div className="pointer-events-none absolute inset-0">
            <ModelLoadingOverlay />
            <ViewportToolbar />
            <BrainModePanel />
            <ZoomControl />
          </div>
        </div>

        <div className="hidden min-h-0 lg:block">
          <InspectorPanel />
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-[var(--muted-foreground)]">
        Anatomy: Z-Anatomy (CC BY-SA 4.0) and BodyParts3D, © The Database Center for Life Science
        (CC BY 4.0); adult male reference model, 3,101 structures. Educational use only, not a
        clinical tool.
        {quality === "lite" && (
          <>
            {" "}Showing the lighter model for this device.{" "}
            <a href="?quality=full" className="font-medium text-[var(--brand)] hover:underline">
              Load full detail (about 35 MB)
            </a>
          </>
        )}
      </p>
    </section>
  );
}
