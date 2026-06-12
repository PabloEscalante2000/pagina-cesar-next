export const dynamic = "force-static";

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Formación Especializada Intensiva con César Escalante Sifuentes. Próximo programa: «Más allá del Diagnóstico: Neurociencias en el Aula» — junio–julio 2026, modalidad virtual con cierre presencial.",
  keywords: [
    "talleres psicología Lima",
    "seminario neuropsicología",
    "cursos salud mental Peru",
    "neurodivergencia seminario",
    "César Escalante eventos",
    "neurociencias aula docentes",
    "TDAH TEA dislexia formación",
  ],
  openGraph: {
    title: "Eventos — César Escalante Sifuentes",
    description:
      "Próximo programa: «Más allá del Diagnóstico: Neurociencias en el Aula» — 4 módulos, 18 horas académicas, junio–julio 2026. Virtual + cierre presencial en Miraflores.",
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
              Formación Especializada Intensiva
            </span>
            <h2 className="font-cardo text-crema text-3xl lg:text-4xl mt-3 leading-snug italic">
              «Más allá del Diagnóstico: Neurociencias en el Aula»
            </h2>
            <p className="font-quicksand text-crema/50 text-xs tracking-[0.2em] uppercase mt-3">
              Neurociencias aplicadas al aula · Promovido por Ilumina – Grupo EADES
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Info */}
            <div className="lg:w-2/5 flex flex-col gap-6">
              <p className="font-cardo text-crema/80 text-base leading-relaxed">
                Programa de 4 módulos y 18 horas académicas que aborda la neurodivergencia
                —TDAH, TEA, dislexia y altas capacidades— desde la neurociencia aplicada,
                integrando nutrición, salud mental y educación inclusiva. Diseñado para
                traducir ciencia en estrategias concretas de acompañamiento en el aula real.
              </p>
              <p className="font-quicksand text-crema/60 text-sm leading-relaxed">
                Dirigido a docentes de inicial, primaria y secundaria, padres y cuidadores,
                psicólogos y profesionales de la salud mental y la educación.
              </p>

              <div className="flex flex-col gap-4 border-l-4 border-dorado pl-6">
                <div>
                  <p className="font-quicksand text-dorado text-xs tracking-[0.25em] uppercase mb-1">Fechas</p>
                  <p className="font-cardo text-crema text-lg">Junio – Julio 2026</p>
                  <p className="font-quicksand text-crema/50 text-xs mt-0.5">
                    Mar 23 jun · Jue 25 jun · Mar 30 jun · Jue 02 jul · Mar 07 jul · Jue 09 jul
                  </p>
                  <p className="font-quicksand text-crema/50 text-xs mt-0.5">
                    Cierre presencial: Sáb 11 de julio
                  </p>
                </div>
                <div>
                  <p className="font-quicksand text-dorado text-xs tracking-[0.25em] uppercase mb-1">Horario</p>
                  <p className="font-cardo text-crema text-base">7:30 – 9:30 p.m. (clases virtuales)</p>
                  <p className="font-quicksand text-crema/50 text-xs mt-0.5">18 horas académicas · 7 sesiones</p>
                </div>
                <div>
                  <p className="font-quicksand text-dorado text-xs tracking-[0.25em] uppercase mb-1">Modalidad y lugar</p>
                  <p className="font-cardo text-crema text-base">Virtual + cierre presencial</p>
                  <p className="font-quicksand text-crema/50 text-xs mt-0.5">General Silva 570 · Miraflores</p>
                </div>
                <div>
                  <p className="font-quicksand text-dorado text-xs tracking-[0.25em] uppercase mb-1">Inversión</p>
                  <p className="font-cardo text-crema text-base">Desde S/ 160 · Paquete completo S/ 190</p>
                  <p className="font-quicksand text-crema/50 text-xs mt-0.5">Módulo individual S/ 50 · Certificación con respaldo internacional</p>
                </div>
              </div>

              <div className="pt-4 border-t border-crema/10 flex flex-col gap-4">
                <p className="font-quicksand text-dorado text-xs tracking-[0.25em] uppercase">Equipo académico</p>
                <div>
                  <p className="font-cardo text-crema text-base font-bold">Mag. César Escalante Sifuentes</p>
                  <p className="font-quicksand text-crema/60 text-xs leading-relaxed">
                    Director Académico · Neuropsicólogo clínico · +25 años de experiencia ·
                    Máster en Neuropsicología, Universidad Rey Juan Carlos (España)
                  </p>
                </div>
                <div>
                  <p className="font-cardo text-crema text-base font-bold">Lic. Kevin Cubas Verástegui</p>
                  <p className="font-quicksand text-crema/60 text-xs leading-relaxed">
                    Co-facilitador · Psicólogo clínico especializado en evaluación e intervención
                    con niños y adolescentes neurodivergentes
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://api.whatsapp.com/send?phone=51966968791&text=Hola,%20quisiera%20inscribirme%20al%20programa%20M%C3%A1s%20all%C3%A1%20del%20diagn%C3%B3stico%3A%20Neurociencias%20en%20el%20Aula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-dorado text-crema font-quicksand font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-dorado/80 transition-colors duration-200"
                >
                  Inscribirme
                </a>
                <a
                  href="/pdf/curso Más allá del diagnóstico.pdf"
                  download
                  className="px-8 py-3 border border-dorado text-dorado font-quicksand font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-dorado/10 transition-colors duration-200"
                >
                  Descargar brochure
                </a>
              </div>
            </div>

            {/* Imagen */}
            <div className="lg:w-3/5">
              <div className="relative aspect-9/13 max-h-screen overflow-hidden rounded-sm">
                <Image
                  src="/assets/fah.jpg"
                  alt="Más allá del Diagnóstico — Formación Especializada Intensiva"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-marino/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
