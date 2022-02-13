/* Typing animation */
window.onload = function () {
    console.log("loaded");
    var typed = new Typed('#typed', {
        strings: [
            "Front-end Developer", "-Puedes decirme Goraycode",
            `<i class="far fa-heart"></i>         
            <i class="fas fa-laptop-code"></i>
            <i class="far fa-heart"></i>    `],
        backSpeed: 100,
        smartBackspace: true,
        backDelay: 1500,
        startDelay: 100,
        typeSpeed: 80,
        loop: true,
    });
};

/* scrolling skills */

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
    "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
