export const dynamic = "force-static";

import type { Metadata } from "next";
import Image from "next/image";

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
    <main className="min-h-screen bg-crema pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
            Psicólogo clínico · Psicoterapeuta · Neuropsicólogo
          </span>
          <h1 className="font-cardo text-marino text-5xl lg:text-6xl mt-3 mb-5">
            Sobre mí
          </h1>
          <div className="w-16 h-px bg-dorado mx-auto" />
        </div>

        {/* Cita */}
        <div className="bg-marino px-10 py-12 mb-16 rounded-sm">
          <p className="font-cardo text-crema text-xl lg:text-2xl italic leading-relaxed text-center">
            {data.cita}
          </p>
          <p className="font-quicksand text-dorado text-xs tracking-[0.25em] uppercase text-center mt-5">
            — {data.autor}
          </p>
        </div>

        {/* Bio: imagen + descripción 1 y 2 */}
        <div className="flex flex-col lg:flex-row gap-14 items-start mb-20">
          <div className="lg:w-2/5 flex justify-center">
            <Image
              src="/assets/cesar_new.jpg"
              width={500}
              height={650}
              alt="César Escalante Sifuentes"
              className="w-full max-w-sm h-auto rounded-sm shadow-xl object-cover object-top"
            />
          </div>

          <div className="lg:w-3/5 flex flex-col gap-6 justify-center">
            <p className="font-cardo text-marino/80 text-base leading-relaxed">
              {data["descipcion-1"]}
            </p>
            <p className="font-cardo text-marino/80 text-base leading-relaxed">
              {data["descipcion-2"]}
            </p>
          </div>
        </div>

        {/* TMTD: imagen lateral + descripciones 3, 4 y 5 */}
        <div className="border-t border-dorado/30 pt-16">
          <div className="flex flex-col lg:flex-row-reverse gap-14 items-start">
            <div className="lg:w-2/5 flex justify-center">
              <Image
                src="/assets/cesar_new-min.webp"
                width={500}
                height={650}
                alt="César Escalante — TMTD"
                className="w-full max-w-sm h-auto rounded-sm shadow-xl object-cover object-top"
              />
            </div>

            <div className="lg:w-3/5 flex flex-col gap-6">
              <div className="border-l-4 border-dorado pl-6">
                <h2 className="font-cardo text-marino text-2xl lg:text-3xl leading-snug">
                  Teoría de la Mente Triádica Dialéctica
                </h2>
                <span className="font-quicksand text-dorado text-xs tracking-widest uppercase">
                  TMTD
                </span>
              </div>
              <p className="font-cardo text-marino/80 text-base leading-relaxed">
                {data["descipcion-3"]}
              </p>
              <p className="font-cardo text-marino/80 text-base leading-relaxed">
                {data["descripcion-4"]}
              </p>
              <p className="font-cardo text-marino/80 text-base leading-relaxed">
                {data["descripcion-5"]}
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
