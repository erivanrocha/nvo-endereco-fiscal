import { Icon } from "./Icon";
import { WhatsAppCta } from "./WhatsAppCta";

export function FinalCta() {
  return <section className="bg-[#F89F27] px-5 py-14 sm:px-8 lg:px-10"><div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div className="max-w-2xl"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#332e2f] text-[#F89F27]"><Icon name="message"/></div><h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#332e2f] sm:text-4xl">Quer saber se o Endereço Fiscal atende à sua empresa?</h2><p className="mt-4 leading-7 text-[#332e2f]/75">Converse com um consultor do NVO pelo WhatsApp, tire suas dúvidas e confirme a adequação do serviço ao seu caso.</p></div><div className="shrink-0"><WhatsAppCta className="bg-[#332e2f] text-white focus-visible:ring-[#332e2f]"/><p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.1em] text-[#332e2f]/60">Atendimento comercial pelo WhatsApp</p></div></div></section>;
}
