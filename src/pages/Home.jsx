import '../styles.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { BrandCarousel } from '../components/BrandCarousel'
import { ItemCard } from '../components/ItemCard.jsx'
import { cartStorageName, db } from '../data/db.js'
import HeroImg from '../assets/banner.jpg'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div id="hero">
            <img src={HeroImg} alt="Hero Banner" />
            <div className="hero-overlay">
                <h1>Explora nuevos mundos</h1>
                <p>
                    Encuentra las mejores ofertas en Nintendo, PlayStation y Xbox.
                </p>
                <Link to="/ofertas">
                    <button id="hero-button">
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
        <section className="body-section">
            <h1>
                {title}
            </h1>
            <div className="section-content">
                {items.map((game) => <ItemCard key={game.id} item={game} type="videogame" />)}
            </div>
            <div className="center-button">
                <Link to={"/" + title.toLowerCase()}>
                    <button>
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
                <div className="body-center">
                    <Hero />
                    <Section title="Nintendo" games={nintendo_games} />
                    <div className="section-separator"></div>
                    <Section title="PlayStation" games={playstation_games} />
                    <div className="section-separator"></div>
                    <Section title="XBOX" games={xbox_games} />
                </div>
                <div className="body-space"></div>
            </main>
            <BrandCarousel />
            <Footer />
        </>
    )
}
