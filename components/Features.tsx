import { Icon } from "./Icon";

const features = [
  { icon: "pin" as const, title: "Endereço para utilização no CNPJ", text: "Um endereço empresarial para utilização no CNPJ." },
  { icon: "mail" as const, title: "Recebimento de correspondências", text: "Suporte ao recebimento de correspondências destinadas ao endereço empresarial." },
  { icon: "package" as const, title: "Gestão de encomendas", text: "Gestão de encomendas recebidas no endereço." },
];

export function Features() {
  return (
    <section className="bg-[#f7f6f4] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#F89F27]">O serviço</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.02em] text-[#332e2f] sm:text-4xl">O que você encontra no Endereço Fiscal do NVO</h2>
          <p className="mt-5 text-lg leading-8 text-[#332e2f]/70">Uma solução objetiva para a necessidade de ter um endereço empresarial em Natal.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="border border-[#332e2f]/12 bg-white p-7 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center bg-[#F89F27] text-[#332e2f]"><Icon name={feature.icon} /></div>
              <h3 className="mt-6 text-xl font-bold leading-7 text-[#332e2f]">{feature.title}</h3>
              <p className="mt-3 leading-7 text-[#332e2f]/70">{feature.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 border border-[#F89F27]/60 bg-white p-7 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#332e2f]/60">Quando precisar de uma sala de reunião</p>
          <p className="mt-3 max-w-3xl text-xl font-bold leading-8 text-[#332e2f]">Clientes de Endereço Fiscal têm <span className="text-[#F89F27]">35% de desconto</span> no uso das salas de reuniões do NVO.</p>
          <p className="mt-3 max-w-3xl leading-7 text-[#332e2f]/70">Uma vantagem para quando você precisar utilizar uma sala de reunião no NVO, sem transformar esse benefício em promessa de disponibilidade ou de escritório próprio.</p>
        </div>
      </div>
    </section>
  );
}
