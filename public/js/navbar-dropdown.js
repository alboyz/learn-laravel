document.addEventListener("DOMContentLoaded", function() {
    const navbarItems = document.querySelectorAll("nav .navbar ul li");

    navbarItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.stopPropagation(); // Stop the event from bubbling up
            const submenu = item.querySelector(".dropdown"); // Select the submenu using .dropdown
            if (submenu) {
                // Toggle visibility of the submenu
                if (submenu.style.display === "block") {
                    submenu.style.display = "none";
                } else {
                    submenu.style.display = "block";
                }
            }
        });

        item.addEventListener("mouseleave", function() {
            const submenu = item.querySelector(".dropdown");
            if (submenu) {
                submenu.style.display = "none"; // Hide the submenu when the mouse leaves
            }
        });
    });

    // Hide the dropdown if you click outside of the navbar
    document.addEventListener("click", function() {
        const submenus = document.querySelectorAll(".dropdown");
        submenus.forEach(function(submenu) {
            submenu.style.display = "none";
        });
    });
});
