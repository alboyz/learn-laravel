    console.log("slider1");
const container = document.querySelector(".slider-container");

const slide = document.querySelector(".slider");

let slides = document.querySelectorAll(".car");

const interval = 2000;

let index = 1;

const firstClone = slides[0];

// Clone the first and last slides

const firstSlideClone = slides[0].cloneNode(true);

const lastSlideClone = slides[slides.length - 1].cloneNode(true);

firstSlideClone.id = "first-clone";

lastSlideClone.id = "last-clone";

slide.append(firstSlideClone);

slide.prepend(lastSlideClone);

let slideWidth = slides[index].clientWidth;

console.log(slideWidth);

slide.style.transform = "translateX(${-slideWidth * index}px)";

console.log(slides);

const startSlide = () => {
    slideId = setInterval(() => {
        slide.style.transition = "transform 0.5s ease-in-out"; // Add smooth transition

        nextSlide();
    }, interval);
};

//button next

const nextSlide = () => {
    slides = document.querySelectorAll(".car");

    if (index >= slides.length - 1) return;

    index++;

    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = ".7s";
};

//button next

const prevSlide = () => {
    if (index <= 0) return;

    index--;

    slide.style.transform = `translateX(${-slideWidth * index}px)`;

    slide.style.transition = ".7s";
};

// After the transition, check if the current slide is a clone

slide.addEventListener("transitionend", () => {
    console.log("Transition ended"); // Check if this logs

    slides = document.querySelectorAll(".car");

    if (slides[index].id === firstSlideClone.id) {
        slide.style.transition = "none";

        console.log("trasition style none");

        index = 1;

        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

container.addEventListener("mouseenter", () => {
    clearInterval(slideId);
});

container.addEventListener("mouseleave", startSlide);


// Start the slider

startSlide();

// Handle page visibility change

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        clearInterval(slideId); // Stop the slider when the page is hidden
    } else if (document.visibilityState === "visible") {
        startSlide(); // Resume the slider when the page becomes visible
    }
});


//     setTimeout(() =>{
//         if (window.Livewire) {
//             console.log("Livewire is already loaded. Executing slider script.");

//

//             // Example slider initialization or DOM ready logic
//             document.addEventListener("DOMContentLoaded", function() {
//                 console.log("DOM fully loaded and parsed, executing slider script.");
//                 // Initialize the slider or any other logic
//             });
//         }
//     }, 100);

// console.log("Slider script section is being loaded.");

// document.addEventListener("livewire:load", function() {
//     console.log("Livewire loaded and DOM ready for slider");

//     const container = document.querySelector(".slider-container");
//     const slide = document.querySelector(".slider");
//     let slides = document.querySelectorAll(".car");
//     const interval = 2000;
//     let index = 1;
//     let slideId;

//     if (!container || !slide || slides.length === 0) {
//         console.error("Slider elements not found!");
//         return;
//     }

//     // Clone the first and last slides
//     const firstSlideClone = slides[0].cloneNode(true);
//     const lastSlideClone = slides[slides.length - 1].cloneNode(true);

//     firstSlideClone.id = "first-clone";
//     lastSlideClone.id = "last-clone";

//     slide.append(firstSlideClone);
//     slide.prepend(lastSlideClone);

//     let slideWidth = slides[index].clientWidth;

//     // Set initial position of the slider
//     slide.style.transform = `translateX(${-slideWidth * index}px)`;

//     // Recalculate slide width on window resize
//     window.addEventListener('resize', () => {
//         slideWidth = slides[index].clientWidth;
//         slide.style.transform = `translateX(${-slideWidth * index}px)`;
//     });

//     const startSlide = () => {
//         slideId = setInterval(() => {
//             nextSlide();
//         }, interval);
//     };

//     const nextSlide = () => {
//         console.log('Next slide triggered');
//         slides = document.querySelectorAll(".car");
//         if (index >= slides.length - 1) return; // Prevent index overflow
//         index++;
//         slide.style.transition = "transform 0.7s ease-in-out";
//         slide.style.transform = `translateX(${-slideWidth * index}px)`;
//     };

//     const prevSlide = () => {
//         console.log('Previous slide triggered');
//         if (index <= 0) return; // Prevent index underflow
//         index--;
//         slide.style.transition = "transform 0.7s ease-in-out";
//         slide.style.transform = `translateX(${-slideWidth * index}px)`;
//     };

//     slide.addEventListener("transitionend", () => {
//         slides = document.querySelectorAll(".car");

//         if (slides[index].id === firstSlideClone.id) {
//             slide.style.transition = "none"; // Remove transition for instant switch
//             index = 1;
//             slide.style.transform = `translateX(${-slideWidth * index}px)`;
//         }

//         if (slides[index].id === lastSlideClone.id) {
//             slide.style.transition = "none"; // Remove transition for instant switch
//             index = slides.length - 2; // Set to the actual last slide
//             slide.style.transform = `translateX(${-slideWidth * index}px)`;
//         }
//     });

//     // Stop and start the slider on hover
//     container.addEventListener("mouseenter", () => {
//         clearInterval(slideId);
//     });

//     container.addEventListener("mouseleave", startSlide);

//     // Handle page visibility change
//     document.addEventListener("visibilitychange", () => {
//         if (document.visibilityState === "hidden") {
//             clearInterval(slideId); // Stop the slider when the page is hidden
//         } else if (document.visibilityState === "visible") {
//             startSlide(); // Resume the slider when the page becomes visible
//         }
//     });

//     // Attach event listeners for the next and previous buttons
//     const nextButton = document.querySelector('.next');
//     const prevButton = document.querySelector('.prev');

//     if (nextButton && prevButton) {
//         nextButton.addEventListener("click", nextSlide);
//         prevButton.addEventListener("click", prevSlide);
//     }

//     startSlide(); // Start the slider when the page loads
// });
