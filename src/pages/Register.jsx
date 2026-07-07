import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';
import { useState } from 'react';
import { currentUserSession, usersStorageName } from '../data/db';

export function Register() {
    const user = JSON.parse(sessionStorage.getItem(currentUserSession)) || null;
    if (user) {
        return <Navigate to="/" />;
    }

    const navigate = useNavigate();

    const [errorState, setErrorState] = useState({
        success: false,
        password_error: false
    });

    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    function handleChange(e, type) {
        const newInfo = {...registerInfo};
        if (type == 0) {
            newInfo.name = e.target.value;
        } else if (type == 1) {
            newInfo.lastName = e.target.value;
        } else if (type == 2) {
            newInfo.email = e.target.value;
        } else if (type == 3) {
            newInfo.password = e.target.value;
        } else if (type == 4) {
            newInfo.confirmPassword = e.target.value;
        }
        setRegisterInfo(newInfo);
        setErrorState({
            success: false,
            password_error: false
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        if (registerInfo.password != registerInfo.confirmPassword) {
            setErrorState({
                success: false,
                password_error: true
            });
            return;
        }

        const users = JSON.parse(localStorage.getItem(usersStorageName)) || [];
        users.push({
            name: registerInfo.name,
            lastName: registerInfo.lastName,
            email: registerInfo.email,
            password: registerInfo.password,
            cart: []
        });
        localStorage.setItem(usersStorageName, JSON.stringify(users));

        setErrorState({
            success: true,
            password_error: false
        });
        setRegisterInfo({
            name: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        });
    }

    return (
        <>
            <Header showRightButtons={false} isLogin={true} />
                <main>
                    <div className="body-space"></div>

                    <div className={styles.form}>
                        {errorState.success &&
                        <div className={styles.success}>¡Se ha registrado con éxito!</div>
                        }
                        <form name="f-login" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="f-name">
                                    Nombre
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="f-name"
                                    id="f-name"
                                    value={registerInfo.name}
                                    onChange={(e) => {handleChange(e, 0)}}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="f-lastname">Apellido</label>
                                <input
                                    required
                                    type="text"
                                    name="f-lastname"
                                    id="f-lastname"
                                    value={registerInfo.lastName}
                                    onChange={(e) => {handleChange(e, 1)}}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="f-email">Correo electrónico</label>
                                <input
                                    required
                                    type="email"
                                    name="f-email"
                                    id="f-email"
                                    value={registerInfo.email}
                                    onChange={(e) => {handleChange(e, 2)}}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="f-password">Contraseña</label>
                                <input
                                    required
                                    type="password"
                                    name="f-password"
                                    id="f-password"
                                    value={registerInfo.password}
                                    onChange={(e) => {handleChange(e, 3)}}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="f-confirm-password">Confirmar contraseña</label>
                                <input
                                    required
                                    type="password"
                                    name="f-confirm-password"
                                    id="f-confirm-password"
                                    value={registerInfo.confirmPassword}
                                    onChange={(e) => {handleChange(e, 4)}}
                                />
                            </div>

                            {errorState.password_error &&
                            <p className={styles.error}>Las contraseñas no coinciden</p>
                            }

                            <div className="centerButton">
                                <button type="submit" className={styles.button}>
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
