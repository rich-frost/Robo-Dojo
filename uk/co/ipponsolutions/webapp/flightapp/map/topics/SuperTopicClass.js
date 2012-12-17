define([
    "dojo/_base/declare",
    "dojo/topic"
],
    function(declare, topic){

        return declare(null, {

			subscribe: function(type, handler){
        		topic.subscribe(type, handler);
        	},
	
			publish: function(type, handler){
	    		topic.publish(type, handler);
	    	}
		});
	}
);