"use client";

import { useState } from "react";

export default function CursosForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simula registro (integrar con servicio de email como Mailchimp, ConvertKit, etc.)
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="w-16 h-px bg-dorado" />
        <p className="font-cardo text-marino text-xl">
          ¡Gracias por registrarte!
        </p>
        <p className="font-cardo text-marino/60 text-base leading-relaxed max-w-sm">
          Serás el primero en saber cuando los cursos estén disponibles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-sm">
      <input
        type="email"
        required
        placeholder="Tu correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-5 py-3 border border-marino/30 bg-transparent font-quicksand text-marino text-sm placeholder:text-marino/40 focus:outline-none focus:border-dorado transition-colors duration-200"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full px-7 py-3 bg-dorado text-crema font-quicksand font-semibold text-xs tracking-widest uppercase hover:bg-dorado/80 transition-all duration-200 disabled:opacity-60"
      >
        {loading ? "Registrando..." : "Avisarme cuando estén listos"}
      </button>
    </form>
  );
}
