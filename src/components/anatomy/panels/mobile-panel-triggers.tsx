"use client";

import * as React from "react";
import { Layers, Info } from "lucide-react";
import {
  Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle,
} from "@/components/ui/sheet";
import { SystemsPanel } from "@/components/anatomy/panels/systems-panel";
import { InspectorPanel } from "@/components/anatomy/panels/inspector-panel";

/**
 * MobilePanelTriggers — the mobile-only panel access bar.
 *
 * On viewports narrower than the desktop breakpoint the side panels
 * move into bottom sheets. This bar renders the two trigger buttons
 * (visible below lg only) and owns the sheet state.
 */
export function MobilePanelTriggers() {
  const [systemsOpen, setSystemsOpen] = React.useState(false);
  const [inspectorOpen, setInspectorOpen] = React.useState(false);

  const buttonClass =
    "flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs font-medium text-[var(--muted-foreground)] shadow-[var(--shadow-soft)] transition-all duration-[var(--duration-base)] ease-[var(--ease-out-soft)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]";

  return (
    <>
      <div className="flex items-center gap-2 lg:hidden">
        <Sheet open={systemsOpen} onOpenChange={setSystemsOpen}>
          <SheetTrigger asChild>
            <button type="button" className={buttonClass} aria-label="Open systems panel">
              <Layers size={14} />
              Systems
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[85vw] max-w-80 p-0 pb-[env(safe-area-inset-bottom)]">
            <SheetHeader className="sr-only">
              <SheetTitle>Anatomical systems</SheetTitle>
            </SheetHeader>
            <div className="h-full overflow-y-auto pt-10">
              <SystemsPanel />
            </div>
          </SheetContent>
        </Sheet>

        <Sheet open={inspectorOpen} onOpenChange={setInspectorOpen}>
          <SheetTrigger asChild>
            <button type="button" className={buttonClass} aria-label="Open structure inspector">
              <Info size={14} />
              Inspector
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-80 p-0 pb-[env(safe-area-inset-bottom)]">
            <SheetHeader className="sr-only">
              <SheetTitle>Structure inspector</SheetTitle>
            </SheetHeader>
            <div className="h-full overflow-y-auto pt-10">
              <InspectorPanel />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
