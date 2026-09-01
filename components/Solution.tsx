export function Solution() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#F89F27]">A mesma solução</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.02em] text-[#332e2f] sm:text-4xl">A solução é ter um endereço empresarial sem assumir um escritório físico.</h2>
          <p className="mt-5 text-lg leading-8 text-[#332e2f]/70">O Endereço Fiscal do NVO oferece um endereço para utilização no CNPJ, com recebimento de correspondências e gestão de encomendas.</p>
        </div>
        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="border border-[#332e2f]/12 p-7 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#332e2f]/55">Necessidade</p>
            <p className="mt-3 text-xl font-semibold leading-8 text-[#332e2f]">Ter uma referência empresarial em Natal sem necessariamente manter um escritório físico ou utilizar o endereço residencial.</p>
          </div>
          <div className="flex items-center justify-center px-2 text-[#F89F27]" aria-hidden="true"><span className="text-3xl">→</span></div>
          <div className="bg-[#332e2f] p-7 text-white sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#F89F27]">Solução</p>
            <p className="mt-3 text-xl font-semibold leading-8">Endereço Fiscal do NVO</p>
            <p className="mt-3 leading-7 text-white/70">Endereço para utilização no CNPJ, recebimento de correspondências e gestão de encomendas.</p>
          </div>
        </div>
        <p className="mt-8 text-xl font-bold text-[#332e2f]">É a mesma solução para situações diferentes.</p>
      </div>
    </section>
  );
}
