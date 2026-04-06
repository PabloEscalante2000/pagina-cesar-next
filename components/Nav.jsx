"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { nombre: "Inicio", href: "/" },
  { nombre: "Sobre mí", href: "/sobre-mi" },
  { nombre: "Empresas", href: "/empresas" },
  { nombre: "Libros", href: "/libros" },
  { nombre: "Eventos", href: "/eventos" },
  { nombre: "Artículos", href: "/articulos" },
  { nombre: "Cursos", href: "/cursos" },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-marino/75 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link
          href="/"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/assets/web_icono.png"
            width={40}
            height={40}
            alt="César Escalante"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-7 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-quicksand text-xs tracking-widest uppercase transition-colors duration-200 ${
                pathname === link.href
                  ? "text-dorado"
                  : "text-crema/75 hover:text-dorado"
              }`}
            >
              {link.nombre}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-crema transition-all duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-crema transition-all duration-300 ${
              isOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-crema transition-all duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col bg-marino/90 backdrop-blur-md px-6 pb-6 gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-quicksand text-xs tracking-widest uppercase py-3 border-b border-crema/10 transition-colors ${
                pathname === link.href
                  ? "text-dorado"
                  : "text-crema/75 hover:text-dorado"
              }`}
            >
              {link.nombre}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Nav;
