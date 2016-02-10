
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

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function exportJava() {

 var color = [];
 var left = [];
 var top = []; 
  var name = [];
    var i=0;
    var tag;
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
        tag = 'Button';
          return test(tag,name,left, top, color);
    }
        if (this.nodeName.toLowerCase() === "input"){
            
        tag = 'SeekBar';
                   marginLeft= $(this).css('left');
    left.push(marginLeft);    
    marginTop = $(this).css('top');  
    top.push(marginTop); 
              eletext = $(this).text();
         name.push(eletext);
             return test(tag,name,left, top,'0');
        
        }
        
        if (this.nodeName.toLowerCase() === "form"){
        tag = 'EditText';
          marginLeft= $(this).css('left');
    left.push(marginLeft);    
    marginTop = $(this).css('top');  
    top.push(marginTop); 
             
             return test(tag,"",left, top,'0');
        }
        
         if ($('#0').hasClass('mdl-radio')){
        tag = 'RadioGroup';
                      marginLeft= $(this).css('left');
    left.push(marginLeft);    
    marginTop = $(this).css('top');  
    top.push(marginTop); 
              eletext = $(this).text();
         name.push(eletext);
             return test(tag,name,left, top,'0');
        
        }
        
       if ($('#0').hasClass('mdl-checkbox')){
        tag = 'Checkbox';
                  marginLeft= $(this).css('left');
    left.push(marginLeft);    
    marginTop = $(this).css('top');  
    top.push(marginTop); 
              eletext = $(this).text();
         name.push(eletext);
             return test(tag,name,left, top,'0');
        }
            
     
        
    }); 
    
        });
        
   
    
}


function test(tag, name, marginLeft, marginTop, color  ){

    var i;
    for (i=0; i<marginLeft.length;i++){
        var v = new XMLWriter('UTF-8');
    
            v.writeStartDocument(true);
          v.writeStartElement('RelativeLayout');
            v.writeStartElement(tag);
            v.writeAttributeString('android:layout_width', 'wrap_content');
            v.writeAttributeString('android:layout_height', 'wrap_content');
            v.writeAttributeString('android:text', name[i] );
            v.writeAttributeString('android:id',i);           
        v.writeAttributeString('android:layout_alignParentTop','true');                             v.writeAttributeString('android:layout_alignParentLeft','true');
            v.writeAttributeString('android:layout_alignParentStart', 'true');
            v.writeAttributeString('android:layout_marginLeft', marginLeft[i]);
            v.writeAttributeString('android:layout_marginStart',marginLeft[i]);
            v.writeAttributeString('android:layout_marginTop', marginTop[i]);
            v.writeAttributeString('android:background', color[i]);
          v.writeEndElement();
          v.writeEndElement();
           
            v.writeEndDocument();
            console.log(v.flush());
        
    }
            
        }