import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Home, MapPin, CalendarCheck } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/5547991916682";

const FloatingButtons = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const actions = [
    {
      label: "Reservar agora",
      icon: CalendarCheck,
      href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Gostaria de fazer uma reserva na Cabana Paraíso das Pedras.")}`,
      external: true,
    },
    { label: "Ver acomodações", icon: Home, href: "#acomodacoes" },
    { label: "Como chegar", icon: MapPin, href: "#localizacao" },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col gap-2 mb-2"
              >
                {actions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 bg-card text-foreground rounded-xl shadow-lg border border-border font-body text-sm font-medium hover:bg-muted transition-colors whitespace-nowrap"
                  >
                    <action.icon className="w-4 h-4 text-primary" />
                    {action.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setOpen(!open)}
            className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:bg-nature-light transition-colors duration-300"
            aria-label="Menu de ações"
          >
            {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingButtons;
