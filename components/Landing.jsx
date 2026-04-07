"use client";

import Image from "next/image";

const empresas = [
  {
    link: "https://eadespsicoterapia.com/inicio/",
    nombre: "EADES",
    logo: "/assets/logo_eades.webp",
    texto: "Enfocados en el cuidado integral de la salud mental",
    color: null,
  },
  {
    link: "https://www.pseres.pe/",
    nombre: "PSERES",
    logo: "/assets/pseres_vert.svg",
    texto: "Dedicados a la formación integral de niños y adolescentes",
    color: "#777844",
  },
  {
    link: "https://institutoitas.com/",
    nombre: "ITAS",
    logo: "/assets/itas_icono.png",
    texto: "Instituto dedicado a la formación y la reflexión clínica en salud mental",
    color: null,
  },
  {
    link: "https://asociacionilumina.org/inicio",
    nombre: "ILUMINA",
    logo: "/assets/ilumina_logo.png",
    texto: "Acceso a la salud mental para todas las personas",
    color: null,
  },
];

const asociaciones = [
  {
    img: "/assets/sip_logo.png",
    nombre: "Sociedad Interamericana de Psicología (SIP)",
    alt: "Logo SIP",
  },
  {
    img: "/assets/nspa.png",
    nombre: "Sociedad Internacional de Neuropsicoanálisis",
    alt: "Logo NSPA",
  },
  {
    img: "/assets/member.png",
    nombre: "Centro Intercultural de Londres (LIC)",
    alt: "Logo London Intercultural Center",
  },
  {
    img: "/assets/iaoth.png",
    nombre: "Asociación Internacional de Terapeutas (IAOTH)",
    alt: "Logo IAOTH",
  },
  {
    img: "/assets/euroasopsy.png",
    nombre: "Asociación Europea de Psicología Aplicada (EAAP)",
    alt: "Logo Euroasopsy",
  },
];

export default function Landing() {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/assets/fondo_hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        <div className="relative z-10 flex items-start justify-center mr-auto">
          <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center gap-5 pt-20">
            <h1 className="font-cardo text-marino text-4xl md:text-5xl lg:text-6xl leading-tight uppercase">
              César Escalante
            </h1>
            {/* Línea divisoria: elipse SVG, color verde, más gruesa en el centro */}
            <svg
              viewBox="0 0 560 12"
              height="12"
              className="w-[min(560px,100%)]"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <ellipse cx="280" cy="6" rx="280" ry="6" fill="#708273" />
            </svg>
            <p className="font-quicksand text-marino text-lg md:text-xl lg:text-2xl tracking-widest">
              Psicólogo clínico&nbsp;·&nbsp;Psicoterapeuta&nbsp;·&nbsp;Neuropsicólogo
            </p>
          </div>
        </div>
      </section>

      {/* ── VIDEO / GRUPO EADES ── */}
      <section className="relative min-h-[600px] flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          autoPlay
          playsInline
        >
          <source src="/assets/video_landing.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-marino/70" />
        <div className="relative z-10 flex flex-col items-center gap-7 text-center px-6 py-20">
          <Image
            src="/assets/logo_fondo_oscuro.png"
            width={220}
            height={220}
            alt="Logo Grupo EADES"
            className="w-44 md:w-56 h-auto"
          />
          <p className="font-quicksand text-crema text-xl md:text-2xl lg:text-3xl max-w-xl">
            Salud mental a todas las personas
          </p>
          <a
            href="https://grupoeades.org"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-dorado text-crema font-quicksand font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-dorado/80 transition-colors duration-200"
          >
            Visitar sitio web
          </a>
        </div>
      </section>

      {/* ── LIBRO: EL AMOR ES UN DELIRIO ── */}
      <section className="bg-marino py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-14 items-center">
          {/* Imagen del libro */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/assets/EL-AMOR-ES-UN-DELIRIO-MOCKUP-3-1-1.webp"
              width={550}
              height={550}
              alt="El amor es un delirio — César Escalante"
              className="w-full max-w-sm lg:max-w-md h-auto drop-shadow-2xl"
            />
          </div>

          {/* Contenido */}
          <div className="lg:w-1/2 flex flex-col gap-5">
            <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
              Disponible ahora
            </span>
            <h2 className="font-cardo text-crema text-4xl lg:text-5xl leading-tight">
              El amor es un delirio
            </h2>
            <div className="w-16 h-px bg-dorado" />
            <p className="font-cardo text-crema/75 text-base leading-relaxed">
              Este ensayo examina cómo la mente, impulsada por el amor, construye certezas
              como defensa ante la duda. Más que explorar el amor como vivencia, el libro
              investiga el momento en que el afecto se convierte en interpretación, cuando los
              gestos se vuelven evidencia y los pensamientos se solidifican en verdades
              incuestionables. El autor sugiere que el exceso de pensamiento se convierte en
              un mecanismo sofisticado para perder el amor mismo.
            </p>
            <p className="font-cardo text-crema/75 text-base leading-relaxed">
              La obra es una meditación clínica y cultural sobre cómo opera la incertidumbre
              en los vínculos amorosos. Se aparta de los marcos de la autoayuda para analizar
              el amor como un fenómeno psicológico complejo, donde el deseo, la duda y la
              fantasía se intersectan con la necesidad humana de control. La pregunta central
              es qué sucede cuando el amor deja de sentirse y empieza a pensarse en exceso.
            </p>
            <p className="font-cardo text-crema/75 text-base leading-relaxed">
              César Escalante, con más de veinticinco años de práctica clínica, explora cómo
              la psique construye significados y se defiende de lo desconocido. Este libro
              surgió de preguntas recurrentes en su trabajo terapéutico: las formas en que el
              amor romántico se transforma de experiencia directa en vigilancia y certeza
              forzada. Más que ofrecer respuestas tranquilizadoras, examina el amor como
              fundamentalmente marcado por la tensión entre el sentir y el pensar.
            </p>
            <a
              href="https://elamoresundelirio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-8 py-3 bg-dorado text-crema font-quicksand font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-dorado/80 transition-colors duration-200"
            >
              Ver sitio web
            </a>
          </div>
        </div>
      </section>

      {/* ── MIS EMPRESAS ── */}
      <section className="bg-crema py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-quicksand text-verde text-xs tracking-[0.3em] uppercase">Red de organizaciones</span>
            <h2 className="font-cardo text-marino text-4xl lg:text-5xl mt-2">Mis Empresas</h2>
            <div className="w-16 h-px bg-dorado mx-auto mt-4" />
          </div>
          <div className="flex flex-wrap justify-center gap-14">
            {empresas.map((val, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-5 max-w-[240px] text-center"
              >
                <Image
                  src={val.logo}
                  width={240}
                  height={160}
                  alt={`Logo ${val.nombre}`}
                  className="h-28 w-auto object-contain"
                  style={val.color ? { filter: "invert(48%) sepia(14%) saturate(830%) hue-rotate(36deg) brightness(88%) contrast(85%)" } : {}}
                />
                <p className="font-cardo text-marino text-base font-bold">{val.nombre}</p>
                {val.texto && (
                  <p className="font-quicksand text-marino/65 text-xs leading-relaxed tracking-wide">
                    {val.texto}
                  </p>
                )}
                <a
                  href={val.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-1.5 border border-dorado text-dorado font-quicksand text-xs tracking-widest uppercase rounded-full hover:bg-dorado hover:text-crema transition-all duration-200"
                >
                  Visitar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASOCIADO A ── */}
      <section className="bg-verde py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-quicksand text-crema/70 text-xs tracking-[0.3em] uppercase">Membresías internacionales</span>
            <h2 className="font-cardo text-crema text-4xl lg:text-5xl mt-2">Asociado a</h2>
            <div className="w-16 h-px bg-dorado mx-auto mt-4" />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {asociaciones.map((val, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-4 max-w-[200px] text-center"
              >
                <Image
                  src={val.img}
                  width={240}
                  height={160}
                  alt={val.alt}
                  className="h-28 w-auto object-contain"
                />
                <p className="font-quicksand text-crema/85 text-xs leading-relaxed tracking-wide">
                  {val.nombre}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
