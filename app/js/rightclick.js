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
                    "fold1-key1": {
                        name: "Border Colour",
                        className: "context-menu-badge-bordercolor-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderColorInput = $(".context-menu-badge-bordercolor-input input").val().toString();
                                    if (window.console) console.log($(borderColorInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-color", borderColorInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key2": {"name": "Visibility"},
                    "fold1-key3": {"name": "Padding"},
                    "fold1-key4":  {
                        name: "Height",
                        className: "context-menu-badge-height-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var heightInput = $(".context-menu-badge-height-input input").val().toString();
                                    if (window.console) console.log($(heightInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("height", heightInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key5": {"name": "Width"},
                    "fold2": {
                        "name": "Background Colour", 
                        "items": {
                            "fold2-key1": {"name": "Red",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "red");
                             } 

                        },
                            "fold2-key2": {"name": "Blue",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "blue");
                             } 

                        },
                            "fold2-key3": {"name": "Green",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "green");
                             } 

                        }
                    }
                },
                name: {
                name: "Component ID",
                className: "context-menu-badge-comp-id-input", 
                type: 'text', 
                value: "", 
                events: {
                    keyup: function(e) {
                        if(e.keyCode == '13') {
                            $(rightClickedElementObject).attr('id', $(".context-menu-badge-comp-id-input input").val().toString());
                            if (window.console) console.log($(".context-menu-badge-comp-id-input input").val().toString());
                        }
                    }
                }
            },
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
        };
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
                        name: "Border Colour",
                        className: "context-menu-button-bordercolor-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderColorInput = $(".context-menu-button-bordercolor-input input").val().toString();
                                    if (window.console) console.log($(borderColorInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-color", borderColorInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key2": {
                        name: "Border Radius",
                        className: "context-menu-button-borderradius-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderRadiusInput = $(".context-menu-button-borderradius-input input").val().toString();
                                    if (window.console) console.log($(borderRadiusInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-radius", borderRadiusInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key3": {
                        name: "Border Width",
                        className: "context-menu-button-borderwidth-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderWidthInput = $(".context-menu-button-borderwidth-input input").val().toString();
                                    if (window.console) console.log($(borderWidthInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-width", borderWidthInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key4":    {
                name: "Border Style",
                className: "context-menu-button-borderstyle-input",  
                type: 'text', 
                value: "", 
                events: {
                            keyup: function(e) {
                                
                                    // Assign input from text box
                                    var borderStyleInput = $(".context-menu-button-borderstyle-input input").val().toString();
                                    if (window.console) console.log($(borderStyleInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-style", borderStyleInput);
                               }
                            }
            },                 
                    "fold1-key5":  {
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
                    "fold1-key6":  {
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
                    "fold2": {
                        "name": "Background Colour", 
                        "items": {
                            "fold2-key1": {"name": "Red",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "red");
                             } 

                        },
                            "fold2-key2": {"name": "Blue",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "blue");
                             } 

                        },
                            "fold2-key3": {"name": "Green",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "green");
                             } 

                        }
                    }
                },
                name: {
                name: "Component ID",
                className: "context-menu-button-comp-id-input", 
                type: 'text', 
                value: "", 
                events: {
                    keyup: function(e) {
                        if(e.keyCode == '13') {
                            //$(rightClickedElementObject).css("background-color", "blue");
                            $(rightClickedElementObject).attr('id', $(".context-menu-button-comp-id-input input").val().toString());
                            if (window.console) console.log($(".context-menu-button-comp-id-input input").val().toString());
                        }
                    }
                }
            },
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
        };
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
                        name: "Border Colour",
                        className: "context-menu-slider-bordercolor-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderColorInput = $(".context-menu-slider-bordercolor-input input").val().toString();
                                    if (window.console) console.log($(borderColorInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-color", borderColorInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key2": {
                        name: "Border Radius",
                        className: "context-menu-slider-borderradius-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderRadiusInput = $(".context-menu-slider-borderradius-input input").val().toString();
                                    if (window.console) console.log($(borderRadiusInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-radius", borderRadiusInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key3": {
                        name: "Border Width",
                        className: "context-menu-slider-borderwidth-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderWidthInput = $(".context-menu-slider-borderwidth-input input").val().toString();
                                    if (window.console) console.log($(borderWidthInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-width", borderWidthInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key4":    {
                name: "Border Style",
                className: "context-menu-slider-borderstyle-input",  
                type: 'text', 
                value: "", 
                events: {
                            keyup: function(e) {
                                
                                    // Assign input from text box
                                    var borderStyleInput = $(".context-menu-slider-borderstyle-input input").val().toString();
                                    if (window.console) console.log($(borderStyleInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-style", borderStyleInput);
                               }
                            }
            },                 
                    "fold1-key5":  {
                        name: "Height",
                        className: "context-menu-slider-height-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var heightInput = $(".context-menu-slider-height-input input").val().toString();
                                    if (window.console) console.log($(heightInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("height", heightInput +'px');
                                }
                            }
                        }
                    },
                    "fold1-key6":  {
                        name: "Width",
                        className: "context-menu-slider-width-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var widthInput = $(".context-menu-slider-width-input input").val().toString();
                                    if (window.console) console.log($(widthInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("width", widthInput +'px');
                                }
                            }
                        }
                    },
                    "fold2": {
                        "name": "Background Colour", 
                        "items": {
                            "fold2-key1": {"name": "Red",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "red");
                             } 

                        },
                            "fold2-key2": {"name": "Blue",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "blue");
                             } 

                        },
                            "fold2-key3": {"name": "Green",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "green");
                             } 

                        }
                    }
                },
                name: {
                name: "Component ID",
                className: "context-menu-slider-comp-id-input", 
                type: 'text', 
                value: "", 
                events: {
                    keyup: function(e) {
                        if(e.keyCode == '13') {
                            //$(rightClickedElementObject).css("background-color", "blue");
                            $(rightClickedElementObject).attr('id', $(".context-menu-slider-comp-id-input input").val().toString());
                            if (window.console) console.log($(".context-menu-slider-comp-id-input input").val().toString());
                        }
                    }
                }
            },
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
        };
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
                        name: "Border Colour",
                        className: "context-menu-toggle-bordercolor-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderColorInput = $(".context-menu-toggle-bordercolor-input input").val().toString();
                                    if (window.console) console.log($(borderColorInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-color", borderColorInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key2": {
                        name: "Border Radius",
                        className: "context-menu-toggle-borderradius-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderRadiusInput = $(".context-menu-toggle-borderradius-input input").val().toString();
                                    if (window.console) console.log($(borderRadiusInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-radius", borderRadiusInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key3": {
                        name: "Border Width",
                        className: "context-menu-toggle-borderwidth-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderWidthInput = $(".context-menu-toggle-borderwidth-input input").val().toString();
                                    if (window.console) console.log($(borderWidthInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-width", borderWidthInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key4":    {
                name: "Border Style",
                className: "context-menu-toggle-borderstyle-input",  
                type: 'text', 
                value: "", 
                events: {
                            keyup: function(e) {
                                
                                    // Assign input from text box
                                    var borderStyleInput = $(".context-menu-toggle-borderstyle-input input").val().toString();
                                    if (window.console) console.log($(borderStyleInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-style", borderStyleInput);
                               }
                            }
            },                 
                    "fold1-key5":  {
                        name: "Height",
                        className: "context-menu-toggle-height-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var heightInput = $(".context-menu-toggle-height-input input").val().toString();
                                    if (window.console) console.log($(heightInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("height", heightInput +'px');
                                }
                            }
                        }
                    },
                    "fold1-key6":  {
                        name: "Width",
                        className: "context-menu-toggle-width-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var widthInput = $(".context-menu-toggle-width-input input").val().toString();
                                    if (window.console) console.log($(widthInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("width", widthInput +'px');
                                }
                            }
                        }
                    },
                    "fold2": {
                        "name": "Background Colour", 
                        "items": {
                            "fold2-key1": {"name": "Red",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "red");
                             } 

                        },
                            "fold2-key2": {"name": "Blue",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "blue");
                             } 

                        },
                            "fold2-key3": {"name": "Green",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "green");
                             } 

                        }
                    }
                },
                name: {
                name: "Component ID",
                className: "context-menu-toggle-comp-id-input", 
                type: 'text', 
                value: "", 
                events: {
                    keyup: function(e) {
                        if(e.keyCode == '13') {
                            //$(rightClickedElementObject).css("background-color", "blue");
                            $(rightClickedElementObject).attr('id', $(".context-menu-toggle-comp-id-input input").val().toString());
                            if (window.console) console.log($(".context-menu-toggle-comp-id-input input").val().toString());
                        }
                    }
                }
            },
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
        };
    }
}); // end of selector: '.context-menu-toggle' contextMenu

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
                    "fold1-key1": {
                        name: "Border Colour",
                        className: "context-menu-table-bordercolor-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderColorInput = $(".context-menu-table-bordercolor-input input").val().toString();
                                    if (window.console) console.log($(borderColorInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-color", borderColorInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key2": {
                        name: "Border Radius",
                        className: "context-menu-table-borderradius-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderRadiusInput = $(".context-menu-table-borderradius-input input").val().toString();
                                    if (window.console) console.log($(borderRadiusInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-radius", borderRadiusInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key3": {
                        name: "Border Width",
                        className: "context-menu-table-borderwidth-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderWidthInput = $(".context-menu-table-borderwidth-input input").val().toString();
                                    if (window.console) console.log($(borderWidthInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-width", borderWidthInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key4":    {
                name: "Border Style",
                className: "context-menu-table-borderstyle-input",  
                type: 'text', 
                value: "", 
                events: {
                            keyup: function(e) {
                                
                                    // Assign input from text box
                                    var borderStyleInput = $(".context-menu-table-borderstyle-input input").val().toString();
                                    if (window.console) console.log($(borderStyleInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-style", borderStyleInput);
                               }
                            }
            },                 
                    "fold1-key5":  {
                        name: "Height",
                        className: "context-menu-table-height-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var heightInput = $(".context-menu-table-height-input input").val().toString();
                                    if (window.console) console.log($(heightInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("height", heightInput +'px');
                                }
                            }
                        }
                    },
                    "fold1-key6":  {
                        name: "Width",
                        className: "context-menu-table-width-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var widthInput = $(".context-menu-table-width-input input").val().toString();
                                    if (window.console) console.log($(widthInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("width", widthInput +'px');
                                }
                            }
                        }
                    },
                    "fold2": {
                        "name": "Background Colour", 
                        "items": {
                            "fold2-key1": {"name": "Red",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "red");
                             } 

                        },
                            "fold2-key2": {"name": "Blue",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "blue");
                             } 

                        },
                            "fold2-key3": {"name": "Green",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "green");
                             } 

                        }
                    }
                },
                name: {
                name: "Component ID",
                className: "context-menu-table-comp-id-input", 
                type: 'text', 
                value: "", 
                events: {
                    keyup: function(e) {
                        if(e.keyCode == '13') {
                            //$(".context-menu-button").css("background-color", "blue");
                            $(rightClickedElementObject).attr('id', $(".context-menu-table-comp-id-input input").val().toString());
                            if (window.console) console.log($(".context-menu-table-comp-id-input input").val().toString());
                        }
                    }
                }
            },
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
        };
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
                        name: "Border Colour",
                        className: "context-menu-textfield-bordercolor-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderColorInput = $(".context-menu-textfield-bordercolor-input input").val().toString();
                                    if (window.console) console.log($(borderColorInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-color", borderColorInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key2": {
                        name: "Border Radius",
                        className: "context-menu-textfield-borderradius-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderRadiusInput = $(".context-menu-textfield-borderradius-input input").val().toString();
                                    if (window.console) console.log($(borderRadiusInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-radius", borderRadiusInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key3": {
                        name: "Border Width",
                        className: "context-menu-textfield-borderwidth-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var borderWidthInput = $(".context-menu-textfield-borderwidth-input input").val().toString();
                                    if (window.console) console.log($(borderWidthInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-width", borderWidthInput +'px');
     
                                }
                            }
                        }
                    },
                    "fold1-key4":    {
                name: "Border Style",
                className: "context-menu-textfield-borderstyle-input",  
                type: 'text', 
                value: "", 
                events: {
                            keyup: function(e) {
                                
                                    // Assign input from text box
                                    var borderStyleInput = $(".context-menu-textfield-borderstyle-input input").val().toString();
                                    if (window.console) console.log($(borderStyleInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("border-style", borderStyleInput);
                               }
                            }
            },                 
                    "fold1-key5":  {
                        name: "Height",
                        className: "context-menu-textfield-height-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var heightInput = $(".context-menu-textfield-height-input input").val().toString();
                                    if (window.console) console.log($(heightInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("height", heightInput +'px');
                                }
                            }
                        }
                    },
                    "fold1-key6":  {
                        name: "Width",
                        className: "context-menu-textfield-width-input", 
                        type: 'text', 
                        value: "", 
                        events: {
                            keyup: function(e) {
                                if(e.keyCode == '13') {
                                    // Assign input from text box
                                    var widthInput = $(".context-menu-textfield-width-input input").val().toString();
                                    if (window.console) console.log($(widthInput));
                                    // Change element's CSS to inputted value
                                    $(rightClickedElementObject).css("width", widthInput +'px');
                                }
                            }
                        }
                    },
                    "fold2": {
                        "name": "Background Colour", 
                        "items": {
                            "fold2-key1": {"name": "Red",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "red");
                             } 

                        },
                            "fold2-key2": {"name": "Blue",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "blue");
                             } 

                        },
                            "fold2-key3": {"name": "Green",
                            callback: function(key, opt){
                                $(rightClickedElementObject).css("background-color", "green");
                             } 

                        }
                    }
                },
                name: {
                name: "Component ID",
                className: "context-menu-textfield-comp-id-input", 
                type: 'text', 
                value: "", 
                events: {
                    keyup: function(e) {
                        if(e.keyCode == '13') {
                            //$(rightClickedElementObject).css("background-color", "blue");
                            $(rightClickedElementObject).attr('id', $(".context-menu-textfield-comp-id-input input").val().toString());
                            if (window.console) console.log($(".context-menu-textfield-comp-id-input input").val().toString());
                        }
                    }
                }
            },
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
        };
    }
}); // end of selector: '.context-menu-textfield' contextMenu

 $.contextMenu({
        selector: '.ui-droppable.vertical',
        callback: function(key, options) {
            var m = "clicked: " + key;
            window.console && console.log(m) || alert(m);
        },
        items: {
            //"edit": {"name": "Edit", "icon": "edit"},
            //"cut": {"name": "Cut", "icon": "cut"},
            //"sep1": "---------",
            //"quit": {"name": "Quit", "icon": "quit"},
            //"sep2": "---------",
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
            //"edit": {"name": "Edit", "icon": "edit"},
            //"cut": {"name": "Cut", "icon": "cut"},
            //"sep1": "---------",
            //"quit": {"name": "Quit", "icon": "quit"},
            //"sep2": "---------",
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
