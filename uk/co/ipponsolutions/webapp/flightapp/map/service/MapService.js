define(["dojo/topic",
         "dojo/request",
         "fa/flightInfo/model/FlightTopics",
         "fa/flightInfo/model/FlightModel",
         "dojo/domReady!"],
function(topic, request, FlightTopics, FlightModel){
 
    return {
		
		getFlightData: function() {
					
	        request.get("http://localhost/stub/json/flight.json", {
	            handleAs: "json"
	        }).then(function(data){
	 
	        	FlightModel.addAirline(data);
	        	
	        	topic.publish(FlightTopics().SHOW_FLIGHT_INFO);
	        },
	        function(error){
	            // Do something
	        	alert(error);
	        });
		        
		        
		}
    };
});