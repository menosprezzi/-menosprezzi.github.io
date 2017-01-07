(function () {
    var carouselContent = [
        {path: 'res/img/portfolio/clipit1.png'},
        {path: 'res/img/portfolio/clipit4.png'},
        {path: 'res/img/portfolio/breadsy3.png'},
        {path: 'res/img/portfolio/breadsy1.jpg'},
        {path: 'res/img/portfolio/hercab1.png'},
        {path: 'res/img/portfolio/hercab4.png'},
    ];
    function init() {
        carouselLoader();
        portfolioLoader();
    }

    function carouselLoader() {
        $('#carousel-imgs').compile({images: carouselContent});
        $('#carousel-imgs > .item:first-child').addClass('active');
    }

    function portfolioLoader() {

    }

    init();
})();