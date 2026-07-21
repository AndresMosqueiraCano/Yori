import { ArrowUpDown } from "lucide-react";

interface Props {
  results: number;
}

export default function SearchResultHeader({
  results,
}: Props) {
  return (
    <div className="mt-6 mb-5 flex items-center justify-between">
      <p className="text-sm text-[var(--text-secondary)]">
        {results} profesionales encontrados
      </p>

      <button className="flex items-center gap-2 text-sm font-semibold">
        <ArrowUpDown size={16} />
        Recomendados
      </button>
    </div>
  );
}