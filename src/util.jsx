/**
 * Formatea el precio para mostrarlo en pesos chilenos.
 *
 * @param {number} price El precio a formatear
 * @returns {string} El precio formateado
 */
export function priceToString(price) {
    const price_number = price.toString();
    const total_digits = price_number.length;
    const modulo = total_digits % 3;

    let price_text = "$";

    if (modulo != 0) {
        price_text = price_text.concat(price_number.substring(0, modulo));
        price_text = price_text.concat(".");
    }

    const iterations = (total_digits - modulo) / 3
    for (let i = 0; i < iterations; i++) {
        price_text = price_text.concat(price_number.substring(modulo + i * 3, modulo + i * 3 + 3));
        if (i < iterations - 1) {
            price_text = price_text.concat(".");
        }
    }
    price_text = price_text.concat(" CLP");

    return price_text;
}

/**
 * Trunca el valor a la unidad.
 *
 * @param {number} price El precio a truncar
 * @returns {string} El precio truncado
 */
export function priceWithSale(price, sale) {
    const final_price = Math.floor(price * sale);
    return final_price - (final_price % 10);
}
