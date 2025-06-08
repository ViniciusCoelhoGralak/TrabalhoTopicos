using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Biblioteca API",
        Description = "API para gerenciamento de livros e categorias em uma biblioteca.",
        Contact = new OpenApiContact()
        {
            Name = "Eduardo Leal | Gabryel Rocha | Vinicius Coelho | Gabriel Barboza",
            Url = new Uri("https://github.com/ViniciusCoelhoGralak/TrabalhoTopicos/")
        },
        License = new OpenApiLicense()
        {
            Name = "MIT License",
            Url = new Uri("https://opensource.org/licenses/MIT")
        }
    });
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();


/////////////// LIVROS /////////////////

app.MapGet("/api/livros", ([FromServices] AppDataContext ctx) =>
{
    var livros = ctx.Livros.Include(l => l.Categoria).ToList();
    if (livros.Any())
    {
        return Results.Ok(livros);
    }

    return Results.NotFound();
});

app.MapGet("/api/livros/{id}", ([FromRoute] int Id, [FromServices] AppDataContext ctx) =>
{
    Livro? livro = ctx.Livros.Include(l => l.Categoria).FirstOrDefault(l => l.Id == Id);
    if (livro != null)
    {
        return Results.Ok(livro);
    }

    return Results.NotFound();
});

app.MapPost("/api/livros", ([FromBody] Livro livro, [FromServices] AppDataContext ctx) =>
{
    // Verifica se a categoria existe
    var categoria = ctx.Categorias.Find(livro.CategoriaId);
    if (categoria == null)
    {
        return Results.BadRequest("Categoria não encontrada!");
    }

    // Associa a categoria ao livro
    livro.Categoria = categoria;

    if (livro.Titulo == null || livro.Titulo.Length < 3)
    {
        return Results.BadRequest("Titulo do livro deve ter mais de 3 letras");
    }

    ctx.Livros.Add(livro);
    ctx.SaveChanges();
    return Results.Created("", livro);
});

app.MapPut("/api/livros/{id}", ([FromRoute] int id,
                            [FromBody] Livro livro,
                            [FromServices] AppDataContext ctx) =>
{
    Livro? entidade = ctx.Livros.Find(id);


    if (livro.Titulo == null || livro.Titulo.Length < 3)
    {
        return Results.BadRequest("O nome do livro deve ter mais de 3 letras");
    }

    entidade.Titulo = livro.Titulo;
    ctx.Livros.Update(entidade);
    ctx.SaveChanges();
    return Results.Ok(ctx.Livros.Include(l => l.Categoria).FirstOrDefault(l => l.Id == id));
});

app.MapDelete("/api/livros/{id}", ([FromRoute] int id,
                                   [FromServices] AppDataContext ctx) =>
{
    Livro? livro = ctx.Livros.Find(id);
    if (livro == null)
    {
        return Results.NotFound();
    }

    ctx.Livros.Remove(livro);
    ctx.SaveChanges();
    return Results.NoContent();
});



////////////////// CATEGORIAS ////////////////////

app.MapGet("/api/categorias", ([FromServices] AppDataContext ctx) =>
{
    if (ctx.Categorias.Any())
    {
        return Results.Ok(ctx.Categorias.ToList());
    }

    return Results.NotFound();
});

app.MapGet("/api/categorias/{id}", ([FromRoute] int id,
                                 [FromServices] AppDataContext ctx) =>
{
    var categoria = ctx.Categorias.Find(id);
    if (categoria == null)
    {
        return Results.NotFound();
    }
    return Results.Ok(categoria);
});

app.Run();