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

    const nintendoConsoles = ["Nintendo Switch", "Nintendo Switch 2"];
    const playStationConsoles = ["Playstation 5"];
    const xboxConsoles = ["Xbox Series X"];

    let producto = null;
    let index;
    const editando = id !== undefined;
    if (editando) {
        if (tipo === "consola") {
            producto = db.consoles.find(
                (item, idx) => {
                    if (item.id === Number(id)) {
                        index = idx;
                        return true;
                    }
                    return false;
                }
            );
        } else {
            producto = db.videogames.find(
                (item, idx) => {
                    if (item.id === Number(id)) {
                        index = idx;
                        return true;
                    }
                    return false;
                }
            );
        }

        if (!producto) {
            return <Navigate to="/admin/form" />;
        }
    } else {
        producto = {
            id: db.consoles.length > 0 ? db.consoles[db.consoles.length - 1].id + 1 : 1,
            title: "",
            category: "Nintendo",
            price: 10000
        };
    }

    const [productoInfo, setProductoInfo] = useState(producto);

    function handleChange(e, type) {
        if (type == 0) { // Title

            setProductoInfo({
                ...productoInfo,
                title: e.target.value
            });

        } else if (type == 1) { // Price

            setProductoInfo({
                ...productoInfo,
                price: e.target.value
            });

        } else if (type == 2) { // Category

            const value = e.target.value;
            if (productoInfo.console !== undefined) {
                let console;
                if (value == "Nintendo") {
                    console = nintendoConsoles[0];
                } else if (value == "Playstation") {
                    console = playStationConsoles[0];
                } else if (value == "Xbox") {
                    console = xboxConsoles[0];
                }

                setProductoInfo({
                    ...productoInfo,
                    category: value,
                    console: console
                });
            } else {
                setProductoInfo({
                    ...productoInfo,
                    category: value
                });
            }

        } else if (type == 3) { // Product type

            const value = e.target.value;
            let new_info = {...productoInfo};
            if (!editando) { // Para no cambiar el id original si se está editando
                if (value === "Consola") {
                    new_info.id = db.consoles.length > 0 ? db.consoles[db.consoles.length - 1].id + 1 : 1;
                } else {
                    new_info.id = db.videogames.length > 0 ? db.videogames[db.videogames.length - 1].id + 1 : 1;
                }
            }

            if (value === "Consola") {
                delete new_info.console;
            } else {
                if (productoInfo.category == "Nintendo") {
                    new_info.console = nintendoConsoles[0];
                } else if (productoInfo.category == "Playstation") {
                    new_info.console = playStationConsoles[0];
                } else if (productoInfo.category == "Xbox") {
                    new_info.console = xboxConsoles[0];
                }
            }
            setProductoInfo(new_info);
            setTipoProducto(value);
        } else if (type == 4) { // Console

            setProductoInfo({
                ...productoInfo,
                console: e.target.value
            });

        } else if (type == 5) { // Image

        } else if (type == 6) { // Discount checkbox

            if (e.target.checked) {
                let new_info = {...productoInfo};
                if (new_info.presale !== undefined) {
                    delete new_info.presale;
                }
                new_info.discount = 0;
                setProductoInfo(new_info);
            } else {
                let new_info = {...productoInfo};
                delete new_info.discount;
                setProductoInfo(new_info);
            }

        } else if (type == 7) { // Discount value number

            let value = e.target.value;

            if (value < 0) {
                value = 0;
            } else if (value > 100) {
                value = 100;
            }

            setProductoInfo({
                ...productoInfo,
                discount: Number(value) / 100
            });

        } else if (type == 8) { // Discount value range

            setProductoInfo({
                ...productoInfo,
                discount: Number(e.target.value)
            });

        } else if (type == 9) { // Presale checkbox

            if (e.target.checked) {
                let new_info = {...productoInfo};
                if (new_info.discount !== undefined) {
                    delete new_info.discount;
                }
                new_info.presale = e.target.checked;
                setProductoInfo(new_info);
            } else {
                let new_info = {...productoInfo};
                delete new_info.presale;
                setProductoInfo(new_info);
            }

        }
    }

    function onSubmit(e) {
        e.preventDefault();

        if (productoInfo.discount !== undefined && productoInfo.discount == 0) {
            delete productoInfo.discount;
        }

        if (editando) {
            if (tipoProducto === "Consola") {
                if (tipo == tipoProducto.toLowerCase()) {
                    db.consoles[index] = productoInfo;
                } else {
                    db.videogames.splice(index, 1);
                    db.consoles.push({
                        ...productoInfo,
                        id: db.consoles.length > 0 ? db.consoles[db.consoles.length - 1].id + 1 : 1
                    });
                }
            } else {
                if (tipo == tipoProducto.toLowerCase()) {
                    db.videogames[index] = productoInfo;
                } else {
                    db.consoles.splice(index, 1);
                    db.videogames.push({
                        ...productoInfo,
                        id: db.videogames.length > 0 ? db.videogames[db.videogames.length - 1].id + 1 : 1
                    });
                }
            }
        } else {
            if (tipoProducto === "Consola") {
                db.consoles.push(productoInfo);
            } else {
                db.videogames.push(productoInfo);
            }
        }

        localStorage.setItem(dbStorageName, JSON.stringify(db));

        navigate("/admin");
    }

    return (
        <>
            <Header isInAdminPage={true} />

            <main className={styles.main}>

                <form onSubmit={onSubmit} className={styles.formContainer}>

                    <h1>
                        {editando ? "Modificar Producto" : "Agregar Producto"}
                    </h1>

                    <div className={styles.imagePreview}>
                        <img
                            src={producto?.path_image || "/images/logo.png"}
                            alt="Vista previa"
                        />
                    </div>

                    <label>Título</label>

                    <input
                        required
                        type="text"
                        value={productoInfo?.title}
                        onChange={(e) => handleChange(e, 0)}
                    />

                    <label>Precio</label>

                    <input
                        required
                        type="number"
                        value={productoInfo?.price}
                        onChange={(e) => handleChange(e, 1)}
                        onWheel={(e) => e.target.blur()}
                    />

                    <label>Marca</label>

                    <select defaultValue={producto?.category} onChange={(e) => handleChange(e, 2)}>

                        <option>Nintendo</option>
                        <option>Playstation</option>
                        <option>Xbox</option>

                    </select>

                    <label>Tipo</label>

                    <select
                        value={tipoProducto}
                        onChange={(e) => handleChange(e, 3)}
                    >

                        <option>Consola</option>
                        <option>Videojuego</option>

                    </select>

                    {tipoProducto === "Videojuego" &&
                    <>
                        <label>
                            Consola compatible
                        </label>

                        <select
                            value={productoInfo?.console}
                            onChange={(e) => handleChange(e, 4)}
                        >
                            {productoInfo.category == "Nintendo" ?

                            nintendoConsoles.map((value, index) => {
                                return <option key={index}>{value}</option>
                            })

                            :

                            productoInfo.category == "Playstation" ?

                            playStationConsoles.map((value, index) => {
                                return <option key={index}>{value}</option>
                            })

                            :

                            xboxConsoles.map((value, index) => {
                                return <option key={index}>{value}</option>
                            })
                            }

                        </select>
                    </>
                    }

                    <label>Imagen del producto</label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleChange(e, 5)}
                    />

                    <div className={styles.checks}>

                        <label>
                            <input
                                type="checkbox"
                                checked={productoInfo?.discount !== undefined}
                                onChange={(e) => handleChange(e, 6)}
                            />
                            Oferta
                        </label>

                        {productoInfo?.discount !== undefined &&
                        <div className={styles.slider}>
                            <input
                                type="number"
                                value={Math.trunc(productoInfo.discount * 100)}
                                onChange={(e) => handleChange(e, 7)}
                            />
                            <label htmlFor="discount">
                                %
                            </label>
                            <input
                                id="discount"
                                type="range"
                                value={productoInfo.discount}
                                onChange={(e) => handleChange(e, 8)}
                                min={0}
                                max={1}
                                step={0.05}
                            />
                        </div>
                        }

                        <label>
                            <input
                                type="checkbox"
                                checked={productoInfo?.presale !== undefined}
                                onChange={(e) => handleChange(e, 9)}
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

                </form>

            </main>

            <Footer />

        </>
    );
}