function foo(){

	function bar(a){

		var sWho = "bar";

		var i = 3; 
		//i = 3; 
				// if you don't use "var", you change
				// the 'i' in the enclosing
			   // scope's for-loop...making a mess...

		console.log( sWho + "(): a = ", a, ", i = ", i, "\n", "a + i =", a + i );
	}


	for( var i = 0; i < 10; i++ ){
		bar( i + 2 ); // oops, infinite loop ahead!
	}

}/* foo() */

foo();
