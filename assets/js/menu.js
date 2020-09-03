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
        document.querySelector('.header-mobile-nav .header-mobile-nav__logo').style.opacity = '0';
        menu.classList.add('active');
        burgerMenu.classList.add('active');
        document.querySelector('body').style.overflowY = 'hidden';
        headerMobileNav.classList.add('active');
    } else {
        document.querySelector('.header-mobile-nav .header-mobile-nav__logo').style.opacity = '1';
        menu.classList.remove('active');
        burgerMenu.classList.remove('active');
        document.querySelector('body').style.overflowY = 'scroll';
        headerMobileNav.classList.remove('active');
    }
})

if (document.documentElement.offsetWidth < 768) {
    document.querySelectorAll('.mobile-prevent-default').forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
        }
    })
}