import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ItemCard } from '../components/ItemCard'
import { db } from '../data/db'
import { useParams } from 'react-router-dom'

export function Gallery() {
    const { category, type } = useParams();

    const items = [];
    if (category === "ofertas") {
        for (const item of db.consoles) {
            if (item.discount !== undefined) {
                let item_to_push = item;
                item_to_push.type = "console";
                items.push(item_to_push);
            }
        }
        for (const item of db.games) {
            if (item.discount !== undefined) {
                let item_to_push = item;
                item_to_push.type = "game";
                items.push(item_to_push);
            }
        }
    } else if (category === "preventas") {
        for (const item of db.consoles) {
            if (item.presale !== undefined) {
                let item_to_push = item;
                item_to_push.type = "console";
                items.push(item_to_push);
            }
        }
        for (const item of db.games) {
            if (item.presale !== undefined) {
                let item_to_push = item;
                item_to_push.type = "game";
                items.push(item_to_push);
            }
        }
    } else if (category === "consolas") {
        for (const item of db.consoles) {
            items.push(item);
        }
    } else if (category === "videojuegos") {
        for (const item of db.games) {
            items.push(item);
        }
    } else if (type === "consolas") {
        for (const item of db.consoles) {
            if (item.category.toLowerCase() === category) {
                items.push(item);
            }
        }
    } else if (type === "videojuegos") {
        for (const item of db.games) {
            if (item.category.toLowerCase() === category) {
                items.push(item);
            }
        }
    } else {
        for (const item of db.consoles) {
            if (item.category.toLowerCase() === category) {
                let item_to_push = item;
                item_to_push.type = "console";
                items.push(item_to_push);
            }
        }
        for (const item of db.games) {
            if (item.category.toLowerCase() === category) {
                let item_to_push = item;
                item_to_push.type = "game";
                items.push(item_to_push);
            }
        }
    }

    return (
        <>
            <Header />
            <main id="gallery-main">
                <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                <div id="gallery">
                    {items.map((item) => {
                        if (item.type === undefined) {
                            return <ItemCard key={item.id} item={item} />
                        } else {
                            return <ItemCard key={item.type + item.id} item={item} />
                        }
                    })}
                </div>
            </main>
            <Footer />
        </>
    )
}
