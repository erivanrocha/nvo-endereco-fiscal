import Image from "next/image";
import { WhatsAppCta } from "./WhatsAppCta";

export function Hero() {
  return (
    <section id="inicio" className="bg-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-center px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-[#332e2f]">Endereço Fiscal</p>
          <h1 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[#332e2f] sm:text-5xl lg:text-6xl">Tenha um endereço empresarial em Natal sem precisar manter um escritório físico.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#332e2f]/75 sm:text-lg">Endereço Fiscal para utilização no CNPJ, com recebimento de correspondências e gestão de encomendas no NVO Coworking.</p>
          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-4xl font-bold tracking-tight text-[#332e2f]">R$ 99<span className="text-lg font-semibold text-[#332e2f]/65">/mês</span></p>
            </div>
            <WhatsAppCta />
          </div>
        </div>
        <div className="relative min-h-[360px] lg:min-h-[650px]">
          <Image src="/images/fachada-1.svg" alt="Fachada do NVO Coworking" fill priority sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover object-center" />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F89F27]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
