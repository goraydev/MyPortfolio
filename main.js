/* Typing animation */
window.onload = function () {
    console.log("loaded");
    var typed = new Typed('#typed', {
        strings: ["-Hola `<i class='far fa-hand-peace'></i>`",
            "-Soy Aguedo Yanac Gerson", "-Puedes decirme Goraycode",
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

/* GLider JS */
window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 250,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                // screens greater than >= 775px
                breakpoint: 450,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                // screens greater than >= 1024px
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
});