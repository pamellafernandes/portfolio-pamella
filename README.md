# Pamella Fernandes — Portfolio

Portfólio construído com React, TypeScript e Vite.

## Executar

```bash
npm install
npm run dev
```

Para validar a tipagem e gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Publicar na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new) e entre com a conta GitHub que tem acesso ao repositório.
2. Importe `pamellafernandes/repository-pamella`.
3. Use a raiz do repositório como **Root Directory**. A configuração em `vercel.json` define Vite, `npm run build` e `dist`.
4. Clique em **Deploy**. A Vercel fornecerá um domínio `*.vercel.app`.

Depois da conexão, cada push para a branch de produção configurada na Vercel gera uma nova publicação. Também é possível publicar pelo terminal com `npx vercel login` e `npx vercel --prod`.

## Estrutura

- `src/data/portfolio.ts`: conteúdo do portfólio, separado da apresentação.
- `src/types/portfolio.ts`: contratos TypeScript dos dados.
- `src/components/`: componentes reutilizáveis com responsabilidades específicas.
- `src/App.tsx`: composição das seções da página.

A implementação usa composição e renderização orientada a dados para reduzir duplicação e facilitar manutenção. As responsabilidades são separadas entre conteúdo, apresentação e montagem da página, aplicando princípios SOLID sem adicionar padrões ou abstrações desnecessários para um site estático.
