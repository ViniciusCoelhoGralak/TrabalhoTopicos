# Projeto Biblioteca - API e Frontend

**TrabalhoTopicos** é uma aplicação full-stack desenvolvida como parte de um projeto acadêmico. O objetivo é fornecer uma interface para gerenciamento de livros e categorias, com um frontend em React e um backend funcional em .NET para manipulação dos dados.

## 📌 Tecnologias Utilizadas

* **Backend**: .NET 8 (Minimal API), Entity Framework Core, SQLite
* **Frontend**: React, TypeScript, Axios
* **Documentação da API**: Swagger

***

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas:

* **.NET 8 SDK** ou superior
* **Node.js** (versão 16+ recomendada)
* **npm** (geralmente vem com o Node.js)
* Um editor de código, como o **Visual Studio Code**

***

## 🚀 Instruções para Execução do Projeto

Para que a aplicação funcione completamente, tanto o backend quanto o frontend precisam estar em execução simultaneamente. Siga os passos abaixo, preferencialmente abrindo dois terminais separados.

### 1. Back-end (API)

O backend é responsável por toda a lógica de negócio e comunicação com o banco de dados.

1.  **Navegue até a pasta da API:**
    ```bash
    cd Biblioteca/API
    ```

2.  **Restaure as dependências do .NET:**
    ```bash
    dotnet restore
    ```

3.  **Aplique as migrações do Entity Framework Core:**
    Este comando criará o banco de dados `biblioteca.db` e as tabelas necessárias.
    ```bash
    dotnet ef database update
    ```

4.  **Execute a API:**
    ```bash
    dotnet run
    ```
    * A API estará disponível em `http://localhost:5000`.
    * A documentação interativa do Swagger pode ser acessada em `http://localhost:5000/swagger`.

***

### 2. Front-end (React App)

O frontend é a interface com o usuário, consumindo os dados fornecidos pela API.

1.  **(Em um novo terminal)** Navegue até a pasta do frontend:
    ```bash
    cd Frontend
    ```

2.  **Instale as dependências do Node.js:**
    Este comando instalará todas as bibliotecas necessárias para o projeto, como React, Axios, etc.
    ```bash
    npm install
    ```

3.  **Execute a aplicação React:**
    ```bash
    npm start
    ```
    * O site será aberto automaticamente no seu navegador no endereço `http://localhost:3000`.
    * A aplicação se conectará à API do backend, que deve estar rodando na porta `5000`.

***

## 🧭 Estrutura do Projeto
```
/
├── Biblioteca/
│   └── API/            # Contém todo o código do backend em .NET
│       ├── Models/     # Entidades do domínio (Livro, Categoria)
│       ├── Migrations/ # Migrações do Entity Framework
│       └── Program.cs  # Configuração e endpoints da Minimal API
│
└── Frontend/
├── public/         # Arquivos estáticos e HTML base
├── src/            # Código-fonte do frontend em React/TypeScript
│   ├── components/ # Componentes reutilizáveis (Header, Footer)
│   ├── models/     # Interfaces TypeScript (Livro, Categoria)
│   └── pages/      # Páginas da aplicação (Home, Listar, Cadastrar)
└── package.json    # Dependências e scripts do frontend
```
---
### Desenvolvedores

* Eduardo Leal
* Gabriel Barboza
* Gabryel Rocha
* Vinicius Coelho
