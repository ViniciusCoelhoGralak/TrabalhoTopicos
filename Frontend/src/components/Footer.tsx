import {Link} from 'react-router-dom';
import './styles-footer.css';



export default function Footer() {
return (
        <footer>
        <div className="footer-links">
            <Link to="/">
                Home
            </Link>
        </div>

        <p>&copy; Sistema de gerenciamento de Biblioteca </p>
        <p>Desenvolvido por: Eduardo Leal, Gabriel Barboza, Gabryel Rocha, Vinicius Coelho.
        </p>
    </footer>
)

}

