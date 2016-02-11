
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
    var doc = "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width, height=598, initial-scale=1' /><title>" + pageName + "</title><link rel='stylesheet' href='material.css'></head><body><script src='material.js'></script>";

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

function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}


function exportJava() {

 var color = [];
 var left = [];
 var top = []; 
  var name = [];
    
    var tag =[];
    $("#workspaces").children().each(  function(){
        
    $(this).children().each(function(){
        
    if (this.nodeName.toLowerCase() === "button"){  
        
    marginLeft= $(this).css('left');
    left.push(marginLeft);    
    marginTop = $(this).css('top');  
    top.push(marginTop);    
    rgb= $(this).css('background-color');
    colorRGB = rgb2hex(rgb);
    color.push(colorRGB);  
    eletext = $(this).text();
         name.push(eletext);  
      tag.push('Button');
       
        
         
    }
  else if  ($(this).hasClass('mdl-radio')){
            
      tag.push('SeekBar');
    marginLeft= $(this).css('left');
    left.push(marginLeft);    
    marginTop = $(this).css('top');  
    top.push(marginTop); 
    eletext = $(this).text();
    name.push(eletext);
 
             color.push(0);
        }
        
      else if ($(this).hasClass('mdl-switch')){
            
     tag.push('ToggleButton');
    marginLeft= $(this).css('left');
    left.push(marginLeft);    
    marginTop = $(this).css('top');  
    top.push(marginTop); 
    eletext = $(this).text();
    name.push(eletext);
 
             color.push(0);
        }
        
        else if ($(this).hasClass('sample1')){
        tag.push('EditText');
          marginLeft= $(this).css('left');
    left.push(marginLeft);    
    marginTop = $(this).css('top');  
    top.push(marginTop); 
                 color.push(0); 
          
        }
        
       else if ($(this).hasClass('mdl-icon-toggle')){
      tag.push('ToggleButton');
                      marginLeft= $(this).css('left');
    left.push(marginLeft);    
    marginTop = $(this).css('top');  
    top.push(marginTop); 
              eletext = $(this).text();
         name.push(eletext);
           
             color.push(0);
        }
        
 else if ($(this).hasClass('mdl-checkbox')){
       tag.push('Checkbox');
                  marginLeft= $(this).css('left');
    left.push(marginLeft);    
    marginTop = $(this).css('top');  
    top.push(marginTop); 
              eletext = $(this).text();
         name.push(eletext);
           color.push(0);
          
        }
      else if ($(this).hasClass('mdl-badge')){
       tag.push('QuickContactBadge');
                  marginLeft= $(this).css('left');
    left.push(marginLeft);    
    marginTop = $(this).css('top');  
    top.push(marginTop); 
              eletext = $(this).text();
         name.push(eletext);
           color.push(0);
          
        }       
     
        
    }); 
    
        });
        
   return test(tag,name,left, top, color); 
    
}


function test(tag, name, marginLeft, marginTop, color  ){
    var marginL = marginLeft.length;
    var i;
    for (i=0; i<marginL;i++){
        var v = new XMLWriter('UTF-8');
    
            v.writeStartDocument(true);
            v.writeStartElement('RelativeLayout');
            v.writeStartElement(tag[i]);
            v.writeAttributeString('android:layout_width', 'wrap_content');
            v.writeAttributeString('android:layout_height', 'wrap_content');
            v.writeAttributeString('android:text', name[i] );
            v.writeAttributeString('android:id',i);          
            v.writeAttributeString('android:layout_alignParentTop','true');
            v.writeAttributeString('android:layout_alignParentLeft','true');
            v.writeAttributeString('android:layout_alignParentStart', 'true');
            v.writeAttributeString('android:layout_marginLeft', marginLeft[i]);
            v.writeAttributeString('android:layout_marginStart',marginLeft[i]);
            v.writeAttributeString('android:layout_marginTop', marginTop[i]);
        
        
        if(color == 0){
      
          v.writeEndElement();
          v.writeEndElement();
           
         v.writeEndDocument();
          console.log(v.flush());
        }
        
        else{
          v.writeAttributeString('android:background', color[i]);
          v.writeEndElement();
          v.writeEndElement();
           
            v.writeEndDocument();
            console.log(v.flush());
        }
    }
            
        }