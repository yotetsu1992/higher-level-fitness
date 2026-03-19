"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionLabel({ label }: { label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="flex items-center gap-4">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: 32 } : { width: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="h-px flex-shrink-0"
        style={{ background: "linear-gradient(90deg, #EDD27A 0%, #C8922A 50%, #A07020 100%)" }}
      />
      <motion.span
        initial={{ opacity: 0, x: -8 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="gold-gradient-text text-[10px] tracking-[0.45em] uppercase"
      >
        {label}
      </motion.span>
    </div>
  );
}
