import { motion } from "framer-motion";
import { CreditCard, Clock, CalendarCheck } from "lucide-react";

const ReservationInfoSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">Como funciona</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">Reservas</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
              <CreditCard className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Pagamento</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              50% antecipado na reserva<br />50% pago na chegada
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
              <CalendarCheck className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Check-in</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Sexta-feira<br />das 12h às 19h
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
              <Clock className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Check-out</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Domingo<br />até 18h
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationInfoSection;
