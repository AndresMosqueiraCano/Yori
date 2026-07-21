import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  MapPin,
  ShieldCheck,
  Star,
  Clock3,
} from "lucide-react";
import { formatMXN } from "@/lib/formatters";

interface ProviderCardProps {
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
}

export default function ProviderCard({
  id,
  name,
  profession,
  image,
  rating,
  reviewCount,
  area,
  startingPrice,
  availability,
  trustSignal,
  verified = true,
}: ProviderCardProps) {
  return (
    <article className="card overflow-hidden transition hover:-translate-y-1">
      <div className="relative aspect-[16/10]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />

        <button
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow"
          aria-label="Guardar profesional"
        >
          <Heart size={18} />
        </button>

        {verified && (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold">
            <ShieldCheck
              size={14}
              className="text-[var(--success)]"
            />
            Verificado
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-lg">{name}</h3>

            <p className="text-sm muted">
              {profession}
            </p>
          </div>

          <div className="flex items-center gap-1 font-semibold">
            <Star
              size={16}
              fill="currentColor"
              className="text-[var(--accent-dark)]"
            />
            {rating}
          </div>
        </div>

        <p className="mt-1 text-xs muted">
          {reviewCount} opiniones
        </p>

        <div className="my-4 h-px bg-[var(--border)]" />

        <div className="space-y-2 text-sm muted">
          <p className="flex items-center gap-2">
            <MapPin size={15} />
            {area}
          </p>

          <p className="flex items-center gap-2">
            <Clock3 size={15} />
            {availability}
          </p>

          <p>{trustSignal}</p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs muted">
              Desde
            </p>

            <p className="font-bold text-lg">
              {formatMXN(startingPrice)}
            </p>
          </div>

          <Link
            href={`/profesional/${id}`}
            className="primary-button flex items-center"
          >
            Ver perfil
          </Link>
        </div>
      </div>
    </article>
  );
}