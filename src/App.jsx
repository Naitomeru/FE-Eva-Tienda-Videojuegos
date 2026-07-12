import './styles.css';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { Details } from "./pages/Details";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Admin } from "./pages/Admin";
import { AdminForm } from "./pages/AdminForm";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { saveUser } from './util/session';
import { currentUserSession } from './util/constants';

function App() {

    useEffect(() => {
        function onCloseTab(e) {
            const user = JSON.parse(sessionStorage.getItem(currentUserSession)) || null;
            if (user == null) return;
            saveUser(user);
        }

        window.addEventListener("beforeunload", onCloseTab);

        return () => {
            window.removeEventListener("beforeunload", onCloseTab);
        };
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos/:category/:type?" element={<Gallery />} />
            <Route path="/detalles/:type/:id" element={<Details />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="/registrarse" element={<Register />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/form" element={<AdminForm />} />
            <Route path="/admin/form/:tipo/:id" element={<AdminForm />}/>
        </Routes>
    )
}

export default App
library.add(fas, far, fab);
