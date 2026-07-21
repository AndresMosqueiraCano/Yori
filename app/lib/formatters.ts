export function formatMXN(amount: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDistance(distanceKm: number): string {
  if (distanceKm < 1) {
    return "Menos de 1 km";
  }

  return `${distanceKm.toFixed(1)} km`;
}

export function formatResponseTime(minutes: number): string {
  if (minutes < 60) {
    return `Responde en ${minutes} min`;
  }

  const hours = Math.round(minutes / 60);
  return `Responde en ${hours} h`;
}

export function formatAvailability(date: string): string {
  return date;
}

export function greeting(name: string): string {
  const hour = new Date().getHours();

  if (hour < 12) return `Buenos días, ${name}.`;
  if (hour < 19) return `Buenas tardes, ${name}.`;

  return `Buenas noches, ${name}.`;
}