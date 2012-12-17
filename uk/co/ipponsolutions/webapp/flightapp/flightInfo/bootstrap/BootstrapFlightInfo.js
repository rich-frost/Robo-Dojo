define(
	["dojo/_base/declare",
	"dojo/topic",
	"fa/flightInfo/model/FlightTopics",
	"fa/flightInfo/service/FlightService",
	"fa/flightInfo/view/FlightInfoWidget/FlightInfoWidget",
	"dojo/domReady!"],
	function(declare, topic, FlightTopics, FlightService, FlightInfoWidget){

        return declare(null, {
						
			constructor: function() {
        		topic.subscribe(FlightTopics().GET_FLIGHT_DATA, function(){ FlightService.getFlightData(); });
        		topic.subscribe(FlightTopics().SHOW_FLIGHT_INFO, function(){ FlightInfoWidget.createFlightWidget(); });
			}
        
        });		
	}
)
