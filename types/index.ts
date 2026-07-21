export type UserRole = "visitor" | "customer" | "provider" | "admin";

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Provider {
  id: string;
  name: string;
  profession: string;
  avatar: string;
  verified: boolean;
  rating: number;
  reviewCount: number;
  completedJobs: number;
  responseMinutes: number;
  startingPrice: number;
  currency: "MXN";
  serviceArea: string;
  availableToday: boolean;
  bio: string;
  categories: string[];
}

export interface Service {
  id: string;
  providerId: string;
  title: string;
  description: string;
  pricingType: "fixed" | "hourly" | "starting_at" | "quote";
  price: number;
  durationMinutes: number;
}

export interface Booking {
  id: string;
  customerId: string;
  providerId: string;
  serviceId: string;
  status:
    | "draft"
    | "requested"
    | "accepted"
    | "scheduled"
    | "in_progress"
    | "completed"
    | "cancelled";
  scheduledAt: string;
  total: number;
  currency: "MXN";
}

export interface Review {
  id: string;
  providerId: string;
  customerName: string;
  rating: number;
  comment: string;
  createdAt: string;
}