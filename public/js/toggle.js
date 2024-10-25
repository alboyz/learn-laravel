const hamburgerToggle = document.querySelector("#menu");
const navlink = document.querySelector(".navlink"); // Ensure this targets the right element

hamburgerToggle.addEventListener("click", function () {
    navlink.classList.toggle("open"); // Toggle 'open' class on navlink
    
});
    
//     const hamburgerToggleOverview = document.querySelector("#menu-overview")
//     const navlink_overview = document.querySelector(".navlink-header-cars")

    

//      // Toggle the 'open-overview' class on the navlink when the hamburger menu is clicked
//     hamburgerToggleOverview.addEventListener("click", () => {
//          navlink_overview.classList.toggle("open-overview")
//     })

//     // Object to store button IDs for opening modals
//     const modalButtons = {
//         gModalButton: "btn-g-modal",
//         vModalButton: "btn-v-modal",
//         gHybridModalButton: "btn-g-hybrid-modal",
//         vHybridModalButton: "btn-v-hybrid-modal",
//         vHybridModellistaModalButton: "btn-v-hybrid-modellista-modal"
//     };

//     // Object to store modal IDs
//     const modals = {
//         gModal: "g-modal",
//         vModal: "v-modal",
//         gHybridModal: "g-hybrid-modal",
//         vHybridModal: "v-hybrid-modal",
//         vHybridModellistaModal: "v-hybrid-modellista-modal"
//     };

//     // Select all elements with the 'close' class
//     const closeButtons = document.querySelectorAll(".close");

//     // Function to open a modal
//     function openModal(modal) {
//         modal.classList.remove("close");
//         modal.style.display = "";
//         setTimeout(() => modal.classList.add("open"), 10); // Adding 'open' class after display is set to block
//     }

//     // Function to close a modal
//     function closeModal(modal) {
//         modal.classList.add("close"); // Add 'close' class to trigger close animation
//         setTimeout(() => {
//             modal.classList.remove("open"); // Remove 'open' class after animation ends
//             modal.style.display = "none"; // Hide the modal
//         }, 1400); // Duration matches the animation time (1.4s)
//     }

//     // Add event listeners to modal buttons to open the corresponding modals
//     Object.keys(modalButtons).forEach(buttonKey => {
//         const button = document.getElementById(modalButtons[buttonKey]);
//         const modal = document.getElementById(modals[buttonKey.replace("Button", "")]);
//         button.addEventListener("click", () => openModal(modal));
//     });

//     // Add event listeners to close buttons to close the modals
//     closeButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             const modal = button.closest(".modal");
//             closeModal(modal);
//         });
//     });

//     // Close the modal when clicking outside of it
//     window.addEventListener("click", event => {
//         Object.values(modals).forEach(modalId => {
//             const modal = document.getElementById(modalId);
//             if (event.target === modal) {
//                 closeModal(modal);
//             }
//         });
//     });

