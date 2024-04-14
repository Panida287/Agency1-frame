// for buttons to filter
const buttons = [
    { button: document.getElementById('panida-btn'), introId: 'intro-panida' },
    { button: document.getElementById('helene-btn'), introId: 'intro-helene' },
    { button: document.getElementById('kenneth-btn'), introId: 'intro-kenneth' },
    { button: document.getElementById('berken-btn'), introId: 'intro-berken' },
    { button: document.getElementById('patrick-btn'), introId: 'intro-patrick' }
];

buttons.forEach(({ button, introId}) => {
     button.addEventListener("click", function() {
         buttons.forEach(({introId}) => {
             document.getElementById(introId).style.display = 'none';
         });
         document.getElementById(introId).style.display = 'block';
     });
});

const sessionBtn = document.querySelectorAll('.polaroid-bg');

sessionBtn.forEach(sessionBtn => {
    sessionBtn.addEventListener('click', () => {
        document.querySelector('.active-btn')?.classList.remove('active-btn');
        sessionBtn.classList.add('active-btn');
    })
})