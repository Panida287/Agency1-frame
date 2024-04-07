const headshotButton = document.getElementById('headshot-btn');
const tinderButton = document.getElementById('tinder-btn');
const weddingButton = document.getElementById('wedding-btn');
const boudoirButton = document.getElementById('boudoir-btn');
const header = document.getElementById("header");
const headshotImages = document.getElementById('headshot-images');
const tinderImages = document.getElementById('tinder-images');
const weddingImages = document.getElementById('wedding-images');
const boudoirImages = document.getElementById('boudoir-images');

headshotButton.addEventListener("click", function() {
    header.innerHTML = "Headshots";
    headshotImages.style.display = 'grid';
    tinderImages.style.display = 'none';
    weddingImages.style.display = 'none';
    boudoirImages.style.display = 'none';
})

tinderButton.addEventListener("click", function() {
    header.innerHTML = "Tinder";
    headshotImages.style.display = 'none';
    tinderImages.style.display = 'grid'
    weddingImages.style.display = 'none';
    boudoirImages.style.display = 'none'
})

weddingButton.addEventListener("click", function() {
    header.innerHTML = "Tinder";
    headshotImages.style.display = 'none';
    tinderImages.style.display = 'none'
    weddingImages.style.display = 'grid';
    boudoirImages.style.display = 'none'
})

boudoirButton.addEventListener("click", function() {
    header.innerHTML = "Tinder";
    headshotImages.style.display = 'none';
    tinderImages.style.display = 'none'
    weddingImages.style.display = 'none';
    boudoirImages.style.display = 'grid'
})