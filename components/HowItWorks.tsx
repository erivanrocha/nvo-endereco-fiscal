import { Icon } from "./Icon";
import { WhatsAppCta } from "./WhatsAppCta";

const steps = [["01","Clique no WhatsApp"],["02","Escolha a opção no menu automático"],["03","Converse com um consultor do NVO"]] as const;
export function HowItWorks() {
  return <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24"><div className="mx-auto max-w-6xl"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#F89F27]">Próximo passo</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-[#332e2f] sm:text-4xl">Quer saber se o Endereço Fiscal é adequado para sua empresa?</h2><p className="mt-4 text-base leading-7 text-[#332e2f]/70">O primeiro passo é conversar com um consultor do NVO pelo WhatsApp.</p></div>
    <div className="mt-10 grid gap-3 md:grid-cols-3">{steps.map(([number,text],i)=><div key={number} className="relative border-t-2 border-[#F89F27] bg-[#f7f6f4] p-6 sm:p-7"><span className="text-sm font-bold text-[#F89F27]">{number}</span><p className="mt-4 text-lg font-bold text-[#332e2f]">{text}</p>{i<2 && <span className="absolute right-5 top-7 hidden text-[#332e2f]/25 md:block"><Icon name="arrow"/></span>}</div>)}</div>
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"><WhatsAppCta/><p className="text-sm text-[#332e2f]/55">O atendimento comercial começa pelo WhatsApp, com menu automático e atendimento posterior de um consultor.</p></div>
  </div></section>;
}
