window.$ = require("./js/jquery.js");


$(function() {
        $.contextMenu({
        selector: '.context-menu-one', 
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
                    "fold1-key1": {"name": "Height"},
                    "fold1-key2": {"name": "Width"},
                    "fold2": {
                        "name": "Colour", 
                        "items": {
                            "fold2-key1": {"name": "Red"},
                            "fold2-key2": {"name": "Blue"},
                            "fold2-key3": {"name": "Green"}
                        }
                },
                name: {
                name: "Component ID", 
                type: 'text', 
                value: "", 
                events: {
                    keyup: function(e) {
                        // add some fancy key handling here?
                        window.console && console.log('key: '+ e.keyCode); 
                    }
                }
            },
            }
            },
            "sep3": "---------",
            "fold1a": {
                "name": "Delete", 
                "icon": "delete"
            }
        }
    });
});
/*

        $('.context-menu-one').on('click', function(e){
            console.log('clicked', this);
        })    
    });
 }); */