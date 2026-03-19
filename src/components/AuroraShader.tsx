"use client";

import { useEffect, useRef } from "react";

// Three slowly-drifting gold radial orbs — rendered at ~30fps via canvas 2D.
// screen blend mode means dark bg stays dark, only light adds colour.
const ORBS = [
  { nx: 0.12, ny: 0.38, sx: 0.00022, sy: 0.00017, r: 0.60, color: [200, 146, 42], a: 0.10 },
  { nx: 0.82, ny: 0.62, sx: 0.00016, sy: 0.00021, r: 0.50, color: [237, 210, 122], a: 0.06 },
  { nx: 0.48, ny: 0.90, sx: 0.00019, sy: 0.00014, r: 0.44, color: [160, 112, 32], a: 0.08 },
] as const;

export default function AuroraShader() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, raf = 0, last = 0;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (now - last < 33) return; // ~30 fps cap
      last = now;

      ctx.clearRect(0, 0, W, H);

      for (const orb of ORBS) {
        const ox = (orb.nx + Math.sin(now * orb.sx) * 0.10) * W;
        const oy = (orb.ny + Math.cos(now * orb.sy) * 0.08) * H;
        const rad = orb.r * Math.min(W, H);
        const [r, g, b] = orb.color;

        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, rad);
        grad.addColorStop(0, `rgba(${r},${g},${b},${orb.a})`);
        grad.addColorStop(0.45, `rgba(${r},${g},${b},${(orb.a * 0.25).toFixed(3)})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
      }
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 2,
        mixBlendMode: "screen",
        opacity: 1,
      }}
    />
  );
}
