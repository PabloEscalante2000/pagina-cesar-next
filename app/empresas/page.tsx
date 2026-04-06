export const dynamic = "force-static";

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Empresas",
  description:
    "Conoce las empresas fundadas por César Escalante: Grupo EADES, PSERES, Instituto ITAS e ILUMINA. Organizaciones dedicadas a la salud mental, formación y educación.",
  keywords: [
    "Grupo EADES",
    "PSERES",
    "Instituto ITAS",
    "ILUMINA salud mental",
    "empresas salud mental Peru",
  ],
  openGraph: {
    title: "Empresas — César Escalante Sifuentes",
    description:
      "EADES, PSERES, ITAS e ILUMINA: las organizaciones de César Escalante dedicadas a la salud mental y la educación.",
    url: "https://cesarescalantesifuentes.com/empresas",
  },
  alternates: { canonical: "https://cesarescalantesifuentes.com/empresas" },
};

const empresas = [
  {
    link: "https://eadespsicoterapia.com/inicio/",
    nombre: "EADES",
    logo: "/assets/logo_eades.webp",
    tagline: "Salud mental integral",
    descripcion:
      "Grupo EADES es una organización dedicada al cuidado integral de la salud mental. Con un equipo multidisciplinario, ofrece atención psicológica, psiquiátrica y neuropsicológica para todas las edades.",
    bg: "bg-marino",
  },
  {
    link: "https://www.pseres.pe/",
    nombre: "PSERES",
    logo: "/assets/pseres_vert.svg",
    tagline: "Formación integral de niños y adolescentes",
    descripcion:
      "PSERES es un centro especializado en la formación integral de niños y adolescentes. Acompaña a familias en el desarrollo cognitivo, emocional y social a través de programas especializados.",
    bg: "bg-verde",
  },
  {
    link: "https://institutoitas.com/",
    nombre: "ITAS",
    logo: "/assets/itas_icono.png",
    tagline: "Formación y reflexión clínica",
    descripcion:
      "Instituto ITAS está dedicado a la formación, la reflexión clínica y la producción de conocimiento en salud mental. Ofrece programas de capacitación para profesionales de la salud y la educación.",
    bg: "bg-marino",
  },
  {
    link: "https://asociacionilumina.org/inicio",
    nombre: "ILUMINA",
    logo: "/assets/ilumina_logo.png",
    tagline: "Acceso a la salud mental para todos",
    descripcion:
      "ILUMINA nace con la misión de democratizar el acceso a la salud mental, brindando atención de calidad a todas las personas sin distinción socioeconómica.",
    bg: "bg-dorado",
  },
];

export default function EmpresasPage() {
  return (
    <main className="min-h-screen bg-crema">

      {/* ── HERO ── */}
      <section
        className="min-h-screen flex items-center justify-end relative"
        style={{
          backgroundImage: "url('/assets/empresas_fondo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-marino/60" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-end justify-center gap-6 pt-20">
          <h1 className="font-cardo text-crema text-4xl md:text-5xl lg:text-6xl leading-tight uppercase text-right">
            Empresas de
            <br />
            César Escalante
          </h1>
          <Image
            src="/assets/logo_fondo_oscuro.png"
            width={220}
            height={120}
            alt="Logo César Escalante"
            className="w-44 md:w-56 h-auto"
          />
        </div>
      </section>

      {/* ── CARDS ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
              Iniciativas
            </span>
            <h2 className="font-cardo text-marino text-4xl lg:text-5xl mt-3 mb-4">
              Mis Empresas
            </h2>
            <div className="w-16 h-px bg-dorado mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {empresas.map((empresa, i) => (
              <div key={i} className="group h-80 perspective-[1000px]">
                <div className="relative w-full h-full transform-3d transition-transform duration-700 ease-in-out group-hover:transform-[rotateX(180deg)]">

                  {/* FRENTE */}
                  <div className={`absolute inset-0 backface-hidden ${empresa.bg} rounded-sm flex flex-col items-center justify-center gap-6 p-8`}>
                    <Image
                      src={empresa.logo}
                      width={200}
                      height={100}
                      alt={`Logo ${empresa.nombre}`}
                      className="h-20 w-auto object-contain brightness-0 invert"
                    />
                    <p className="font-quicksand text-crema/70 text-xs tracking-[0.25em] uppercase text-center">
                      {empresa.tagline}
                    </p>
                  </div>

                  {/* REVERSO */}
                  <div className="absolute inset-0 backface-hidden transform-[rotateX(180deg)] bg-crema rounded-sm flex flex-col items-start justify-between p-8 border border-dorado/20">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-cardo text-marino text-2xl">{empresa.nombre}</h3>
                      <div className="w-10 h-px bg-dorado" />
                      <p className="font-cardo text-marino/75 text-sm leading-relaxed">
                        {empresa.descripcion}
                      </p>
                    </div>
                    <a
                      href={empresa.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-dorado text-dorado font-quicksand text-xs tracking-widest uppercase rounded-full hover:bg-dorado hover:text-crema transition-all duration-200"
                    >
                      Visitar sitio web
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
