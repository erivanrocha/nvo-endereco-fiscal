import { WhatsAppCta } from "./WhatsAppCta";

const steps = [
  { number: "1", title: "Clique no WhatsApp" },
  { number: "2", title: "Escolha a opção no menu automático" },
  { number: "3", title: "Converse com um consultor do NVO" },
];

export function HowItWorks() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#F89F27]">Próximo passo</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.02em] text-[#332e2f] sm:text-4xl">Quer saber se o Endereço Fiscal é adequado para sua empresa?</h2>
          <p className="mt-5 text-lg leading-8 text-[#332e2f]/70">O primeiro passo é conversar com um consultor do NVO pelo WhatsApp.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="border border-[#332e2f]/12 p-6 sm:p-7">
              <span className="flex h-10 w-10 items-center justify-center bg-[#F89F27] text-lg font-bold text-[#332e2f]">{step.number}</span>
              <p className="mt-5 text-lg font-bold leading-7 text-[#332e2f]">{step.title}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl leading-7 text-[#332e2f]/70">A página apresenta a solução, o que está confirmado no serviço e o valor. Se ainda existir alguma dúvida sobre o seu caso, o atendimento comercial começa pelo WhatsApp.</p>
        <p className="mt-3 max-w-3xl leading-7 text-[#332e2f]/70">Ao entrar em contato, você passa pelo menu automático e, após sua escolha, é atendido por um consultor.</p>
        <div className="mt-7"><WhatsAppCta /></div>
      </div>
    </section>
  );
}
