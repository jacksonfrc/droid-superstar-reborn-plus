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

// Default to 9:16 and vertical orientation.
$(window).load(vertical);
$(window).resize(vertical);

var aspectRatio = 0.5625;

function vertical() {
  var width = aspectRatio * $("#workspace").height();
  $("#workspace").width(width);
  $("#tabs").width(width);
  $("#components").css({
    "left": width + 20 + "px",
    "width": "calc(100% - " + (width + 30) + "px)"
  });
}

function horizontal() {
  var height = aspectRatio * $("#workspace").width();
  $("#workspace").height(height);
  $("#components").css({
    "top": height + 45 + "px",
    "height": "calc(100% - " + (height + 55) + "px)"
  });
}

render.on("rotate", function () {
  if ($("#workspace").hasClass("horizontal")) {
    $(window).off("resize", horizontal);
    $(window).on("resize", vertical);

    $("#tabs").removeAttr("style").removeClass("horizontal").addClass("vertical");
    $("#workspace").removeAttr("style").removeClass("horizontal").addClass("vertical");
    $("#components").removeAttr("style").removeClass("horizontal").addClass("vertical");

    vertical();
  } else {
    $(window).off("resize", vertical);
    $(window).on("resize", horizontal);

    $("#tabs").removeAttr("style").removeClass("vertical").addClass("horizontal");
    $("#workspace").removeAttr("style").removeClass("vertical").addClass("horizontal");
    $("#components").removeAttr("style").removeClass("vertical").addClass("horizontal");

    horizontal();
  }
});

render.on("changeAspectRatio", function (event, ratio) {
  aspectRatio = ratio;
  if ($("#workspace").hasClass("horizontal")) {
    horizontal();
  } else {
    vertical();
  }
});
