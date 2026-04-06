export const dynamic = "force-static";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos",
  description:
    "Cursos de formación en psicología clínica, neuropsicología y psicoterapia con César Escalante Sifuentes. Próximamente disponibles.",
  keywords: [
    "cursos psicología Lima",
    "formación neuropsicología",
    "cursos psicoterapia Peru",
    "César Escalante cursos",
  ],
  openGraph: {
    title: "Cursos — César Escalante Sifuentes",
    description:
      "Cursos de formación en psicología clínica, neuropsicología y psicoterapia con César Escalante. Próximamente.",
    url: "https://cesarescalantesifuentes.com/cursos",
  },
  alternates: { canonical: "https://cesarescalantesifuentes.com/cursos" },
};

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-crema pt-24 pb-20 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center flex flex-col items-center gap-6">

        <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
          Formación
        </span>

        <h1 className="font-cardo text-marino text-5xl lg:text-6xl">
          Cursos
        </h1>

        <div className="w-16 h-px bg-dorado" />

        <p className="font-cardo text-marino/70 text-xl leading-relaxed">
          Próximamente
        </p>

        <p className="font-cardo text-marino/60 text-base leading-relaxed">
          Esta sección está en preparación. Pronto encontrarás aquí los programas
          de formación disponibles.
        </p>

      </div>
    </main>
  );
}
