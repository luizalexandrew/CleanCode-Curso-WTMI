//G3: Comportamento incorreto nos limites

function getCoordenate(argument) {
	
	return new Promise(function(resolve, reject){

			cordova.plugins.locationAccuracy.canRequest(function(canRequest){
			    if(canRequest){
			        cordova.plugins.locationAccuracy.request(function(success){					        	
			        	navigator.geolocation.getCurrentPosition(function(position){
			        		...
			        		...


}