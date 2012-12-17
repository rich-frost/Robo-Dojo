define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dojo/text!./templates/FlightInfoWidget.html",
        "dojo/dom-style",
        "dojo/_base/fx",
        "dojo/_base/lang",
        "dojo/on",
        "dojo/topic",
        "fa/map/topics/MapTopics"],
    function(declare, WidgetBase, TemplatedMixin, template, domStyle, baseFx, lang, on, topic, MapTopics){
	
    return declare([WidgetBase, TemplatedMixin], {

        name: "No Name",
        shortname: "",
        callsign: "",
        url: "",
        country: "",
 
        templateString: template,
        baseClass: "flightWidget",
        mouseAnim: null,
 
        baseBackgroundColor: "#fff",
        mouseBackgroundColor: "#def",      	
        
        postCreate: function() {
        	this.inherited(arguments);

            var domNode = this.domNode;
            domStyle.set(domNode, "backgroundColor", this.baseBackgroundColor);
            
            on(domNode, "mouseenter", lang.hitch(this, function (e) { this._changeBackground(this.mouseBackgroundColor) } ));
            on(domNode, "mouseleave", lang.hitch(this, function (e) { this._changeBackground(this.baseBackgroundColor) } ));
          
            on(this.showMoreButton, "click", lang.hitch(this, function (e) { this._showHideMore(e) } ));
            on(this.showMapButton, "click", lang.hitch(this, function (e) { this._showMap(e) } ));
        },
        
        _changeBackground: function(toCol) {
            if (this.mouseAnim) { this.mouseAnim.stop(); }
         
            this.mouseAnim = baseFx.animateProperty({
                node: this.domNode,
                properties: {
                    backgroundColor: toCol
                },
                onEnd: lang.hitch(this, function() {
                    this.mouseAnim = null;
                })
            }).play();
        },
        
        _showHideMore: function(event){
        	var btn = event.currentTarget;
        	if (btn.innerHTML === "Show more...") {
        		btn.innerHTML = "Hide info";
        		btn.nextElementSibling.style.display = "block";
        	} else {
        		btn.innerHTML = "Show more...";
        		btn.nextElementSibling.style.display = "none";
        	}
		},

        _showMap: function(event) {
			var airlineId = "1";
			
			topic.publish(MapTopics.DISPLAY_MAP, this.callsign);
		}
		
    });

});