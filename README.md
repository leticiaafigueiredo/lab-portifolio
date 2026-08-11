# 💻 Portfólio Pessoal

Projeto de portfólio web desenvolvido para apresentar experiências, projetos e habilidades profissionais de forma interativa e moderna.

---

## 🛠️ Tecnologias Utilizadas

* **[React](https://react.dev/)** — Biblioteca para construção de interfaces de usuário.
* **[JavaScript (ES6+) / TypeScript]** — Linguagem de programação base.
* **[HTML5 & CSS3]** — Estruturação e estilização da interface.
* **[Docker]** — Conteinerização para execução e padronização do ambiente local.
* **[Nginx / Node.js]** — Servidor para disponibilização da aplicação.

---

## 📦 Dependências e Bibliotecas / Frameworks

### Dependências Principais

* **React DOM** (`react-dom`) — Renderização e manipulação do DOM para React.
* **[Vite / Create React App]** — Build tool e servidor de desenvolvimento.

### Interface e Estilização

* **[Tailwind CSS / Styled Components / Sass]** — Framework/ferramenta de estilização.
* **[Lucide React / React Icons]** — Biblioteca de ícones.
---

## 📁 Estrutura de Diretórios do Projeto

```text
meu-portfolio/
├── .github/              # Automações e workflows (CI/CD)
├── public/               # Arquivos estáticos (favicon, imagens públicas)
├── src/
│   ├── assets/           # Imagens, vetores e fontes do projeto
│   ├── components/       # Componentes React reutilizáveis (Navbar, Footer, Cards)
│   ├── pages/            # Seções ou páginas principais
│   ├── styles/           # Estilos globais e temas
│   ├── utils/            # Funções utilitárias e auxiliares
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Ponto de entrada da aplicação
├── .dockerignore         # Arquivos ignorados pelo Docker
├── .gitignore            # Arquivos ignorados pelo Git
├── Dockerfile            # Configuração da imagem Docker da aplicação
├── docker-compose.yml    # Subida simplificada do container local
├── package.json          # Gerenciamento de dependências e scripts Node.js
└── README.md             # Documentação do projeto

```

---

## ⚙️ Instruções de Instalação e Execução Local

Você pode executar o projeto localmente via **Docker** (recomendado) ou diretamente via **Node.js/npm**.

### Pré-requisitos

* [Git](https://git-scm.com/) instalado.
* [Docker](https://www.docker.com/) e **Docker Compose** instalados (para execução via Docker).
* [Node.js](https://nodejs.org/) v18+ instalado (para execução local sem Docker).

---

### Opção 1: Executando via Docker (Recomendado)

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

```


2. **Construa e inicie o container:**
```bash
docker-compose up --build -d

```


3. **Acesse a aplicação:**
Abra o navegador em `http://localhost:3000` (ou a porta definida no seu `docker-compose.yml`).
4. **Para parar o container:**
```bash
docker-compose down

```



---

### Opção 2: Executando via Node.js / npm

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

```


2. **Instale as dependências:**
```bash
npm install

```


3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev

```


*(ou `npm start`, conforme configurado em seu `package.json`)*
4. **Acesse a aplicação:**
Abra o navegador no endereço exibido no terminal (geralmente `http://localhost:5173` ou `http://localhost:3000`).

---

## 🌐 Link de Acesso ao Site Publicado

A aplicação está implantada e disponível no servidor privado através do link:

🔗 **[Acessar o Portfólio Online](https://www.google.com/search?q=https://seu-dominio-ou-ip-privado.com)**