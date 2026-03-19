"use client";

import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { useRef, useState } from "react";

const fields = [
  { id: "name", label: "Dein Name", type: "text", placeholder: "Max Mustermann" },
  { id: "email", label: "E-Mail-Adresse", type: "email", placeholder: "max@beispiel.de" },
  { id: "ziel", label: "Dein Trainingsziel", type: "text", placeholder: "z.B. Abnehmen, Muskelaufbau, Athletik…" },
  { id: "stand", label: "Aktueller Trainingsstand", type: "text", placeholder: "z.B. Anfänger / seit 2 Jahren / keine Erfahrung" },
];

export default function Application() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="bewerbung" ref={ref} className="relative py-32 bg-[#0B0B0B]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Background text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-heading text-[18vw] text-white/[0.015] leading-none select-none pointer-events-none tracking-tight pr-4">
        APPLY
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <SectionLabel label="Bewerbung" />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="font-heading text-7xl md:text-[6rem] text-white leading-[0.9] tracking-tight"
            >
              BEREIT
              <br />
              FÜR DEIN
              <br />
              <span className="gold-gradient-text">HIGHER LEVEL?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#666] text-base leading-relaxed max-w-md"
            >
              Kein simples Kontaktformular. Eine Bewerbung — weil Sebastian nur
              mit Menschen arbeitet, die es wirklich wollen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              {[
                "Erstgespräch kostenlos & unverbindlich",
                "Antwort innerhalb von 24 Stunden",
                "Nur begrenzte Plätze verfügbar",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-[#888] text-sm">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            {sent ? (
              <div className="border border-gold bg-[#0F0F0F] p-12 flex flex-col items-center text-center gap-7">
                <div className="w-16 h-16 border border-gold flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 12L9 17L20 7"
                      stroke="#C8A96E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-4xl text-white tracking-wide">
                  BEWERBUNG GESENDET
                </h3>
                <p className="text-[#555] text-sm leading-relaxed max-w-xs">
                  Sebastian meldet sich innerhalb von 24 Stunden persönlich bei
                  dir. Danke für dein Vertrauen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {fields.map((field, i) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className="flex flex-col gap-2"
                  >
                    <label
                      htmlFor={field.id}
                      className="text-[9px] tracking-[0.35em] text-[#444] uppercase"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      className="bg-[#111] border border-[#1A1A1A] text-[#F0F0F0] text-sm px-4 py-3.5 placeholder-[#2A2A2A] focus:outline-none focus:border-gold transition-colors duration-200"
                    />
                  </motion.div>
                ))}

                {/* Motivation textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.62 }}
                  className="flex flex-col gap-2"
                >
                  <label
                    htmlFor="motivation"
                    className="text-[9px] tracking-[0.35em] text-[#444] uppercase"
                  >
                    Warum Higher Level Fitness?
                  </label>
                  <textarea
                    id="motivation"
                    placeholder="Was treibt dich an? Was möchtest du verändern?"
                    rows={4}
                    required
                    className="bg-[#111] border border-[#1A1A1A] text-[#F0F0F0] text-sm px-4 py-3.5 placeholder-[#2A2A2A] focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 14 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.72 }}
                  type="submit"
                  className="mt-2 bg-gold hover:bg-gold-light transition-colors duration-300 text-[#080808] font-semibold tracking-[0.22em] uppercase text-[11px] py-4 flex items-center justify-center gap-3 group"
                >
                  Jetzt bewerben
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M1 8H15M15 8L8 1M15 8L8 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
