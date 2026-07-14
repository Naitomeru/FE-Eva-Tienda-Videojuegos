import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import styles from "../styles/Admin.module.css";
import { useState } from "react";
import { currentUserSession, dbStorageName } from "../util/constants";

export function AdminForm() {
    const user = JSON.parse(sessionStorage.getItem(currentUserSession)) || null;
    if (!user || !user.admin) {
        return <Navigate to="/" />;
    }

    const { tipo, id } = useParams();
    const [tipoProducto, setTipoProducto] = useState(
        tipo === "videojuego" ? "Videojuego" : "Consola"
    );
    const navigate = useNavigate();

    const db = JSON.parse(localStorage.getItem(dbStorageName));

    let producto = null;
    const editando = id !== undefined;
    if (editando) {
        if (tipo === "consola") {
            producto = db.consoles.find(
                item => item.id === Number(id)
            );
        } else {
            producto = db.videogames.find(
                item => item.id === Number(id)
            );
        }
    }

    return (
        <>
            <Header isInAdminPage={true} />

            <main className={styles.main}>

                <div className={styles.formContainer}>

                    <h1>
                        {editando ? "Modificar Producto" : "Agregar Producto"}
                    </h1>

                    <div className={styles.imagePreview}>
                        <img
                            src={producto?.path_image || "/logo.png"}
                            alt="Vista previa"
                        />
                    </div>

                    <label>Título</label>

                    <input
                        type="text"
                        defaultValue={producto?.title}
                    />

                    <label>Precio</label>

                    <input
                        type="number"
                        defaultValue={producto?.price}
                    />

                    <label>Marca</label>

                    <select defaultValue={producto?.category}>

                        <option>Nintendo</option>
                        <option>Playstation</option>
                        <option>Xbox</option>

                    </select>

                    <label>Tipo</label>

                    <select
                        value={tipoProducto}
                        onChange={(e) => setTipoProducto(e.target.value)}
                    >

                        <option>Consola</option>
                        <option>Videojuego</option>

                    </select>

                    <label>
                        {tipoProducto === "Consola"
                            ? "Modelo"
                            : "Consola compatible"}
                    </label>

                    <select
                        defaultValue={producto?.console || producto?.title}
                    >

                        {tipoProducto === "Consola" ? (
                            <>
                                <option>Nintendo Switch</option>
                                <option>Nintendo Switch OLED Neon Black</option>
                                <option>Nintendo Switch OLED Neon White</option>
                                <option>Nintendo Switch 2</option>
                                <option>PlayStation 5 Slim</option>
                                <option>PlayStation 5 Slim Digital</option>
                                <option>PlayStation 5 Slim Digital Astrobot</option>
                                <option>Xbox One S</option>
                                <option>Xbox One X</option>
                                <option>Xbox Series S</option>
                                <option>Xbox Series X</option>
                            </>
                        ) : (
                            <>
                                <option>Nintendo Switch</option>
                                <option>Nintendo Switch 2</option>
                                <option>PlayStation 5</option>
                                <option>Xbox Series X</option>
                            </>
                        )}

                    </select>

                    <label>Imagen del producto</label>

                    <input
                        type="file"
                        accept="image/*"
                    />

                    <div className={styles.checks}>

                        <label>
                            <input
                                type="checkbox"
                                defaultChecked={producto?.discount !== undefined}
                            />
                            Oferta
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                defaultChecked={producto?.presale !== undefined}
                            />
                            Preventa
                        </label>

                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.saveButton}>
                            Guardar
                        </button>

                        <button
                            type="button"
                            className={styles.cancelButton}
                            onClick={() => navigate("/admin")}
                        >
                            Cancelar
                        </button>
                    </div>

                </div>

            </main>

            <Footer />

        </>
    );
}