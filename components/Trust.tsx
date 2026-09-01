import Image from "next/image";

const proofs = [
  { value: "16 anos", label: "de mercado" },
  { value: "Imóvel próprio", label: "estrutura do NVO" },
  { value: "Licenças atualizadas", label: "do imóvel" },
];

export function Trust() {
  return (
    <section className="bg-[#332e2f] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <div className="relative min-h-[360px] overflow-hidden sm:min-h-[480px]">
          <Image src="/images/fachada-2.svg" alt="Estrutura do NVO Coworking" fill sizes="(max-width: 1023px) 100vw, 45vw" className="object-cover object-center" />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F89F27]" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#F89F27]">Por que confiar no NVO</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-4xl">Um endereço empresarial também precisa transmitir segurança.</h2>
          <p className="mt-5 text-lg leading-8 text-white/70">Por isso, a oferta vem de uma estrutura real, mantida por uma empresa com 16 anos de mercado.</p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {proofs.map((proof) => (
              <div key={proof.value} className="border-l-2 border-[#F89F27] pl-4">
                <p className="text-xl font-bold">{proof.value}</p>
                <p className="mt-1 text-sm text-white/60">{proof.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-9 leading-7 text-white/70">Aqui, a confiança não depende de promessas exageradas. Ela começa por fatos sobre a empresa e a estrutura onde o serviço é oferecido.</p>
        </div>
      </div>
    </section>
  );
}
