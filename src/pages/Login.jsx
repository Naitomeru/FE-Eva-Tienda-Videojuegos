import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
import styles from '../styles/Login.module.css'

export function Login() {
    return (
        <>
            <Header showRightButtons={false} isLogin={true} />
                <main>
                    <div className="body-space"></div>

                    <div className={styles.form}>
                        <form name="f-login" onSubmit={(e) => {
                            e.preventDefault();
                        }}>
                            <div>
                                <label htmlFor="f-email">Correo electrónico</label>
                                <input type="text" name="f-email" id="f-email" />
                            </div>
                            
                            <div>
                                <label htmlFor="f-password">Contraseña</label>
                                <input type="text" name="f-password" id="f-password" />
                            </div>

                            <div className="centerButton">
                                <button className={styles.button}>
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
