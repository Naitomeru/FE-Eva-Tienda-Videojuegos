import { priceToString, priceWithSale } from '../util.jsx'

export function ItemCard({game}) {
    let label = null;
    if (game.discount !== undefined) {
        label = "OFERTA"
    } else if (game.presale !== undefined) {
        label = "PREVENTA"
    }

    return (
        <a className="section-content-item">
            <div className="item-image">
                {label && <div className="item-label">{label}</div>}
                <img src={game.path_image} />
            </div>
            <h2>{game.title}</h2>
            <p style={game.discount && {textDecoration:"line-through 2px"}}>{priceToString(game.price)}</p>

            <h3 className="sale-price">{game.discount && priceToString(priceWithSale(game.price, game.discount))}</h3>
        </a>
    )
}
