/**
 * Created by prezzi on 22/01/17.
 */
(function(){
    $.fn.terminal = function (opt) {
        var elt = this;
        var text = elt.text();
        elt.html(opt.path + ' ' + opt.command + '<br><div></div>');
        var content = elt.find('div');
        for(var i = 0; i < text.length; i++){
            setTimeout(function(){
                content.text(content.text() + getNextChar());
            }, 25 * i);
        }
        var index = 0;
        function getNextChar () {
            return text[index++];
        }
    };
    $('.terminal').terminal({
        path: 'user@pc:~$',
        command: 'menosprezzi --about'
    });
})();