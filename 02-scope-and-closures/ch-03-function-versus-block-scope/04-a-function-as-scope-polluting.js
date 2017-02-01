// The named function foo() 
// "pollutes" the enclosing
// scope...global in this case...
var a = 2;

function foo(){
	var a = 3;
	console.log( "In foo(), a = ", a ); // 3
}

foo();

console.log( "outside of foo(), a = ", a ); // 2

console.log( "foo = ", foo );
