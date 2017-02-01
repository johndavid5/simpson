var a = 1; // In node, this is NOT in the global scope...
// a = 2; // In node, this is in the global scope...you hafta explicitly use global.a...
global.a = 3;

// Common syntax: ( function foo(...){...})(...);
(function foo(global_object){
	var a = 4;
	console.log( "inside foo() IIFE: a = ", a);
	console.log( "inside foo() IIFE: global_object.a = ", global_object.a);
})(global);

(function (global_object){
	var a = 4;
	console.log( "inside anonymous IIFE: a = ", a);
	console.log( "inside anonymous IIFE: global_object.a = ", global_object.a);
})(global);

// Note alternative syntax: ( function bar(...){...}(...));
(function bar(global_object){
	var a = 4;
	console.log( "inside bar() IIFE: a = ", a);
	console.log( "inside bar() IIFE: global_object.a = ", global_object.a);
}(global));

console.log( "outside IIFE: a = ", a );
console.log( "outside IIFE: global.a = ", global.a );
