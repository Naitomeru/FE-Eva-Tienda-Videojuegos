import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useParams } from 'react-router-dom'
import { priceToString, priceWithSale } from '../util.jsx'
import { cartStorageName, db } from '../data/db.js';
import { useState, useEffect } from 'react';
import { BrandCarousel } from '../components/BrandCarousel.jsx';
import styles from '../styles/Details.module.css'

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

export function Details() {
    const { type, id } = useParams();

    let current_item;
    const collection = type === "console" ? db.consoles : db.games;
    for (const item of collection) {
        if (item.id === parseInt(id)) {
            current_item = item;
            break;
        }
    }

    const [quantity, setQuantity] = useState(1);
    
    function removeQuantity() {
        if (quantity > 1) setQuantity(quantity - 1);
    }
    
    function addQuantity() {
        if (quantity < 100) setQuantity(quantity + 1);
    }

    const [cart, setCart] = UseLocalStorage(cartStorageName, []);
    
    function updateCart() {
        const new_cart = [...cart];
        let exists = false;
        for (const item_in_cart of new_cart) {
            if (item_in_cart.id === current_item.id && item_in_cart.type === type) {
                item_in_cart.quantity += quantity;
                exists = true;
                break;
            }
        }

        if (!exists) {
            const product = {
                "id": current_item.id,
                "title": current_item.title,
                "type": type,
                "price": current_item.price,
                "path_image": current_item.path_image,
                "quantity": quantity
            };
            new_cart.push(product);
        }
        localStorage.setItem(cartStorageName, JSON.stringify(new_cart));
        setCart(new_cart);
    }

    let label = null;
    if (current_item.discount !== undefined) {
        label = "OFERTA"
    } else if (current_item.presale !== undefined) {
        label = "PREVENTA"
    }

    return (
        <>
            <Header />
            <main>
                <div className={styles.container}>
                    <div className={styles.image}>
                        <img src={current_item.path_image} />
                    </div>
                    <div className={styles.details}>
                        {label && <div className={styles.label}>{label}</div>}
                        <h1 className={styles.title}>
                            {current_item.title}
                        </h1>

                        <div className={styles.separator}></div>

                        <div className={styles.price}>
                            <h2 style={current_item.discount && {textDecoration:"line-through 2px"}} className={styles.priceOriginal}>
                                {priceToString(current_item.price)}
                            </h2>
                            <h2 className={styles.priceDiscount}>
                                {current_item.discount && priceToString(priceWithSale(current_item.price, current_item.discount))}
                            </h2>
                        </div>

                        <div className={styles.separator}></div>

                        <div className={styles.buttons}>
                            <div>
                                <button onClick={removeQuantity}>-</button>
                                <p>{quantity}</p>
                                <button onClick={addQuantity}>+</button>
                            </div>
                            <button className={styles.addToCartButton} onClick={updateCart}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </main>
            <BrandCarousel />
            <Footer />
        </>
    )
}
