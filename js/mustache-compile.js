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

})();