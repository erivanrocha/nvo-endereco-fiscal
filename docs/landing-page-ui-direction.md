# Direção de Arte e UI — Landing Page Endereço Fiscal NVO

> **Fontes estratégicas:** `docs/landing-page-strategy.md`, `docs/landing-page-wireframe.md` e `docs/landing-page-copy.md`.
>
> **Referência de marca:** Manual de Identidade Visual do NVO e arquivo oficial do logotipo enviado ao projeto.
>
> **Status:** direção de arte e UI para implementação.
>
> **Escopo:** definir decisões visuais e de experiência antes da implementação React/CSS.
>
> **Regra:** esta direção não autoriza a criação de benefícios, funcionalidades, condições comerciais ou afirmações não confirmadas.

---

# 0. Princípio de fidelidade à marca

A landing page deve parecer inequivocamente pertencente ao **NVO Coworking**. A identidade visual não deve ser reinterpretada para seguir tendências de landing pages, SaaS ou startups.

O **Manual de Identidade Visual do NVO** é a referência normativa para a marca. O arquivo oficial do logotipo fornecido ao projeto deve ser utilizado como ativo de marca.

O manual apresenta a marca em duas composições:

- **versão vertical — uso preferencial**;
- **versão horizontal — indicada quando a versão vertical apresentar dificuldades de aplicação**. fileciteturn42file0L14-L14

A direção estratégica e de UX definida anteriormente permanece válida. A atualização deste documento corrige apenas as decisões visuais que estavam em conflito com o manual.

---

# 1. Conceito visual

## Conceito: **estrutura real, decisão simples**

A página deve transmitir que o visitante está diante de um serviço empresarial oferecido por uma empresa com **estrutura física real, imóvel próprio e 16 anos de mercado**.

A direção visual deve combinar:

- sobriedade empresarial;
- clareza comercial;
- presença física;
- confiança;
- simplicidade;
- proximidade suficiente para tornar o WhatsApp uma continuação natural da experiência.

### Princípio visual

**Fotografia real + tipografia LEIXO + identidade NVO + espaço em branco + informação comercial clara.**

A estética não deve parecer uma startup recém-criada, um SaaS, uma fintech ou uma página genérica de coworking.

---

# 2. Personalidade visual

A personalidade deve ser:

- **profissional**, sem aparência corporativa fria;
- **confiável**, sem linguagem visual defensiva;
- **contemporânea**, sem depender de tendências;
- **objetiva**, sem excesso de elementos;
- **real**, valorizando o imóvel e a estrutura existentes;
- **comercial**, porque a finalidade é conversão;
- **discreta**, evitando pressão artificial.

### Evitar

- estética genérica de SaaS/fintech;
- gradientes neon;
- glassmorphism como linguagem dominante;
- ilustrações isométricas genéricas;
- mockups sem função;
- excesso de ícones;
- animações chamativas;
- contadores regressivos;
- escassez artificial;
- selos promocionais;
- fotos de banco de imagens como protagonistas.

---

# 3. Paleta de cores — conforme o Manual NVO

A orientação anterior que utilizava **azul-marinho** como cor estrutural está **revogada**.

O manual oficial define as cores institucionais da marca como:

- **Amarelo — Pantone 715 C**;
- **Cinza — Pantone 440 C**. fileciteturn42file0L15-L15

O manual apresenta também referências CMYK e RGB para reprodução das cores e orienta que a precisão seja preservada. fileciteturn42file0L15-L15

## Hierarquia cromática da interface

1. **Cinza institucional NVO** — cor estrutural e de contraste;
2. **Amarelo institucional NVO** — destaque e identificação visual;
3. **Branco/neutros** — áreas de respiro e leitura;
4. **Verde do WhatsApp** — exclusivamente como cor funcional do canal de conversão.

O verde do WhatsApp **não integra a identidade institucional do NVO**.

### Regra

O amarelo deve funcionar como elemento de identidade e ênfase. Não deve ser utilizado como cor dominante para grandes blocos de texto corrido.

O cinza deve fornecer estrutura e contraste.

Não criar uma terceira cor institucional para substituir ou complementar as cores definidas no manual.

### Reprodução digital

Na implementação, os valores digitais devem ser obtidos diretamente das referências CMYK/RGB do manual, sem aproximações arbitrárias. fileciteturn42file0L15-L15

---

# 4. Tipografia

## Família oficial

A família tipográfica definida para a identidade visual do NVO Coworking é **LEIXO**. O manual apresenta sua utilização em textos, anúncios publicitários, cartazes, títulos e textos de formulários. fileciteturn42file0L16-L16

A implementação deve utilizar o arquivo/licença de LEIXO disponível e autorizado para o projeto.

Se houver necessidade de escolher uma variante específica não estabelecida pelos materiais fornecidos, usar **[VALIDAR NO MANUAL]** em vez de inferir.

## Hierarquia

### H1

- maior elemento tipográfico da página;
- forte;
- poucas linhas;
- alto contraste;
- prioridade máxima no Hero.

### H2

- forte, subordinado ao H1;
- marca cada mudança relevante da narrativa.

### H3

- utilizado em cards, benefícios e objeções;
- evitar excesso de peso.

### Corpo

- leitura confortável em mobile;
- parágrafos curtos;
- largura de linha controlada;
- alto contraste.

### Preço

O preço terá hierarquia própria e será dominante dentro da oferta, sem competir com o H1 no Hero.

---

# 5. Uso do logotipo

O arquivo oficial do logotipo enviado ao projeto deve ser usado na implementação.

O manual determina a preferência pela **versão vertical** e permite a utilização da **versão horizontal quando a aplicação da vertical apresentar dificuldades**. fileciteturn42file0L14-L14

## Aplicação na landing

- priorizar a versão vertical quando a área disponível permitir;
- utilizar a horizontal quando a composição do espaço justificar a orientação prevista no manual;
- não redesenhar o símbolo;
- não alterar as proporções do arquivo oficial;
- não criar novas composições da marca.

## Versões monocromáticas

O manual prevê versões monocromáticas quando houver limitações quanto ao número de cores disponível em processos de impressão ou gravação. Apresenta versões vertical e horizontal monocromáticas em preto. fileciteturn42file0L17-L17

Para a landing digital, a versão institucional em cores deve ser a referência sempre que a aplicação for adequada; a versão monocromática só deve ser escolhida quando houver razão de aplicação compatível com a orientação do manual.

## Aplicação em negativo

O manual determina preferência pelo uso da marca em suas cores sobre fundo branco. Quando houver necessidade de aplicação sobre fundo, apresenta versões em negativo sobre cinza e amarelo. fileciteturn42file0L18-L18

A implementação deve usar somente versões oficiais do arquivo fornecido, sem criar combinações novas.

### Header

O logotipo deve ocupar posição de identificação clara no header, sem competir com o conteúdo principal.

No mobile, permanecer visível e a navegação deve ser reduzida ao essencial.

---

# 6. Tratamento das fotografias reais

As fotografias reais do NVO são ativos centrais da direção de arte. Elas sustentam visualmente a ideia de **estrutura física real** e devem aparecer como prova, não como decoração genérica.

O próprio manual apresenta aplicações da identidade em ambientes físicos de coworking. fileciteturn43file0L11-L13

## Princípios

- utilizar prioritariamente fotografias reais do NVO;
- não substituir as fotos por banco de imagens;
- não criar imagens artificiais do imóvel;
- não aplicar filtros que descaracterizem as fotos;
- correções técnicas leves de exposição/contraste são aceitáveis quando necessárias;
- preservar os elementos arquitetônicos reconhecíveis;
- não enquadrar de maneira que o imóvel pareça outro local.

## Hero

A fotografia real da estrutura deve ser protagonista ou co-protagonista do Hero.

Quando houver texto sobre imagem, o tratamento deve garantir legibilidade sem esconder ou descaracterizar a estrutura.

## Credibilidade

Utilizar outra fotografia/ângulo quando disponível, evitando repetir a mesma imagem apenas para preencher espaço.

Fotografia histórica só deve ser utilizada se houver contexto claro para não ser confundida com a aparência atual do imóvel.

---

# 7. Composição do Hero

## Objetivo

Permitir que o visitante compreenda rapidamente:

- que se trata de Endereço Fiscal;
- que a solução é um endereço empresarial em Natal;
- que não é necessário manter um escritório físico para a proposta apresentada;
- que o preço é R$ 99/mês;
- que o próximo passo é falar pelo WhatsApp.

## Desktop

```text
┌──────────────────────────────────────────────────────────────┐
│ LOGO NVO                                      CTA WhatsApp    │
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

A composição pode ser aproximadamente 50/50 entre conteúdo e fotografia, desde que a leitura e a fotografia permaneçam equilibradas.

Não sobrecarregar o Hero com todos os benefícios.

## Mobile

Prioridade:

1. identificação do serviço;
2. headline;
3. subheadline;
4. preço;
5. CTA;
6. fotografia real.

A fotografia pode aparecer abaixo do bloco textual ou integrada ao fundo, desde que o conteúdo continue legível.

---

# 8. Tratamento das seções

A página deve alternar áreas de respiro e áreas de maior densidade institucional, preservando a continuidade da narrativa.

### Base visual

**Cinza institucional + amarelo institucional + branco/neutros.**

### Áreas claras

Preferenciais para:

- reconhecimento das situações;
- explicação da solução;
- oferta;
- FAQ.

### Áreas institucionais

O cinza institucional pode criar maior densidade visual em:

- credibilidade;
- reforço da marca;
- fechamento.

O amarelo deve funcionar como destaque, não como preenchimento indiscriminado de seções.

Não utilizar azul-marinho como cor institucional da landing.

---

# 9. Situações de compra

Os dois públicos devem aparecer como contextos diferentes da mesma necessidade.

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

Os cards devem ter a mesma linguagem visual e não devem parecer planos ou produtos diferentes.

Não usar preços, botões ou cores diferentes para cada situação.

---

# 10. Seção da solução

A função visual é conectar as duas situações à mesma oferta.

```text
NECESSIDADE                         SOLUÇÃO

Endereço empresarial em Natal  →   Endereço Fiscal NVO

sem necessariamente manter         endereço para utilização
um escritório físico               no CNPJ + correspondências
                                    + encomendas
```

Evitar diagramas complexos. A relação deve ser entendida rapidamente.

---

# 11. O que o serviço oferece

Apresentar três itens principais, com linguagem visual consistente:

1. endereço para utilização no CNPJ;
2. recebimento de correspondências;
3. gestão de encomendas.

Ícones lineares simples podem ser usados, desde que sejam apenas apoio visual e não substituam o conteúdo.

Não criar ícones ou elementos que representem benefícios não confirmados.

---

# 12. Benefício de 35% nas salas de reunião

O benefício deve aparecer como **vantagem complementar**, sem sugerir que o cliente está contratando um escritório ou possui uma sala garantida.

```text
┌───────────────────────────────────────────────────────┐
│  QUANDO PRECISAR DE UMA SALA DE REUNIÃO               │
│                                                       │
│  Clientes de Endereço Fiscal têm                      │
│  35% de desconto no uso das salas                     │
│  de reuniões do NVO.                                  │
└───────────────────────────────────────────────────────┘
```

O número **35%** pode receber o amarelo institucional como elemento de destaque, respeitando contraste.

Não informar quantidade de horas, salas específicas, horários, validade, cumulatividade ou condições de utilização que não estejam documentadas.

Não usar selo de “desconto imperdível” ou linguagem de urgência.

---

# 13. Credibilidade

A seção deve funcionar como prova de existência e estrutura real.

```text
                POR QUE CONFIAR NO NVO?

       [fotografia real da estrutura]

  [16 anos]       [imóvel próprio]       [licenças]
```

Os três fatos devem ter peso visual equilibrado:

- **16 anos de mercado**;
- **imóvel próprio**;
- **licenças atualizadas**.

Não adicionar números, selos, certificações, depoimentos ou outras provas que não estejam confirmados.

---

# 14. Como funciona

A UI não deve inventar um processo de contratação.

O único fluxo comercial confirmado é:

**WhatsApp → menu automático → escolha do visitante → atendimento por consultor.**

A interface pode representar essa passagem de maneira simples, mas etapas anteriores ou posteriores da contratação devem permanecer como **[INFORMAÇÃO A VALIDAR]** até confirmação.

Não criar cronogramas, prazos ou número de etapas sem fonte.

---

# 15. Oferta e preço

A oferta deve ser visualmente simples e transparente.

```text
┌──────────────────────────────────────────┐
│            ENDEREÇO FISCAL                │
│                                           │
│               R$ 99                       │
│                 /mês                      │
│                                           │
│  Endereço para utilização no CNPJ         │
│  + recebimento de correspondências        │
│  + gestão de encomendas                   │
│                                           │
│ [Falar com um consultor pelo WhatsApp]   │
└──────────────────────────────────────────┘
```

O amarelo institucional pode destacar o preço, mantendo contraste e coerência com o manual.

Não utilizar:

- preço riscado;
- “de/por” sem condição confirmada;
- contador;
- escassez;
- falsa urgência;
- linguagem promocional agressiva.

---

# 16. FAQ e objeções

O FAQ deve ter aparência editorial e comercial, não de central de suporte.

Accordion é recomendado no mobile quando facilitar a leitura e reduzir a altura da página.

As perguntas devem seguir as objeções definidas na copy.

Quando uma resposta depender de regra comercial, jurídica ou operacional ainda não confirmada, o conteúdo deve permanecer como **[INFORMAÇÃO A VALIDAR]**.

---

# 17. CTAs e botões

## CTA principal

**Falar com um consultor pelo WhatsApp**

É a única ação de conversão principal da página.

## Estilo

O botão deve possuir:

- área clicável confortável;
- contraste alto;
- hierarquia clara;
- raio de borda moderado;
- tipografia LEIXO;
- estado de foco visível;
- estados de interação consistentes.

O verde do WhatsApp pode ser usado no botão ou em elementos diretamente associados ao canal, mas deve permanecer **funcional**, não institucional.

Não utilizar animação contínua, pulsação ou outros efeitos para forçar o clique.

---

# 18. Estratégia visual para o WhatsApp

O WhatsApp deve ser percebido como continuação natural da jornada, não como interrupção.

### Desktop

CTA no:

- Hero;
- seção de oferta;
- fechamento.

Evitar excesso de botões flutuantes.

### Mobile

Recomenda-se testar um CTA persistente discreto na parte inferior da tela.

Ele deve:

- não cobrir conteúdo;
- não bloquear FAQ;
- possuir área de respiro;
- não parecer pop-up;
- permanecer visualmente subordinado ao conteúdo.

A decisão final deve ser validada em aparelhos reais, especialmente em telas pequenas.

---

# 19. Espaçamento e ritmo visual

A página deve ter ritmo generoso, especialmente no mobile.

Princípios:

- uma ideia principal por área visual;
- seções claramente separadas;
- largura de leitura controlada;
- títulos com espaço suficiente;
- CTAs sem elementos concorrentes;
- evitar blocos longos de texto sem respiro.

Não criar espaço vazio apenas para aumentar artificialmente o comprimento da página.

---

# 20. Mobile-first

A implementação deve começar pelo mobile.

Prioridades:

1. headline legível;
2. preço imediatamente compreensível;
3. CTA fácil de tocar;
4. fotografia real preservada;
5. situações empilhadas;
6. benefícios em sequência vertical;
7. FAQ confortável para toque;
8. CTA persistente sem obstrução.

Não utilizar quebras de linha fixas no H1.

As fotografias devem ser enquadradas individualmente para preservar seus elementos relevantes.

---

# 21. Desktop

Em desktop, o espaço horizontal deve ser usado para criar relações entre texto e fotografia sem transformar a página em uma sequência de painéis desconectados.

### Grid

Preferir largura máxima de conteúdo consistente e colunas proporcionais.

O Hero pode utilizar aproximadamente 50/50 entre texto e fotografia.

Seções seguintes podem alternar entre:

- conteúdo centralizado;
- duas colunas;
- três itens em linha quando houver exatamente três elementos;
- imagem + conteúdo.

Não criar assimetria apenas por tendência estética.

---

# 22. Uso das fotografias na jornada de conversão

A fotografia acompanha a evolução da decisão:

### Hero — reconhecimento

A fotografia real estabelece imediatamente a existência de uma estrutura física.

### Credibilidade — confiança

Outra fotografia/ângulo reforça a materialidade do NVO depois que a oferta já foi compreendida.

### Benefício de sala de reunião — concretização

Se houver fotografia real adequada de sala, ela pode ajudar a materializar o benefício de 35% de desconto, sem sugerir disponibilidade garantida ou contratação de escritório.

### Regra

Cada fotografia deve ter função narrativa. Não repetir imagens apenas para preencher espaço.

---

# 23. Checklist de fidelidade visual

- [ ] A identidade institucional usa **Amarelo Pantone 715 C** e **Cinza Pantone 440 C**. fileciteturn42file0L15-L15
- [ ] O azul-marinho foi eliminado como cor institucional da landing.
- [ ] Os valores digitais das cores foram obtidos das referências do manual.
- [ ] A tipografia utilizada é **LEIXO**. fileciteturn42file0L16-L16
- [ ] O arquivo oficial do logotipo foi utilizado.
- [ ] A versão vertical foi priorizada quando adequada.
- [ ] A versão horizontal foi usada apenas quando a aplicação da vertical apresentar dificuldade. fileciteturn42file0L14-L14
- [ ] Não foram criadas novas versões ou composições do logotipo.
- [ ] As versões monocromáticas seguem as aplicações previstas no manual. fileciteturn42file0L17-L17
- [ ] As aplicações em negativo seguem as versões apresentadas no manual. fileciteturn42file0L18-L18
- [ ] As fotografias reais do NVO são protagonistas da experiência.
- [ ] Não foram utilizadas imagens genéricas de banco como substitutas.
- [ ] Não foram criadas imagens artificiais do imóvel.
- [ ] O verde do WhatsApp aparece somente como cor funcional do canal.
- [ ] R$ 99/mês possui destaque sem falsa urgência.
- [ ] O benefício de 35% está apresentado sem condições inventadas.
- [ ] Os elementos de credibilidade são somente fatos confirmados.
- [ ] O Hero comunica serviço, contexto, preço e ação principal.
- [ ] O CTA principal permanece consistente.
- [ ] O CTA mobile persistente, se implementado, não obstrui conteúdo.
- [ ] A página continua visualmente reconhecível como NVO.

---

# 24. Riscos de design

## Parecer genérico de startup

**Risco:** usar padrões visuais de SaaS, fintech ou startups que poderiam pertencer a qualquer marca.

**Controle:** cores oficiais NVO, LEIXO, logotipo oficial e fotografias reais.

## Parecer de “landing de IA”

**Risco:** excesso de efeitos, cards genéricos, microanimações e ilustrações abstratas.

**Controle:** hierarquia editorial, fotografia real e interface simples.

## Parecer de publicidade agressiva

**Risco:** contadores, selos, urgência artificial e CTA piscando.

**Controle:** preço transparente e comunicação racional.

## Parecer de empresa distante

**Risco:** interface excessivamente austera, sem conexão com a estrutura física.

**Controle:** fotografias reais e uso dos fatos de credibilidade.

## Parecer de dois produtos

**Risco:** tratar empresa de fora de Natal e não utilização do endereço residencial como ofertas diferentes.

**Controle:** dois contextos → mesma necessidade → Endereço Fiscal.

## Parecer de “escritório incluso”

**Risco:** fotografias ou composição da sala de reunião sugerirem que o cliente contratou um escritório ou possui sala garantida.

**Controle:** apresentar o desconto de 35% como vantagem complementar.

## Descaracterização da marca

**Risco:** recuperar o azul-marinho ou criar uma paleta paralela.

**Controle:** seguir o manual: **Amarelo Pantone 715 C + Cinza Pantone 440 C**. fileciteturn42file0L15-L15

---

# 25. Decisões mantidas da estratégia e UX

A atualização do manual **não altera a estratégia comercial ou a arquitetura de conversão**.

Mantêm-se:

- narrativa contínua: **Reconhecimento → Adequação → Compreensão → Concretização → Confiança → Redução de incerteza → Preço → Objeções → Conversão**;
- duas situações de compra convergindo para uma única solução;
- Endereço Fiscal por R$ 99/mês;
- WhatsApp como conversão principal;
- CTA: **Falar com um consultor pelo WhatsApp**;
- 35% de desconto no uso das salas de reuniões para clientes de Endereço Fiscal;
- 16 anos de mercado;
- imóvel próprio;
- licenças atualizadas;
- transparência e ausência de falsa urgência;
- uso prioritário de fotografias reais do NVO;
- ausência de argumentos sobre IPTU nesta etapa.

---

# 26. Pontos que permanecem dependentes de validação

O manual consultado confirma cores, tipografia, versões da marca, aplicações monocromáticas e aplicações em negativo. fileciteturn42file0L14-L18

Antes da implementação final, ainda devem ser confirmados nos arquivos oficiais do projeto:

- arquivo/licença web disponível para a família LEIXO;
- arquivo final do logotipo em formato adequado para web;
- versão específica a ser usada em cada fundo da interface;
- valores digitais oficiais a serem convertidos para tokens CSS;
- qualquer regra de área de proteção ou tamanho mínimo caso exista em material oficial adicional não consultado nesta etapa.

Quando uma decisão não estiver estabelecida pelo manual, deve permanecer como **[VALIDAR NO MANUAL]** em vez de ser transformada em regra por inferência.
