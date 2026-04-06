export const dynamic = "force-static";

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Libros",
  description:
    "«El amor es un delirio» de César Escalante Sifuentes: un ensayo sobre cómo la mente fabrica certezas en nombre del amor. Disponible en Amazon y librerías.",
  keywords: [
    "El amor es un delirio",
    "César Escalante libro",
    "ensayo psicología amor",
    "libro psicología Peru",
    "incertidumbre amor",
  ],
  openGraph: {
    title: "Libros — César Escalante Sifuentes",
    description:
      "«El amor es un delirio»: un ensayo clínico sobre cómo la mente, en nombre del amor, fabrica certezas para no tolerar la duda.",
    url: "https://cesarescalantesifuentes.com/libros",
    images: [{ url: "/assets/EL-AMOR-ES-UN-DELIRIO-MOCKUP-3-1-1.webp", alt: "El amor es un delirio" }],
  },
  alternates: { canonical: "https://cesarescalantesifuentes.com/libros" },
};

const AMAZON_URL =
  "https://www.amazon.com/-/es/El-amor-delirio-cultural-incertidumbre/dp/B0GSVWKD5X/ref=sr_1_1?crid=3520Q9F2I6K3U&dib=eyJ2IjoiMSJ9.pvD-9OP9CcFTJW-nfKdmOkA0ikWjSnqbCLRSz0Pm9-3vgGeE30kqKnAif5T2ZX_uI5kkkqMhwonpqVO1Lk78d29sNyZezMxepkOodNJCsW7jN7H11q6TztZVqitosYMxwbIKNmx93rYT4NdQud6SkEyOHcG5RA-PUQDcZxRtzUgh-PShElPCdO0bn6J78YK34Ury8vp4wyMVYIs1QAIdeB-Mys6uFhx_0IByyeN1Aoc.x4iFMYH7FUKHI4K9YIUXazdmg7Qlis7A2fjaS8-w9BI&dib_tag=se&keywords=el+amor+es+un+delirio&qid=1775497501&sprefix=el+amor+es+un+delirio%2Caps%2C587&sr=8-1";

const LANZAMIENTO_URL =
  "https://www.joinnus.com/events/art-culture/lanzamiento-de-libro-el-amor-es-un-delirio-74760";

const recomendados = [
  {
    titulo: "La metamorfosis",
    autor: "Franz Kafka",
    img: "/assets/la_metamorfosis.jpg",
  },
  {
    titulo: "La náusea",
    autor: "Jean-Paul Sartre",
    img: "/assets/la_nausea.jpg",
  },
  {
    titulo: "El mito de Sísifo",
    autor: "Albert Camus",
    img: "/assets/el_mito_de_sisifo.jpg",
  },
  {
    titulo: "La sociedad del cansancio",
    autor: "Byung-Chul Han",
    img: "/assets/la_sociedad_del_cansancio.png",
  },
];

const fotos = [
  { src: "/assets/eaeud_1.jpeg", alt: "Lanzamiento El amor es un delirio — foto 1" },
  { src: "/assets/eaeud_2.jpeg", alt: "Lanzamiento El amor es un delirio — foto 2" },
  { src: "/assets/eaeud_3.jpeg", alt: "Lanzamiento El amor es un delirio — foto 3" },
  { src: "/assets/eaeud_4.jpeg", alt: "Lanzamiento El amor es un delirio — foto 4" },
];

export default function LibrosPage() {
  return (
    <main className="min-h-screen bg-crema">

      {/* ── HERO: LIBRO ── */}
      <section className="pt-28 pb-24 px-6 bg-crema">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-center">

          {/* Mockup */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/assets/EL-AMOR-ES-UN-DELIRIO-MOCKUP-3-1-1.webp"
              width={520}
              height={520}
              alt="El amor es un delirio — César Escalante"
              className="w-full max-w-sm lg:max-w-md h-auto drop-shadow-2xl"
            />
          </div>

          {/* Info */}
          <div className="lg:w-1/2 flex flex-col gap-5">
            <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
              Disponible ahora
            </span>
            <Image
              src="/assets/titulo_elamoresundelirio.webp"
              width={460}
              height={120}
              alt="El amor es un delirio"
              className="w-full max-w-xs h-auto"
            />
            <div className="w-16 h-px bg-dorado" />
            <p className="font-cardo text-marino/75 text-base leading-relaxed">
              Un ensayo sobre cómo la mente, en nombre del amor, fabrica certezas para no
              tolerar la duda.
            </p>
            <p className="font-cardo text-marino/75 text-base leading-relaxed">
              Este libro investiga el momento en que el afecto se convierte en interpretación,
              cuando los gestos se vuelven evidencia y los pensamientos se solidifican en
              verdades incuestionables. El autor sugiere que el exceso de pensamiento se
              convierte en un mecanismo sofisticado para perder el amor mismo.
            </p>
            <blockquote className="border-l-4 border-dorado pl-5 font-cardo text-marino italic text-base leading-relaxed">
              «No siempre sufrimos por lo que pasó, sino por lo que nuestra mente concluyó
              con muy pocas pruebas.»
            </blockquote>
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href={LANZAMIENTO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 border border-marino text-marino font-quicksand font-semibold text-xs tracking-widest uppercase rounded-full hover:bg-marino hover:text-crema transition-all duration-200"
              >
                Ver lanzamiento
              </a>
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-dorado text-crema font-quicksand font-semibold text-xs tracking-widest uppercase rounded-full hover:bg-dorado/80 transition-all duration-200"
              >
                Cómpralo hoy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FRASE CENTRAL ── */}
      <section className="bg-marino py-24 px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
          <h2 className="font-cardo text-crema text-3xl lg:text-4xl leading-snug">
            Este no es un libro sobre cómo amar mejor
          </h2>
          <div className="w-16 h-px bg-dorado" />
          <p className="font-cardo text-crema/75 text-lg leading-relaxed">
            Es un ensayo sobre lo que ocurre cuando el amor deja de sentirse y empieza a
            pensarse en exceso.
          </p>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-dorado text-crema font-quicksand font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-dorado/80 transition-all duration-200"
          >
            Cómpralo hoy
          </a>
        </div>
      </section>

      {/* ── LANZAMIENTO OFICIAL ── */}
      <section className="bg-crema py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
              Evento
            </span>
            <h2 className="font-cardo text-marino text-4xl lg:text-5xl mt-3 mb-4">
              Lanzamiento oficial
            </h2>
            <div className="w-16 h-px bg-dorado mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fotos.map((foto, i) => (
              <div key={i} className="relative aspect-4/3 overflow-hidden rounded-sm">
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <a
              href={LANZAMIENTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-dorado text-dorado font-quicksand font-semibold text-xs tracking-widest uppercase rounded-full hover:bg-dorado hover:text-crema transition-all duration-200"
            >
              Ver lanzamiento
            </a>
          </div>
        </div>
      </section>

      {/* ── LIBROS RECOMENDADOS ── */}
      <section className="bg-crema py-24 px-6 border-t border-dorado/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
              Lecturas
            </span>
            <h2 className="font-cardo text-marino text-4xl lg:text-5xl mt-3 mb-4">
              Libros recomendados
            </h2>
            <div className="w-16 h-px bg-dorado mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {recomendados.map((libro, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="relative w-full aspect-2/3 overflow-hidden rounded-sm shadow-lg">
                  <Image
                    src={libro.img}
                    alt={libro.titulo}
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <div className="text-center">
                  <p className="font-cardo text-marino text-base leading-tight">{libro.titulo}</p>
                  <p className="font-quicksand text-dorado text-xs tracking-wide mt-1">{libro.autor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
