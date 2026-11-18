const deliveryFee = 4.99;

let basket = [];
let confirmationTimer;

function init() {
    renderMenu();
}

function renderMenu() {
    let html = "";
    for (let i = 0; i < categories.length; i++) {
        html += getCategoryHtml(categories[i]);
    }
    document.getElementById("menu").innerHTML = html;
}

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

function getDishCardsHtml(categoryKey) {
    let cards = "";
    for (let i = 0; i < dishes.length; i++) {
        if (dishes[i].category === categoryKey) {
            cards += getDishCardHtml(dishes[i], i);
        }
    }
    return cards;
}

function getDishCardHtml(dish, index) {
    const ingredients = dish.ingredients.join(", ");
    const price = formatPrice(dish.price);
    return getDishTemplate(index, dish.image, dish.name, ingredients, price);
}
