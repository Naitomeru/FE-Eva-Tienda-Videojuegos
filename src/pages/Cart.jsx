import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { priceToString, priceWithSale } from "../util";
import { cartStorageName, db } from "../data/db";
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
                    <img src={item.item.path_image} />
                </div>
                <div className={styles.itemDetails}>
                    <div className={styles.title}>
                        {item.item.title}
                    </div>
                    <div className={styles.price}>
                        {priceToString(item.item.price)}
                    </div>
                </div>
            </div>
            <div className={styles.quantityButtons}>
                <button onClick={() => removeQuantity(item, index)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => addQuantity(item, index)}>+</button>
            </div>
            <div className={styles.price}>
                <div style={item.item.discount ? {textDecoration:"line-through 2px"} : {}}
                className={styles.priceOriginal}>
                    {priceToString(item.item.price * item.quantity)}
                </div>
                {item.item.discount &&
                <div className={styles.priceDiscount}>
                    {priceToString(priceWithSale(item.item.price, item.item.discount) * item.quantity)}
                </div>
                }
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
                    <img src={item.item.path_image} />
                </div>
                <div className={styles.itemDetails}>
                    <div className={styles.title}>
                        {item.item.title}
                    </div>
                    <div className={styles.price}>
                        {priceToString(item.item.price)}
                    </div>
                </div>
                <FontAwesomeIcon icon="fa-solid fa-trash" onClick={() => removeItem(index)} className={styles.icon} />
            </div>
            <div className={styles.options}>
                <h3>Cantidad</h3>
                <h3>Subtotal</h3>
                <div className={styles.quantityButtons}>
                    <button onClick={() => removeQuantity(item, index)}>-</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => addQuantity(item, index)}>+</button>
                </div>
                <div className={styles.price}>
                    <div style={item.item.discount ? {textDecoration:"line-through 2px"} : {}}
                    className={styles.priceOriginal}>
                        {priceToString(item.item.price * item.quantity)}
                    </div>
                    {item.item.discount &&
                    <div className={styles.priceDiscount}>
                        {priceToString(priceWithSale(item.item.price, item.item.discount) * item.quantity)}
                    </div>
                    }
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

    function getItem(item_in_cart) {
        const collection = item_in_cart.type === "console" ? db.consoles : db.games;

        for (const item of collection) {
            if (item.id == item_in_cart.id) {
                return item;
            }
        }
    }

    let total = 0;
    const cart_items = []
    for (const item_in_cart of cart) {
        const item = getItem(item_in_cart);
        if (item.discount) {
            total += priceWithSale(item.price, item.discount) * item_in_cart.quantity;
        } else {
            total += item.price * item_in_cart.quantity;
        }
        cart_items.push({
            "item": item,
            "type": item_in_cart.type,
            "quantity": item_in_cart.quantity
        })
    }

    function removeQuantity(item, index) {
        if (item.quantity > 1) {
            item.quantity = item.quantity - 1;
            const new_cart = [...cart];
            new_cart[index].quantity = item.quantity;
            localStorage.setItem(cartStorageName, JSON.stringify(new_cart));
            setCart(new_cart);
        }
    }

    function addQuantity(item, index) {
        if (item.quantity < 100) {
            item.quantity = item.quantity + 1;
            const new_cart = [...cart];
            new_cart[index].quantity = item.quantity;
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

                            {cart_items.map((item, index) => {
                                return (
                                    <CartItemBig key={item.type + item.item.id}
                                        index={index}
                                        item={item}
                                        removeQuantity={removeQuantity}
                                        addQuantity={addQuantity}
                                        removeItem={removeItem}
                                    />
                            )})}
                        </div>
                        <div className={styles.cartSmall}>
                            {cart_items.map((item, index) => {
                                return (
                                    <CartItemSmall key={item.type + item.item.id}
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
