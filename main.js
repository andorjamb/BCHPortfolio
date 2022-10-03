


console.log("testing connection");
const backToTop = document.getElementById('back-to-top');
const form = document.querySelector('form');
const sendBtn = document.form.querySelector("#sendBtn");
const logo4 = document.querySelector('#logo4');
const navOverlay = document.querySelector('.nav-overlay');
const logoOverlay = document.querySelector('.logoOverlay');


function scrollDownEvents() {
    backToTop.style.display = 'block';
    navOverlay.style.classList.add();
    logoOverlay.style.classList.remove();

}



submitMessage.addEventListener("submit", function (event) {
    event.preventDefault();
   logo4.classList.add("rotate") ;
})

backToTop.addEventListener('click', function () { window.scroll(0, 0) });

window.onscroll = function() {scrollDownEvents();}