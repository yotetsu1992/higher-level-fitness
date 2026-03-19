"use client";

import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { useRef } from "react";

const packages = [
  {
    name: "Starter",
    subtitle: "Einzelne Sessions",
    description:
      "Perfekt für einen ersten Einblick in Higher Level Training ohne Verpflichtung.",
    features: [
      "Einzel-Session (60 Min)",
      "Persönliches Check-in",
      "Kein Abo notwendig",
    ],
    cta: "Anfragen",
    highlight: false,
  },
  {
    name: "Premium",
    subtitle: "Monatliches Paket",
    description:
      "Das Komplettpaket für ernsthafte Ergebnisse. Die beliebteste Wahl.",
    features: [
      "4 Sessions / Monat (je 60 Min)",
      "Individueller Trainingsplan",
      "Ernährungsberatung",
      "WhatsApp Support",
      "Monatliches Auswertungsgespräch",
    ],
    cta: "Jetzt bewerben",
    highlight: true,
  },
  {
    name: "VIP",
    subtitle: "Auf Anfrage",
    description:
      "Maximale Betreuung für die, die wirklich Higher Level wollen. Exklusiv.",
    features: [
      "Unbegrenzte Sessions",
      "Täglicher Check-in",
      "Vollständige Lifestyle-Beratung",
      "Direkte Erreichbarkeit 24/7",
      "Exklusiver, limitierter Slot",
    ],
    cta: "VIP anfragen",
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="pricing" ref={ref} className="relative py-32 bg-[#080808]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-6">
          <SectionLabel label="Pricing" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="font-heading text-7xl md:text-[6rem] text-white leading-[0.9] tracking-tight"
          >
            INVESTIERE
            <br />
            IN DEIN
            <br />
            <span className="gold-gradient-text">HIGHER LEVEL.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden md:flex flex-col items-end gap-2"
          >
            <p className="text-[#444] text-sm max-w-[200px] text-right leading-relaxed">
              Preise auf persönliche Anfrage.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-4 h-px bg-gold/40" />
              <p className="text-[#2A2A2A] text-[10px] tracking-wider uppercase">
                Qualität hat ihren Wert
              </p>
            </div>
          </motion.div>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className={`relative flex flex-col p-8 border transition-colors duration-300 ${
                pkg.highlight
                  ? "border-gold bg-[#0F0F0F]"
                  : "border-[#1A1A1A] bg-[#0B0B0B] hover:border-[#2A2A2A]"
              }`}
            >
              {/* Top gold line for highlighted */}
              {pkg.highlight && (
                <div className="absolute top-0 inset-x-0 h-px bg-gold" />
              )}

              {/* Popular badge */}
              {pkg.highlight && (
                <span className="absolute top-0 right-6 -translate-y-1/2 bg-gold text-[#080808] text-[9px] tracking-[0.22em] uppercase font-semibold px-3 py-1">
                  Beliebteste Wahl
                </span>
              )}

              {/* Package name */}
              <div className="mb-6">
                <h3 className="font-heading text-3xl text-white tracking-wide">
                  {pkg.name.toUpperCase()}
                </h3>
                <p className="text-[#444] text-[10px] tracking-[0.25em] uppercase mt-1">
                  {pkg.subtitle}
                </p>
              </div>

              <p className="text-[#555] text-sm leading-relaxed mb-8">
                {pkg.description}
              </p>

              {/* Features */}
              <div className="flex flex-col gap-3 flex-1 mb-8">
                {pkg.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0 mt-[5px]" />
                    <span className="text-[#777] text-sm">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="border-t border-[#161616] pt-6">
                <p className="text-[#333] text-[10px] tracking-[0.25em] uppercase mb-4">
                  Preis auf Anfrage
                </p>
                <a
                  href="#bewerbung"
                  className={`w-full flex items-center justify-center py-3.5 text-[11px] tracking-[0.18em] uppercase font-semibold transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-gold text-[#080808] hover:bg-gold-light"
                      : "border border-[#222] text-[#666] hover:border-gold hover:text-gold"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
