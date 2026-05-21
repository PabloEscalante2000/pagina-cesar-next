export const dynamic = "force-static";

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Seminarios, talleres, conversatorios, diplomados y cursos con César Escalante Sifuentes. Próximo evento: «Cuando el cerebro va por otro camino» — 6, 13 y 20 de junio, Hotel Miramar.",
  keywords: [
    "talleres psicología Lima",
    "seminario neuropsicología",
    "cursos salud mental Peru",
    "neurodivergencia seminario",
    "César Escalante eventos",
  ],
  openGraph: {
    title: "Eventos — César Escalante Sifuentes",
    description:
      "Próximo evento: seminario-taller «Cuando el cerebro va por otro camino» — neurodivergencia y problemáticas del aprendizaje. 6, 13 y 20 de junio.",
    url: "https://cesarescalantesifuentes.com/eventos",
  },
  alternates: { canonical: "https://cesarescalantesifuentes.com/eventos" },
};

const formatos = [
  "Seminarios",
  "Talleres",
  "Conversatorios",
  "Diplomados",
  "Cursos",
];

export default function EventosPage() {
  return (
    <main className="min-h-screen bg-crema">

      {/* ── HERO ── */}
      <section className="pt-28 pb-20 px-6 bg-crema">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-center">

          {/* Texto */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
              Agenda
            </span>
            <h1 className="font-cardo text-marino text-5xl lg:text-6xl leading-tight">
              Eventos
            </h1>
            <div className="w-16 h-px bg-dorado" />
            <p className="font-cardo text-marino/75 text-base leading-relaxed">
              César Escalante ofrece espacios de formación y reflexión clínica para
              profesionales, docentes y público interesado en la salud mental, la
              neuropsicología y la psicoterapia.
            </p>

            {/* Formatos */}
            <div className="flex flex-wrap gap-3 mt-2">
              {formatos.map((f, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 border border-dorado text-dorado font-quicksand text-xs tracking-widest uppercase rounded-full"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Imágenes */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 h-[420px] lg:h-[500px]">
            <div className="relative col-span-1 row-span-2 overflow-hidden rounded-sm h-full">
              <Image
                src="/assets/eventos_1.jpg"
                alt="César Escalante"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src="/assets/eventos_2.jpg"
                alt="Taller César Escalante"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src="/assets/eventos_3.jpg"
                alt="Evento César Escalante"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* ── MÁS ALLÁ DEL DIAGNÓSTICO ── */}
      <section className="bg-marino py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="mb-12">
            <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
              Seminario-taller
            </span>
            <h2 className="font-cardo text-crema text-3xl lg:text-4xl mt-3 leading-snug italic">
              «Más allá del Diagnóstico»
            </h2>
            <p className="font-quicksand text-crema/50 text-xs tracking-[0.2em] uppercase mt-3">
              Claves neurocientíficas, educativas y clínicas
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Imagen */}
            <div className="lg:w-3/5">
              <div className="relative aspect-16/12 overflow-hidden rounded-sm">
                <Image
                  src="/assets/brochure.webp"
                  alt="Más allá del Diagnóstico — Seminario-taller"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-marino/30" />
              </div>
            </div>

            {/* Info */}
            <div className="lg:w-2/5 flex flex-col gap-6">
              <p className="font-cardo text-crema/80 text-base leading-relaxed">
                Un intensivo de tres sesiones que explora la neurodivergencia integrando los
                hallazgos más recientes de la neurociencia con la práctica educativa inclusiva
                y el abordaje clínico. Diseñado para traducir conceptos en estrategias concretas
                de acompañamiento.
              </p>
              <p className="font-quicksand text-crema/60 text-sm leading-relaxed">
                Dirigido a docentes, padres y cuidadores, estudiantes de psicología,
                psicólogos y profesionales afines.
              </p>

              <div className="flex flex-col gap-4 border-l-4 border-dorado pl-6">
                <div>
                  <p className="font-quicksand text-dorado text-xs tracking-[0.25em] uppercase mb-1">Fecha</p>
                  <p className="font-cardo text-crema text-lg">6, 13 y 20 de junio</p>
                  <p className="font-quicksand text-crema/50 text-xs mt-0.5">Tres sábados · 3 horas por sesión</p>
                </div>
                <div>
                  <p className="font-quicksand text-dorado text-xs tracking-[0.25em] uppercase mb-1">Lugar</p>
                  <p className="font-cardo text-crema text-lg">La Aurora, Miraflores</p>
                  <p className="font-quicksand text-crema/50 text-xs mt-0.5">Pasaje El Pacayar 149 · También en modalidad virtual</p>
                </div>
              </div>

              <div className="pt-4 border-t border-crema/10">
                <p className="font-quicksand text-dorado text-xs tracking-[0.25em] uppercase mb-4">Dictado por</p>
                <div>
                  <p className="font-cardo text-crema text-base font-bold">César Escalante Sifuentes</p>
                  <p className="font-quicksand text-crema/60 text-xs leading-relaxed">
                    Neuropsicólogo y psicoterapeuta especializado en poblaciones neurodivergentes.
                  </p>
                </div>
              </div>

              <a
                href="https://api.whatsapp.com/send?phone=51966968791&text=Hola,%20quisiera%20inscribirme%20al%20seminario%20M%C3%A1s%20all%C3%A1%20del%20diagn%C3%B3stico"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit px-8 py-3 bg-dorado text-crema font-quicksand font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-dorado/80 transition-colors duration-200"
              >
                Inscribirme
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
