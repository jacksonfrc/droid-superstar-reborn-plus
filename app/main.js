const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var Menu = require("menu");

electron.crashReporter.start();

var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

const factor16by9 = 0.5625;
const factor8by5 = 0.625;
const factor4by3 = 0.75;

app.on("ready", function () {
    mainWindow = new BrowserWindow({
        "width":      800,
        "height":     800,
        "min-width":  600,
        "min-height": 600
    });

    // Send events to render process.
    var render = mainWindow.webContents;

    //mainWindow.openDevTools();

    mainWindow.loadURL("file://" + __dirname + "/index.html");

    mainWindow.on("closed", function () {
        mainWindow =  null;
    });

    // Create the Application's main menu
    var template = [{
        label: "File",
        submenu: [
            { label: "New Tab", selector: "" },
            { type: "separator" },
            { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
        ]}, {
        label: "Edit",
        submenu: [
            { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
            { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
            { type: "separator" },
            { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
            { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
            { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
            { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
        ]}, {
        label: "View",
        submenu: [
            { label: "Aspect Ratio",
              submenu: [
                { label: "16:9", click: function() { render.send("changeAspectRatio", factor16by9); } },
                { type: "separator" },
                { label: "8:5", click: function() { render.send("changeAspectRatio", factor8by5); } },
                { label: "4:3", click: function() { render.send("changeAspectRatio", factor4by3); } }
            ]},
            { label: "Rotate", click: function() { render.send("rotate"); } }
        ]},
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));

});
