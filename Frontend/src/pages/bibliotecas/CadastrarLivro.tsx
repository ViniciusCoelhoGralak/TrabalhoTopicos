import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Categoria } from '../../models/Categoria';

function CadastrarLivro() {
    const { id } = useParams();

    const [titulo, setTitulo] = useState("");
    const [anoPublicacao, setAnoPublicacao] = useState<number>(0);
    const [categoriaId, setCategoriaId] = useState<any>();
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
        carregarCategorias();
        buscarLivroPorId(id);
    }, []);

    function buscarLivroPorId(id: any) {
        if (id == null) {
            return;
        }

        axios.get(`http://localhost:5000/api/livros/${id}`)
        .then( response =>{
            var livro = response.data;
            setTitulo(livro.titulo);
            setAnoPublicacao(livro.anoPublicacao);
            setCategoriaId(livro.categoriaId);
            setCategorias(livro.categorias);
        })

        .catch( (error) => {
            console.log(error)
            alert("Erro ao carregar o livro");
        });
    }

     function carregarCategorias() {
        axios.get("http://localhost:5000/api/categorias")
        .then( response =>{
            setCategorias(response.data);
            setCategoriaId(response.data[0]?.id);
        })
        .catch( () => {
            alert("Erro ao carregar as categorias");
        });
    }

    function salvar (e: any) {
        e.preventDefault();
        const p = {
            titulo: titulo,
            anoPublicacao: Number(anoPublicacao),
            categoriaId: categoriaId,
            categorias: categorias,
        }
        
        if (id == null) {
            cadastrar(p);
        } else {
            alterar(id, p);
        }
    }

    function cadastrar(livro: any) {
        axios.post("http://localhost:5000/api/livros", livro)
        .then(response => {
            console.log(response);
            alert("Livro cadastrado com sucessor");
        })
        .catch( error => {
            alert("Ocorreu um erro ao cadastrar o livro");
        })
    }

    function alterar(id: any, livro: any) {
        axios.put(`http://localhost:5291/api/livro/${id}`, livro)
        .then(response => {
            console.log(response);
            alert("Livro alterado com sucessor");
        })
        .catch( error => {
            alert("Ocorreu um erro ao alterar o livro");
        })
    }
    
}
export default CadastrarLivro;