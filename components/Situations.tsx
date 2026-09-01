export function Situations() {
  return (
    <section className="bg-[#f7f6f4] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#F89F27]">Reconhecimento</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.02em] text-[#332e2f] sm:text-4xl">Duas situações diferentes. A mesma necessidade empresarial.</h2>
          <p className="mt-5 text-lg leading-8 text-[#332e2f]/70">Seja para estabelecer uma presença empresarial em Natal ou para não utilizar o endereço residencial como referência da empresa, a necessidade pode ser a mesma: ter um endereço empresarial adequado para o CNPJ.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="border border-[#332e2f]/12 bg-white p-7 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#F89F27]">Situação 1</p>
            <h3 className="mt-3 text-2xl font-bold text-[#332e2f]">Sua empresa está fora de Natal</h3>
            <p className="mt-4 leading-7 text-[#332e2f]/70">Você precisa estabelecer uma presença empresarial em Natal, mas não necessariamente precisa manter um escritório físico na cidade apenas para ter um endereço empresarial.</p>
          </article>
          <article className="border border-[#332e2f]/12 bg-white p-7 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#F89F27]">Situação 2</p>
            <h3 className="mt-3 text-2xl font-bold text-[#332e2f]">Você não quer usar seu endereço residencial</h3>
            <p className="mt-4 leading-7 text-[#332e2f]/70">Sua empresa ou atividade precisa de um endereço empresarial, mas você prefere não utilizar o endereço da sua residência como referência do negócio.</p>
          </article>
        </div>
        <div className="mt-8 border-l-4 border-[#F89F27] pl-5 sm:pl-6">
          <p className="text-lg font-semibold leading-8 text-[#332e2f]">São situações diferentes, mas a necessidade é a mesma: ter um endereço empresarial em Natal sem transformar essa necessidade em um escritório físico próprio.</p>
        </div>
      </div>
    </section>
  );
}
