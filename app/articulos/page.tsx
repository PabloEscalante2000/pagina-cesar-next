export const dynamic = "force-static";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import articles from "../../public/data/dataArticulos.json";

export const metadata: Metadata = {
  title: "Artículos",
  description:
    "Artículos y publicaciones de César Escalante Sifuentes sobre psicología clínica, neuropsicología, psicoterapia y salud mental.",
  keywords: [
    "artículos psicología",
    "publicaciones salud mental",
    "César Escalante artículos",
    "psicoterapia blog",
  ],
  openGraph: {
    title: "Artículos — César Escalante Sifuentes",
    description:
      "Publicaciones de César Escalante sobre psicología clínica, neuropsicología y salud mental.",
    url: "https://cesarescalantesifuentes.com/articulos",
  },
  alternates: { canonical: "https://cesarescalantesifuentes.com/articulos" },
};

type Article = {
  slug: string;
  titulo: string;
  subtitulo: string;
  categoria: string;
  imagen: string;
  contenido: string[];
};

export default function Articulos() {
  return (
    <main className="bg-crema min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Encabezado */}
        <div className="mb-16">
          <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
            Publicaciones
          </span>
          <h1 className="font-cardo text-marino text-5xl lg:text-6xl mt-3 mb-5">
            Artículos
          </h1>
          <div className="w-16 h-px bg-dorado" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {(articles as Article[]).map((article, i) => (
            <Link
              key={i}
              href={`/articulos/${article.slug}`}
              className="group flex flex-col bg-white rounded-sm shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              {/* Imagen */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={article.imagen}
                  alt={article.titulo}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-marino/20" />
                <span className="absolute top-4 left-4 bg-marino/80 text-crema font-quicksand text-xs tracking-widest uppercase px-3 py-1 rounded-full">
                  {article.categoria.split("·")[0].trim()}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h2 className="font-cardo text-marino text-xl leading-snug group-hover:text-dorado transition-colors duration-200">
                  {article.titulo}
                </h2>
                <p className="font-cardo text-marino/60 text-sm italic leading-relaxed line-clamp-2">
                  {article.subtitulo}
                </p>
                <p className="font-cardo text-marino/70 text-sm leading-relaxed line-clamp-3 flex-1">
                  {article.contenido[0]}
                </p>
                <span className="font-quicksand text-dorado text-xs tracking-widest uppercase mt-2 group-hover:underline">
                  Leer artículo →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
