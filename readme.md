# 🐾 Mundo Pet - Agenda de Atendimentos

O **Mundo Pet** é uma aplicação Full-Stack desenvolvida para facilitar o gerenciamento de agendamentos em um pet shop. O projeto permite cadastrar novos serviços, visualizar a agenda organizada por períodos (Manhã, Tarde e Noite) e cancelar agendamentos em tempo real.

## 🚀 Tecnologias Utilizadas

- **Front-end:** HTML5, CSS3, JavaScript (ES6+).
- **Tooling:** Vite para um ambiente de desenvolvimento rápido.
- **Backend Simulado:** JSON Server para persistência de dados.
- **Data/Hora:** Day.js para manipulação de datas.

## 🧠 O que eu aprendi

Neste projeto, foquei em aplicar conceitos avançados de desenvolvimento:

- **Modularização JS:** Organização de código em módulos reutilizáveis.
- **Manipulação de DOM:** Criação dinâmica de elementos e feedback visual ao usuário.
- **Integração com API:** Consumo de rotas GET, POST e DELETE utilizando `fetch`.
- **UX/UI:** Máscaras de entrada (telefone), validação de formulários e acessibilidade (ARIA).
- **Lógica de Negócio:** Filtros dinâmicos baseados no calendário e bloqueio de datas retroativas.

## 🛠️ Como rodar o projeto

Para testar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/thiagomarcelinovieira/mundopet-JSrocketseat.git
   cd mundopet-JSrocketseat

   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o servidor da API:**
   ```bash
    npm run server
   ```
   A API estará rodando em http://localhost:3333
4. **Inicie o ambiente de desenvolvimento:**
   Abra outro terminal e rode:
   ```bash
    npm run dev
   ```
5. **Acesse a aplicação:**
   O site estará disponível no endereço indicado pelo Vite (geralmente http://localhost:5173)

   Desenvolvido por Thiago Marcelino Vieira - Estudante de Desenvolvimento Full-Stack.
