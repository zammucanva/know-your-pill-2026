"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeftRight, Atom, Bookmark, BookOpen, Brain, FlaskConical,
  GraduationCap, History, LayoutDashboard, Pill, Settings, Siren, X,
} from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * DashboardSidebar — the persistent left navigation.
 *
 * Desktop: expanded 256px rail with LEARN / YOU groups and a bottom
 * cluster (Settings + the restrained Emergency entry). Collapsed: 72px
 * icon rail with CSS tooltips. The collapsed/expanded state is owned by
 * the settings store (kyp:settings:v1) and toggled from the header.
 *
 * Mobile (below lg): this component renders nothing; the header mounts
 * <MobileSidebarDrawer /> instead (overlay drawer with Escape, scroll
 * lock, and focus management).
 *
 * Every item links to a REAL existing surface. Anchor entries point at
 * homepage sections that exist today.
 */

export interface SidebarNavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  /** Anchor links are never aria-current (they point at homepage sections). */
  anchor?: boolean;
}

const LEARN_ITEMS: SidebarNavItem[] = [
  { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { id: "learn", label: "Learn", href: "/learn", icon: BookOpen },
  { id: "psychiatry", label: "Psychiatry", href: "/psychiatry", icon: Brain },
  { id: "medications", label: "Medications", href: "/medicine", icon: Pill },
  { id: "interactions", label: "Interactions", href: "/interactions", icon: ArrowLeftRight },
  { id: "substances", label: "Substances", href: "/#substances", icon: FlaskConical, anchor: true },
  { id: "study", label: "Study Mode", href: "/study", icon: GraduationCap },
  { id: "brain-science", label: "Brain Science", href: "/#neuroarcade", icon: Atom, anchor: true },
];

const YOU_ITEMS: SidebarNavItem[] = [
  { id: "saved", label: "Saved", href: "/dashboard#saved", icon: Bookmark, anchor: true },
  { id: "history", label: "History", href: "/dashboard#recently-visited", icon: History, anchor: true },
];

function useRoutePathname(): string {
  const pathname = usePathname();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return pathname?.startsWith(basePath) ? pathname.slice(basePath.length) || "/" : pathname || "/";
}

function SidebarLink({
  item, collapsed, onNavigate,
}: {
  item: SidebarNavItem;
  collapsed: boolean;
  onNavigate?: () => void;
}) {
  const route = useRoutePathname();
  const current = !item.anchor && (route === item.href || route.startsWith(item.href + "/"));
  const Icon = item.icon;

  const content = (
    <>
      <span
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors",
          current ? "text-brand" : "text-muted-foreground group-hover/item:text-foreground"
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span
        className={cn(
          "truncate text-sm transition-all",
          collapsed ? "hidden" : "block"
        )}
      >
        {item.label}
      </span>
    </>
  );

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={current ? "page" : undefined}
      className={cn(
        "group/item relative flex items-center gap-3 rounded-lg px-2.5 py-2 outline-none transition-colors",
        "focus-visible:ring-2 focus-visible:ring-brand/60",
        current
          ? "bg-accent text-foreground"
          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
        collapsed && "justify-center px-0"
      )}
    >
      {content}
      {collapsed && (
        <span
          role="tooltip"
          className={cn(
            "pointer-events-none absolute left-full z-50 ml-3 hidden whitespace-nowrap rounded-md border border-border bg-popover px-2.5 py-1.5 text-xs font-medium text-popover-foreground shadow-md",
            "group-hover/item:block group-focus-visible/item:block"
          )}
        >
          {item.label}
        </span>
      )}
    </Link>
  );
}

/** Section label, hidden when collapsed. */
function GroupLabel({ children, collapsed }: { children: React.ReactNode; collapsed: boolean }) {
  return (
    <p
      className={cn(
        "px-2.5 pb-1 pt-5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60",
        collapsed && "sr-only"
      )}
    >
      {children}
    </p>
  );
}

export function DashboardSidebar({
  collapsed, onOpenSettings,
}: {
  collapsed: boolean;
  onOpenSettings: () => void;
}) {
  return (
    <aside
      aria-label="Dashboard navigation"
      data-collapsed={collapsed ? "true" : "false"}
      className={cn(
        "sticky top-0 hidden h-screen shrink-0 flex-col border-r border-border/60 bg-card/40 backdrop-blur-sm lg:flex",
        "transition-[width] duration-200",
        collapsed ? "w-[72px]" : "w-[256px]"
      )}
    >
      <div className={cn("flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden px-3 py-4", collapsed && "px-2.5")}>
        <nav aria-label="Learn">
          <GroupLabel collapsed={collapsed}>Learn</GroupLabel>
          <div className="space-y-0.5">
            {LEARN_ITEMS.map((item) => (
              <SidebarLink key={item.id} item={item} collapsed={collapsed} />
            ))}
          </div>
        </nav>
        <nav aria-label="You">
          <GroupLabel collapsed={collapsed}>You</GroupLabel>
          <div className="space-y-0.5">
            {YOU_ITEMS.map((item) => (
              <SidebarLink key={item.id} item={item} collapsed={collapsed} />
            ))}
          </div>
        </nav>

        <div className="mt-auto space-y-2 pt-6">
          <button
            type="button"
            onClick={onOpenSettings}
            aria-label="Settings"
            className={cn(
              "group/item relative flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-muted-foreground outline-none transition-colors",
              "focus-visible:ring-2 focus-visible:ring-brand/60 hover:bg-accent/50 hover:text-foreground",
              collapsed && "justify-center px-0"
            )}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md">
              <Settings className="h-4 w-4" />
            </span>
            <span className={cn("truncate", collapsed ? "hidden" : "block")}>Settings</span>
            {collapsed && (
              <span
                role="tooltip"
                className={cn(
                  "pointer-events-none absolute left-full z-50 ml-3 hidden whitespace-nowrap rounded-md border border-border bg-popover px-2.5 py-1.5 text-xs font-medium text-popover-foreground shadow-md",
                  "group-hover/item:block group-focus-visible/item:block"
                )}
              >
                Settings
              </span>
            )}
          </button>
          {collapsed ? (
            <Link
              href="/#emergency"
              aria-label="Emergency"
              className="flex h-9 w-full items-center justify-center rounded-lg bg-emergency-soft/60 text-emergency transition-colors hover:bg-emergency-soft"
            >
              <Siren className="h-4 w-4" />
            </Link>
          ) : (
            <Link
              href="/#emergency"
              className="flex items-center gap-2 rounded-full border border-emergency/30 bg-emergency-soft/50 px-3.5 py-2 text-xs font-semibold text-emergency transition-colors hover:border-emergency/50 hover:bg-emergency-soft"
            >
              <Siren className="h-3.5 w-3.5" />
              Emergency
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}

/**
 * MobileSidebarDrawer — full overlay drawer for < lg viewports.
 * Escape closes, body scroll locks while open, focus moves into the
 * drawer on open and returns to the opener on close.
 */
export function MobileSidebarDrawer({
  open, onClose, onOpenSettings,
}: {
  open: boolean;
  onClose: () => void;
  onOpenSettings: () => void;
}) {
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const openerRef = React.useRef<Element | null>(null);

  React.useEffect(() => {
    if (!open) return;
    openerRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Move focus into the drawer.
    const t = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    }, 30);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      (openerRef.current as HTMLElement | null)?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Dashboard navigation">
      <button
        type="button"
        aria-label="Close navigation"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-foreground/40 backdrop-blur-[2px]"
      />
      <div
        ref={panelRef}
        className="absolute inset-y-0 left-0 flex w-[290px] max-w-[86vw] flex-col border-r border-border bg-card shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-border/60 px-4 py-3.5">
          <p className="text-overline text-brand">Know Your Pill</p>
          <button
            type="button"
            data-autofocus
            onClick={onClose}
            aria-label="Close navigation"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-3">
          <p className="px-2.5 pb-1 pt-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
            Learn
          </p>
          <div className="space-y-0.5">
            {LEARN_ITEMS.map((item) => (
              <SidebarLink key={item.id} item={item} collapsed={false} onNavigate={onClose} />
            ))}
          </div>
          <p className="px-2.5 pb-1 pt-5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
            You
          </p>
          <div className="space-y-0.5">
            {YOU_ITEMS.map((item) => (
              <SidebarLink key={item.id} item={item} collapsed={false} onNavigate={onClose} />
            ))}
          </div>
        </div>
        <div className="space-y-2 border-t border-border/60 px-3 py-4">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenSettings();
            }}
            className="flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md">
              <Settings className="h-4 w-4" />
            </span>
            Settings
          </button>
          <Link
            href="/#emergency"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-full border border-emergency/30 bg-emergency-soft/50 px-3.5 py-2 text-xs font-semibold text-emergency"
          >
            <Siren className="h-3.5 w-3.5" />
            Emergency
          </Link>
        </div>
      </div>
    </div>
  );
}
