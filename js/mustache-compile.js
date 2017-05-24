(function () {
    $.templatesCache = {};
    $.scope = {};
    $.directives = [];
    
    Object.observe($.scope, addObserver);
    function addObserver(changes) {
        if (changes[0].type == 'add' && typeof changes[0].object[changes[0].name] == 'object') {
            Object.observe(changes[0].object[changes[0].name], addObserver);
        }
        $.compile();
    }
    
    $.compile = function () {
        var compileSections = $('.compile');
        for (var i = 0; i < compileSections.length; i++) {
            var elt = $(compileSections[i]);
            if (elt.hasClass('jscompiled')) content = $.templatesCache[elt[0].id];
            else {
                content = elt.html();
                $.templatesCache[elt[0].id] = content;
                elt.addClass('jscompiled');
            }
            Mustache.parse(content);
            var html = Mustache.render(content, $.scope); //data-scope
            elt.html(html);
            
            for (var i in $.directives) {
                $.directives[i]();
            }
        }
    };
    
        
//    $.fn.compile = function (scope) {
//        var element = this;
//        var content;
//        if (element.hasClass('jscompiled')) content = $.templatesCache[element[0].id];
//        else {
//            content = element.html();
//            $.templatesCache[element[0].id] = content;
//            element.addClass('jscompiled');
//        }
//        var a = Mustache.parse(content);
//        console.log(a);
//        var html = Mustache.render(content, scope);
//        element.html(html);
//    };
})();