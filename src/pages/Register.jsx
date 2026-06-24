import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
import styles from '../styles/Login.module.css'

export function Register() {
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
                                <label htmlFor="f-name">Nombre</label>
                                <input type="text" name="f-name" id="f-name" />
                            </div>
                            
                            <div>
                                <label htmlFor="f-lastname">Apellido</label>
                                <input type="text" name="f-lastname" id="f-lastname" />
                            </div>
                            
                            <div>
                                <label htmlFor="f-email">Correo electrónico</label>
                                <input type="text" name="f-email" id="f-email" />
                            </div>
                            
                            <div>
                                <label htmlFor="f-password">Contraseña</label>
                                <input type="text" name="f-password" id="f-password" />
                            </div>
                            
                            <div>
                                <label htmlFor="f-confirm-password">Confirmar contraseña</label>
                                <input type="text" name="f-confirm-password" id="f-confirm-password" />
                            </div>

                            <div className="centerButton">
                                <button className={styles.button}>
                                    Crear cuenta
                                </button>
                            </div>
                        </form>
                        <div>
                            ¿Ya tienes una cuenta?<br /> <Link to="/iniciar-sesion">Inicia sesión</Link>
                        </div>
                    </div>

                    <div className="body-space"></div>
                </main>
            <Footer />
        </>
    )
}
