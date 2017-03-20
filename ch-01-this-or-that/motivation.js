function identify(){
	return this.name.toUpperCase();
}

function speak() {
	var greeting = "Hello, I'm " + identify.call( this );
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
"This code snippet allows the identify()\n" +
"and speak() functions to be reused against\n" +
"multiple ~context~ objects(~me~ and ~you~), rather\n" +
"than needing a separate version of the\n" +
"function for each object."
);


console.log( identify.call( me ) ); // KYLE
console.log( identify.call( you ) ); // READER
speak.call( me ); // Hello, I'm KYLE.
speak.call( you ); // Hello, I'm READER.
