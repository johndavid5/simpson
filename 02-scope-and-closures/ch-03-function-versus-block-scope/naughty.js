function doSomething(a){
	var sWho = "doSomething";
	b = a + doSomethingElse( a * 2 );
	console.log( sWho + "(): b * 3 = ", b * 3 );
}

function doSomethingElse(a){
	return a - 1;
}

var b;

var sWho = "main";

doSomething( 2 );
console.log( sWho + "(): " + "Naughty, naughty, exposing your private variables and functions to everyone...");

console.log( sWho + "(): " + "doSomething=", doSomething );
console.log( sWho + "(): " + "doSomethingElse =", doSomethingElse );
console.log( sWho + "(): " + "b = ", b );

