import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AdminItem } from "../components/AdminItem";
import styles from "../styles/Admin.module.css";
import { currentUserSession, dbStorageName } from "../util/constants";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UseLocalStorage } from "../util/useLocalStorage";

export function Admin() {
    const user = JSON.parse(sessionStorage.getItem(currentUserSession)) || null;
    if (!user || !user.admin) {
        return <Navigate to="/" />;
    }

    const [db, setDB] = UseLocalStorage(dbStorageName, null);

    const consolas = db.consoles.map((item, index) => ({
        ...item,
        tipo: "Consola",
        index: index
    }));

    const juegos = db.videogames.map((item, index) => ({
        ...item,
        tipo: "Videojuego",
        index: index
    }));

    const productos = [...consolas, ...juegos];

    const [busqueda, setBusqueda]= useState("");
    
    const navigate = useNavigate();

    function removeItem(item) {
        const new_db = {...db};
        if (item.tipo === "Consola") {
            new_db.consoles.splice(item.index, 1);
        } else {
            new_db.videogames.splice(item.index, 1);
        }
        localStorage.setItem(dbStorageName, JSON.stringify(new_db));
        setDB(new_db);
    }

    const productosFiltrados = productos.filter((producto) =>
    producto.title.toLowerCase().includes(busqueda.toLowerCase())
    );

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
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                        <button onClick={() => navigate("/admin/form")}>
                            + Agregar producto
                        </button>

                    </div>

                    <div className={styles.listado}>
                        
                        {productosFiltrados.length > 0 ?(productosFiltrados.map((producto) => 
                        (
                            <AdminItem
                                key={producto.tipo + producto.id}
                                producto={producto}
                                removeItem={removeItem}
                            />
                        ))
                    ):(
                        <p>No se encontraron productos</p>
                    )}

                    </div>

                </div>

            </main>

            <Footer />
        </>
    );
}