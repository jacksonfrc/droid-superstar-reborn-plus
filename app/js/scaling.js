/*
 *
  To calculate height (width):
  aspect ratio  |  multiply width (height) by
  -------------------------------------------
       4:3      |        0.75
       8:5      |        0.625
      16:9      |       0.5625
*
*/

window.$ = require("./js/jquery.js");
var render = require('electron').ipcRenderer;

$(window).load(vertical);
$(window).resize(vertical);

// Default to 9:16
var v = true;
var aspectRatio = 0.5625;

function vertical() {
  $("#vertical-group").show();
  $("#horizontal-group").hide();

  var width = aspectRatio * $("#workspace").height();
  $("#workspace").width(width);
  $("#tabs").width(width);
  $("#components").css({
    "left": width + 20 + "px",
    "width": "calc(100% - " + (width + 30) + "px)"
  });

  v = true;
}

function horizontal() {
  $("#vertical-group").hide();
  $("#horizontal-group").show();

  var height = aspectRatio * $("#workspace-horizontal").width();
  $("#workspace-horizontal").height(height);
  $("#components-horizontal").css({
    "top": height + 45 + "px",
    "height": "calc(100% - " + (height + 55) + "px)"
  });

  v = false;
}

render.on("rotate", function () {
  if (v) {
    $(window).off("resize", vertical);
    $(window).on("resize", horizontal);

    horizontal();

  } else {
    $(window).off("resize", horizontal);
    $(window).on("resize", vertical);

    vertical();

  }
});

render.on("changeAspectRatio", function (event, ratio) {
  aspectRatio = ratio;

  if (v) {
    vertical();
  } else {
    horizontal();
  }

});
