import {Link} from 'react-router-dom';
import './styles.css';

function Header() {

    return (
        <header>
            <nav className="navbar">
                <div className="logo">Produtos</div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/pages/produtos/listar">
                                Lista de Livros
                            </Link>
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;