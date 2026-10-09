"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BookMarked,
  CalendarClock,
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { learnerLabel } from "@/lib/kyp/dashboard/dashboard-data";

/**
 * ProfileMenu: the signed-in account menu in the main header, in the
 * style of the Kokonut UI profile dropdown, tuned to KYP's tokens.
 *
 * A name-and-avatar trigger opens a rounded menu of the places a
 * learner actually goes: dashboard, Study Mode, the Mistake Book,
 * scheduled reviews, terms, and Sign out. No avatar upload, plan or
 * model rows: KYP has neither, and nothing here is invented.
 *
 * Built without a menu library. It follows the standard menu pattern:
 * arrow keys, Home/End, Escape returns focus to the trigger, outside
 * click and route changes close it.
 */

export interface ProfileMenuUser {
  name: string;
  email: string;
  learnerType?: string | null;
}

interface Item {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  /** Engine routes bundle the registry, so they are not prefetched. */
  engine?: boolean;
  badge?: string | null;
}

function initialsOf(name: string): string {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("") || "?"
  );
}

export function ProfileMenu({
  user,
  onLogout,
  className,
}: {
  user: ProfileMenuUser;
  onLogout: () => void | Promise<void>;
  className?: string;
}) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const role = learnerLabel(user.learnerType);
  const items: Item[] = [
    { label: "My Dashboard", href: "/dashboard", icon: LayoutDashboard, badge: role },
    { label: "Study Mode", href: "/study", icon: GraduationCap },
    { label: "Mistake Book", href: "/study/mistakes", icon: BookMarked, engine: true },
    { label: "Reviews due", href: "/study/review", icon: CalendarClock, engine: true },
    { label: "Terms & Copyright", href: "/legal/terms", icon: FileText },
  ];

  const close = React.useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  }, []);

  // Close on route change.
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Outside click and Escape.
  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const focusables = () =>
    Array.from(menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []);

  // Move focus into the menu when it opens.
  React.useEffect(() => {
    if (open) window.setTimeout(() => focusables()[0]?.focus(), 0);
  }, [open]);

  const onMenuKey = (e: React.KeyboardEvent) => {
    const list = focusables();
    const i = list.indexOf(document.activeElement as HTMLElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      list[(i + 1) % list.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      list[(i - 1 + list.length) % list.length]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      list[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      list[list.length - 1]?.focus();
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  const itemClass =
    "group flex w-full items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-left text-sm font-medium text-foreground outline-none transition-colors hover:border-border/60 hover:bg-accent/50 focus-visible:border-brand/40 focus-visible:bg-accent/50";

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Account menu for ${user.name}`}
        className={cn(
          "flex items-center gap-2.5 rounded-full border border-border/60 bg-muted/40 py-1 pl-1 pr-2.5 outline-none transition-colors",
          "hover:border-brand/40 focus-visible:ring-2 focus-visible:ring-brand/60",
          open && "border-brand/40"
        )}
      >
        <span className="rounded-full bg-gradient-to-br from-brand via-sky-400 to-violet-400 p-[2px]">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-[11px] font-bold text-brand">
            {initialsOf(user.name)}
          </span>
        </span>
        <span className="hidden min-w-0 text-left leading-tight xl:block">
          <span className="block max-w-[8rem] truncate text-xs font-semibold text-foreground">
            {user.name}
          </span>
          <span className="block max-w-[8rem] truncate text-[10px] text-muted-foreground">
            {user.email}
          </span>
        </span>
        <ChevronDown
          aria-hidden
          className={cn("h-3.5 w-3.5 text-muted-foreground transition-transform", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            role="menu"
            aria-label="Account"
            onKeyDown={onMenuKey}
            initial={reduced ? false : { opacity: 0, scale: 0.96, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: -4 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
            className="absolute right-0 top-full z-50 mt-2 w-72 origin-top-right rounded-2xl border border-border/60 bg-popover/95 p-2 shadow-xl backdrop-blur-sm"
          >
            <div className="px-3 pb-2 pt-1.5">
              <p className="truncate text-sm font-semibold text-foreground">{user.name}</p>
              <p className="truncate text-xs text-muted-foreground">{user.email}</p>
            </div>
            <div className="mx-2 mb-1.5 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="space-y-0.5">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={item.engine ? false : undefined}
                  role="menuitem"
                  tabIndex={-1}
                  onClick={() => close()}
                  className={itemClass}
                >
                  <item.icon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
                  <span className="flex-1 whitespace-nowrap">{item.label}</span>
                  {item.badge && (
                    <span className="rounded-md border border-brand/15 bg-brand-soft/50 px-2 py-0.5 text-xs font-medium text-brand">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <div className="mx-2 my-1.5 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <button
              type="button"
              role="menuitem"
              tabIndex={-1}
              onClick={() => {
                close();
                void onLogout();
              }}
              className="flex w-full items-center gap-3 rounded-xl border border-transparent bg-emergency/10 px-3 py-2.5 text-sm font-medium text-emergency outline-none transition-colors hover:border-emergency/30 hover:bg-emergency/15 focus-visible:border-emergency/40"
            >
              <LogOut className="h-4 w-4 shrink-0" />
              Sign out
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
