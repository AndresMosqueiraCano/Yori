"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Search,
  CalendarDays,
  MessageCircle,
  CircleUserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    href: "/",
    label: "Inicio",
    icon: House,
  },
  {
    href: "/buscar",
    label: "Buscar",
    icon: Search,
  },
  {
    href: "/reservas",
    label: "Reservas",
    icon: CalendarDays,
  },
  {
    href: "/mensajes",
    label: "Mensajes",
    icon: MessageCircle,
  },
  {
    href: "/perfil",
    label: "Perfil",
    icon: CircleUserRound,
  },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-xl justify-around">
        {items.map(({ href, label, icon: Icon }) => {
          const active =
            pathname === href ||
            (href !== "/" && pathname.startsWith(href));

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-1 flex-col items-center justify-center gap-1 py-3 text-xs transition",
                active
                  ? "text-[var(--accent-dark)] font-bold"
                  : "text-[var(--text-secondary)]"
              )}
            >
              <Icon size={22} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}