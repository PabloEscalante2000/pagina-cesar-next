import type { Metadata } from "next";
import I18nProvider from "./I18nProvider";
import "./globals.css";
import WhIcon from "@/components/WhIcon";
import Nav from "@/components/Nav"


export const metadata : Metadata = {
  title: "César Escalante Sifuentes",
  description: "Neuropsicólogo, Piscólogo Clínico, Docente. Soy César Escalante, psicólogo clínico y Magister en neuropsicología. Tengo más de 25 años de experiencia en el ámbito de la salud mental y la educación. Mi vocación es acompañar a las personas en su camino hacia el bienestar emocional y el crecimiento personal.",
  icons: {
   icon: "/favicon.ico",
   apple: "/apple-touch-icon.png",
   shortcut: "/icon.png",
  },
  keywords: ["psicología", "terapia", "blog", "educación", "psicoeducación"],
  openGraph: {
    title: "PSERES",
    description: "Neuropsicólogo, Piscólogo Clínico, Docente. Soy César Escalante, psicólogo clínico y Magister en neuropsicología. Tengo más de 25 años de experiencia en el ámbito de la salud mental y la educación. Mi vocación es acompañar a las personas en su camino hacia el bienestar emocional y el crecimiento personal.",
    url: "https://cesarescalantesifuentes.com/",
    siteName: "César Escalante Sifuentes",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <I18nProvider>
          <Nav />
          {children}
          <WhIcon />
        </I18nProvider>
      </body>
    </html>
  );
}
