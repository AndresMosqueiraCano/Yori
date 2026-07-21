import { Bell, MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";
import YoriLogo from "../brand/YoriLogo";

interface AppHeaderProps {
  location?: string;
  greeting?: string;
  showGreeting?: boolean;
}

export default function AppHeader({
  location = "Santa Fe, Ciudad de México",
  greeting,
  showGreeting = true,
}: AppHeaderProps) {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <YoriLogo />

        <Link
          href="/notifications"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white"
        >
          <Bell size={20} />
        </Link>
      </div>

      <button className="mt-5 flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)]">
        <MapPin size={16} />
        {location}
        <ChevronDown size={16} />
      </button>

      {showGreeting && greeting && (
        <>
          <p className="mt-6 text-sm font-semibold text-[var(--accent-dark)]">
            {greeting}
          </p>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight">
            ¿Qué necesitas resolver hoy?
          </h1>
        </>
      )}
    </header>
  );
}