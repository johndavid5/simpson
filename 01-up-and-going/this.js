//"use strict";

function foo(){
	console.log( this.bar );
}

//bar = "global";
var bar = "global";
//global.bar = "global";

var obj1 = {
	bar: "obj1",
	foo: foo
};

var obj2 = {
	bar: "obj2"
};

// -----------

foo();  // "global" 
		// => foo() sets this set equal to global object in non-strict mode
		// in strict mode this would be undefined


obj1.foo(); // "obj1"
			// => obj1.foo() sets this to the obj1 object.

foo.call( obj2 ); // "obj2"
				  // foo.call( obj2 ) sets this to the obj2 object

new foo(); // undefined
			//new foo() sets this to the brand new empty object.

//console.log("global = ", global );

/** 
* global#
* Added in: v0.1.27
* <Object> The global namespace object.
* In browsers, the top-level scope is the global scope. That means that in browsers if you're in the global scope
* var something will define a global variable. In Node.js this is different. The top-level scope is not the global
* scope; var something inside an Node.js module will be local to that module.
*/

