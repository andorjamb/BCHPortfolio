
console.log("testing connection");
const backToTop = document.getElementById('back-to-top');
const form = document.querySelector('form');
const nav = document.querySelector('nav');
const navOverlay = document.querySelector('.nav-overlay');
const logoOverlay = document.querySelector('.logoOverlay');
const menuIcon = document.querySelector('.menu-icon');


function scrollDownEvents() {
    if (document.documentElement.scrollTop > 100) {
        console.log("activating scrolldown");
        nav.classList.add("scrollDown");
        backToTop.style.display = 'block';
    }
    else {
        nav.className = "";
        backToTop.style.display = 'none';
    }

    /*  navOverlay.classList.add();
     logoOverlay.classList.remove(); */
}

function mobileMenu() {
    if (nav.classList.contains('responsive')) {
        navOverlay.classList.remove('responsive');
        document.body.style.overflow = "";
    } else {
        nav.classList.add('responsive');
        document.body.style.overflow = "hidden";
    }
}



form.addEventListener("submit", function (event) {
    event.preventDefault();
})

backToTop.addEventListener('click', function () { window.scroll(0, 0) });

window.onscroll = function () { scrollDownEvents() };

menuIcon.addEventListener('click', mobileMenu());

