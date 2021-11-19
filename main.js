/* Full page */
new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    scrollHorizontally: true,
    navigation: true,
    menu: '#menu',
    anchors: ['inicio', 'sobre', 'portfolio', 'contacto', 'plus'],
    navigationTooltips: ['inicio', 'sobre mí', 'portfolio', 'contacto', '+'],
    showActiveTooltip: false,
    easing: 'easeInOutCubic',
});

//métodos
fullpage_api.setAllowScrolling(true);


/* Typing animation */
window.onload = function () {
    console.log("loaded")
    var typed = new Typed('#typed', {
        strings: ["-Hola `<i class='far fa-hand-peace'></i>`",
            "-Soy Aguedo Yanac Gerson","-Puedes decirme Goraycode",
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