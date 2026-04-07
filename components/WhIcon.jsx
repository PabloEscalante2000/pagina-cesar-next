"use client";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WhIcon() {
  return (
    <a
      className="fixed top-20 right-6 h-16 w-16 flex items-center justify-center rounded-full text-3xl z-50 cursor-pointer transition-all ease-in-out duration-300 hover:scale-110 shadow-lg"
      style={{ backgroundColor: "#25D366", color: "#ffffff", boxShadow: "0 4px 20px rgba(37,211,102,0.45)" }}
      href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..."
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Contáctanos por WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
}
