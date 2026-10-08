"use client";

import * as React from "react";

import { DashboardSidebar, MobileSidebarDrawer } from "./sidebar";
import { DashboardHeader } from "./header";
import { SettingsDrawer, type SettingsDrawerUser } from "./settings-drawer";
import { useDashboardSettings } from "@/lib/kyp/dashboard/settings-store";
import { cn } from "@/lib/utils";

/**
 * DashboardShell — the premium medical knowledge-workbench layout.
 *
 * Left: the persistent sidebar (desktop rail / mobile drawer).
 * Top: the compact header (nav toggle, logo, search, emergency,
 * theme, settings, profile).
 * Content: the module grid.
 *
 * The shell owns two visual settings that only apply inside it:
 *   data-accent  — palette variant (default | teal | neutral)
 *   data-density — spacing density (comfortable | compact), exposed to
 *                  children as the --dash-gap CSS variable
 * Both live on this root element and are styled in globals.css under
 * the .dash-shell scope. Nothing outside the dashboard is affected.
 */

const DENSITY_GAP: Record<string, string> = {
  comfortable: "1.25rem",
  compact: "0.75rem",
};

export function DashboardShell({
  user, children,
}: {
  user: { name: string; email: string } | null;
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const sidebarState = useDashboardSettings((s) => s.sidebarState);
  const accent = useDashboardSettings((s) => s.accent);
  const density = useDashboardSettings((s) => s.density);

  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const collapsed = mounted ? sidebarState === "collapsed" : false;

  return (
    <div
      data-accent={mounted ? accent : "default"}
      data-density={mounted ? density : "comfortable"}
      style={{ "--dash-gap": DENSITY_GAP[mounted ? density : "comfortable"] } as React.CSSProperties}
      className="dash-shell flex min-h-screen bg-background"
    >
      <DashboardSidebar collapsed={collapsed} onOpenSettings={() => setSettingsOpen(true)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardHeader
          user={user}
          sidebarCollapsed={collapsed}
          onToggleSidebar={() =>
            useDashboardSettings.getState().update({
              sidebarState: collapsed ? "expanded" : "collapsed",
            })
          }
          onOpenMobileNav={() => setMobileNavOpen(true)}
          onOpenSettings={() => setSettingsOpen(true)}
        />

        <main id="main" className="min-w-0 flex-1">
          <div className="mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <div className={cn("flex flex-col gap-[var(--dash-gap,1.25rem)]")}>{children}</div>
          </div>
        </main>
      </div>

      <MobileSidebarDrawer
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onOpenSettings={() => setSettingsOpen(true)}
      />
      <SettingsDrawer
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        user={user}
        onHistoryCleared={() => {
          window.dispatchEvent(new CustomEvent("kyp:progress-cleared"));
        }}
      />
    </div>
  );
}
