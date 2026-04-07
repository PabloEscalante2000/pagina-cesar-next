export const dynamic = "force-static";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce a César Escalante Sifuentes: psicólogo clínico, psicoterapeuta psicoanalítico y magíster en neuropsicología con más de 25 años de trayectoria. Autor de la Teoría de la Mente Triádica Dialéctica (TMTD).",
  keywords: [
    "César Escalante biografía",
    "psicólogo clínico Lima",
    "neuropsicólogo Peru",
    "TMTD",
    "Teoría de la Mente Triádica Dialéctica",
  ],
  openGraph: {
    title: "Sobre mí — César Escalante Sifuentes",
    description:
      "Psicólogo clínico, psicoterapeuta y neuropsicólogo con más de 25 años de trayectoria. Autor de la TMTD.",
    url: "https://cesarescalantesifuentes.com/sobre-mi",
  },
  alternates: { canonical: "https://cesarescalantesifuentes.com/sobre-mi" },
};
import data from "../../public/data/dataSobremi.json";

export default function SobreMi() {
  return (
    <main className="min-h-screen bg-crema">

      {/* ── HERO ── */}
      <section
        className="min-h-screen flex items-center relative"
        style={{
          backgroundImage: "url('/assets/fondo_sobre-mi1.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        <div className="absolute inset-0 bg-marino/60" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-start gap-6 pt-24 pb-16">
          <span className="font-quicksand text-white text-xs tracking-[0.3em] uppercase">
            Psicólogo clínico · Psicoterapeuta · Neuropsicólogo
          </span>
          <h1 className="font-cardo text-white text-4xl md:text-5xl lg:text-6xl leading-tight uppercase">
            Sobre mí
          </h1>
          <p className="font-quicksand text-white text-lg md:text-xl tracking-widest">
            César Escalante Sifuentes
          </p>

          {/* Cita */}
          <div className="mt-6 border-l-4 border-verde pl-6 max-w-2xl">
            <p className="font-cardo text-white text-xl lg:text-2xl italic leading-relaxed">
              {data.cita}
            </p>
            <p className="font-quicksand text-white text-xs tracking-[0.25em] uppercase mt-4">
              — {data.autor}
            </p>
          </div>
        </div>
      </section>

      {/* ── BIO ── */}
      <section
        className="min-h-screen flex items-center relative"
        style={{
          backgroundImage: "url('/assets/fondo_sobre-mi2.png')",
          backgroundSize: "cover",
          backgroundPosition: "left center",
        }}
      >
        <div className="absolute inset-0 bg-verde/65" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-end gap-8 py-24">
          <span className="font-quicksand text-white text-xs tracking-[0.3em] uppercase">
            Trayectoria
          </span>
          <p className="font-cardo text-white text-base lg:text-lg leading-relaxed text-right max-w-xl">
            {data["descipcion-1"]}
          </p>
          <div className="w-16 h-px bg-white/50" />
          <p className="font-cardo text-white text-base lg:text-lg leading-relaxed text-right max-w-xl">
            {data["descipcion-2"]}
          </p>
        </div>
      </section>

      {/* ── TMTD ── */}
      <section
        className="min-h-screen flex items-center relative"
        style={{
          backgroundImage: "url('/assets/fondo_sobre-mi3.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        <div className="absolute inset-0 bg-marino/65" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-start gap-6 py-24">
          <span className="font-quicksand text-white text-xs tracking-[0.3em] uppercase">
            Desarrollo teórico
          </span>
          <div className="border-l-4 border-verde pl-6">
            <h2 className="font-cardo text-white text-3xl lg:text-4xl leading-snug">
              Teoría de la Mente Triádica Dialéctica
            </h2>
            <span className="font-quicksand text-white text-xs tracking-widest uppercase">
              TMTD
            </span>
          </div>
          <p className="font-cardo text-white text-base lg:text-lg leading-relaxed max-w-2xl">
            {data["descipcion-3"]}
          </p>
          <div className="w-16 h-px bg-white/50" />
          <p className="font-cardo text-white text-base lg:text-lg leading-relaxed max-w-2xl">
            {data["descripcion-4"]}
          </p>
          <p className="font-cardo text-white text-base lg:text-lg leading-relaxed max-w-2xl">
            {data["descripcion-5"]}
          </p>
        </div>
      </section>

    </main>
  );
}
