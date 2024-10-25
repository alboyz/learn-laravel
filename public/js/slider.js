let currentIndex = 0;
let autoSlideInterval;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.car');
const totalSlides = slides.length;



// Function to show the next slide
function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        // Reset to first slide after reaching the last slide
        currentIndex = 0;
    }
    updateSlidePosition();
}

// Function to show the previous slide
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        // Go to the last slide if we go backward past the first slide
        currentIndex = totalSlides - 1;
    }
    updateSlidePosition();
}

// Function to update slide position based on the current index
function updateSlidePosition() {
    const offset = -currentIndex * 100; // Calculate the offset in percentage
    slider.style.transform = `translateX(${offset}%)`;
}

// Function to start the auto slider
function startAutoSlider() {
    autoSlideInterval = setInterval(nextSlide, 2000); // Slide every 0.5 seconds
}

// Function to stop the auto slider
function stopAutoSlider() {
    clearInterval(autoSlideInterval);
}


// Start the auto slider when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    startAutoSlider();

    // Optional: Stop auto slider on mouse enter, restart on mouse leave
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', stopAutoSlider);
    sliderContainer.addEventListener('mouseleave', startAutoSlider);
});
