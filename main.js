//update copyright

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


/* projects */
const projects = document.querySelector('.portfolio__grid');

//El body inicial no tiene el scroll
document.body.classList.add('withoutOverflow');
document.addEventListener('DOMContentLoaded', () => {

    identificadorTiempoDeEspera = setTimeout(ocultarCarga, 7000);
    projectsOcultos();
})

function ocultarCarga() {

    //culmina la carga, quitamos la clase quye evita el scroll
    document.body.classList.remove('withoutOverflow');

    container.classList.add('oculto');
}


function projectsOcultos() {
    for (let i = 0; i < projects.children.length; i++) {
        if (i > 4) {
            projects.children[i].classList.add('oculto');
        }

    }
}


const btnMostrarOcultar = document.querySelector('.portfolio__btn');
btnMostrarOcultar.addEventListener('click', mostrarOcultar);


function mostrarOcultar() {
    let oculto;

    for (let i = 0; i < projects.children.length; i++) {
        if (i > 4) {
            oculto = projects.children[i].classList.toggle('oculto');
        }
    }

    btnMostrarOcultar.textContent = oculto ? 'Ver más' : 'Ver menos';

}