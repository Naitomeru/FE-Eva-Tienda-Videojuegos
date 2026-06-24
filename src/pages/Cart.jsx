import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { priceToString } from "../util";
import { cartStorageName } from "../data/db";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Cart.module.css'

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

function CartItemBig({index, item, removeQuantity, addQuantity, removeItem}) {
    return (
        <>
            <div className={styles.product}>
                <div className={styles.image}>
                    <img src={item.path_image} />
                </div>
                <div className={styles.itemDetails}>
                    <div className={styles.title}>
                        {item.title}
                    </div>
                    <div className={styles.price}>
                        {priceToString(item.price)}
                    </div>
                </div>
            </div>
            <div className={styles.quantityButtons}>
                <button onClick={() => removeQuantity(item)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => addQuantity(item)}>+</button>
            </div>
            <div className={styles.price}>
                {priceToString(item.price * item.quantity)}
            </div>
            <FontAwesomeIcon icon="fa-solid fa-trash" onClick={() => removeItem(index)} className={styles.icon} />
        </>
    )
}

function CartItemSmall({index, item, removeQuantity, addQuantity, removeItem}) {
    return (
        <div className={styles.item}>
            <div className={styles.product}>
                <div className={styles.image}>
                    <img src={item.path_image} />
                </div>
                <div className={styles.itemDetails}>
                    <div className={styles.title}>
                        {item.title}
                    </div>
                    <div className={styles.price}>
                        {priceToString(item.price)}
                    </div>
                </div>
                <FontAwesomeIcon icon="fa-solid fa-trash" onClick={() => removeItem(index)} className={styles.icon} />
            </div>
            <div className={styles.options}>
                <h3>Cantidad</h3>
                <h3>Subtotal</h3>
                <div className={styles.quantityButtons}>
                    <button onClick={() => removeQuantity(item)}>-</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => addQuantity(item)}>+</button>
                </div>
                <div className={styles.price}>
                    <div>{priceToString(item.price * item.quantity)}</div>
                </div>
            </div>
        </div>
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

    function removeQuantity(item) {
        if (item.quantity > 1) {
            item.quantity = item.quantity - 1;
            const new_cart = [...cart];
            localStorage.setItem(cartStorageName, JSON.stringify(new_cart));
            setCart(new_cart);
        }
    }

    function addQuantity(item) {
        if (item.quantity < 100) {
            item.quantity = item.quantity + 1;
            const new_cart = [...cart];
            localStorage.setItem(cartStorageName, JSON.stringify(new_cart));
            setCart(new_cart);
        }
    }

    function removeItem(index) {
        const new_cart = [...cart];
        new_cart.splice(index, 1);
        localStorage.setItem(cartStorageName, JSON.stringify(new_cart));
        setCart(new_cart);
    }

    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1>Carrito</h1>
                <div>
                    {cart.length > 0 ?
                    <div className={styles.cartDetails}>
                        <div className={styles.cartBig}>
                            <h3>Producto</h3>
                            <h3>Cantidad</h3>
                            <h3>Subtotal</h3>

                            {cart.map((item, index) => {
                                return (
                                    <CartItemBig key={item.type + item.id}
                                        index={index}
                                        item={item}
                                        removeQuantity={removeQuantity}
                                        addQuantity={addQuantity}
                                        removeItem={removeItem}
                                    />
                            )})}
                        </div>
                        <div className={styles.cartSmall}>
                            {cart.map((item, index) => {
                                return (
                                    <CartItemSmall key={item.type + item.id}
                                        index={index}
                                        item={item}
                                        removeQuantity={removeQuantity}
                                        addQuantity={addQuantity}
                                        removeItem={removeItem}
                                    />
                                )
                            })}
                        </div>
                        <div className={styles.summary}>
                            <h2>Resumen</h2>

                            <div className={styles.priceTotal}>
                                <div className={styles.title}>
                                    Total compra
                                </div>
                                <div className={styles.price}>
                                    {priceToString(total)}
                                </div>
                            </div>

                            <button onClick={deleteCart}>Comprar todo</button>
                            <button onClick={deleteCart}>Quitar todo</button>
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
