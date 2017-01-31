function foo() {
	console.log( "this = ", this );
	console.log( "this.bar = ", this.bar );
}

var bar = "global";

var obj1 = { bar: "obj1", foo: foo };

var obj2 = { bar: "obj2" };

// --------
console.log("foo()...");
foo(); // "global" 

console.log("obj1.foo()...");
obj1.foo(); // "obj1"

console.log("foo.call( obj2 )...");
foo.call( obj2 ); // "obj2"

console.log("new foo()...");
new foo(); // undefined

