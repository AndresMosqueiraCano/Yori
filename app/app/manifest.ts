import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yori",
    short_name: "Yori",
    description:
      "Marketplace de servicios confiables para encontrar al profesional adecuado en México.",
    start_url: "/",
    display: "standalone",
    background_color: "#EEF2F5",
    theme_color: "#EEF2F5",
    orientation: "portrait",
    lang: "es-MX",
    scope: "/",
    categories: [
      "business",
      "productivity",
      "lifestyle"
    ],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
}