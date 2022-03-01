//actualizar precio

let currentYear = new Date();
const updateYear = document.querySelector('.footer__copyright span');
updateYear.textContent = currentYear.getFullYear();



/* Typing animation */
window.onload = function () {
    var typed = new Typed('#typed', {
        strings: [
            "Front-end Developer", "Puedes decirme Goraycode",
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

/* loading */

const container = document.querySelector('.container_loading');
let identificadorTiempoDeEspera;

//El body inicial no tiene el scroll
document.body.classList.add('withoutOverflow');
document.addEventListener('DOMContentLoaded', () => {

    identificadorTiempoDeEspera = setTimeout(ocultarCarga, 7000);

    setTimeout(() => {
        document.body.classList.remove('withoutOverflow');
    }, 7000);

})

function ocultarCarga() {

    container.classList.add('oculto');
}

