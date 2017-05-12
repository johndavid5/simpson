function identify(){
	return this.name.toUpperCase();
}

function speak() {
	var greeting = "Hello, I'm " + identify.call( this ); // This context passed to identify via call()...
	// var greeting = "Hello, I'm " + identify(); -- ERROR this context not automatically passed to identify();
	console.log( greeting );
}

var me = {
	name: "Kyle",
	number: 5
};

var you = {
	name: "Reader"
};

console.log(
`--------------------------------------------------
This code snippet allows -- by virtue of the magic
of the
	 	object.call( context )
method -- the identify() and speak() functions to be reused against
multiple "context" objects(_me_ and _you_), rather
than needing a separate version of the
function for each object.
--------------------------------------------------
`
);


console.log( "=========================");
console.log( "identify = ", identify );
console.log( "=========================");

try {
	console.log( "identify() = ");
	console.log( identify() );
}catch(e){
	console.log("SHEMP: Moe, caught exception e = \n" + "=========\n", e, "\n========\n" );
}
finally{
	console.log("And, finally...");
}

console.log( "identify.call( me ) = ", identify.call( me ) ); // KYLE
console.log( "identify.call( you ) = ", identify.call( you ) ); // READER

console.log( "speak.call( me )..." ); // KYLE
speak.call( me ); // Hello, I'm KYLE.

console.log( "speak.call( you )..." ); // KYLE
speak.call( you ); // Hello, I'm READER.

console.log("Let off some steam, Bennett!");
