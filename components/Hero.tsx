import Image from "next/image";
import { Icon } from "./Icon";
import { WhatsAppCta } from "./WhatsAppCta";

export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-[#332e2f] text-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.02fr_0.98fr]">
        <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-10 lg:py-24">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#F89F27]">Endereço Fiscal</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.03] tracking-[-0.03em] sm:text-5xl lg:text-6xl">Tenha um endereço empresarial em Natal sem precisar manter um escritório físico.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">Endereço Fiscal para utilização no CNPJ, com recebimento de correspondências e gestão de encomendas no NVO Coworking.</p>
          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">A partir de</p><p className="mt-1 text-4xl font-bold tracking-tight text-[#F89F27]">R$ 99<span className="text-lg font-semibold text-white">/mês</span></p></div>
            <WhatsAppCta />
          </div>
          <div className="mt-9 grid max-w-xl grid-cols-1 gap-3 text-sm text-white/75 sm:grid-cols-3">
            <div className="flex items-center gap-2"><Icon name="pin" className="text-[#F89F27]"/><span>Endereço para utilização no CNPJ</span></div>
            <div className="flex items-center gap-2"><Icon name="mail" className="text-[#F89F27]"/><span>Recebimento de correspondências</span></div>
            <div className="flex items-center gap-2"><Icon name="package" className="text-[#F89F27]"/><span>Gestão de encomendas</span></div>
          </div>
        </div>
        <div className="relative min-h-[360px] lg:min-h-[650px]">
          <Image src="/images/fachada-1.svg" alt="Fachada do NVO Coworking" fill priority sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#332e2f]/25 to-transparent" />
          <div className="absolute bottom-5 left-5 rounded-md border border-white/20 bg-[#332e2f]/90 px-4 py-3 backdrop-blur-sm lg:bottom-8 lg:left-8"><p className="text-xs uppercase tracking-[0.14em] text-white/60">Endereço Fiscal</p><p className="mt-1 text-xl font-bold text-[#F89F27]">R$ 99/mês</p></div>
        </div>
      </div>
    </section>
  );
}
