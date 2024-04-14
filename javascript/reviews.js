document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const imgWidth = slider.clientWidth / 3;
    const images = slider.querySelectorAll('.review-card');
    const totalCards = images.length;
    let currentPosition = 0;

    function moveSlider(direction) {
        if (direction === 'next') {
            currentPosition -= imgWidth;
            if (currentPosition < -imgWidth * (totalCards - 3)) {
                currentPosition = 0;
            }
        } else {
            currentPosition += imgWidth;
            if (currentPosition > 0) {
                currentPosition = -imgWidth * (totalCards - 3); 
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


    slider.addEventListener('transitionend', function () {
        if (currentPosition === 0 || currentPosition === -imgWidth * (totalCards - 3)) {
            slider.style.transition = 'none';
        }
    });
});