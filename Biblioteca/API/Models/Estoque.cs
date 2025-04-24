namespace GerenciamentoBibliotecaApi.Models;

public class Estoque
{
    public int Id { get; set; }
    public int LivroId { get; set; }
    public Livro Livro { get; set; }

    public int Quantidade { get; set; }
}