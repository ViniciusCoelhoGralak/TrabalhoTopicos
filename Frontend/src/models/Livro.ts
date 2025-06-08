import { Categoria } from "./Categoria";

export interface Livro
{
    id: number;
    titulo: string;
    anoPublicacao: number;
    categoriaId: number;
    categoria: Categoria;
}