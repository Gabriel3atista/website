# Agenda Off-Road - Next.js

Este projeto foi desenvolvido utilizando o framework [Next.js](https://nextjs.org).

## 🚀 Iniciando

Siga as instruções abaixo para configurar e rodar o projeto em sua máquina.

### 📌 Pré-requisitos

- [Node.js](https://nodejs.org/) - v22.13.1 ou superior
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### 💻 Desenvolvimento

1. Clone o repositório:

   ```bash
   git clone https://git.agendaoffroad.com.br:8443/agenda-off-road/next-agenda-site.git
   cd next-agenda-site
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação em execução.

### 🏗 Produção

Para gerar a versão de produção e iniciar o servidor:

```bash
npm run build && npm run start
```

### 🐳 Deploy com Docker

Embora o projeto utilize Docker, ele será usado apenas no servidor para o deploy. Caso queira rodá-lo localmente com Docker:

```bash
docker-compose build && docker-compose up
```

### 📚 Documentação do Framework

- [Next.js Documentation](https://nextjs.org/docs) - Explore todas as funcionalidades do Next.js.
- [Learn Next.js](https://nextjs.org/learn) - Um tutorial oficial interativo para aprender Next.js.

### 📦 Dependências

#### 📌 Principais Dependências

- `@tanstack/react-query` - Gerenciamento de estado assíncrono e cache de dados.
- `@tanstack/react-query-devtools` - Ferramentas de desenvolvimento para React Query.
- `clsx` - Manipulação dinâmica de classes CSS.
- `motion` - Biblioteca de animações para React.
- `radix-ui` - Componentes primitivos acessíveis sem estilização.
- `react-hook-form` - Gerenciamento eficiente de formulários no React.

#### 🛠 Dependências de Desenvolvimento

- `@eslint/eslintrc` - Configuração do ESLint.
- `@iconify-icon/react` - Biblioteca de ícones SVG para React.
- `@types/node` - Tipagens TypeScript para Node.js.
- `@types/react` e `@types/react-dom` - Tipagens TypeScript para React.
- `eslint` - Ferramenta de linting para JavaScript e TypeScript.
- `eslint-config-next` - Configuração padrão do ESLint para Next.js.
- `eslint-plugin-barrel-files` - Plugin ESLint para organização de arquivos barrel.
- `postcss` - Processador de CSS moderno.
- `sass` - Pré-processador CSS para estilos mais avançados.
- `tailwindcss` - Framework utilitário para estilização.
- `typescript` - Superset do JavaScript com tipagem estática.

---
