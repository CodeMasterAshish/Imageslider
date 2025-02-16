let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesContainer = document.querySelector('.slides-container');

// Function to move to the next slide
function nextSlide() {
    if (currentIndex === totalSlides - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSliderPosition();
}

// Function to move to the previous slide
function previousSlide() {
    if (currentIndex === 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex--;
    }
    updateSliderPosition();
}

// Update the slider's position based on the current index
function updateSliderPosition() {
    const offset = -currentIndex * 100; // Move the slides
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Set up the event listeners for the buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.previous').addEventListener('click', previousSlide);
