export const dynamic = "force-static";

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cursos — Más allá del Diagnóstico",
  description:
    "Programa de Formación Especializada Intensiva «Más allá del Diagnóstico: Neurociencias en el Aula». 4 módulos, 18 horas académicas. Junio–julio 2026, virtual con cierre presencial. Director: Mag. César Escalante Sifuentes.",
  keywords: [
    "neurociencias en el aula",
    "más allá del diagnóstico",
    "formación especializada docentes Lima",
    "TDAH TEA dislexia aula",
    "neurodivergencia docentes Peru",
    "César Escalante curso neuropsicología",
    "formación inclusiva SJM",
  ],
  openGraph: {
    title: "Más allá del Diagnóstico: Neurociencias en el Aula — César Escalante",
    description:
      "Programa de formación especializada para docentes y familias. 4 módulos, 18 horas académicas, junio–julio 2026. Virtual + cierre presencial en Miraflores.",
    url: "https://cesarescalantesifuentes.com/cursos",
  },
  alternates: { canonical: "https://cesarescalantesifuentes.com/cursos" },
};

const modulos = [
  {
    numero: "I",
    titulo: "Neurociencia, Nutrición y Aprendizaje",
    subtitulo: "El cerebro que no recibe lo que necesita",
    clases: [
      {
        n: "Clase 1",
        fecha: "Mar 23 de junio · 7:30 – 9:30 p.m.",
        tema: "Nutrición y neurodesarrollo",
        descripcion:
          "Cómo la deficiencia de hierro afecta la atención, la memoria y la conducta. Diferencia entre anemia crónica y TDAH en el aula. Guía de observación conductual: 8 señales clave.",
      },
      {
        n: "Clase 2",
        fecha: "Jue 25 de junio · 7:30 – 9:30 p.m.",
        tema: "Estrategias sin SAE, sin psicólogo, con apoyo familiar limitado",
        descripcion:
          "5 ajustes de organización de aula con cero presupuesto. Protocolo de agrupamiento funcional para aulas de 35+ alumnos. Actividades de 3 minutos para reactivar la atención sostenida.",
      },
    ],
  },
  {
    numero: "II",
    titulo: "Detección Funcional en el Aula",
    subtitulo: "Más allá del diagnóstico que no llega",
    clases: [
      {
        n: "Clase 3",
        fecha: "Mar 30 de junio · 7:30 – 9:30 p.m.",
        tema: "Observación e identificación en el aula",
        descripcion:
          "Perfil observable de TDAH, TEA, dislexia y altas capacidades. Por qué el DSM-5 no es suficiente en territorios como Pamplona Alta. Ficha de observación de 15 ítems aplicable en una semana.",
      },
      {
        n: "Clase 4",
        fecha: "Jue 02 de julio · 7:30 – 9:30 p.m.",
        tema: "Documentación y comunicación con familias",
        descripcion:
          "Cómo redactar un informe de observación que un neurólogo pueda usar. Qué lenguaje usar y qué evitar con padres. Plantilla de derivación y seguimiento del caso.",
      },
    ],
  },
  {
    numero: "III",
    titulo: "Intervención Pedagógica Diferenciada",
    subtitulo: "Sin presupuesto y sin apoyo especializado",
    clases: [
      {
        n: "Clase 5",
        fecha: "Mar 07 de julio · 7:30 – 9:30 p.m.",
        tema: "Adaptaciones curriculares accesibles",
        descripcion:
          "6 modificaciones de evaluación aplicables de inmediato: tiempo extendido, evaluación oral, reducción de ítems, apoyo visual y más. Cómo adaptar una sesión de 90 min para neurotípicos, TDAH y dislexia simultáneamente.",
      },
      {
        n: "Clase 6",
        fecha: "Jue 09 de julio · 7:30 – 9:30 p.m.",
        tema: "Perfiles invisibles, bienestar docente y plan de continuidad",
        descripcion:
          "TDAH inatento, autismo enmascarado, dislexia compensada y altas capacidades con bajo rendimiento. Construcción de red de apoyo entre pares. Kit docente completo en formato digital.",
      },
    ],
  },
  {
    numero: "IV",
    titulo: "El recurso más limitado eres tú",
    subtitulo: "Neurociencia del docente en contextos de sobrecarga",
    clases: [
      {
        n: "Clase Magistral de Cierre",
        fecha: "Sáb 11 de julio · 09:00 – 10:30 a.m. / 11:00 a.m. – 12:30 p.m.",
        tema: "Sesión presencial en Miraflores",
        descripcion:
          "Protocolo de implementación escalonada en 8 semanas. Técnicas de recuperación cognitiva entre bloques de clase. Árbol de decisión docente: guía de referencia rápida para el aula. ¿Y si el neurodivergente eres tú?",
      },
    ],
  },
];

const paquetes = [
  {
    nombre: "Seminario Individual",
    precio: "S/ 50",
    descripcion: "1 módulo",
    incluye: ["2 sesiones virtuales de 2 horas"],
    destacado: false,
  },
  {
    nombre: "Virtual + Certificado",
    precio: "S/ 160",
    descripcion: "Todo lo anterior",
    incluye: [
      "3 módulos virtuales (6 sesiones)",
      "Materiales digitales",
      "Certificado impreso con respaldo internacional",
      "Posibilidad de acceder a pasantía",
    ],
    destacado: false,
  },
  {
    nombre: "Paquete Completo",
    precio: "S/ 190",
    descripcion: "Mejor valor",
    incluye: [
      "3 módulos virtuales (6 sesiones)",
      "Clase magistral presencial de cierre",
      "Networking profesional",
      "Certificado impreso con respaldo internacional",
      "Posibilidad de acceder a pasantía",
    ],
    destacado: true,
  },
];

const publico = [
  {
    grupo: "Docentes",
    detalle:
      "Maestros de inicial, primaria y secundaria de colegios nacionales (UGEL 01) y privados que enfrentan aulas con estudiantes neurodivergentes sin formación especializada.",
  },
  {
    grupo: "Padres y familias",
    detalle:
      "Familias que han recibido un diagnóstico para su hijo o sospechan dificultades, y necesitan comprender qué está sucediendo desde la ciencia.",
  },
  {
    grupo: "Profesionales",
    detalle:
      "Psicólogos, terapeutas y profesionales de la salud mental y la educación que buscan actualizar su práctica con evidencia neurocientífica aplicada.",
  },
];

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-crema">

      {/* ── HERO ── */}
      <section className="pt-28 pb-20 px-6 bg-crema">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-center">

          <div className="lg:w-1/2 flex flex-col gap-6">
            <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
              Formación Especializada Intensiva
            </span>
            <h1 className="font-cardo text-marino text-4xl lg:text-5xl leading-tight">
              Más allá del Diagnóstico
            </h1>
            <p className="font-cardo text-marino/60 text-xl lg:text-2xl italic leading-snug">
              Neurociencias en el Aula
            </p>
            <div className="w-16 h-px bg-dorado" />
            <p className="font-cardo text-marino/75 text-base leading-relaxed">
              Programa con respaldo académico internacional y convenio municipal,
              promovido por el Departamento de Proyección Social de Ilumina (Grupo EADES)
              en convenio con la Municipalidad de San Juan de Miraflores.
            </p>

            <div className="flex flex-wrap gap-3">
              {["4 módulos", "18 horas académicas", "Virtual + presencial", "Junio – Julio 2026"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 border border-dorado text-dorado font-quicksand text-xs tracking-widest uppercase rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
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
                className="px-8 py-3 border border-marino/30 text-marino font-quicksand font-semibold text-sm tracking-widest uppercase rounded-full hover:border-marino/60 transition-colors duration-200"
              >
                Descargar brochure
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative aspect-9/13 max-h-[600px] overflow-hidden rounded-sm">
              <Image
                src="/assets/fah.jpg"
                alt="Más allá del Diagnóstico — Formación Especializada Intensiva"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-marino/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PÚBLICO OBJETIVO ── */}
      <section className="bg-marino py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
              ¿Para quién es?
            </span>
            <h2 className="font-cardo text-crema text-3xl lg:text-4xl mt-3">
              Público objetivo
            </h2>
            <div className="w-16 h-px bg-dorado mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publico.map((p, i) => (
              <div key={i} className="border-t border-dorado/40 pt-6">
                <p className="font-quicksand text-dorado text-xs tracking-[0.25em] uppercase mb-3">
                  {p.grupo}
                </p>
                <p className="font-cardo text-crema/80 text-base leading-relaxed">
                  {p.detalle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÓDULOS ── */}
      <section className="bg-crema py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
              Contenido
            </span>
            <h2 className="font-cardo text-marino text-3xl lg:text-4xl mt-3">
              Programa por módulos
            </h2>
            <div className="w-16 h-px bg-dorado mt-4" />
          </div>

          <div className="flex flex-col gap-12">
            {modulos.map((mod, i) => (
              <div key={i} className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                <div className="lg:w-1/4 flex-shrink-0">
                  <span className="font-quicksand text-dorado text-xs tracking-[0.25em] uppercase">
                    Módulo {mod.numero}
                  </span>
                  <h3 className="font-cardo text-marino text-xl leading-snug mt-2">
                    {mod.titulo}
                  </h3>
                  <p className="font-cardo text-marino/50 text-sm italic mt-1">
                    {mod.subtitulo}
                  </p>
                </div>

                <div className="lg:w-3/4 flex flex-col gap-6">
                  {mod.clases.map((cl, j) => (
                    <div key={j} className="border-l-2 border-dorado/30 pl-6">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-2">
                        <span className="font-quicksand text-dorado text-xs tracking-widest uppercase">
                          {cl.n}
                        </span>
                        <span className="font-quicksand text-marino/40 text-xs">
                          {cl.fecha}
                        </span>
                      </div>
                      <p className="font-cardo text-marino text-base font-semibold mb-1">
                        {cl.tema}
                      </p>
                      <p className="font-cardo text-marino/65 text-sm leading-relaxed">
                        {cl.descripcion}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALENDARIO ── */}
      <section className="bg-marino/5 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
              Fechas
            </span>
            <h2 className="font-cardo text-marino text-3xl lg:text-4xl mt-3">
              Calendario
            </h2>
            <div className="w-16 h-px bg-dorado mt-4" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-dorado/30">
                  <th className="font-quicksand text-dorado text-xs tracking-widest uppercase pb-4 pr-6">Módulo</th>
                  <th className="font-quicksand text-dorado text-xs tracking-widest uppercase pb-4 pr-6">Clase</th>
                  <th className="font-quicksand text-dorado text-xs tracking-widest uppercase pb-4 pr-6">Fecha</th>
                  <th className="font-quicksand text-dorado text-xs tracking-widest uppercase pb-4 pr-6">Horario</th>
                  <th className="font-quicksand text-dorado text-xs tracking-widest uppercase pb-4">Modalidad</th>
                </tr>
              </thead>
              <tbody className="font-cardo text-marino/80 text-sm">
                {[
                  ["I", "Clase 1", "Mar 23 de junio", "7:30 – 9:30 p.m.", "Virtual"],
                  ["I", "Clase 2", "Jue 25 de junio", "7:30 – 9:30 p.m.", "Virtual"],
                  ["II", "Clase 3", "Mar 30 de junio", "7:30 – 9:30 p.m.", "Virtual"],
                  ["II", "Clase 4", "Jue 02 de julio", "7:30 – 9:30 p.m.", "Virtual"],
                  ["III", "Clase 5", "Mar 07 de julio", "7:30 – 9:30 p.m.", "Virtual"],
                  ["III", "Clase 6", "Jue 09 de julio", "7:30 – 9:30 p.m.", "Virtual"],
                  ["IV", "Magistral de cierre", "Sáb 11 de julio", "09:00 – 12:30 p.m.", "Presencial"],
                ].map(([mod, clase, fecha, hora, modalidad], i) => (
                  <tr key={i} className="border-b border-marino/10 hover:bg-marino/5 transition-colors">
                    <td className="py-4 pr-6 font-quicksand text-dorado text-xs">{mod}</td>
                    <td className="py-4 pr-6">{clase}</td>
                    <td className="py-4 pr-6">{fecha}</td>
                    <td className="py-4 pr-6">{hora}</td>
                    <td className={`py-4 font-quicksand text-xs ${modalidad === "Presencial" ? "text-dorado font-semibold" : "text-marino/50"}`}>
                      {modalidad}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-quicksand text-marino/40 text-xs mt-6">
            Total: 18 horas académicas · 16 horas virtuales + 2 horas clase magistral presencial
          </p>
        </div>
      </section>

      {/* ── PAQUETES ── */}
      <section className="bg-marino py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
              Inversión
            </span>
            <h2 className="font-cardo text-crema text-3xl lg:text-4xl mt-3">
              Paquetes disponibles
            </h2>
            <div className="w-16 h-px bg-dorado mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paquetes.map((p, i) => (
              <div
                key={i}
                className={`flex flex-col gap-4 p-6 rounded-sm border ${
                  p.destacado
                    ? "border-dorado bg-dorado/10"
                    : "border-crema/10 bg-crema/5"
                }`}
              >
                {p.destacado && (
                  <span className="font-quicksand text-dorado text-xs tracking-widest uppercase">
                    Mejor valor
                  </span>
                )}
                <div>
                  <p className="font-cardo text-crema text-lg leading-snug">{p.nombre}</p>
                  <p className="font-cardo text-dorado text-3xl mt-2">{p.precio}</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {p.incluye.map((item, j) => (
                    <li key={j} className="font-quicksand text-crema/60 text-xs leading-relaxed flex gap-2">
                      <span className="text-dorado flex-shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <a
                    href="https://api.whatsapp.com/send?phone=51966968791&text=Hola,%20quisiera%20inscribirme%20al%20programa%20M%C3%A1s%20all%C3%A1%20del%20diagn%C3%B3stico%3A%20Neurociencias%20en%20el%20Aula"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center px-4 py-2.5 font-quicksand font-semibold text-xs tracking-widest uppercase rounded-full transition-colors duration-200 ${
                      p.destacado
                        ? "bg-dorado text-crema hover:bg-dorado/80"
                        : "border border-crema/30 text-crema/70 hover:border-crema/60 hover:text-crema"
                    }`}
                  >
                    Inscribirme
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="font-quicksand text-crema/30 text-xs text-center mt-8">
            Certificación con respaldo del IRG (Barcelona), IAOTH (Reino Unido) y EAAP (Europa)
          </p>
        </div>
      </section>

      {/* ── EQUIPO ACADÉMICO ── */}
      <section className="bg-crema py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
              Quiénes lo imparten
            </span>
            <h2 className="font-cardo text-marino text-3xl lg:text-4xl mt-3">
              Equipo académico
            </h2>
            <div className="w-16 h-px bg-dorado mt-4" />
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/2 border-l-4 border-dorado pl-8 flex flex-col gap-3">
              <p className="font-quicksand text-dorado text-xs tracking-[0.25em] uppercase">
                Director Académico
              </p>
              <h3 className="font-cardo text-marino text-2xl">
                Mag. César Escalante Sifuentes
              </h3>
              <p className="font-quicksand text-marino/40 text-xs">CPSP N° 29611</p>
              <p className="font-cardo text-marino/70 text-base leading-relaxed">
                Neuropsicólogo clínico y psicoterapeuta con más de 25 años de experiencia en salud
                mental y 16 años de ejercicio docente. Magíster en Neuropsicología en el ámbito
                educativo por la Universidad Rey Juan Carlos (España). Formación complementaria en la
                Université Sorbonne Nouvelle (Francia) y la Asociación Psicoanalítica de Buenos Aires.
              </p>
              <p className="font-cardo text-marino/60 text-sm leading-relaxed">
                Fundador y Director General del Grupo EADES. Su trayectoria integra la mirada clínica
                con el conocimiento directo del aula, incluyendo su rol como psicólogo del Departamento
                de Bienestar Psicopedagógico de la Universidad del Pacífico (2019–2020).
              </p>
            </div>

            <div className="lg:w-1/2 border-l-4 border-dorado/30 pl-8 flex flex-col gap-3">
              <p className="font-quicksand text-dorado text-xs tracking-[0.25em] uppercase">
                Co-Facilitador
              </p>
              <h3 className="font-cardo text-marino text-2xl">
                Lic. Kevin Cubas Verástegui
              </h3>
              <p className="font-quicksand text-marino/40 text-xs">CPSP N° 66725</p>
              <p className="font-cardo text-marino/70 text-base leading-relaxed">
                Psicólogo clínico especializado en evaluación psicológica y diferenciación de cuadros
                psicopatológicos en población infantil y adolescente. Experiencia directa en
                acompañamiento terapéutico de niños y adolescentes con TEA y TDAH mediante terapia
                cognitivo-conductual.
              </p>
              <p className="font-cardo text-marino/60 text-sm leading-relaxed">
                Gestor de proyectos de capacitación y evaluación psicológica. Combina la práctica
                clínica con la formación de profesionales de la salud y la educación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PASANTÍA ── */}
      <section className="bg-marino/5 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-1/2">
              <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
                Beneficio exclusivo
              </span>
              <h2 className="font-cardo text-marino text-3xl mt-3 leading-snug">
                Pasantía de Observación Neuroinformada
              </h2>
              <div className="w-16 h-px bg-dorado mt-4 mb-6" />
              <p className="font-cardo text-marino/70 text-base leading-relaxed">
                Los participantes con mejor desempeño podrán acceder a una experiencia de inmersión
                en el centro Pseres (Miraflores), observando sesiones reales de evaluación e
                intervención neuropsicológica con niños y adolescentes.
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-4">
              {[
                ["Duración", "3 jornadas de 3 horas (9 horas total) · Julio 2026"],
                ["Sede", "Centro Pseres, Miraflores"],
                ["Cupos", "Máximo 4 participantes · Gratuito para seleccionados"],
                ["Certificación", "Constancia de pasantía con aval de Pseres y respaldo internacional"],
              ].map(([label, value], i) => (
                <div key={i} className="flex flex-col gap-1">
                  <p className="font-quicksand text-dorado text-xs tracking-[0.25em] uppercase">{label}</p>
                  <p className="font-cardo text-marino/75 text-sm leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-marino py-24 px-6">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
            Inscripciones abiertas
          </span>
          <h2 className="font-cardo text-crema text-3xl lg:text-4xl leading-snug italic">
            «Más allá del Diagnóstico: Neurociencias en el Aula»
          </h2>
          <p className="font-cardo text-crema/60 text-base leading-relaxed">
            Junio – Julio 2026 · Virtual con cierre presencial · Desde S/ 50
          </p>
          <div className="w-16 h-px bg-dorado" />
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=51966968791&text=Hola,%20quisiera%20inscribirme%20al%20programa%20M%C3%A1s%20all%C3%A1%20del%20diagn%C3%B3stico%3A%20Neurociencias%20en%20el%20Aula"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3.5 bg-dorado text-crema font-quicksand font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-dorado/80 transition-colors duration-200"
            >
              Inscribirme ahora
            </a>
            <a
              href="/pdf/curso Más allá del diagnóstico.pdf"
              download
              className="px-10 py-3.5 border border-crema/30 text-crema font-quicksand font-semibold text-sm tracking-widest uppercase rounded-full hover:border-crema/60 transition-colors duration-200"
            >
              Descargar brochure
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
