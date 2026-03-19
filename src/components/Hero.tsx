"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.35 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808]">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#C8A96E 1px, transparent 1px), linear-gradient(90deg, #C8A96E 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow top-left */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gold/[0.06] rounded-full blur-[100px] pointer-events-none" />

      {/* Large background letters */}
      <div className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-heading text-[28vw] leading-none text-white/[0.018] select-none pointer-events-none tracking-tight">
        HL
      </div>

      {/* Vertical line accent */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden md:block" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-5 max-w-5xl"
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-[10px] tracking-[0.45em] uppercase font-medium">
              OxyGym · Baden-Baden
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeUp} className="leading-none">
            <div className="font-heading text-[18vw] md:text-[12rem] text-gold leading-[0.88] tracking-tight">
              HIGHER
            </div>
            <div className="font-heading text-[18vw] md:text-[12rem] text-white leading-[0.88] tracking-tight">
              LEVEL
            </div>
            <div className="font-heading text-[6vw] md:text-[3.8rem] tracking-[0.42em] text-[#333] leading-none mt-3 md:mt-4">
              FITNESS
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-[#777] text-base md:text-lg max-w-md leading-relaxed mt-3"
          >
            Kein Massentraining. Kein Durchschnitt.
            <br />
            Premium Personal Training — maßgeschneidert auf dich.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mt-5"
          >
            <a
              href="#bewerbung"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-light transition-colors duration-300 text-[#080808] font-semibold tracking-[0.18em] text-[12px] uppercase px-8 py-4"
            >
              Erstgespräch anfragen
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center border border-[#2A2A2A] hover:border-gold text-[#888] hover:text-gold transition-all duration-300 tracking-[0.18em] text-[12px] uppercase px-8 py-4"
            >
              Über Sebastian
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-14 pt-8 border-t border-[#161616] grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { value: "7+", label: "Jahre Erfahrung" },
              { value: "50+", label: "Aktive Kunden" },
              { value: "100%", label: "Ergebnisfokus" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1.5">
                <span className="font-heading text-4xl md:text-5xl text-gold tracking-wider">
                  {s.value}
                </span>
                <span className="text-[9px] tracking-[0.22em] text-[#444] uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-10 right-12 hidden md:flex flex-col items-center gap-3"
        >
          <span
            className="text-[9px] tracking-[0.35em] text-[#444] uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <div className="w-px h-14 bg-gradient-to-b from-gold/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
