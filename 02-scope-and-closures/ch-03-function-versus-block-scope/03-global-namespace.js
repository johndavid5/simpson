// Create a single variable declaration
// with a unique name in the global scope,
// and use it as a "namespace" for your
// library to avoid collisions...
var MyReallyCoolLibrary = {

	awesome: "stuff",

	doSomething: function(){
		console.log("MyReallyCoolLibrary::doSomething()...");
	},

	doAnotherThing: function(){
		console.log("MyReallyCoolLibrary::doAnotherThing()...");
	},
}

console.log( "MyReallyCoolLibrary.awesome  = ", MyReallyCoolLibrary.awesome );
MyReallyCoolLibrary.doSomething();
MyReallyCoolLibrary.doAnotherThing();
