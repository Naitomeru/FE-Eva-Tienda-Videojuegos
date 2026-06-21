import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Details } from "./pages/Details";
import { Cart } from "./pages/Cart";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category/:type?" element={<Gallery />} />
            <Route path="/detalles/:type/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default App
library.add(fas, far, fab)
