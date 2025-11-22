//GESTIONE MENU HAMBURGER

const hamburgerIcon = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');

function toggleMenu(event) {
    event.preventDefault(); // Prevceiene comportamenti di default

    event.stopPropagation(); // ferma event bubbling

    hamburgerIcon.classList.toggle('active');
    menu.classList.toggle('active');
     console.log('Menu toggled:', menu.classList.contains('active'));
}


// Entrambi gli eventi per massima compatibilità
hamburgerIcon.addEventListener('click', toggleMenu);
hamburgerIcon.addEventListener('touchstart', toggleMenu);

