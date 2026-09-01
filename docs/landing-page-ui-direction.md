# Direção de Arte e UI — Landing Page Endereço Fiscal NVO

> **Fontes estratégicas:** `docs/landing-page-strategy.md`, `docs/landing-page-wireframe.md` e `docs/landing-page-copy.md`.
>
> **Status:** direção de arte e UI para implementação.
>
> **Escopo:** definir decisões visuais e de experiência antes da implementação React/CSS.
>
> **Regra:** esta direção não autoriza a criação de benefícios, funcionalidades, condições comerciais ou afirmações não confirmadas.

---

## 0. Nota sobre os ativos de marca disponíveis

Foram considerados os ativos visuais disponíveis no projeto/conversa, incluindo fotografias reais da fachada do NVO e referências visuais da própria landing.

As fotografias reais disponíveis mostram o imóvel/estrutura física do NVO e devem ser tratadas como ativos de prova, não como decoração genérica.

**O manual de identidade visual formal não foi localizado no repositório `nvo-endereco-fiscal` nem nos arquivos disponíveis para consulta nesta etapa.** A referência visual existente mostra uma identidade baseada visualmente em **azul-marinho, dourado/amarelo e verde**, além do logotipo NVO. Entretanto, **não serão inventados códigos HEX, fontes oficiais, espaçamentos de proteção ou regras formais do logotipo**.

Onde o manual formal for necessário para uma decisão exata, usar:

`[VALIDAR NO MANUAL]`

Antes da publicação, o manual oficial deve ser confrontado com esta direção.

---

# 1. Conceito visual

## Conceito: **estrutura real, decisão simples**

A página deve transmitir que o visitante não está diante de uma promessa digital abstrata. Está diante de um serviço empresarial oferecido por uma empresa que possui **estrutura física real, imóvel próprio e 16 anos de mercado**.

A direção visual deve combinar:

- sobriedade empresarial;
- clareza comercial;
- presença física;
- confiança;
- simplicidade;
- proximidade suficiente para tornar o WhatsApp uma continuação natural da experiência.

A estética não deve parecer uma startup recém-criada, um SaaS ou uma página de tecnologia.

### Princípio visual

**Fotografia real + tipografia forte + espaço em branco + elementos de marca contidos + informação comercial clara.**

A página deve parecer um produto comercial do próprio NVO, não uma peça publicitária independente que poderia pertencer a qualquer empresa.

---

# 2. Personalidade visual

A personalidade deve ser:

- **profissional**, sem aparência corporativa fria;
- **confiável**, sem linguagem visual defensiva;
- **contemporânea**, sem depender de tendências de design;
- **objetiva**, sem excesso de elementos;
- **real**, valorizando o imóvel e a estrutura existentes;
- **comercial**, porque a finalidade é conversão;
- **discreta**, evitando pressão artificial.

### O que evitar

- gradientes neon;
- glassmorphism excessivo;
- fundos 3D;
- ilustrações isométricas genéricas;
- mockups de computadores/celulares sem função;
- excesso de ícones;
- animações chamativas;
- selos como “oferta imperdível”;
- contadores regressivos;
- badges de escassez;
- estética de SaaS/fintech;
- fotos de pessoas de banco de imagens como protagonistas.

---

# 3. Paleta de cores

## Direção cromática

A referência visual disponível apresenta três famílias cromáticas principais:

1. **Azul-marinho NVO** — cor estrutural e institucional;
2. **Dourado/amarelo NVO** — cor de destaque e ênfase;
3. **Verde de conversão/WhatsApp** — utilizado exclusivamente onde a ação estiver associada ao WhatsApp.

A hierarquia deve ser:

**azul-marinho > branco/neutros > dourado > verde de WhatsApp.**

O verde não deve assumir o papel de cor institucional principal. Ele funciona como código visual da ação de conversa.

### Tokens necessários

- `brand-primary`: azul-marinho oficial — **[VALIDAR NO MANUAL]**
- `brand-accent`: dourado/amarelo oficial — **[VALIDAR NO MANUAL]**
- `surface`: branco — pode ser utilizado como neutro estrutural
- `surface-muted`: neutro muito claro — **[VALIDAR NO MANUAL]** caso o manual defina neutros
- `text-primary`: azul-marinho ou cor de texto oficial — **[VALIDAR NO MANUAL]**
- `text-secondary`: neutro de leitura — **[VALIDAR NO MANUAL]**
- `whatsapp`: verde oficial do botão/canal — utilizar referência oficial do WhatsApp ou token definido no sistema; não tratá-lo como cor de marca NVO

### Regra de contraste

Texto branco sobre azul-marinho deve ser reservado a áreas em que o contraste seja adequado.

Dourado deve funcionar como **ênfase**, não como cor para grandes blocos de texto corrido.

---

# 4. Tipografia e hierarquia

O manual oficial não foi localizado. Portanto, a família tipográfica institucional deve ser:

**[VALIDAR NO MANUAL]**

Até essa validação, a implementação deve preservar uma arquitetura tipográfica simples e contemporânea, sem misturar várias famílias.

## Hierarquia recomendada

### H1

- grande;
- pesado/semi-pesado;
- poucas linhas;
- máximo contraste;
- deve ser o principal elemento verbal da primeira tela.

### H2

- forte, mas claramente subordinado ao H1;
- utilizado para marcar a evolução da narrativa.

### H3

- usado em itens, objeções e microblocos;
- evitar excesso de peso tipográfico.

### Corpo

- leitura confortável em mobile;
- largura de linha controlada;
- alto contraste;
- parágrafos curtos.

### Preço

O preço terá hierarquia própria e deverá ser visualmente dominante dentro da seção de oferta, mas não poderá competir com o H1 no Hero.

---

# 5. Uso correto do logotipo

O logotipo NVO deve funcionar como elemento de identificação, não como elemento decorativo.

## Regras

- utilizar o arquivo oficial do logotipo;
- não redesenhar o símbolo;
- não alterar proporções;
- não aplicar efeitos;
- não distorcer;
- não inclinar;
- não adicionar sombras ao logotipo;
- respeitar área de proteção definida no manual;
- utilizar a versão adequada ao fundo.

### Versões

- logotipo sobre fundo claro: **[VALIDAR NO MANUAL]**;
- logotipo sobre fundo azul-marinho: **[VALIDAR NO MANUAL]**;
- versão monocromática: **[VALIDAR NO MANUAL]**.

### Header

O logo deve aparecer no canto esquerdo do header, com presença suficiente para identificar a marca sem ocupar espaço excessivo.

No mobile, manter o logo visível e reduzir a navegação ao essencial.

---

# 6. Tratamento das fotografias reais

As fotografias reais do NVO são parte central da estratégia visual porque comprovam que o serviço está ligado a uma estrutura física existente.

As fotos disponíveis incluem imagens da fachada/edifício do NVO. fileciteturn35file0L1-L6 fileciteturn35file1L7-L12

## Princípios

- priorizar fotografia real do imóvel;
- não substituir por banco de imagens;
- não criar imagens artificiais do imóvel;
- não aplicar filtros que descaracterizem a fotografia;
- correção leve de exposição/contraste pode ser feita quando necessária;
- preservar elementos arquitetônicos reconhecíveis;
- não cortar o edifício de forma que pareça outro local.

## Hero

A fachada deve ser uma das imagens protagonistas.

A composição pode usar uma fotografia real em grande área, com camada azul-marinho discreta quando necessária para garantir legibilidade do texto.

O overlay deve ser suficientemente leve para que o imóvel continue reconhecível.

## Outras aparições

Uma segunda fotografia pode aparecer na seção de confiança, preferencialmente mostrando outro ângulo da estrutura para reforçar que não se trata da mesma imagem repetida.

A fotografia histórica disponível também pode ser utilizada como contexto institucional se houver uma função narrativa clara, mas não deve ser usada para representar a aparência atual do imóvel sem contextualização. fileciteturn35file3L19-L24

---

# 7. Composição do Hero

## Objetivo

Fazer o visitante compreender em poucos segundos:

- Endereço Fiscal;
- endereço empresarial em Natal;
- não necessariamente manter escritório físico;
- R$ 99/mês;
- próximo passo: WhatsApp.

## Estrutura desktop

```text
┌──────────────────────────────────────────────────────────────┐
│ LOGO NVO                         navegação mínima / CTA       │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  TEXTO PRINCIPAL                    FOTOGRAFIA REAL DO NVO   │
│                                                              │
│  [Endereço Fiscal]                                          │
│                                                              │
│  H1                                                          │
│  Tenha um endereço empresarial                               │
│  em Natal sem precisar manter                                │
│  um escritório físico.                                        │
│                                                              │
│  Subheadline                                                  │
│                                                              │
│  R$ 99/mês                                                    │
│                                                              │
│  [Falar com um consultor pelo WhatsApp]                      │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

## Composição

A fotografia deve ocupar aproximadamente metade da composição em desktop, podendo avançar visualmente para o fundo do Hero.

O texto deve permanecer em área de alto contraste.

Não adicionar quatro ou cinco selos de benefícios no Hero. Eles serão explicados depois.

## Mobile

A prioridade deve ser:

1. identificação do serviço;
2. headline;
3. subheadline;
4. preço;
5. CTA;
6. fotografia real.

A fotografia pode aparecer abaixo do bloco textual ou como fundo, desde que a legibilidade seja preservada.

---

# 8. Tratamento das seções

A página deve alternar visualmente entre áreas claras e áreas de maior densidade institucional, mantendo continuidade narrativa.

## Seções claras

Usar branco/neutros para:

- reconhecimento das situações;
- explicação da solução;
- oferta detalhada;
- FAQ.

## Seções azuis

Usar azul-marinho institucional em momentos de:

- confiança;
- fechamento;
- reforço de marca.

Não transformar todas as seções em fundos coloridos. O branco é necessário para criar descanso visual e permitir que o azul tenha força quando reaparecer.

---

# 9. Situações de compra

A seção deve apresentar dois contextos visualmente equivalentes.

```text
[Duas situações diferentes]

┌─────────────────────────┐  ┌─────────────────────────┐
│ EMPRESA FORA DE NATAL   │  │ NÃO QUER USAR RESIDÊNCIA│
│                         │  │                         │
│ situação resumida       │  │ situação resumida       │
└─────────────────────────┘  └─────────────────────────┘

              ↓

       MESMA NECESSIDADE
              ↓

          ENDEREÇO FISCAL
```

### Regra de UI

Os cards não devem parecer planos diferentes.

Não usar:

- preços separados;
- botões separados;
- selos “opção 1/opção 2”;
- cores diferentes para cada público.

O design deve fazer os dois caminhos convergirem visualmente.

---

# 10. Seção da solução

Esta seção deve funcionar como uma ponte visual entre problema e produto.

### Direção

Usar uma composição centralizada ou em duas colunas:

```text
NECESSIDADE                         SOLUÇÃO

Endereço empresarial em Natal  →   Endereço Fiscal NVO

sem necessariamente manter         endereço para utilização
um escritório físico               no CNPJ + correspondências
                                    + encomendas
```

Evitar diagramas complexos. A relação deve ser entendida em poucos segundos.

---

# 11. O que o serviço oferece

Usar três itens principais, com ícones lineares simples e consistentes:

1. endereço para utilização no CNPJ;
2. recebimento de correspondências;
3. gestão de encomendas.

## Ícones

Preferir ícones simples, de traço uniforme e sem estética de biblioteca tecnológica excessivamente genérica.

A biblioteca escolhida para implementação deve permitir consistência de stroke e tamanho.

Não usar ícones como substitutos de explicação.

---

# 12. Benefício de 35% nas salas de reunião

Este benefício deve aparecer como **vantagem complementar**, e não como promessa de escritório.

## Direção visual

Criar um destaque menor conectado à seção de benefícios:

```text
┌───────────────────────────────────────────────────────┐
│  QUANDO PRECISAR DE UMA SALA DE REUNIÃO               │
│                                                       │
│  Clientes de Endereço Fiscal têm                      │
│  35% de desconto no uso das salas                     │
│  de reuniões do NVO.                                  │
└───────────────────────────────────────────────────────┘
```

### Ênfase

**35%** pode receber a cor dourada oficial ou outra cor de destaque prevista no manual.

Não usar selo de “desconto imperdível”.

Não sugerir disponibilidade de sala.

Não informar quantidade de horas, salas, horários, validade, cumulatividade ou condições de uso.

---

# 13. Credibilidade

A seção deve ser visualmente mais institucional.

## Composição recomendada

```text
                POR QUE CONFIAR NO NVO?

       [foto real do imóvel / estrutura]

  [16 anos]       [imóvel próprio]       [licenças]
```

Os três fatos devem ter peso semelhante.

### 16 anos

Apresentar como fato, sem superlativo.

### Imóvel próprio

Apresentar como evidência de estrutura real.

### Licenças atualizadas

Apresentar como fato confirmado, mantendo possibilidade de comprovação posterior.

### Fotografia

Usar fotografia real do imóvel para conectar visualmente as provas à estrutura física. As fachadas fornecidas mostram o edifício de forma inequívoca. fileciteturn35file0L1-L6 fileciteturn35file1L7-L12

---

# 14. Como funciona

A interface deve ser extremamente simples porque o fluxo confirmado é apenas comercial:

```text
[1] WhatsApp
      ↓
[2] Menu automático
      ↓
[3] Consultor
```

Usar três etapas horizontais no desktop e verticais no mobile.

Não criar ícones ou etapas para:

- documentação;
- aprovação;
- pagamento;
- ativação;
- prazo;
- contrato;

até que esses pontos sejam confirmados.

---

# 15. Oferta e preço

A oferta deve ser uma das áreas visualmente mais fortes da página.

## Card de oferta

```text
┌────────────────────────────────────────────────────────┐
│ ENDEREÇO FISCAL NVO                                    │
│                                                        │
│ R$ 99/mês                                               │
│                                                        │
│ • Endereço para utilização no CNPJ                     │
│ • Recebimento de correspondências                      │
│ • Gestão de encomendas                                  │
│                                                        │
│ 35% de desconto no uso das salas de reuniões           │
│ para clientes de Endereço Fiscal                       │
│                                                        │
│ [ FALAR COM UM CONSULTOR PELO WHATSAPP ]               │
└────────────────────────────────────────────────────────┘
```

## Hierarquia

1. nome do serviço;
2. preço;
3. o que está incluído;
4. benefício complementar;
5. CTA.

### Preço

`R$ 99` deve ser o elemento numérico dominante.

`/mês` deve ser claramente associado ao preço, mas com hierarquia menor.

Não usar preço riscado, “de/por”, desconto de preço ou urgência porque nenhuma dessas condições foi confirmada.

---

# 16. Botões e CTAs

## CTA principal

**Falar com um consultor pelo WhatsApp**

Todos os CTAs principais devem ter a mesma função.

## Forma

- botão com cantos moderadamente arredondados;
- altura confortável para toque;
- texto curto e legível;
- peso tipográfico médio/semi-bold;
- ícone do WhatsApp apenas se aprovado/adequado ao sistema visual;
- verde reservado ao CTA associado ao WhatsApp.

### Não fazer

- botões gigantes que dominem a tela inteira;
- efeitos pulsantes;
- animação contínua;
- setas excessivas;
- textos como “última chance”;
- contadores.

## Estados

Implementar visualmente:

- default;
- hover;
- focus;
- active;
- disabled, caso tecnicamente necessário.

O estado de focus precisa ser visível para acessibilidade.

---

# 17. Estratégia visual para o WhatsApp

O WhatsApp deve ser reconhecido como **o próximo passo da decisão**, não como um elemento promocional invasivo.

## Desktop

CTAs aparecem em pontos estratégicos:

1. Hero;
2. oferta;
3. CTA final.

O header pode conter um CTA de WhatsApp, desde que sua presença não transforme o header em uma faixa publicitária.

## Mobile

Recomenda-se um **CTA persistente inferior**, porque o canal de conversão é único e a página é longa.

### Comportamento recomendado

- fixado na parte inferior;
- altura compacta;
- respeitar safe area do dispositivo;
- não cobrir conteúdo importante;
- manter distância visual do conteúdo da página;
- não aparecer como popup;
- não pulsar;
- desaparecer ou reduzir quando um CTA equivalente estiver imediatamente visível, se tecnicamente simples.

### Justificativa

Como o objetivo da página é iniciar uma conversa comercial e o visitante pode decidir em diferentes pontos da rolagem, o CTA persistente reduz a necessidade de voltar ao Hero.

A persistência deve ser **discreta** para não produzir sensação de pressão.

---

# 18. Header e navegação

A landing não deve possuir navegação institucional extensa.

## Desktop

```text
[LOGO]       O que é | Benefícios | Por que NVO | Dúvidas     [WhatsApp]
```

Os nomes finais das âncoras devem seguir a copy efetivamente implementada.

### Regra

As âncoras devem levar a pontos da própria página.

Não incluir links externos que desviem da jornada, salvo requisitos legais ou institucionais indispensáveis.

## Mobile

Preferir:

```text
[LOGO]                         [WhatsApp]
```

Se a navegação por âncoras for necessária, utilizar menu compacto. Não transformar o mobile em um menu institucional.

---

# 19. Espaçamento e ritmo visual

A página deve respirar.

## Princípios

- seções com bastante espaço vertical;
- largura de conteúdo limitada;
- textos não ocupam toda a largura disponível;
- cards não devem ficar encostados;
- evitar excesso de divisórias;
- usar alternância de superfícies para criar ritmo.

### Escala

A implementação deve adotar uma escala consistente de espaçamento baseada em múltiplos pequenos, preferencialmente 4 ou 8 px.

Valores exatos podem ser definidos no sistema de design durante a implementação, sem quebrar a proporção entre seções.

### Container

Desktop: conteúdo centralizado com largura máxima confortável para leitura e composição.

Mobile: padding lateral consistente, evitando texto colado nas bordas.

---

# 20. Cards, bordas e sombras

## Cards

Os cards devem ser discretos.

### Recomendação

- fundo branco sobre superfície levemente contrastante;
- borda fina ou sombra muito suave;
- raio moderado;
- padding generoso;
- sem efeitos de elevação exagerados.

## Sombras

Sombras devem comunicar separação de superfícies, não profundidade 3D.

Evitar:

- sombras muito escuras;
- múltiplas sombras;
- glow;
- neon.

## Bordas

Preferir bordas neutras e discretas.

Não usar bordas douradas em todos os cards. O dourado precisa continuar sendo um sinal de ênfase.

---

# 21. Mobile-first

A implementação deve ser projetada primeiro para largura móvel.

## Prioridades

1. leitura;
2. compreensão;
3. toque;
4. velocidade;
5. fotografia;
6. decoração.

### Hero

O texto vem antes da imagem se a imagem competir com a compreensão da proposta.

### Cards

Os dois contextos de compra passam de duas colunas para uma sequência vertical.

### Benefícios

Os três itens passam a uma coluna ou grid de duas colunas somente se a leitura continuar confortável.

### Oferta

O preço deve aparecer sem necessidade de rolagem dentro do card.

### FAQ

Uma coluna, com áreas de toque amplas.

### CTA sticky

Deve considerar a área inferior do navegador/dispositivo.

---

# 22. Desktop

Em desktop, o design deve usar espaço para criar uma experiência premium, mas sem transformar o serviço em algo artificialmente sofisticado.

## Largura

A composição deve utilizar um container central e grids assimétricos somente quando ajudarem a narrativa.

## Hero

Texto e fotografia podem formar uma composição 45/55 ou 50/50.

## Situações

Duas colunas equilibradas.

## Credibilidade

Imagem + três provas podem funcionar em composição horizontal.

## Oferta

Card central ou composição em duas áreas:

- preço/serviço;
- itens confirmados + CTA.

---

# 23. Uso das fotografias na jornada de conversão

As imagens devem cumprir funções diferentes em momentos diferentes.

## 1. Hero — reconhecimento + realidade

**Objetivo:** mostrar imediatamente que existe uma estrutura física real por trás da oferta.

Usar uma fotografia de fachada atual e reconhecível.

## 2. Confiança — prova

**Objetivo:** reforçar a materialidade do NVO quando o visitante pergunta “posso confiar?”.

Usar outro enquadramento real do imóvel, se disponível.

## 3. Próximo passo — não repetir fotografia

No fechamento, preferir composição tipográfica e de marca em vez de repetir a mesma fachada.

### Regra

A fotografia não deve ser usada simplesmente porque “preenche espaço”. Cada aparição precisa responder a uma pergunta da jornada.

---

# 24. Tratamento de imagens e performance

Como a página deve ser rápida:

- utilizar `next/image`;
- definir dimensões/aspect ratio corretamente;
- utilizar versões otimizadas das fotografias;
- evitar imagens maiores que o necessário;
- priorizar a imagem do Hero adequadamente;
- usar `loading` apropriado para imagens abaixo da dobra;
- não carregar várias fotografias em alta resolução simultaneamente.

As fotografias originais devem ser preservadas como fonte, e versões otimizadas podem ser derivadas para web.

---

# 25. Acessibilidade visual

A implementação deve garantir:

- contraste adequado;
- foco visível;
- áreas de toque adequadas;
- headings sem saltos semânticos;
- texto não incorporado em imagens;
- alt text descritivo para fotografias relevantes;
- decorativas com alt vazio quando apropriado;
- não depender somente da cor para transmitir informação.

O preço, por exemplo, deve continuar compreensível mesmo sem distinção cromática.

---

# 26. Continuidade narrativa na UI

A interface deve mudar visualmente o suficiente para evitar monotonia, mas não tanto que cada seção pareça pertencer a uma página diferente.

### Ritmo recomendado

```text
HERO
↓
CLARO — reconhecimento
↓
CLARO — solução
↓
CLARO — o que recebe
↓
AZUL — confiança
↓
CLARO — como funciona
↓
DESTAQUE — oferta/preço
↓
CLARO — objeções
↓
AZUL — CTA final
↓
RODAPÉ
```

O visitante deve sentir progressão, não mudança de site.

---

# 27. Elementos que não devem ser adicionados

Sem nova validação, não adicionar:

- depoimentos;
- avaliações em estrelas;
- números de clientes;
- logos de clientes;
- selos de certificação;
- mapas interativos;
- garantias;
- promessas de aprovação;
- resultados cadastrais;
- argumentos tributários;
- benefícios não confirmados;
- prazo de ativação;
- condições de pagamento;
- fidelidade;
- política de cancelamento;
- documentação exigida;
- quantidade de horas de sala;
- disponibilidade de sala;
- regras de correspondências/encomendas;
- contadores;
- escassez;
- descontos adicionais.

---

# 28. Checklist de fidelidade visual

Antes de aprovar a implementação, verificar:

### Marca

- [ ] O logotipo utilizado é o arquivo oficial.
- [ ] Proporções do logo estão preservadas.
- [ ] Área de proteção segue o manual.
- [ ] Versão do logo sobre cada fundo está correta.
- [ ] Cores institucionais correspondem ao manual.
- [ ] Tipografia corresponde ao manual ou está explicitamente aprovada.
- [ ] Nenhuma cor nova foi introduzida como se fosse cor oficial da marca.

### Fotografia

- [ ] As imagens principais são fotografias reais do NVO.
- [ ] Não há banco de imagens substituindo o imóvel real.
- [ ] Não há imagem gerada artificialmente representando o NVO.
- [ ] As fotos não foram alteradas de forma que descaracterize o imóvel.
- [ ] O tratamento de cor é discreto.
- [ ] A fotografia do Hero continua reconhecível.

### UI

- [ ] Azul-marinho é a cor estrutural predominante.
- [ ] Dourado é usado como ênfase, não como preenchimento indiscriminado.
- [ ] Verde está reservado à ação WhatsApp.
- [ ] Cards são discretos.
- [ ] Sombras são suaves.
- [ ] Bordas não são excessivas.
- [ ] A escala de espaçamento é consistente.
- [ ] A interface não parece um template genérico.

### Conversão

- [ ] O CTA principal é sempre a conversa pelo WhatsApp.
- [ ] Não existem CTAs concorrentes com objetivos diferentes.
- [ ] R$ 99/mês está claramente visível.
- [ ] O benefício de 35% aparece sem condições inventadas.
- [ ] O CTA sticky mobile não bloqueia conteúdo.
- [ ] O CTA não usa pressão artificial.

### Conteúdo

- [ ] Nenhuma funcionalidade não confirmada foi adicionada.
- [ ] Nenhum benefício jurídico/tributário não validado foi adicionado.
- [ ] IPTU não aparece como argumento.
- [ ] Não há depoimentos ou números não fornecidos.
- [ ] Não há garantias ou promessas.

---

# 29. Riscos de design

## Risco 1 — parecer uma landing genérica de IA

**Causa:** excesso de gradientes, cards, ícones, efeitos e layouts previsíveis.

**Prevenção:** fotografia real do NVO como ativo principal + tipografia forte + composição simples.

## Risco 2 — parecer SaaS/fintech

**Causa:** excesso de roxo, azul elétrico, glassmorphism, dashboards e elementos abstratos.

**Prevenção:** usar as cores e elementos reais da marca e mostrar o imóvel físico.

## Risco 3 — parecer um anúncio agressivo

**Causa:** preço enorme em todos os lugares, botões pulsantes, urgência e escassez.

**Prevenção:** preço transparente, mas integrado à hierarquia racional da oferta.

## Risco 4 — parecer um coworking genérico

**Causa:** fotos genéricas de pessoas trabalhando, notebooks e mesas como protagonistas.

**Prevenção:** fotografias reais da estrutura do NVO e foco no serviço de Endereço Fiscal.

## Risco 5 — transformar o desconto de 35% em promessa de escritório

**Causa:** fotografia de sala + linguagem como “seu escritório” ou “sala garantida”.

**Prevenção:** apresentar o desconto apenas como benefício para quando houver necessidade de utilização de sala de reunião.

## Risco 6 — excesso de azul

**Causa:** aplicar azul-marinho em todas as seções.

**Prevenção:** alternância com superfícies claras e uso do azul em momentos de confiança e fechamento.

## Risco 7 — excesso de ícones

**Causa:** tentar transformar cada frase em um pictograma.

**Prevenção:** ícones apenas quando facilitarem escaneabilidade.

## Risco 8 — aparência antiga por excesso de elementos institucionais

**Causa:** blocos muito densos, textos pequenos, muitas linhas e navegação extensa.

**Prevenção:** linguagem visual contemporânea, espaço em branco e uma única ação de conversão.

## Risco 9 — perder autenticidade da fotografia

**Causa:** overlays fortes, recortes exagerados ou tratamento artificial.

**Prevenção:** imagem real continua reconhecível e serve à narrativa.

---

# 30. Especificação visual resumida para implementação

```text
MARCA
NVO real, não reinterpretação.

CORES
Azul-marinho = estrutura
Dourado = ênfase
Verde = WhatsApp
Neutros = descanso
Códigos exatos = VALIDAR NO MANUAL

TIPOGRAFIA
Uma família principal + pesos distintos.
Família oficial = VALIDAR NO MANUAL.

IMAGENS
Fotografia real do imóvel como prova.
Sem banco de imagens como protagonista.

LAYOUT
Mobile-first.
Container central.
Muito espaço em branco.
Grids simples.

CARDS
Poucos, limpos, borda/sombra discreta.

CTA
Um objetivo: WhatsApp.

PREÇO
R$ 99/mês, transparente e destacado.

BENEFÍCIO
35% de desconto em salas de reuniões para clientes de Endereço Fiscal.
Sem condições inventadas.

NARRATIVA VISUAL
Reconhecimento → adequação → compreensão → concretização → confiança →
redução de incerteza → preço → objeções → conversão.
```

---

# 31. Decisões bloqueadas até validação do manual

As seguintes decisões não devem ser inventadas durante a implementação:

1. códigos HEX oficiais da marca;
2. família tipográfica oficial;
3. pesos permitidos da tipografia;
4. versões oficiais do logotipo;
5. área de proteção do logotipo;
6. tamanho mínimo do logotipo;
7. aplicações sobre fundos;
8. eventuais padrões gráficos oficiais;
9. iconografia oficial, se existir;
10. regras de uso do dourado/amarelo;
11. regras de uso de cores auxiliares.

Até receber o manual, utilizar os papéis cromáticos e as regras de composição desta direção, marcando as decisões dependentes do manual com `[VALIDAR NO MANUAL]`.

---

# 32. Direção final

A landing deve parecer uma **extensão digital do NVO**, não uma campanha publicitária genérica.

O visitante deve perceber visualmente uma sequência simples:

**“Existe uma necessidade → existe uma solução objetiva → existe uma estrutura real por trás dela → o preço é claro → se eu tiver dúvidas, posso conversar com um consultor.”**

A fotografia real do imóvel prova presença física. O azul-marinho sustenta a identidade institucional. O dourado orienta a atenção. O verde identifica o WhatsApp. O espaço em branco reduz ruído. O preço transparente reduz desconfiança. E a repetição controlada do CTA conduz à conversa sem pressão.

A regra de ouro da implementação é:

> **Menos efeitos. Mais realidade. Menos propaganda. Mais clareza. Mais NVO.**
