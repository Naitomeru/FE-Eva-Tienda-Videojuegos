import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useParams } from 'react-router-dom'
import { priceToString, priceWithSale } from '../util.jsx'
import { cartStorageName, db } from '../data/db.js';
import { useState, useEffect } from 'react';
import { BrandCarousel } from '../components/BrandCarousel.jsx';

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

    return (
        <>
            <Header />
            <main>
                <div id="details-container">
                    <div className="details-image">
                        <img src={current_item.path_image} />
                    </div>
                    <div className="details">
                        <h1 id="title">
                            {current_item.title}
                        </h1>

                        <div className="details-separator"></div>

                        <h2 id="price">{priceToString(current_item.price)}</h2>

                        <div className="details-separator"></div>

                        <div id="buttons">
                            <div>
                                <button onClick={removeQuantity}>-</button>
                                <p>{quantity}</p>
                                <button onClick={addQuantity}>+</button>
                            </div>
                            <button id="add-to-cart-button" onClick={updateCart}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </main>
            <BrandCarousel />
            <Footer />
        </>
    )
}
