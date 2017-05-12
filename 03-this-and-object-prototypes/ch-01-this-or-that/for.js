
var TIME_QUANTUM = 500;

console.log("Solving the ol' callin' setTimeout() in a for loop conundrum...");

console.log("sayItOne(): The foolish man built his house upon the for (var i = ...)...");
for( var i = 1; i <= 3; i++ ){
	setTimeout( function sayItOne(){ var sWho="sayItOne"; console.log(sWho + "(): i=" + i + "...\n"); }, i*TIME_QUANTUM ); 
}

console.log("sayItTwo(): Use IIFE{ var j = i ...}( ) to scope things for us...");
for( var i = 4; i <= 6; i++ ){
	(function setItUp(){
		var j = i;
		setTimeout(
			function sayItTwo(){
				var sWho="sayItTwo";
				console.log(sWho + "(): j=" + j + "...\n");
			}, i*TIME_QUANTUM
		);
	})(); 
}

console.log("sayItThree(): Use IIFE(i) to scope things for us...");
for( var i = 7; i <= 9; i++ ){
	(function setItUp(j){
		setTimeout(
			//function sayItThree(){
			() => {
				var sWho="sayItThree(arrow function)";
				console.log(sWho + "(): j=" + j + "...\n");
			}, i*TIME_QUANTUM
		);
	})(i); 
}

console.log("sayitFour(): Use let j = i in the for loop to scope things for us...");
for( var i = 10; i <= 12; i++ ){
	let j = i;
	setTimeout(
		function sayItFour(){ 
				var sWho="sayItFour";
				console.log(sWho + "(): j=" + j + "...\n");
		},
		i*TIME_QUANTUM ); 
}

console.log("sayItFive(): Use for( let k = ...) to scope things for us...");
for( let k = 13; k <= 15; k++ ){
	setTimeout( function sayItFive(){
			var sWho="sayItFive";
			console.log(sWho + "(): k=" + k + "...\n");
	},
	k*TIME_QUANTUM ); 
}

console.log("");
