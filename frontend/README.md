# Frontend — Portfólio Sketchbook (Murilo & Letícia)

Aplicação React 19 + TypeScript + Tailwind CSS v4 com alternância de perfil duplo e estética de caderno de anotações feito à mão.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor Vite de desenvolvimento com Hot Module Replacement.
- `npm run build`: Executa a verificação TypeScript (`tsc -b`) e compila os bundles de produção otimizados.
- `npm run lint`: Executa a análise estática com ESLint.
- `npm run preview`: Pré-visualiza localmente a build de produção gerada em `dist/`.

## Arquitetura & Componentes

- `src/context/`: Provedor de contexto global para perfil ativo (`murilo` / `leticia`), modal de projetos, notificações toast e controle de efeitos sonoros.
- `src/data/portfolioData.ts`: Central de dados dos dois perfis com projetos, habilidades categorizadas, dados de contato e linha do tempo de carreira/estudos.
- `src/components/`: Componentes modulares estilizados com bordas rugosas SVG (`#roughen`), animações Framer Motion e GSAP ScrollTrigger.
- `src/utils/soundEffects.ts`: Efeitos sonoros sintetizados nativamente via Web Audio API.
