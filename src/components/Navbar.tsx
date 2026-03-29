import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Acomodações", href: "#acomodacoes" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
];

const WHATSAPP_BASE = "https://wa.me/5547991916682";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className={`font-display text-xl font-semibold transition-colors ${scrolled ? "text-foreground" : "text-cream"}`}>
          Paraíso das Pedras
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`font-body text-sm tracking-wide transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-cream/80 hover:text-cream"}`}>
              {l.label}
            </a>
          ))}
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Gostaria de fazer uma reserva.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-primary text-primary-foreground font-body text-sm font-medium rounded-lg hover:bg-nature-light transition-colors"
          >
            Reservar
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className={`md:hidden ${scrolled ? "text-foreground" : "text-cream"}`} aria-label="Menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border px-6 py-4 space-y-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block font-body text-sm text-foreground">
              {l.label}
            </a>
          ))}
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Gostaria de fazer uma reserva.")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-5 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-lg"
          >
            Reservar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
