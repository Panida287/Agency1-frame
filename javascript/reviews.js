document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const imgWidth = slider.clientWidth / 3; // Width of each image
    const images = slider.querySelectorAll('img');
    let currentPosition = 0; // Initial position of the slider

    // Clone the images to create a continuous loop
    images.forEach(img => {
    const clone = img.cloneNode(true);
    slider.appendChild(clone);
    });

    // Function to move the slider
    function moveSlider(direction) {
    if (direction === 'next') {
        currentPosition -= imgWidth; // Move one image forward
    } else {
        currentPosition += imgWidth; // Move one image backward
    }

      // Check if reached the end or beginning, then loop
    if (currentPosition < -slider.scrollWidth / 2) {
        currentPosition += slider.scrollWidth / 2;
    } else if (currentPosition > 0) {
        currentPosition -= slider.scrollWidth / 2;
    }

    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(${currentPosition}px)`;

      // Reset transition after animation
    setTimeout(() => {
        slider.style.transition = 'none';
    }, 500);
    }

    // Event listeners for prev and next buttons
    document.querySelector('.prev').addEventListener('click', function () {
    moveSlider('prev');
    });

    document.querySelector('.next').addEventListener('click', function () {
    moveSlider('next');
    });
});

