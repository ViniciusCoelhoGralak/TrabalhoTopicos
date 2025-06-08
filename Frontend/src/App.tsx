import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import CadastrarLivro from "./pages/bibliotecas/CadastrarLivro";
import ListarLivros from "./pages/bibliotecas/ListarLivros";
//1 - Um componente SEMPRE deve começar com a primeira letra
//maiúscula
//2 - Todo componente DEVE ser uma função do JS
//3 - Todo deve retornar apenas UM elemento HTML
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<ListarLivros />} />
          <Route path="/pages/livros/listar" element={<ListarLivros  />} />
          <Route path="/pages/livros/cadastrar" element={<CadastrarLivro />} />
          <Route path="/pages/livros/alterar/:id" element={<CadastrarLivro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//4 - OBRIGATORIAMENTE o componente DEVE ser exportado
export default App;
