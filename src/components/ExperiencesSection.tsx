import { motion } from "framer-motion";
import { Leaf, Fish, Bike, Flame, Users, Mountain } from "lucide-react";

const experiences = [
  { icon: Leaf, title: "Descanso na natureza", desc: "Tranquilidade absoluta em meio à mata nativa" },
  { icon: Fish, title: "Pescaria", desc: "Momentos relaxantes à beira da barragem" },
  { icon: Bike, title: "Cicloturismo", desc: "Rota Vale Europeu à sua porta" },
  { icon: Flame, title: "Fogueira", desc: "Noites estreladas ao redor do fogo" },
  { icon: Users, title: "Momentos em grupo", desc: "Espaço ideal para família e amigos" },
  { icon: Mountain, title: "Contemplação", desc: "Vista deslumbrante para a barragem" },
];

const ExperiencesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">O que te espera</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">Experiências Inesquecíveis</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center p-6 rounded-xl hover-lift group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <exp.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
