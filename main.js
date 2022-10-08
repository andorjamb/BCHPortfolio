


console.log("testing connection");
const backToTop = document.getElementById('back-to-top');
const form = document.querySelector('form');
const nav = document.querySelector('nav');
const logo4 = document.querySelector('#logo4');
const navOverlay = document.querySelector('.nav-overlay');
const logoOverlay = document.querySelector('.logoOverlay');


function scrollDownEvents() {
    if (document.documentElement.scrollTop > 100){
    console.log("activating scrolldown");
     nav.classList.add("scrollDown");
      backToTop.style.display = 'block';}
    else {
        nav.className = "";
        backToTop.style.display = 'none';}
   
   /*  navOverlay.classList.add();
    logoOverlay.classList.remove(); */
}


/* 
submitMessage.addEventListener("submit", function (event) {
    event.preventDefault();
   logo4.classList.add("rotate") ;
}) */

backToTop.addEventListener('click', function () { window.scroll(0, 0) });

window.onscroll = function () {scrollDownEvents()};

