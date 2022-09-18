
console.log("testing connection");
const backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click', function () { window.scroll(0, 0) });



/* window.addEventListener('scroll',)
 */

function scrollDownEvents() {
    backToTop.style.visibility = visible;
}

const messageButton = document.
    getElementById("messageButton");
const logo4 = document.getElementById("logo4");
messageButton.addEventListener("submit", function (event) {
    event.preventDefault();
    logo4.classList.add("rotate");
})
