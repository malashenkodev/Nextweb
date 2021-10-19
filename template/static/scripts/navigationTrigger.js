// Opening menu

const hamburgerIcon = document.querySelector('#hamburgerMenu');

hamburgerIcon.addEventListener('click', () => {
    document.querySelector('.header__mobileNav').classList.add('active');
});

// Closing menu

const closeIcon = document.querySelector('.header__mobileNavClose').addEventListener('click', () => {
    document.querySelector('.header__mobileNav').classList.remove('active');
});