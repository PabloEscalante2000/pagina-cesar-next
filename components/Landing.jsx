"use client";

import Image from "next/image";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

// NOTA: Todos los assets (imágenes, videos) deben estar en la carpeta `public/assets`.
// Por ejemplo, `../assets/fundador.jpeg` ahora se accede como `/assets/fundador.jpeg`.

function Landing() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const empresas = [
    {
      link: "https://grupoeades.org/inicio",
      nombre: "EADES",
      img: "/assets/eadesSlide.jpg",
      texto: t("des-eades"),
    },
    {
      link: "https://www.pseres.pe/",
      nombre: "PSERES",
      img: "/assets/slidePseres.webp",
      texto: t("des-pseres"),
    },
    {
      link: "https://escconsultora.com/inicio",
      nombre: "NOÉTICA",
      img: "/assets/taller_evento.jpg",
      texto: t("des-esc"),
    },
  ];

  const serv = [
    {
      img: "/assets/1.png",
      nombre: t("icon-1"),
    },
    {
      img: "/assets/2.png",
      nombre: t("icon-2"),
    },
    {
      img: "/assets/3.png",
      nombre: t("icon-3"),
    },
    {
      img: "/assets/4.png",
      nombre: t("icon-4"),
    },
  ];

  return (
    <div className=" bg-beige" id="inicio">
      <select
        className="font-poppins-bold p-3 fixed bg-marroncito-v2/80 backdrop-blur-sm text-marroncito z-50 top-5 left-5 rounded-md"
        onChange={(e) => changeLanguage(e.target.value)}
        aria-label="Seleccionar idioma"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
      <div className="w-full aspect-video max-h-[700px] min-h-[300px] relative bg-black">
        <video
          className="absolute w-full h-full inset-0 object-cover object-center fade-video"
          muted
          loop
          autoPlay
          playsInline // Mejora la compatibilidad en móviles
        >
          <source src="/assets/landing.webm" type="video/webm" />
        </video>
        <div className="md:w-1/2 w-full h-full relative flex justify-center items-center flex-col gap-3 text-beige p-5">
          <h1 className="font-open-sans-bold lg:text-6xl text-4xl pt-10">
            {t("cesar-title")}
          </h1>
          <p
            className="font-poppins-light text-lg lg:text-2xl text-center"
            dangerouslySetInnerHTML={{ __html: t("des-cesar-title") }}
          />
          <Link
            className="px-3 py-3 bg-marron-oscuro rounded-md"
            href="/articulos"
          >
            {t("conoce-trabajo")} <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>

      <div className="xl:w-[1300px] w-full mx-auto py-10 md:px-5 px-0 sm:pt min-h-[600px] flex md:flex-row flex-col gap-10">
        <div className="relative rounded-xl md:h-full md:w-1/2 w-full min-h-[400px] md:min-h-0 shadow-2xl">
          <Image
            src="/assets/fundador.jpeg"
            alt="Foto de César Escalante, fundador"
            className="rounded-xl object-cover object-top shadow-2xl"
            width={650}
            height={650}
          />
        </div>
        <div className="px-5 md:w-1/2">
          <h1 className="font-poppins-light text-base text-marron-oscuro bolder tracking-widest pt-5 pb-2">
            {t("sobre-mi")}
          </h1>
          <div className="font-poppins space-y-3 py-5 text-base">
            <p
              className="font-poppins-light text-sm pb-2"
              dangerouslySetInnerHTML={{ __html: t("des-mi") }}
            />
            <p dangerouslySetInnerHTML={{ __html: t("texto1-p1") }} />
            <p>{t("texto1-p2")}</p>
            <p>{t("texto1-p3")}</p>
            <div className="flex justify-center items-start flex-wrap gap-5 text-marron-oscuro text-center">
              {serv.map((val, i) => (
                <div
                  className="flex flex-col gap-3 justify-center items-center max-w-40"
                  key={i}
                >
                  <Image
                    className="w-40 h-auto"
                    width={160}
                    height={160}
                    src={val.img}
                    alt={val.nombre}
                  />
                  <p>{val.nombre}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-12 flex flex-col gap-10 xl:w-[1200px] w-full justify-center items-center mx-auto">
        <h1 className="text-marron-oscuro text-center p-5 text-4xl font-poppins-bold">
          {t("tit-asoc")}
        </h1>
        <div className="flex pt-10 flex-wrap gap-10 justify-center items-center">
          <div className="max-w-[300px] text-center font-poppins-light flex flex-col justify-center items-center gap-5">
            <Image
              src="/assets/sip_logo.png"
              width={150}
              height={80}
              className="h-20 w-auto"
              alt="Logo SIP"
            />
            <span>{t("prim-asoc")}</span>
          </div>
          <div className="max-w-[300px] text-center font-poppins-light flex flex-col justify-center items-center gap-5">
            <Image
              src="/assets/nspa.png"
              width={150}
              height={80}
              className="h-20 w-auto"
              alt="Logo Asociación NSAP"
            />
            <span>{t("sec-asoc")}</span>
          </div>
          <div className="max-w-[300px] text-center font-poppins-light flex flex-col justify-center items-center gap-5">
            <Image
              src="/assets/member.jpeg"
              width={150}
              height={80}
              className="h-20 w-auto"
              alt="Logo London Intercultural Center"
            />
            <span>{t("ter-asoc")}</span>
          </div>
          <div className="max-w-96 text-center font-poppins-light flex flex-col justify-center items-center gap-5 mt-10">
            <Image
              src="/assets/iaoth.jpeg"
              width={150}
              height={80}
              className="h-20 w-auto"
              alt="Logo IAOTH"
            />
            <span>{t("cuar-asoc")}</span>
          </div>

          <div className=" max-w-[560px] text-center font-poppins-light flex flex-col justify-center items-center gap-5 mt-10">
            <Image
              src="/assets/euroasopsy.png"
              width={150}
              height={80}
              className="h-20 w-auto"
              alt="Logo Euroasopsy"
            />
            <span>{t("quin-asoc")}</span>
          </div>
        </div>
      </div>
      <h1 className="text-marron-oscuro text-center p-5 text-4xl font-poppins-bold">
        {t("mis-centro")}
      </h1>
      <div className="flex md:flex-row flex-col w-full mx-auto py-10">
        {empresas.map((val, i) => (
          <div
            key={i}
            className="md:flex-2 relative h-[600px] transition-all duration-300 delay-150 group overflow-hidden"
          >
            <Image
              src={val.img}
              alt={`Fondo de ${val.nombre}`}
              fill
              className="object-cover object-center transition-all ease-in-out duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 33vw, 100vw"
            />
            <div className=" bg-black/25 absolute w-full h-full inset-0" />
            <div className="absolute w-full h-full flex justify-center items-center flex-col gap-3 p-5">
              <h2
                className="font-poppins-bold sm:text-5xl text-4xl text-center text-marroncito uppercase"
                dangerouslySetInnerHTML={{ __html: val.nombre }}
              />
              <p
                className="text-marroncito font-poppins-light text-xl max-w-64 text-center"
                dangerouslySetInnerHTML={{ __html: val.texto }}
              />
              <a
                className="px-5 py-3 text-marroncito bg-marron-oscuro rounded-full cursor-pointer transition-all shadow-lg duration-200 hover:scale-95"
                rel="noopener noreferrer"
                target="_blank"
                href={val.link}
              >
                {t("visitar-web")}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="py-12 flex flex-col gap-10 xl:w-[1200px] w-full justify-center items-center mx-auto">
        <div className="flex pt-10 flex-wrap gap-10 justify-center items-center">
          <div className="max-w-[300px] text-center font-poppins-light flex flex-col justify-center items-center gap-5">
            <Image
              src="/assets/noeticalogo.svg"
              width={256}
              height={256}
              alt="Logo NOÉTICA"
            />
          </div>
          <div className="max-w-[300px] text-center font-poppins-light flex flex-col justify-center items-center gap-5">
            <Image
              src="/assets/yachay.png"
              width={256}
              height={90}
              className="w-64 h-auto"
              alt="Logo Yachay"
            />
          </div>
          <div className="max-w-[300px] text-center font-poppins-light flex flex-col justify-center items-center gap-5">
            <Image
              src="/assets/kora.png"
              width={256}
              height={100}
              className="w-64 h-auto"
              alt="Logo Kora"
            />
          </div>
          <div className="max-w-[300px] text-center font-poppins-light flex flex-col justify-center items-center gap-5">
            <Image
              src="/assets/logo_eades.webp"
              width={256}
              height={80}
              className="w-64 h-auto"
              alt="Logo Eades"
            />
          </div>
          <div className="max-w-[300px] text-center font-poppins-light flex flex-col justify-center items-center gap-5">
            <Image
              src="/assets/pseres.png"
              width={256}
              height={80}
              className="w-64 h-auto"
              alt="Logo Pseres"
            />
          </div>
        </div>
      </div>

      <div className="w-[1800px] p-5 max-w-full flex justify-center items-center gap-10 flex-wrap mx-auto">
        <div className="flex flex-col justify-center gap-10">
          <Image
            src="/assets/mas_alla_del_consultorio.png"
            width={500}
            height={150}
            alt="Logo del Podcast Más Allá del Consultorio"
            className="w-[500px] max-w-full h-auto"
          />
          <ul className="space-y-3">
            <li className="text-xl flex gap-3 font-poppins items-center">
              <span className="aspect-square text-lg w-10 bg-marroncito-v2 text-marroncito inline-flex justify-center items-center rounded-full">
                <FontAwesomeIcon icon={faCheck} />
              </span>{" "}
              {t("cons-1")}
            </li>
            <li className="text-xl flex gap-3 font-poppins items-center">
              <span className="aspect-square text-lg w-10 bg-marroncito-v2 text-marroncito inline-flex justify-center items-center rounded-full">
                <FontAwesomeIcon icon={faCheck} />
              </span>{" "}
              {t("cons-2")}
            </li>
            <li className="text-xl flex gap-3 font-poppins items-center">
              <span className="aspect-square text-lg w-10 bg-marroncito-v2 text-marroncito inline-flex justify-center items-center rounded-full">
                <FontAwesomeIcon icon={faCheck} />
              </span>{" "}
              {t("cons-3")}
            </li>
          </ul>
          <a
            className="flex gap-3 p-1 bg-linear-to-r from-marroncito-v2 to-marron-claro-pseres justify-center items-center font-poppins-light text-lg w-fit text-white rounded-full cursor-pointer"
            href={
              "https://open.spotify.com/show/4DBExpbyHvEpeA5bhxM5M9?si=RyJKdhG6QxyZfe_B-9Wsag"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="px-5">{t("const-escuchar")}</p>
            <span className="w-10 aspect-square flex justify-center items-center rounded-full bg-marroncito-v2/70 -rotate-45">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </a>
        </div>
        <div className="fade-celular">
          <Image
            src="/assets/celulares.png"
            width={800}
            height={800}
            alt="Celulares mostrando el podcast de César Escalante"
            className="w-[800px] max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
