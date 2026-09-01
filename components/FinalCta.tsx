import { WhatsAppCta } from "./WhatsAppCta";

export function FinalCta() {
  return (
    <section id="contato" className="bg-[#F89F27] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#332e2f]/65">Converse com o NVO</p>
        <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.02em] text-[#332e2f] sm:text-4xl">Ainda ficou alguma dúvida sobre o seu caso?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#332e2f]/75">Fale com um consultor pelo WhatsApp para esclarecer a adequação do Endereço Fiscal à sua empresa.</p>
        <div className="mt-8 flex justify-center"><WhatsAppCta className="bg-[#332e2f] text-white hover:brightness-110" /></div>
      </div>
    </section>
  );
}
