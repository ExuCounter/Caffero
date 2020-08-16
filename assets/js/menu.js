let burgerMenu = document.querySelector('.burger-menu');
let menu = document.querySelector('.header-nav');
let headerMobileNav = document.querySelector('.header-mobile-nav');

burgerMenu.addEventListener('click', () => {
    if (document.documentElement.scrollTop > 0) {
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 500);
    }
    if (!(menu.classList.contains('active'))) {
        menu.classList.add('active');
        burgerMenu.classList.add('active');
        document.body.style.overflowY = 'hidden';
        headerMobileNav.classList.add('active');
    } else {
        menu.classList.remove('active');
        burgerMenu.classList.remove('active');
        document.body.style.overflowY = 'scroll';
        headerMobileNav.classList.remove('active');
    }
})