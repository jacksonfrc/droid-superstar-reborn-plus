
render.on("exportHTML", exportHTML);
render.on("exportJava", exportJava);
render.on("setTitle", setTitle);

function setTitle() {
  $("#project").dialog({
    dialogClass: "no-close",
    draggable: false,
    modal: true,
    buttons: [{
      text: "OK",
      click: function() {
        $("title").text($("#project-name").val());
        $(this).dialog("close");
      }
    }]
  });
}

function exportComplete() {
  $("#export").dialog({
    dialogClass: "no-close",
    draggable: false,
    modal: true,
    buttons: [{
      text: "OK",
      click: function() {
        $(this).dialog("close");
      }
    }]
  });
}


function exportHTML() {

  // Create project folder.
  var projectName = $("title").text().replace(/ /g,"_");
  var folderPath = "./" + projectName;
  var count = 1;
  var exists = true;
  while (exists) {
    try {
      var stats = fs.statSync(folderPath);
      if (stats.isDirectory()) {
        folderPath = "./" + projectName + "_" + count;
        count++;
      }
    } catch(err) {
      fs.mkdirSync(folderPath);
      exists = false;
    }
  }

  // Include Google's material desgin Javascript and CSS in the project folder.
  folderPath = folderPath + "/";
  var materialjs = fs.readFileSync("./app/js/material.js");
  var materialcss = fs.readFileSync("./app/css/material.css");
  fs.writeFile(folderPath + "material.js", materialjs, function (err) { if (err) console.log(err); });
  fs.writeFile(folderPath + "material.css", materialcss, function (err) { if (err) console.log(err); });

  // Loop through workspaces.
  $("#workspaces").children().each(function () {
    // Create HTML documents
    var pageName = $("#tabs > #" + $(this).attr("id") + " > input").val();
    if (!pageName) pageName = "New Tab";
    var doc = "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width, height=598 initial-scale=1' /><title>" + pageName + "</title><link rel='stylesheet' href='material.css'></head><body><script src='material.js'></script>";

    // Loop through elemenst in each workspace.
    $(this).children().each(function () {
      doc += this.outerHTML
    });

    // Close off the HTML document.
    doc += "</body></html>";

    // Write HTML file to folder.
    pageName = pageName.replace(/ /g,"_");
    var filePath = folderPath + pageName + ".html";
    count = 1;
    exists = true;
    while (exists) {
      try {
        var stats = fs.statSync(filePath);
        if (stats.isFile()) {
          filePath = folderPath + pageName + "_" + count + ".html";
          count++;
        }
      } catch(err) {
        fs.writeFileSync(filePath, doc);
        exists = false;
      }
    }

  });

  exportComplete();
}

function exportJava() {

}
