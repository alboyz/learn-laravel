const container = document.querySelector(".slider-container");
let slide = document.querySelector(".slider");
const interval = 2000;
let index = 1;
// Select all exterior and interior slides
let exteriorSlides = document.querySelectorAll(".exterior");
const interiorSlides = document.querySelectorAll(".interior");

// Clone the first and last slides exterior
const firstSlideCloneExterior = exteriorSlides[0].cloneNode(true);
const lastSlideCloneExterior =
    exteriorSlides[exteriorSlides.length - 1].cloneNode(true);

firstSlideCloneExterior.id = "first-clone";
lastSlideCloneExterior.id = "last-clone";

slide.append(firstSlideCloneExterior);
slide.prepend(lastSlideCloneExterior);

let slideWidthExterior = exteriorSlides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidthExterior * index}px)`;

// Show Exterior slides and hide Interior slides
function showExterior() {
    interiorSlides.forEach((slide) => (slide.style.display = "none")); // Hide interior slides
    exteriorSlides.forEach((slide) => (slide.style.display = "block")); // Show exterior slides
    resetSlider(); // Reset the slider to the first visible exterior slide
}

// Show Interior slides and hide Exterior slides
function showInterior() {
    exteriorSlides.forEach((slide) => (slide.style.display = "none")); // Hide exterior slides
    interiorSlides.forEach((slide) => (slide.style.display = "block")); // Show interior slides
    //resetSlider(); // Reset the slider to the first visible interior slide
}

// Reset slider to first slide after switching
function resetSlider() {
    index = 1; // Reset index to the first slide
    exteriorSlides = document.querySelectorAll(".exterior"); // Re-select slides based on visibility
    exteriorSlides[index].clientWidth; // Recalculate slide width
    slide.style.transform = `translateX(${-slideWidthExterior * index}px)`; // Reset the transform
}

//button next
const nextSlide = () => {
    exteriorSlides = document.querySelectorAll(".exterior");
    if (index >= exteriorSlides.length - 1) return;
    index++;
    slide.style.transform = `translateX(${-slideWidthExterior * index}px)`;
    slide.style.transition = ".7s";
};
//button next
const prevSlide = () => {
    if (index <= 0) return;
    index--;
    slide.style.transform = `translateX(${-slideWidthExterior * index}px)`;
    slide.style.transition = ".7s";
};
// After the transition, check if the current slide is a clone
slide.addEventListener("transitionend", () => {
    exteriorSlides = document.querySelectorAll(".exterior");
    if (exteriorSlides[index].id === firstSlideCloneExterior.id) {
        slide.style.transition = "none";

        index = 1;
        slide.style.transform = `translateX(${-slideWidthExterior * index}px)`;
    }
});

const startSlide = () => {
    slideId = setInterval(() => {
        slide.style.transition = "transform 0.5s ease-in-out"; // Add smooth transition
        nextSlide();
    }, interval);
};

container.addEventListener("mouseenter", () => {
    clearInterval(slideId);
});

container.addEventListener("mouseleave", startSlide);

// Initialize by showing exterior slides on page load
showExterior(); // Call this to ensure the page starts with exterior slides visible
startSlide();
