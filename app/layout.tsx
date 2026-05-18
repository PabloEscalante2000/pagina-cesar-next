import type { Metadata } from "next";
import Script from "next/script";
import I18nProvider from "./I18nProvider";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhIcon from "@/components/WhIcon";

const BASE_URL = "https://cesarescalantesifuentes.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "César Escalante Sifuentes — Psicólogo Clínico & Neuropsicólogo",
    template: "%s | César Escalante Sifuentes",
  },
  description:
    "César Escalante Sifuentes, psicólogo clínico, psicoterapeuta y neuropsicólogo con más de 25 años de experiencia en salud mental y educación. Fundador de Grupo EADES.",
  keywords: [
    "César Escalante Sifuentes",
    "psicólogo clínico Lima",
    "psicoterapeuta Peru",
    "neuropsicólogo",
    "salud mental",
    "psicoterapia psicoanalítica",
    "EADES",
    "TMTD",
    "Teoría de la Mente Triádica Dialéctica",
    "El amor es un delirio",
  ],
  authors: [{ name: "César Escalante Sifuentes", url: BASE_URL }],
  creator: "César Escalante Sifuentes",
  icons: {
    icon: "/assets/web_icono.png",
    apple: "/assets/web_icono.png",
    shortcut: "/assets/web_icono.png",
  },
  openGraph: {
    title: "César Escalante Sifuentes — Psicólogo Clínico & Neuropsicólogo",
    description:
      "Psicólogo clínico, psicoterapeuta y neuropsicólogo con más de 25 años de experiencia. Fundador de Grupo EADES, autor de «El amor es un delirio».",
    url: BASE_URL,
    siteName: "César Escalante Sifuentes",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/assets/web_logo.png",
        width: 1200,
        height: 630,
        alt: "César Escalante Sifuentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "César Escalante Sifuentes — Psicólogo Clínico & Neuropsicólogo",
    description:
      "Psicólogo clínico, psicoterapeuta y neuropsicólogo con más de 25 años de experiencia.",
    images: ["/assets/web_logo.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "César Escalante Sifuentes",
              "url": "https://cesarescalantesifuentes.com/",
              "jobTitle": ["Psicólogo Clínico", "Psicoterapeuta", "Neuropsicólogo"],
              "description": "Psicólogo clínico, psicoterapeuta psicoanalítico y neuropsicólogo. Magíster en Neuropsicología (URJC). Fundador de Grupo EADES. Autor de la Teoría de la Mente Triádica Dialéctica.",
              "telephone": "+51930509438",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "General Silva 570",
                "addressLocality": "Miraflores",
                "addressCountry": "PE"
              },
              "alumniOf": [
                { "@type": "CollegeOrUniversity", "name": "Universidad Rey Juan Carlos" },
                { "@type": "CollegeOrUniversity", "name": "Universidad Peruana Cayetano Heredia" }
              ],
              "memberOf": [
                { "@type": "Organization", "name": "Sociedad Interamericana de Psicología (SIP)" },
                { "@type": "Organization", "name": "Sociedad Internacional de Neuropsicoanálisis" },
                { "@type": "Organization", "name": "Asociación Internacional de Terapeutas (IAOTH)" }
              ],
              "sameAs": [
                "https://www.instagram.com/cesarescalante.psicoterapeuta/",
                "https://pe.linkedin.com/in/cesar-escalante-sifuentes-948389347",
                "https://open.spotify.com/show/4DBExpbyHvEpeA5bhxM5M9"
              ],
              "knowsAbout": [
                "Neuropsicología",
                "Psicoterapia Psicoanalítica",
                "TMTD",
                "Terapia Sistémica Familiar",
                "Salud Mental"
              ]
            }),
          }}
        />
      </head>
      <body>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1JXPL9B6RY"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1JXPL9B6RY');
            `,
          }}
        />
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '835299696298190');
              fbq('track','PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=174052927265902&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <I18nProvider>
          <Nav />
          {children}
          <Footer />
          <WhIcon />
        </I18nProvider>
      </body>
    </html>
  );
}
