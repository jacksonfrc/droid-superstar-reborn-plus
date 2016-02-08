window.$ = require("./js/jquery.js");
var render = require('electron').ipcRenderer;

var count = 0;
var activeTab = 0;

function closeTab(e) {
  $(e).parent().remove();
  $("#workspaces > #" + $(e).parent().attr("id")).remove();
}

function activateTab(e) {
  activeTab = $(e).attr("id");
  $("div").removeClass("active");
  $(e).addClass("active");
  $("#workspaces").children().hide();
  $("#workspaces > #" + activeTab).show();
}

function changeName(e) {
  $(e).attr("id", $(e).val());
}

function newTab() {
  count++;
  $("<div>").attr("id", count).attr("class", "tab-item").attr("onclick", "activateTab(this)")
  .append($("<img>").attr("src", "icons/ic_clear_black_24px.svg").attr("class", "icon-close-tab").attr("onclick", "closeTab(this)"))
  .append($("<input>").attr("id", "New Tab").attr("type", "text").attr("placeholder", "New Tab").attr("oninput", "changeName(this)"))
  .insertBefore($(".tab-item-fixed"));
  $("<div>").attr("id", count).hide().appendTo("#workspaces");
}

render.on("newTab", newTab);
