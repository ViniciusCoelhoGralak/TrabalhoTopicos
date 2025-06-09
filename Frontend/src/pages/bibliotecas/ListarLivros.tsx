import { useEffect, useState } from 'react';

import axios from 'axios';

import './listar-livro-modulo.css';
import { Livro} from '../../models/Livro';
import { Link } from 'react-router-dom';

function ListarLivros() {
    const [livros, setLivros] = useState<Livro[]>([]);

    useEffect(() => {
        carregarLivros();
    }, []);

    function carregarLivros() {
        axios.get("http://localhost:5000/api/livros")
        .then( response =>{
            setLivros(response.data);
            console.table(response.data);
        })
        .catch( () => {
            alert("error");
        });
    }
    function remover(id: number) {
        axios.delete(`http://localhost:5000/api/livros/${id}`)
        .then( () => {
            alert("Livro removido com sucesso");
            carregarLivros();
        })
        .catch( () => 
            alert("Não foi possivel remover o Livro")
        )
    }
       return (
        <div className="lista-container">
            <h1>Lista de Livros</h1>

            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Titulo</td>
                        <td>Ano de Publicação</td>
                        <td>Categoria ID</td>
                        <td>Categoria</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livros) => (
                        <tr key={livros.id}>
                            <td>{livros.id}</td>
                            <td>{livros.titulo}</td>
                            <td>{livros.anoPublicacao}</td>
                            <td>{livros.categoriaId}</td>
                            <td>{livros.categoria.nome}</td>
                            <td>
                                <button className="remover"
                                        onClick={() => remover(livros.id)}>
                                    Remover
                                </button>
                                <Link to={`/pages/livros/alterar/${livros.id}`}>
                                    Alterar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};
export default ListarLivros;