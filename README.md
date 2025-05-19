# Automação de Testes – Blog do Agi

## Descrição

Este projeto automatiza testes para a funcionalidade de busca do Blog do Agi (https://blogdoagi.com.br/), utilizando Playwright com TypeScript.

O objetivo é validar os comportamentos principais da pesquisa de artigos, garantindo que:

- Resultados sejam exibidos para termos existentes.
- Mensagem adequada seja mostrada para termos inexistentes.

## Cenários automatizados

1. **Busca por termo existente**  
   Verifica se a busca retorna pelo menos um artigo quando pesquisado um termo conhecido no blog (exemplo: "cartão").

2. **Busca por termo inexistente**  
   Valida que o sistema exibe a mensagem "Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras." quando o termo pesquisado não retorna resultados (exemplo: "terminoinexistente123").

## Tecnologias utilizadas

- [Playwright](https://playwright.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- Node.js (gerenciamento de pacotes via npm)

## Como executar os testes localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/biamoraes95/automacao-blog-do-agi.git
   cd automacao-blog-do-agi


2. Instale as dependências:

 npm install

3. Execute os testes:

npx playwright test

Integração contínua (CI)

Este projeto possui um workflow configurado no GitHub Actions para rodar os testes automaticamente a cada push no repositório.

Observações

O campo de busca no blog inicialmente está oculto e é necessário clicar no ícone da lupa para exibi-lo.

Para garantir a interação correta, a automação força a visibilidade do campo de busca antes de enviar o termo pesquisado.
