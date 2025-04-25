# TrabalhoTopicos

**TrabalhoTopicos** é uma Web API desenvolvida como parte de um projeto acadêmico. O objetivo é fornecer um backend funcional para gerenciamento de recursos via requisições HTTP, utilizando tecnologias modernas e boas práticas de desenvolvimento.

## 📌 Tecnologias Utilizadas

- [.NET 8](https://dotnet.microsoft.com/en-us/)
- [Entity Framework Core](https://learn.microsoft.com/en-us/ef/)
- [SQLite](https://www.sqlite.org/index.html)
- C#
- Minimal API

## ⚙️ Requisitos

- [.NET SDK 8.0+](https://dotnet.microsoft.com/en-us/download)
- Editor recomendado: [Visual Studio Code](https://code.visualstudio.com/) ou [Visual Studio 2022+](https://visualstudio.microsoft.com/)

## 🚀 Como Executar a Aplicação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/TrabalhoTopicos.git
   cd TrabalhoTopicos
   ```

2. **Restaure os pacotes e compile a aplicação**

   ```bash
   dotnet restore
   dotnet build
   ```

3. **Execute a aplicação**

   ```bash
   dotnet run
   ```

   A aplicação estará disponível em: `https://localhost:5001` ou `http://localhost:5000`.

## 🗄️ Configuração do Banco de Dados

O projeto utiliza SQLite como banco de dados.

1. A base será criada automaticamente ao rodar o projeto pela primeira vez.
2. Caso deseje aplicar migrações manualmente:

   ```bash
   dotnet ef migrations add Inicial
   dotnet ef database update
   ```

> Obs: Certifique-se de que o pacote `Microsoft.EntityFrameworkCore.Tools` esteja instalado.

## 🧭 Estrutura do Projeto

```
/TrabalhoTopicos
│
├── Controllers/         # Endpoints da API
├── Models/              # Entidades do domínio
├── Data/                # Contexto e acesso ao banco
├── Program.cs           # Configuração principal (Minimal API)
├── README.md            # Documentação
└── TrabalhoTopicos.csproj
```

## 📬 Como Contribuir

1. Fork este repositório
2. Crie uma branch: `git checkout -b minha-feature`
3. Faça commit das suas alterações: `git commit -m 'Minha nova feature'`
4. Push na sua branch: `git push origin minha-feature`
5. Abra um Pull Request

## 📄 Licença

Este projeto é apenas para fins educacionais e não possui uma licença oficial.
