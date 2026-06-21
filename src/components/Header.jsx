import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { cartStorageName } from '../data/db'

function MainHeader({showRightButtons}) {
    const cart = JSON.parse( localStorage.getItem(cartStorageName) ) || [];
    const quantity = cart.length;

    return (
        <div className="header-main">
            <Link id="header-logo" to="/">
                <img src={Logo} />
            </Link>
    
            <div id="header-searcher">
                <input type="text" placeholder="Buscar..." />
                <button type="submit">
                    <FontAwesomeIcon icon="fa fa-search" />
                </button>
            </div>

            {showRightButtons &&
            <div id="header-right-buttons">
                <div id="cart-button">
                    <Link to="/cart" id="cart-link">
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" id="cart-icon" />
                        <span>({quantity})</span>
                    </Link>
                </div>
                <div id="header-login">
                    <Link to="/login">
                        Iniciar sesión
                    </Link>
                    <Link to="/register">
                        Registrarse
                    </Link>
                </div>
            </div>
            }
            
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

function Popup({ category }) {
    return (
        <div className="header-button-popup">
            <Link to={"/" + category + "/consolas"}>Consolas</Link>
            <Link to={"/" + category + "/videojuegos"}>Videojuegos</Link>
        </div>
    )
}

function HeaderButtons() {
    const [nintendoPopup, setNintendoPopup] = useState(false);
    const [playstationPopup, setPlaystationPopup] = useState(false);
    const [xboxPopup, setXboxPopup] = useState(false);

    return (
        <div className="header-buttons-container">
            <Link to="/ofertas" id="ofertas-button" className="header-button">
                Ofertas
            </Link>
            <Link to="/preventas" id="preventas-button" className="header-button">
                Preventas
            </Link>
            <div id="nintendo-button" className="header-button"
                onMouseEnter={() => {
                    setNintendoPopup(true);
                }}
                onMouseLeave={() => {
                    setNintendoPopup(false);
                }}
            >
                Nintendo
                {nintendoPopup && <Popup category={"nintendo"} />}
            </div>
            <div id="playstation-button" className="header-button"
                onMouseEnter={() => {
                    setPlaystationPopup(true);
                }}
                onMouseLeave={() => {
                    setPlaystationPopup(false);
                }}
            >
                PlayStation
                {playstationPopup && <Popup category={"playstation"} />}
            </div>
            <div id="xbox-button" className="header-button"
                onMouseEnter={() => {
                    setXboxPopup(true);
                }}
                onMouseLeave={() => {
                    setXboxPopup(false);
                }}
            >
                Xbox
                {xboxPopup && <Popup category={"xbox"} />}
            </div>
        </div>
    )
}

export function Header({showRightButtons=true}) {
    return (
        <header>
            <MainHeader showRightButtons={showRightButtons} />
            <HeaderButtons />
        </header>
    )
}
