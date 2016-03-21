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
  var projectName = $("title").text().replace(/ /g, "_");
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
    } catch (err) {
      fs.mkdirSync(folderPath);
      exists = false;
    }
  }

  // Include Google's material desgin Javascript and CSS in the project folder.
  folderPath = folderPath + "/";
  var materialjs = fs.readFileSync("./app/js/material.js");
  var materialcss = fs.readFileSync("./app/css/material.css");
  fs.writeFile(folderPath + "material.js", materialjs, function(err) {
    if (err) console.log(err);
  });
  fs.writeFile(folderPath + "material.css", materialcss, function(err) {
    if (err) console.log(err);
  });

  // Loop through workspaces.
  $("#workspaces").children().each(function() {
    // Create HTML documents
    var pageName = $("#tabs > #" + $(this).attr("id") + " > input").val();
    if (!pageName) pageName = "New Tab";

    var style = $(this).attr("style");
    var doc = "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width, height=598, initial-scale=1' /><title>" + pageName + "</title><link rel='stylesheet' href='material.css'></head><body style='" + style + "'><script src='material.js'></script>";

    // Loop through elemenst in each workspace.
    $(this).children().each(function() {
      doc += this.outerHTML
    });

    // Close off the HTML document.
    doc += "</body></html>";

    // Write HTML file to folder.
    pageName = pageName.replace(/ /g, "_");
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
      } catch (err) {
        fs.writeFileSync(filePath, doc);
        exists = false;
      }
    }

  });

  exportComplete();
}

function rgb2hex(rgb) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}


function exportJava() {

  var color = [];
  var left = [];
  var top = [];
  var name = [];
  var textcolor = [];
  var tag = [];
  var text = [];
  $("#workspaces").children().each(function() {

    $(this).children().each(function() {

      if (this.nodeName.toLowerCase() == 'button') {
        marginLeft = $(this).css('left');
        left.push(marginLeft);
        marginTop = $(this).css('top');
        top.push(marginTop);

        text_color = $(this).css('color');
        textRGB = rgb2hex(text_color);
            rgb = $(this).css('background-color');
        colorRGB = rgb2hex(rgb);

        textcolor.push(textRGB);
        color.push(colorRGB);
        eletext = $(this).text();
        name.push(eletext);
        tag.push('Button');
      }




      if ($(this).hasClass('mdl-radio')) {



        tag.push('RadioButton');
        marginLeft = $(this).css('left');
        left.push(marginLeft);
        marginTop = $(this).css('top');
        top.push(marginTop);
        eletext = $(this).text();
        name.push(eletext);
        text_color = $(this).css('color');
        textRGB = rgb2hex(text_color);
        textcolor.push(textRGB);
        color.push(0);
      } else if ($(this).hasClass('mdl-switch')) {




        tag.push('Switch');
        marginLeft = $(this).css('left');
        left.push(marginLeft);
        marginTop = $(this).css('top');
        top.push(marginTop);
        eletext = $(this).text();
        name.push(eletext);
        text_color = $(this).css('color');
        textRGB = rgb2hex(text_color);
        textcolor.push(textRGB);
        color.push(0);

      } else if ($(this).hasClass('mdl-textfield')) {




        tag.push('TextView');
        marginLeft = $(this).css('left');
        left.push(marginLeft);
        marginTop = $(this).css('top');
        top.push(marginTop);
        eletext = $(this).text();
        name.push(eletext);
        text_color = $(this).css('color');
        textRGB = rgb2hex(text_color);
        textcolor.push(textRGB);
        color.push('#ffffffff');
        texti = $(this).text();
        text.push(texti);

      } else if ($(this).hasClass('mdl-icon-toggle')) {


        tag.push('SeekBar');
        marginLeft = $(this).css('left');
        left.push(marginLeft);
        marginTop = $(this).css('top');
        top.push(marginTop);
        eletext = $(this).text();
        name.push(eletext);
        text_color = $(this).css('color');
        textRGB = rgb2hex(text_color);
        textcolor.push(textRGB);
        color.push('#ffffffff');
      } else if ($(this).hasClass('mdl-checkbox')) {



        tag.push('CheckBox');
        marginLeft = $(this).css('left');
        left.push(marginLeft);
        marginTop = $(this).css('top');
        top.push(marginTop);
        eletext = $(this).text();
        name.push(eletext);
        text_color = $(this).css('color');
        textRGB = rgb2hex(text_color);
        textcolor.push(textRGB);




      } else if ($(this).hasClass('mdl-badge')) {
        tag.push('QuickContactBadge');
        marginLeft = $(this).css('left');
        left.push(marginLeft);
        marginTop = $(this).css('top');
        top.push(marginTop);
        eletext = $(this).text();
        name.push(eletext);
        color.push(0);

      }


    });



  });


  return test(tag, name, left, top, color, textcolor,text);

}



function test(tag, name, marginLeft, marginTop, color, textcolor,text) {
  var marginL = marginLeft.length;
  var i;

  fs.mkdirSync('/Users/harmanlitt/Desktop/xml');

  var fa;
  var v = new XMLWriter('UTF-8');

  v.writeStartDocument(true);
  v.writeStartElement('RelativeLayout');
  v.writeAttributeString('xmlns:android', 'http://schemas.android.com/apk/res/android');
  v.writeAttributeString('xmlns:tools', 'http://schemas.android.com/tools');
  v.writeAttributeString('android:layout_width', 'match_parent');
  v.writeAttributeString('android:layout_height', 'match_parent');
  v.writeAttributeString('android:paddingBottom', '16dp');
  v.writeAttributeString('android:paddingLeft', '16dp');
  v.writeAttributeString('android:paddingRight', '16dp');
  v.writeAttributeString('android:paddingTop', '16dp');
  v.writeAttributeString('android:paddingBottom', '16dp');
  for (i = 0; i < marginL; i++) {

    var a3 = v.writeStartElement(tag[i]);
    var a4 = v.writeAttributeString('android:layout_width', 'wrap_content');
    var a5 = v.writeAttributeString('android:layout_height', 'wrap_content');
    var a6 = v.writeAttributeString('android:text', name[i]);
    var a7 = v.writeAttributeString('android:id', '@+id/a' + i + 1);
    var a7 = v.writeAttributeString('android:layout_alignParentTop', 'true');
    var a8 = v.writeAttributeString('android:layout_alignParentLeft', 'true');
    var a9 = v.writeAttributeString('android:layout_alignParentStart', 'true');
    var a10 = v.writeAttributeString('android:layout_marginLeft', marginLeft[i]);
    var a11 = v.writeAttributeString('android:layout_marginStart', marginLeft[i]);
    var a12 = v.writeAttributeString('android:layout_marginTop', marginTop[i]);

    if (textcolor != 0) {
      v.writeAttributeString('android:background', color[i]);
      v.writeAttributeString('android:textColor', textcolor[i]);
    }

    if (text!= 0) {
      v.writeAttributeString('android:text', text[i]);
    }
  v.writeEndElement();
  }
  v.writeEndElement();
  v.writeEndDocument();
  fa = fa + v.flush();
  var fp = '/Users/harmanlitt/Desktop/xml/androida' + i + '.xml';
  fs.writeFileSync(fp, fa);

  exportComplete();
}
