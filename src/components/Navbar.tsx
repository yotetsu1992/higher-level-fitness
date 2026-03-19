"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#about", label: "Über Sebastian" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ergebnisse", label: "Ergebnisse" },
  { href: "#pricing", label: "Preise" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/95 backdrop-blur-lg border-b border-[#1A1A1A]"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group relative flex items-center">
            <Image
              src="/logo.png"
              alt="Higher Level Fitness"
              height={56}
              width={168}
              className="h-14 w-auto object-contain"
              priority
            />
            {/* Shimmer overlay on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
                backgroundSize: "200% 100%",
                animation: "logoShimmer 2s ease infinite",
              }}
            />
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[11px] tracking-[0.22em] text-[#555] hover:text-white transition-colors duration-300 uppercase"
              >
                {l.label}
                {/* Underline animation */}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#bewerbung"
              className="group relative hidden md:inline-flex items-center overflow-hidden text-[#080808] text-[11px] font-semibold tracking-[0.22em] px-6 py-3 uppercase"
              style={{ background: "linear-gradient(135deg, #EDD27A 0%, #C8922A 40%, #A07020 70%, #C8922A 100%)" }}
            >
              {/* Shimmer sweep on hover */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
                  backgroundSize: "200% 100%",
                  animation: "logoShimmer 1.5s ease infinite",
                }}
              />
              <span className="relative">Erstgespräch</span>
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
              aria-label="Menü öffnen"
            >
              <span
                className={`block w-full h-px bg-white transition-transform duration-300 origin-center ${
                  open ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-full h-px bg-white transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-full h-px bg-white transition-transform duration-300 origin-center ${
                  open ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-20 z-40 bg-[#080808]/98 backdrop-blur-xl border-b border-[#1A1A1A] px-6 py-10 flex flex-col gap-7 md:hidden"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-heading text-4xl tracking-widest text-white hover:text-gold transition-colors duration-200"
              >
                {l.label.toUpperCase()}
              </a>
            ))}
            <a
              href="#bewerbung"
              onClick={() => setOpen(false)}
              className="mt-4 text-[#080808] text-sm font-semibold tracking-[0.22em] uppercase px-6 py-4 text-center"
              style={{ background: "linear-gradient(135deg, #EDD27A 0%, #C8922A 50%, #A07020 100%)" }}
            >
              Erstgespräch anfragen
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
