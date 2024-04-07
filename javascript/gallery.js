const buttons = [
    { button: document.getElementById('headshot-btn'), headerText: "Headshots", imagesId: 'headshot-images' },
    { button: document.getElementById('tinder-btn'), headerText: "Tinder", imagesId: 'tinder-images' },
    { button: document.getElementById('wedding-btn'), headerText: "Wedding", imagesId: 'wedding-images' },
    { button: document.getElementById('boudoir-btn'), headerText: "Boudoir", imagesId: 'boudoir-images' }

];
const header = document.getElementById("header");

buttons.forEach(({ button, headerText, imagesId }) => {
    button.addEventListener("click", function() {
        header.innerHTML = headerText;
        buttons.forEach(({ imagesId }) => {
            document.getElementById(imagesId).style.display = 'none';
        });
        document.getElementById(imagesId).style.display = 'grid';
    });
});
