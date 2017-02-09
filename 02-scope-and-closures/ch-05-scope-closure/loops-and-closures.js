var JUtils = require("../../common/jutils");

var INTERVAL = 100;

for( var i = 1; i <= 5; i++ ){
	/* Not so smart...var i is globally scoped,
	* so its value is not "fixed" within
	* timerNotSoSmart(), although the 
	* interval i * 1000 is passed 
	* by value to setTimeout() and
	* operates as expected...
	*/
	setTimeout( function timerNotSoSmart(){
		var sWho = "timerNotSoSmart";
		JUtils.logIt( sWho + "(): i = ", i );
	}, i * INTERVAL );
}

// Smart way...use an IIFE...
for( var i = 6; i <= 10; i++ ){
	(function(){

		var j = i; // Seal current value of i into
				   // j for this closure...

		setTimeout( function smartTimerOne(){
			var sWho = "smartTimerOne";
			JUtils.logIt( sWho + "(): j = ", j );
		}, j * INTERVAL );

	})();
}

for( var i = 11; i <= 15; i++ ){
	(function(j){

		setTimeout( function smartTimerTwo(){
			var sWho = "smartTimerTwo";
			JUtils.logIt( sWho + "(): j = ", j );
		}, j * INTERVAL );

	})(i);
}

for( var i = 16; i <= 20; i++ ){

	let j = i; // Yay! let creates block-scope for closure...

	setTimeout( function letTimerOne(){
		var sWho = "letTimerOne";
		JUtils.logIt( sWho + "(): j = ", j );
	}, j * INTERVAL );
}

for( let i = 21; i<=25; i++ ){
	setTimeout( function letTimerTwo(){
		var sWho = "letTimerTwo";
		JUtils.logIt( sWho + "(): i = ", i );
	}, i * INTERVAL );
}
