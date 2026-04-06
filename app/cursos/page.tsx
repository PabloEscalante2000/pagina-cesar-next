export const dynamic = "force-static";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos",
  description:
    "Cursos de formación en psicología clínica, neuropsicología y psicoterapia con César Escalante Sifuentes. Formación para profesionales y público interesado.",
  keywords: [
    "cursos psicología Lima",
    "formación neuropsicología",
    "cursos psicoterapia Peru",
    "César Escalante cursos",
  ],
  openGraph: {
    title: "Cursos — César Escalante Sifuentes",
    description:
      "Cursos de formación en psicología clínica, neuropsicología y psicoterapia con César Escalante.",
    url: "https://cesarescalantesifuentes.com/cursos",
  },
  alternates: { canonical: "https://cesarescalantesifuentes.com/cursos" },
};

import Image from "next/image";

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-crema pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
            Formación
          </span>
          <h1 className="font-cardo text-marino text-5xl lg:text-6xl mt-3 mb-5">
            Cursos
          </h1>
          <div className="w-16 h-px bg-dorado mx-auto" />
        </div>

        {/* Contenido */}
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          <div className="lg:w-1/2">
            <Image
              src="/assets/form_terapeutica.jpg"
              width={600}
              height={400}
              alt="Formación terapéutica"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-5">
            <h2 className="font-cardo text-marino text-3xl lg:text-4xl leading-tight">
              Programas de formación en psicoterapia y salud mental
            </h2>
            <div className="w-16 h-px bg-dorado" />
            <p className="font-cardo text-marino/75 text-base leading-relaxed">
              A través del Instituto ITAS y sus plataformas de formación, César Escalante
              ofrece programas especializados para profesionales de la salud mental, la
              educación y áreas afines. Los cursos integran rigor teórico, claridad
              pedagógica y aplicación clínica.
            </p>
            <p className="font-cardo text-marino/75 text-base leading-relaxed">
              Los programas abordan temáticas como psicoterapia psicoanalítica, neuropsicología
              clínica, intervención en crisis, trabajo con familias y parejas, y la Teoría de
              la Mente Triádica-Dialéctica (TMTD).
            </p>
            <a
              href="https://institutoitas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-8 py-3 bg-marino text-crema font-quicksand font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-marino/80 transition-colors duration-200"
            >
              Ver Instituto ITAS
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
