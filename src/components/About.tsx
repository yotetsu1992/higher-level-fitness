"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const qualities = [
  "Certified Personal Trainer",
  "OxyGym Baden-Baden",
  "Ernährungsberatung",
  "Kraft & Athletik",
  "Mentalcoaching & Mind-Set",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="about" ref={ref} className="relative py-32 bg-[#080808]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeUp}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-8 h-px bg-gold" />
          <span className="text-gold text-[10px] tracking-[0.45em] uppercase">
            Über Sebastian
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Left: Story */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={stagger}
            className="flex flex-col gap-8"
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-7xl md:text-[6rem] text-white leading-[0.9] tracking-tight"
            >
              KEIN
              <br />
              <span className="text-gold">DURCHSCHNITT.</span>
              <br />
              NIEMALS.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-[#777] text-base leading-relaxed max-w-md">
              Sebastian ist kein gewöhnlicher Trainer. Mit über 7 Jahren
              Erfahrung im OxyGym Baden-Baden hat er eine Methodik entwickelt,
              die echte Ergebnisse liefert — nicht in 12 Wochen auf dem Papier,
              sondern langfristig im Leben seiner Kunden.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[#777] text-base leading-relaxed max-w-md">
              Sein Ansatz: maximale Personalisierung. Keine vorgefertigten Pläne,
              keine leeren Versprechen. Nur Strategie, Arbeit und messbare Erfolge.
            </motion.p>

            {/* Qualities */}
            <motion.div variants={stagger} className="flex flex-col gap-3 mt-2">
              {qualities.map((q, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-sm tracking-wider text-[#999]">{q}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="#bewerbung"
              className="mt-2 inline-flex items-center gap-3 text-gold text-[11px] tracking-[0.25em] uppercase hover:gap-5 transition-all duration-300 w-fit"
            >
              Erstgespräch anfragen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M1 8H15M15 8L8 1M15 8L8 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right: Image + Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="flex flex-col gap-8"
          >
            {/* Image placeholder */}
            <div className="relative aspect-[3/4] bg-[#111] border border-[#1A1A1A] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                <span className="font-heading text-[10rem] text-[#161616] leading-none">
                  S
                </span>
                <span className="text-[9px] tracking-[0.35em] text-[#2A2A2A] uppercase">
                  Foto kommt bald
                </span>
              </div>
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold/60" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold/60" />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/40 to-transparent" />
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-gold pl-6">
              <p className="text-[#888] italic text-base leading-relaxed">
                &ldquo;Ich trainiere nicht für dich. Ich trainiere MIT dir.
                Der Unterschied ist alles.&rdquo;
              </p>
              <cite className="text-gold text-[10px] tracking-[0.35em] uppercase mt-4 block not-italic">
                — Sebastian
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
