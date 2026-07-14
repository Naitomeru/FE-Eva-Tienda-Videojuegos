import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BrandCarousel } from "../components/BrandCarousel";
import { AdminItem } from "../components/AdminItem";
import styles from "../styles/Admin.module.css";
import { useEffect, useState } from "react";
import { loadData } from "../util/fetch";
import { consolesFile, videogamesFile } from "../util/constants";
import { useNavigate } from "react-router-dom";

export function Admin() {
    const [productos, setProductos] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [busqueda, setBusqueda]= useState("");
    const navigate = useNavigate();

    useEffect(() => {

        async function fetchData() {

            let data = await loadData(consolesFile);

            const consolas = data.consoles.map(item => ({
                ...item,
                tipo: "Consola"
            }));

            data = await loadData(videogamesFile);

            const juegos = data.games.map(item => ({
                ...item,
                tipo: "Videojuego"
            }));

            setProductos([...consolas, ...juegos]);

            setIsDataLoaded(true);

        }

        fetchData();

    }, []);

    if (!isDataLoaded) return null;
    return (
        <>
            <Header />
            <main className={styles.main}>

                <div className={styles.container}>
                    <h1>Inventario</h1>
                    <div className={styles.topBar}>
                        <input
                            type="text"
                            placeholder="Buscar producto..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                        <button onClick={() => navigate("/admin/form")}>
                            + Agregar producto
                        </button>

                    </div>

                    <div className={styles.listado}>

                        {productos.map(producto => (

                            <AdminItem
                                key={producto.tipo + producto.id}
                                producto={producto}
                            />

                        ))}

                    </div>

                </div>

            </main>

            <BrandCarousel />
            <Footer />
        </>
    );
}