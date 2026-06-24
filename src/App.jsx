import './styles.css'
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { Details } from "./pages/Details";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import styles from './styles/Global.module.css'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category/:type?" element={<Gallery />} />
            <Route path="/detalles/:type/:id" element={<Details />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="/registrarse" element={<Register />} />
        </Routes>
    )
}

export default App
library.add(fas, far, fab)
