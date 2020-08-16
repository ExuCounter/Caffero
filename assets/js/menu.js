let burgerMenu = document.querySelector('.burger-menu');
let menu = document.querySelector('.header-nav');
let headerMobileLogo = document.querySelector('.header-mobile-nav__logo');

burgerMenu.addEventListener('click', () => {
    if (!(menu.classList.contains('active'))) {
        menu.classList.add('active');
        burgerMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        headerMobileLogo.classList.add('active');
    } else {
        menu.classList.remove('active');
        burgerMenu.classList.remove('active');
        document.body.style.overflow = 'scroll';
        headerMobileLogo.classList.remove('active');
    }
})