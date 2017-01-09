(function(){
    $(window).on('scroll', function (ev) {
        var percentage = (window.scrollY * 100) / window.innerHeight;
        if(percentage - Math.trunc(percentage) > 0.3) {
            ev.preventDefault();
            return;
        }
        $('.header').css('transition', 'opacity 0.25s ease-in');
        $('.header').css('opacity', (100 - percentage)/100);
    });
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    return false;
                }
            }
        });
    });
})();
