import { ArrowLeft, Compass, Home, Search } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="page-shell flex min-h-screen items-center justify-center">
      <section className="card w-full max-w-lg p-8 text-center sm:p-12">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-3xl bg-[var(--surface-muted)] text-[var(--accent-dark)]">
          <Compass size={30} />
        </div>

        <p className="mb-2 text-sm font-bold text-[var(--accent-dark)]">
          Error 404
        </p>

        <h1 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
          Parece que llegaste al lugar equivocado.
        </h1>

        <p className="mx-auto mt-4 max-w-md leading-7 text-[var(--text-secondary)]">
          La página que buscas no existe, cambió de dirección o todavía no está
          disponible.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a
            href="/"
            className="primary-button flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Volver al inicio
          </a>

          <a
            href="/buscar"
            className="secondary-button flex items-center justify-center gap-2"
          >
            <Search size={18} />
            Buscar servicios
          </a>
        </div>

        <button
          type="button"
          onClick={() => history.back()}
          className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-bold text-[var(--text-secondary)] transition hover:bg-[var(--surface-muted)]"
        >
          <ArrowLeft size={17} />
          Regresar
        </button>
      </section>
    </main>
  );
}