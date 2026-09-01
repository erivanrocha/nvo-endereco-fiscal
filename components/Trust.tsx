import Image from "next/image";
import { Icon } from "./Icon";

export function Trust() {
  const proofs = [["clock","16 anos de mercado","Uma trajetória de 16 anos de mercado."],["building","Imóvel próprio","O NVO funciona em imóvel próprio."],["check","Licenças atualizadas","O imóvel possui licenças atualizadas."]] as const;
  return <section className="bg-[#332e2f] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
    <div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#F89F27]">Por que confiar no NVO</p><h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Um endereço empresarial também precisa transmitir segurança.</h2><p className="mt-5 max-w-xl leading-7 text-white/70">Por isso, a oferta vem de uma estrutura real, mantida por uma empresa com 16 anos de mercado.</p><p className="mt-6 border-l-2 border-[#F89F27] pl-4 text-sm leading-6 text-white/60">Aqui, a confiança não depende de promessas exageradas. Ela começa por fatos sobre a empresa e a estrutura onde o serviço é oferecido.</p></div>
    <div className="grid gap-4 sm:grid-cols-3">{proofs.map(([icon,title,text]) => <article key={title} className="border border-white/12 bg-white/5 p-6"><Icon name={icon} className="text-[#F89F27]"/><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/65">{text}</p></article>)}</div>
    <div className="relative overflow-hidden rounded-lg lg:col-span-2"><Image src="/images/fachada-2.svg" alt="Outra vista da fachada do NVO Coworking" width={507} height={900} sizes="(max-width: 1023px) 100vw, 100%" className="h-56 w-full object-cover object-center sm:h-72 lg:h-80" /></div>
  </div></section>;
}
