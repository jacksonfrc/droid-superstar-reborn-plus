
render.on("exportHTML", exportHTML);
render.on("exportJava", exportJava);

function exportHTML() {

  $("#workspaces").children().each(function () {

    var pageName = $("#tabs > #" + activeTab + " > input").val();
    if (!pageName) {
      pageName = "New Tab";
    }

    var doc = "<!DOCTYPE html><html><head><title>" + pageName + "</title></head><body></body></html>";


    pageName = pageName.replace(/ /g,"_");

    fs.access(path, fs.F_OK, function(){
      alert
    })

    fs.writeFile("./" + pageName + ".html", doc, function(err) {

    });

  });

  alert("Export Complete.");
}

function exportJava() {

}
