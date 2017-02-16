function CoolModule(id){

	function identify(){
		console.log("CoolModule::id=" + id );
	}

	function identifyVerbose(){
		console.log("CoolModule::My id is " + id );
	}

	function setVerbose(bVerbose){
		if( bVerbose ){
			publicAPI.identify = identifyVerbose;
		}
		else {
			publicAPI.identify = identify;
		}
	}

	var publicAPI = {
		identify: identify,
		setVerbose: setVerbose
	};

	return publicAPI;
}

var moe = CoolModule("Moe");
var larry = CoolModule("Larry");
var shemp = CoolModule("Shemp");

moe.identify();
larry.identify();
shemp.identify();

moe.setVerbose(true);
moe.identify();
moe.setVerbose(false);
moe.identify();
larry.identify();
shemp.identify();

console.log("Let off some steam, Bennett!");
