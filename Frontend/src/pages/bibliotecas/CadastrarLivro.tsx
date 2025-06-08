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
            var produto = response.data;
            setTitulo(produto.nome);
            setAnoPublicacao(produto.preco);
            setCategoriaId(produto.descricao);
        })
        .catch( (error) => {
            console.log(error)
            alert("Erro ao carregar o produto");
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
}
export default CadastrarLivro;