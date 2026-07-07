import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styles from '../styles/Login.module.css'
import { useState } from 'react'
import { currentUserSession, usersStorageName } from '../data/db'

export function Login() {
    const user = JSON.parse(sessionStorage.getItem(currentUserSession)) || null;
    if (user) {
        return <Navigate to="/" />;
    }

    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const [loginInfo, setLoginInfo] = useState({email: "", password: ""});

    function handleChange(e, type) {
        const newInfo = {...loginInfo};
        if (type == 0) {
            newInfo.email = e.target.value;
        } else {
            newInfo.password = e.target.value;
        }
        setLoginInfo(newInfo);
    }

    function onSubmit(e) {
        e.preventDefault();

        if (loginInfo.email == "admin" && loginInfo.password == "12345") {
            const currentUser = {
                admin: true
            };
            sessionStorage.setItem(currentUserSession, JSON.stringify(currentUser))
            navigate("/");
        } else {
            const users = JSON.parse(localStorage.getItem(usersStorageName)) || [];

            for (let i = 0; i < users.length; i++ ) {
                if (loginInfo.email == users[i].email && loginInfo.password == users[i].password) {
                    const currentUser = {
                        admin: false,
                        index: i,
                        name: users[i].name,
                        lastName: users[i].lastName,
                        email: users[i].email,
                        cart: users[i].cart
                    };
                    sessionStorage.setItem(currentUserSession, JSON.stringify(currentUser))
                    navigate("/");
                    return;
                }
            }

            setError(true);
        }
    }

    return (
        <>
            <Header showRightButtons={false} isLogin={true} />
                <main>
                    <div className="body-space"></div>

                    <div className={styles.form}>
                        {error &&
                        <div className={styles.success}>Los datos son inválidos</div>
                        }
                        <form name="f-login" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="f-email">Correo electrónico</label>
                                <input
                                    required
                                    type="text"
                                    name="f-email"
                                    id="f-email"
                                    value={loginInfo.email}
                                    onChange={(e) => {handleChange(e, 0)}}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="f-password">Contraseña</label>
                                <input
                                    required
                                    type="password"
                                    name="f-password"
                                    id="f-password"
                                    value={loginInfo.password}
                                    onChange={(e) => {handleChange(e, 1)}}
                                />
                            </div>

                            <div className="centerButton">
                                <button type="submit" className={styles.button}>
                                    Iniciar sesión
                                </button>
                            </div>
                        </form>
                        <div>
                            ¿No tienes una cuenta?<br /> <Link to="/registrarse">Regístrate</Link>
                        </div>
                    </div>

                    <div className="body-space"></div>
                </main>
            <Footer />
        </>
    )
}
