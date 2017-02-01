/* closure example, "Up and Going", page 50 */
function User(){

	var username;
	var password;

	function doLogin(username_in, password_in){
		username = username_in;
		password = password_in;
	}

	function doGetUsername(){
		return username;
	}

	function doGetPassword(){
		return password;
	}

	var public_interface = {
		login: doLogin, 
		getUsername: doGetUsername,
		getPassword: doGetPassword,
	};

	return public_interface;
}

var joeKoe = User();
joeKoe.login("JoeKovacs", "pass1234");
console.log("username = ", joeKoe.getUsername());
console.log("password = ", joeKoe.getPassword());

/* closure example, "Up and Going", page 48 */
function makeAdder(x){
	function add(what){
		return what + x; 
	}

	return add;
}

var addFive = makeAdder(5);
var addSix = makeAdder(6);
console.log("addFive(12) = ", addFive(12) );
console.log("addSix(12) = ", addSix(12) );
