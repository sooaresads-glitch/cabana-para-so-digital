import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="localizacao" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">Onde estamos</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">Localização</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">Rio dos Cedros – SC</h3>
                <p className="font-body text-muted-foreground">Estrada Rio Bonito – Cedro Alto</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Rota de Cicloturismo Vale Europeu</p>
              </div>
            </div>

            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Em meio às montanhas catarinenses, a Cabana Paraíso das Pedras é um convite para desacelerar. Acesso fácil pela Rota Vale Europeu, com estradas sinalizadas e paisagens de tirar o fôlego durante todo o trajeto.
            </p>

            <a
              href="https://maps.google.com/?q=Rio+dos+Cedros+SC+Estrada+Rio+Bonito+Cedro+Alto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-lg hover:bg-nature-light transition-colors duration-300"
            >
              <Navigation className="w-4 h-4" />
              Como chegar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57108.53!2d-49.27!3d-26.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94defc5f7b4c8c1d%3A0x9c0e1c3b7a9e8c5d!2sRio%20dos%20Cedros%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Cabana Paraíso das Pedras"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
