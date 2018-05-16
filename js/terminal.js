/**
 * Created by prezzi on 22/01/17.
 */
(function () {
  $.fn.terminal = function (opt) {
    var elt = this;
    var text = elt.text();
    var nanoHeader = '<span style="background:darkgrey;color:black;display:block;">' +
      '&nbsp; GNU nano 2.7.4 &nbsp;&nbsp;&nbsp; Arquivo:' + $(this).attr('data-archive') +
      '</span>';

    elt.html(nanoHeader + '<br><div></div>');
    var content = elt.find('div');
    var index = 0;

    function typeChar() {
      content.text(content.text() + getNextChar());
      if (text.length > index) {
        requestAnimationFrame(typeChar);
        return;
      }
    }

    function getNextChar() {
      return text[ index++ ];
    }

    requestAnimationFrame(typeChar);
  };

  $.directives.push(function terminal() {
    $('.terminal.terminal-active').terminal();
  });

})();
