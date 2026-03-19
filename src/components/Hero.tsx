"use client";

import { motion, useInView, animate, useScroll, useTransform } from "framer-motion";
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
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  // Parallax transforms
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808]">
      {/* Grid — slowest parallax */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#C8922A 1px, transparent 1px), linear-gradient(90deg, #C8922A 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          y: gridY,
        }}
      />

      {/* Glow — medium parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200,146,42,0.08) 0%, transparent 70%)",
          y: glowY,
        }}
      />

      {/* Second glow — right side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200,146,42,0.04) 0%, transparent 70%)",
          y: glowY,
        }}
      />

      {/* HL watermark — fastest parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-heading text-[28vw] leading-none text-white/[0.018] select-none pointer-events-none tracking-tight"
        style={{ y: watermarkY }}
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

      <motion.div style={{ y: contentY }} className="relative max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-20">
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
                className="group relative inline-flex items-center justify-center overflow-hidden text-[#080808] font-semibold tracking-[0.18em] text-[12px] uppercase px-8 py-4"
                style={{ background: "linear-gradient(135deg, #EDD27A 0%, #C8922A 40%, #A07020 70%, #C8922A 100%)" }}
              >
                {/* Shimmer on hover */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.28) 50%, transparent 70%)",
                    backgroundSize: "200% 100%",
                    animation: "logoShimmer 1.8s ease infinite",
                  }}
                />
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
      </motion.div>
    </section>
  );
}
