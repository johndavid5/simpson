
function doSomething(a){

	function doSomethingElse(a){
		return a - 1;
	}

	var b;

	var sWho = "doSomething";

	b = a + doSomethingElse( a * 2 );

	console.log( sWho + "(): b * 3 = ", b * 3 );
}



var sWho = "main";

doSomething( 2 );
console.log( sWho + "(): " + "Oh, so proper...hiding your private variables and functions within a function scope bubble...");

console.log( sWho + "(): " + "doSomething=", doSomething );

try {
	console.log( sWho + "(): " + "doSomethingElse =", doSomethingElse );
} catch ( e ){
	console.log("Archibald, Certainly not!", e );
}

try {
	console.log( sWho + "(): " + "b = ", b );
} catch ( e ){
	console.log("Archibald, Certainly not!", e );
}

