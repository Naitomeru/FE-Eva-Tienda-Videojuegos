import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { cartStorageName } from '../data/db'
import { createPortal } from 'react-dom'
import styles from '../styles/Header.module.css'

function HeaderButtonsPopup({setMoreButtonPopup}) {
    const [consolas, setConsolas] = useState(false);
    const [videojuegos, setVideojuegos] = useState(false);

    return (
        <div className={styles.mainDropdown}>
            <Link to="/carrito">Mi Carrito</Link>
            <div className={styles.popupSeparator}></div>
            <Link to="/iniciar-sesion">Iniciar sesión</Link>
            <div className={styles.popupSeparator}></div>
            <Link to="/registrarse">Registrarse</Link>
            <div className={styles.popupSeparator}></div>
            <Link to="/ofertas" onClick={() => setMoreButtonPopup(false)}>Ofertas</Link>
            <div className={styles.popupSeparator}></div>
            <Link to="/preventas" onClick={() => setMoreButtonPopup(false)}>Preventas</Link>
            <div className={styles.popupSeparator}></div>
            <div onClick={() => {
                setConsolas(!consolas)
            }}>
                <Link to="/consolas" onClick={() => setMoreButtonPopup(false)}>Consolas</Link>
                {consolas ?
                <FontAwesomeIcon icon="fa-solid fa-angle-down" className={styles.dropdownButton} />
                :
                <FontAwesomeIcon icon="fa-solid fa-angle-up" className={styles.dropdownButton} />
                }
            </div>
            {consolas &&
            <div className={styles.dropdownContent}>
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
            <div className={styles.popupSeparator}></div>
            <div onClick={() => {
                setVideojuegos(!videojuegos)
            }}>
                <Link to="/videojuegos" onClick={() => setMoreButtonPopup(false)}>Videojuegos</Link>
                {videojuegos ?
                <FontAwesomeIcon icon="fa-solid fa-angle-down" className={styles.dropdownButton} />
                :
                <FontAwesomeIcon icon="fa-solid fa-angle-up" className={styles.dropdownButton} />
                }
            </div>
            {videojuegos &&
            <div className={styles.dropdownContent}>
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
        <div className={styles.main}>
            <Link to="/" className={styles.logo} >
                <img src={Logo} className={styles.logoImg}  />
            </Link>
    
            <div className="headerSearcher">
                <input type="text" placeholder="Buscar..." className={styles.searcherInput}  />
                <button type="submit"  className={styles.searcherButton} >
                    <FontAwesomeIcon icon="fa fa-search" />
                </button>
            </div>

            {showRightButtons &&
            <div className={styles.rightButtons}>
                <div className={styles.cartButton}>
                    <Link to="/carrito" className={styles.cartLink}>
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className={styles.cartIcon} />
                        <span>({quantity})</span>
                    </Link>
                </div>
                <div className={styles.login}>
                    <Link to="/iniciar-sesion">
                        Iniciar sesión
                    </Link>
                    <Link to="/registrarse">
                        Registrarse
                    </Link>
                </div>
            </div>
            }
            
            <div className={styles.moreButton}>
                <FontAwesomeIcon icon="fa-solid fa-grip-lines" onClick={onMoreButtonClick} />
                {moreButtonPopup &&
                createPortal(<HeaderButtonsPopup setMoreButtonPopup={setMoreButtonPopup} />, document.getElementsByTagName("header")[0])
                }
            </div>
        </div>
    )
}

function Popup({ category }) {
    return (
        <div className={styles.buttonPopup}>
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
        <div className={styles.headerButtonsContainer}>
            <Link to="/ofertas" className={styles.headerButton}>
                Ofertas
            </Link>
            <Link to="/preventas" className={styles.headerButton}>
                Preventas
            </Link>
            <div className={styles.headerButton}
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
            <div className={styles.headerButton}
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
            <div className={styles.headerButton}
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
        <header className={styles.header}>
            <MainHeader showRightButtons={showRightButtons} />
            <HeaderButtons />
        </header>
    )
}
