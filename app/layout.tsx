import type { Metadata } from "next";
import I18nProvider from "./I18nProvider";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const BASE_URL = "https://cesarescalantesifuentes.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "César Escalante Sifuentes — Psicólogo Clínico & Neuropsicólogo",
    template: "%s | César Escalante Sifuentes",
  },
  description:
    "César Escalante Sifuentes, psicólogo clínico, psicoterapeuta y neuropsicólogo con más de 25 años de experiencia en salud mental y educación. Fundador de Grupo EADES.",
  keywords: [
    "César Escalante Sifuentes",
    "psicólogo clínico Lima",
    "psicoterapeuta Peru",
    "neuropsicólogo",
    "salud mental",
    "psicoterapia psicoanalítica",
    "EADES",
    "TMTD",
    "Teoría de la Mente Triádica Dialéctica",
    "El amor es un delirio",
  ],
  authors: [{ name: "César Escalante Sifuentes", url: BASE_URL }],
  creator: "César Escalante Sifuentes",
  icons: {
    icon: "/assets/web_icono.png",
    apple: "/assets/web_icono.png",
    shortcut: "/assets/web_icono.png",
  },
  openGraph: {
    title: "César Escalante Sifuentes — Psicólogo Clínico & Neuropsicólogo",
    description:
      "Psicólogo clínico, psicoterapeuta y neuropsicólogo con más de 25 años de experiencia. Fundador de Grupo EADES, autor de «El amor es un delirio».",
    url: BASE_URL,
    siteName: "César Escalante Sifuentes",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/assets/web_logo.png",
        width: 1200,
        height: 630,
        alt: "César Escalante Sifuentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "César Escalante Sifuentes — Psicólogo Clínico & Neuropsicólogo",
    description:
      "Psicólogo clínico, psicoterapeuta y neuropsicólogo con más de 25 años de experiencia.",
    images: ["/assets/web_logo.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <I18nProvider>
          <Nav />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
