export const dynamic = "force-static";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import articles from "../../../public/data/dataArticulos.json";

type Article = {
  slug: string;
  titulo: string;
  subtitulo: string;
  categoria: string;
  imagen: string;
  contenido: string[];
};

export function generateStaticParams() {
  return (articles as Article[]).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = (articles as Article[]).find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.titulo,
    description: article.subtitulo,
    openGraph: {
      title: `${article.titulo} — César Escalante Sifuentes`,
      description: article.subtitulo,
      url: `https://cesarescalantesifuentes.com/articulos/${article.slug}`,
      images: [{ url: article.imagen }],
    },
    alternates: {
      canonical: `https://cesarescalantesifuentes.com/articulos/${article.slug}`,
    },
  };
}

export default async function ArticuloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = (articles as Article[]).find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-crema flex items-center justify-center pt-24">
        <p className="font-cardo text-marino text-2xl">Artículo no encontrado.</p>
      </main>
    );
  }

  // First paragraph is the intro, rest is body
  const [intro, ...body] = article.contenido;

  return (
    <main className="min-h-screen bg-crema pt-24 pb-20">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 mb-10">
        <Link
          href="/articulos"
          className="font-quicksand text-dorado text-xs tracking-widest uppercase hover:underline"
        >
          ← Artículos
        </Link>
        <p className="font-quicksand text-dorado text-xs tracking-[0.3em] uppercase mt-6 mb-3">
          {article.categoria}
        </p>
        <h1 className="font-cardo text-marino text-4xl lg:text-5xl leading-tight mb-3">
          {article.titulo}
        </h1>
        <p className="font-cardo text-marino/60 text-xl italic leading-snug mb-5">
          {article.subtitulo}
        </p>
        <div className="flex items-center gap-3">
          <div className="w-16 h-px bg-dorado" />
          <span className="font-quicksand text-marino/50 text-xs tracking-wide uppercase">
            César Escalante Sifuentes
          </span>
        </div>
      </div>

      {/* Cover image */}
      <div className="max-w-3xl mx-auto px-6 mb-12">
        <div className="relative w-full h-64 lg:h-80 overflow-hidden rounded-sm">
          <Image
            src={article.imagen}
            alt={article.titulo}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
          <div className="absolute inset-0 bg-marino/20" />
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 flex flex-col gap-5">
        {/* Intro destacado */}
        <p className="font-cardo text-marino text-lg lg:text-xl leading-relaxed border-l-4 border-dorado pl-6">
          {intro}
        </p>

        {/* Body */}
        {body.map((para, i) => {
          // Section headings: short paragraphs that look like titles
          const isHeading = para.length < 120 && !para.endsWith(".") && !para.startsWith("→") && !para.startsWith("👨") && !para.startsWith("🏫") && !para.startsWith("🧑") && !para.startsWith("📱");
          const isBullet = para.startsWith("→") || para.startsWith("👨") || para.startsWith("🏫") || para.startsWith("🧑") || para.startsWith("📱");

          if (isHeading && para.length < 80) {
            return (
              <h2 key={i} className="font-cardo text-marino text-2xl lg:text-3xl mt-4 leading-snug">
                {para}
              </h2>
            );
          }
          if (isBullet) {
            return (
              <p key={i} className="font-cardo text-marino/80 text-base leading-relaxed pl-4 border-l-2 border-dorado/40">
                {para}
              </p>
            );
          }
          return (
            <p key={i} className="font-cardo text-marino/80 text-base leading-relaxed">
              {para}
            </p>
          );
        })}

        {/* Firma */}
        <div className="mt-10 pt-8 border-t border-dorado/20 flex flex-col gap-1">
          <p className="font-cardo text-marino text-base font-bold">César Escalante Sifuentes</p>
          <p className="font-quicksand text-marino/50 text-xs tracking-wide">
            Psicólogo clínico · Psicoterapeuta · Neuropsicólogo
          </p>
        </div>

        <div className="mt-4">
          <Link
            href="/articulos"
            className="inline-block px-6 py-2 border border-dorado text-dorado font-quicksand text-xs tracking-widest uppercase rounded-full hover:bg-dorado hover:text-crema transition-all duration-200"
          >
            ← Volver a artículos
          </Link>
        </div>
      </article>
    </main>
  );
}
