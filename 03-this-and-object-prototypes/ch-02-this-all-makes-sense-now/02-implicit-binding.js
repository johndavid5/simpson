function foo(){
	console.log( "foo(): this = ", this );
	console.log( "foo(): this.a = ", this.a );
}

var obj = {
	a: 42,
	my_foo: foo
};

console.log("obj.a = ", obj.a );
global.a = 22;
console.log("global.a = ", global.a );

console.log("Calling obj.my_foo()...\n");
obj.my_foo();
