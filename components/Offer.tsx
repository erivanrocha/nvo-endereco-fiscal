import { Icon } from "./Icon";
import { WhatsAppCta } from "./WhatsAppCta";

export function Offer() {
  return (
    <section id="oferta" className="bg-[#f7f6f4] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid overflow-hidden border border-[#332e2f]/12 bg-white lg:grid-cols-[1fr_0.9fr]">
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#F89F27]">Oferta</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.02em] text-[#332e2f] sm:text-4xl">Endereço Fiscal por R$ 99/mês</h2>
            <p className="mt-5 text-lg leading-8 text-[#332e2f]/70">Uma solução objetiva para ter um endereço empresarial em Natal sem precisar manter um escritório físico para essa finalidade.</p>
            <ul className="mt-8 space-y-4">
              {[
                "Endereço para utilização no CNPJ",
                "Recebimento de correspondências",
                "Gestão de encomendas",
                "35% de desconto no uso das salas de reuniões do NVO para clientes de Endereço Fiscal",
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-[#332e2f]/80"><Icon name="check" className="mt-1 text-[#F89F27]" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center bg-[#332e2f] p-7 text-white sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/60">Investimento</p>
            <p className="mt-3 text-5xl font-bold tracking-[-0.03em] text-[#F89F27]">R$ 99</p>
            <p className="text-lg font-semibold text-white/75">/mês</p>
            <p className="mt-6 leading-7 text-white/70">O valor é apresentado de forma transparente. Para confirmar a adequação do serviço ao seu caso, converse com um consultor.</p>
            <div className="mt-7"><WhatsAppCta /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
