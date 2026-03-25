import { motion } from "framer-motion";
import { MapPin, Sunrise, Lock, Leaf, Heart } from "lucide-react";

const items = [
  { icon: MapPin, title: "Localização única", desc: "Encravada na natureza de Rio dos Cedros, longe de tudo e perto do essencial." },
  { icon: Sunrise, title: "Vista para barragem", desc: "Acorde com o nascer do sol refletido nas águas calmas da barragem." },
  { icon: Lock, title: "Ambiente privativo", desc: "Exclusividade total. Sem vizinhos, sem interrupções — só você e a natureza." },
  { icon: Leaf, title: "Ideal para descanso", desc: "Projetado para quem busca desacelerar e recarregar as energias." },
  { icon: Heart, title: "Para casal e grupos", desc: "Opções que atendem desde escapadas românticas até encontros em família." },
];

const DifferentialsSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary-foreground/60 mb-3">Por que escolher</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">Nossos Diferenciais</h2>
          <div className="w-16 h-0.5 bg-primary-foreground/30 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-primary-foreground/10 hover:border-primary-foreground/25 transition-colors duration-300"
            >
              <item.icon className="w-8 h-8 mb-4 text-primary-foreground/70" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
