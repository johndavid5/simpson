var TIME_QUANTUM = 500;

for( var i = 1; i <= 3; i++ ){
	setTimeout( function sayIt(){ var sWho="sayIt"; console.log(sWho + "(): i=" + i + "...\n"); }, i*TIME_QUANTUM ); 
}

for( var i = 4; i <= 6; i++ ){
	(function setItUp(j){
		var j = i;
		setTimeout(
			function sayItToo(){
				var sWho="sayItTwo";
				console.log(sWho + "(): j=" + j + "...\n");
			}, i*TIME_QUANTUM
		);
	})(); 
}

for( var i = 7; i <= 9; i++ ){
	(function setItUp(j){
		setTimeout(
			function sayItToo(){
				var sWho="sayItThree";
				console.log(sWho + "(): j=" + j + "...\n");
			}, i*TIME_QUANTUM
		);
	})(i); 
}

for( var i = 10; i <= 12; i++ ){
	let j = i;
	setTimeout( function sayIt(){ var sWho="sayItFour"; console.log(sWho + "(): j=" + j + "...\n"); }, i*TIME_QUANTUM ); 
}

for( let k = 13; k <= 15; k++ ){
	setTimeout( function sayIt(){ var sWho="sayItFive"; console.log(sWho + "(): k=" + k + "...\n"); }, k*TIME_QUANTUM ); 
}
