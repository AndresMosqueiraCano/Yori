"use client";

import { SlidersHorizontal } from "lucide-react";

export default function SearchFilters() {
  const filters = [
    "Disponibles hoy",
    "Verificados",
    "Mejor calificados",
    "Cerca de mí",
    "Menor precio",
  ];

  return (
    <section className="mt-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-bold">Filtros</h2>

        <button
          className="secondary-button flex items-center gap-2"
          type="button"
        >
          <SlidersHorizontal size={18} />
          Todos
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium whitespace-nowrap transition hover:border-[var(--accent)]"
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}