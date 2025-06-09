import {Link} from 'react-router-dom';
import './styles.css';

function Header() {

    return (
        <header>
            <nav className="navbar">
                <div className="logo">Biblioteca</div>
                    <ul className="nav-links">
                        <li>
                        <Link to="/">
                            Home
                        </Link>
                        </li>
                        <li>
                            <Link to="/pages/livros/listar">
                                Lista de Livros
                            </Link>
                        </li>
                        <li>
                            <Link to="/pages/livros/cadastrar">
                                Cadastrar um Livro
                            </Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;