import { Link } from 'react-router-dom';
import NintendoLogo from '../assets/logos/nintendo.png';
import PlayStationLogo from '../assets/logos/playstation.png';
import XboxLogo from '../assets/logos/xbox.png';
import styles from '../styles/BrandCarousel.module.css';

export function BrandCarousel() {
    const items = []

    for (let i = 0; i < 4; i++) {
        items.push(
            <Link key={"n" + i} to="/productos/nintendo" className={styles.brandItem}>
                <img src={NintendoLogo} alt="Nintendo" />
            </Link>
        )
        items.push(
            <Link key={"p" + i} to="/productos/playstation" className={styles.brandItem}>
                <img src={PlayStationLogo} alt="PlayStation" />
            </Link>
        )
        items.push(
            <Link key={"x" + i} to="/productos/xbox" className={styles.brandItem}>
                <img src={XboxLogo} alt="Xbox" />
            </Link>
        )
    }

    return (
        <section className={styles.brandsCarousel}>
            <div className={styles.brandsTrack}>
                {items.map((item) => item)}
            </div>
        </section>
    )
}
