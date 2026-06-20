import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

export function Footer() {
    return (
        <footer>
            <div className="footer-flex">
                <div className="footer-socials">
                    <Link id="footer-logo" to="/">
                        <img src={Logo} />
                    </Link>
                    <nav>
                        <a>
                            <FontAwesomeIcon icon="fa fa-brands fa-facebook-square" size='2x' />
                        </a>
                        <a>
                            <FontAwesomeIcon icon="fa fa-brands fa-instagram" size='2x' />
                        </a>
                        <a>
                            <FontAwesomeIcon icon="fa fa-brands fa-tiktok" size='2x' />
                        </a>
                    </nav>
                </div>
                
                <section className="footer-section">
                    <h1>Categorías</h1>
                    <Link to="/consolas">Consolas</Link>
                    <Link to="/videojuegos">Videojuegos</Link>
                    <Link to="/ofertas">Ofertas</Link>
                    <Link to="/preventas">Preventa</Link>
                </section>

                <section className="footer-section">
                    <h1>Marcas</h1>
                    <Link to="/nintendo">Nintendo</Link>
                    <Link to="/playstation">PlayStation</Link>
                    <Link to="/xbox">Xbox</Link>
                </section>
            </div>
            
            <div className="copyright">
                &copy; 2026 Expertos Games. <br />Todos los derechos reservados.
            </div>
        </footer>
    )
}
