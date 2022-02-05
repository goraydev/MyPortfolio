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



