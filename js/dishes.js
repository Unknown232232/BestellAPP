const categories = [
    {
        "key": "burger",
        "title": "Burger & Sandwiches",
        "note": "",
        "icon": "./assets/icons/burger.svg",
    },
    {
        "key": "pizza",
        "title": "Pizza",
        "note": "(30cm)",
        "icon": "./assets/icons/pizza.svg",
    },
    {
        "key": "salad",
        "title": "Salad",
        "note": "",
        "icon": "./assets/icons/salad.svg",
    },
];

let dishes = [
    // Burger
    {
        "name": "Veggie mushroom black burger",
        "category": "burger",
        "image": "./assets/img/Veggie_mushroom_black_burger.png",
        "ingredients": [
            "Mixed green salad",
            "Tomatoes",
            "Edamame",
            "Mushrooms",
        ],
        "price": 16.9,
    },
    {
        "name": "All meat burger",
        "category": "burger",
        "image": "./assets/img/All_meat_burger.png",
        "ingredients": [
            "Beef",
            "Bacon",
            "Dill pickles",
            "Smoked cheese",
            "Ketchup",
            "BBQ souse",
        ],
        "price": 15.9,
    },
    {
        "name": "Beef red burger",
        "category": "burger",
        "image": "./assets/img/Beef_red_burger.png",
        "ingredients": ["Beef", "Cheese", "Tomatoes", "Lettuce", "Onion"],
        "price": 14.9,
    },
    {
        "name": "Blg chicken burger",
        "category": "burger",
        "image": "./assets/img/Blg_chicken_burger.png",
        "ingredients": [
            "Chicken",
            "Cheese",
            "Tomatoes",
            "Lettuce, Onion",
            "Bell pepper",
        ],
        "price": 15.9,
    },

    // Pizza
    {
        "name": "Pizza Margherita",
        "category": "pizza",
        "image": "./assets/img/Pizza_Margherita.png",
        "ingredients": ["Tomato Sauce", "Mozzarella"],
        "price": 11.9,
    },
    {
        "name": "Pizza Chorizo",
        "category": "pizza",
        "image": "./assets/img/Pizza_Chorizo.png",
        "ingredients": ["Tomato slices", "Mozzarella", "Chorizo"],
        "price": 13.9,
    },
    {
        "name": "Funghi",
        "category": "pizza",
        "image": "./assets/img/Pizza_Funghi.png",
        "ingredients": [
            "Red onion",
            "Olives",
            "Button Mushrooms",
            "Mozzarella",
        ],
        "price": 12.9,
    },
    {
        "name": "Quattro Formaggi with Chicken",
        "category": "pizza",
        "image": "./assets/img/Quattro_Formaggi_with_Chicken.png",
        "ingredients": [
            "Chicken",
            "Mozzarella",
            "Gorgonzola",
            "Fontina",
            "Parmigiano Reggiano",
        ],
        "price": 15.9,
    },

    // Salad
    {
        "name": "Warm beef arugula salad",
        "category": "Salad",
        "image": "./assets/img/Warm_beef_arugula_salad.png",
        "ingredients": [
            "Beef",
            "Arugula",
            "Field salad",
            "Greek feta",
            "Cherry tomatoes",
            "Sun-dried Tomatoes",
            "Balsamic-vinegar dressing",
        ],
        "price": 16.9,
    },
    {
        "name": "Mini green Salad",
        "category": "Salad",
        "image": "./assets/img/Mini_green_Salad.png",
        "ingredients": [
            "Green salad",
            "Cucumber",
            "Carrots",
            "Parsley",
            "Radishes",
        ],
        "price": 7.9,
    },
    {
        "name": "Green Salad with sea food",
        "category": "Salad",
        "image": "./assets/img/Green_Salad_with_sea_food.png",
        "ingredients": [
            "Mixed greens",
            "Cherry tomatoes",
            "Red onion",
            "Mussels",
            "Squid rings",
            "Shrimp",
            "Dijon mustard-lemon dressing with dill",
        ],
        "price": 16.9,
    },
    {
        "name": "Vegan green salad with tofu",
        "category": "Salad",
        "image": "./assets/img/Vegan_green_salad_with_tofu.png ",
        "ingredients": [
            "Green salad",
            "Cherry tomatoes",
            "Cucumber",
            "Baby spinach",
            "Edamame",
            "Radishes",
            "Bittercress",
            "Tofu",
            "Peanuts",
        ],
        "price": 14.9,
    },
];
