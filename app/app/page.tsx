import Link from "next/link";
import { ChevronRight, Heart, Search } from "lucide-react";

import AppHeader from "@/components/layout/AppHeader";
import BottomNavigation from "@/components/layout/BottomNavigation";
import CategoryScroller from "@/components/home/CategoryScroller";
import EmergencyCard from "@/components/home/EmergencyCard";
import ProviderCard from "@/components/providers/ProviderCard";

type Provider = {
  id: string;
  name: string;
  profession: string;
  image: string;
  rating: number;
  reviewCount: number;
  area: string;
  startingPrice: number;
  availability: string;
  trustSignal: string;
  verified?: boolean;
};

const recommendedProviders: Provider[] = [
  {
    id: "carlos-hernandez",
    name: "Carlos Hernández",
    profession: "Plomería residencial",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 86,
    area: "Santa Fe y alrededores",
    startingPrice: 450,
    availability: "Disponible hoy",
    trustSignal: "Responde en 8 min",
    verified: true,
  },
  {
    id: "maria-fernanda-ruiz",
    name: "María Fernanda Ruiz",
    profession: "Limpieza residencial",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 124,
    area: "Álvaro Obregón",
    startingPrice: 520,
    availability: "Mañana, 10:00",
    trustSignal: "47 servicios completados",
    verified: true,
  },
  {
    id: "ana-sofia-mendoza",
    name: "Ana Sofía Mendoza",
    profession: "Tutoría de matemáticas",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 53,
    area: "En línea y CDMX",
    startingPrice: 380,
    availability: "Hoy, 17:30",
    trustSignal: "Identidad verificada",
    verified: true,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="page-shell">
        <AppHeader greeting="Buenas tardes, Andrés." />

        <section className="mb-8">
          <p className="max-w-xl text-base leading-7 text-[var(--text-secondary)]">
            Encuentra profesionales confiables cerca de ti, compara opciones y
            solicita ayuda sin complicaciones.
          </p>
        </section>

        <form
          action="/buscar"
          method="get"
          className="card mb-10 flex items-center gap-3 p-2"
        >
          <Search
            size={22}
            aria-hidden="true"
            className="ml-3 shrink-0 text-[var(--text-secondary)]"
          />

          <label htmlFor="home-search" className="visually-hidden">
            Buscar un servicio o profesional
          </label>

          <input
            id="home-search"
            name="q"
            type="search"
            placeholder="Busca plomero, tutor, limpieza…"
            className="min-h-12 min-w-0 flex-1 border-0 bg-transparent px-1 text-base outline-none placeholder:text-slate-400"
          />

          <button type="submit" className="primary-button shrink-0">
            Buscar
          </button>
        </form>

        <div className="mb-10">
          <CategoryScroller />
        </div>

        <section className="mb-10" aria-labelledby="providers-title">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="mb-1 text-sm font-semibold text-[var(--accent-dark)]">
                Recomendados para ti
              </p>

              <h2 id="providers-title" className="section-title">
                Profesionales destacados
              </h2>
            </div>

            <Link
              href="/buscar"
              className="flex min-h-11 shrink-0 items-center gap-1 rounded-xl px-2 text-sm font-bold transition hover:bg-[var(--surface-muted)]"
            >
              Ver más
              <ChevronRight size={17} />
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {recommendedProviders.map((provider) => (
              <ProviderCard key={provider.id} {...provider} />
            ))}
          </div>
        </section>

        <div className="mb-10">
          <EmergencyCard />
        </div>

        <section className="card mb-4 p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold text-[var(--accent-dark)]">
                Red de Confianza
              </p>

              <h2 className="section-title">
                Tus profesionales favoritos, siempre cerca.
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-[var(--text-secondary)]">
                Guarda a las personas que hicieron un gran trabajo para
                encontrarlas rápidamente la próxima vez.
              </p>
            </div>

            <Link
              href="/perfil/red-de-confianza"
              className="secondary-button flex items-center justify-center gap-2"
            >
              Ver mi red
              <Heart size={18} />
            </Link>
          </div>
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
}