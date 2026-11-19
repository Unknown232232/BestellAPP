const deliveryFee = 4.99;
const confirmationDuration = 4000;

let basket = [];
let confirmationTimer;

/**
 * Starts the page: renders the menu and the empty basket.
 */
function init() {
    renderMenu();
    renderBasket();
    showConfirmation();
}

/**
 * Renders all categories with their dishes into the menu container.
 */
function renderMenu() {
    let html = "";
    for (let i = 0; i < categories.length; i++) {
        html += getCategoryHtml(categories[i]);
    }
    document.getElementById("menu").innerHTML = html;
}

/**
 * Builds the HTML of one category including its dish cards.
 * @param {{key: string, title: string, note: string, icon: string}} category - The category.
 * @returns {string} The HTML of the category.
 */
function getCategoryHtml(category) {
    const note = category.note ? ` <small>${category.note}</small>` : "";
    const cards = getDishCardsHtml(category.key);
    return getCategoryTemplate(
        category.key,
        category.icon,
        category.title,
        note,
        cards,
    );
}

/**
 * Builds the HTML of all dish cards that belong to a category.
 * @param {string} categoryKey - Key of the category, e.g. "pizza".
 * @returns {string} The HTML of all matching dish cards.
 */
function getDishCardsHtml(categoryKey) {
    let cards = "";
    for (let i = 0; i < dishes.length; i++) {
        if (dishes[i].category === categoryKey) {
            cards += getDishCardHtml(dishes[i], i);
        }
    }
    return cards;
}

/**
 * Builds the HTML of one dish card.
 * @param {object} dish - The dish from the dishes array.
 * @param {number} index - Index of the dish in the dishes array.
 * @returns {string} The HTML of the dish card.
 */
function getDishCardHtml(dish, index) {
    const ingredients = dish.ingredients.join(", ");
    const price = formatPrice(dish.price);
    return getDishTemplate(index, dish.image, dish.name, ingredients, price);
}

/**
 * Adds a dish to the basket or raises its amount if it is already inside.
 * @param {number} dishIndex - Index of the dish in the dishes array.
 */
function addToBasket(dishIndex) {
    const dish = dishes[dishIndex];
    const item = basket.find((entry) => entry.name === dish.name);
    if (item) {
        item.amount++;
    } else {
        basket.push({ name: dish.name, price: dish.price, amount: 1 });
    }
    renderBasket();
}

/**
 * Changes the amount of a dish in the basket and removes it at 0.
 * @param {number} basketIndex - Index of the dish in the basket.
 * @param {number} change - Value to add to the amount, e.g. 1 or -1.
 */
function changeAmount(basketIndex, change) {
    basket[basketIndex].amount += change;
    if (basket[basketIndex].amount < 1) {
        basket.splice(basketIndex, 1);
    }
    renderBasket();
}

/**
 * Removes a dish completely from the basket.
 * @param {number} basketIndex - Index of the dish in the basket.
 */
function removeFromBasket(basketIndex) {
    basket.splice(basketIndex, 1);
    renderBasket();
}

/**
 * Renders the basket for desktop and for the mobile dialog.
 */
function renderBasket() {
    const isEmpty = basket.length === 0;
    const html = isEmpty ? getEmptyBasketTemplate() : getFilledBasketHtml();
    renderBasketInto("basketDesktop", html);
    renderBasketInto("basketDialogContent", html);
    updateBasketCount();
}

/**
 * Writes the basket HTML into a container and keeps the scroll position.
 * @param {string} containerId - Id of the container element.
 * @param {string} html - The basket HTML.
 */
function renderBasketInto(containerId, html) {
    const container = document.getElementById(containerId);
    const oldList = container.querySelector(".basket-items");
    const scrollTop = oldList ? oldList.scrollTop : 0;
    container.innerHTML = html;
    const newList = container.querySelector(".basket-items");
    if (newList) {
        newList.scrollTop = scrollTop;
    }
}

/**
 * Builds the HTML of the basket with all dishes and prices.
 * @returns {string} The HTML of the filled basket.
 */
function getFilledBasketHtml() {
    const subtotal = formatPrice(getSubtotal());
    const fee = formatPrice(deliveryFee);
    const total = formatPrice(getSubtotal() + deliveryFee);
    const items = getBasketItemsHtml();
    return getFilledBasketTemplate(items, subtotal, fee, total);
}

/**
 * Builds the HTML of all dishes inside the basket.
 * @returns {string} The HTML of all basket items.
 */
function getBasketItemsHtml() {
    let items = "";
    for (let i = 0; i < basket.length; i++) {
        items += getBasketItemHtml(basket[i], i);
    }
    return items;
}

/**
 * Builds the HTML of one dish inside the basket.
 * @param {{name: string, price: number, amount: number}} item - The basket item.
 * @param {number} index - Index of the item in the basket.
 * @returns {string} The HTML of the basket item.
 */
function getBasketItemHtml(item, index) {
    const { name, amount } = item;
    const controls = getAmountControlsHtml(amount, index);
    const deleteButton = amount > 1 ? getDeleteButtonTemplate(index) : "";
    const price = formatPrice(item.price * amount);
    return getBasketItemTemplate(name, amount, controls, deleteButton, price);
}

/**
 * Chooses the amount buttons: delete + plus for 1, minus + plus for more.
 * @param {number} amount - Current amount of the dish.
 * @param {number} index - Index of the dish in the basket.
 * @returns {string} The HTML of the amount buttons.
 */
function getAmountControlsHtml(amount, index) {
    if (amount > 1) {
        return getMultiAmountTemplate(index, amount);
    }
    return getSingleAmountTemplate(index);
}

/**
 * Calculates the sum of all dishes in the basket without delivery fee.
 * @returns {number} The subtotal.
 */
function getSubtotal() {
    let subtotal = 0;
    for (let i = 0; i < basket.length; i++) {
        subtotal += basket[i].price * basket[i].amount;
    }
    return subtotal;
}

/**
 * Shows the number of dishes in the basket icon of the mobile navigation.
 */
function updateBasketCount() {
    const count = basket.reduce((sum, item) => sum + item.amount, 0);
    const badge = document.getElementById("basketCount");
    badge.textContent = count;
    badge.hidden = count === 0;
}

/**
 * Places the test order: empties the basket and shows the confirmation.
 */
function placeOrder() {
    basket = [];
    renderBasket();
    closeBasketDialog();
    showConfirmation();
}

/**
 * Opens the order confirmation and closes it automatically after a while.
 */
function showConfirmation() {
    const dialog = document.getElementById("confirmationDialog");
    clearTimeout(confirmationTimer);
    dialog.style.opacity = "1";
    dialog.showModal();
    confirmationTimer = setTimeout(closeConfirmation, confirmationDuration);
}

/**
 * Fades the order confirmation out and closes it.
 */
function closeConfirmation() {
    const dialog = document.getElementById("confirmationDialog");
    clearTimeout(confirmationTimer);
    dialog.style.opacity = "0";
    setTimeout(() => dialog.close(), 400);
}

/**
 * Closes the basket dialog of the mobile view.
 */
function closeBasketDialog() {
    document.getElementById("basketDialog").close();
}
