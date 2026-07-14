import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AdminItem } from "../components/AdminItem";
import styles from "../styles/Admin.module.css";
import { currentUserSession, dbStorageName } from "../util/constants";
import { Navigate, useNavigate } from "react-router-dom";

export function Admin() {
    const user = JSON.parse(sessionStorage.getItem(currentUserSession)) || null;
    if (!user || !user.admin) {
        return <Navigate to="/" />;
    }

    const db = JSON.parse(localStorage.getItem(dbStorageName));

    const consolas = db.consoles.map(item => ({
        ...item,
        tipo: "Consola"
    }));

    const juegos = db.videogames.map(item => ({
        ...item,
        tipo: "Videojuego"
    }));

    const productos = [...consolas, ...juegos];
    const navigate = useNavigate();

    return (
        <>
            <Header isInAdminPage={true} />
            <main className={styles.main}>

                <div className={styles.container}>
                    <h1>Inventario</h1>
                    <div className={styles.topBar}>
                        <input
                            type="text"
                            placeholder="Buscar producto..."
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

            <Footer />
        </>
    );
}