const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
// const link = document.querySelector('nav ul a');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});


