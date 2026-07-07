import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import styles from '../styles/Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerFlex}>
                <div className={styles.footerSocials}>
                    <Link className={styles.footerLogo} to="/">
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
                
                <section className={styles.footerSection}>
                    <h1>Categorías</h1>
                    <Link to="/productos/consolas">Consolas</Link>
                    <Link to="/productos/videojuegos">Videojuegos</Link>
                    <Link to="/productos/ofertas">Ofertas</Link>
                    <Link to="/productos/preventas">Preventa</Link>
                </section>

                <section className={styles.footerSection}>
                    <h1>Marcas</h1>
                    <Link to="/productos/nintendo">Nintendo</Link>
                    <Link to="/productos/playstation">PlayStation</Link>
                    <Link to="/productos/xbox">Xbox</Link>
                </section>
            </div>
            
            <div className={styles.copyright}>
                &copy; 2026 Expertos Games. <br />Todos los derechos reservados.
            </div>
        </footer>
    )
}
