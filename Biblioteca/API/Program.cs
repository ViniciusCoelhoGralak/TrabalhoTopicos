using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using API.Models;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddDbContext<AppDataContext>();


var app = builder.Build();

app.MapGet("/", () => "Hello World!");


// Endpoints relacionados ao recurso de Livros
// GET: Lista todos os livros cadastrados
app.MapGet("/api/livros", ([FromServices] AppDataContext ctx) =>
{
    if (ctx.Livros.Any())
    {
        return Results.Ok(ctx.Livros.ToList());
    }

    return Results.NotFound();
});

// POST: Cadastrar livro
app.MapPost("/api/livros", ([FromBody] Livro livro,
                            [FromServices] AppDataContext ctx) =>
{

    app.MapPost("/api/livros", ([FromBody] Livro livro,
                            [FromServices] AppDataContext ctx) =>
    {

        // Verifica se a categoria existe no banco de dados
        var categoria = ctx.Categorias.Find(livro.CategoriaId);
        if (categoria == null)
        {
            return Results.BadRequest("Categoria inválida!");
        }

        // Validações adicionais
        if (string.IsNullOrWhiteSpace(livro.Titulo) || livro.Titulo.Length < 3)
        {
            return Results.BadRequest("O título do livro deve conter pelo menos 3 caracteres!");
        }

        // Adiciona o livro ao banco de dados
        ctx.Livros.Add(livro);
        ctx.SaveChanges();
        return Results.Created($"/api/livros/{livro.Id}", livro);
    });
});



app.Run();
