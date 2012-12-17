define(
	["dojo/_base/declare",
	"dojo/topic",
	"fa/flightInfo/bootstrap/BootstrapFlightInfo",
	"fa/map/bootstrap/BootstrapMap",
	"fa/flightInfo/model/FlightTopics",
	"dojo/domReady!"],
	function(declare, topic, BootstrapFlightInfo, BootstrapMap, FlightTopics){

        return declare(null, {
						
			constructor: function() {
        	
        		//Define bootstraps here
       			new BootstrapFlightInfo();
       			new BootstrapMap();
       			
			},
	        
			startup: function() {
	        	this._getFlightData();
	        },
	
			_getFlightData: function() {
        		topic.publish(FlightTopics().GET_FLIGHT_DATA);
	        }
			
        });		

	}
)
