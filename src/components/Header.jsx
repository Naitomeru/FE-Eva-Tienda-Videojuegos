import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { cartStorageName } from '../data/db'
import { createPortal } from 'react-dom'

function HeaderButtonsPopup({setMoreButtonPopup}) {
    const [consolas, setConsolas] = useState(false);
    const [videojuegos, setVideojuegos] = useState(false);

    return (
        <div id="header-links">
            <Link to="/carrito">Mi Carrito</Link>
            <div className="popup-separator"></div>
            <Link to="/iniciar-sesion">Iniciar sesión</Link>
            <div className="popup-separator"></div>
            <Link to="/registrarse">Registrarse</Link>
            <div className="popup-separator"></div>
            <Link to="/ofertas" onClick={() => setMoreButtonPopup(false)}>Ofertas</Link>
            <div className="popup-separator"></div>
            <Link to="/preventas" onClick={() => setMoreButtonPopup(false)}>Preventas</Link>
            <div className="popup-separator"></div>
            <div className='dropdown' onClick={() => {
                setConsolas(!consolas)
            }}>
                <Link to="/consolas" onClick={() => setMoreButtonPopup(false)}>Consolas</Link>
                {consolas ?
                <FontAwesomeIcon icon="fa-solid fa-angle-down" className='dropdown-button' />
                :
                <FontAwesomeIcon icon="fa-solid fa-angle-up" className='dropdown-button' />
                }
            </div>
            {consolas &&
            <div className='dropdown-content'>
                <Link to="/nintendo/consolas" onClick={() => setMoreButtonPopup(false)}>
                    &gt; Nintendo
                </Link>
                <Link to="/playstation/consolas" onClick={() => setMoreButtonPopup(false)}>
                    &gt; PlayStation
                </Link>
                <Link to="/xbox/consolas" onClick={() => setMoreButtonPopup(false)}>
                    &gt; XBOX
                </Link>
            </div>
            }
            <div className="popup-separator"></div>
            <div className='dropdown' onClick={() => {
                setVideojuegos(!videojuegos)
            }}>
                <Link to="/videojuegos" onClick={() => setMoreButtonPopup(false)}>Videojuegos</Link>
                {videojuegos ?
                <FontAwesomeIcon icon="fa-solid fa-angle-down" className='dropdown-button' />
                :
                <FontAwesomeIcon icon="fa-solid fa-angle-up" className='dropdown-button' />
                }
            </div>
            {videojuegos &&
            <div className='dropdown-content'>
                <Link to="/nintendo/videojuegos" onClick={() => setMoreButtonPopup(false)}>
                    &gt; Nintendo
                </Link>
                <Link to="/playstation/videojuegos" onClick={() => setMoreButtonPopup(false)}>
                    &gt; PlayStation
                </Link>
                <Link to="/xbox/videojuegos" onClick={() => setMoreButtonPopup(false)}>
                    &gt; XBOX
                </Link>
            </div>
            }
        </div>
    )
}

function MainHeader({showRightButtons}) {
    const cart = JSON.parse( localStorage.getItem(cartStorageName) ) || [];
    const quantity = cart.length;

    const [moreButtonPopup, setMoreButtonPopup] = useState(false);

    function onMoreButtonClick() {
        setMoreButtonPopup(!moreButtonPopup);
    }

    return (
        <div id="header-main">
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
                    <Link to="/carrito" id="cart-link">
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" id="cart-icon" />
                        <span>({quantity})</span>
                    </Link>
                </div>
                <div id="header-login">
                    <Link to="/iniciar-sesion">
                        Iniciar sesión
                    </Link>
                    <Link to="/registrarse">
                        Registrarse
                    </Link>
                </div>
            </div>
            }
            
            <div id="header-more-button">
                <FontAwesomeIcon icon="fa-solid fa-grip-lines" id="more-button-icon" onClick={onMoreButtonClick} />
                {moreButtonPopup &&
                createPortal(<HeaderButtonsPopup setMoreButtonPopup={setMoreButtonPopup} />, document.getElementsByTagName("header")[0])
                }
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
