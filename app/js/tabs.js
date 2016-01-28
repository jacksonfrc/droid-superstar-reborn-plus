window.$ = require("./js/jquery.js");
var render = require('electron').ipcRenderer;

var count = 0;

function closeTab(e) {
  $(e).parent().remove();
}

function activateTab(e) {
  $("div").removeClass("active");
  $(e).addClass("active");
}

function newTab() {
  count++;
  var id = "tab" + count;
  $("<div>").attr("id", id).attr("class", "tab-item").attr("onclick", "activateTab(this)")
  .append($("<span>").attr('class', 'icon icon-cancel icon-close-tab').attr("onclick", "closeTab(this)"))
  .append("New Tab")
  .insertBefore($(".tab-item-fixed"));
}

render.on("newTab", newTab);
