import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ItemCard } from '../components/ItemCard';
import { useParams } from 'react-router-dom';
import { BrandCarousel } from '../components/BrandCarousel';
import styles from '../styles/Gallery.module.css';
import { dbStorageName } from '../util/constants';

export function Gallery() {
    const { category, type } = useParams();

    const db = JSON.parse(localStorage.getItem(dbStorageName));

    const consoles = [];
    const games = [];
    if (category === "ofertas") {
        for (const item of db.consoles) {
            if (item.discount !== undefined) {
                consoles.push(item);
            }
        }
        for (const item of db.videogames) {
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
        for (const item of db.videogames) {
            if (item.presale !== undefined) {
                games.push(item);
            }
        }
    } else if (category === "consolas") {
        for (const item of db.consoles) {
            consoles.push(item);
        }
    } else if (category === "videojuegos") {
        for (const item of db.videogames) {
            games.push(item);
        }
    } else if (type === "consolas") {
        for (const item of db.consoles) {
            if (item.category.toLowerCase() === category) {
                consoles.push(item);
            }
        }
    } else if (type === "videojuegos") {
        for (const item of db.videogames) {
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
        for (const item of db.videogames) {
            if (item.category.toLowerCase() === category) {
                games.push(item);
            }
        }
    }

    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                <div className={styles.gallery}>
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
