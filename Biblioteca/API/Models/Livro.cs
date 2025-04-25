namespace API.Models;

public class Livro {
    public int Id { get; set;}
    required public string Titulo { get; set;}
    public int AnoPublicacao { get; set;}

    public int CategoriaId { get; set;}

    required public Categoria Categoria { get; set;}
}