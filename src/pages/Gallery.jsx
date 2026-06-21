import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ItemCard } from '../components/ItemCard'
import { db } from '../data/db'
import { useParams } from 'react-router-dom'
import { BrandCarousel } from '../components/BrandCarousel'

export function Gallery() {
    const { category, type } = useParams();

    const consoles = [];
    const games = [];
    if (category === "ofertas") {
        for (const item of db.consoles) {
            if (item.discount !== undefined) {
                consoles.push(item);
            }
        }
        for (const item of db.games) {
            if (item.discount !== undefined) {
                games.push(item);
            }
        }
    } else if (category === "preventas") {
        for (const item of db.consoles) {
            if (item.presale !== undefined) {
                consoles.push(item);
            }
        }
        for (const item of db.games) {
            if (item.presale !== undefined) {
                games.push(item);
            }
        }
    } else if (category === "consolas") {
        for (const item of db.consoles) {
            consoles.push(item);
        }
    } else if (category === "videojuegos") {
        for (const item of db.games) {
            games.push(item);
        }
    } else if (type === "consolas") {
        for (const item of db.consoles) {
            if (item.category.toLowerCase() === category) {
                consoles.push(item);
            }
        }
    } else if (type === "videojuegos") {
        for (const item of db.games) {
            if (item.category.toLowerCase() === category) {
                games.push(item);
            }
        }
    } else {
        for (const item of db.consoles) {
            if (item.category.toLowerCase() === category) {
                consoles.push(item);
            }
        }
        for (const item of db.games) {
            if (item.category.toLowerCase() === category) {
                games.push(item);
            }
        }
    }

    return (
        <>
            <Header />
            <main id="gallery-main">
                <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                <div id="gallery">
                    {consoles.map((item) => {
                        return <ItemCard key={"c" + item.id} item={item} type="console" />
                    })}
                    {games.map((item) => {
                        return <ItemCard key={"g" + item.id} item={item} type="videogame" />
                    })}
                </div>
            </main>
            <BrandCarousel />
            <Footer />
        </>
    )
}
