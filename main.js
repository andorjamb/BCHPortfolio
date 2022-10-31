
const backToTop = document.getElementById('back-to-top');
const form = document.querySelector('form');
const nav = document.querySelector('nav');
const navListItems = document.querySelectorAll('nav ul li');
const navLinks = document.querySelectorAll('nav ul li a');
const menuIcon = document.querySelector('.menu-icon');
const circles = document.querySelectorAll('.circle');
const title = document.querySelector('.title');
const hero = document.querySelector('.hero');
const ul = document.querySelector('ul');

function scrollDownEvents() {
    if (document.documentElement.scrollTop > 150) {
        nav.classList.add("scroll-down");
        backToTop.style.display = 'block';
        circles.forEach((circle) => { circle.classList.add('in-line') });
        ul.style.zIndex = "-1";
    }
    else {
        nav.classList.remove("scroll-down");
        backToTop.style.display = 'none';
        circles.forEach((circle) => { circle.classList.remove('in-line') });
    }

}

function mobileMenu() {
    if (!(ul.classList.contains('responsive'))) {
        ul.classList.add('responsive');
        navListItems.forEach((li) => li.classList.add('visible'));
        document.body.style.overflow = "hidden";
    } else {
        ul.classList.remove('responsive');
        document.body.style.overflow = "";
    }
}

for (const i of navListItems) {
    console.log(i.classList);
}


form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log('form submitted');
})

backToTop.addEventListener('click', function () { window.scroll(0, 0) });

window.onscroll = function () { scrollDownEvents() };

menuIcon.addEventListener('click', function () {
    mobileMenu();
});

for (const link of navLinks) {
    if (ul.classList.contains('responsive')) {
        link.addEventListener('click', () => { mobileMenu(); })

    }
} 
