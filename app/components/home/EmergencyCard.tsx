import Link from "next/link";
import { ArrowRight, Clock3, ShieldAlert } from "lucide-react";

export default function EmergencyCard() {
  return (
    <section
      aria-labelledby="urgent-help-title"
      className="overflow-hidden rounded-[var(--radius-large)] border border-[#526276] bg-[#354457] text-white shadow-[var(--shadow-soft)]"
    >
      <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <span className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#dec895]">
            <Clock3 size={23} />
          </span>

          <p className="mb-2 text-sm font-semibold text-[#dec895]">
            Servicio prioritario
          </p>

          <h2
            id="urgent-help-title"
            className="text-2xl font-extrabold tracking-[-0.035em] sm:text-3xl"
          >
            ¿Necesitas ayuda urgente?
          </h2>

          <p className="mt-3 max-w-xl leading-7 text-slate-200">
            Encuentra profesionales que indicaron disponibilidad para atender
            hoy o lo antes posible.
          </p>

          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 p-4">
            <ShieldAlert
              size={19}
              className="mt-0.5 shrink-0 text-[#dec895]"
            />

            <p className="text-xs leading-5 text-slate-200">
              Para riesgos de vida, incendios, fugas de gas, delitos o
              emergencias médicas, contacta primero a los servicios oficiales
              de emergencia.
            </p>
          </div>
        </div>

        <Link
          href="/buscar?urgente=true"
          className="flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-white px-5 font-bold text-[#253346] transition hover:bg-slate-100 active:scale-[0.98]"
        >
          Buscar ayuda urgente
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}