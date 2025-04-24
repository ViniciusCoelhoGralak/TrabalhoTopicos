namespace API.Models;

public class Livro
{
    public int Id { get; set; }
    public string Titulo { get; set; }
    public string Autor { get; set; } 
    public DateTime DataPublicação { get; set; }

    public int CategoriaId { get; set; }
    public int Categoria Categoria { get; set; }

    public Estoque Estoque { get; set; }
    
}
