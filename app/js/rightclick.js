window.$ = require("./js/jquery.js");

var rightClickedElementObject;

$(function() {

        $.contextMenu({
        selector: '.context-menu-badge',
        build: function($triggerElement, e){
            rightClickedElementObject = $triggerElement;
            console.log(rightClickedElementObject);
            return {
            callback: function(){},
        items: {
            "fold1": {
                "name": "Properties", 
                "items": {
                   /* "fold1-key1": {
                        name: "Background Colour (DOESNT WORK)",
                        className: "context-menu-badge-backgroundcolor-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var backgroundColorInput = $(".context-menu-badge-backgroundcolor-input input").val().toString();
                                    if (window.console) console.log($(backgroundColorInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("background-color", backgroundColorInput);


                                }
                            }
                        }
                    }, */
                "fold4":  {
                        name: "Element Text",
                        className: "context-menu-badge-elementtext-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    $(rightClickedElementObject).html($(".context-menu-badge-elementtext-input input").val().toString());
                                    if (window.console) console.log($(".context-menu-badge-elementtext-input input").val().toString());
                                }
                            }
                        }
                    },
            "sep3": "---------",
            "fold1a": {
                "name": "Delete", 
                "icon": "delete",
                callback: function(key, opt){
                    $(this).remove();
            } 
            }
            }   
        }
    }
}
}
}); // end of selector: '.context-menu-badge' contextMenu   

        $.contextMenu({
        selector: '.context-menu-button',
        build: function($triggerElement, e){
            rightClickedElementObject = $triggerElement;
            console.log(rightClickedElementObject);
            return {
            callback: function(){},
        items: {
            "fold1": {
                "name": "Properties", 
                "items": {
                    "fold1-key1": {
                        name: "Height", 
                        className: "context-menu-button-height-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var heightInput = $(".context-menu-button-height-input input").val().toString();
                                    if (window.console) console.log($(heightInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("height", heightInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key2": {
                        name: "Width",
                        className: "context-menu-button-width-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var widthInput = $(".context-menu-button-width-input input").val().toString();
                                    if (window.console) console.log($(widthInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("width", widthInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key3": {
                        name: "Linked Activity",
                        className: "context-menu-button-linkaddress-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Accept input at press of enter key (13)
                                    var linkAddressInput = $(".context-menu-button-linkaddress-input input").val().toString();
                                    // Convert spaces to underscores
                                    linkAddressInput = linkAddressInput.replace(/ /g,"_");
                                    // Print input to console
                                    if (window.console) console.log($(linkAddressInput));
                                    // Wrap link around element
                                     $(rightClickedElementObject).wrap('<a href="' + linkAddressInput + '" />');
                                }
                            }
                        }
                    },
                    "fold1-key4":    {
                        name: "Element Text",
                        className: "context-menu-button-innertext-input",  
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {

                                // Accept input from text nox
                                var innerTextInput = $(".context-menu-button-innertext-input input").val().toString();
                                // Print input to console
                                if (window.console) console.log($(innerTextInput));
                                // Set button's text to input text
                                $(rightClickedElementObject).html(innerTextInput);
                               }
                               }
                            }
            },                 
                    "fold1-key5":  {
                        name: "Background Colour",
                        className: "context-menu-button-backgroundcolor-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var backgroundColorInput = $(".context-menu-button-backgroundcolor-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(backgroundColorInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("background-color", backgroundColorInput);
                                }
                            }
                        }
                    },
                    "fold1-key6":  {
                        name: "Font Colour",
                        className: "context-menu-button-fontcolor-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontColorInput = $(".context-menu-button-fontcolor-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontColorInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("color", fontColorInput);
                                }
                            }
                        }
                    },
                "fold2":  {
                        name: "Font Style",
                        className: "context-menu-button-fontstyle-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontStyleInput = $(".context-menu-button-fontstyle-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontStyleInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("font-style", fontStyleInput);
                                }
                            }
                        }
                    },
                    "fold3":  {
                        name: "Font Weight",
                        className: "context-menu-button-fontweight-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontWeightInput = $(".context-menu-button-fontweight-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontWeightInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("font-weight", fontWeightInput);
                                }
                            }
                        }
                    },
                "fold4":  {
                        name: "Font Family",
                        className: "context-menu-button-fontfamily-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                               if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontFamilyInput = $(".context-menu-button-fontfamily-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontFamilyInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("font-family", fontFamilyInput);
                                }
                            }
                        }
                    },
                "fold5":  {
                        name: "Font Size",
                        className: "context-menu-button-fontsize-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontSizeInput = $(".context-menu-button-fontsize-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontSizeInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("font-size", fontSizeInput + 'px');
                                }
                            }
                        }
                    },    
            "sep3": "---------",
            "fold1a": {
                "name": "Delete", 
                "icon": "delete",
                callback: function(key, opt){
                    $(this).remove();
            } 
            }
            }   
        }
    }
}
}
});  // end of selector: '.context-menu-button' contextMenu

        $.contextMenu({
        selector: '.context-menu-slider',
        build: function($triggerElement, e){
            rightClickedElementObject = $triggerElement;
            console.log(rightClickedElementObject);
            return {
            callback: function(){},
        items: {
            "fold1": {
                "name": "Properties", 
                "items": {
                    "fold1-key1": {
                        name: "Width",
                        className: "context-menu-slider-width-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var widthInput = $(".context-menu-slider-width-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(widthInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("width", widthInput +'px');
                                }
                            }
                        }
                    },
            "sep3": "---------",
            "fold1a": {
                "name": "Delete", 
                "icon": "delete",
                callback: function(key, opt){
                    $(this).remove();
            } 
            }
            }   
        }
    }
}
}
}); // end of selector: '.context-menu-slider' contextMenu

        $.contextMenu({
        selector: '.context-menu-toggle',
        build: function($triggerElement, e){
            rightClickedElementObject = $triggerElement;
            console.log(rightClickedElementObject);
            return {
            callback: function(){},
        items: {
            "fold1": {
                "name": "Properties", 
                "items": {
                    "fold1-key1": {
                        name: "Height",
                        className: "context-menu-toggle-height-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var heightInput = $(".context-menu-toggle-height-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(heightInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("height", heightInput +'px');
                                }
                            }
                        }
                    },
                    "fold1-key2": {
                        name: "Width",
                        className: "context-menu-toggle-width-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                     // Assign input from text box
                                    var widthInput = $(".context-menu-toggle-width-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(widthInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("width", widthInput +'px');
                                }
                            }
                        }
                    },
                    "fold1-key3": {
                        name: "Element Text",
                        className: "context-menu-toggle-elementtext-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    $(rightClickedElementObject).children().html($(".context-menu-toggle-elementtext-input input").val().toString());
                                    if (window.console) console.log($(".context-menu-toggle-elementtext-input input").val().toString());
                                }
                            }
                        }
                    },
                    "fold1-key4":    {
                        name: "Font Colour",
                        className: "context-menu-toggle-fontcolor-input",  
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                
                                    // Assign input from text box
                                    var fontColorInput = $(".context-menu-toggle-fontcolor-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontColorInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("color", fontColorInput);
                               }
                            }
            },                 
                    "fold1-key5":  {
                        name: "Font Style",
                        className: "context-menu-toggle-fontstyle-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontStyleInput = $(".context-menu-toggle-fontstyle-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontStyleInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("font-style", fontStyleInput);
                                }
                            }
                        }
                    },
                    "fold1-key6":  {
                        name: "Font Weight",
                        className: "context-menu-toggle-fontweight-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontWeightInput = $(".context-menu-toggle-fontweight-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontWeightInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("font-weight", fontWeightInput);
                                }
                            }
                        }
                    },
                    "fold2":  {
                        name: "Font Family",
                        className: "context-menu-toggle-fontfamily-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontFamilyInput = $(".context-menu-toggle-fontfamily-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontFamilyInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("font-family", fontFamilyInput);
                                }
                            }
                        }
                    },
                    "fold3":  {
                        name: "Font Size",
                        className: "context-menu-toggle-fontsize-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontSizeInput = $(".context-menu-toggle-fontsize-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontSizeInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("font-size", fontSizeInput);
                                }
                            }
                        }
                    },
            "sep3": "---------",
            "fold1a": {
                "name": "Delete", 
                "icon": "delete",
                callback: function(key, opt){
                    $(this).remove();
           } 
            }
            }   
        }
    }
}
}
});  // end of selector: '.context-menu-toggle' contextMenu

         $.contextMenu({
        selector: '.context-menu-table',
        build: function($triggerElement, e){
            rightClickedElementObject = $triggerElement;
            console.log(rightClickedElementObject);
            return {
            callback: function(){},
        items: {
            "fold1": {
                "name": "Properties", 
                "items": {
                    "fold1a": {
                        "name": "Delete", 
                        "icon": "delete",
                        callback: function(key, opt){
                            $(this).remove();
                            } 
                            }
                        }   
                    }
                }
}
}
}); // end of selector: '.context-menu-table' contextMenu

          $.contextMenu({
            selector: '.context-menu-textfield',
            build: function($triggerElement, e){
            rightClickedElementObject = $triggerElement;
            console.log(rightClickedElementObject);
            return {
            callback: function(){},
        items: {
            "fold1": {
                "name": "Properties", 
                "items": {
                    "fold1-key1": {
                        name: "Height",
                        className: "context-menu-textfield-height-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var heightInput = $(".context-menu-textfield-height-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(heightInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).children().css("height", heightInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key2": {
                        name: "Width",
                        className: "context-menu-textfield-width-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var widthInput = $(".context-menu-textfield-width-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(widthInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("width", widthInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key3": {
                        name: "Element Text",
                        className: "context-menu-textfield-elementtext-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    $(rightClickedElementObject).children().html($(".context-menu-textfield-elementtext-input input").val().toString());
                                    if (window.console) console.log($(".context-menu-textfield-elementtext-input input").val().toString());
                                }
                            }
                        }
                    },
                    "fold1-key4":    {
                name: "Font Colour",
                className: "context-menu-textfield-fontcolor-input",  
                type: 'text', 
                value: "", 
                events: {
                            keyup: function(e) {
                                    if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontColorInput = $(".context-menu-textfield-fontcolor-input input").val().toString();
                                    // Print input to consoe
                                    if (window.console) console.log($(fontColorInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).children().css("color", fontColorInput);
                                }
                               }
                            }
                    },                 
                    "fold1-key5":  {
                        name: "Font Style",
                        className: "context-menu-textfield-fontstyle-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontStyleInput = $(".context-menu-textfield-fontstyle-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontStyleInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("font-style", fontStyleInput);
                                }
                            }
                        }
                    },
                    "fold1-key6":  {
                        name: "Font Weight",
                        className: "context-menu-textfield-fontweight-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontWeightInput = $(".context-menu-textfield-fontweight-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontWeightInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("font-weight", fontWeightInput);
                                }
                            }
                        }
                    },
                "fold2":  {
                        name: "Font Family",
                        className: "context-menu-textfield-fontfamily-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontFamilyInput = $(".context-menu-textfield-fontfamily-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontFamilyInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("font-family", fontFamilyInput);
                                }
                            }
                        }
                    },
                "fold3":  {
                        name: "Font Size",
                        className: "context-menu-textfield-fontsize-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontSizeInput = $(".context-menu-textfield-fontsize-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontSizeInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).children().css("font-size", fontSizeInput);
                                }
                            }
                        }
                    },
            "sep3": "---------",
            "fold1a": {
                "name": "Delete", 
                "icon": "delete",
                callback: function(key, opt){
                    $(this).remove();
            } 
            }
            }   
        }
    }
}
}
});  // end of selector: '.context-menu-textfield' contextMenu

         $.contextMenu({
            selector: '.context-menu-useraddedtext',
            build: function($triggerElement, e){
            rightClickedElementObject = $triggerElement;
            console.log(rightClickedElementObject);
            return {
            callback: function(){},
        items: {
            "fold1": {
                "name": "Properties", 
                "items": {
                    "fold1-key3": {
                        name: "Element Text",
                        className: "context-menu-useraddedtext-elementtext-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    $(rightClickedElementObject).html($(".context-menu-useraddedtext-elementtext-input input").val().toString());
                                    if (window.console) console.log($(".context-menu-useraddedtext-elementtext-input input").val().toString());
                                }
                            }
                        }
                    },
                    "fold1-key4":    {
                name: "Font Colour",
                className: "context-menu-useraddedtext-fontcolor-input",  
                type: 'text', 
                value: "", 
                events: {
                            keyup: function(e) {
                                    if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontColorInput = $(".context-menu-useraddedtext-fontcolor-input input").val().toString();
                                    // Print input to consoe
                                    if (window.console) console.log($(fontColorInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("color", fontColorInput);
                                }
                               }
                            }
                    },                 
                    "fold1-key5":  {
                        name: "Font Style",
                        className: "context-menu-useraddedtext-fontstyle-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontStyleInput = $(".context-menu-useraddedtext-fontstyle-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontStyleInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("font-style", fontStyleInput);
                                }
                            }
                        }
                    },
                    "fold1-key6":  {
                        name: "Font Weight",
                        className: "context-menu-useraddedtext-fontweight-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontWeightInput = $(".context-menu-useraddedtext-fontweight-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontWeightInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("font-weight", fontWeightInput);
                                }
                            }
                        }
                    },
                "fold2":  {
                        name: "Font Family",
                        className: "context-menu-useraddedtext-fontfamily-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontFamilyInput = $(".context-menu-useraddedtext-fontfamily-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontFamilyInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("font-family", fontFamilyInput);
                                }
                            }
                        }
                    },
            /*    "fold3":  {
                        name: "Font Size",
                        className: "context-menu-useraddedtext-fontsize-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var fontSizeInput = $(".context-menu-useraddedtext-fontsize-input input").val().toString();
                                    // Print input to console
                                    if (window.console) console.log($(fontSizeInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("font-size", fontSizeInput);
                                }
                            }
                        }
                    },     */
            "sep3": "---------",
            "fold1a": {
                "name": "Delete", 
                "icon": "delete",
                callback: function(key, opt){
                    $(this).remove();
            } 
            }
            }   
        }
    }
}
}
});  // end of selector: '.context-menu-useraddedtext' contextMenu


 $.contextMenu({
        selector: '.ui-droppable.vertical',
        callback: function(key, options) {
            var m = "clicked: " + key;
            window.console && console.log(m) || alert(m);
        },
        items: {
            "fold1": {
                "name": "Properties", 
                "items": {
                    "fold1-key1": {
                        name: "Background Colour",
                        className: "context-menu-backgroundcolorvert-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var backgroundColorInput = $(".context-menu-backgroundcolorvert-input input").val().toString();
                                    if (window.console) console.log($(backgroundColorInput));
                                    // Change element's CSS to inputted value
                                    $(activeWorkspace).css("background-color", backgroundColorInput);
     
                                }
                            }
                        }
                    },
            }
            },
            "sep3": "---------",
            "fold1a": {
                "name": "Rotate Workspace", 
                callback: function(key, opt){
                    var bgTransfer = $(activeWorkspace).css("background-color");
                    //call rotation function
                    rotate();
                    //Apply old bg colour
                    $(activeWorkspace).css("background-color", bgTransfer);

            } 
            }
        }
    }); // end of selector: '.workspace' contextMenu

$.contextMenu({
        selector: '.ui-droppable.horizontal',
        callback: function(key, options) {
            var m = "clicked: " + key;
            window.console && console.log(m) || alert(m);
        },
        items: {
            "fold1": {
                "name": "Properties", 
                "items": {
                   "fold1-key1": {
                        name: "Background Colour",
                        className: "context-menu-backgroundcolorhorz-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var backgroundColorInput = $(".context-menu-backgroundcolorhorz-input input").val().toString();
                                    if (window.console) console.log($(backgroundColorInput));
                                    // Change element's CSS to inputted value
                                    $(activeWorkspace).css("background-color", backgroundColorInput);
     
                                }
                            }
                        }
                    },
            }
            },
            "sep3": "---------",
            "fold1a": {
                "name": "Rotate Workspace", 
                callback: function(key, opt){
                    var bgTransfer = $(activeWorkspace).css("background-color");
                    //call rotation function
                    rotate();
                    //Apply old bg colour
                    $(activeWorkspace).css("background-color", bgTransfer);

            } 
            }
        }
    }); // end of selector: '.workspace-horizontal' contextMenu

}); // end of function
