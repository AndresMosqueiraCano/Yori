import Link from "next/link";
import {
  BookOpen,
  ChevronRight,
  CircleEllipsis,
  Hammer,
  House,
  Lightbulb,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  name: string;
  query: string;
  icon: LucideIcon;
}

const categories: Category[] = [
  {
    name: "Plomería",
    query: "plomería",
    icon: Wrench,
  },
  {
    name: "Electricidad",
    query: "electricidad",
    icon: Lightbulb,
  },
  {
    name: "Limpieza",
    query: "limpieza",
    icon: Sparkles,
  },
  {
    name: "Tutorías",
    query: "tutorías",
    icon: BookOpen,
  },
  {
    name: "Reparaciones",
    query: "reparaciones",
    icon: Hammer,
  },
  {
    name: "Hogar",
    query: "servicios para el hogar",
    icon: House,
  },
  {
    name: "Más",
    query: "",
    icon: CircleEllipsis,
  },
];

export default function CategoryScroller() {
  return (
    <section aria-labelledby="categories-title">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-sm font-semibold text-[var(--accent-dark)]">
            Servicios
          </p>

          <h2 id="categories-title" className="section-title">
            ¿Cómo podemos ayudarte?
          </h2>
        </div>

        <Link
          href="/buscar"
          className="flex min-h-11 shrink-0 items-center gap-1 rounded-xl px-2 text-sm font-bold transition hover:bg-[var(--surface-muted)]"
        >
          Ver todos
          <ChevronRight size={17} />
        </Link>
      </div>

      <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:grid-cols-4 sm:px-0 lg:grid-cols-7">
        {categories.map(({ name, query, icon: Icon }) => {
          const href = query
            ? `/buscar?q=${encodeURIComponent(query)}`
            : "/buscar";

          return (
            <Link
              key={name}
              href={href}
              className="card flex min-w-28 flex-col items-start gap-4 p-4 transition duration-150 hover:-translate-y-0.5 hover:border-[var(--accent)] active:scale-[0.98] sm:min-w-0"
            >
              <span className="flex size-11 items-center justify-center rounded-2xl bg-[var(--surface-muted)] text-[var(--accent-dark)]">
                <Icon size={21} />
              </span>

              <span className="text-sm font-bold">{name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}