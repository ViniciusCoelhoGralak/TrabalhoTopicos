import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home-livro-modulo.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Sistema de Livros</h1>
      
      <div className="home-buttons">
        <button 
          onClick={() => navigate('/pages/livros/cadastrar')} 
          className="home-button"
        >
          Cadastrar Livro
        </button>
        <button 
          onClick={() => navigate('/pages/livros/listar')} 
          className="home-button"
        >
          Listar Livros
        </button>
      </div>
    </div>
  );
};

export default Home;