
$(init);

function init() {
  $("a").draggable({
    helper: idHelper,
    cursor: "move",
    revert: "invalid",
    containment: "#workspaces",
    scroll: false
  });
  $("#workspaces").droppable({
    drop: handleDropEvent
  });
}

function handleDropEvent(event, ui) {

  leftPosition = ((ui.offset.left - 10) / $(activeWorkspace).width()) * 100;
  topPosition = ((ui.offset.top - 35) / $(activeWorkspace).height()) * 100;

  if (!$(ui.helper).hasClass("working")) {
    var newElem = $(ui.helper).clone().removeAttr("id").removeAttr("data-upgraded").removeClass("ui-draggable").removeClass("ui-draggable-handle");
    newElem.children().removeAttr("data-upgraded");

    var type = newElem.attr('class').split(' ')[0];
    var tag = newElem.prop("tagName").toLowerCase();

    console.log(newElem);

    if (type == "mdl-badge") newElem.addClass("context-menu-badge");
    else if (type == "mdl-button") newElem.addClass("context-menu-button");
    else if (type == "mdl-checkbox" || type == "mdl-radio" || type == "mdl-icon-toggle" || type == "mdl-icon-toggle" || type == "mdl-switch") {
      newElem.addClass("context-menu-toggle");
      var num = Math.floor(Math.random() * 100);
      newElem.attr("for", type + num);
      newElem.children("input").attr("id", type + num);
    } else if (tag == "form") newElem.addClass("context-menu-textfield");
    else if (type == "mdl-data-table") {
      newElem.addClass("context-menu-table");
    } else if (tag != "p") newElem.addClass("context-menu-slider");

    newElem
    .addClass("working")
    .draggable({ containment: "#workspaces" })
    .css({
        "position": "absolute",
        "left": leftPosition + "%",
        "top": topPosition + "%"
    });

    $(activeWorkspace).append(newElem);
    componentHandler.upgradeDom();

  } else {
    $(ui.helper).css({
      "position": "absolute",
      "left": leftPosition + "%",
      "top": topPosition + "%"
    });
  }

}

function idHelper(event) {
    var cId = $(this).attr("id");
    var clone = $("#" + cId.replace(/c/g,"e")).clone().show();
    return clone;
}
