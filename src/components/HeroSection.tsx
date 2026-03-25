import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_BASE = "https://wa.me/5527992799538";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Cabana Paraíso das Pedras em meio à natureza com vista para o lago"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/50" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-cream/80 mb-6"
        >
          Rio dos Cedros – SC
        </motion.p>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-cream leading-tight mb-6">
          Desconecte do mundo.
          <br />
          <span className="italic font-normal">Reconecte-se com o essencial.</span>
        </h1>
        
        <p className="font-body text-base md:text-lg text-cream/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Uma experiência única em meio à natureza, conforto e exclusividade em Rio dos Cedros.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Gostaria de fazer uma reserva na Cabana Paraíso das Pedras.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-medium tracking-wide rounded-lg hover:bg-nature-light transition-colors duration-300"
          >
            Reservar agora
          </a>
          <a
            href="#acomodacoes"
            className="inline-flex items-center justify-center px-8 py-4 border border-cream/40 text-cream font-body font-medium tracking-wide rounded-lg hover:bg-cream/10 transition-colors duration-300"
          >
            Ver acomodações
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#acomodacoes" className="block animate-bounce">
          <svg className="w-6 h-6 text-cream/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
