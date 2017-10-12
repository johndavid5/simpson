
console.log( "" );

// For node 8.x, explicitly set a to
// belong to the "global" object,
// since it doesn't default to it...
// In a browser, you'd do
//    window.a = 2
console.log( "global.a = 2;...foo();..." );
global.a = 2;
foo();

var obj = {
	a: 3,
	foo: foo
};
console.log(
`
 When there is a context object for a
 function reference, the _implicit_ _binding_
 rule says that it's _that_ object that should
 be used for the function call's _this_
 binding.
`);

console.log( "var obj = ", obj, ";...obj.foo();...");
obj.foo();


console.log(
`
 Only the top/last level of an object
 property reference chain matters to
 the call site.
`);

var obj2 = {
	a: "obj2",
	foo: foo
};

var obj1 = {
	a: "obj1",
	obj2: obj2
};

console.log( "obj1.obj2.foo();...");
obj1.obj2.foo();

