import { priceToString, priceWithSale } from '../util.jsx'

export function ItemCard({item}) {
    let label = null;
    if (item.discount !== undefined) {
        label = "OFERTA"
    } else if (item.presale !== undefined) {
        label = "PREVENTA"
    }

    return (
        <a className="section-content-item">
            <div className="item-image">
                {label && <div className="item-label">{label}</div>}
                <img src={item.path_image} />
            </div>
            <h2>{item.title}</h2>
            <p style={item.discount && {textDecoration:"line-through 2px"}}>{priceToString(item.price)}</p>

            <h3 className="sale-price">{item.discount && priceToString(priceWithSale(item.price, item.discount))}</h3>
        </a>
    )
}
