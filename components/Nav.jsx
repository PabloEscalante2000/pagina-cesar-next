"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

function Nav() {
  const navContainerRef = useRef(null);
  const [navDesplegable, setNavDesplegable] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname();

  // NOTA: Asegúrate de agregar 'nav-sobre-mi' y 'nav-articulos' a tus archivos de traducción.
  const arrayLinks = [
    { nombre: t("nav-sobre-mi", "Sobre mí"), href: "/" },
    { nombre: t("nav-articulos", "Artículos"), href: "/articulos" },
  ];

  return (
    <div
      ref={navContainerRef}
      className="fixed py-5 px-5 w-full top-0 left-0 z-50 flex justify-end gap-5"
    >
      <div
        className={`${
          navDesplegable
            ? "h-36 w-28 rounded-tr-4xl rounded-lg"
            : "h-16 w-16 rounded-4xl"
        }  border border-marron-oscuro/25 bg-beige/70  text-marron-oscuro text-3xl backdrop-blur-xs transition-all duration-300 ease-in-out overflow-hidden flex flex-col items-center`}
      >
        <div className="w-full flex justify-end">
          <button
            className={`relative m-5 h-6 w-6 overflow-hidden cursor-pointer ${
              navDesplegable ? "rounded-lg" : "rounded-none"
            } `}
            onClick={() => setNavDesplegable((e) => !e)}
            aria-label={navDesplegable ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={navDesplegable}
          >
            <div
              className={`h-1 w-[400%] top-0 -left-[200%] border bg-marron-oscuro absolute transition-all ease-in-out duration-300 ${
                navDesplegable ? "rotate-45 -translate-y-1/2" : "rotate-0"
              }`}
            />
            <div
              className={`h-1 top-1/2 w-6 -translate-y-1/2 border bg-marron-oscuro absolute transition-all ease-in-out duration-300 ${
                navDesplegable ? "scale-x-0" : "scale-x-100"
              }`}
            />
            <div
              className={`h-1 w-[400%] top-full -left-[200%] border bg-marron-oscuro absolute transition-all ease-in-out duration-300  ${
                navDesplegable
                  ? "-rotate-45 -translate-y-1/2"
                  : "rotate-0 -translate-y-full"
              }`}
            />
          </button>
        </div>
        {navDesplegable && (
          <nav className="h-40 flex flex-col justify-around items-center text-base font-poppins-light">
            {arrayLinks.map((val, i) => {
              const isActive = pathname === val.href;
              return (
                <Link
                  className={`${
                    isActive ? "font-bold" : ""
                  } nav-hover-btn`}
                  key={i}
                  href={val.href}
                  onClick={() => setNavDesplegable(false)}
                >
                  {val.nombre}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </div>
  );
}

export default Nav;
