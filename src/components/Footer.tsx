const WHATSAPP_BASE = "https://wa.me/5527992799538";

const Footer = () => {
  return (
    <footer className="bg-foreground text-cream/80 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-display text-2xl font-semibold text-cream mb-4">Cabana Paraíso das Pedras</h3>
            <p className="font-body text-sm leading-relaxed">
              Seu refúgio em meio à natureza de Rio dos Cedros – SC. Conforto, exclusividade e paz para momentos inesquecíveis.
            </p>
          </div>

          <div>
            <h4 className="font-body text-sm tracking-[0.2em] uppercase text-cream/50 mb-4">Localização</h4>
            <p className="font-body text-sm leading-relaxed">
              Rio dos Cedros – SC<br />
              Estrada Rio Bonito – Cedro Alto<br />
              Rota de Cicloturismo Vale Europeu
            </p>
          </div>

          <div>
            <h4 className="font-body text-sm tracking-[0.2em] uppercase text-cream/50 mb-4">Contato</h4>
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Gostaria de mais informações sobre a Cabana Paraíso das Pedras.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-cream hover:text-cream/60 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.532-1.474A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-cream/40">
            © {new Date().getFullYear()} Cabana Paraíso das Pedras. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-cream/40">
            Site desenvolvido por{" "}
            <a
              href="https://wa.me/5527992799538"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-cream transition-colors underline underline-offset-2"
            >
              SKALLE GROUP
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
