define(
	["dojo/_base/declare",
	"dojo/topic",
	"fa/map/topics/MapTopics",
	"fa/map/command/GetAirlineHQInfoCommand",
    "dojo/_base/lang",
	"dojo/domReady!"],
	function(declare, topic, MapTopics, GetAirlineHQInfoCommand, lang){

        return declare(null, {
						
			constructor: function() {
        		topic.subscribe(MapTopics.DISPLAY_MAP, lang.hitch(this, function(e){ GetAirlineHQInfoCommand(e);} ));
        		topic.subscribe(MapTopics.GET_AIRLINE_HQ_INFO, function(){ /*TODO*/ });
        		topic.subscribe(MapTopics.SHOW_AIRLINE_ON_MAP, function(){ /*TODO*/ });
			}
			
        });		
	}
)
