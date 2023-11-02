"use strict";

let menu = {
    drinks: [
        "Water", "Tea", "Sweet Tea",
        "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees: [
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate"
    ],
    desserts: [
        "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};

window.onload = init;

//categoryList and itemList

function init() {
    const categoryList = document.getElementById("categoryList");
    categoryList.onchange = onCategoryChange;
}

function onCategoryChange() {
    let itemList = document.getElementById("itemList");
    fillItemList();

}

function fillItemList() {
    const categoryList = document.getElementById("categoryList");
    let itemList = document.getElementById("itemList");

    if (categoryList.value == "clearSelect") {
        itemList.options.length = 0;
    }
    else if (categoryList.value == "drinks") {
        itemList.options.length = 0;
        const length = menu.drinks.length;
        for (let i = 0; i < length; i++) {
            let newOption = new Option(menu.drinks[i]);
            itemList.appendChild(newOption);
        }
    }
    else if(categoryList.value == "entrees"){
        itemList.options.length = 0;
        const length = menu.entrees.length;

        for (let i = 0; i < length; i++) {
            let newOption = new Option(menu.entrees[i]);
            itemList.appendChild(newOption);
        }
    }
    else if(categoryList.value == "desserts"){
        itemList.options.length = 0;
        const length = menu.desserts.length;
        for (let i = 0; i < length; i++) {
            let newOption = new Option(menu.desserts[i]);
            itemList.appendChild(newOption);
        }
    }
}