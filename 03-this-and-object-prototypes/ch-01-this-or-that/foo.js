console.log("Instead of avoiding \"this\", we embrace it...\n");

function foo(num){

	// keeps track of how many times "foo" 
    // is called
    // Nota Bene: "this" is actually "foo" now
    // based on how "foo" is called (see below)
	this.count++;

	console.log( "foo(" , num , "), this.count =" , this.count ); 
}

foo.count = 0;

var i;
for( i = 0; i < 10; i++ ){
	if( i > 5 ){
		// Using 'call(...)', we ensure
		// the "this" points at the function
		// object ('foo') itself
		foo.call( foo, i );
	}
}

console.log("foo.count = ", foo.count );
