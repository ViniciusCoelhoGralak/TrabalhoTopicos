using Microsoft.EntityFrameworkCore;
using GerenciamentoBibliotecaApi.Models;

namespace GerenciamentoBibliotecaApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Livro> Livros { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Estoque> Estoques { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Livro>()
                .HasOne(l => l.Categoria)
                .WithMany(c => c.Livros)
                .HasForeignKey(l => l.CategoriaId);

            modelBuilder.Entity<Livro>()
                .HasOne(l => l.Estoque)
                .WithOne(e => e.Livro)
                .HasForeignKey<Estoque>(e => e.LivroId);

            // 👇 Seed das categorias
            modelBuilder.Entity<Categoria>().HasData(
                new Categoria { Id = 1, Nome = "Romance" },
                new Categoria { Id = 2, Nome = "Ficção Científica" },
                new Categoria { Id = 3, Nome = "Biografia" }
            );

            base.OnModelCreating(modelBuilder);
        }

    }
}
