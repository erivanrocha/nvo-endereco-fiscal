import { Icon } from "./Icon";

const items = [
  ["pin", "Endereço para utilização no CNPJ", "Um endereço empresarial para utilização no CNPJ."],
  ["mail", "Recebimento de correspondências", "Suporte ao recebimento de correspondências destinadas ao endereço empresarial."],
  ["package", "Gestão de encomendas", "Gestão de encomendas recebidas no endereço."],
] as const;

export function Features() {
  return <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24"><div className="mx-auto max-w-6xl">
    <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#F89F27]">O serviço</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-[#332e2f] sm:text-4xl">O que você encontra no Endereço Fiscal do NVO</h2><p className="mt-4 text-base leading-7 text-[#332e2f]/70">Uma solução objetiva para a necessidade de ter um endereço empresarial em Natal.</p></div>
    <div className="mt-10 grid gap-4 md:grid-cols-3">{items.map(([icon,title,text]) => <article key={title} className="rounded-lg border border-[#332e2f]/10 bg-white p-7 shadow-[0_8px_30px_rgba(51,46,47,0.05)]"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F89F27]/12 text-[#F89F27]"><Icon name={icon}/></div><h3 className="mt-6 text-lg font-bold text-[#332e2f]">{title}</h3><p className="mt-2 leading-7 text-[#332e2f]/65">{text}</p></article>)}</div>
    <article className="mt-5 grid gap-6 rounded-lg bg-[#332e2f] p-7 text-white sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.13em] text-[#F89F27]">Uma vantagem adicional</p><h3 className="mt-2 text-2xl font-bold">Quando precisar de uma sala de reunião</h3><p className="mt-3 max-w-2xl leading-7 text-white/75">Clientes de Endereço Fiscal têm <strong className="text-white">35% de desconto no uso das salas de reuniões do NVO.</strong></p></div><div className="rounded-md border border-[#F89F27]/35 px-6 py-5 text-center"><span className="block text-4xl font-bold text-[#F89F27]">35%</span><span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/65">de desconto</span></div></article>
  </div></section>;
}
