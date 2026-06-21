import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { priceToString } from "../util";
import { cartStorageName } from "../data/db";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Custom hook to manage localStorage
const UseLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ?
            JSON.parse(storedValue) :
            initialValue;
    });

    return [value, setValue];
};

function CartItem({index, item, cart, setCart}) {

    function removeQuantity() {
        if (item.quantity > 1) {
            item.quantity = item.quantity - 1;
            const new_cart = [...cart];
            localStorage.setItem(cartStorageName, JSON.stringify(new_cart));
            setCart(new_cart);
        }
    }

    function addQuantity() {
        if (item.quantity < 100) {
            item.quantity = item.quantity + 1;
            const new_cart = [...cart];
            localStorage.setItem(cartStorageName, JSON.stringify(new_cart));
            setCart(new_cart);
        }
    }

    function removeItem() {
        const new_cart = [...cart];
        new_cart.splice(index, 1);
        localStorage.setItem(cartStorageName, JSON.stringify(new_cart));
        setCart(new_cart);
    }
    
    return (
        <>
            <div className="product">
                <div className="image">
                    <img src={item.path_image} />
                </div>
                <div className="item-details">
                    <div className="element-title">
                        {item.title}
                    </div>
                    <div className="price-text">
                        {priceToString(item.price)}
                    </div>
                </div>
            </div>
            <div className="quantity-buttons">
                <button onClick={removeQuantity}>-</button>
                <p>{item.quantity}</p>
                <button onClick={addQuantity}>+</button>
            </div>
            <div className="price-text">
                {priceToString(item.price * item.quantity)}
            </div>
            <FontAwesomeIcon icon="fa-solid fa-trash" className="icon" onClick={removeItem} />
        </>
    )
}

export function Cart() {
    const [cart, setCart] = UseLocalStorage(cartStorageName, []);

    function deleteCart() {
        localStorage.setItem(cartStorageName, JSON.stringify([]));
        setCart([]);
    }

    let total = 0;
    for (const item of cart) {
        total += item.price * item.quantity;
    }

    return (
        <>
            <Header />
            <main id="cart-main">
                <h1>Carrito</h1>
                <div id="content">
                    {cart.length > 0 ?
                    <div id="cart-details">
                        <div id="cart">
                            <h3>Producto</h3>
                            <h3>Cantidad</h3>
                            <h3>Subtotal</h3>

                            {cart.map((item, index) => <CartItem key={item.type + item.id} index={index} item={item} cart={cart} setCart={setCart} />)}
                        </div>
                        <div id="summary">
                            <h2>Resumen</h2>

                            <div id="price-total">
                                <div className="element-title">
                                    Total compra
                                </div>
                                <div className="price-text">
                                    {priceToString(total)}
                                </div>
                            </div>

                            <button id="purchase-all-button" onClick={deleteCart}>Comprar todo</button>
                            <button id="remove-all-button" onClick={deleteCart}>Quitar todo</button>
                        </div>
                    </div>
                    :
                    "Tu carrito está vacío"}
                </div>
            </main>
            <Footer />
        </>
    )
}
