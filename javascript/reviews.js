document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const imgWidth = slider.clientWidth / 3;
    const images = slider.querySelectorAll('.review-card');
    const totalCards = images.length;
    let currentPosition = 0;

    function moveSlider(direction) {
        if (direction === 'next') {
            currentPosition -= imgWidth; // Move one card forward
            if (currentPosition < -imgWidth * (totalCards - 3)) {
                currentPosition = 0; // Reset position to the beginning if reaching the end
            }
        } else {
            currentPosition += imgWidth; // Move one card backward
            if (currentPosition > 0) {
                currentPosition = -imgWidth * (totalCards - 3); // Reset position to the end if reaching the beginning
            }
        }

        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(${currentPosition}px)`;
    }

    document.querySelector('.prev').addEventListener('click', function () {
        moveSlider('prev');
    });

    document.querySelector('.next').addEventListener('click', function () {
        moveSlider('next');
    });

    // Reset transition and position when transition ends
    slider.addEventListener('transitionend', function () {
        if (currentPosition === 0 || currentPosition === -imgWidth * (totalCards - 3)) {
            slider.style.transition = 'none';
        }
    });
});






