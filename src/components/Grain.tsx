"use client";

import { useEffect, useState } from "react";

export default function Grain() {
  const [src, setSrc] = useState("");

  useEffect(() => {
    // Generate noise texture once on the client — no ongoing GPU recalculation
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = ctx.createImageData(size, size);
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      d[i] = d[i + 1] = d[i + 2] = v;
      d[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    setSrc(canvas.toDataURL());
  }, []);

  if (!src) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none"
      style={{
        zIndex: 60,
        backgroundImage: `url(${src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "256px 256px",
        opacity: 0.038,
        animation: "grain 8s steps(8) infinite",
        willChange: "transform",
      }}
    />
  );
}
