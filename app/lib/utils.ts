import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind classes safely.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a price in Mexican pesos.
 */
export function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Formats ratings consistently.
 */
export function formatRating(rating: number) {
  return rating.toFixed(1);
}

/**
 * Formats large numbers.
 */
export function formatCount(value: number) {
  return new Intl.NumberFormat("es-MX").format(value);
}