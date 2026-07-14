import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { priceToString } from "../util/util";
import styles from "../styles/Admin.module.css";

export function AdminItem({ producto, removeItem }) {
    return (
        <Link
            to={`/admin/form/${producto.tipo.toLowerCase()}/${producto.id}`}
            className={styles.card}
        >

            <div className={styles.imageContainer}>
                <img
                    src={producto.path_image}
                    alt={producto.title}
                />
            </div>

            <div className={styles.info}>

                <h3>{producto.title}</h3>
                <p>{priceToString(producto.price)}</p>

            </div>

            <button
                className={styles.deleteButton}
                onClick={(e) => {
                    e.preventDefault();
                    removeItem(producto)
                }}
            >
                <FontAwesomeIcon icon="trash" />
            </button>
        </Link>
    );
}