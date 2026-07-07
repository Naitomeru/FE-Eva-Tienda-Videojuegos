import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ItemCard } from '../components/ItemCard';
import { useParams } from 'react-router-dom';
import { BrandCarousel } from '../components/BrandCarousel';
import styles from '../styles/Gallery.module.css';
import { loadData } from '../util/fetch';
import { consolesFile, videogamesFile } from '../util/constants';
import { useEffect, useState } from 'react';

export function Gallery() {
    const { category, type } = useParams();

    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [dbConsoles, setDbConsoles] = useState([]);
    const [dbVideogames, setDbVideogames] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let data = await loadData(consolesFile);
            setDbConsoles(data.consoles);
            data = await loadData(videogamesFile);
            setDbVideogames(data.games);
            setIsDataLoaded(true);
        }
        fetchData();
    }, []);

    if (!isDataLoaded) return null;

    const consoles = [];
    const games = [];
    if (category === "ofertas") {
        for (const item of dbConsoles) {
            if (item.discount !== undefined) {
                consoles.push(item);
            }
        }
        for (const item of dbVideogames) {
            if (item.discount !== undefined) {
                games.push(item);
            }
        }
    } else if (category === "preventas") {
        for (const item of dbConsoles) {
            if (item.presale !== undefined) {
                consoles.push(item);
            }
        }
        for (const item of dbVideogames) {
            if (item.presale !== undefined) {
                games.push(item);
            }
        }
    } else if (category === "consolas") {
        for (const item of dbConsoles) {
            consoles.push(item);
        }
    } else if (category === "videojuegos") {
        for (const item of dbVideogames) {
            games.push(item);
        }
    } else if (type === "consolas") {
        for (const item of dbConsoles) {
            if (item.category.toLowerCase() === category) {
                consoles.push(item);
            }
        }
    } else if (type === "videojuegos") {
        for (const item of dbVideogames) {
            if (item.category.toLowerCase() === category) {
                games.push(item);
            }
        }
    } else {
        for (const item of dbConsoles) {
            if (item.category.toLowerCase() === category) {
                consoles.push(item);
            }
        }
        for (const item of dbVideogames) {
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
