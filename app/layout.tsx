import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Yori",
    template: "%s | Yori",
  },
  description:
    "Yori conecta personas con profesionales confiables para resolver servicios del hogar y personales en México.",
  applicationName: "Yori",
  keywords: [
    "Yori",
    "Servicios",
    "Profesionales",
    "México",
    "Marketplace",
  ],
};

export const viewport: Viewport = {
  themeColor: "#EEF2F5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body>
        {children}
      </body>
    </html>
  );
}