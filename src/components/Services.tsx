"use client";

import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "1:1 Personal Training",
    description:
      "Jede Session ist auf deine Ziele, deinen Körper und deinen Alltag abgestimmt. Kein Einheitsplan, keine Kompromisse — nur Training, das wirkt.",
    tags: ["Kraft", "Ausdauer", "Mobilität"],
  },
  {
    number: "02",
    title: "Individueller Trainingsplan",
    description:
      "Ein maßgeschneiderter Plan, den du eigenständig umsetzt — mit laufender Begleitung und Anpassung durch Sebastian. Für alle, die strukturiert vorankommen wollen.",
    tags: ["Planung", "Tracking", "Anpassung"],
  },
  {
    number: "03",
    title: "Ernährungsberatung",
    description:
      "Keine Crash-Diäten, keine Verbote. Eine Ernährungsstrategie, die zu deinem Leben passt und nachhaltige Ergebnisse produziert.",
    tags: ["Makros", "Timing", "Strategie"],
  },
  {
    number: "04",
    title: "Online Coaching",
    description:
      "Sebastians Expertise, unabhängig von deinem Standort. Für alle, die flexibel und remote auf Higher Level trainieren wollen.",
    tags: ["Remote", "Flexibel", "Check-ins"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="leistungen" ref={ref} className="relative py-32 bg-[#0B0B0B]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="mb-6">
              <SectionLabel label="Leistungen" />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="font-heading text-7xl md:text-[6rem] text-white leading-[0.9] tracking-tight"
            >
              WAS ICH
              <br />
              <span className="text-gold">FÜR DICH</span>
              <br />
              TUE.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-[#444] text-sm max-w-[220px] text-right hidden md:block leading-relaxed"
          >
            Jede Leistung ist auf maximale Wirkung ausgelegt. Kein Ballast.
            Nur was zählt.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#161616]">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group bg-[#0B0B0B] hover:bg-[#101010] transition-colors duration-400 p-8 md:p-10 flex flex-col gap-6 cursor-default"
            >
              {/* Number */}
              <span className="font-heading text-[5rem] leading-none text-[#181818] group-hover:text-[#222] transition-colors duration-300 select-none">
                {s.number}
              </span>

              {/* Title */}
              <h3 className="font-heading text-3xl md:text-[2.2rem] text-white tracking-wide leading-tight">
                {s.title.toUpperCase()}
              </h3>

              {/* Description */}
              <p className="text-[#5A5A5A] text-sm leading-relaxed flex-1">
                {s.description}
              </p>

              {/* Tags + Arrow */}
              <div className="flex items-end justify-between mt-2 pt-4 border-t border-[#161616] group-hover:border-[#1E1E1E] transition-colors">
                <div className="flex gap-2 flex-wrap">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] tracking-[0.22em] text-[#444] border border-[#1E1E1E] px-2.5 py-1 group-hover:border-gold/25 group-hover:text-gold/50 transition-all duration-300"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>

                <div className="w-9 h-9 border border-[#1E1E1E] flex items-center justify-center group-hover:border-gold group-hover:bg-gold transition-all duration-300 flex-shrink-0 ml-4">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M1 12L12 1M12 1H1M12 1V12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-[#444] group-hover:text-[#080808] transition-colors duration-300"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
