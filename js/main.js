(function () {
    var server = location.origin;
    var COLORS_SLIDES = [];
    var screen = new OnScreen();
    var colorThief = new ColorThief();

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
            onInit: function (swiper) {
                for (var index in swiper.slides) {
                    var slide = swiper.slides[index];
                    var color = colorThief.getColor($(slide).find('img')[0]);
                    COLORS_SLIDES.push('rgb('+(color[0]-50)+','+(color[1]-50)+','+(color[2]-50)+')');
                }
            },
            onSlideChangeStart: function (swiper) {
                setTimeout(function(){
                    swiperPortfolioContainer.css('background-color', COLORS_SLIDES[swiper.realIndex]);
                }, 0);
            }
        });
    }

    function initData() {
        $.scope.strings = {};
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
            $.get(server + '/res/strings/about.txt').then(
                function success(res) {
                    $.scope.strings.about = res;
                },
                function error(err) {
                    console.log(err)
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