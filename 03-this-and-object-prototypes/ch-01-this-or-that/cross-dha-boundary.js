console.log("Attempt to cross the boundary between \"this\" and lexical scope lookups...");

function bar(){
	var sWho = "bar";
	// Use template literals...
	console.log( `${sWho}(): this.a = ${this.a}` );
}

console.log("Foolish developer...");

function foo(){
	var a = 2;
	this.bar();
}


try {
	foo();
}catch (e){
		if (e instanceof TypeError) {
			console.log("Caught TypeError exception while calling foo():");
		}
		else {
			console.log("Caught Error exception while calling foo():");
		}

console.log("=====================");
console.log("e = ", e);
console.log("=====================");
console.log("e.message = ", e.message);              // "null has no properties"
console.log("e.name = ", e.name);                 // "TypeError"
console.log("e.filename = ", e.fileName);             // "Scratchpad/1"
console.log("e.lineNumber = ", e.lineNumber);           // 2
console.log("e.columnNumber = ", e.columnNumber);         // 2
console.log("e.stack = ", e.stack);                // "@Scratchpad/2:2:3\n"
console.log("=====================");

}

console.log("\nPerverted but wise developer...");

function goo(){
	var ao = { a:2, b:3 };
	bar.call( ao );
}

goo();
