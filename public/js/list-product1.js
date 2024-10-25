console.log("executing list-product1 script.");

// ===========================================//
// GAS OIL AND ELECTRIC
// ===========================================//

// Select all categories
const categories = document.querySelectorAll(".bakar");

// Hide all categories initially
categories.forEach((category) => {
    category.style.display = "none";
});
const initialCategory = document.querySelector(".oil");
if (initialCategory) {
    initialCategory.style.display = "flex";
}
function showZennixElec(bakar, element) {
    // Hide All Categories Zennix Electric
    const catZenEl = document.querySelectorAll(".bakar");
    catZenEl.forEach((cat) => {
        cat.style.display = "none";
    });

    // show the selected category zennix gas oil or electric
    document.querySelector(`.${bakar}`).style.display = "flex";

    // Remove active class from all menu items
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });

    // Add active class to the clicked menu item
    element.classList.add("active");
}

// ===========================================//
// END GAS OIL AND ELECTRIC
// ===========================================//

// ===========================================//
// COLOR OPTIONS
// ===========================================//

function selectColor(color) {
    // Get all image elements
    const opColors = document.querySelectorAll(".clr-opt");
    
    // Hide all images first
    opColors.forEach((oc) => {
        oc.style.display = "none";
    });

    // Show the selected image
    const selectedImage = document.querySelector(`.clr-opt.${color}`);
    if (selectedImage) {
        selectedImage.style.display = "block";
    }
}

// ===========================================//
// END COLOR OPTIONS
// ===========================================//


