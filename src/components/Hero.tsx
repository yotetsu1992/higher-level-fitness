"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function CharReveal({
  text,
  className,
  startDelay = 0,
  color,
}: {
  text: string;
  className: string;
  startDelay?: number;
  color?: string;
}) {
  return (
    <div className="overflow-hidden leading-[0.88]">
      <div className="flex">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{
              delay: startDelay + i * 0.042,
              duration: 0.72,
              ease,
            }}
            className={className}
            style={color ? { color } : undefined}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function Counter({
  to,
  suffix,
  duration = 1.6,
}: {
  to: number;
  suffix: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const node = ref.current;
    const ctrl = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate(v) {
        node.textContent = Math.round(v) + suffix;
      },
    });
    return () => ctrl.stop();
  }, [isInView, to, suffix, duration]);

  return <span ref={ref}>0{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 1.55 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808]">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#C8A96E 1px, transparent 1px), linear-gradient(90deg, #C8A96E 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gold/[0.055] rounded-full blur-[110px] pointer-events-none"
      />

      {/* HL watermark — subtle parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-heading text-[28vw] leading-none text-white/[0.018] select-none pointer-events-none tracking-tight"
      >
        HL
      </motion.div>

      {/* Vertical accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.6, duration: 0.9, ease }}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden md:block origin-center"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-20">
        <div className="flex flex-col gap-5 max-w-5xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ delay: 0.3, duration: 0.6, ease }}
              className="h-px bg-gold"
            />
            <span className="text-gold text-[10px] tracking-[0.45em] uppercase font-medium">
              OxyGym · Baden-Baden
            </span>
          </motion.div>

          {/* Headline */}
          <div className="flex flex-col mt-1">
            <CharReveal
              text="HIGHER"
              startDelay={0.45}
              className="inline-block font-heading text-[18vw] md:text-[12rem] leading-[0.88] tracking-tight"
              color="#C8A96E"
            />
            <CharReveal
              text="LEVEL"
              startDelay={0.82}
              className="inline-block font-heading text-[18vw] md:text-[12rem] leading-[0.88] tracking-tight"
              color="#F0F0F0"
            />

            {/* FITNESS */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.7, ease }}
              className="font-heading text-[6vw] md:text-[3.8rem] tracking-[0.42em] text-[#333] leading-none mt-3 md:mt-4"
            >
              FITNESS
            </motion.div>
          </div>

          {/* Tagline + CTAs + Stats */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-5"
          >
            <motion.p variants={fadeUp} className="text-[#777] text-base md:text-lg max-w-md leading-relaxed mt-3">
              Kein Massentraining. Kein Durchschnitt.
              <br />
              Premium Personal Training — maßgeschneidert auf dich.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#bewerbung"
                className="group relative inline-flex items-center justify-center overflow-hidden bg-gold text-[#080808] font-semibold tracking-[0.18em] text-[12px] uppercase px-8 py-4 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gold-light translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative">Erstgespräch anfragen</span>
              </a>
              <a
                href="#about"
                className="group inline-flex items-center justify-center border border-[#2A2A2A] hover:border-gold text-[#888] hover:text-gold transition-all duration-300 tracking-[0.18em] text-[12px] uppercase px-8 py-4"
              >
                Über Sebastian
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-10 pt-8 border-t border-[#161616] grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { to: 7, suffix: "+", label: "Jahre Erfahrung" },
                { to: 50, suffix: "+", label: "Aktive Kunden" },
                { to: 100, suffix: "%", label: "Ergebnisfokus" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1.5">
                  <span className="font-heading text-4xl md:text-5xl text-gold tracking-wider">
                    <Counter to={s.to} suffix={s.suffix} />
                  </span>
                  <span className="text-[9px] tracking-[0.22em] text-[#444] uppercase">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 right-12 hidden md:flex flex-col items-center gap-3"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="text-[9px] tracking-[0.35em] text-[#444] uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </motion.span>
          <div className="w-px h-14 bg-gradient-to-b from-gold/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
