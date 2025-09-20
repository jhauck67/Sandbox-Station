// TITRE : [NAVBAR] : Animation de la barre de navigation //

// ###### BURGER MENU ###### //
const burgerIcon = document.getElementById('icon-burger');
const navbar = document.querySelector('.navbar');

// Au click, on applique ou pas la classe .open
burgerIcon.addEventListener('click', () => {
    navbar.classList.toggle('open');
});


// TITRE : [LIGHT] : Animation "light" du header //
const lights = document.querySelectorAll('.light');
const speed = 5000;

// La fonction calcule des coordonnées aléatoires et applique une transition à chaque .light
const moveLight = () => {
    lights.forEach(light => {
        light.style.setProperty('--top', Math.random() * 100 + "%");
        light.style.setProperty('--left', Math.random() * 100 + "%");
        light.style.transition = `all ${speed}ms ease-in-out`;
    });
};

// On appelle une première fois la fonction
moveLight()

// La fonction se rejoue avec un intervalle de ${speed}
setInterval(moveLight, speed);


