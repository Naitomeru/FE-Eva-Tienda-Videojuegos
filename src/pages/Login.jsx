import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'

export function Login() {
    return (
        <>
            <Header showRightButtons={false} />
                <main>
                    <div className="body-space"></div>

                    <div id="login-form">
                        <form name="f-login" onSubmit={(e) => {
                            e.preventDefault();
                        }}>
                            <div>
                                <label for="f-email">Correo electrónico</label>
                                <input type="text" name="f-email" id="f-email" />
                            </div>
                            
                            <div>
                                <label for="f-password">Contraseña</label>
                                <input type="text" name="f-password" id="f-password" />
                            </div>

                            <div className="center-button">
                                <button id="login-button">
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
