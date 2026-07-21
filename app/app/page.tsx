import Image from "next/image";
import {
  Bell,
  BookOpen,
  ChevronRight,
  CircleUserRound,
  Clock3,
  Heart,
  Home,
  House,
  Lightbulb,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  CalendarDays,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Category = {
  name: string;
  icon: LucideIcon;
  search: string;
};

type Provider = {
  id: string;
  name: string;
  profession: string;
  rating: number;
  reviews: number;
  area: string;
  price: number;
  availability: string;
  trustSignal: string;
  image: string;
};

const categories: Category[] = [
  {
    name: "Plomería",
    icon: Wrench,
    search: "plomería",
  },
  {
    name: "Electricidad",
    icon: Lightbulb,
    search: "electricidad",
  },
  {
    name: "Limpieza",
    icon: Sparkles,
    search: "limpieza",
  },
  {
    name: "Tutorías",
    icon: BookOpen,
    search: "tutorías",
  },
  {
    name: "Reparaciones",
    icon: House,
    search: "reparaciones",
  },
  {
    name: "Más",
    icon: ChevronRight,
    search: "",
  },
];

const recommendedProviders: Provider[] = [
  {
    id: "carlos-hernandez",
    name: "Carlos Hernández",
    profession: "Plomería residencial",
    rating: 4.9,
    reviews: 86,
    area: "Santa Fe y alrededores",
    price: 450,
    availability: "Disponible hoy",
    trustSignal: "Responde en 8 min",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "maria-fernanda-ruiz",
    name: "María Fernanda Ruiz",
    profession: "Limpieza residencial",
    rating: 4.8,
    reviews: 124,
    area: "Álvaro Obregón",
    price: 520,
    availability: "Mañana, 10:00",
    trustSignal: "47 servicios completados",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ana-sofia-mendoza",
    name: "Ana Sofía Mendoza",
    profession: "Tutoría de matemáticas",
    rating: 4.7,
    reviews: 53,
    area: "En línea y CDMX",
    price: 380,
    availability: "Hoy, 17:30",
    trustSignal: "Identidad verificada",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
];

function CompassMark() {
  return (
    <span
      aria-hidden="true"
      className="relative flex size-8 items-center justify-center"
    >
      <span className="absolute h-7 w-[2px] rotate-45 rounded-full bg-[var(--accent)]" />
      <span className="absolute h-7 w-[2px] -rotate-45 rounded-full bg-[var(--accent)]" />
      <span className="size-2 rounded-full bg-[var(--accent-dark)]" />
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="page-shell">
        <header className="mb-8 flex items-center justify-between">
          <a
            href="/"
            aria-label="Ir al inicio de Yori"
            className="flex items-center gap-2"
          >
            <CompassMark />

            <span className="text-xl font-extrabold tracking-[0.18em]">
              YORI
            </span>
          </a>

          <div className="flex items-center gap-2">
            <a
              href="/notificaciones"
              aria-label="Ver notificaciones"
              className="flex size-11 items-center justify-center rounded-full border border-[var(--border)] bg-white transition hover:bg-[var(--surface-muted)] active:scale-95"
            >
              <Bell size={20} />
            </a>

            <a
              href="/perfil"
              aria-label="Abrir perfil"
              className="flex size-11 items-center justify-center rounded-full border border-[var(--border)] bg-white transition hover:bg-[var(--surface-muted)] active:scale-95"
            >
              <CircleUserRound size={22} />
            </a>
          </div>
        </header>

        <section className="mb-8">
          <button
            type="button"
            className="mb-5 flex min-h-10 items-center gap-2 rounded-full px-1 text-sm font-semibold text-[var(--text-secondary)]"
            aria-label="Cambiar ubicación"
          >
            <MapPin size={17} className="text-[var(--accent-dark)]" />
            Santa Fe, Ciudad de México
            <ChevronRight size={16} />
          </button>

          <p className="mb-2 text-sm font-semibold text-[var(--accent-dark)]">
            Buenas tardes, Andrés.
          </p>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
            ¿Qué necesitas resolver hoy?
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
            Encuentra profesionales confiables cerca de ti, compara opciones y
            solicita ayuda sin complicaciones.
          </p>
        </section>

        <form
          action="/buscar"
          method="get"
          className="card mb-9 flex items-center gap-3 p-2"
        >
          <Search
            size={22}
            className="ml-3 shrink-0 text-[var(--text-secondary)]"
            aria-hidden="true"
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

        <section className="mb-10" aria-labelledby="categories-title">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="mb-1 text-sm font-semibold text-[var(--accent-dark)]">
                Servicios
              </p>

              <h2 id="categories-title" className="section-title">
                ¿Cómo podemos ayudarte?
              </h2>
            </div>

            <a
              href="/buscar"
              className="hidden min-h-11 items-center gap-1 rounded-xl px-3 text-sm font-bold sm:flex"
            >
              Ver todos
              <ChevronRight size={17} />
            </a>
          </div>

          <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:grid-cols-3 sm:px-0 lg:grid-cols-6">
            {categories.map((category) => {
              const Icon = category.icon;
              const query = category.search
                ? `/buscar?q=${encodeURIComponent(category.search)}`
                : "/buscar";

              return (
                <a
                  key={category.name}
                  href={query}
                  className="card flex min-w-28 flex-col items-start gap-4 p-4 transition duration-150 hover:-translate-y-0.5 hover:border-[var(--accent)] active:scale-[0.98] sm:min-w-0"
                >
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-[var(--surface-muted)] text-[var(--accent-dark)]">
                    <Icon size={21} />
                  </span>

                  <span className="text-sm font-bold">{category.name}</span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="mb-10" aria-labelledby="providers-title">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="mb-1 text-sm font-semibold text-[var(--accent-dark)]">
                Recomendados para ti
              </p>

              <h2 id="providers-title" className="section-title">
                Profesionales destacados
              </h2>
            </div>

            <a
              href="/buscar"
              className="flex min-h-11 items-center gap-1 rounded-xl px-2 text-sm font-bold"
            >
              Ver más
              <ChevronRight size={17} />
            </a>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {recommendedProviders.map((provider) => (
              <article
                key={provider.id}
                className="card overflow-hidden transition duration-150 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <a
                  href={`/profesional/${provider.id}`}
                  aria-label={`Ver perfil de ${provider.name}`}
                  className="block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                    <Image
                      src={provider.image}
                      alt={`Retrato profesional de ${provider.name}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-300 hover:scale-[1.02]"
                    />

                    <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold shadow-sm">
                      <ShieldCheck
                        size={15}
                        className="text-[var(--success)]"
                      />
                      Verificado
                    </span>

                    <button
                      type="button"
                      aria-label={`Guardar a ${provider.name}`}
                      className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/95 shadow-sm transition active:scale-90"
                    >
                      <Heart size={19} />
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-extrabold tracking-[-0.025em]">
                          {provider.name}
                        </h3>

                        <p className="mt-1 text-sm text-[var(--text-secondary)]">
                          {provider.profession}
                        </p>
                      </div>

                      <span className="flex shrink-0 items-center gap-1 text-sm font-bold">
                        <Star
                          size={16}
                          fill="currentColor"
                          className="text-[var(--accent-dark)]"
                        />
                        {provider.rating}
                      </span>
                    </div>

                    <p className="text-xs text-[var(--text-secondary)]">
                      {provider.reviews} opiniones
                    </p>

                    <div className="my-4 h-px bg-[var(--border)]" />

                    <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                      <p className="flex items-center gap-2">
                        <MapPin size={16} />
                        {provider.area}
                      </p>

                      <p className="flex items-center gap-2">
                        <Clock3 size={16} />
                        {provider.availability}
                      </p>

                      <p className="flex items-center gap-2">
                        <Zap size={16} />
                        {provider.trustSignal}
                      </p>
                    </div>

                    <div className="mt-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs text-[var(--text-secondary)]">
                          Desde
                        </p>

                        <p className="mt-0.5 text-lg font-extrabold">
                          ${provider.price.toLocaleString("es-MX")} MXN
                        </p>
                      </div>

                      <span className="rounded-xl bg-[var(--text-primary)] px-4 py-3 text-sm font-bold text-white">
                        Ver perfil
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="urgent-title"
          className="mb-10 overflow-hidden rounded-[var(--radius-large)] border border-red-200 bg-white shadow-[var(--shadow-soft)]"
        >
          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-red-50 text-[var(--danger)]">
                <Zap size={23} />
              </span>

              <h2
                id="urgent-title"
                className="text-2xl font-extrabold tracking-[-0.035em]"
              >
                ¿Necesitas ayuda urgente?
              </h2>

              <p className="mt-2 max-w-xl leading-7 text-[var(--text-secondary)]">
                Busca profesionales que indicaron disponibilidad para atender
                hoy.
              </p>

              <p className="mt-4 max-w-2xl text-xs leading-5 text-[var(--text-secondary)]">
                Para riesgos de vida, incendios, fugas de gas, delitos o
                emergencias médicas, contacta primero a los servicios oficiales
                de emergencia.
              </p>
            </div>

            <a
              href="/buscar?urgente=true"
              className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[var(--danger)] px-5 font-bold text-white transition hover:opacity-95 active:scale-[0.98]"
            >
              Buscar ayuda urgente
              <ChevronRight size={18} />
            </a>
          </div>
        </section>

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

            <a
              href="/perfil/red-de-confianza"
              className="secondary-button flex items-center justify-center gap-2"
            >
              Ver mi red
              <Heart size={18} />
            </a>
          </div>
        </section>
      </main>

      <nav
        aria-label="Navegación principal"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur"
      >
        <div className="mx-auto grid max-w-xl grid-cols-5">
          <a
            href="/"
            aria-current="page"
            className="flex min-h-18 flex-col items-center justify-center gap-1.5 text-xs font-bold text-[var(--accent-dark)]"
          >
            <Home size={21} />
            Inicio
          </a>

          <a
            href="/buscar"
            className="flex min-h-18 flex-col items-center justify-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)]"
          >
            <Search size={21} />
            Buscar
          </a>

          <a
            href="/reservas"
            className="flex min-h-18 flex-col items-center justify-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)]"
          >
            <CalendarDays size={21} />
            Reservas
          </a>

          <a
            href="/mensajes"
            className="flex min-h-18 flex-col items-center justify-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)]"
          >
            <MessageCircle size={21} />
            Mensajes
          </a>

          <a
            href="/perfil"
            className="flex min-h-18 flex-col items-center justify-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)]"
          >
            <CircleUserRound size={21} />
            Perfil
          </a>
        </div>
      </nav>
    </div>
  );
}