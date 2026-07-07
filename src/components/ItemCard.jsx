import { Link } from 'react-router-dom';
import { priceToString, priceWithSale } from '../util/util'
import styles from '../styles/ItemCard.module.css'

export function ItemCard({item, type}) {
    let label = null;
    if (item.discount !== undefined) {
        label = "OFERTA"
    } else if (item.presale !== undefined) {
        label = "PREVENTA"
    }

    return (
        <Link to={"/detalles/" + type + "/" + item.id} className={styles.item}>
            <div className={styles.image}>
                {label && <div className={styles.label}>{label}</div>}
                <img src={item.path_image} />
            </div>
            <h2>{item.title}</h2>
            <p style={item.discount && {textDecoration:"line-through 2px"}}>
                {priceToString(item.price)}
            </p>

            <h3>
                {item.discount && priceToString(priceWithSale(item.price, item.discount))}
            </h3>
        </Link>
    )
}
