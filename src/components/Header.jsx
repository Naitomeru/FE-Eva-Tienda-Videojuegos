import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MainHeader() {
    return (
        <div className="header-main">
            <a id="header-logo" href="index.html">
                <img src="images/logo.png" />
            </a>
    
            <div id="header-searcher">
                <input type="text" placeholder="Buscar..." />
                <button type="submit">
                    <FontAwesomeIcon icon="fa fa-search" />
                </button>
            </div>

            <div id="header-left-buttons">
                <div id="cart-button">
                    <a href="carrito.html">
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                        <span>(0)</span>
                    </a>
                </div>
                <div id="header-login">
                    <a href="login.html">
                        Iniciar sesión
                    </a>
                    <a href="register.html">
                        Registrarse
                    </a>
                </div>
            </div>
            
            <div id="header-more-button">
                <FontAwesomeIcon icon="fa-solid fa-grip-lines">
                    <div className="header-button-popup">
                        <a href="galeria.html?tipo=Consolas&categoria=Nintendo">Consolas</a>
                        <a href="galeria.html?tipo=Videojuegos&categoria=Nintendo">Videojuegos</a>
                    </div>
                </FontAwesomeIcon>
            </div>
        </div>
    )
}

function HeaderButtons() {
    return (
        <div className="header-buttons-container">
            <div id="ofertas-button" className="header-button">
                Ofertas
            </div>
            <div id="preventas-button" className="header-button">
                Preventas
            </div>
            <div id="nintendo-button" className="header-button">
                Nintendo
                <div className="header-button-popup">
                    <a href="galeria.html?tipo=Consolas&categoria=Nintendo">Consolas</a>
                    <a href="galeria.html?tipo=Videojuegos&categoria=Nintendo">Videojuegos</a>
                </div>
            </div>
            <div id="playstation-button" className="header-button">
                PlayStation
                <div className="header-button-popup">
                    <a href="galeria.html?tipo=Consolas&categoria=PlayStation">Consolas</a>
                    <a href="galeria.html?tipo=Videojuegos&categoria=PlayStation">Videojuegos</a>
                </div>
            </div>
            <div id="xbox-button" className="header-button">
                Xbox
                <div className="header-button-popup">
                    <a href="galeria.html?tipo=Consolas&categoria=Xbox">Consolas</a>
                    <a href="galeria.html?tipo=Videojuegos&categoria=Xbox">Videojuegos</a>
                </div>
            </div>
        </div>
    )
}

export function Header() {
    return (
        <header>
            <MainHeader />
            <HeaderButtons />
        </header>
    )
}
