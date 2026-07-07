import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { cartStorageName, currentUserSession } from '../data/db'
import { createPortal } from 'react-dom'
import styles from '../styles/Header.module.css'
import { saveUser } from '../util/session'

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
            <Link to="/productos/ofertas" onClick={() => setMoreButtonPopup(false)}>Ofertas</Link>
            <div className={styles.popupSeparator}></div>
            <Link to="/productos/preventas" onClick={() => setMoreButtonPopup(false)}>Preventas</Link>
            <div className={styles.popupSeparator}></div>
            <div onClick={() => {
                setConsolas(!consolas)
            }}>
                <Link to="/productos/consolas" onClick={() => setMoreButtonPopup(false)}>Consolas</Link>
                {consolas ?
                <FontAwesomeIcon icon="fa-solid fa-angle-down" className={styles.dropdownButton} />
                :
                <FontAwesomeIcon icon="fa-solid fa-angle-up" className={styles.dropdownButton} />
                }
            </div>
            {consolas &&
            <div className={styles.dropdownContent}>
                <Link to="/productos/nintendo/consolas" onClick={() => setMoreButtonPopup(false)}>
                    &gt; Nintendo
                </Link>
                <Link to="/productos/playstation/consolas" onClick={() => setMoreButtonPopup(false)}>
                    &gt; PlayStation
                </Link>
                <Link to="/productos/xbox/consolas" onClick={() => setMoreButtonPopup(false)}>
                    &gt; XBOX
                </Link>
            </div>
            }
            <div className={styles.popupSeparator}></div>
            <div onClick={() => {
                setVideojuegos(!videojuegos)
            }}>
                <Link to="/productos/videojuegos" onClick={() => setMoreButtonPopup(false)}>Videojuegos</Link>
                {videojuegos ?
                <FontAwesomeIcon icon="fa-solid fa-angle-down" className={styles.dropdownButton} />
                :
                <FontAwesomeIcon icon="fa-solid fa-angle-up" className={styles.dropdownButton} />
                }
            </div>
            {videojuegos &&
            <div className={styles.dropdownContent}>
                <Link to="/productos/nintendo/videojuegos" onClick={() => setMoreButtonPopup(false)}>
                    &gt; Nintendo
                </Link>
                <Link to="/productos/playstation/videojuegos" onClick={() => setMoreButtonPopup(false)}>
                    &gt; PlayStation
                </Link>
                <Link to="/productos/xbox/videojuegos" onClick={() => setMoreButtonPopup(false)}>
                    &gt; XBOX
                </Link>
            </div>
            }
        </div>
    )
}

function MainHeader({showRightButtons, isLogin}) {
    const user = JSON.parse(sessionStorage.getItem(currentUserSession)) || null;

    const navigate = useNavigate();

    const cart = JSON.parse( localStorage.getItem(cartStorageName) ) || [];
    const quantity = cart.length;

    const [moreButtonPopup, setMoreButtonPopup] = useState(false);

    function onMoreButtonClick() {
        setMoreButtonPopup(!moreButtonPopup);
    }

    function closeSession() {
        if (!user.admin) {
            saveUser(user);
        }
        sessionStorage.removeItem(currentUserSession);
        navigate("/");
    }

    const rightButtons = user == null ?
    (
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
    ) :
    (
        <div className={styles.rightButtons}>
            {user.admin ?
            <>
                <div className={styles.userName}>ADMIN</div>
                <div className={styles.login}>
                    <Link>Opciones</Link>
                    <button onClick={closeSession}>
                        Cerrar sesión
                    </button>
                </div>
            </>
            :
            <>
                <div className={styles.cartButton}>
                    <Link to="/carrito" className={styles.cartLink}>
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className={styles.cartIcon} />
                        <span>({user.cart.length})</span>
                    </Link>
                </div>
                <div className={styles.login}>
                    <FontAwesomeIcon icon="fa-solid fa-circle-user" size='2x' className={styles.userIcon} />
                    <button onClick={closeSession}>
                        Cerrar sesión
                    </button>
                </div>
            </>
            }
        </div>
    )

    return (
        <div className={styles.main}>
            <Link to="/" className={styles.logo} >
                <img src={Logo} className={styles.logoImg}  />
            </Link>
    
            <div className={styles.headerSearcher}>
                <input type="text" placeholder="Buscar..." className={styles.searcherInput}  />
                <button type="submit"  className={styles.searcherButton} >
                    <FontAwesomeIcon icon="fa fa-search" />
                </button>
            </div>

            {showRightButtons && rightButtons}
            
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
            <Link to={"/productos/" + category + "/consolas"}>Consolas</Link>
            <Link to={"/productos/" + category + "/videojuegos"}>Videojuegos</Link>
        </div>
    )
}

function HeaderButtons() {
    const [nintendoPopup, setNintendoPopup] = useState(false);
    const [playstationPopup, setPlaystationPopup] = useState(false);
    const [xboxPopup, setXboxPopup] = useState(false);

    return (
        <div className={styles.headerButtonsContainer}>
            <Link to="/productos/ofertas" className={styles.headerButton}>
                Ofertas
            </Link>
            <Link to="/productos/preventas" className={styles.headerButton}>
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

export function Header({showRightButtons=true, isLogin=false}) {
    return (
        <header className={styles.header}>
            <MainHeader showRightButtons={showRightButtons} isLogin={isLogin} />
            <HeaderButtons />
        </header>
    )
}
