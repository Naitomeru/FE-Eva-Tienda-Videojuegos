import { Link } from 'react-router-dom'
import NintendoLogo from '../assets/logos/nintendo.png'
import PlayStationLogo from '../assets/logos/playstation.png'
import XboxLogo from '../assets/logos/xbox.png'

export function BrandCarousel() {
    return (
        <section className="brands-carousel">
            <div className="brands-track">
                <Link to="/nintendo" className="brand-item">
                    <img src={NintendoLogo} alt="Nintendo" />
                </Link>

                <Link to="/playstation" className="brand-item">
                    <img src={PlayStationLogo} alt="PlayStation" />
                </Link>

                <Link to="/xbox" className="brand-item">
                    <img src={XboxLogo} alt="Xbox" />
                </Link>

                <Link to="/nintendo" className="brand-item">
                    <img src={NintendoLogo} alt="Nintendo" />
                </Link>

                <Link to="/playstation" className="brand-item">
                    <img src={PlayStationLogo} alt="PlayStation" />
                </Link>

                <Link to="/xbox" className="brand-item">
                    <img src={XboxLogo} alt="Xbox" />
                </Link>

                <Link to="/nintendo" className="brand-item">
                    <img src={NintendoLogo} alt="Nintendo" />
                </Link>

                <Link to="/playstation" className="brand-item">
                    <img src={PlayStationLogo} alt="PlayStation" />
                </Link>

                <Link to="/xbox" className="brand-item">
                    <img src={XboxLogo} alt="Xbox" />
                </Link>

                <Link to="/nintendo" className="brand-item">
                    <img src={NintendoLogo} alt="Nintendo" />
                </Link>

                <Link to="/playstation" className="brand-item">
                    <img src={PlayStationLogo} alt="PlayStation" />
                </Link>

                <Link to="/xbox" className="brand-item">
                    <img src={XboxLogo} alt="Xbox" />
                </Link>
            </div>
        </section>
    )
}
