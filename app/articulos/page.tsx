export const dynamic = "force-static";

import type { Metadata } from "next";

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

import Footer from "@/components/Footer";
import data from "@/public/data/dataArticulos.json";
import Image from "next/image";

export default function Articulos() {
  return (
    <div className="bg-crema min-h-dvh flex flex-col">
      <div className="flex-auto pt-24">

        {/* Encabezado */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <span className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase">
            Publicaciones
          </span>
          <h1 className="font-cardo text-marino text-5xl lg:text-6xl mt-3 mb-5">
            Artículos
          </h1>
          <div className="w-16 h-px bg-dorado" />
        </div>

        {/* Grid */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((val, i) => (
              <div
                key={i}
                className="bg-white border border-marino/10 flex flex-col justify-between rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div>
                  <Image
                    src={val.img}
                    alt={val.title}
                    width={500}
                    height={300}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h2 className="font-cardo text-marino text-base leading-snug">
                      {val.title}
                    </h2>
                    <p className="font-cardo text-marino/60 text-sm line-clamp-3 leading-relaxed">
                      {val.introduction}
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <a
                    href={val.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 border border-dorado text-dorado font-quicksand text-xs tracking-widest uppercase rounded-full hover:bg-dorado hover:text-crema transition-all duration-200"
                  >
                    Leer Artículo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
