import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { BrandCarousel } from '../components/BrandCarousel'
import { ItemCard } from '../components/ItemCard.jsx'
import { cartStorageName, db } from '../data/db.js'
import HeroImg from '../assets/banner.jpg'
import { Link } from 'react-router-dom'
import styles from '../styles/Home.module.css'

function Hero() {
    return (
        <div className={styles.hero}>
            <img src={HeroImg} alt="Hero Banner" />
            <div className={styles.heroOverlay}>
                <h1>Explora nuevos mundos</h1>
                <p>
                    Encuentra las mejores ofertas en Nintendo, PlayStation y Xbox.
                </p>
                <Link to="/productos/ofertas">
                    <button>
                        Ver ofertas
                    </button>
                </Link>
            </div>
        </div>
    )
}

function Section({title, games}) {
    const items = [];
    for (let i = 0; i < 4; i++) {
        items.push(games[i])
    }

    return (
        <section className={styles.section}>
            <h1>
                {title}
            </h1>
            <div className={styles.content}>
                {items.map((game) => <ItemCard key={game.id} item={game} type="videogame" />)}
            </div>
            <div className="centerButton">
                <Link to={"/productos/" + title.toLowerCase()}>
                    <button className={styles.moreButton}>
                        Ver más
                    </button>
                </Link>
            </div>
        </section>
    )
}

export function Home() {
    const nintendo_games = [];
    const playstation_games = [];
    const xbox_games = [];

    for (const game of db.games) {
        if (game.category.toLowerCase() === "nintendo") {
            nintendo_games.push(game);
        } else if (game.category.toLowerCase() === "playstation") {
            playstation_games.push(game);
        } else if (game.category.toLowerCase() === "xbox") {
            xbox_games.push(game);
        }
    }

    return (
        <>
            <Header />
            <main id="index-main">
                <div className="body-space"></div>
                <div className={styles.body}>
                    <Hero />
                    <Section title="Nintendo" games={nintendo_games} />
                    <div className={styles.separator}></div>
                    <Section title="PlayStation" games={playstation_games} />
                    <div className={styles.separator}></div>
                    <Section title="XBOX" games={xbox_games} />
                </div>
                <div className="body-space"></div>
            </main>
            <BrandCarousel />
            <Footer />
        </>
    )
}
