// TITRE : [NAVBAR] : Animation de la barre de navigation //

// ###### BURGER MENU ###### //
const burgerIcon = document.getElementById('icon-burger');
const navbar = document.querySelector('.navbar');

// Au click, on applique ou pas la classe .open
burgerIcon.addEventListener('click', () => {
    navbar.classList.toggle('open');
});


