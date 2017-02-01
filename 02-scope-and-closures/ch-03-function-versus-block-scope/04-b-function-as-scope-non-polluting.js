var a = 2;

// function foo() is an expression
// rather than a declaration...

// RULE: If function is the very
// first thing in the statement, then
// it's a function declaration, otherwise
// it's a function expression.

// Also, because of the (); at the end,
// we have an "IIFE" -- an immediately invoked
// function expression.
(function foo(){

	var a = 3;
	console.log( "Inside of foo(), a = ", a ); // 3

	// The identifier foo is found only in the
	// scope of the function...or between
	// { and }...
	console.log( "Inside of foo(), foo = ", foo ); // 3

})();


console.log( "Outside of foo(), a = ", a ); // 2

console.log( "foo = ", foo ); // Reference Error
