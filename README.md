# 💻 Portfólio Pessoal

Projeto de portfólio web desenvolvido com tecnologias modernas para apresentar experiências, projetos e habilidades profissionais de forma interativa, fluida e responsiva.

---

## 🛠️ Tecnologias Utilizadas

* **[React](https://react.dev/)** — Biblioteca para construção de interfaces de usuário (v19).
* **[TypeScript](https://www.typescriptlang.org/)** — Superset JavaScript com tipagem estática.
* **[Vite](https://vite.dev/)** — Build tool ultrarrápida e servidor de desenvolvimento.
* **[Tailwind CSS](https://tailwindcss.com/)** — Framework CSS utilitário para estilização ágil e moderna.
* **[GSAP & Framer Motion](https://gsap.com/)** — Bibliotecas avançadas de animação e transições fluidas.

---

## 📦 Dependências e Bibliotecas / Frameworks

### Dependências Principais

* **React DOM** (`react-dom`) — Renderização e manipulação do DOM para React.
* **Framer Motion** (`framer-motion`) — Animações baseadas em componentes declarativos.
* **GSAP** (`gsap`) — Animações de alta performance e manipulação de timelines.

### Estilização e Ícones

* **Tailwind CSS v4** (`@tailwindcss/vite`) — Estilização moderna via plugin oficial do Vite.
* **Lucide React / React Icons** — Bibliotecas de ícones modernos para a interface.

---

## 📁 Estrutura de Diretórios do Projeto

```text
frontend/
├── .github/              # Automações e workflows (CI/CD)
├── public/               # Arquivos estáticos (favicon, imagens públicas)
├── src/
│   ├── assets/           # Imagens, vetores e fontes do projeto
│   ├── components/       # Componentes React reutilizáveis (Navbar, Footer, Cards, etc.)
│   ├── context/          # Contextos globais da aplicação
│   ├── data/             # Dados estáticos (projetos, habilidades)
│   ├── hooks/            # Hooks customizados (ex: controle de scroll e animações)
│   ├── types/            # Definições de tipos globais do TypeScript (.d.ts)
│   ├── App.tsx           # Componente principal
│   └── main.tsx          # Ponto de entrada da aplicação
├── .gitignore            # Arquivos ignorados pelo Git
├── package.json          # Gerenciamento de dependências e scripts Node.js
├── tsconfig.json         # Configurações do compilador TypeScript
├── vite.config.ts        # Configuração do Vite e plugins (Tailwind)
└── README.md             # Documentação do projeto