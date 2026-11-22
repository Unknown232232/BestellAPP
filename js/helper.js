/**
 * Formats a price as euro currency.
 * @param {number} price - The price of a book.
 * @returns {string} The formatted price, e.g. "19,99 €".
 */
function formatPrice(price) {
    return price.toFixed(2).replace(".", ",") + " €";
}

/**
 * Closes a dialog when the click hit the backdrop and not its content.
 * @param {MouseEvent} event - The click event of the dialog.
 */
function closeOnBackdropClick(event) {
    if (event.target === event.currentTarget) {
        event.currentTarget.close();
    }
}
