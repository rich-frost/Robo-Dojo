var profile = {      
    basePath: "../", 
    layerOptimize: "shrinksafe", 
    optimize: "shrinksafe",
    releaseDir: "../html/flightapp",
    releaseName: "scripts",
    hasReport: true,
    mini: true,
    stripConsole: "warn",
    cssOptimize: "comments",
    selectorEngine: "lite",
    action: "release",

    defaultConfig: {
        hasCache:{
            "dojo-built": 1,
            "dojo-loader": 1,
            "dom": 1,
            "host-browser": 1,
            "config-selectorEngine": "lite"
        },
        async: 1
    },
 
	staticHasFeatures: {
	    "config-deferredInstrumentation": 0, // Tested - 0=ok
	    "config-dojo-loader-catches": 0, // Tested - 0=ok
	    "config-tlmSiblingOfDojo": 0, // Tested - 0=ok
	    "dojo-amd-factory-scan": 0, // Tested - 0=ok
	    "dojo-combo-api": 0, // Tested - 0=ok
	    "dojo-config-api": 1, // Tested - 1=ok
	    "dojo-config-require": 0, // Tested - 0=ok
	    "dojo-debug-messages": 0, // Tested - 0=ok
	    "dojo-dom-ready-api": 1, // Tested - 1=ok
	    "dojo-firebug": 0, // Tested - 0=ok
	    "dojo-guarantee-console": 1, // Tested - 1=ok
	    "dojo-has-api": 1, // Tested - 1=ok
	    "dojo-inject-api": 1, // Tested - 1=ok
	    "dojo-loader": 1, // Tested - 1=ok
	    "dojo-log-api": 0, // Tested - 0=ok
	    "dojo-modulePath": 0, // Tested - 0=ok
	    "dojo-moduleUrl": 0, // Tested - 0=ok
	    "dojo-publish-privates": 0, // Tested - 0=ok
	    "dojo-requirejs-api": 0, // Tested - 0=ok
	    "dojo-sniff": 1,  // must be 1 for layer to load
	    "dojo-sync-loader": 0, // Tested - 0=ok
	    "dojo-test-sniff": 0, // Tested - 0=ok
	    "dojo-timeout-api": 0, // Tested - 0=ok
	    "dojo-trace-api": 0,  // Tested - 0=ok
	    "dojo-undef-api": 0, // Tested - 0=ok
	    "dojo-v1x-i18n-Api": 1, // Tested - 1=ok
	    "dom": 1, // Tested - 1=ok
	    "host-browser": 1, // Tested - 1=ok
	    "extend-dojo": 1 // Tested - 1=ok
	},
   
    packages:[ 
        { 
            name: "dojo", 
            location: "./dojo-release-1.8/dojo" 
        }, 
        { 
            name: "dojox", 
            location: "./dojo-release-1.8/dojox" 
        }, 
        { 
            name: "dijit", 
            location: "./dojo-release-1.8/dijit" 
        },
        { 
            name: "fa", 
            location: "./uk/co/ipponsolutions/webapp/flightapp"
        }
    ], 

    layers: {             
        // Don't need to include a dojo layer as this is built by default in dojo/dojo.js
        // 
        "fa/layers/app": { 
            include: [
                "fa/context/appContext"
            ]
       }
    }
};
