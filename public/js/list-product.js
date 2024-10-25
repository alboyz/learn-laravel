document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed, executing product script.");

    // Check if Livewire is already available
    if (window.Livewire) {
        console.log("Livewire is already loaded. Initializing product categories.");
    }

    // Set the initial category if needed (you can set it to the first category)
    showCategory('mpv', document.querySelector('.menu-item.active'));

    console.log("list-product.js is loaded!");
});

// ===========================================//
// PRODUCT LIST
// ===========================================//
function showCategory(category, element) {
    // Ensure the category exists in the DOM
    const selectedCategory = document.querySelector(`.${category}`);
    if (!selectedCategory) {
        console.error(`Category ${category} not found`);
        return;
    }

    // Hide all categories
    const categories = document.querySelectorAll(".category");
    categories.forEach((cat) => {
        cat.style.display = "none";
    });

    // Show the selected category
    selectedCategory.style.display = "flex";

    // Remove the 'active' class from all buttons
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });

    // Add the 'active' class to the clicked button
    element.classList.add("active");
}

// ===========================================//
// END PRODUCT LIST
// ===========================================//

//     // Check if Livewire is already available
//     if (window.Livewire) {
//         console.log("Livewire is already loaded. Executing slider script.");
//         initializeSlider();
//     } else {
//         // Attach listener for when Livewire is loaded
//         document.addEventListener("livewire:load", () => {
//             console.log("Livewire is loaded. Executing slider script.");
//             initializeSlider();
//         });
//     }
// });

// function initializeSlider() {
//     console.log("Slider initialization logic runs here.");
//     // Add your slider initialization code here




