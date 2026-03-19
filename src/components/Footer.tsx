const footerLinks = [
  { href: "#about", label: "Über Sebastian" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ergebnisse", label: "Ergebnisse" },
  { href: "#pricing", label: "Preise" },
  { href: "#bewerbung", label: "Bewerbung" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#141414] bg-[#080808] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col leading-none gap-1">
              <span className="font-heading text-2xl tracking-[0.18em] text-gold">
                HIGHER LEVEL
              </span>
              <span className="font-heading text-[0.5rem] tracking-[0.55em] text-[#2A2A2A]">
                FITNESS
              </span>
            </div>
            <p className="text-[#333] text-[13px] leading-relaxed max-w-[200px]">
              Premium Personal Training mit Sebastian.
              <br />
              OxyGym Baden-Baden & Umgebung.
            </p>
            <p className="text-[#222] text-[10px] tracking-[0.3em] uppercase">
              Kein Average Training. Higher Level.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-5">
            <span className="text-[9px] tracking-[0.4em] text-[#2A2A2A] uppercase">
              Navigation
            </span>
            {footerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#333] text-sm hover:text-gold transition-colors duration-200 w-fit"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <span className="text-[9px] tracking-[0.4em] text-[#2A2A2A] uppercase">
              Kontakt
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-[#333] text-sm">OxyGym Baden-Baden</p>
              <p className="text-[#333] text-sm">Baden-Baden & Umgebung</p>
              <p className="text-[#333] text-sm">Bühl · Rastatt · Gaggenau</p>
            </div>
            <a
              href="#bewerbung"
              className="mt-2 inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.22em] uppercase hover:gap-4 transition-all duration-300 w-fit"
            >
              Erstgespräch anfragen
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 6H11M11 6L6 1M11 6L6 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#111] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#222] text-[11px] tracking-wider">
            © {new Date().getFullYear()} Higher Level Fitness — Sebastian. Alle Rechte vorbehalten.
          </p>
          <p className="text-[#1A1A1A] text-[10px] tracking-[0.3em] uppercase">
            Baden-Baden · Germany
          </p>
        </div>
      </div>
    </footer>
  );
}
