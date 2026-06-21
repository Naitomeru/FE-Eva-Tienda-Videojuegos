import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'

export function Register() {
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
                                <label for="f-name">Nombre</label>
                                <input type="text" name="f-name" id="f-name" />
                            </div>
                            
                            <div>
                                <label for="f-lastname">Apellido</label>
                                <input type="text" name="f-lastname" id="f-lastname" />
                            </div>
                            
                            <div>
                                <label for="f-email">Correo electrónico</label>
                                <input type="text" name="f-email" id="f-email" />
                            </div>
                            
                            <div>
                                <label for="f-password">Contraseña</label>
                                <input type="text" name="f-password" id="f-password" />
                            </div>
                            
                            <div>
                                <label for="f-confirm-password">Confirmar contraseña</label>
                                <input type="text" name="f-confirm-password" id="f-confirm-password" />
                            </div>

                            <div className="center-button">
                                <button id="register-button">
                                    Crear cuenta
                                </button>
                            </div>
                        </form>
                        <div>
                            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
                        </div>
                    </div>

                    <div className="body-space"></div>
                </main>
            <Footer />
        </>
    )
}
