const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var Menu = require("menu");
var Scale = require(__dirname + '/scale.js');

electron.crashReporter.start();

var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on("ready", function () {
    mainWindow = new BrowserWindow({
        "width":      800,
        "height":     800,
        "min-width":  600,
        "min-height": 600
    });

    mainWindow.openDevTools();

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
                { label: "16:9" },
                { type: "separator" },
                { label: "8:5" },
                { label: "4:3" }
            ]},
            { label: "Rotate", accelerator: "Command+Q", click: function() { Scale.rotate; }}
        ]},
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));

});
