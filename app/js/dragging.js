window.$ = require("./js/jquery.js");
require("./js/jquery-ui/jquery-ui.js");

$(init);

function init() {
  $("a").draggable({
    helper: idHelper,
    cursor: "move",
    revert: "invalid",
    snap: "#workspace",
    snapMode: "inner",
    scroll: false
  });
  $("#workspace").droppable({
    drop: handleDropEvent
  });
}

function handleDropEvent(event, ui) {
/*
  var el = $(ui.helper).css({
    "position": "absolute",
    "left": ui.offset.left - 10 + "px",
    "top": ui.offset.top - 35 + "px"
  }).draggable();
*/
  console.log(ui.helper);

  // CSS needs to be relative %
  var newDiv = $(ui.helper).clone()
      .removeClass('ui-draggable-dragging')
      .css({
        "position": "absolute",
        "left": ui.offset.left - 10 + "px",
        "top": ui.offset.top - 35 + "px"
      });

  $(this).append(newDiv);

}

function idHelper(event) {

    var cId = $(this).attr("id");

    if (cId == "c1") {
        return "<span class='context-menu-one material-icons mdl-badge' data-badge='1'>account_box</span>";
    } else if (cId == "c2") {
        return "<span class=\"context-menu-one material-icons mdl-badge\" data-badge=\"\u2665\">account_box<\/span>";
    } else if (cId == "c3") {
        return "<span class=\"context-menu-one mdl-badge\" data-badge=\"4\">Inbox<\/span>";
    } else if (cId == "c4") {
        return "<span class=\"context-menu-one mdl-badge\" data-badge=\"\u2665\">Mood<\/span>";
    } else if (cId == "c5") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--fab mdl-button--colored\">\r\n  <i class=\"material-icons\">add<\/i>\r\n<\/button>";
    } else if (cId == "c6") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n  <i class=\"material-icons\">add<\/i>\r\n<\/button>";
    } else if (cId == "c7") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--fab\">\r\n  <i class=\"material-icons\">add<\/i>\r\n<\/button>";
    } else if (cId == "c8") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect\">\r\n  <i class=\"material-icons\">add<\/i>\r\n<\/button>";
    } else if (cId == "c9") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--fab\" disabled>\r\n  <i class=\"material-icons\">add<\/i>\r\n<\/button>";
    } else if (cId == "c10") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--raised\">\r\n  Button\r\n<\/button>";
    } else if (cId == "c11") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\">\r\n  Button\r\n<\/button>";
    } else if (cId == "c12") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--raised\" disabled>\r\n  Button\r\n<\/button>";
    } else if (cId == "c13") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--raised mdl-button--colored\">\r\n  Button\r\n<\/button>";
    } else if (cId == "c14") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--raised mdl-button--accent\">\r\n  Button\r\n<\/button>";
    } else if (cId == "c15") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\">\r\n  Button\r\n<\/button>";
    } else if (cId == "c16") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button\">\r\n  Button\r\n<\/button>";
    } else if (cId == "c17") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-js-ripple-effect\">\r\n  Button\r\n<\/button>";
    } else if (cId == "c18") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button\" disabled>\r\n  Button\r\n<\/button>";
    } else if (cId == "c19") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--primary\">\r\n  Button\r\n<\/button>";
    } else if (cId == "c20") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--accent\">\r\n  Button\r\n<\/button>";
    } else if (cId == "c21") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--icon\">\r\n  <i class=\"material-icons\">mood<\/i>\r\n<\/button>";
    } else if (cId == "c22") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--icon mdl-button--colored\">\r\n  <i class=\"material-icons\">mood<\/i>\r\n<\/button>";
    } else if (cId == "c23") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab\">\r\n  <i class=\"material-icons\">add<\/i>\r\n<\/button>";
    } else if (cId == "c24") {
        return "<button class=\"context-menu-one mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored\">\r\n  <i class=\"material-icons\">add<\/i>\r\n<\/button>";
        //Not sure what class is to put context-menu-one on to enable right click for cId 25,26,27,28
    } else if (cId == "c25") {
        return "<style>.demo-card-wide.mdl-card{width: 512px;}.demo-card-wide > .mdl-card__title{color: #fff; height: 176px; background: url('../assets/demos/welcome_card.jpg') center / cover;}.demo-card-wide > .mdl-card__menu{color: #fff;}</style><div class='demo-card-wide mdl-card mdl-shadow--2dp'> <div class='mdl-card__title'> <h2 class='mdl-card__title-text'>Welcome</h2> </div><div class='mdl-card__supporting-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia... </div><div class='mdl-card__actions mdl-card--border'> <a class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'> Get Started </a> </div><div class='mdl-card__menu'> <button class='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'> <i class='material-icons'>share</i> </button> </div></div>";
    } else if (cId == "c26") {
        return "<style>\r\n.demo-card-square.mdl-card {\r\n  width: 320px;\r\n  height: 320px;\r\n}\r\n.demo-card-square > .mdl-card__title {\r\n  color: #fff;\r\n  background:\r\n    url(\'..\/assets\/demos\/dog.png\') bottom right 15% no-repeat #46B6AC;\r\n}\r\n<\/style>\r\n\r\n<div class=\"demo-card-square mdl-card mdl-shadow--2dp\">\r\n  <div class=\"mdl-card__title mdl-card--expand\">\r\n    <h2 class=\"mdl-card__title-text\">Update<\/h2>\r\n  <\/div>\r\n  <div class=\"mdl-card__supporting-text\">\r\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n    Aenan convallis.\r\n  <\/div>\r\n  <div class=\"mdl-card__actions mdl-card--border\">\r\n    <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\r\n      View Updates\r\n    <\/a>\r\n  <\/div>\r\n<\/div>";
    } else if (cId == "c27") {
        return "<style>.demo-card-image.mdl-card {width: 256px;height: 256px;\r\n  background: url(\'..\/assets\/demos\/image_card.jpg\') center \/ cover;\r\n}\r\n.demo-card-image > .mdl-card__actions {\r\n  height: 52px;\r\n  padding: 16px;\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n.demo-card-image__filename {\r\n  color: #fff;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n}\r\n<\/style>\r\n\r\n<div class=\"demo-card-image mdl-card mdl-shadow--2dp\">\r\n  <div class=\"mdl-card__title mdl-card--expand\"><\/div>\r\n  <div class=\"mdl-card__actions\">\r\n    <span class=\"demo-card-image__filename\">Image.jpg<\/span>\r\n  <\/div>\r\n<\/div>";
    } else if (cId == "c28") {
        return "<style>\r\n.demo-card-event.mdl-card {\r\n  width: 256px;\r\n  height: 256px;\r\n  background: #3E4EB8;\r\n}\r\n.demo-card-event > .mdl-card__actions {\r\n  border-color: rgba(255, 255, 255, 0.2);\r\n}\r\n.demo-card-event > .mdl-card__title {\r\n  align-items: flex-start;\r\n}\r\n.demo-card-event > .mdl-card__title > h4 {\r\n  margin-top: 0;\r\n}\r\n.demo-card-event > .mdl-card__actions {\r\n  display: flex;\r\n  box-sizing:border-box;\r\n  align-items: center;\r\n}\r\n.demo-card-event > .mdl-card__title,\r\n.demo-card-event > .mdl-card__actions,\r\n.demo-card-event > .mdl-card__actions > .mdl-button {\r\n  color: #fff;\r\n}\r\n<\/style>\r\n\r\n<div class=\"demo-card-event mdl-card mdl-shadow--2dp\">\r\n  <div class=\"mdl-card__title mdl-card--expand\">\r\n    <h4>\r\n      Featured event:<br>\r\n      May 24, 2016<br>\r\n      7-11pm\r\n    <\/h4>\r\n  <\/div>\r\n  <div class=\"mdl-card__actions mdl-card--border\">\r\n    <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\r\n      Add to Calendar\r\n    <\/a>\r\n    <div class=\"mdl-layout-spacer\"><\/div>\r\n    <i class=\"material-icons\">event<\/i>\r\n  <\/div>\r\n<\/div>";
    } else if (cId == "c29") {
        return " <header class=\"context-menu-one mdl-layout__header mdl-layout__header--transparent\">\r\n    <div class=\"mdl-layout__header-row\">\r\n      <!-- Title -->\r\n      <span class=\"mdl-layout-title\">Title<\/span>\r\n      <!-- Add spacer, to align navigation to the right -->\r\n      <div class=\"mdl-layout-spacer\"><\/div>\r\n      <!-- Navigation -->\r\n      <nav class=\"mdl-navigation\">\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <\/nav>\r\n    <\/div>\r\n  <\/header>\r\n  <div class=\"mdl-layout__drawer\">\r\n    <span class=\"mdl-layout-title\">Title<\/span>\r\n    <nav class=\"mdl-navigation\">\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n    <\/nav>\r\n  <\/div>\r\n  <main class=\"mdl-layout__content\">\r\n  <\/main>";
    } else if (cId == "c30") {
        return "<div class=\"context-menu-one mdl-layout mdl-js-layout mdl-layout--fixed-drawer\">\r\n  <div class=\"mdl-layout__drawer\">\r\n    <span class=\"mdl-layout-title\">Title<\/span>\r\n    <nav class=\"mdl-navigation\">\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n    <\/nav>\r\n  <\/div>\r\n  <main class=\"mdl-layout__content\">\r\n    <div class=\"page-content\"><!-- Your content goes here --><\/div>\r\n  <\/main>\r\n<\/div>";
    } else if (cId == "c31") {
        return "<div class=\"context-menu-one mdl-layout mdl-js-layout mdl-layout--fixed-header\">\r\n  <header class=\"mdl-layout__header\">\r\n    <div class=\"mdl-layout__header-row\">\r\n      <!-- Title -->\r\n      <span class=\"mdl-layout-title\">Title<\/span>\r\n      <!-- Add spacer, to align navigation to the right -->\r\n      <div class=\"mdl-layout-spacer\"><\/div>\r\n      <!-- Navigation. We hide it in small screens. -->\r\n      <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <\/nav>\r\n    <\/div>\r\n  <\/header>\r\n  <div class=\"mdl-layout__drawer\">\r\n    <span class=\"mdl-layout-title\">Title<\/span>\r\n    <nav class=\"mdl-navigation\">\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n    <\/nav>\r\n  <\/div>\r\n  <main class=\"mdl-layout__content\">\r\n    <div class=\"page-content\"><!-- Your content goes here --><\/div>\r\n  <\/main>\r\n<\/div>";
    } else if (cId == "c32") {
        return "<div class=\"context-menu-one mdl-layout mdl-js-layout mdl-layout--fixed-drawer\r\n            mdl-layout--fixed-header\">\r\n  <header class=\"mdl-layout__header\">\r\n    <div class=\"mdl-layout__header-row\">\r\n      <div class=\"mdl-layout-spacer\"><\/div>\r\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable\r\n                  mdl-textfield--floating-label mdl-textfield--align-right\">\r\n        <label class=\"mdl-button mdl-js-button mdl-button--icon\"\r\n               for=\"fixed-header-drawer-exp\">\r\n          <i class=\"material-icons\">search<\/i>\r\n        <\/label>\r\n        <div class=\"mdl-textfield__expandable-holder\">\r\n          <input class=\"mdl-textfield__input\" type=\"text\" name=\"sample\"\r\n                 id=\"fixed-header-drawer-exp\">\r\n        <\/div>\r\n      <\/div>\r\n    <\/div>\r\n  <\/header>\r\n  <div class=\"mdl-layout__drawer\">\r\n    <span class=\"mdl-layout-title\">Title<\/span>\r\n    <nav class=\"mdl-navigation\">\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n    <\/nav>\r\n  <\/div>\r\n  <main class=\"mdl-layout__content\">\r\n    <div class=\"page-content\"><!-- Your content goes here --><\/div>\r\n  <\/main>\r\n<\/div>";
    } else if (cId == "c33") {
        return "<div class=\"context-menu-one mdl-layout mdl-js-layout\">\r\n  <header class=\"mdl-layout__header mdl-layout__header--scroll\">\r\n    <div class=\"mdl-layout__header-row\">\r\n      <!-- Title -->\r\n      <span class=\"mdl-layout-title\">Title<\/span>\r\n      <!-- Add spacer, to align navigation to the right -->\r\n      <div class=\"mdl-layout-spacer\"><\/div>\r\n      <!-- Navigation -->\r\n      <nav class=\"mdl-navigation\">\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <\/nav>\r\n    <\/div>\r\n  <\/header>\r\n  <div class=\"mdl-layout__drawer\">\r\n    <span class=\"mdl-layout-title\">Title<\/span>\r\n    <nav class=\"mdl-navigation\">\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n    <\/nav>\r\n  <\/div>\r\n  <main class=\"mdl-layout__content\">\r\n    <div class=\"page-content\"><!-- Your content goes here --><\/div>\r\n  <\/main>\r\n<\/div>";
    } else if (cId == "c34") {
        return " <header class=\"context-menu-one mdl-layout__header mdl-layout__header--waterfall\">\r\n    <!-- Top row, always visible -->\r\n    <div class=\"mdl-layout__header-row\">\r\n      <!-- Title -->\r\n      <span class=\"mdl-layout-title\">Title<\/span>\r\n      <div class=\"mdl-layout-spacer\"><\/div>\r\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable\r\n                  mdl-textfield--floating-label mdl-textfield--align-right\">\r\n        <label class=\"mdl-button mdl-js-button mdl-button--icon\"\r\n               for=\"waterfall-exp\">\r\n          <i class=\"material-icons\">search<\/i>\r\n        <\/label>\r\n        <div class=\"mdl-textfield__expandable-holder\">\r\n          <input class=\"mdl-textfield__input\" type=\"text\" name=\"sample\"\r\n                 id=\"waterfall-exp\">\r\n        <\/div>\r\n      <\/div>\r\n    <\/div>\r\n    <!-- Bottom row, not visible on scroll -->\r\n    <div class=\"mdl-layout__header-row\">\r\n      <div class=\"mdl-layout-spacer\"><\/div>\r\n      <!-- Navigation -->\r\n      <nav class=\"mdl-navigation\">\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <\/nav>\r\n    <\/div>\r\n  <\/header>\r\n  <div class=\"mdl-layout__drawer\">\r\n    <span class=\"mdl-layout-title\">Title<\/span>\r\n    <nav class=\"mdl-navigation\">\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link<\/a>\r\n    <\/nav>\r\n  <\/div>\r\n  <main class=\"mdl-layout__content\">\r\n    <div class=\"page-content\"><!-- Your content goes here --><\/div>\r\n  <\/main>";
    } else if (cId == "c35") {
        return "<div class=\"context-menu-one mdl-layout mdl-js-layout mdl-layout--fixed-header\">\r\n  <header class=\"mdl-layout__header\">\r\n    <div class=\"mdl-layout__header-row\">\r\n      <!-- Title -->\r\n      <span class=\"mdl-layout-title\">Title<\/span>\r\n    <\/div>\r\n    <!-- Tabs -->\r\n    <div class=\"mdl-layout__tab-bar mdl-js-ripple-effect\">\r\n      <a href=\"#scroll-tab-1\" class=\"mdl-layout__tab is-active\">Tab 1<\/a>\r\n      <a href=\"#scroll-tab-2\" class=\"mdl-layout__tab\">Tab 2<\/a>\r\n      <a href=\"#scroll-tab-3\" class=\"mdl-layout__tab\">Tab 3<\/a>\r\n      <a href=\"#scroll-tab-4\" class=\"mdl-layout__tab\">Tab 4<\/a>\r\n      <a href=\"#scroll-tab-5\" class=\"mdl-layout__tab\">Tab 5<\/a>\r\n      <a href=\"#scroll-tab-6\" class=\"mdl-layout__tab\">Tab 6<\/a>\r\n    <\/div>\r\n  <\/header>\r\n  <div class=\"mdl-layout__drawer\">\r\n    <span class=\"mdl-layout-title\">Title<\/span>\r\n  <\/div>\r\n  <main class=\"mdl-layout__content\">\r\n    <section class=\"mdl-layout__tab-panel is-active\" id=\"scroll-tab-1\">\r\n      <div class=\"page-content\"><!-- Your content goes here --><\/div>\r\n    <\/section>\r\n    <section class=\"mdl-layout__tab-panel\" id=\"scroll-tab-2\">\r\n      <div class=\"page-content\"><!-- Your content goes here --><\/div>\r\n    <\/section>\r\n    <section class=\"mdl-layout__tab-panel\" id=\"scroll-tab-3\">\r\n      <div class=\"page-content\"><!-- Your content goes here --><\/div>\r\n    <\/section>\r\n    <section class=\"mdl-layout__tab-panel\" id=\"scroll-tab-4\">\r\n      <div class=\"page-content\"><!-- Your content goes here --><\/div>\r\n    <\/section>\r\n    <section class=\"mdl-layout__tab-panel\" id=\"scroll-tab-5\">\r\n      <div class=\"page-content\"><!-- Your content goes here --><\/div>\r\n    <\/section>\r\n    <section class=\"mdl-layout__tab-panel\" id=\"scroll-tab-6\">\r\n      <div class=\"page-content\"><!-- Your content goes here --><\/div>\r\n    <\/section>\r\n  <\/main>\r\n<\/div>";
    } else if (cId == "c36") {
        return "<div class=\"context-menu-one mdl-layout mdl-js-layout mdl-layout--fixed-header\r\n            mdl-layout--fixed-tabs\">\r\n  <header class=\"mdl-layout__header\">\r\n    <div class=\"mdl-layout__header-row\">\r\n      <!-- Title -->\r\n      <span class=\"mdl-layout-title\">Title<\/span>\r\n    <\/div>\r\n    <!-- Tabs -->\r\n    <div class=\"mdl-layout__tab-bar mdl-js-ripple-effect\">\r\n      <a href=\"#fixed-tab-1\" class=\"mdl-layout__tab is-active\">Tab 1<\/a>\r\n      <a href=\"#fixed-tab-2\" class=\"mdl-layout__tab\">Tab 2<\/a>\r\n      <a href=\"#fixed-tab-3\" class=\"mdl-layout__tab\">Tab 3<\/a>\r\n    <\/div>\r\n  <\/header>\r\n  <div class=\"mdl-layout__drawer\">\r\n    <span class=\"mdl-layout-title\">Title<\/span>\r\n  <\/div>\r\n  <main class=\"mdl-layout__content\">\r\n    <section class=\"mdl-layout__tab-panel is-active\" id=\"fixed-tab-1\">\r\n      <div class=\"page-content\"><!-- Your content goes here --><\/div>\r\n    <\/section>\r\n    <section class=\"mdl-layout__tab-panel\" id=\"fixed-tab-2\">\r\n      <div class=\"page-content\"><!-- Your content goes here --><\/div>\r\n    <\/section>\r\n    <section class=\"mdl-layout__tab-panel\" id=\"fixed-tab-3\">\r\n      <div class=\"page-content\"><!-- Your content goes here --><\/div>\r\n    <\/section>\r\n  <\/main>\r\n<\/div>";
    } else if (cId == "c37") {
        return "<footer class=\"context-menu-one mdl-mega-footer\">\r\n  <div class=\"mdl-mega-footer__middle-section\">\r\n\r\n    <div class=\"mdl-mega-footer__drop-down-section\">\r\n      <input class=\"mdl-mega-footer__heading-checkbox\" type=\"checkbox\" checked>\r\n      <h1 class=\"mdl-mega-footer__heading\">Features<\/h1>\r\n      <ul class=\"mdl-mega-footer__link-list\">\r\n        <li><a href=\"#\">About<\/a><\/li>\r\n        <li><a href=\"#\">Terms<\/a><\/li>\r\n        <li><a href=\"#\">Partners<\/a><\/li>\r\n        <li><a href=\"#\">Updates<\/a><\/li>\r\n      <\/ul>\r\n    <\/div>\r\n\r\n    <div class=\"mdl-mega-footer__drop-down-section\">\r\n      <input class=\"mdl-mega-footer__heading-checkbox\" type=\"checkbox\" checked>\r\n      <h1 class=\"mdl-mega-footer__heading\">Details<\/h1>\r\n      <ul class=\"mdl-mega-footer__link-list\">\r\n        <li><a href=\"#\">Specs<\/a><\/li>\r\n        <li><a href=\"#\">Tools<\/a><\/li>\r\n        <li><a href=\"#\">Resources<\/a><\/li>\r\n      <\/ul>\r\n    <\/div>\r\n\r\n    <div class=\"mdl-mega-footer__drop-down-section\">\r\n      <input class=\"mdl-mega-footer__heading-checkbox\" type=\"checkbox\" checked>\r\n      <h1 class=\"mdl-mega-footer__heading\">Technology<\/h1>\r\n      <ul class=\"mdl-mega-footer__link-list\">\r\n        <li><a href=\"#\">How it works<\/a><\/li>\r\n        <li><a href=\"#\">Patterns<\/a><\/li>\r\n        <li><a href=\"#\">Usage<\/a><\/li>\r\n        <li><a href=\"#\">Products<\/a><\/li>\r\n        <li><a href=\"#\">Contracts<\/a><\/li>\r\n      <\/ul>\r\n    <\/div>\r\n\r\n    <div class=\"mdl-mega-footer__drop-down-section\">\r\n      <input class=\"mdl-mega-footer__heading-checkbox\" type=\"checkbox\" checked>\r\n      <h1 class=\"mdl-mega-footer__heading\">FAQ<\/h1>\r\n      <ul class=\"mdl-mega-footer__link-list\">\r\n        <li><a href=\"#\">Questions<\/a><\/li>\r\n        <li><a href=\"#\">Answers<\/a><\/li>\r\n        <li><a href=\"#\">Contact us<\/a><\/li>\r\n      <\/ul>\r\n    <\/div>\r\n\r\n  <\/div>\r\n\r\n  <div class=\"mdl-mega-footer__bottom-section\">\r\n    <div class=\"mdl-logo\">Title<\/div>\r\n    <ul class=\"mdl-mega-footer__link-list\">\r\n      <li><a href=\"#\">Help<\/a><\/li>\r\n      <li><a href=\"#\">Privacy & Terms<\/a><\/li>\r\n    <\/ul>\r\n  <\/div>\r\n\r\n<\/footer>";
    } else if (cId == "c38") {
        return "<footer class=\"context-menu-one mdl-mini-footer\">\r\n  <div class=\"mdl-mini-footer__left-section\">\r\n    <div class=\"mdl-logo\">Title<\/div>\r\n    <ul class=\"mdl-mini-footer__link-list\">\r\n      <li><a href=\"#\">Help<\/a><\/li>\r\n      <li><a href=\"#\">Privacy & Terms<\/a><\/li>\r\n    <\/ul>\r\n  <\/div>\r\n<\/footer>";
    } else if (cId == "c39") {
        return "<div id=\"p1\" class=\"context-menu-one mdl-progress mdl-js-progress\"><\/div>\r\n<script>\r\n  document.querySelector(\'#p1\').addEventListener(\'mdl-componentupgraded\', function() {\r\n    this.MaterialProgress.setProgress(44);\r\n  });\r\n<\/script>";
    } else if (cId == "c40") {
        return "<div id=\"p2\" class=\"context-menu-one mdl-progress mdl-js-progress mdl-progress__indeterminate\"><\/div>";
    } else if (cId == "c41") {
        return "<div id=\"p3\" class=\"context-menu-one mdl-progress mdl-js-progress\"><\/div>\r\n<script>\r\n  document.querySelector(\'#p3\').addEventListener(\'mdl-componentupgraded\', function() {\r\n    this.MaterialProgress.setProgress(33);\r\n    this.MaterialProgress.setBuffer(87);\r\n  });\r\n<\/script>";
    } else if (cId == "c42") {
        return "<div class=\"context-menu-one mdl-spinner mdl-js-spinner is-active\"><\/div>";
    } else if (cId == "c43") {
        return "<div class=\"context-menu-one mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active\"><\/div>";
    } else if (cId == "c44") {
        return "<button id=\"demo-menu-lower-left\"\r\n        class=\"context-menu-one mdl-button mdl-js-button mdl-button--icon\">\r\n  <i class=\"material-icons\">more_vert<\/i>\r\n<\/button>\r\n\r\n<ul class=\"mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect\"\r\n    for=\"demo-menu-lower-left\">\r\n  <li class=\"mdl-menu__item\">Some Action<\/li>\r\n  <li class=\"mdl-menu__item\">Another Action<\/li>\r\n  <li disabled class=\"mdl-menu__item\">Disabled Action<\/li>\r\n  <li class=\"mdl-menu__item\">Yet Another Action<\/li>\r\n<\/ul>";
    } else if (cId == "c45") {
        return "<button id=\"demo-menu-lower-right\"\r\n        class=\"context-menu-one mdl-button mdl-js-button mdl-button--icon\">\r\n  <i class=\"material-icons\">more_vert<\/i>\r\n<\/button>\r\n\r\n<ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\"\r\n    for=\"demo-menu-lower-right\">\r\n  <li class=\"mdl-menu__item\">Some Action<\/li>\r\n  <li class=\"mdl-menu__item\">Another Action<\/li>\r\n  <li disabled class=\"mdl-menu__item\">Disabled Action<\/li>\r\n  <li class=\"mdl-menu__item\">Yet Another Action<\/li>\r\n<\/ul>";
    } else if (cId == "c46") {
        return "<button id=\"demo-menu-top-left\"\r\n        class=\"context-menu-one mdl-button mdl-js-button mdl-button--icon\">\r\n  <i class=\"material-icons\">more_vert<\/i>\r\n<\/button>\r\n\r\n<ul class=\"mdl-menu mdl-menu--top-left mdl-js-menu mdl-js-ripple-effect\"\r\n    for=\"demo-menu-top-left\">\r\n  <li class=\"mdl-menu__item\">Some Action<\/li>\r\n  <li class=\"mdl-menu__item\">Another Action<\/li>\r\n  <li disabled class=\"mdl-menu__item\">Disabled Action<\/li>\r\n  <li class=\"mdl-menu__item\">Yet Another Action<\/li>\r\n<\/ul>";
    } else if (cId == "c47") {
        return "<button id=\"demo-menu-top-right\"\r\n        class=\"context-menu-one mdl-button mdl-js-button mdl-button--icon\">\r\n  <i class=\"material-icons\">more_vert<\/i>\r\n<\/button>\r\n\r\n<ul class=\"mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect\"\r\n    for=\"demo-menu-top-right\">\r\n  <li class=\"mdl-menu__item\">Some Action<\/li>\r\n  <li class=\"mdl-menu__item\">Another Action<\/li>\r\n  <li disabled class=\"mdl-menu__item\">Disabled Action<\/li>\r\n  <li class=\"mdl-menu__item\">Yet Another Action<\/li>\r\n<\/ul>";
    } else if (cId == "c48") {
        return "<input class=\"context-menu-one mdl-slider mdl-js-slider\" type=\"range\"\r\n  min=\"0\" max=\"100\" value=\"0\" tabindex=\"0\">";
    } else if (cId == "c63") {
        return "<input class=\"context-menu-one mdl-slider mdl-js-slider\" type=\"range\"\r\n  min=\"0\" max=\"100\" value=\"25\" tabindex=\"0\">";
    } else if (cId == "c49") {
        return "<label class=\"context-menu-one mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\" for=\"checkbox-1\">\r\n  <input type=\"checkbox\" id=\"checkbox-1\" class=\"mdl-checkbox__input\" checked>\r\n  <span class=\"mdl-checkbox__label\">Checkbox<\/span>\r\n<\/label>";
    } else if (cId == "c50") {
        return "<label class=\"context-menu-one mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\" for=\"checkbox-2\">\r\n  <input type=\"checkbox\" id=\"checkbox-2\" class=\"mdl-checkbox__input\">\r\n  <span class=\"mdl-checkbox__label\">Checkbox<\/span>\r\n<\/label>";
    } else if (cId == "c51") {
        return "<label class=\"context-menu-one mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"option-1\">\r\n  <input type=\"radio\" id=\"option-1\" class=\"mdl-radio__button\" name=\"options\" value=\"1\" checked>\r\n  <span class=\"mdl-radio__label\">First<\/span>\r\n<\/label>";
    } else if (cId == "c52") {
        return "<label class=\"context-menu-one mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"option-2\">\r\n  <input type=\"radio\" id=\"option-2\" class=\"mdl-radio__button\" name=\"options\" value=\"2\">\r\n  <span class=\"mdl-radio__label\">Second<\/span>\r\n<\/label>";
    } else if (cId == "c53") {
        return "<label class=\"context-menu-one mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect\" for=\"icon-toggle-1\">\r\n  <input type=\"checkbox\" id=\"icon-toggle-1\" class=\"mdl-icon-toggle__input\" checked>\r\n  <i class=\"mdl-icon-toggle__label material-icons\">format_bold<\/i>\r\n<\/label>";
    } else if (cId == "c54") {
        return "<label class=\"context-menu-one mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect\" for=\"icon-toggle-2\">\r\n  <input type=\"checkbox\" id=\"icon-toggle-2\" class=\"mdl-icon-toggle__input\">\r\n  <i class=\"mdl-icon-toggle__label material-icons\">format_italic<\/i>\r\n<\/label>";
    } else if (cId == "c55") {
        return "<label class=\"context-menu-one mdl-switch mdl-js-switch mdl-js-ripple-effect\" for=\"switch-1\">\r\n  <input type=\"checkbox\" id=\"switch-1\" class=\"mdl-switch__input\" checked>\r\n  <span class=\"mdl-switch__label\"><\/span>\r\n<\/label>";
    } else if (cId == "c56") {
        return "<label class=\"context-menu-one mdl-switch mdl-js-switch mdl-js-ripple-effect\" for=\"switch-2\">\r\n  <input type=\"checkbox\" id=\"switch-2\" class=\"mdl-switch__input\">\r\n  <span class=\"mdl-switch__label\"><\/span>\r\n<\/label>";
    } else if (cId == "c57") {
        return "<table class=\"context-menu-one mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp\">\r\n  <thead>\r\n    <tr>\r\n      <th class=\"mdl-data-table__cell--non-numeric\">Material<\/th>\r\n      <th>Quantity<\/th>\r\n      <th>Unit price<\/th>\r\n    <\/tr>\r\n  <\/thead>\r\n  <tbody>\r\n    <tr>\r\n      <td class=\"mdl-data-table__cell--non-numeric\">Acrylic (Transparent)<\/td>\r\n      <td>25<\/td>\r\n      <td>$2.90<\/td>\r\n    <\/tr>\r\n    <tr>\r\n      <td class=\"mdl-data-table__cell--non-numeric\">Plywood (Birch)<\/td>\r\n      <td>50<\/td>\r\n      <td>$1.25<\/td>\r\n    <\/tr>\r\n    <tr>\r\n      <td class=\"mdl-data-table__cell--non-numeric\">Laminate (Gold on Blue)<\/td>\r\n      <td>10<\/td>\r\n      <td>$2.35<\/td>\r\n    <\/tr>\r\n  <\/tbody>\r\n<\/table>";
    } else if (cId == "c58") {
        return "<form action=\"#\">\r\n  <div class=\"context-menu-one mdl-textfield mdl-js-textfield\">\r\n    <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample1\">\r\n    <label class=\"mdl-textfield__label\" for=\"sample1\">Text...<\/label>\r\n  <\/div>\r\n<\/form>";
    } else if (cId == "c59") {
        return "<form action=\"#\">\r\n  <div class=\"context-menu-one mdl-textfield mdl-js-textfield\">\r\n    <input class=\"mdl-textfield__input\" type=\"text\" pattern=\"-?[0-9]*(\\.[0-9]+)?\" id=\"sample2\">\r\n    <label class=\"mdl-textfield__label\" for=\"sample2\">Number...<\/label>\r\n    <span class=\"mdl-textfield__error\">Input is not a number!<\/span>\r\n  <\/div>\r\n<\/form>";
    } else if (cId == "c60") {
        return "<form action=\"#\">\r\n  <div class=\"context-menu-one mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\r\n    <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample3\">\r\n    <label class=\"mdl-textfield__label\" for=\"sample3\">Text...<\/label>\r\n  <\/div>\r\n<\/form>";
    } else if (cId == "c61") {
        return "<form action=\"#\">\r\n  <div class=\"context-menu-one mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\r\n    <input class=\"mdl-textfield__input\" type=\"text\" pattern=\"-?[0-9]*(\\.[0-9]+)?\" id=\"sample4\">\r\n    <label class=\"mdl-textfield__label\" for=\"sample4\">Number...<\/label>\r\n    <span class=\"mdl-textfield__error\">Input is not a number!<\/span>\r\n  <\/div>\r\n<\/form>";
    } else if (cId == "c62") {
        return "<form action=\"#\">\r\n  <div class=\"context-menu-one mdl-textfield mdl-js-textfield\">\r\n    <textarea class=\"mdl-textfield__input\" type=\"text\" rows= \"3\" id=\"sample5\" ><\/textarea>\r\n    <label class=\"mdl-textfield__label\" for=\"sample5\">Text lines...<\/label>\r\n  <\/div>\r\n<\/form>";
    } else if (cId == "c63") {
        return "<form action=\"#\">\r\n  <div class=\"context-menu-one mdl-textfield mdl-js-textfield mdl-textfield--expandable\">\r\n    <label class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"sample6\">\r\n      <i class=\"material-icons\">search<\/i>\r\n    <\/label>\r\n    <div class=\"mdl-textfield__expandable-holder\">\r\n      <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample6\">\r\n      <label class=\"mdl-textfield__label\" for=\"sample-expandable\">Expandable Input<\/label>\r\n    <\/div>\r\n  <\/div>\r\n<\/form>";
    }

    return "<div>No Component.</div>";
}
