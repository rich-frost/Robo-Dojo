define(["dojo/_base/array",
        "dojo/dom",
        "fa/flightInfo/model/FlightModel",
        "fa/flightInfo/view/FlightInfoWidget/FlightInfoWidgetRow"],
function(arrayUtil, dom, FlightModel, FlightInfoWidgetRow){

	return {
		
		createFlightWidget: function () {
	
	    	var flightInfoContainer = dom.byId('flightInfo');
	    	
	    	arrayUtil.forEach(FlightModel.getAirlines()[0], function(data){
	            var widget = new FlightInfoWidgetRow(data).placeAt(flightInfoContainer);
	        });
		
		}
		
	};
});