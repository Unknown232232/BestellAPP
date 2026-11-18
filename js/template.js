function getCategoryTemplate(key, icon, title, note, cards) {
    return `
        <section id="${key}">
            <h2><img src="${icon}" alt="" /><span>${title}${note}</span></h2>
            <ul class="dish-list">${cards}</ul>
        </section>`;
}

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
