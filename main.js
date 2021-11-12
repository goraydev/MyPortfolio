new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    scrollHorizontally: true,
    navigation: true,
    menu: '#menu',
    anchors: ['inicio', 'sobre','portfolio','contacto','plus'],
    navigationTooltips: ['inicio', 'sobre mí','portfolio','contacto','+'],
    showActiveTooltip: false,
    easing: 'easeInOutCubic',
});

//métodos
fullpage_api.setAllowScrolling(true);
