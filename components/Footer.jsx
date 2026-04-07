"use client";

import { faInstagram, faSpotify, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const arrayMedia = [
  {
    icon: faInstagram,
    link: "https://www.instagram.com/cesarescalante.psicoterapeuta/",
    label: "Instagram",
  },
  {
    icon: faSpotify,
    link: "https://open.spotify.com/show/4DBExpbyHvEpeA5bhxM5M9?si=RyJKdhG6QxyZfe_B-9Wsag",
    label: "Spotify",
  },
  {
    icon: faYoutube,
    link: "https://www.youtube.com/@C%C3%A9sarEscalante-k7w",
    label: "YouTube",
  },
  {
    icon: faLinkedin,
    link: "https://pe.linkedin.com/in/cesar-escalante-sifuentes-948389347",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-marino">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="font-quicksand text-crema/60 text-xs tracking-widest uppercase">
          © 2025 César Escalante Sifuentes. Todos los derechos reservados.
        </p>
        <div className="flex gap-4 items-center">
          {arrayMedia.map((val, i) => (
            <a
              key={i}
              href={val.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={val.label}
              className="text-crema hover:text-dorado transition-colors duration-200 text-lg"
            >
              <FontAwesomeIcon icon={val.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
