using System;
using Microsoft.EntityFrameworkCore;

using API.Models;

public class AppDataContext : DbContext
{
    public DbSet<Livro> Livros { get; set; }
    public DbSet<Categoria> Categorias { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=biblioteca.db");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Categoria>().HasData(
            new Categoria() { Id = 1, Nome = "Romance" },
            new Categoria() { Id = 2, Nome = "Aventura"},
            new Categoria() { Id = 3, Nome = "Fantasia"}
        );
    }


}