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


function vertical() {
  var aspect = document.getElementById("workspace");
  var height = aspect.clientHeight;
  var width = 0.5625 * height;
  aspect.style.width = width + "px"
  document.getElementById("workspace-tabs").style.width = width + "px";
  width += 20;
  document.getElementById("components").style.left = width + "px";
  width += 10;
  document.getElementById("components").style.width = "calc(100% - " + width + "px)";
}

function horizontal() {
  var aspect = document.getElementById("workspace");
  var width = aspect.clientWidth;
  var height = 0.5625 * width;
  aspect.style.height = height + "px"
  height += 45;
  document.getElementById("components").style.top = height + "px";
  height += 10;
  document.getElementById("components").style.height = "calc(100% - " + height + "px)";
}

function rotate() {
  var vert = document.getElementById("vertical-group");
  var horz = document.getElementById("horizontal-group");

  if (vert) {
    vert.style.display = "none";
    horz.style.display = "block";
  } else {
    vert.style.display = "block";
    horz.style.display = "none";
  }

}
