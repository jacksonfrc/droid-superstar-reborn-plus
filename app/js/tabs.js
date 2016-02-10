
var count = 0;
var activeTab = 0;
var activeWorkspace = "#workspaces > #" + activeTab;

function closeTab(e) {
  $(e).parent().remove();
  $("#workspaces > #" + $(e).parent().attr("id")).remove();
}

function activateTab(e) {
  activeTab = $(e).attr("id");
  activeWorkspace = "#workspaces > #" + activeTab;
  $("div").removeClass("active");
  $(e).addClass("active");
  $("#workspaces").children().hide();
  $(activeWorkspace).show();
}

function newTab() {
  count++;
  $("<div>").attr("id", count).attr("class", "tab-item").attr("onclick", "activateTab(this)")
  .append($("<div>").attr("class", "icon-close-tab").attr("onclick", "closeTab(this)"))
  .append($("<input>").attr("id", "tab-name").attr("type", "text").attr("placeholder", "New Tab"))
  .insertBefore($(".tab-item-fixed"));
  $("<div>").attr("id", count).hide().appendTo("#workspaces");
}

render.on("newTab", newTab);
