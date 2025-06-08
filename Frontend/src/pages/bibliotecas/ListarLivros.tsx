import { useEffect, useState } from 'react';

import axios from 'axios';


import { Livro} from '../../models/Livro';
import { Link } from 'react-router-dom';

function ListarLivros() {
    const [Livros, setLivros] = useState<Livro[]>([]);

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
};
export default ListarLivros;