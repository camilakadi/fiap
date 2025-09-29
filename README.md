## FIAP – Página Next.js

Este repositório contém uma landing page construída com Next.js (App Router) e estilizada com SCSS. Abaixo estão todas as orientações necessárias para instalar, executar e conhecer as dependências utilizadas.

## Pré-requisitos

- Node.js 18.18+ ou 20+ (LTS recomendado)
- Yarn 4+ (recomendado por este projeto, pois há `yarn.lock`)
  - Alternativas: npm ou pnpm também funcionam

Verifique suas versões:

```bash
node -v
yarn -v
```

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/camilakadi/fiap.git
cd fiap
yarn install
# ou
npm install
# ou
pnpm install
```

## Executando em desenvolvimento

```bash
yarn dev
# ou: npm run dev | pnpm dev
```

Acesse `http://localhost:3000` no navegador.

## Build de produção

```bash
yarn build
yarn start
# ou: npm run build && npm start
```

## Lint

```bash
yarn lint
# ou: npm run lint
```

## Estrutura do projeto (resumo)

- `src/app/`: rotas, layout e páginas do App Router
- `src/components/`: componentes (About, Courses, Faq, Header, Intro, Water)
- `public/`: imagens e SVGs
- `styles`/`*.scss`: estilos com Sass/SCSS

## Dependências usadas

Produção:

- next `15.5.4`
- react `19.1.0`
- react-dom `19.1.0`
- sass `^1.93.2` (compilação SCSS)
- gsap `^3.13.0` (animações)

Desenvolvimento:

- typescript `^5`
- eslint `^9` e `eslint-config-next` `15.5.4`
- @types/node `^20`
- @types/react `^19`
- @types/react-dom `^19`

## Dicas e problemas comuns

- Caso enfrente erro de versão do Node, atualize para a LTS mais recente.
- Em Windows, execute o terminal como administrador apenas se necessário para instalar dependências globais.
- Se usar npm/pnpm em vez de Yarn, mantenha consistência (evite alternar para não gerar conflitos de lockfile).
