for( var i = 1; i <= 3; i++ ){
	(function setItUp(j){
		setTimeout( function doIt(){ console.log("j=" + j + ": Hello, Joe!"); }, j * 1000 );
	})(i);
}

for( var i = 4; i <= 6; i++ ){
	(function setItUp(){
		var j = i;
		setTimeout( function doIt(){ console.log("j=" + j + ": Hello, Joe!"); }, j * 1000 );
	})();
}

setTimeout( function doIt(){ console.log("Let off some steam, Bennett!"); }, 7 * 1000 );
