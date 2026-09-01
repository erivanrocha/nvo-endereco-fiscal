"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { WhatsAppCta } from "./WhatsAppCta";

const items = [
  { q: "Por que eu pagaria R$ 99 por um endereço?", a: "Porque o serviço atende a uma necessidade empresarial específica: ter um endereço empresarial em Natal para utilização no CNPJ, com recebimento de correspondências e gestão de encomendas, sem que você precise manter um escritório físico para essa finalidade. Além disso, clientes de Endereço Fiscal têm 35% de desconto no uso das salas de reuniões do NVO." },
  { q: "Posso usar o endereço da minha casa?", a: "Pode existir essa possibilidade dependendo do seu caso. A proposta do Endereço Fiscal é oferecer uma referência empresarial em Natal diferente do endereço residencial, para quem não quer utilizar a própria residência como endereço empresarial.", note: "Informações jurídicas, tributárias, cadastrais ou de privacidade sobre o uso do endereço residencial não são definidas nesta página e devem ser confirmadas para cada caso." },
  { q: "Preciso realmente de um escritório?", a: "Não é essa a proposta. O Endereço Fiscal atende à necessidade de ter um endereço empresarial em Natal sem necessariamente manter um escritório físico para essa finalidade. Se você precisar utilizar uma sala de reunião no NVO, clientes de Endereço Fiscal têm 35% de desconto no uso das salas de reuniões." },
  { q: "Minha empresa é de outra cidade.", a: "Essa é uma das situações para as quais a solução pode fazer sentido: sua empresa pode precisar estabelecer uma presença empresarial em Natal sem necessariamente manter um escritório físico na cidade. O serviço oferece um endereço em Natal para utilização no CNPJ.", note: "A adequação do endereço ao caso específico da empresa deve ser confirmada quando houver exigências particulares de atividade, município ou órgão." },
  { q: "O que exatamente está incluído?", a: "O que está confirmado na oferta é: endereço para utilização no CNPJ, recebimento de correspondências e gestão de encomendas. Clientes de Endereço Fiscal também têm 35% de desconto no uso das salas de reuniões do NVO.", note: "Demais condições comerciais e operacionais ainda não foram fornecidas." },
  { q: "O que acontece com minhas correspondências e encomendas?", a: "O serviço inclui recebimento de correspondências e gestão de encomendas.", note: "Detalhes sobre aviso, retirada, armazenamento, prazos, responsáveis e procedimentos operacionais ainda não foram documentados no briefing e não devem ser prometidos nesta página." },
  { q: "Posso confiar em colocar meu CNPJ nesse endereço?", a: "O Endereço Fiscal do NVO oferece endereço para utilização no CNPJ. A estrutura onde o serviço é oferecido está em imóvel próprio e possui licenças atualizadas. O NVO atua há 16 anos no mercado.", note: "Não é feita aqui afirmação de aprovação, garantia ou adequação automática para qualquer CNPJ, atividade ou órgão. Casos específicos devem ser confirmados no atendimento comercial." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#F89F27]">Dúvidas</p>
        <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.02em] text-[#332e2f] sm:text-4xl">Antes de falar com o NVO, talvez você esteja se perguntando:</h2>
        <div className="mt-9 divide-y divide-[#332e2f]/12 border-y border-[#332e2f]/12">
          {items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q}>
                <button type="button" className="flex w-full items-center justify-between gap-6 py-5 text-left" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : index)}>
                  <span className="text-base font-bold leading-7 text-[#332e2f] sm:text-lg">{item.q}</span>
                  <span className="shrink-0 text-2xl font-normal text-[#F89F27]" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <div className="pb-6 pr-10 text-base leading-7 text-[#332e2f]/70"><p>{item.a}</p>{item.note && <p className="mt-4 border-l-2 border-[#F89F27] pl-4 text-sm">[INFORMAÇÃO A VALIDAR] {item.note}</p>}</div>}
              </div>
            );
          })}
        </div>
        <div className="mt-9"><WhatsAppCta /></div>
      </div>
    </section>
  );
}
