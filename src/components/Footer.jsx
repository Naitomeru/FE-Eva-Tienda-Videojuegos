import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer() {
    return (
        <footer>
            <div className="footer-flex">
                <div className="footer-socials">
                    <a id="footer-logo" href="index.html">
                        <img src="images/logo.png" />
                    </a>
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
                    <a href="galeria.html?tipo=consolas">Consolas</a>
                    <a href="galeria.html?tipo=videojuegos">Videojuegos</a>
                    <a href="galeria.html?tipo=ofertas">Ofertas</a>
                    <a href="galeria.html?tipo=preventas">Preventa</a>
                </section>

                <section className="footer-section">
                    <h1>Marcas</h1>
                    <a href="galeria.html?tipo=marca&categoria=Nintendo">Nintendo</a>
                    <a href="galeria.html?tipo=marca&categoria=PlayStation">PlayStation</a>
                    <a href="galeria.html?tipo=marca&categoria=Xbox">Xbox</a>
                </section>
            </div>
            
            <div className="copyright">
                &copy; 2026 Expertos Games. <br />Todos los derechos reservados.
            </div>
        </footer>
    )
}
