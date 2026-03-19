"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);

  const dotX = useSpring(mouseX, { stiffness: 600, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 40 });
  const ringX = useSpring(mouseX, { stiffness: 130, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 130, damping: 22 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-hover]")) setHovering(true);
    };
    const out = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-hover]")) setHovering(false);
    };

    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer ring — lags behind */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        animate={{
          width: hovering ? 52 : 34,
          height: hovering ? 52 : 34,
          opacity: hidden ? 0 : hovering ? 0.9 : 0.5,
          borderColor: hovering ? "#EDD27A" : "#C8922A",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1px solid #C8922A",
          willChange: "transform",
        }}
      />

      {/* Inner dot — follows exactly */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        animate={{
          width: hovering ? 7 : 5,
          height: hovering ? 7 : 5,
          opacity: hidden ? 0 : 1,
          backgroundColor: hovering ? "#EDD27A" : "#C8922A",
        }}
        transition={{ duration: 0.2 }}
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
      />
    </>
  );
}
