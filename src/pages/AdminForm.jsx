import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BrandCarousel } from "../components/BrandCarousel";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/Admin.module.css";
import { useEffect, useState } from "react";
import { loadData } from "../util/fetch";
import { consolesFile, videogamesFile } from "../util/constants";

export function AdminForm() {

    const { tipo, id } = useParams();
    const navigate = useNavigate();
    const editando = id !== undefined;
    const [producto, setProducto] = useState(null);
    const [tipoProducto, setTipoProducto] = useState(
        tipo === "videojuego" ? "Videojuego" : "Consola"
    );

    useEffect(() => {

        if (!editando) return;

        async function cargarProducto() {

            let data;

            if (tipo === "consola") {

                data = await loadData(consolesFile);

                const encontrado = data.consoles.find(
                    item => item.id === Number(id)
                );

                setProducto(encontrado);

                setTipoProducto("Consola");

            } else {

                data = await loadData(videogamesFile);

                const encontrado = data.games.find(
                    item => item.id === Number(id)
                );

                setProducto(encontrado);

                setTipoProducto("Videojuego");

            }

        }

        cargarProducto();

    }, [id, tipo]);

    return (
        <>
            <Header />

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

            <BrandCarousel />

            <Footer />

        </>
    );
}