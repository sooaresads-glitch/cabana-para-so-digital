import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como faço a reserva?",
    a: "A reserva é feita diretamente pelo WhatsApp. Escolha sua acomodação, entre em contato e confirme a data. O pagamento é 50% antecipado e 50% na chegada.",
  },
  {
    q: "Como chegar à Cabana Paraíso das Pedras?",
    a: "Estamos em Rio dos Cedros – SC, na Estrada Rio Bonito – Cedro Alto, dentro da Rota de Cicloturismo Vale Europeu. Enviaremos a localização exata por WhatsApp após a reserva.",
  },
  {
    q: "O que devo levar?",
    a: "Recomendamos roupas confortáveis, protetor solar, repelente, e disposição para relaxar! Roupa de banho também é uma boa pedida para aproveitar a barragem.",
  },
  {
    q: "Quantas pessoas cabem em cada acomodação?",
    a: "Varia conforme a opção: a Suíte para Casal atende 2 pessoas; a Cabana e o Paraíso do Lago acomodam até 4; o Refúgio Casa de Campo comporta até 5 pessoas.",
  },
  {
    q: "É pet friendly?",
    a: "Consulte-nos pelo WhatsApp! Avaliamos caso a caso para garantir conforto tanto para seu pet quanto para os demais hóspedes.",
  },
  {
    q: "Quais são os horários de check-in e check-out?",
    a: "Check-in na sexta-feira das 12h às 19h. Check-out no domingo até 18h.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">Tire suas dúvidas</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">Perguntas Frequentes</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <AccordionItem value={`item-${i}`} className="bg-card rounded-xl border border-border px-6">
                <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
