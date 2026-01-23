# 📧 Email Classifier

Uma solução full-stack inteligente para triagem de e-mails corporativos. O sistema utiliza modelos de linguagem de larga escala (LLM) para processar textos e arquivos PDF, separando automaticamente comunicações produtivas de spams ou mensagens irrelevantes.

---

## 📝 Introdução

Este projeto foi desenvolvido para otimizar a gestão de caixas de entrada saturadas. Utilizando **FastAPI** no backend e **React** no frontend, a aplicação extrai o conteúdo de e-mails e anexos, enviando-os para a API da **Groq (Llama-3)**. 

A IA analisa o contexto semântico através de **Few-Shot Prompting**, retornando uma classificação precisa, um resumo do conteúdo e uma sugestão de resposta imediata, tudo gerenciado por um estado global com **Redux Toolkit** e estilizado com **Styled Components**.

---

## 💻 Configurar o Frontend

O frontend foi construído com Vite + React e utiliza Styled Components para estilização CSS-in-JS.

### Pré-requisitos
- Node.js (v18 ou superior)
- npm ou yarn

### Passo a passo
1. **Acesse a pasta do frontend:**

   ```bash
   cd Frontend
   ```
3. **Instale as dependências:**

   ```bash
   npm install
   ```
4. **Configure as variáveis de ambiente:** Crie um arquivo .env na raiz da pasta /Frontend:

   ```
   VITE_API_URL=http://localhost:8000/analyze
   ```
5. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```
   O app estará disponível em http://localhost:5173.

---

## ⚙️ Configurar o Backend

O backend é uma API robusta em Python que utiliza Docker para garantir consistência entre ambientes.

### Pré-requisitos
- Python 3.10+ ou Docker instalado
- Uma chave de API válida da [Groq Cloud](https://console.groq.com/).

### Passo a passo (Via Docker)
1. Acesse a pasta do backend:

   ```bash
   cd Backend
   ```
2. **Configure a variável de ambiente:** Crie um arquivo .env na raiz da pasta /Backend:

   ```
   GROQ_API_KEY=sua_chave_aqui
   ```
3. Suba o container:
  
  ```bash
  docker build -t email-classifier-back .
  docker run -p 8000:8000 --env-file .env email-classifier-back
  ```
### Passo a passo (Manual)
1. Instale as dependências: pip install -r requirements.txt
2. Certifique-se de que o .env está configurado.
3. Inicie com Uvicorn:

   ```bash
   uvicorn main:app --reload
   ```
A documentação Swagger estará disponível em http://localhost:8000/docs.

---

## 🛠️ Tecnologias Principais
- **Frontend:** React, TypeScript, Redux Toolkit, Styled Components, Axios.
- **Backend:** FastAPI, Pydantic, PyPDF2, LangChain, Docker.
- **IA:** Groq Cloud (Llama-3-8b/70b).




