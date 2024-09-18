const hamburgerToggle = document.querySelector("#menu");
const navlink = document.querySelector(".navlink"); // Ensure this targets the right element

hamburgerToggle.addEventListener("click", function () {
    navlink.classList.toggle("open"); // Toggle 'open' class on navlink
});
document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelector("#b-modal"); // The button to open the modal
    const features1 = document.querySelector("#b-modal1");
    const m = document.querySelector(".modal"); // The modal itself
    const c = document.querySelector(".close"); // The close button

    // Open the modal
    features.addEventListener("click", function () {
        m.classList.remove("close"); // Remove close class to reset any previous animation
        m.style.display = "block"; // Ensure modal is visible
        setTimeout(function () {
            m.classList.add("open"); // Add open class after making it visible
        }, 10); // Small delay to allow display change to take effect
    });


    features1.addEventListener("click", function () {
        m.classList.remove("close"); // Remove close class to reset any previous animation
        m.style.display = "block"; // Ensure modal is visible
        setTimeout(function () {
            m.classList.add("open"); // Add open class after making it visible
        }, 10); // Small delay to allow display change to take effect
    });

    // Close the modal with animation
    c.addEventListener("click", function () {
        m.classList.add("close"); // Add close class to trigger close animation

        // Wait for the animation to finish before hiding the modal
        setTimeout(function () {
            m.classList.remove("open"); // Remove open class after animation ends
            m.style.display = "none"; // Ensure the modal is hidden
        }, 1400); // Duration matches the animation time (1.4s)
    });

    // Optional: Close modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target == m) {
            m.classList.add("close");

            setTimeout(function () {
                m.classList.remove("open");
                m.style.display = "none";
            }, 1400); // Match with animation time
        }
    });
});
