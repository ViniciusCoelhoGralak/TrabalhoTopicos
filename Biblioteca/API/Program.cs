using Microsoft.EntityFrameworkCore;
using GerenciamentoBibliotecaApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Adiciona o AppDbContext ao contêiner de serviços
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();
