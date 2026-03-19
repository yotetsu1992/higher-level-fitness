export default function Grain() {
  return (
    <div
      className="fixed inset-0 z-[60] pointer-events-none select-none"
      aria-hidden="true"
      style={{ opacity: 0.042 }}
    >
      <svg
        className="w-[300%] h-[300%]"
        style={{ animation: "grain 0.8s steps(1) infinite" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
    </div>
  );
}
