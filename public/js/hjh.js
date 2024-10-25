document.addEventListener("DOMContentLoaded", function () {

    function initializeModals() {
        // Object to store button IDs for opening modals
        const modalButtons = {
            gModalButton: "btn-g-modal",
            vModalButton: "btn-v-modal",
            gHybridModalButton: "btn-g-hybrid-modal",
            vHybridModalButton: "btn-v-hybrid-modal",
            vHybridModellistaModalButton: "btn-v-hybrid-modellista-modal"
        };

        // Object to store modal IDs
        const modals = {
            gModal: "g-modal",
            vModal: "v-modal",
            gHybridModal: "g-hybrid-modal",
            vHybridModal: "v-hybrid-modal",
            vHybridModellistaModal: "v-hybrid-modellista-modal"
        };

        // Select all elements with the 'close' class
        const closeButtons = document.querySelectorAll(".close");

        // Function to open a modal and emit a Livewire event
        function openModal(modal, modalName) {
            modal.classList.remove("close");
            modal.style.display = "";
            setTimeout(() => modal.classList.add("open"), 10); // Adding 'open' class after display is set to block

            // Emit event to Livewire when a modal is opened
            Livewire.emit('modalOpened', modalName);
        }

        // Function to close a modal and emit a Livewire event
        function closeModal(modal, modalName) {
            modal.classList.add("close"); // Add 'close' class to trigger close animation
            setTimeout(() => {
                modal.classList.remove("open"); // Remove 'open' class after animation ends
                modal.style.display = "none"; // Hide the modal

                // Emit event to Livewire when a modal is closed
                Livewire.emit('modalClosed', modalName);
            }, 1400); // Duration matches the animation time (1.4s)
        }

        // Add event listeners to modal buttons to open the corresponding modals
        Object.keys(modalButtons).forEach(buttonKey => {
            const button = document.getElementById(modalButtons[buttonKey]);
            const modal = document.getElementById(modals[buttonKey.replace("Button", "")]);
            if (button && modal) { // Check if button and modal exist
                button.addEventListener("click", () => openModal(modal, buttonKey));
            }
        });

        // Add event listeners to close buttons to close the modals
        closeButtons.forEach(button => {
            button.addEventListener("click", () => {
                const modal = button.closest(".modal");
                const modalName = Object.keys(modals).find(key => modals[key] === modal.id); // Find modal name
                closeModal(modal, modalName);
            });
        });

        // Close the modal when clicking outside of it
        window.addEventListener("click", event => {
            Object.values(modals).forEach(modalId => {
                const modal = document.getElementById(modalId);
                if (event.target === modal) {
                    const modalName = Object.keys(modals).find(key => modals[key] === modal.id); // Find modal name
                    closeModal(modal, modalName);
                }
            });
        });
    }

    // Initial load of the modals
    initializeModals();

    // Reinitialize modals after Livewire navigation or updates
    Livewire.hook('message.processed', () => {
        console.log("Livewire content updated. Reinitializing modals...");
        initializeModals();
    });
});
