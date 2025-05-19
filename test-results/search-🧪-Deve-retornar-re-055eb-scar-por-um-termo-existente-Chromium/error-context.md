# Test info

- Name: 🧪 Deve retornar resultados ao buscar por um termo existente
- Location: /Users/biamoraes/automacao-blog-do-agi/automacao-blog-do-agi/tests/search.spec.ts:20:5

# Error details

```
TimeoutError: page.waitForSelector: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('input.search-field') to be visible
    - waiting for" https://blog.agibank.com.br/" navigation to finish...
    - navigated to "https://blog.agibank.com.br/"
    22 × locator resolved to hidden <input value="" name="s" type="search" tabindex="-1" id="search-field" class="search-field" placeholder="Search..."/>

    at abrirCampoDeBusca (/Users/biamoraes/automacao-blog-do-agi/automacao-blog-do-agi/tests/search.spec.ts:11:14)
    at /Users/biamoraes/automacao-blog-do-agi/automacao-blog-do-agi/tests/search.spec.ts:23:23
```

# Page snapshot

```yaml
- link "Ir para o conteúdo":
  - /url: "#content"
- banner:
  - link "Logo Agiblog.":
    - /url: https://blog.agibank.com.br/
    - img "Logo Agiblog."
  - link "Blog do Agi":
    - /url: https://blog.agibank.com.br/
  - 'navigation "Site Navigation: Agibank V2"':
    - list:
      - listitem:
        - link "O Agibank Menu Toggle":
          - /url: https://blog.agibank.com.br/institucional/
          - text: O Agibank
          - application "Menu Toggle":
            - img
      - listitem:
        - link "Produtos Menu Toggle":
          - /url: https://blog.agibank.com.br/produtos/
          - text: Produtos
          - application "Menu Toggle":
            - img
      - listitem:
        - link "Serviços":
          - /url: https://blog.agibank.com.br/servicos/
      - listitem:
        - link "Suas finanças":
          - /url: https://blog.agibank.com.br/suas-financas/
      - listitem:
        - link "Seus benefícios":
          - /url: https://blog.agibank.com.br/seus-beneficios/
      - listitem:
        - link "Sua segurança":
          - /url: https://blog.agibank.com.br/sua-seguranca/
      - listitem:
        - link "Stories":
          - /url: https://blog.agibank.com.br/web-stories/
  - link "Link do ícone de pesquisa":
    - /url: "#"
    - text: Pesquisar
    - img
- main:
  - article:
    - navigation
    - heading "Stories" [level=2]
    - 'link "Mudança no Consignado em 2025: descubra o que mudou e como isso pode afetar suas finanças"':
      - /url: https://blog.agibank.com.br/web-stories/mudanca-do-consignado-em-2025/
      - 'img "Mudança no Consignado em 2025: descubra o que mudou e como isso pode afetar suas finanças"'
    - text: "Mudança no Consignado em 2025: descubra o que mudou e como isso pode afetar suas finanças"
    - link "O que acontece com quem não votar? Entenda as consequências":
      - /url: https://blog.agibank.com.br/web-stories/o-que-acontece-com-quem-nao-votar/
      - img "O que acontece com quem não votar? Entenda as consequências"
    - text: O que acontece com quem não votar? Entenda as consequências
    - 'link "Bolsa Família 2024: veja quando será pago o benefício em setembro"':
      - /url: https://blog.agibank.com.br/web-stories/calendario-bolsa-familia-de-setembro/
      - 'img "Bolsa Família 2024: veja quando será pago o benefício em setembro"'
    - text: "Bolsa Família 2024: veja quando será pago o benefício em setembro"
    - link "6 Dicas para Criar uma Senha Segura na Internet":
      - /url: https://blog.agibank.com.br/web-stories/6-dicas-para-criar-uma-senha-segura-na-internet/
      - img "6 Dicas para Criar uma Senha Segura na Internet"
    - text: 6 Dicas para Criar uma Senha Segura na Internet
    - link "7 dicas essencias para controlar gastos":
      - /url: https://blog.agibank.com.br/web-stories/7-dicas-essenciais-para-controlar-gastos/
      - img "7 dicas essencias para controlar gastos"
    - text: 7 dicas essencias para controlar gastos
    - link "6 Mitos e Verdades sobre Cartão de Crédito":
      - /url: https://blog.agibank.com.br/web-stories/6-mitos-e-verdades-sobre-cartao-de-credito/
      - img "6 Mitos e Verdades sobre Cartão de Crédito"
    - text: 6 Mitos e Verdades sobre Cartão de Crédito
    - link "5 Vantagens sobre Empréstimo Consignado que Você Precisa Conhecer":
      - /url: https://blog.agibank.com.br/web-stories/5-vantagens-de-contratar-um-emprestimo-consignado/
      - img "5 Vantagens sobre Empréstimo Consignado que Você Precisa Conhecer"
    - text: 5 Vantagens sobre Empréstimo Consignado que Você Precisa Conhecer
    - 'link "30 anos do Plano Real: conheça 5 Curiosidades sobre o Programa"':
      - /url: https://blog.agibank.com.br/web-stories/30-anos-do-plano-real-conheca-5-curiosidades-sobre-o-programa/
      - 'img "30 anos do Plano Real: conheça 5 Curiosidades sobre o Programa"'
    - text: "30 anos do Plano Real: conheça 5 Curiosidades sobre o Programa"
    - 'link "Taxa de Empréstimo Consignado cai para 1,66%: o que você precisa saber"':
      - /url: https://blog.agibank.com.br/web-stories/taxa-de-emprestimo-consignado-cai-para-166-o-que-voce-precisa-saber/
      - 'img "Taxa de Empréstimo Consignado cai para 1,66%: o que você precisa saber"'
    - text: "Taxa de Empréstimo Consignado cai para 1,66%: o que você precisa saber"
    - link "Ver mais":
      - /url: https://blog.agibank.com.br/web-stories/
    - heading "Últimas do Blog do Agi" [level=2]
    - article:
      - link "Imagem mostra uma mulher sorrindo enquanto segura notas de real e documentos. Representa o recebimento de Auxílio estadual ou outro benefício financeiro.":
        - /url: https://blog.agibank.com.br/auxilio-estadual/
        - img "Imagem mostra uma mulher sorrindo enquanto segura notas de real e documentos. Representa o recebimento de Auxílio estadual ou outro benefício financeiro."
      - link "Seus benefícios":
        - /url: https://blog.agibank.com.br/seus-beneficios/
      - 'heading "Auxílio estadual: o que é, onde está disponível e como solicitar" [level=3]':
        - 'link "Auxílio estadual: o que é, onde está disponível e como solicitar"':
          - /url: https://blog.agibank.com.br/auxilio-estadual/
      - link "Ler texto":
        - /url: https://blog.agibank.com.br/auxilio-estadual/
    - article:
      - link "A imagem mostra um martelo de juiz de madeira escura com uma faixa dourada, apoiado sobre uma base redonda também de madeira escura. Ao fundo, há várias pilhas de moedas empilhadas sobre alguns papéis, sugerindo um contexto financeiro. O conjunto transmite uma ideia de decisão judicial relacionada a dinheiro, que se relaciona diretamente com o termo Execução fiscal, que é o processo judicial utilizado para cobrar dívidas tributárias ou fiscais de devedores.":
        - /url: https://blog.agibank.com.br/execucao-fisca/
        - img "A imagem mostra um martelo de juiz de madeira escura com uma faixa dourada, apoiado sobre uma base redonda também de madeira escura. Ao fundo, há várias pilhas de moedas empilhadas sobre alguns papéis, sugerindo um contexto financeiro. O conjunto transmite uma ideia de decisão judicial relacionada a dinheiro, que se relaciona diretamente com o termo Execução fiscal, que é o processo judicial utilizado para cobrar dívidas tributárias ou fiscais de devedores."
      - link "Suas finanças":
        - /url: https://blog.agibank.com.br/suas-financas/
      - 'heading "Execução fiscal: o que é e como funciona?" [level=3]':
        - 'link "Execução fiscal: o que é e como funciona?"':
          - /url: https://blog.agibank.com.br/execucao-fisca/
      - link "Ler texto":
        - /url: https://blog.agibank.com.br/execucao-fisca/
    - article:
      - link "A imagem mostra a mão de uma pessoa carimbando um documento em uma prancheta, simbolizando um processo oficial. Essa ação representa o protesto em cartório, que é o registro formal de uma dívida não paga.":
        - /url: https://blog.agibank.com.br/protesto-em-cartorio/
        - img "A imagem mostra a mão de uma pessoa carimbando um documento em uma prancheta, simbolizando um processo oficial. Essa ação representa o protesto em cartório, que é o registro formal de uma dívida não paga."
      - link "Suas finanças":
        - /url: https://blog.agibank.com.br/suas-financas/
      - 'heading "Protesto em cartório: o que é e como consultar?" [level=3]':
        - 'link "Protesto em cartório: o que é e como consultar?"':
          - /url: https://blog.agibank.com.br/protesto-em-cartorio/
      - link "Ler texto":
        - /url: https://blog.agibank.com.br/protesto-em-cartorio/
    - article:
      - link "A imagem mostra dois personagens de madeira, um azul e um vermelho, sentados sobre blocos, simbolizando duas pessoas em um processo de separação. Entre eles, há uma casa e uma aliança de casamento, representando a divisão de bens. Ao lado, pilhas de moedas sugerem a partilha financeira que ocorre em situações legais como o divórcio ou a sucessão de herança. Essa imagem ilustra de forma simbólica o conceito de partilha de bens, um processo que envolve a divisão de patrimônio entre as partes envolvidas.":
        - /url: https://blog.agibank.com.br/partilha-de-bens/
        - img "A imagem mostra dois personagens de madeira, um azul e um vermelho, sentados sobre blocos, simbolizando duas pessoas em um processo de separação. Entre eles, há uma casa e uma aliança de casamento, representando a divisão de bens. Ao lado, pilhas de moedas sugerem a partilha financeira que ocorre em situações legais como o divórcio ou a sucessão de herança. Essa imagem ilustra de forma simbólica o conceito de partilha de bens, um processo que envolve a divisão de patrimônio entre as partes envolvidas."
      - link "Suas finanças":
        - /url: https://blog.agibank.com.br/suas-financas/
      - 'heading "Partilha de bens: o que é e como funciona" [level=3]':
        - 'link "Partilha de bens: o que é e como funciona"':
          - /url: https://blog.agibank.com.br/partilha-de-bens/
      - link "Ler texto":
        - /url: https://blog.agibank.com.br/partilha-de-bens/
    - article:
      - link "A imagem mostra uma mão puxando um arquivo de pasta suspensa em um arquivo organizado. As pastas são amarelas com etiquetas coloridas, indicando um sistema de organização. Essa cena pode remeter ao processo de buscar documentos importantes, como no caso de regularizar ou formalizar um contrato de gaveta. Para garantir segurança jurídica, é essencial registrar e organizar corretamente os documentos relacionados a esse tipo de contrato, evitando complicações futuras.":
        - /url: https://blog.agibank.com.br/contrato-de-gaveta/
        - img "A imagem mostra uma mão puxando um arquivo de pasta suspensa em um arquivo organizado. As pastas são amarelas com etiquetas coloridas, indicando um sistema de organização. Essa cena pode remeter ao processo de buscar documentos importantes, como no caso de regularizar ou formalizar um contrato de gaveta. Para garantir segurança jurídica, é essencial registrar e organizar corretamente os documentos relacionados a esse tipo de contrato, evitando complicações futuras."
      - link "Suas finanças":
        - /url: https://blog.agibank.com.br/suas-financas/
      - 'heading "Contrato de gaveta: como funciona e quais são os riscos" [level=3]':
        - 'link "Contrato de gaveta: como funciona e quais são os riscos"':
          - /url: https://blog.agibank.com.br/contrato-de-gaveta/
      - link "Ler texto":
        - /url: https://blog.agibank.com.br/contrato-de-gaveta/
    - article:
      - link "A imagem mostra uma fileira de casas térreas recém-construídas, todas com o mesmo padrão de design, telhado cerâmico e pintura em tons claros. Esse tipo de construção é comum em projetos coletivos de moradia, como os realizados por cooperativa habitacional, que une pessoas com o objetivo de conquistar a casa própria de forma mais acessível e organizada.":
        - /url: https://blog.agibank.com.br/cooperativa-habitacional/
        - img "A imagem mostra uma fileira de casas térreas recém-construídas, todas com o mesmo padrão de design, telhado cerâmico e pintura em tons claros. Esse tipo de construção é comum em projetos coletivos de moradia, como os realizados por cooperativa habitacional, que une pessoas com o objetivo de conquistar a casa própria de forma mais acessível e organizada."
      - link "Suas finanças":
        - /url: https://blog.agibank.com.br/suas-financas/
      - 'heading "Cooperativa habitacional: o que é e como funciona" [level=3]':
        - 'link "Cooperativa habitacional: o que é e como funciona"':
          - /url: https://blog.agibank.com.br/cooperativa-habitacional/
      - link "Ler texto":
        - /url: https://blog.agibank.com.br/cooperativa-habitacional/
    - text: "1"
    - link "2":
      - /url: https://blog.agibank.com.br/page/2/
    - link "3":
      - /url: https://blog.agibank.com.br/page/3/
    - link "4":
      - /url: https://blog.agibank.com.br/page/4/
    - link "5":
      - /url: https://blog.agibank.com.br/page/5/
    - link "Próxima »":
      - /url: https://blog.agibank.com.br/page/2/
    - heading "Tudo Sobre Empréstimo" [level=2]
    - article:
      - 'heading "Empréstimo emergencial: o que é e como funciona" [level=3]':
        - 'link "Empréstimo emergencial: o que é e como funciona"':
          - /url: https://blog.agibank.com.br/emprestimo-emergencial/
      - link "Ler Texto":
        - /url: https://blog.agibank.com.br/emprestimo-emergencial/
      - link "A imagem mostra uma mulher preocupada ao lado de dois carros danificados após uma colisão. Ela segura a cabeça em sinal de preocupação, enquanto observa os estragos. A cena retrata uma situação inesperada e urgente, como um acidente de trânsito, onde a necessidade de um empréstimo emergencial pode ser fundamental para cobrir despesas imprevistas rapidamente.":
        - /url: https://blog.agibank.com.br/emprestimo-emergencial/
        - img "A imagem mostra uma mulher preocupada ao lado de dois carros danificados após uma colisão. Ela segura a cabeça em sinal de preocupação, enquanto observa os estragos. A cena retrata uma situação inesperada e urgente, como um acidente de trânsito, onde a necessidade de um empréstimo emergencial pode ser fundamental para cobrir despesas imprevistas rapidamente."
    - article:
      - 'heading "Empréstimo sem burocracia: como e onde conseguir" [level=3]':
        - 'link "Empréstimo sem burocracia: como e onde conseguir"':
          - /url: https://blog.agibank.com.br/emprestimo-sem-burocracia/
      - link "Ler Texto":
        - /url: https://blog.agibank.com.br/emprestimo-sem-burocracia/
      - link "emprestimo-sem-burocracia":
        - /url: https://blog.agibank.com.br/emprestimo-sem-burocracia/
        - img "emprestimo-sem-burocracia"
    - article:
      - 'heading "Averbação: o que é e como funciona em imóveis, divórcio e empréstimos" [level=3]':
        - 'link "Averbação: o que é e como funciona em imóveis, divórcio e empréstimos"':
          - /url: https://blog.agibank.com.br/averbacao/
      - link "Ler Texto":
        - /url: https://blog.agibank.com.br/averbacao/
      - link "A imagem mostra pilhas de documentos com marcadores laranja, possivelmente indicando diferentes seções ou categorias de registros. Esses papéis lembram a necessidade de manter documentos organizados e atualizados, o que é essencial para processos como a averbação, garantindo que todas as mudanças sejam formalizadas e registradas corretamente nos arquivos oficiais.":
        - /url: https://blog.agibank.com.br/averbacao/
        - img "A imagem mostra pilhas de documentos com marcadores laranja, possivelmente indicando diferentes seções ou categorias de registros. Esses papéis lembram a necessidade de manter documentos organizados e atualizados, o que é essencial para processos como a averbação, garantindo que todas as mudanças sejam formalizadas e registradas corretamente nos arquivos oficiais."
    - heading "Baixe agora mesmo o App do Agi e abra sua conta com a gente!" [level=2]
    - figure:
      - link:
        - /url: https://apps.apple.com/br/app/agibank-seu-banco-digital/id1173498435
    - figure:
      - link:
        - /url: https://play.google.com/store/apps/details?id=br.com.agipag.app
- contentinfo:
  - link "Facebook":
    - /url: https://www.facebook.com/Agibank
  - link "Instagram":
    - /url: https://www.instagram.com/agibank/
  - link "LinkedIn":
    - /url: https://www.linkedin.com/company/agibank/
  - link "TikTok":
    - /url: https://www.tiktok.com/@agibank
  - 'navigation "Site Navigation: Agibank V2"':
    - list:
      - listitem:
        - link "O Agibank":
          - /url: https://blog.agibank.com.br/institucional/
      - listitem:
        - link "Produtos":
          - /url: https://blog.agibank.com.br/produtos/
      - listitem:
        - link "Serviços":
          - /url: https://blog.agibank.com.br/servicos/
      - listitem:
        - link "Suas finanças":
          - /url: https://blog.agibank.com.br/suas-financas/
      - listitem:
        - link "Seus benefícios":
          - /url: https://blog.agibank.com.br/seus-beneficios/
      - listitem:
        - link "Sua segurança":
          - /url: https://blog.agibank.com.br/sua-seguranca/
      - listitem:
        - link "Stories":
          - /url: https://blog.agibank.com.br/web-stories/
  - paragraph: Copyright © 2025 Blog do Agi |
- 'link "Mudança no Consignado em 2025: descubra o que mudou e como isso pode afetar suas finanças"':
  - /url: https://blog.agibank.com.br/web-stories/mudanca-do-consignado-em-2025/
- link "O que acontece com quem não votar? Entenda as consequências":
  - /url: https://blog.agibank.com.br/web-stories/o-que-acontece-com-quem-nao-votar/
- 'link "Bolsa Família 2024: veja quando será pago o benefício em setembro"':
  - /url: https://blog.agibank.com.br/web-stories/calendario-bolsa-familia-de-setembro/
- link "6 Dicas para Criar uma Senha Segura na Internet":
  - /url: https://blog.agibank.com.br/web-stories/6-dicas-para-criar-uma-senha-segura-na-internet/
- link "7 dicas essencias para controlar gastos":
  - /url: https://blog.agibank.com.br/web-stories/7-dicas-essenciais-para-controlar-gastos/
- link "6 Mitos e Verdades sobre Cartão de Crédito":
  - /url: https://blog.agibank.com.br/web-stories/6-mitos-e-verdades-sobre-cartao-de-credito/
- link "5 Vantagens sobre Empréstimo Consignado que Você Precisa Conhecer":
  - /url: https://blog.agibank.com.br/web-stories/5-vantagens-de-contratar-um-emprestimo-consignado/
- 'link "30 anos do Plano Real: conheça 5 Curiosidades sobre o Programa"':
  - /url: https://blog.agibank.com.br/web-stories/30-anos-do-plano-real-conheca-5-curiosidades-sobre-o-programa/
- 'link "Taxa de Empréstimo Consignado cai para 1,66%: o que você precisa saber"':
  - /url: https://blog.agibank.com.br/web-stories/taxa-de-emprestimo-consignado-cai-para-166-o-que-voce-precisa-saber/
```

# Test source

```ts
   1 | import { test, expect, Page, Locator } from '@playwright/test';
   2 |
   3 | export async function abrirCampoDeBusca(page: Page): Promise<Locator> {
   4 |   // Usa evaluate para clicar corretamente no botão usando JS
   5 |   await page.evaluate(() => {
   6 |     const button = document.querySelector('div.ast-search-menu-icon') as HTMLElement;
   7 |     if (button) button.click();
   8 |   });
   9 |
  10 |   // Aguarda o input aparecer no DOM com visibilidade adequada
> 11 |   await page.waitForSelector('input.search-field', { state: 'visible', timeout: 10000 });
     |              ^ TimeoutError: page.waitForSelector: Timeout 10000ms exceeded.
  12 |
  13 |   const searchInput = page.locator('input.search-field');
  14 |   await searchInput.click();
  15 |
  16 |   return searchInput;
  17 | }
  18 |
  19 |
  20 | test('🧪 Deve retornar resultados ao buscar por um termo existente', async ({ page }) => {
  21 |   await page.goto('https://blogdoagi.com.br/', { waitUntil: 'domcontentloaded' });
  22 |
  23 |   const searchInput = await abrirCampoDeBusca(page);
  24 |
  25 |   await searchInput.fill('cartão');
  26 |   await page.keyboard.press('Enter');
  27 |
  28 |   const articles = page.locator('article');
  29 |   await expect(articles.first()).toBeVisible({ timeout: 10000 });
  30 | });
  31 |
  32 | test('🧪 Deve retornar nenhum resultado ao buscar por um termo inexistente', async ({ page }) => {
  33 |   await page.goto('https://blogdoagi.com.br/', { waitUntil: 'domcontentloaded' });
  34 |
  35 |   const searchInput = await abrirCampoDeBusca(page);
  36 |
  37 |   await searchInput.fill('terminoinexistente123');
  38 |
  39 |   await Promise.all([
  40 |     page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
  41 |     page.keyboard.press('Enter'),
  42 |   ]);
  43 |
  44 |   await expect(page.locator('text=Nenhum resultado encontrado')).toBeVisible({ timeout: 10000 });
  45 | });
  46 |
```