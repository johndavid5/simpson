var TIME_QUANTUM = 1000; // milliseconds

for( var i = 1; i <= 3; i++ ){
	(function setEmUpJoe(j){
		setTimeout(
			function one(){ console.log(`one(): j=${j}: Hello, Joe!`); }, 
			TIME_QUANTUM * j
		);
	})(i);
}

for( var i = 4; i <= 6; i++ ){
	(function setEmUpJoe(){
		var j = i;	
		setTimeout(
			function two(){ console.log(`two(): j=${j}: Hello, Joe!`); }, 
			TIME_QUANTUM * j
		);
	})();
}
