import Link from "next/link";
import { Compass } from "lucide-react";

interface YoriLogoProps {
  size?: "sm" | "md" | "lg";
  href?: string;
}

export default function YoriLogo({
  size = "md",
  href = "/",
}: YoriLogoProps) {
  const sizes = {
    sm: {
      icon: 18,
      text: "text-lg",
      gap: "gap-2",
    },
    md: {
      icon: 22,
      text: "text-2xl",
      gap: "gap-3",
    },
    lg: {
      icon: 28,
      text: "text-3xl",
      gap: "gap-3",
    },
  };

  const current = sizes[size];

  return (
    <Link
      href={href}
      className={`inline-flex items-center ${current.gap} font-extrabold tracking-[0.2em] text-[var(--text-primary)]`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface)] border border-[var(--border)]">
        <Compass
          size={current.icon}
          className="text-[var(--accent-dark)]"
        />
      </span>

      <span className={current.text}>
        YORI
      </span>
    </Link>
  );
}