# ✏️ Portfólio Sketchbook // Murilo Freitas & Letícia Figueiredo

<p align="center">
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
</p>

Um portfólio interativo único com estética artesanal de **Caderno de Rascunhos / Sketchbook**, desenvolvido com **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion** e **GSAP**.

O projeto conta com uma experiência imersiva de **Perfil Duplo**, permitindo alternar instantaneamente entre dois perfis profissionais distintos com paletas de cores temáticas, tipografias, ilustrações faciais vetoriais em SVG, projetos, habilidades e trajetórias personalizadas:

---

## 👥 Perfis Profissionais

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>👨‍💻 Murilo Freitas</h3>
      <p><strong>Engenharia de Software & Desenvolvimento Full-Stack</strong></p>
      <p><em>"Compreendendo não apenas como desenvolver, mas como estruturar, implantar e manter em produção."</em></p>
      <ul>
        <li><strong>Frontend:</strong> TypeScript, React, Tailwind CSS</li>
        <li><strong>Backend:</strong> Java, Spring Boot, Node.js, Express.js</li>
        <li><strong>Bancos de Dados:</strong> PostgreSQL, MySQL, MongoDB</li>
        <li><strong>DevOps & Infra:</strong> Docker, Nginx, Git, GitHub Actions</li>
        <li><strong>Foco:</strong> Arquitetura limpa, APIs resilientes e boas práticas de engenharia</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>👩‍💻 Letícia Figueiredo</h3>
      <p><strong>Engenharia de Dados & Arquitetura Analítica</strong></p>
      <p><em>"Transformando volumes brutos em fluxos estruturados de alto valor analítico."</em></p>
      <ul>
        <li><strong>Linguagens & Processamento:</strong> Python, PySpark, SQL Avançado</li>
        <li><strong>Orquestração & Streaming:</strong> Apache Airflow, Apache Kafka</li>
        <li><strong>Transformação & Data Warehouse:</strong> dbt, Google BigQuery, Snowflake</li>
        <li><strong>Cloud & Data Lake:</strong> AWS S3, Delta Lake, Docker</li>
        <li><strong>Foco:</strong> Pipelines escaláveis, governança e modelagem dimensional</li>
      </ul>
    </td>
  </tr>
</table>

---

## 🎨 Funcionalidades & Destaques

### 1. 🔄 Alternância Dinâmica de Perfis (Dual Profile Engine)
- Troca de contexto completa em tempo real entre Murilo e Letícia.
- Mudança instantânea de paleta de cores (estilo caderno pautado acolhedor vs. folha blueprint/técnica analítica).
- Ilustrações faciais vetoriais exclusivas desenhadas em SVG com traço de nanquim.

### 2. 📌 Mural de Projetos & Modal de Especificação Técnica
- Visual de post-its e polaroids com alfinetes coloridos, fitas adesivas (*washi tape*) e rotações orgânicas aleatórias.
- Filtros interativos por categoria em tempo real (Full-Stack, Backend, Frontend, Engenharia de Dados, etc.).
- **Modal de Detalhes**: Exibição aprofundada com arquitetura do sistema, métricas de impacto/performance, tags de tecnologias e links diretos para repositórios e demonstrações ao vivo.

### 3. 📝 Bloco de Rascunhos Interativo (Doodle Pad)
- Canvas de desenho livre embutido diretamente na textura do papel.
- Ferramentas artesanais: caneta nanquim, marca-texto amarelo translúcido e borracha.
- Ajuste de espessura de traço, paleta de cores, função de desfazer (*Undo*) e limpeza de quadro.
- **Exportação com Carimbo**: Permite baixar o desenho em PNG de alta resolução com carimbo e assinatura personalizada do perfil ativo.

### 4. 💌 Cartão Postal de Contato
- Formulário interativo estilo cartão postal com carimbos vintage e validação de campos.
- Feedback visual com efeito comemorativo de confetes (`canvas-confetti`).
- Botões de cópia rápida para e-mail e telefone com notificações Toast em formato de notas adesivas.
- Acesso direto a GitHub, LinkedIn e WhatsApp com mensagens pré-configuradas.

### 5. 🔊 Efeitos Sonoros Sutis via Web Audio API
- Síntese de áudio leve gerada nativamente pelo navegador (sem carregar arquivos pesados de terceiros).
- Sons táteis e orgânicos para folhear páginas, cliques de caneta, rabiscos e celebrações.
- Controle global de áudio acessível na barra de navegação (botão mute/unmute).

### 6. 🌐 Suporte Bilíngue Completo (Português / Inglês)
- Alternância instantânea de idioma (`PT` / `EN`) via botão de ação na barra de navegação e menu mobile.
- Tradução integral de dados biográficos, projetos, linhas do tempo, categorias, habilidades, formulários, modais e notificações toast.
- Persistência da preferência de idioma no `localStorage` do navegador.

### 7. 📱 Responsividade Total & Detalhes Visuais
- Filtros SVG nativos (`#roughen`) para bordas rugosas e texturas imperfeitas como papel real.
- Tipografia artesanal (Google Fonts) combinada com fontes monoespaçadas técnicas.
- Layout 100% responsivo para smartphones, tablets e desktops com menu drawer retrátil.
- Easter egg interativo no rodapé (caneca de café animada).

---

## 🛠️ Tecnologias & Bibliotecas

| Tecnologia | Finalidade |
|---|---|
| **[React 19](https://react.dev/)** | Biblioteca declarativa e reativa para construção da interface de usuário |
| **[TypeScript](https://www.typescriptlang.org/)** | Tipagem estática rigorosa e maior previsibilidade no desenvolvimento |
| **[Vite](https://vite.dev/)** | Build tool de altíssima performance e Hot Module Replacement (HMR) |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Estilização utilitária com `@tailwindcss/vite` de nova geração |
| **[Framer Motion](https://www.framer-motion.dev/)** | Animações fluidas de layout, modais, transições de perfil e toasts |
| **[GSAP](https://gsap.com/) & ScrollTrigger** | Efeitos de revelação e orquestração de scroll refinados |
| **[Lucide React](https://lucide.dev/)** | Biblioteca de ícones vetoriais modernos |
| **[canvas-confetti](https://www.npmjs.com/package/canvas-confetti)** | Efeito visual de confetes para interações de envio e sucesso |
| **Web Audio API** | Síntese de áudio nativa e leve para efeitos sonoros táteis |

---

## 📂 Estrutura de Diretórios

```text
lab-portifolio/
├── frontend/
│   ├── public/                 # Favicons e assets estáticos
│   ├── src/
│   │   ├── assets/             # Filtros SVG (bordas rugosas, sombras de papel)
│   │   │   └── svgFilters.tsx
│   │   ├── components/         # Componentes React modulares
│   │   │   ├── About.tsx       # Trajetória, linha do tempo e destaques
│   │   │   ├── Contact.tsx     # Cartão postal de contato e links sociais
│   │   │   ├── DoodlePad.tsx   # Canvas de desenho livre com exportação PNG
│   │   │   ├── Footer.tsx      # Rodapé com easter egg interativo de café
│   │   │   ├── Hero.tsx        # Apresentação, avatares SVG e alternador de perfil
│   │   │   ├── Icons.tsx       # Ícones customizados e vetoriais
│   │   │   ├── Navbar.tsx      # Barra de navegação com controle de áudio e perfil
│   │   │   ├── ProjectModal.tsx# Modal técnico com arquitetura e métricas
│   │   │   ├── Projects.tsx    # Mural de projetos com filtros dinâmicos
│   │   │   ├── Skills.tsx      # Barras de habilidades e tags categorizadas
│   │   │   └── Toast.tsx       # Notificações estilo post-it com animação
│   │   ├── context/            # Contexto React global (perfil ativo, som, modal)
│   │   │   ├── PortfolioContext.tsx
│   │   │   └── portfolioContextDef.ts
│   │   ├── data/               # Dados detalhados de Murilo e Letícia
│   │   │   └── portfolioData.ts
│   │   ├── hooks/              # Custom hooks (usePortfolio, useScrollReveal)
│   │   │   ├── usePortfolio.ts
│   │   │   └── useScrollReveal.ts
│   │   ├── types/              # Definições de tipos TypeScript
│   │   │   ├── index.d.ts
│   │   │   └── index.ts
│   │   ├── utils/              # Sintetizador sonoro Web Audio API
│   │   │   └── soundEffects.ts
│   │   ├── App.tsx             # Componente raiz da aplicação
│   │   ├── index.css           # Estilos globais, fontes e variáveis de tema
│   │   └── main.tsx            # Ponto de entrada React DOM
│   ├── eslint.config.js        # Configuração do ESLint
│   ├── index.html              # Template HTML com meta tags e Google Fonts
│   ├── package.json            # Dependências e scripts do frontend
│   ├── tsconfig.json           # Configuração base do TypeScript
│   └── vite.config.ts          # Configuração do Vite com Tailwind CSS v4
└── README.md                   # Documentação principal do repositório
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Gerenciador de pacotes: `npm`, `yarn` ou `pnpm`

### Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/leticiaafigueiredo/lab-portifolio.git
   cd lab-portifolio/frontend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente (Opcional para envio de e-mails reais):**
   ```bash
   cp .env.example .env
   ```
   > [!TIP]
   > Para receber mensagens do formulário de contato diretamente na sua caixa de entrada, crie uma chave gratuita no [Web3Forms](https://web3forms.com) (leva 10 segundos) e insira em `VITE_WEB3FORMS_ACCESS_KEY` dentro do `.env`.

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador em `http://localhost:5173`.

### Comandos Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor Vite em modo de desenvolvimento com HMR |
| `npm run build` | Compila o TypeScript (`tsc -b`) e gera a build otimizada em `dist/` |
| `npm run preview` | Pré-visualiza localmente a build de produção gerada |
| `npm run lint` | Executa o ESLint para validação estática de código |

---

## ✍️ Identidade Visual & Design System

- **Tipografia:** Combinação de fontes manuscritas orgânicas (*Caveat*, *Architects Daughter*, *Gochi Hand*, *Reenie Beanie*) com tipografias sans-serif modernas (*Space Grotesk*, *Inter*) e monoespaçadas (*JetBrains Mono*).
- **Texturas:** Efeito de papel envelhecido e folhas quadriculadas/pautadas com SVG filters de distorção de borda (*rough edges*).
- **Paleta de Cores:**
  - **Murilo:** Tons de papel craft (`#F6EFE1`), grafite escuro (`#221F1B`), amarelo post-it (`#F4C23D`) e azul de engenharia (`#33538E`).
  - **Letícia:** Tons de papel blueprint/técnico (`#EBF3F8`), azul escuro anil (`#1A365D`), ciano analítico (`#0EA5E9`) e magenta vibrante (`#EC4899`).

---

## 👨‍💻👩‍💻 Autores

- **Murilo Freitas** — [GitHub](https://github.com) • [LinkedIn](https://linkedin.com)
- **Letícia Figueiredo** — [GitHub](https://github.com/leticiaafigueiredo) • [LinkedIn](https://linkedin.com)

---

<p align="center">
  Feito à mão (com código limpo & muito café) ☕ © 2026
</p>
