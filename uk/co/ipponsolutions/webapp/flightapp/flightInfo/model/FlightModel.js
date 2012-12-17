define([
	"dojo/store/Memory"
], function(Memory){

	var Airlines = [];
	var AirlineStore = new Memory({ 
		data: this.Airlines,
		idProperty: "name"
	});

	return {
		
		addAirline: function(data) {
			AirlineStore.add(data);
		},
		getAirlines: function(data) {
			return AirlineStore.data;
		}
	};

});
		