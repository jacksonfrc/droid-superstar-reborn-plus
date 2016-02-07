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

function changeName(e) {
  $(e).attr("id", $(e).val());
}

function newTab() {
  count++;
  var id = "tab " + count;
  $("<div>").attr("id", id).attr("class", "tab-item").attr("onclick", "activateTab(this)")
  .append($("<img>").attr("src", "icons/ic_clear_black_24px.svg").attr("class", "icon-close-tab").attr("onclick", "closeTab(this)"))
  .append($("<input>").attr("id", "New Tab").attr("type", "text").attr("placeholder", "New Tab").attr("oninput", "changeName(this)"))
  .insertBefore($(".tab-item-fixed"));
}

render.on("newTab", newTab);
