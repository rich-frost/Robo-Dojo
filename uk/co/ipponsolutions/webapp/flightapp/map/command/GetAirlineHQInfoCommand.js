define(
	["dojo/_base/declare",
	 "dijit/registry",
	"dojo/domReady!"],
	function(declare, registry){

        return declare(null, {
						
			constructor: function(airlineId) {
	        	var mapTab = registry.byId("mapView");
				var tabs = registry.byId("briefingTab");
				
				mapTab.set("content", "Airline Id is: " + airlineId);
				tabs.selectChild(mapTab);
			}
        
        });		
	}
)
