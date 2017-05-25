/**
 * Created by prezzi on 22/01/17.
 */
(function () {
    $.fn.terminal = function (opt) {
        var elt = this;
        var text = elt.text();
        elt.html(opt.header.replace('{{archive}}', $(this).attr('data-archive')) + '<br><div></div>');
        var content = elt.find('div');
        for (var i = 0; i < text.length; i++) {
            setTimeout(function () {
                content.text(content.text() + getNextChar());
            }, 25 * i);
        }
        var index = 0;

        function getNextChar() {
            return text[index++];
        }
    };

    $.directives.push(function terminal() {
        $('.terminal').terminal({
            header:
            '<span style="background:darkgrey;color:black;display:block;">' +
                '&nbsp; GNU nano 2.7.4 &nbsp;&nbsp;&nbsp; Arquivo: {{archive}}' +
            '</span>'
        });
    });

})();