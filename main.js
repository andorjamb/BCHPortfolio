
console.log("testing connection");
const backToTop = document.getElementById('back-to-top');
const form = document.querySelector('form');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');
const navOverlay = document.querySelector('.nav-overlay');
const logoOverlay = document.querySelector('.logoOverlay');
const menuIcon = document.querySelector('.menu-icon');


function scrollDownEvents() {
    if (document.documentElement.scrollTop > 100) {
        console.log("activating scrolldown");
        nav.classList.add("scroll-down");
        backToTop.style.display = 'block';
    }
    else {
        nav.className = "";
        backToTop.style.display = 'none';
    }

}

function mobileMenu() {
    /* for (const link of navLinks) {
        link.addEventListener('click', mobileMenu())
    } */
    if (!nav.classList.contains('responsive')) {
        nav.classList.add('responsive');
        //document.body.style.overflow = "hidden";
    } else {
        nav.classList.remove('responsive');
        document.body.style.overflow = "";
    }
}



form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log('form submitted');
})

backToTop.addEventListener('click', function () { window.scroll(0, 0) });

window.onscroll = function () { scrollDownEvents() };

menuIcon.addEventListener('click', function () {
    console.log('hamburger clicked');
    mobileMenu();
});

