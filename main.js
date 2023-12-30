const updateYear = document.querySelector('.footer__copyright span');
updateYear.textContent = (new Date()).getFullYear();

let portfolio__grid = document.querySelector(".portfolio__grid");
const btnMostrarOcultar = document.querySelector('.portfolio__btn');

/* loading */
const container = document.querySelector('.container_loading');
let identificadorTiempoDeEspera;

/* projects */
const projects = document.querySelector('.portfolio__grid');



//El body inicial no tiene el scroll
document.body.classList.add('withoutOverflow');
document.addEventListener('DOMContentLoaded', () => {

    identificadorTiempoDeEspera = setTimeout(ocultarCarga, 3250);
})

async function getAPI() {
    const url = "./assets/projects.json";
    const data = await fetch(url);
    const response = await data.json();
    createCard(response);
}

function createCard(results) {
    results.forEach(result => {
        const { avif, jpg, repo, text, title, webp, website } = result;

        const card = document.createElement("div");
        card.classList = 'card';


        const picture = document.createElement("picture");
        const sourceAvif = document.createElement("source");
        sourceAvif.srcset = `${avif}`;
        sourceAvif.classList = 'card__img';
        sourceAvif.type = 'image/avif';
        sourceAvif.width = '300';
        sourceAvif.height = '300';
        const sourceWebp = document.createElement("source");
        sourceWebp.srcset = `${webp}`;
        sourceWebp.classList = 'card__img';
        sourceWebp.type = 'image/webp';
        sourceWebp.width = '300';
        sourceWebp.height = '300';
        const img = document.createElement("img");
        img.classList = 'card__img';
        img.loading = 'lazy';
        img.src = `${jpg}`;
        img.alt = `${title}`;
        img.width = '300';
        img.height = '300';

        picture.appendChild(sourceAvif);
        picture.appendChild(sourceWebp);
        picture.appendChild(img);


        const cardContainer = document.createElement("div");
        cardContainer.classList = 'card__container';

        const pTitle = document.createElement("p");
        pTitle.classList = 'card__title';
        pTitle.textContent = `${title}`;
        const pText = document.createElement("p");
        pText.classList = 'card__text';
        pText.textContent = `${text}`;

        const cardLinks = document.createElement("div");
        cardLinks.classList = 'card__links';

        const linkWeb = document.createElement("a");
        linkWeb.classList = 'card__link';
        linkWeb.href = `${website}`;
        linkWeb.target = '_blank';
        linkWeb.rel = 'noopener noreferrer';
        const imgWeb = document.createElement("img");
        imgWeb.src = '/img/TablerWorld.svg';
        imgWeb.alt = 'sitio web';
        imgWeb.width = "100";
        imgWeb.height = "100";
        linkWeb.appendChild(imgWeb);

        const linkRepo = document.createElement("a");
        linkRepo.classList = 'card__link';
        linkRepo.href = `${repo}`;
        linkRepo.target = '_blank';
        linkRepo.rel = 'noopener noreferrer';
        const imgRepo = document.createElement("img");
        imgRepo.src = '/img/github.svg';
        imgRepo.alt = 'sitio web';
        imgRepo.width = "100";
        imgRepo.height = "100";
        linkRepo.appendChild(imgRepo);

        if (website !== "") {

            cardLinks.appendChild(linkWeb);
        }
        cardLinks.appendChild(linkRepo);


        cardContainer.appendChild(pTitle);
        cardContainer.appendChild(pText);
        cardContainer.appendChild(cardLinks);


        card.appendChild(picture);
        card.appendChild(cardContainer);

        portfolio__grid.appendChild(card);
    });


}

/* Typing animation */
window.onload = function () {
    var typed = new Typed('#typed', {
        strings: [
            "Desarrollador Web", "Puedes decirme Goraydev",
        ],
        backSpeed: 50,
        smartBackspace: true,
        backDelay: 1000,
        startDelay: 100,
        typeSpeed: 50,
        loop: true,
    });
};

function ocultarCarga() {

    //culmina la carga, quitamos la clase que evita el scroll
    document.body.classList.remove('withoutOverflow');

    container.classList.add('oculto');
    projectsOcultos();
}

function projectsOcultos() {

    for (let i = 0; i < projects.children.length; i++) {
        if (i > 4) {
            projects.children[i].classList.add('oculto');
        }

    }
}

function mostrarOcultar() {
    let oculto;

    for (let i = 0; i < projects.children.length; i++) {
        if (i > 4) {
            oculto = projects.children[i].classList.toggle('oculto');
        }
    }

    btnMostrarOcultar.textContent = oculto ? 'Ver más' : 'Ver menos';

}

//events
btnMostrarOcultar.addEventListener('click', mostrarOcultar);
getAPI();