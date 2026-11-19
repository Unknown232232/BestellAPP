/**
 * Template for one category with heading and dish list.
 * @param {string} key - Category key, used as section id.
 * @param {string} icon - Path to the category icon.
 * @param {string} title - Category title.
 * @param {string} note - Optional note in small text, e.g. "(30cm)".
 * @param {string} cards - HTML of all dish cards of this category.
 * @returns {string} The HTML of the category section.
 */
function getCategoryTemplate(key, icon, title, note, cards) {
    return `
        <section id="${key}">
            <h2><img src="${icon}" alt="" /><span>${title}${note}</span></h2>
            <ul class="dish-list">${cards}</ul>
        </section>`;
}

/**
 * Template for one dish card.
 * @param {number} index - Index of the dish in the dishes array.
 * @param {string} image - Path to the dish image.
 * @param {string} name - Name of the dish.
 * @param {string} ingredients - Ingredients as comma separated text.
 * @param {string} price - Formatted price.
 * @returns {string} The HTML of the dish card.
 */
function getDishTemplate(index, image, name, ingredients, price) {
    return `
        <li class="dish">
            <img src="${image}" alt="${name}" />
            <div>
                <h3>${name}</h3>
                <p>${ingredients}</p>
            </div>
            <div>
                <span>${price}</span>
                <button onclick="addToBasket(${index})">Add to basket</button>
            </div>
        </li>`;
}

/**
 * Template for the basket when it contains no dishes.
 * @returns {string} The HTML of the empty basket.
 */
function getEmptyBasketTemplate() {
    return `
        <div class="basket-empty">
            <h2>Your Basket</h2>
            <p>Nothing here yet.<br />Go ahead and choose something delicious!</p>
            <img src="./assets/icons/cart.svg" alt="" />
        </div>`;
}

/**
 * Template for the basket with dishes, prices and the order button.
 * @param {string} items - HTML of all basket items.
 * @param {string} subtotal - Formatted sum of all dishes.
 * @param {string} fee - Formatted delivery fee.
 * @param {string} total - Formatted total price.
 * @returns {string} The HTML of the filled basket.
 */
function getFilledBasketTemplate(items, subtotal, fee, total) {
    return `
        <div class="basket-full">
            <h2>Your Basket</h2>
            <ul class="basket-items">${items}</ul>
            <div class="basket-totals">
                <div><span>Subtotal</span><span>${subtotal}</span></div>
                <div><span>Delivery fee</span><span>${fee}</span></div>
                <div><span>Total</span><span>${total}</span></div>
                <button onclick="placeOrder()">Buy now (${total})</button>
            </div>
        </div>`;
}

/**
 * Template for one dish inside the basket.
 * @param {string} name - Name of the dish.
 * @param {number} amount - Amount of this dish in the basket.
 * @param {string} controls - HTML of the amount buttons.
 * @param {string} deleteButton - HTML of the delete button (can be empty).
 * @param {string} price - Formatted price for the whole amount.
 * @returns {string} The HTML of the basket item.
 */
function getBasketItemTemplate(name, amount, controls, deleteButton, price) {
    return `
        <li class="basket-item">
            <div>
                <h3>${amount} x ${name}</h3>
                ${deleteButton}
            </div>
            <div>
                <div>${controls}</div>
                <span>${price}</span>
            </div>
        </li>`;
}

/**
 * Template for one dish inside the basket.
 * @param {string} name - Name of the dish.
 * @param {number} amount - Amount of this dish in the basket.
 * @param {string} controls - HTML of the amount buttons.
 * @param {string} deleteButton - HTML of the delete button (can be empty).
 * @param {string} price - Formatted price for the whole amount.
 * @returns {string} The HTML of the basket item.
 */
function getSingleAmountTemplate(index) {
    return `
        <button onclick="removeFromBasket(${index})" aria-label="Remove dish">
            <img src="./assets/icons/delete.svg" alt="" />
        </button>
        <span>1</span>
        <button onclick="changeAmount(${index}, 1)" aria-label="More">+</button>`;
}

/**
 * Template for the amount buttons when the amount is higher than 1.
 * @param {number} index - Index of the dish in the basket.
 * @param {number} amount - Current amount of the dish.
 * @returns {string} The HTML of the buttons (minus and plus).
 */
function getMultiAmountTemplate(index, amount) {
    return `
        <button onclick="changeAmount(${index}, -1)" aria-label="Less">-</button>
        <span>${amount}</span>
        <button onclick="changeAmount(${index}, 1)" aria-label="More">+</button>`;
}

/**
 * Template for the button that removes a whole dish from the basket.
 * @param {number} index - Index of the dish in the basket.
 * @returns {string} The HTML of the delete button.
 */
function getDeleteButtonTemplate(index) {
    return `
        <button onclick="removeFromBasket(${index})" aria-label="Remove dish">
            <img src="./assets/icons/delete.svg" alt="" />
        </button>`;
}
