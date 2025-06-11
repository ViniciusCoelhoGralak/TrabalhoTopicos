import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Categoria } from '../../models/Categoria';
import './cadastrar-livro-modulo.css';

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
            alert("Livro cadastrado com sucesso");
        })
        .catch( error => {
            alert("Ocorreu um erro ao cadastrar o livro");
        })
    }

    function alterar(id: any, livro: any) {
        axios.put(`http://localhost:5000/api/livros/${id}`, livro)
        .then(response => {
            console.log(response);
            alert("Livro alterado com sucesso");
        })
        .catch( error => {
            alert("Ocorreu um erro ao alterar o livro");
        })
    }
    return (
        <div className='cad'>
            <h1>Cadastrar livro</h1>
            <form onSubmit={salvar}>
                <div>
                    <label htmlFor="titulo">Titulo</label>
                    <input
                        onChange={(e: any) => setTitulo(e.target.value)}
                        value={titulo}
                        type="text"
                        id="titulo"
                        placeholder="Digite o título do Livro"
                        required/>
                </div>



                <div>
                    <label htmlFor="anoPublicacao">Ano de publicação</label>
                    <input
                        onChange={(e: any) => setAnoPublicacao(e.target.value)}
                        value={anoPublicacao}
                        type="number"
                        min="1"
                        id="anoPublicacao"
                        step="1"
                        placeholder="Digite o ano de publicação do livro"
                        required/>
                </div>


                <div>
                    <label htmlFor="categoria">Categoria</label>
                    <select id="categoria"
                        onChange={(e: any) => setCategoriaId(e.target.value)}
                        value={categoriaId} >
                        {categorias.map( (item) => (
                            <option key={item.id} value={item.id} >
                                {item.nome}
                            </option>
                        ))}
                    </select>
                </div>
                
                <button type="submit">
                    Salvar
                </button>
            </form>
        </div>
    );
}
export default CadastrarLivro;
