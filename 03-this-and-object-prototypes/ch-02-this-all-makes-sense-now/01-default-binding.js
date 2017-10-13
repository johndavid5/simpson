function foo(){
	var sWho = "foo";
	console.log( `${sWho}(): this.a = ${this.a}...` );
	console.log( `${sWho}(): this.b = ${this.b}...` );
	console.log( `${sWho}(): this.c = ${this.c}...` );
}

console.log( `
 default binding...
`);

console.log( "var a = 1;");
var a = 1;

console.log( "b = 2;");
b = 2;

console.log( "global.c = 3;");
global.c = 3;

console.log( "foo()...");
foo();
