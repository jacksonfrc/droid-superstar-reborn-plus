window.$ = require("./js/jquery.js");
require("./js/jquery-ui/jquery-ui.js");

const button = "<button class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>Button</button>";

$(init);

function init() {
  $("li").draggable( {
    cursor: 'move',
    containment: '#workspace',
    helper: helper
  } );
  $('#workspace').droppable( {
    drop: handleDropEvent
  } );
}

function helper(event) {
  return button
}

function handleDropEvent( event, ui ) {

  var el = $(button).css({
    "position": "absolute",
    "left": ui.offset.left - 10 + "px",
    "top": ui.offset.top - 35 + "px"
  });

  $("#workspace").append(el);

}
