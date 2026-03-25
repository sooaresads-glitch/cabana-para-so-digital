import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import paraisoLago1 from "@/assets/paraiso-lago-1.jpg";
import paraisoLago2 from "@/assets/paraiso-lago-2.jpg";
import paraisoLago3 from "@/assets/paraiso-lago-3.jpg";
import paraisoLago4 from "@/assets/paraiso-lago-4.jpg";
import casaCampo1 from "@/assets/casa-campo-1.jpg";
import casaCampo2 from "@/assets/casa-campo-2.jpg";
import casaCampo3 from "@/assets/casa-campo-3.jpg";
import cabanaPedras1 from "@/assets/cabana-pedras-1.jpg";
import cabanaPedras2 from "@/assets/cabana-pedras-2.jpg";
import cabanaPedras3 from "@/assets/cabana-pedras-3.jpg";
import cabanaPedras4 from "@/assets/cabana-pedras-4.jpg";
import cabanaPedras5 from "@/assets/cabana-pedras-5.jpg";

const WHATSAPP_BASE = "https://wa.me/5527992799538";

const accommodations = [
  {
    name: "Paraíso do Lago",
    description: "A vista mais deslumbrante para a barragem. Um refúgio onde cada amanhecer é uma obra de arte.",
    price: "R$ 1.900",
    message: "Olá! Tenho interesse na hospedagem Paraíso do Lago, gostaria de mais informações e disponibilidade.",
    highlight: true,
    images: [paraisoLago1, paraisoLago2, paraisoLago3, paraisoLago4],
  },
  {
    name: "Refúgio Casa de Campo",
    description: "Perfeito para grupos de até 5 pessoas. Conforto rural com sofisticação em cada detalhe.",
    price: "R$ 1.200",
    subtitle: "até 5 pessoas",
    message: "Olá! Tenho interesse no Refúgio Casa de Campo para até 5 pessoas, pode me passar mais detalhes?",
    images: [casaCampo1, casaCampo2, casaCampo3],
  },
  {
    name: "Cabana Paraíso das Pedras",
    description: "A essência da experiência: natureza, pedra e madeira em perfeita harmonia.",
    price: "R$ 950",
    message: "Olá! Gostaria de saber mais sobre a Cabana Paraíso das Pedras e disponibilidade.",
    images: [cabanaPedras1, cabanaPedras2, cabanaPedras3, cabanaPedras4, cabanaPedras5],
  },
  {
    name: "Suíte para Casal",
    description: "Intimidade e romantismo em um ambiente pensado para dois. Ideal para reconectar.",
    price: "R$ 450",
    message: "Olá! Tenho interesse na Suíte para Casal, pode me informar disponibilidade?",
    images: [],
  },
];

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) {
    return (
      <div className="w-full aspect-[4/3] rounded-lg bg-muted flex items-center justify-center">
        <span className="font-body text-sm text-muted-foreground">Em breve</span>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden group">
      <img
        src={images[current]}
        alt=""
        className="w-full h-full object-cover transition-transform duration-500"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1))}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={() => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1))}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${idx === current ? "bg-primary-foreground" : "bg-primary-foreground/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const AccommodationsSection = () => {
  return (
    <section id="acomodacoes" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">Hospedagens</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">Nossas Acomodações</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {accommodations.map((acc, i) => (
            <motion.div
              key={acc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group bg-card rounded-xl overflow-hidden hover-lift border ${acc.highlight ? "border-primary/30 ring-1 ring-primary/10" : "border-border"}`}
            >
              <ImageCarousel images={acc.images} />
              <div className="p-8">
                {acc.highlight && (
                  <span className="inline-block font-body text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground px-3 py-1 rounded-full mb-4">
                    Mais procurada
                  </span>
                )}
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">{acc.name}</h3>
                {acc.subtitle && (
                  <p className="font-body text-sm text-muted-foreground mb-3">{acc.subtitle}</p>
                )}
                <p className="font-body text-muted-foreground leading-relaxed mb-6">{acc.description}</p>
                
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-body text-sm text-muted-foreground">a partir de</p>
                    <p className="font-display text-3xl font-bold text-primary">{acc.price}</p>
                    <p className="font-body text-xs text-muted-foreground">por final de semana</p>
                  </div>
                  <a
                    href={`${WHATSAPP_BASE}?text=${encodeURIComponent(acc.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-lg hover:bg-nature-light transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.532-1.474A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.557-.7-6.407-1.895l-.447-.287-2.89.94.966-2.852-.313-.467A9.963 9.963 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    Reservar
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-body text-sm text-muted-foreground mt-8"
        >
          ⚡ Datas limitadas — garanta seu final de semana antes que esgote
        </motion.p>
      </div>
    </section>
  );
};

export default AccommodationsSection;
