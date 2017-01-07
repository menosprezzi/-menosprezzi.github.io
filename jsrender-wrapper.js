(function () {
    $.templatesCached = {};
    $.fn.compile = function (scope) {
        var element = this;
        var content;
        if(element.hasClass('jscompiled')) content = $.templatesCached[element[0].id];
        else {
            content = element.html();
            $.templatesCached[element[0].id] = content;
            element.addClass('jscompiled');
        }
        var tmpl = $.templates(content);
        var html = tmpl.render(scope);
        element.html(html);
    }
})();