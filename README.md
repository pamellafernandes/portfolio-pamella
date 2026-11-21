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

## Estrutura

- `src/data/portfolio.ts`: conteúdo do portfólio, separado da apresentação.
- `src/types/portfolio.ts`: contratos TypeScript dos dados.
- `src/components/`: componentes reutilizáveis com responsabilidades específicas.
- `src/App.tsx`: composição das seções da página.

A implementação usa composição e renderização orientada a dados para reduzir duplicação e facilitar manutenção. As responsabilidades são separadas entre conteúdo, apresentação e montagem da página, aplicando princípios SOLID sem adicionar padrões ou abstrações desnecessários para um site estático.
