"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  defaultValue?: string;
}

export default function SearchBar({
  placeholder = "Busca plomero, tutor, limpieza…",
  defaultValue = "",
}: SearchBarProps) {
  return (
    <form
      action="/buscar"
      method="get"
      className="card flex items-center gap-3 p-2"
    >
      <Search
        size={22}
        className="ml-3 shrink-0 text-[var(--text-secondary)]"
      />

      <label htmlFor="search" className="visually-hidden">
        Buscar servicio
      </label>

      <input
        id="search"
        name="q"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="min-h-12 min-w-0 flex-1 border-0 bg-transparent px-1 text-base outline-none placeholder:text-slate-400"
      />

      <button
        type="submit"
        className="primary-button shrink-0"
      >
        Buscar
      </button>
    </form>
  );
}