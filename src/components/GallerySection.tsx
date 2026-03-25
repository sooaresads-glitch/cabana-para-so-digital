import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

import paraisoLago1 from "@/assets/paraiso-lago-1.jpg";
import paraisoLago2 from "@/assets/paraiso-lago-2.jpg";
import paraisoLago3 from "@/assets/paraiso-lago-3.jpg";
import paraisoLago4 from "@/assets/paraiso-lago-4.jpg";
import casaCampo1 from "@/assets/casa-campo-1.jpg";
import casaCampo2 from "@/assets/casa-campo-2.jpg";
import casaCampo3 from "@/assets/casa-campo-3.jpg";

const photos = [
  { src: paraisoLago1, label: "Paraíso do Lago" },
  { src: paraisoLago2, label: "Paraíso do Lago" },
  { src: paraisoLago3, label: "Paraíso do Lago" },
  { src: paraisoLago4, label: "Paraíso do Lago" },
  { src: casaCampo1, label: "Refúgio Casa de Campo" },
  { src: casaCampo2, label: "Refúgio Casa de Campo" },
  { src: casaCampo3, label: "Refúgio Casa de Campo" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">Fotos</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">Galeria</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelected(i)}
            >
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-end">
                  <span className="font-body text-sm text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    {photo.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground"
            onClick={() => setSelected(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={photos[selected].src}
            alt={photos[selected].label}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
