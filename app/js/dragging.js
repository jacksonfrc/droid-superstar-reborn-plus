
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
  // activeTab is set in tabs.js
  //var activeTabSelector = "#workspaces > #" + activeTab;
  leftPosition = ((ui.offset.left - 10) / $(activeWorkspace).width()) * 100;
  topPosition = ((ui.offset.top - 35) / $(activeWorkspace).height()) * 100;

  if (!$(ui.helper).hasClass("working")) {

    var newElem = $(ui.helper)
      .clone()
      .addClass("working")
      .removeClass("ui-draggable")
      .removeClass("ui-draggable-handle")
      .draggable({ containment: "#workspaces" })
      .css({
        "position": "absolute",
        "left": leftPosition + "%",
        "top": topPosition + "%"
      });
      $(activeWorkspace).append(newElem);
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

    if (cId == "c1") {
        return "<span class='context-menu-badge material-icons mdl-badge' data-badge='1'>account_box</span>";
    } else if (cId == "c2") {
        return "<span class=\"context-menu-badge material-icons mdl-badge\" data-badge=\"\u2665\">account_box<\/span>";
    } else if (cId == "c3") {
        return "<span class=\"context-menu-badge mdl-badge\" data-badge=\"4\">Inbox<\/span>";
    } else if (cId == "c4") {
        return "<span class=\"context-menu-badge mdl-badge\" data-badge=\"\u2665\">Mood<\/span>";
    } else if (cId == "c5") {
        return "<button class=\"context-menu-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored\">\r\n  <i class=\"material-icons\">+<\/i>\r\n<\/button>";
    }else if (cId == "c7") {
        return "<button class=\"context-menu-button mdl-button mdl-js-button mdl-button--fab\">\r\n  <i class=\"material-icons\">+<\/i>\r\n<\/button>";
    }  else if (cId == "c9") {
        return "<button class=\"context-menu-button mdl-button mdl-js-button mdl-button--fab\" disabled>\r\n  <i class=\"material-icons\">+<\/i>\r\n<\/button>";
    } else if(cId =="c15"){
    return "<button class='context-menu-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored'> Button</button>";
    
    }
    
       else if (cId == "c63"){
    
    return "<form action=\"#\">\r\n  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable\">\r\n    <label class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"sample6\">\r\n      <i class=\"material-icons\">search<\/i>\r\n    <\/label>\r\n    <div class=\"mdl-textfield__expandable-holder\">\r\n      <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample6\">\r\n      <label class=\"mdl-textfield__label\" for=\"sample-expandable\">Expandable Input<\/label>\r\n    <\/div>\r\n  <\/div>\r\n<\/form>";
    
    }
    
    else if (cId == "c16") {
        return "<button class=\"context-menu-button mdl-button mdl-js-button\">\r\n  Button\r\n<\/button>";
    }  else if (cId == "c19") {
        return "<button class=\"context-menu-button mdl-button mdl-js-button mdl-button--primary\">\r\n  Button\r\n<\/button>";
    } else if (cId == "c20") {
        return "<button class=\"context-menu-button mdl-button mdl-js-button mdl-button--accent\">\r\n  Button\r\n<\/button>";
    } else if (cId == "c22") {
        return "<button class=\"context-menu-button mdl-button mdl-js-button mdl-button--icon mdl-button--colored\">\r\n  <i class=\"material-icons\">mood<\/i>\r\n<\/button>";
    } else if (cId == "c24") {
        return "<button class=\"context-menu-button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored\">\r\n  <i class=\"material-icons\">add<\/i>\r\n<\/button>";
    }  else if (cId == "c48") {
        return "<input class=\"context-menu-slider mdl-slider mdl-js-slider\" type=\"range\"\r\n  min=\"0\" max=\"100\" value=\"0\" tabindex=\"0\">";
    } else if (cId == "c63") {
        return "<input class=\"context-menu-slider mdl-slider mdl-js-slider\" type=\"range\"\r\n  min=\"0\" max=\"100\" value=\"25\" tabindex=\"0\">";
    } else if (cId == "c50") {
        return "<label class=\"context-menu-toggle mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\" for=\"checkbox-2\">\r\n  <input type=\"checkbox\" id=\"checkbox-2\" class=\"mdl-checkbox__input\">\r\n  <span class=\"mdl-checkbox__label\">Checkbox<\/span>\r\n<\/label>";
    } else if (cId == "c52") {
        return "<label class=\"context-menu-toggle mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"option-2\">\r\n  <input type=\"radio\" id=\"option-2\" class=\"mdl-radio__button\" name=\"options\" value=\"2\">\r\n  <span class=\"mdl-radio__label\">Second<\/span>\r\n<\/label>";
    } else if (cId == "c54") {
        return "<label class=\"context-menu-toggle mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect\" for=\"icon-toggle-2\">\r\n  <input type=\"checkbox\" id=\"icon-toggle-2\" class=\"mdl-icon-toggle__input\">\r\n  <i class=\"mdl-icon-toggle__label material-icons\">format_italic<\/i>\r\n<\/label>";
    } else if (cId == "c56") {
        return "<label class=\"context-menu-toggle mdl-switch mdl-js-switch mdl-js-ripple-effect\" for=\"switch-2\">\r\n  <input type=\"checkbox\" id=\"switch-2\" class=\"mdl-switch__input\">\r\n  <span class=\"mdl-switch__label\"><\/span>\r\n<\/label>";
    } else if (cId == "c57") {
        return "<table class=\"context-menu-table mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp\">\r\n  <thead>\r\n    <tr>\r\n      <th class=\"mdl-data-table__cell--non-numeric\">Material<\/th>\r\n      <th>Quantity<\/th>\r\n      <th>Unit price<\/th>\r\n    <\/tr>\r\n  <\/thead>\r\n  <tbody>\r\n    <tr>\r\n      <td class=\"mdl-data-table__cell--non-numeric\">Acrylic (Transparent)<\/td>\r\n      <td>25<\/td>\r\n      <td>$2.90<\/td>\r\n    <\/tr>\r\n    <tr>\r\n      <td class=\"mdl-data-table__cell--non-numeric\">Plywood (Birch)<\/td>\r\n      <td>50<\/td>\r\n      <td>$1.25<\/td>\r\n    <\/tr>\r\n    <tr>\r\n      <td class=\"mdl-data-table__cell--non-numeric\">Laminate (Gold on Blue)<\/td>\r\n      <td>10<\/td>\r\n      <td>$2.35<\/td>\r\n    <\/tr>\r\n  <\/tbody>\r\n<\/table>";
    } else if (cId == "c58") {
        return "<form action=\"#\">\r\n  <div class=\"context-menu-textfield mdl-textfield mdl-js-textfield\">\r\n    <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample1\">\r\n    <label class=\"mdl-textfield__label\" for=\"sample1\">Text...<\/label>\r\n  <\/div>\r\n<\/form>";
    } else if (cId == "c59") {
        return "<form action=\"#\">\r\n  <div class=\"context-menu-textfield mdl-textfield mdl-js-textfield\">\r\n    <input class=\"mdl-textfield__input\" type=\"text\" pattern=\"-?[0-9]*(\\.[0-9]+)?\" id=\"sample2\">\r\n    <label class=\"mdl-textfield__label\" for=\"sample2\">Number...<\/label>\r\n    <span class=\"mdl-textfield__error\">Input is not a number!<\/span>\r\n  <\/div>\r\n<\/form>";
    } else if (cId == "c60") {
        return "<form action=\"#\">\r\n  <div class=\"context-menu-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\r\n    <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample3\">\r\n    <label class=\"mdl-textfield__label\" for=\"sample3\">Text...<\/label>\r\n  <\/div>\r\n<\/form>";
    } else if (cId == "c61") {
        return "<form action=\"#\">\r\n  <div class=\"context-menu-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\r\n    <input class=\"mdl-textfield__input\" type=\"text\" pattern=\"-?[0-9]*(\\.[0-9]+)?\" id=\"sample4\">\r\n    <label class=\"mdl-textfield__label\" for=\"sample4\">Number...<\/label>\r\n    <span class=\"mdl-textfield__error\">Input is not a number!<\/span>\r\n  <\/div>\r\n<\/form>";
    } else if (cId == "c62") {
        return "<form action=\"#\">\r\n  <div class=\"context-menu-textfield mdl-textfield mdl-js-textfield\">\r\n    <textarea class=\"mdl-textfield__input\" type=\"text\" rows= \"3\" id=\"sample5\" ><\/textarea>\r\n    <label class=\"mdl-textfield__label\" for=\"sample5\">Text lines...<\/label>\r\n  <\/div>\r\n<\/form>";
    }
    
 

    //return "<div>Component Error.</div>";
}
