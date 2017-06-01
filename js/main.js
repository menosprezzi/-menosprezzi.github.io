(function () {
    var server = location.origin;
    var screen = new OnScreen();

    var homeMenu = {
        isOpened: false,
        toggle: function() {
            if(!this.isOpened) {
                this.isOpened = true;
                $('#header_content').hide();
                $('.wallpaper').css('background-size', 'calc((100vw + 100vh) + 256px)');
                $('#menu_content').show();
                $('#menu_content a').css('animation-name', 'slideIn');
            } else {
                this.isOpened = false;
                $('#menu_content').hide();
                $('.wallpaper').css('background-size', '');
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