"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Nach 3 Monaten mit Sebastian habe ich nicht nur 12 kg abgenommen — ich habe gelernt, wie Training wirklich funktioniert. Kein anderer Trainer hat sich so tief mit mir beschäftigt.",
    name: "Michael R.",
    context: "OxyGym-Mitglied · Personal Training",
    result: "−12 kg in 3 Monaten",
  },
  {
    quote:
      "Ich wollte endlich Muskelmasse aufbauen, hatte aber nie ein System. Sebastian hat alles erklärt, angepasst, und mich motiviert. Das Ergebnis spricht für sich.",
    name: "Jonas K.",
    context: "Personal Training · 6 Monate",
    result: "+8 kg Muskelmasse",
  },
  {
    quote:
      "Was mich am meisten überrascht hat: Sebastian ist immer erreichbar. Wenn ich eine Frage habe, bekomme ich eine echte Antwort. Das ist Premium-Service.",
    name: "Laura M.",
    context: "Online Coaching",
    result: "Ziel erreicht in 4 Monaten",
  },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [active, setActive] = useState(0);

  return (
    <section id="ergebnisse" ref={ref} className="relative py-32 bg-[#080808]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-8 h-px bg-gold" />
          <span className="text-gold text-[10px] tracking-[0.45em] uppercase">
            Ergebnisse
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="font-heading text-7xl md:text-[6rem] text-white leading-[0.9] tracking-tight mb-20"
        >
          ECHTE
          <br />
          <span className="text-gold">ERGEBNISSE.</span>
          <br />
          ECHTE LEUTE.
        </motion.h2>

        {/* Transformation placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex gap-2 mb-20 max-w-xl"
        >
          {["VORHER", null, "NACHHER"].map((label, i) => (
            <div
              key={i}
              className={`relative flex-1 aspect-[3/4] bg-[#111] border overflow-hidden ${
                label === "NACHHER"
                  ? "border-gold/40"
                  : "border-[#1A1A1A]"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-[5rem] text-[#1A1A1A] leading-none">
                  {i + 1}
                </span>
              </div>
              {label && (
                <div
                  className={`absolute bottom-0 inset-x-0 px-3 py-2 ${
                    label === "NACHHER"
                      ? "bg-gold/90"
                      : "bg-[#080808]/80"
                  }`}
                >
                  <span
                    className={`text-[9px] tracking-[0.3em] uppercase font-semibold ${
                      label === "NACHHER" ? "text-[#080808]" : "text-[#444]"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col justify-center pl-4 gap-2">
            <p className="text-[#333] text-[10px] tracking-wider leading-relaxed">
              Echte Fotos
              <br />
              folgen bald.
            </p>
            <div className="w-4 h-px bg-gold/40" />
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              onClick={() => setActive(i)}
              className={`flex flex-col p-7 border cursor-pointer transition-all duration-300 ${
                active === i
                  ? "border-gold bg-[#111]"
                  : "border-[#1A1A1A] bg-[#0B0B0B] hover:border-[#2A2A2A]"
              }`}
            >
              {/* Result badge */}
              <div className="inline-flex items-center bg-gold/10 border border-gold/25 px-3 py-1 mb-6 w-fit">
                <span className="text-gold text-[9px] tracking-[0.22em] uppercase font-medium">
                  {t.result}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-[#777] text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="border-t border-[#1A1A1A] pt-5">
                <p className="text-white text-sm font-medium">{t.name}</p>
                <p className="text-[#444] text-[11px] tracking-wider mt-1">
                  {t.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
