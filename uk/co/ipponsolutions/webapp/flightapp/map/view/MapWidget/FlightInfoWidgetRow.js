define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dojo/text!./templates/FlightInfoWidget.html",
        "dojo/dom-style",
        "dojo/_base/fx",
        "dojo/_base/lang",
        "dojo/on"/*,
        "dojo/topic",
        "fa/map/model/MapTopics"*/],
    function(declare, WidgetBase, TemplatedMixin, template, domStyle, baseFx, lang, on/*, topic, MapTopics*/){
	
    return declare([WidgetBase, TemplatedMixin], {
        // Some default values for our author
        // These typically map to whatever you're handing into the constructor
        name: "No Name",
        shortname: "",
        callsign: "",
        url: "",
        country: "",
 
        // Our template - important!
        templateString: template,
 
        // A class to be applied to the root node in our template
        baseClass: "flightWidget",
 
        // A reference to our background animation
        mouseAnim: null,
 
        // Colors for our background animation
        baseBackgroundColor: "#fff",
        mouseBackgroundColor: "#def",      	
        
        postCreate: function() {
            // Get a DOM node reference for the root of our widget
            var domNode = this.domNode;
            
            // Run any parent postCreate processes - can be done at any point
            this.inherited(arguments);
         
            domStyle.set(domNode, "backgroundColor", this.baseBackgroundColor);

            on(domNode, "mouseenter", lang.hitch(this, function (e) { this._changeBackground(this.mouseBackgroundColor) } ));
            on(domNode, "mouseleave", lang.hitch(this, function (e) { this._changeBackground(this.baseBackgroundColor) } ));
            
            viewOnMap.domNode.style.color = "red";
        },
        
        _changeBackground: function(toCol) {
            // If we have an animation, stop it
            if (this.mouseAnim) { this.mouseAnim.stop(); }
         
            // Set up the new animation
            this.mouseAnim = baseFx.animateProperty({
                node: this.domNode,
                properties: {
                    backgroundColor: toCol
                },
                onEnd: lang.hitch(this, function() {
                    // Clean up our mouseAnim property
                    this.mouseAnim = null;
                })
            }).play();
        },

        _showHideMore: function(event) {
        	var btn = event.currentTarget;
        	if (btn.innerHTML === "Show more...") {
        		btn.innerHTML = "Hide info";
        		btn.nextElementSibling.style.display = "block";
        	} else {
        		btn.innerHTML = "Show more...";
        		btn.nextElementSibling.style.display = "none";
        	}
		}

    });

});