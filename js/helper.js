/**
 * Formats a price as euro currency.
 * @param {number} price - The price of a book.
 * @returns {string} The formatted price, e.g. "19,99 €".
 */
function formatPrice(price) {
    return price.toFixed(2).replace(".", ",") + " €";
}
