// TITRE [IMPORT DES MODULES] //
import { cardsInProjects } from './projects.js';
cardsInProjects();


// TITRE : [NAVBAR] : Animation de la barre de navigation //

// ###### BURGER MENU ###### //
const burgerIcon = document.getElementById('icon-burger');
const navbar = document.querySelector('.navbar');

window.addEventListener('click', (e) => {
    // On toggle la navbar en cliquant sur le burger ou la croix    
    if (e.target.closest('#icon-burger')) {
        navbar.classList.toggle('open');
    // On ferme la navbar en cliquant sur un lien ou ailleurs sur la page
    } else if (navbar.classList.contains('open')) { // On vérifie seulement si le menu est ouvert
        navbar.classList.remove('open');
    }
});


// ###### NAVBAR AU SCROLL ###### //
const nav = document.querySelector('nav');
let scroll = 0;

// Au scroll, on compare la valeur de scroll à celle stockée :
//     - elle est plus grande, on descend
//     - elle est plus petite, on monte
window.addEventListener('scroll', (e) => {
    if (window.scrollY > scroll && window.scrollY > 40) {
        nav.style.transform = "translate(-50%, -110%)";
    } else {
        nav.style.transform = "translate(-50%, 0)";
    };
    // On stocke la nouvelle valeur de scroll
    scroll = window.scrollY;
});


// TITRE : [HEADER] : Animation "light" du header //
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


// TITRE : [FOOTER] : Current Year automatique //
const copyrightYear = document.getElementById('current-year');
const currentDate = new Date();

// On récupère l'année en cours
const currentYear = currentDate.getFullYear();

// On injecte cette valeur dans le span.current-year
copyrightYear.textContent = currentYear;
