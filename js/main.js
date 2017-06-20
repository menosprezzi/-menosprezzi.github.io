(function () {
    var server = location.origin;
    var COLORS_SLIDES = ['#1e88e5', '#008193', '#7a2bd4', '#e75d2f', '#4485bf', '#ff1a1a'];
    var portfolio = [];
    var screen = new OnScreen();

    var homeMenu = {
        isOpened: false,
        toggle: function() {
            if(!this.isOpened) {
                this.isOpened = true;
                $('#header_content').hide();
                $('.wallpaper').css('background-size', 'calc((100vw + 100vh) + 256px)');
                $('.fog').css('opacity', '0');
                $('#menu_content').show();
                $('#menu_content a').css('animation-name', 'slideIn');
            } else {
                this.isOpened = false;
                $('#menu_content').hide();
                $('.wallpaper').css('background-size', '');
                $('.fog').css('opacity', '1');
                $('#header_content').show();
            }
        }
    };

    function initHandlers() {
        $('#menu_trigger').on('click', function() {
            homeMenu.toggle();
            if(homeMenu.isOpened) $('#menu_trigger i').removeClass('ion-navicon').addClass('ion-android-close');
            else $('#menu_trigger i').removeClass('ion-android-close').addClass('ion-navicon');
        });


        var swiperPortfolioContainer = $('#portfolio_container');
        var swiperPortfolio = new Swiper ('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',

            onInit: function (swiper) {
                swiperPortfolioContainer.css('background-color', COLORS_SLIDES[swiper.realIndex]);
            },
            onSlideChangeStart: function (swiper) {
                $.scope.actualPortfolio = portfolio[swiper.realIndex];
                swiperPortfolioContainer.css('background-color', COLORS_SLIDES[swiper.realIndex]);
            }
        });
    }

    function initData() {
        $.scope.strings = {};
        $.scope.actualPortfolio = {};

        $.get(server + '/res/strings/portfolio.json')
            .done(function (data){
                portfolio = data;
                $.scope.actualPortfolio = portfolio[0];
            });
    }

    function initScreenAnimations() {
        screen.on('enter', '.header-title', function (element) {
            var elt = $(element);

            if (!elt.hasClass('animated')) {
                elt.css({
                    opacity: 0
                });
                setTimeout(function () {
                    elt.css({
                        opacity: 1,
                        transition: '1s opacity ease-in'
                    });
                    elt.addClass('animated slideInUp');
                }, 1000);
            }
        });
        screen.on('enter', '.header-bottom', function (element) {
            var elt = $(element);

            if (!elt.hasClass('animated')) {
                elt.css({
                    opacity: 0
                });
                setTimeout(function () {
                    elt.css({
                        opacity: 1,
                        transition: '1s opacity ease-in'
                    });
                    elt.addClass('animated slideInUp');
                }, 2000);
            }
        });

        screen.on('enter', '#about', function (elt) {
            $.get(server + '/res/strings/about.txt')
                .done(function (data) {
                    $.scope.strings.about = data;
                });
        });
    }

    function main() {
        initScreenAnimations();
        initData();
        initHandlers();

        if (navigator.userAgent.indexOf('Edge') != -1 || navigator.userAgent.indexOf('MSIE') != -1)
            $('body').addClass('compatibility-mode');
    }

    main();
})();